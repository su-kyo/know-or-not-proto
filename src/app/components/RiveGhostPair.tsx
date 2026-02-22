/**
 * RiveGhostPair
 *
 * Layout footprint of each ghost: SLOT_W × SLOT_H (200 × 200 px).
 *
 * The Rive canvas is physically taller (CANVAS_H = 320 px) and sits
 * position:absolute with bottom:0, so it overflows UPWARD by 120 px.
 * That headroom lets hover/grow animations render without being clipped
 * by the canvas boundary (canvas clips its own content — CSS overflow
 * has no effect on what Rive draws).
 *
 * Fit.Contain + Alignment.BottomCenter → character is scaled to fill
 * the canvas width and anchored to the canvas bottom edge.
 *
 * All ancestor divs use overflow:visible so the upward overflow shows.
 */

import { useRef, useCallback, memo, CSSProperties } from 'react';
import {
  useRive,
  useStateMachineInput,
  Layout,
  Fit,
  Alignment,
} from '@rive-app/react-canvas';

// ── Constants ────────────────────────────────────────────────────────────────

const RIV_SRC = '/source/ghosts_3.riv';
const SM_NAME = 'ghost';
const EXIT_ANIMATION_MS = 2000;

// Layout footprint each ghost occupies in the flex row
const SLOT_W = '200px';
const SLOT_H = '200px';

// Actual canvas dimensions — wider = SLOT_W, taller = 1.6× for grow room
const CANVAS_H = '320px'; // overflows 120 px upward from SLOT_H

// Hit zone height (sign / label area at the ghost base)
const HIT_ZONE_H = '90px';

// ── Types ────────────────────────────────────────────────────────────────────

export interface RiveGhostPairProps {
  onKnowClick?: () => void;
  onDontKnowClick?: () => void;
  visible?: boolean;
}

// ── Component ────────────────────────────────────────────────────────────────

function RiveGhostPair({ onKnowClick, onDontKnowClick, visible = true }: RiveGhostPairProps) {
  const isLocked = useRef(false);

  // ── Left — ghost-yes (알아요) ─────────────────────────────────────────────

  const { rive: riveYes, RiveComponent: GhostYes } = useRive({
    src: RIV_SRC,
    artboard: 'ghost-yes',
    stateMachines: SM_NAME,
    autoplay: true,
    // Fit.Contain scales the artboard to fill the canvas; BottomCenter pins
    // the character's base to the canvas bottom edge.
    layout: new Layout({ fit: Fit.Contain, alignment: Alignment.BottomCenter }),
  });

  const hoverYes = useStateMachineInput(riveYes, SM_NAME, 'hover');
  const selectedYes = useStateMachineInput(riveYes, SM_NAME, 'selected');
  const notSelectedYes = useStateMachineInput(riveYes, SM_NAME, 'notSelected');

  // ── Right — ghost-no (몰라요) ─────────────────────────────────────────────

  const { rive: riveNo, RiveComponent: GhostNo } = useRive({
    src: RIV_SRC,
    artboard: 'ghost-no',
    stateMachines: SM_NAME,
    autoplay: true,
    layout: new Layout({ fit: Fit.Contain, alignment: Alignment.BottomCenter }),
  });

  const hoverNo = useStateMachineInput(riveNo, SM_NAME, 'hover');
  const selectedNo = useStateMachineInput(riveNo, SM_NAME, 'selected');
  const notSelectedNo = useStateMachineInput(riveNo, SM_NAME, 'notSelected');

  // ── Handlers ──────────────────────────────────────────────────────────────

  const handleClickYes = useCallback(() => {
    if (isLocked.current) return;
    isLocked.current = true;
    selectedYes?.fire();
    notSelectedNo?.fire();
    if (onKnowClick) setTimeout(onKnowClick, EXIT_ANIMATION_MS);
  }, [selectedYes, notSelectedNo, onKnowClick]);

  const handleClickNo = useCallback(() => {
    if (isLocked.current) return;
    isLocked.current = true;
    selectedNo?.fire();
    notSelectedYes?.fire();
    if (onDontKnowClick) setTimeout(onDontKnowClick, EXIT_ANIMATION_MS);
  }, [selectedNo, notSelectedYes, onDontKnowClick]);

  const handleEnterYes = useCallback(() => { if (hoverYes) hoverYes.value = true; }, [hoverYes]);
  const handleLeaveYes = useCallback(() => { if (hoverYes) hoverYes.value = false; }, [hoverYes]);
  const handleEnterNo = useCallback(() => { if (hoverNo) hoverNo.value = true; }, [hoverNo]);
  const handleLeaveNo = useCallback(() => { if (hoverNo) hoverNo.value = false; }, [hoverNo]);

  // ── Styles ────────────────────────────────────────────────────────────────

  const outerVisibility: CSSProperties = {
    opacity: visible ? 1 : 0,
    transition: 'opacity 500ms ease-out',
  };

  /*
   * Slot div — sets the 200×200 footprint in the flex row.
   * overflow:visible lets the taller canvas poke upward without clipping.
   */
  const slotStyle: CSSProperties = {
    position: 'relative',
    width: SLOT_W,
    height: SLOT_H,
    flexShrink: 0,
    overflow: 'visible',
  };

  /*
   * Canvas wrapper — absolute, pinned to slot bottom.
   * Width matches slot; height is 1.6× so hover animation has headroom above.
   */
  const canvasWrapStyle: CSSProperties = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: CANVAS_H,
    pointerEvents: 'none',
  };

  const canvasStyle: CSSProperties = {
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    display: 'block',
  };

  /*
   * Hit zone — covers the sign/label area at the bottom of the slot.
   * pointer-events only when component is visible.
   */
  const hitZone: CSSProperties = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: HIT_ZONE_H,
    cursor: 'pointer',
    pointerEvents: visible ? 'auto' : 'none',
  };

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    /*
     * Full-width bar anchored to the parent's bottom edge.
     * overflow:visible required so canvas headroom is not clipped.
     */
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        pointerEvents: 'none',
        overflow: 'visible',
        ...outerVisibility,
      }}
    >
      {/* Centered container — caps max spread on large screens */}
      <div
        style={{
          width: '100%',
          maxWidth: '960px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          overflow: 'visible',
        }}
      >
        {/* Left ghost — ghost-yes (알아요) */}
        <div style={slotStyle}>
          <div style={canvasWrapStyle}>
            <GhostYes style={canvasStyle} />
          </div>
          <div
            style={hitZone}
            onClick={handleClickYes}
            onMouseEnter={handleEnterYes}
            onMouseLeave={handleLeaveYes}
          />
        </div>

        {/* Right ghost — ghost-no (몰라요) */}
        <div style={slotStyle}>
          <div style={canvasWrapStyle}>
            <GhostNo style={canvasStyle} />
          </div>
          <div
            style={hitZone}
            onClick={handleClickNo}
            onMouseEnter={handleEnterNo}
            onMouseLeave={handleLeaveNo}
          />
        </div>
      </div>
    </div>
  );
}

export default memo(RiveGhostPair);

import { useState, useRef, useCallback, useEffect, Component, ReactNode } from 'react';
import Stage1Initial from './components/Stage1Initial';

// ── Temporary debug ErrorBoundary ─────────────────────────────────────────────
class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null };
  static getDerivedStateFromError(error: Error) { return { error }; }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 32, background: '#1a0000', color: '#ff6b6b', fontFamily: 'monospace', whiteSpace: 'pre-wrap', zIndex: 9999, position: 'absolute', inset: 0, overflow: 'auto' }}>
          <strong>💥 Runtime Error — {(this.state.error as Error).name}</strong>{'\n\n'}
          {(this.state.error as Error).message}{'\n\n'}
          {(this.state.error as Error).stack}
        </div>
      );
    }
    return this.props.children;
  }
}
// ─────────────────────────────────────────────────────────────────────────────
import Stage2Input from './components/Stage2Input';
import Stage3Completion from './components/Stage3Completion';
import CorrectOverlay from './components/CorrectOverlay';
import MaterialModal from './components/MaterialModal';
import RiveBackground from './components/RiveBackground';
import RiveConfetti, { RiveConfettiRef } from './components/RiveConfetti';
import StageSelector from './components/StageSelector';

type Stage = 'initial' | 'input-know' | 'input-dontknow' | 'completion';

const PUMPKIN_EXIT_MS = 600;
const SHAKE_MS = 600;

export default function App() {
  const [multilingualUI, setMultilingualUI] = useState<boolean | null>(null);
  const [stage, setStage] = useState<Stage>('initial');
  const [livesRemaining, setLivesRemaining] = useState(2);
  const [showExamples, setShowExamples] = useState(false);
  const [showCorrectOverlay, setShowCorrectOverlay] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
  const [pumpkinsExiting, setPumpkinsExiting] = useState(false);
  const [shakingPumpkin, setShakingPumpkin] = useState<'left' | 'right' | null>(null);
  const [instantExamplesReveal, setInstantExamplesReveal] = useState(false);
  const [completionInstantReveal, setCompletionInstantReveal] = useState(false);
  const confettiRef = useRef<RiveConfettiRef>(null);

  // Refs for stable closure access
  const showExamplesRef = useRef(showExamples);
  useEffect(() => { showExamplesRef.current = showExamples; }, [showExamples]);

  const livesRef = useRef(2);
  const isWrongProcessing = useRef(false);

  const handleKnowClick = useCallback(() => {
    setStage('input-know');
    setShowExamples(false);
  }, []);

  const handleDontKnowClick = useCallback(() => {
    setStage('input-dontknow');
    // Delay showExamples so Stage2Input mounts collapsed first,
    // then the InfoBox CSS transition animates the examples in.
    setTimeout(() => setShowExamples(true), 50);
  }, []);

  // Shake the appropriate pumpkin first, then decrement lives after shake ends.
  // Left pumpkin (isActive = lives >= 2) goes dark on first wrong answer.
  // Right pumpkin (isActive = lives >= 1) goes dark on second wrong answer.
  const handleWrongAnswer = useCallback(() => {
    if (isWrongProcessing.current) return;
    const lives = livesRef.current;
    if (lives <= 0) return;

    isWrongProcessing.current = true;
    const pumpkin: 'left' | 'right' = lives >= 2 ? 'left' : 'right';
    setShakingPumpkin(pumpkin);

    setTimeout(() => {
      setShakingPumpkin(null);
      setLivesRemaining(prev => {
        const next = Math.max(0, prev - 1);
        livesRef.current = next;
        return next;
      });
      isWrongProcessing.current = false;
    }, SHAKE_MS);
  }, []);

  useEffect(() => {
    if (livesRemaining === 0) {
      // Brief pause so user sees both pumpkins dark, then exit animation
      const pauseTimer = setTimeout(() => setPumpkinsExiting(true), 300);
      const revealTimer = setTimeout(() => {
        setPumpkinsExiting(false);
        setInstantExamplesReveal(false);
        // Switch stage first (showExamples still false so InfoBox starts collapsed)
        setStage('input-dontknow');
        // After a tick, trigger showExamples so the CSS transition animates in
        setTimeout(() => setShowExamples(true), 50);
      }, 300 + PUMPKIN_EXIT_MS + 100);
      return () => { clearTimeout(pauseTimer); clearTimeout(revealTimer); };
    }
  }, [livesRemaining]);

  const handleCorrectAnswer = useCallback(() => {
    const alreadyShowingExamples = showExamplesRef.current;

    // Pumpkins only exist in non-examples mode; exit them if present
    if (!alreadyShowingExamples) {
      setPumpkinsExiting(true);
    }

    // Confetti fires slightly after pumpkins start exiting
    setTimeout(() => {
      confettiRef.current?.trigger();
      setShowCorrectOverlay(true);
    }, 100);

    if (!alreadyShowingExamples) {
      // 알아요 path — fade content out before switching to completion
      // NOTE: do NOT reset pumpkinsExiting here; they stay in exit state until
      // Stage2Input unmounts at 1400ms, preventing the bounce-back glitch.
      setTimeout(() => {
        setShowCorrectOverlay(false);
        setIsTransitioning(true);
      }, 1000);
      setTimeout(() => {
        setCompletionInstantReveal(false);
        setStage('completion');
        setIsTransitioning(false);
      }, 1400);
    } else {
      // 몰라요 path — examples already showing; switch instantly (no fade, no entry animation)
      setTimeout(() => {
        setShowCorrectOverlay(false);
        setCompletionInstantReveal(true);
        setStage('completion');
      }, 1000);
    }
  }, []);

  const handleNextQuestion = useCallback(() => {
    setStage('initial');
    setLivesRemaining(2);
    livesRef.current = 2;
    setShowExamples(false);
    setShowCorrectOverlay(false);
    setIsTransitioning(false);
    setPumpkinsExiting(false);
    setShakingPumpkin(null);
    setInstantExamplesReveal(false);
    setCompletionInstantReveal(false);
    isWrongProcessing.current = false;
  }, []);

  const handleMaterialClick = useCallback((material: string) => {
    setSelectedMaterial(material);
  }, []);

  const handleCloseMaterial = useCallback(() => {
    setSelectedMaterial(null);
  }, []);

  return (
    /*
     * min-h-screen + overflow-y-auto: allows scrolling on small viewports.
     * RiveBackground uses position:fixed so it always covers the viewport
     * regardless of scroll position.
     */
    <div className="relative w-full min-h-screen overflow-hidden">
      <RiveBackground />
      <RiveConfetti ref={confettiRef} />

      {multilingualUI === null && (
        <StageSelector onSelect={setMultilingualUI} />
      )}

      {multilingualUI !== null && stage === 'initial' && (
        <ErrorBoundary>
          <Stage1Initial
            onKnowClick={handleKnowClick}
            onDontKnowClick={handleDontKnowClick}
            onMaterialClick={handleMaterialClick}
            multilingualUI={multilingualUI}
          />
        </ErrorBoundary>
      )}

      {multilingualUI !== null && (stage === 'input-know' || stage === 'input-dontknow') && (
        <Stage2Input
          showExamples={showExamples}
          livesRemaining={livesRemaining}
          onWrongAnswer={handleWrongAnswer}
          onCorrectAnswer={handleCorrectAnswer}
          onMaterialClick={handleMaterialClick}
          isTransitioning={isTransitioning}
          pumpkinsExiting={pumpkinsExiting}
          multilingualUI={multilingualUI}
          shakingPumpkin={shakingPumpkin}
          instantExamplesReveal={instantExamplesReveal}
        />
      )}

      {multilingualUI !== null && stage === 'completion' && (
        <Stage3Completion
          onMaterialClick={handleMaterialClick}
          multilingualUI={multilingualUI}
          instantReveal={completionInstantReveal}
          onNextQuestion={handleNextQuestion}
        />
      )}

      {showCorrectOverlay && <CorrectOverlay />}

      {selectedMaterial && (
        <MaterialModal
          material={selectedMaterial}
          onClose={handleCloseMaterial}
        />
      )}
    </div>
  );
}

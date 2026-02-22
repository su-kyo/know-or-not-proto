import { memo } from 'react';
import { X } from 'lucide-react';

interface MaterialModalProps {
  material: string;
  onClose: () => void;
}

function MaterialModal({ material, onClose }: MaterialModalProps) {
  const isVideo = material.includes('영상');

  return (
    <div 
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-[16px] p-[32px] max-w-[600px] animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-[16px] right-[16px] p-[8px] rounded-full hover:bg-gray-100 transition-colors"
        >
          <X size={24} className="text-gray-600" />
        </button>

        <div className="flex items-center justify-center">
          {isVideo ? (
            <div className="bg-gray-300 w-[500px] h-[300px] flex items-center justify-center rounded-[12px]">
              <div className="text-gray-600 font-['Noto_Sans_KR:Bold',sans-serif] text-[24px]">
                {material}
              </div>
            </div>
          ) : (
            <div className="bg-gray-300 w-[400px] h-[400px] flex items-center justify-center rounded-[12px]">
              <div className="text-gray-600 font-['Noto_Sans_KR:Bold',sans-serif] text-[24px]">
                {material}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(MaterialModal);

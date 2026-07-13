import React, { useState, useEffect, useRef } from 'react';

const AudioPlayer = ({ 
  audioUrl, 
  isPlaying, 
  onPlayPause, 
  onEnded, 
  currentAyahIndex, 
  totalAyahs, 
  onNext, 
  onPrev 
}) => {
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log("Audio play error", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, audioUrl]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      setProgress((current / duration) * 100 || 0);
    }
  };

  const handleProgressClick = (e) => {
    if (audioRef.current) {
      const bounds = e.currentTarget.getBoundingClientRect();
      const percent = (e.clientX - bounds.left) / bounds.width;
      audioRef.current.currentTime = percent * audioRef.current.duration;
    }
  };

  if (!audioUrl) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-md border-t border-white/10 p-4 md:p-5 z-50 transform transition-transform duration-300 translate-y-0">
      
      {/* Progress Bar */}
      <div 
        className="absolute top-0 left-0 right-0 h-1 bg-gray-800 cursor-pointer"
        onClick={handleProgressClick}
      >
        <div 
          className="h-full bg-[#29A6B6] transition-all duration-100 ease-linear relative"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(41,166,182,0.8)] scale-0 md:scale-100 transition-transform"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
        
        {/* Info */}
        <div className="flex-1 min-w-0 hidden sm:block">
          <p className="text-white font-bold text-sm truncate">Ayat {currentAyahIndex + 1}</p>
          <p className="text-gray-400 text-xs mt-0.5 truncate">dari {totalAyahs} ayat</p>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 md:gap-8 flex-1">
          <button 
            onClick={onPrev}
            disabled={currentAyahIndex === 0}
            className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white disabled:opacity-30 disabled:hover:text-gray-400 transition-colors"
          >
            <i className="fas fa-step-backward"></i>
          </button>
          
          <button 
            onClick={onPlayPause}
            className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#29A6B6] to-[#349B48] text-white flex items-center justify-center text-xl shadow-[0_10px_20px_rgba(41,166,182,0.3)] hover:scale-105 active:scale-95 transition-all"
          >
            <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'} ml-${isPlaying ? '0' : '1'}`}></i>
          </button>
          
          <button 
            onClick={onNext}
            disabled={currentAyahIndex === totalAyahs - 1}
            className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white disabled:opacity-30 disabled:hover:text-gray-400 transition-colors"
          >
            <i className="fas fa-step-forward"></i>
          </button>
        </div>

        {/* Volume / Extra - Space filler for flex balance */}
        <div className="flex-1 hidden sm:flex justify-end">
          <div className="w-10 h-10 flex items-center justify-center text-gray-400">
            <i className="fas fa-volume-up"></i>
          </div>
        </div>

      </div>

      <audio 
        ref={audioRef}
        src={audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onEnded={onEnded}
      />
    </div>
  );
};

export default AudioPlayer;

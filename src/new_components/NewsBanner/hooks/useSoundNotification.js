import { useRef, useCallback, useEffect } from "react";

export const useSoundNotification = (enableSound, soundFile) => {
  const audioRef = useRef(null);
  const hasUserInteractedRef = useRef(false);

  useEffect(() => {
    const handleFirstInteraction = () => {
      hasUserInteractedRef.current = true;
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
          })
          .catch(() => {});
      }

      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("keydown", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
    };

    if (enableSound && soundFile) {
      audioRef.current = new Audio(soundFile);
      audioRef.current.volume = 0.3;
      audioRef.current.preload = "auto";
      audioRef.current.load();

      document.addEventListener("click", handleFirstInteraction);
      document.addEventListener("keydown", handleFirstInteraction);
      document.addEventListener("touchstart", handleFirstInteraction);

      audioRef.current
        .play()
        .then(() => {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
          hasUserInteractedRef.current = true;
        })
        .catch(() => {});
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }

      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("keydown", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, [enableSound, soundFile]);

  const playSound = useCallback(() => {
    if (!enableSound || !audioRef.current) return;

    if (hasUserInteractedRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((error) => {
        console.debug(
          "Audio play failed (user already interacted):",
          error.name
        );
      });
    } else {
      console.debug("Audio autoplay blocked - user needs to interact first");

      const handleNextInteraction = () => {
        hasUserInteractedRef.current = true;
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
        document.removeEventListener("click", handleNextInteraction);
      };

      document.addEventListener("click", handleNextInteraction);
    }
  }, [enableSound]);

  return playSound;
};

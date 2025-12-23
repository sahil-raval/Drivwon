import { useEffect, useRef, useState } from "react";
import { Howl, Howler } from "howler";

export function useAudio() {
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const bgMusicRef = useRef<Howl | null>(null);
  const clickSoundRef = useRef<Howl | null>(null);
  const hoverSoundRef = useRef<Howl | null>(null);

  useEffect(() => {
    const unlockAudio = async () => {
      if (hasInteracted) return;
      setHasInteracted(true);

      if (Howler.ctx?.state !== "running") {
        await Howler.ctx.resume();
      }

      clickSoundRef.current = new Howl({
        src: ["https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3"],
        volume: 0.4,
        rate: 1.5,
      });

      hoverSoundRef.current = new Howl({
        src: ["https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3"],
        volume: 0.4,
      });

      bgMusicRef.current = new Howl({
        src: ["/background.mp3"], // MUST be in /public
        loop: true,
        html5: true,
        volume: 0.2,
      });

      // ▶️ START MUSIC IMMEDIATELY AFTER FIRST INTERACTION
      bgMusicRef.current.play();
    };

    window.addEventListener("pointerdown", unlockAudio, { once: true });
    window.addEventListener("keydown", unlockAudio, { once: true });

    return () => {
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
    };
  }, [hasInteracted]);

  const playHover = () => {
    if (!isMuted) hoverSoundRef.current?.play();
  };

  const playClick = () => {
    if (!isMuted) clickSoundRef.current?.play();
  };

  const toggleMute = () => {
    if (!bgMusicRef.current) return;

    if (isMuted) {
      setIsMuted(false);
      bgMusicRef.current.volume(0.2);
      bgMusicRef.current.play();
    } else {
      setIsMuted(true);
      bgMusicRef.current.fade(0.2, 0, 500);
    }
  };

  return { playHover, playClick, toggleMute, isMuted };
}

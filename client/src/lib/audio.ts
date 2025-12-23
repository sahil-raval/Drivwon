import { useRef, useState } from "react";
import { Howl, Howler } from "howler";

export function useAudio() {
  const [isMuted, setIsMuted] = useState(false);
  const [started, setStarted] = useState(false);

  const bgMusicRef = useRef<Howl | null>(null);
  const clickSoundRef = useRef<Howl | null>(null);
  const hoverSoundRef = useRef<Howl | null>(null);

  // 🚨 MUST be triggered by a real user interaction
  const startAudio = () => {
    if (started) return;
    setStarted(true);

    if (Howler.ctx?.state !== "running") {
      Howler.ctx.resume();
    }

    clickSoundRef.current = new Howl({
      src: ["https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3"],
      volume: 0.4,
      rate: 1.5,
    });

    hoverSoundRef.current = new Howl({
      src: ["https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3"],
      volume: 0.3,
    });

    bgMusicRef.current = new Howl({
      src: ["/background.mp3"], // ✅ CORRECT FOR client/public
      loop: true,
      html5: true,
      volume: 0,
      preload: true,
    });

    if (!isMuted && bgMusicRef.current) {
      const id = bgMusicRef.current.play();
      bgMusicRef.current.fade(0, 0.2, 3000, id);
    }
  };

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
      Howler.mute(false);
      const id = bgMusicRef.current.play();
      bgMusicRef.current.fade(0, 0.2, 1000, id);
    } else {
      setIsMuted(true);
      bgMusicRef.current.fade(0.2, 0, 1000);
      setTimeout(() => Howler.mute(true), 1000);
    }
  };

  return {
    startAudio,
    playHover,
    playClick,
    toggleMute,
    isMuted,
  };
}

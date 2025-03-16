import { useState, useEffect } from "react";
import song from "./song.mp3";
import { PlayCircle, PauseCircle } from "lucide-react";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(
    new Audio(song)
  ); // Replace with your audio URL

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Pause the audio when the component unmounts
  useEffect(() => {
    return () => {
      audio.pause();
    };
  }, [audio]);

  return (
    <button
      className="font-bold bg-buttonbg text-lg p-3 rounded-xl flex items-center gap-2"
      onClick={toggleMusic}
    >
      {isPlaying ? <PauseCircle size={24} /> : <PlayCircle size={24} />}
    </button>
  );
};

export default AudioPlayer;

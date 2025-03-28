import { useState, useEffect } from "react";
import song from "./song.aac";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(song)); // Replace with your audio URL

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
      className="font-bold  text-lg  rounded-xl flex items-center gap-2"
      onClick={toggleMusic}
    >
      <abbr title="Fav Song" className="text-prim font-bold">
        {isPlaying ? <FaPauseCircle size={27} /> : <FaPlayCircle size={27} />}
      </abbr>
    </button>
  );
};

export default AudioPlayer;

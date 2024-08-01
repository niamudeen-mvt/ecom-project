import { useState } from "react";
import Audio1 from "../assets/audios/file_example_MP3_700KB.mp3";
import Audio4 from "../assets/audios/Free_Test_Data_1MB_MP3.mp3";
import AudioPlayer from "../components/AudioPlayer";

const AUDIO_FILES = [Audio1, Audio4];

export default function DashboardPage() {
  const [activeAudioId, setActiveAudioId] = useState(null);

  const handlePlay = (id) => {
    setActiveAudioId(id);
  };
  return (
    <>
      {AUDIO_FILES &&
        AUDIO_FILES.length > 0 &&
        AUDIO_FILES.map((audio, index) => {
          return (
            <AudioPlayer
              key={index}
              src={audio}
              id={index}
              isActive={activeAudioId === index}
              onPlay={() => handlePlay(index)}
            />
          );
        })}
    </>
  );
}

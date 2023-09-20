import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
const App = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="flex flex-col  justify-center items-center h-screen w-screen text-2xl text-black">
      <h1 className="m-2">Speech to Text Converter</h1>
      <div>
        <p>{transcript}</p>
      </div>
      <div className="flex flex-row justify-between items-center  ">
        <button
          onClick={SpeechRecognition.startListening}
          type="button"
          className="btn btn-secondary text-black p-2 m-2 "
        >
          Start Listening
        </button>
        <button
          onClick={SpeechRecognition.stopListening}
          type="button"
          className="btn btn-secondary text-black p-2 m-2"
        >
          Stop Listening
        </button>
        <button
          onClick={resetTranscript}
          type="button"
          className="btn btn-secondary text-black p-2 m-2"
        >
          Reset
        </button>
      </div>
      <p>Microphone: {listening ? "on" : "off"}</p>
    </div>
  );
};

export default App;

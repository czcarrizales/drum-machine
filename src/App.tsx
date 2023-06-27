import { useEffect, useState } from "react";
import "./App.css";

function App() {
  
  const [display, setDisplay] = useState('')
  const playAudio = (id) => {
    setDisplay(id)
    const sound = document.getElementById(id);
    sound.play();
  };

  const detectKeyDown = (e) => {
    
    const sound = document.getElementById(e.key.toUpperCase())
    sound.play()
    setDisplay(sound.id)
  }

  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true)
  
}, [])

  return (
    <div id="drum-machine">
      <h1 id="title">DRUM MACHINE</h1>
      <p id="website-creator">created by Chazz Carrizales</p>
      <div id="display">
        {display}
      </div>
      <div id="buttons">
      <button id="rim1" className="drum-pad" onClick={() => playAudio("Q")} >
          Q<audio src="audio/rim1.wav" className="clip" id="Q"></audio>
        </button>
        <button id="rim2" className="drum-pad" onClick={() => playAudio("W")}>
          W<audio src="audio/rim2.wav" className="clip" id="W"></audio>
        </button>
        <button id="snareMedium" className="drum-pad" onClick={() => playAudio("E")}>
          E<audio src="audio/snareMedium.wav" className="clip" id="E"></audio>
        </button>
        <button id="snareLoud" className="drum-pad" onClick={() => playAudio("A")}>
          A<audio src="audio/snareLoud.wav" className="clip" id="A"></audio>
        </button>
        <button id="closedSoft" className="drum-pad" onClick={() => playAudio("S")}>
          S<audio src="audio/closedSoft.wav" className="clip" id="S"></audio>
        </button>
        <button id="closedMedium" className="drum-pad" onClick={() => playAudio("D")}>
          D<audio src="audio/closedMedium.wav" className="clip" id="D"></audio>
        </button>
        <button id="closedLoud" className="drum-pad" onClick={() => playAudio("Z")}>
          Z<audio src="audio/closedLoud.wav" className="clip" id="Z"></audio>
        </button>
        <button id="kickMedium" className="drum-pad" onClick={() => playAudio("X")}>
          X<audio src="audio/kickMedium.wav" className="clip" id="X"></audio>
        </button>
        <button id="kickLoud" className="drum-pad" onClick={() => playAudio("C")}>
          C<audio src="audio/kickLoud.wav" className="clip" id="C"></audio>
        </button>
      </div>
      
    </div>
  );
}

export default App;

import "./styles/app.scss"
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import chillhop from "./data"
import { useState } from "react";


function App() {

  const [songs, setSongs] = useState(chillhop());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} setCurrentSong={setCurrentSong} />
      <Library songs={songs} setSongs={setSongs} />
    </div>
  );
}

export default App;

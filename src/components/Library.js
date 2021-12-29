import LibrarySong from "./LibrarySong";

const Library = ( {songs, setSongs, currentSong, setCurrentSong} ) => {

    
    return ( 
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song => 
                    <LibrarySong key={song.id} song={song} currentSong={currentSong} setCurrentSong={setCurrentSong} />
                )}
            </div>
        </div> 
    );
}
 
export default Library;
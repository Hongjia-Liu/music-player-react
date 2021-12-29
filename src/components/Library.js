import LibrarySong from "./LibrarySong";

<<<<<<< HEAD
const Library = ( {songs, setSongs} ) => {
=======
const Library = ( {songs} ) => {
>>>>>>> 8c6cb7d76c86b8909598533b2a7948c3afc556ba

    
    return ( 
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song => 
                    <LibrarySong key={song.id} song={song} />
                )}
            </div>
        </div> 
    );
}
 
export default Library;
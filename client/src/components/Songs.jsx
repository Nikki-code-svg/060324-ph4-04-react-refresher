import { useEffect, useState } from 'react'
import SongCard from './SongCard'

function Songs() {

    const [songs, setSongs] = useState( [] )

    useEffect(() => {
        console.log("FETCHING SONGS")
        fetch('http://localhost:5555/songs')
        .then(res => res.json())
        .then(data => setSongs(data))
    }, [])

    return <div>

        <h2>Songs:</h2>

        { songs.map( song => <SongCard key={song.id} song={song} /> ) }

    </div>

}

export default Songs
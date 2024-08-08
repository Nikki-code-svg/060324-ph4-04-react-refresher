import Navbar from './Navbar'
import { useEffect, useState } from 'react'
import SongCard from './SongCard'

function Favorites() {

    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        fetch('http://localhost:5555/favorites')
        .then(res => res.json())
        .then(data => setFavorites(data))
    }, [])


    function removeFavorite(favoriteToRemove) {
        const filteredFavs = favorites.filter(fav => fav !== favoriteToRemove)
        setFavorites(filteredFavs)
    }

    return (
        <div>

            <Navbar />

            <h1>Favorite Songs</h1>

            { favorites.map(fav => <SongCard key={fav.id} song={fav.song} fav={fav} removeFavorite={removeFavorite} />) }

        </div>
    )

}

export default Favorites
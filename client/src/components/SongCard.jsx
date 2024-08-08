function SongCard({ song, fav, removeFavorite }) {

    function handlePostFavorite() {
        fetch('http://localhost:5555/favorites', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify( { song_id: song.id } )
        })
    }

    function handleDeleteFavorite() {
        fetch(`http://localhost:5555/favorites/${fav.id}`, {
            method: 'DELETE'
        })

        removeFavorite(fav)
    }

    return (
        <div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', textAlign: 'center', justifyItems: 'center' }}>

                <h3>{ song.title }</h3>

                <p>{ song.artist }</p>

                <button className="favorite-button" onClick={ fav ? handleDeleteFavorite : handlePostFavorite }>{ fav ? "-" : "+" }</button>

                <a href={song.youtube_link} target="_blank">Link to Video</a>

            </div>

            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${song.youtube_embed}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </div>
    )

}

export default SongCard
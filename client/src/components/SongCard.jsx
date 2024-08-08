function SongCard({ song }) {

    return (
        <div>
            <h3>{ song.title }</h3>
            <p>{ song.artist }</p>
            <a href={song.youtube_link} target="_blank">Link to Video</a>
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${song.youtube_embed}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )

}

export default SongCard
function MovieCard({movie}) {

    function onFavoriteClick() {
         alert(`Added ${movie.title} to favorites!`);
    }

        return (
            <div className="movie-card">    
                <div className="movie-poster"> 
                    <img src={movie.url} alt={movie.title} />
                    <div className="movie-overly">
                        <button className="favorite-btn" onClick={onFavoriteClick}>Like</button>
                    </div>
                </div>
                <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <span>{movie.release_date}</span>
                </div>
            </div>
        );
    }



    export default MovieCard
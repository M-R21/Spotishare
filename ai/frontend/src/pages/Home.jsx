import MovieCard from "../components/MovieCard";




function Home() {
    const movies = [
        {id: 1, title: "The Shawshank Redemption", release_date: 1994},
        {id: 2, title: "The Godfather", release_date: 1972},
        {id: 3, title: "The Dark Knight", release_date: 2008},
        {id: 4, title: "12 Angry", release_date: 1957},
        {id: 5, title: "Schindler's List", release_date: 1993},
        {id: 6, title: "The Lord of the Rings: The Return of the King", release_date: 2003},
        {id: 7, title: "Pulp Fiction", release_date: 1994},
        {id: 8, title: "The Good, the Bad and the Ugly", release_date: 1966},
        {id: 9, title: "Fight Club", release_date: 1999},
        {id: 10, title: "Forrest Gump", release_date: 1994}
    ]


    return (
        <div className="home"> 
            <div className="movies-grid">
                {movies.map((movie) =>( <MovieCard movie={movie} key={movie.id} />))}
            </div>
        </div>
    );

}



export default Home
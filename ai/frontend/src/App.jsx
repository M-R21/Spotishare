
import './App.css'
import MovieCard from './components/MovieCard'


function App() {
  const movieNumber = 1 // Change this number to 2 or 3 to see different movies;


  return (
    <>
      {movieNumber === 1 && <MovieCard movie={{title: "The Godfather", release_date: "1972", url: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg"}} />}
      {movieNumber === 2 && <MovieCard movie={{title: "The Shawshank Redemption", release_date: "1994", url: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg"}} />}
      {movieNumber === 3 && <MovieCard movie={{title: "The Dark Knight", release_date: "2008", url: "https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg"}} />}


    </>


      
  )
}





export default App


import './App.css'
import MovieCard from './components/MovieCard'


function App() {
  const movieNumber =3;


  return (
    <>
    {movieNumber === 1 ? (
    <MovieCard movie={{title:"first movie" , release_Date:"2025"}}/>) 
    : ( <h1> No movies to show</h1>)}   

    </>


      
  )
}





export default App

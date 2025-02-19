import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const MovieContext = createContext()

export function MovieProvider({ children }) {
    const [favorites, setFavorites] = useState([])

    const isFavorite = (movieId) => favorites.some(movie => movie.id === movieId)

    const addToFavorites = (movie) => {
        setFavorites([...favorites, movie])
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(favorites.filter(movie => movie.id !== movieId))
    }

    return (
        <MovieContext.Provider value={{ favorites, isFavorite, addToFavorites, removeFromFavorites }}>
            {children}
        </MovieContext.Provider>
    )
}

MovieProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export const useMovieContext = () => {
    const context = useContext(MovieContext)
    if (!context) {
        throw new Error('useMovieContext must be used within a MovieProvider')
    }
    return context
}



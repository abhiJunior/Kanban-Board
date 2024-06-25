import Heading from "./Heading";
import MovieList from "./MovieList";

const MovieListWrapper = () =>{
    return (
        <div className="movie-list-wrapper">
            <Heading/>
            <MovieList/>
        </div>
    );
}

export default MovieListWrapper;

import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'; 
import Banner from './Components/Banner';
import MovieListWrapper from './Components/MovieListWrapper';


function App() {
  
  return (
    <div className='container'>
      <Header/>
      <Banner/>
      <MovieListWrapper/>
    </div>
  );
}

export default App;

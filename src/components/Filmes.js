import React from "react";
import axios from "axios";

const FilmesAPI = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie/popular?api_key=b3c62dbbf7ef4ecdea1a16d5806b193a&language=pt-BR&page=1`
});
export default class App extends React.Component {
  state = {
    movies: []
  };
  addFilmes = async () => {
    const resposta = await FilmesAPI.get();
    const api = resposta.data.results.map((item) => {
      return {
        ...item
        // title: item.title,
        // overview: item.overview,
        // image: `https://image.tmdb.org/t/p/w200/${item.poster_path}`
      };
    });
    this.setState({
      movies: api
    });
  };

  filterMovies = (e) => {
    const moviesFilter = this.state.movies.filter((item) => {
      if (item.title.toLowerCase().includes(e.target.value)) {
        return true;
      }
    });
  };

  componentDidMount() {
    this.addFilmes();
  }
  render() {
    return (
      <div>
        <h1>Filmes em alta:</h1>
        <input onChange={this.filterMovies} />
        <ol>
          {this.state.movies.map((item) => (
            <>
              <li>{item.title}</li>
              <img
                src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
              />
              <p>{item.sinopse}</p>
              <p>{item.vote_average}</p>
              <h2>{item.release_date}</h2>
              {/* // <img src={item.image} alt={`Poster do filme ${item.title}`} /> */}
            </>
          ))}
        </ol>
      </div>
    );
  }
}

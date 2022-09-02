import React from "react";
import axios from "axios";

const SeriesAPI = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/tv/popular?api_key=6065b75e2de647820f24325dbe424c44&language=en-US&page=1"
});

export default class Series extends React.Component {
  state = {
    series: []
  };

  addSeries = async () => {
    const response = await SeriesAPI.get();
    const info = response.data.results.map((item) => {
      return {
        nome: item.name,
        sinopse: item.overview,
        image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
      };
    });
    console.log(response);
    this.setState({
      series: info
    });
  };

  componentDidMount() {
    this.addSeries();
  }

  render() {
    return (
      <div>
        <h1>Series</h1>
        <ol>
          {this.state.series.map((item) => (
            <>
              <li>{item.nome}</li>
              <p>{item.sinopse}</p>
              <img src={item.image} />
            </>
          ))}
        </ol>
      </div>
    );
  }
}

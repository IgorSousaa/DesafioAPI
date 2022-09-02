import React from "react";
import axios from "axios";

export default class Homepage extends React.Component {
  state = {
    frutas: [
      "Uva",
      "Limão",
      "Abacaxi",
      "Melancia",
      "Morango",
      "Butiti",
      "Açaí",
      "Cupuaçu",
      "Melão",
      "Bacuri"
    ],
    novaLista: []
  };

  filtrarFrutas = (e) => {
    const filtrandoFrutas = this.state.frutas.filter((item) => {
      if (item.includes(e.target.value)) {
        return true;
      } else {
        return "";
      }
    });

    this.setState({ novaLista: filtrandoFrutas });

    // if (e.target.value === "") {
    //   this.setState({ novaLista: [] });
    // }
  };

  render() {
    return (
      <>
        <input onChange={this.filtrarFrutas} />
        <ul>
          {this.state.novaLista.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </>
    );
  }
}

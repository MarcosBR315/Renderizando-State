import React from "react";
import "./App.css";
import Macarrao from "./imagens/Macarrao.png";

export default class App extends React.Component {
  state = {
    nome: "Marcos Paulo",
    idade: 17,
    comidaFavorita: "Macarrão",
    musicasFavoritas: ["Dani California", "Give It Away", "Can't Stop"],
  };

  render() {
    return (
      <>
        <div className="d-1">
          <section className="s1">
            <h1>Nome: {this.state.nome}</h1>
            <h2>Idade: {this.state.idade}</h2>
            <h3>Comida Favorita: {this.state.comidaFavorita}</h3>
          </section>
          <p></p>
          <section className="s2">
            <h2 className="h2-2">Músicas Favoritas:</h2>
            <ol>
              <li>1° - {this.state.musicasFavoritas[0]}</li>
              <li>2° - {this.state.musicasFavoritas[1]}</li>
              <li>3° - {this.state.musicasFavoritas[2]}</li>
            </ol>
          </section>
        </div>
        <figure>
          <img src={Macarrao} alt="Macarrão"></img>
        </figure>
      </>
    );
  }
}

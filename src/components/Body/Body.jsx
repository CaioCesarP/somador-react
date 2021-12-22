import React, { Component } from "react";
import "./index.css";

class Body extends Component {
  constructor(props) {
    super(props);
    this.primeiro = "";
    this.segundo = "";
  }

  _handleMudancaPrimeiro(evento) {
    evento.stopPropagation();
    this.primeiro = Number(evento.target.value);
  }

  _handleMudancaSegundo(evento) {
    evento.stopPropagation();
    this.segundo = Number(evento.target.value);
  }

  _valorSomar(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.soma = this.primeiro + this.segundo;
  }

  render() {
    return (
      <form className="body" onSubmit={this._valorSomar.bind(this)}>
        <div className="rainbow">
          <h1 className="body__titulo body__titulo__animation">SOMADOR</h1>
        </div>

        <section className="teclado">
          <input
            type="number"
            placeholder="Primeiro valor"
            required
            onChange={this._handleMudancaPrimeiro.bind(this)}
          />

          <div className="rainbow">
            <h1 className="teclado__soma teclado__soma__animation">+</h1>
          </div>

          <input
            type="number"
            placeholder="Segundo valor"
            required
            onChange={this._handleMudancaSegundo.bind(this)}
          />

          <input id="somar" 
          type="submit" 
          value="somar" 
          />
          
          <div
            id="teclado__valorSoma">
          </div>

        </section>
      </form>
    );
  }
}

export default Body;

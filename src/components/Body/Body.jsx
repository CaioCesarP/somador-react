import React, { Component } from "react";
import "./index.css";

class Body extends Component {
  constructor(props) {
    super(props);
    this.primeiro = "";
    this.segundo = "";
    this.state = {
      soma: 0
    }
  }

  _handleMudancaPrimeiro(evento) {
    evento.stopPropagation();
    this.primeiro = Number(evento.target.value);
  }

  _handleMudancaSegundo(evento) {
    evento.stopPropagation();
    this.segundo = Number(evento.target.value);
  }

  // _valorSomar(evento) {
  //   evento.preventDefault();
  //   evento.stopPropagation();
  //   this.soma = this.primeiro + this.segundo;
  // }

  render() {
    return (
      <section className="body">
        <div className="rainbow">
          <h1 className="body__titulo body__titulo__animation">SOMADOR</h1>
        </div>

        <section className="teclado">
          <input
            type="number"
            placeholder="Primeiro valor"
            required
            onChange={this._handleMudancaPrimeiro.bind(this)}
            onClick={() => this.setState({ soma: 0 })}
          />

          <div className="rainbow">
            <h1 className="teclado__soma teclado__soma__animation">+</h1>
          </div>

          <input
            type="number"
            placeholder="Segundo valor"
            required
            onChange={this._handleMudancaSegundo.bind(this)}
            onClick={() => this.setState({ soma: 0 })}
          />

          <input id="somar" 
          type="submit" 
          value="somar" 
          onClick={() => this.setState({ soma: this.primeiro + this.segundo })}
          />

          <p className="teclado__valorSoma">
          {this.state.soma}
          </p>

        </section>
      </section>
    );
  }
}

export default Body;

import React, { Component } from "react";
import "./assets/reset.css"
import Body from "./components/Body/Body";

class App extends Component {

  calcularSoma(primeiro, segundo){
    const novoValor = {primeiro, segundo};
    console.log(novoValor);
  }

  render() {
    return (
      <section className="conteudo">
        <Body calcularSoma={this.calcularSoma.bind(this)}/>
      </section>
    );
  }
}

export default App;

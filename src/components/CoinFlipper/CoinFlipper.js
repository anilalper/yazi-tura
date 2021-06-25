import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    console.log(JSON.stringify(props));
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      flipping: false,
      totalCount:0,
      turaCount:0,
      yaziCount:0
    };
  }
  

  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({ flipping: true });
    debugger;
    let random_boolean = Math.random() < 0.5;
    
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    // setTimeout(() => this.setState((prevState) =>({ flipping: false,totalCount: prevState.totalCount + 1,turaCount:random_boolean?prevState.turaCount++:prevState.turaCount,yaziCount:random_boolean?prevState.yaziCount:prevState.yaziCount++ })), 1000);
    setTimeout(() =>{ 
      
      if(random_boolean){
    
      this.setState((prevState)=>({side:"tura",turaCount:prevState.turaCount+1}));

      }
      else{
        this.setState((prevState)=>({side:"yazi",yaziCount:prevState.yaziCount+1}));
      }
    
    this.setState((prevState) =>({ flipping: false,totalCount: prevState.totalCount + 1,
      side:random_boolean?"tura":"yazi", 
      turaCount:random_boolean?prevState.turaCount++:prevState.turaCount
      ,yaziCount:random_boolean?prevState.yaziCount:prevState.yaziCount++ }));
    }, 1000)
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} totalCount={this.state.totalCount} turaCount={this.state.turaCount} yaziCount={this.state.yaziCount} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.totalCount} </strong>
          atıştan
          <strong> {this.state.turaCount} </strong>ü tura
          <strong> {this.state.yaziCount} </strong>
          si yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;

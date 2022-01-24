import logo from './ico.png';
import './App.css';
import React, { Component } from 'react';

function App() {
  return (
    <div className="App">
     <header className="App-header">
     <script src="https://code.jquery.com/jquery-1.7.2.js"></script>
       <h1 class="head-txt" >20songs</h1>
       <div class="stripe"/>
     </header>
    <Sync/>
    </div>
  )
}

class Sync extends Component{
  constructor() {
    super();
    this.state={
      song: []
    }
  }
  componentDidMount() {
    window.fetch('https://gj05ju1755.execute-api.eu-west-1.amazonaws.com/dev/codechallenge/music/random')
    .then(response => {return response.json();})
    .then(response => { this.setState({song: response.items});
  });
  }
  render() {
    console.log(this.state.song)
    const { song } = this.state
    return  (song.length ? (<span> {
      Mlist(this.state.song)} </span>) : (
      <span></span> ))

  }
}


function Mlist(lista) {
  var slista = lista;

  return (
    <div>
    <span> {slista.map((x,i)=>{
              return (
                <div className="songs" key={i}>
                  <h2 class='sname'><a href={''+x.preview_url}>{x.name}</a></h2>
                  <ul class="artists">Artists:{x.artists.map((y) => <li> {y.name}</li>)}</ul>
                </div>
              )
    })} </span>
    </div>
  )

}

export default App;

import React from "react";
import TextLoop from "react-text-loop";
import '../CSS/Speech.css';
import speechbubble from "../assets/dashboard/speech_bubble.png"

class Speech extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonspeech: "Hello! 😊"
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event) {
    if(event.key === "q") { // Q
      this.setState( {pokemonspeech: "That was a great question!"} );
    }
    console.log("test");
  }

  render () {
    //console.log(this.props.nameString);
    if (this.props.nameString.length > 0 && this.props.showGreetings) {
      return (
        <div className="container">
          <img src={speechbubble}/>
          <span> Welcome Pokemon Trainer
          <TextLoop children={this.props.nameString.split(',')}/>!
          </span>
        </div>
      );
    }
    return (
      <div className="container">
        <img src={speechbubble}/>
        <textarea class="pokemonspeech" onKeyPress={this.handleKeyPress} value={this.state.pokemonspeech}/>
      </div>
    );
  };

}

export default Speech;

import React from "react";
import TextLoop from "react-text-loop";
import '../CSS/Speech.css';

class Speech extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    //console.log(this.props.nameString);
    if (this.props.nameString.length > 0 && this.props.showGreetings) {
      return (
        <div>
          <span> Welcome Pokemon Trainer </span>
          <TextLoop children={this.props.nameString.split(',')}/>
          <span>!</span>
        </div>
      );
    }
    return <span> Hi, I'm Squirtle! </span>;
  };

}

export default Speech;

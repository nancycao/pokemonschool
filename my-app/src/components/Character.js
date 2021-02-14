import React from "react";
import ReactModal from 'react-modal';
import TextLoop from "react-text-loop";
import Speech from "./Speech.js"
import '../CSS/Character.css'
import squirtle from '../assets/dashboard/squirtle.gif';

class Character extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        showModal: false,
        showGreetings: false,
        nameInput: "",
      };

      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
      this.handleNameInputChange = this.handleNameInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleHideGreeting = this.handleHideGreeting.bind(this);
    }

    handleOpenModal () {
      this.setState( { showModal: true } );
    }

    handleCloseModal () {
      this.setState( { showModal: false } );
    }

    handleNameInputChange (event) {
      this.setState({nameInput: event.target.value});
    }

    handleSubmit (event) {
      //console.log("handleSubmit");
      this.setState ({showGreetings: true});
      this.handleCloseModal();
      event.preventDefault();
    }

    handleHideGreeting (event) {
      this.setState ({showGreetings: false});
    }

    render() {
      return (
        <div>
          <div className ="speech">
            <Speech nameString={this.state.nameInput}
                    showGreetings={this.state.showGreetings}/>
          </div>

          <div className="character">
            <img src={squirtle} alt="pokemon" onClick={this.handleOpenModal} />
            <ReactModal isOpen={this.state.showModal} ariaHideApp={false}>

              <button onClick={this.handleCloseModal}>X</button>
                <label> Enter names seperated by commas: </label>
                <input type="text" name="nameInput" value={this.state.nameInput} onChange={this.handleNameInputChange}/>
                <button type="submit" onClick={this.handleSubmit}>Submit</button>
            </ReactModal>
            </div>
        </div>

      );
    }
}
export default Character;

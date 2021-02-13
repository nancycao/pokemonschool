import React from "react";
import ReactModal from 'react-modal';
import TextLoop from "react-text-loop";
import Speech from "./Speech.js"
import '../CSS/Character.css'

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
      this.handleShowGreetings = this.handleShowGreetings.bind(this);
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
      console.log("handleSubmit");
      this.handleCloseModal();
      event.preventDefault();
    }

    handleShowGreetings() {
      console.log (this.state);
      this.setState ({showGreetings: true});
    }

    render() {
      return (
        <div>
          <button onClick={this.handleShowGreetings}> Show Greetings</button>
          <Speech nameString={this.state.nameInput} showGreetings={this.state.showGreetings}/>

          <img src="/dashboard/squirtle.gif" alt="pokemon" onClick={this.handleOpenModal} />
          <ReactModal isOpen={this.state.showModal} ariaHideApp={false}>

            <button onClick={this.handleCloseModal}>X</button>
            <div>
              <label> Enter names seperated by commas: </label>
              <input type="text" name="nameInput" value={this.state.nameInput} onChange={this.handleNameInputChange}/>
              <button type="submit" onClick={this.handleSubmit}>Submit</button>
            </div>
          </ReactModal>

        </div>

      );
    }
}
export default Character;

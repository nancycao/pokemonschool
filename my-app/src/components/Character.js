import React from "react";
import ReactModal from 'react-modal';
import TextLoop from "react-text-loop";
import '../CSS/Character.css'

class Character extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        showModal: false,
        showGreetings: false,
        nameList: [],
      };

      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
      this.handleNamesChange = this.handleNamesChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleShowGreetings = this.handleShowGreetings.bind(this);
    }

    handleOpenModal () {
      this.setState( { showModal: true } );
    }

    handleCloseModal () {
      this.setState( { showModal: false } );
    }

    handleNamesChange (event) {
      var nameString = event.target.value;
      if (nameString) {
        this.setState ( {nameList: nameString.split(",")} );
      }
    }

    handleSubmit(event) {
      console.log (this.state.nameList);
    }

    handleShowGreetings() {
      console.log (this.state);
      //this.setState ({showGreetings: true});
    }

    render() {
      return (
        <div>
          <button onClick={this.handleShowGreetings}> </button>

          Welcome <TextLoop children={["nancy", "bob"]} />

          <img src="/dashboard/squirtle.gif" alt="pokemon" onClick={this.handleOpenModal} />
          <ReactModal isOpen={this.state.showModal}>

            <button onClick={this.handleCloseModal}>X</button>

            <form onSubmit={this.handleSubmit}>
              <div>
                <label> Enter names seperated by commas: </label>
                <input type="text" value={this.state.names} onChange={this.handleNamesChange}/>
              </div>
              <div>
                <input type="submit" value="Submit" onClick = {this.handleSubmit}/>
              </div>
            </form>
          </ReactModal>

        </div>

      );
    }
}
export default Character;

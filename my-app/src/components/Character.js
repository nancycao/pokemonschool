import React from "react";
import ReactModal from 'react-modal';

class Character extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        showModal: false,
        nameList: [],
      };

      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
      this.handleNamesChange = this.handleNamesChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleOpenModal () {
      this.setState( { showModal: true } );
    }

    handleCloseModal () {
      this.setState( { showModal: false } );
    }

    handleNamesChange (event) {
      this.setState ( {nameList: event.target.value.split()} );

    }

    handleSubmit(event) {
      console.log (this.state.nameList);
    }

    render() {
      return (
        <div>
          <img src="/dashboard/squirtle.gif" alt="pokemon" onClick={this.handleOpenModal} />
          <ReactModal isOpen={this.state.showModal}>

            <button onClick={this.handleCloseModal}>X</button>

            <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.names} onChange={this.handleNamesChange}/>

              <input type="submit" value="Submit" onClick = {this.handleSubmit}/>
            </form>
          </ReactModal>

        </div>

      );
    }
}
export default Character;

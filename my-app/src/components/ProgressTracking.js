import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/ProgressTracking.css'
import ReactModal from 'react-modal';
import xpBar from '../assets/dashboard/xp_bar.png';

class ProgressTracking extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        numResponses: "0",
        numResponsesExpected: "0",
        formId: "",
        showModal: false
      };

      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
      this.handleFormIdChange = this.handleFormIdChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleNumResponsesExpected = this.handleNumResponsesExpected.bind(this);
    }

    handleOpenModal () {
      this.setState( { showModal: true } );
    }

    handleCloseModal () {
      this.setState( { showModal: false } );
    }

    handleFormIdChange (event) {
      this.setState( { formId: event.target.value} );
    }

    handleNumResponsesExpected (event) {
      this.setState( { numResponsesExpected: event.target.value } );
    }

    handleSubmit () {
       this.handleCloseModal();
    }

    componentDidMount() {
        setInterval(() => {
          if (this.state.formId) {
              const url = "https://api.typeform.com/forms/" + this.state.formId + "/responses";
              console.log(url);
              fetch(url, {
                headers: {
                  method: "GET",
                  Authorization: "Bearer {token here}",
                }
              })
                .then(res => res.json())
                .then(json =>
                  //console.log("responses: ", json.total_items.toString())//;
                  this.setState({numResponses: json.total_items.toString()})
                );
            };
        }, 1000);
    }

    render() {
      console.log(this.state);
      if (this.state.numResponsesExpected != "0" && this.state.numResponses != "0") {
        return (
          <div>
            <img src={xpBar} className="xp-bar" alt="experience bar" />
            <ProgressBar animated now={this.state.numResponses}
                                  onClick={this.handleOpenModal}
                                  max={this.state.numResponsesExpected}/>
            <ReactModal isOpen={this.state.showModal} ariaHideApp={false}>

              <button onClick={this.handleCloseModal}>X</button>
                <label> Enter typeform ID: </label>
                <input type="text" name="formId" value={this.state.formId} onChange={this.handleFormIdChange}/>
                <input type="text" name="numResponsesExpected" value={this.state.numResponsesExpected} onChange={this.handleNumResponsesExpected}/>
                <button type="submit" onClick={this.handleSubmit}>Submit</button>
            </ReactModal>
          </div>
        );
      }
      return (
        <div>
          <button className="add btn btn-lg btn-secondary" onClick={this.handleOpenModal}>Add goal</button>

          <ReactModal isOpen={this.state.showModal} ariaHideApp={false}>

            <button onClick={this.handleCloseModal}>X</button>
              <div>
                <div>
                  <label> Enter typeform ID: </label>
                  <input type="text" name="formId" value={this.state.formId} onChange={this.handleFormIdChange}/>
                </div>
                <div>
                  <label> Enter # of expected total responses: </label>
                <input type="text" name="numResponsesExpected" value={this.state.numResponsesExpected} onChange={this.handleNumResponsesExpected}/>
                </div>
                <button type="submit" onClick={this.handleSubmit}>Submit</button>
              </div>
          </ReactModal>
        </div>
      );
    }
}
export default ProgressTracking;

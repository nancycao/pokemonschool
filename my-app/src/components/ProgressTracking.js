import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/ProgressTracking.css'
import ReactModal from 'react-modal';
import xpBar from '../assets/dashboard/xp_bar.png';
import endClassButton from '../assets/dashboard/end_class_button.png';
import TextLoop from "react-text-loop";
import Speech from "./Speech.js"
import '../CSS/Character.css'
import squirtle from '../assets/dashboard/squirtle.gif';
import wartortle from '../assets/dashboard/wartortle.gif';
import blastoise from '../assets/dashboard/blastoise.gif';
import addGoal from '../assets/dashboard/add_goal.png';

import Donation from './Donation.js';

const modalStyle = {content: {
  'margin-top': '-250px', position: 'absolute', width: '500px', height: '500px',
  'marginLeft': '-250px', left: '50%', top: '50%'
}}

class ProgressTracking extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        numResponses: "0",
        numResponsesExpected: "0",
        formId: "",
        showCharacterModal: false,
        showGoalModal: false,
        showGreetings: false,
        nameInput: "",
        pokemon: squirtle,
        keyInput: "",
        responseInput: ""
      };

      this.handleOpenGoalModal = this.handleOpenGoalModal.bind(this);
      this.handleCloseGoalModal = this.handleCloseGoalModal.bind(this);

      this.handleOpenCharacterModal = this.handleOpenCharacterModal.bind(this);
      this.handleCloseCharacterModal = this.handleCloseCharacterModal.bind(this);
      this.handleNameInputChange = this.handleNameInputChange.bind(this);
      this.handleCharacterSubmit = this.handleCharacterSubmit.bind(this);
      this.handleHideGreeting = this.handleHideGreeting.bind(this);

      this.handleFormIdChange = this.handleFormIdChange.bind(this);
      this.handleGoalSubmit = this.handleGoalSubmit.bind(this);
      this.handleNumResponsesExpected = this.handleNumResponsesExpected.bind(this);
      this.handlekeyInputChange = this.handlekeyInputChange.bind(this);
      this.handleResponseInputChange = this.handleResponseInputChange.bind(this);
    }

    handleOpenGoalModal () {
      this.setState( { showGoalModal: true } );
    }

    handleCloseGoalModal () {
      this.setState( { showGoalModal: false } );
    }

    handleOpenCharacterModal () {
      this.setState( { showCharacterModal: true } );
    }

    handleCloseCharacterModal () {
      this.setState( { showCharacterModal: false } );
    }

    handleFormIdChange (event) {
      this.setState( { formId: event.target.value} );
    }

    handleNumResponsesExpected (event) {
      this.setState( { numResponsesExpected: event.target.value } );
    }

    handleGoalSubmit () {
       this.handleCloseGoalModal();
    }

    handleNameInputChange (event) {
      this.setState({nameInput: event.target.value});
    }

    handleCharacterSubmit (event) {
      //console.log("handleSubmit");
      this.setState ({showGreetings: true});
      this.handleCloseCharacterModal();
      event.preventDefault();
    }

    handleHideGreeting (event) {
      this.setState ({showGreetings: false});
    }

    handlekeyInputChange(event) {
      this.setState({ keyInput: event.target.value});
    }

    handleResponseInputChange(event) {
      this.setState({ responseInput: event.target.value});
    }

    componentDidMount() {
        setInterval(() => {
          if (this.state.formId) {
              const url = "https://api.typeform.com/forms/" + this.state.formId + "/responses";
              console.log(url);
              fetch(url, {
                headers: {
                  method: "GET",
                  Authorization: "Bearer 7hXQZBFLh2aQykSDQDyg2fzFeAKKQ3Yqdnb7GW2UzGuF",
                }
              })
                .then(res => res.json())
                .then(json => {
                  //console.log("responses: ", json.total_items.toString())//;
                  this.setState({numResponses: json.total_items.toString()});
                  if (json.total_items == 6) {
                    this.setState( {pokemon: wartortle} );
                  };
                  if (json.total_items == 7) {
                    this.setState( {pokemon: blastoise} );
                  };
                }
              );
            };
        }, 1000);

    }

    render() {
      console.log(this.state);
      if (this.state.numResponsesExpected != "0" && this.state.numResponses != "0") {
        return (
          <div>

          <div>
            <div className ="speech">
              <Speech nameString={this.state.nameInput}
                      showGreetings={this.state.showGreetings}
                      keyInput={this.state.keyInput}
                      responseInput={this.state.responseInput}
              />
            </div>

            <div className="character">
              <img src={this.state.pokemon} alt="pokemon" onClick={this.handleOpenCharacterModal} />
              <ReactModal style={modalStyle} isOpen={this.state.showCharacterModal} ariaHideApp={false}>

                <button onClick={this.handleCloseCharacterModal}>X</button><br/>
                <label> Enter student names separated by commas: </label><br/>
                <input type="text" name="nameInput" value={this.state.nameInput} onChange={this.handleNameInputChange}/>
                <br/>
                <br/>

                <h3>Character Key Bindings</h3>
                <label> Enter key: </label><br/>
                <input type="text" name="keyInput1" value={this.state.keyInput1} onChange={this.handlekeyInputChange}/>
                <br/>

                <label> Enter message: </label><br/>
                <input type="text" name="responseInput1" value={this.state.responseInput1} onChange={this.handleResponseInputChange}/>
                <br/>
                <br/>
                <button type="submit" onClick={this.handleCharacterSubmit}>Submit</button>
                <br/>
              </ReactModal>
              </div>
          </div>

            <img src={xpBar} className="xp-bar" alt="experience bar" />
            <ProgressBar animated now={this.state.numResponses}
                                  onClick={this.handleOpenGoalModal}
                                  max={this.state.numResponsesExpected}
                                  label={this.state.numResponses + "/" + this.state.numResponsesExpected}/>
            <ReactModal style={modalStyle} isOpen={this.state.showGoalModal} ariaHideApp={false}>

              <button onClick={this.handleCloseGoalModal}>X</button>
              <div>
                <label> Enter typeform ID: </label>
                <input type="text" name="formId" value={this.state.formId} onChange={this.handleFormIdChange}/>
              </div>
              <div>
                <label> Enter # of expected total responses: </label>
                <input type="text" name="numResponsesExpected" value={this.state.numResponsesExpected} onChange={this.handleNumResponsesExpected}/>
              </div>
              <button type="submit" onClick={this.handleGoalSubmit}>Submit</button>
            </ReactModal>
            {this.state.numResponses == this.state.numResponsesExpected
              ? <a href="https://drive.google.com/file/d/1RswQNOiJAYzuSLR_wM2LeRi5ZCGDIZmi/view?usp=sharing">
                  <img  src={endClassButton} className="end-class-button" alt="end class"/>
                </a>
              : <a href="https://drive.google.com/file/d/1-VaiSG_GDp7denOOP5FcRDBwMhdYLOQc/view?usp=sharing">
                  <img src={endClassButton} className="end-class-button" alt="end class"/>
                </a>
            }
          </div>
        );
      }
      return (
        <div>

        <div>
          <div className ="speech">
            <Speech nameString={this.state.nameInput}
                    showGreetings={this.state.showGreetings}
                    keyInput={this.state.keyInput}
                    responseInput={this.state.responseInput}
            />
          </div>

          <div className="character">
            <img src={this.state.pokemon} alt="pokemon" onClick={this.handleOpenCharacterModal} />
            <ReactModal style={modalStyle} isOpen={this.state.showCharacterModal} ariaHideApp={false}>

            <button onClick={this.handleCloseCharacterModal}>X</button><br/>
              <label> Enter student names separated by commas: </label><br/>
              <input type="text" name="nameInput" value={this.state.nameInput} onChange={this.handleNameInputChange}/>
              <br/>
              <br/>

              <h3>Character Key Bindings</h3>
              <label> Enter key: </label><br/>
              <input type="text" name="keyInput1" value={this.state.keyInput1} onChange={this.handlekeyInputChange}/>
              <br/>

              <label> Enter message: </label><br/>
              <input type="text" name="responseInput1" value={this.state.responseInput1} onChange={this.handleResponseInputChange}/>
              <br/>
              <br/>
              <button type="submit" onClick={this.handleCharacterSubmit}>Submit</button>

            </ReactModal>
            </div>
        </div>
          <img className="add" onClick={this.handleOpenGoalModal} src={addGoal}/>
          {/* <button className="add btn btn-lg btn-secondary" onClick={this.handleOpenGoalModal}>Add goal</button> */}


          <ReactModal style={modalStyle} isOpen={this.state.showGoalModal} ariaHideApp={false}>

            <button onClick={this.handleCloseGoalModal}>X</button>
              <div>
                <div>
                  <label> Enter typeform ID: </label>
                  <input type="text" name="formId" value={this.state.formId} onChange={this.handleFormIdChange}/>
                </div>
                <div>
                  <label> Enter # of expected total responses: </label>
                  <input type="text" name="numResponsesExpected" value={this.state.numResponsesExpected} onChange={this.handleNumResponsesExpected}/>
                </div>
                <button type="submit" onClick={this.handleGoalSubmit}>Submit</button>
              </div>
          </ReactModal>
          <a href="https://drive.google.com/file/d/1RswQNOiJAYzuSLR_wM2LeRi5ZCGDIZmi/view?usp=sharing">
            <img src={endClassButton} className="end-class-button" alt="end class"/>
          </a>
        </div>
      );
    }
}
export default ProgressTracking;

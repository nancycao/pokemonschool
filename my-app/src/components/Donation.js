import React from "react";
import ReactModal from 'react-modal';
import '../CSS/Character.css'
import donationButton from '../assets/dashboard/donate.png'

const modalStyle = {content: {
    'margin-top': '-250px', position: 'absolute', width: '500px', height: '500px',
    'marginLeft': '-250px', left: '50%', top: '50%'
  }}

class Donation extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        showModal: false,
        donationAmount: 5,
        donationName: "",
        donationEmail: "",
      };

      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
      this.handleDonationAmountChange = this.handleDonationAmountChange.bind(this);
      this.handleDonationNameChange = this.handleDonationNameChange.bind(this);
      this.handleDonationEmailChange = this.handleDonationEmailChange.bind(this);
      this.handleDonation = this.handleDonation.bind(this);
    }

    handleOpenModal () {
      this.setState( { showModal: true } );
    }

    handleCloseModal () {
      this.setState( { showModal: false } );
    }

    handleDonationAmountChange (event) {
      this.setState({donationAmount: event.target.value});
    }
    handleDonationNameChange (event) {
      this.setState({donationName: event.target.value});
    }
    handleDonationEmailChange (event) {
      this.setState({donationEmail: event.target.value});
    }
    handleDonation (event) {
      // Request Invoice
      const url = "https://api.sandbox.checkbook.io/v3";
      console.log(url);
      let request = {
        method: "POST",
        headers: {
          Authorization: "584092d7e59a5f66ccde9ff1ab2e5ef5:d4c8408d2690dd0e85b91fa4ad55a386",
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          "amount": this.state.donationAmount,
          "name": this.state.donationName,
          "recipient": this.state.donationEmail,
          "description": "Pokemon Training Center donation"
        })
      };
      console.log(request);
      fetch(url, {
        request
      })
      .then(res => res.json())
      .then(json =>
        console.log("responses: ", json.toString())
      );
      this.handleCloseModal();
    }


    render() {
      return (
        <div>
            <img src={donationButton} className="donationButton" onClick={this.handleOpenModal}/>
            {/* <button className="donationButton btn btn-lg btn-secondary" onClick={this.handleOpenModal}>DONATE</button> */}
            <ReactModal style={modalStyle} isOpen={this.state.showModal} ariaHideApp={false}>

              <button onClick={this.handleCloseModal}>X</button>
              <div>
                <h1> Would you like to donate? </h1>
                <br/>
                <label> Amount </label>
                <br/>
                <input type="amount" value={this.state.donationAmount} onChange={this.handleDonationAmountChange}/>
                <br/>
                <label> Name </label>
                <br/>
                <input type="name" value={this.state.donationName} onChange={this.handleDonationNameChange}/>
                <br/>
                <label> Email </label>
                <br/>
                <input type="email" value={this.state.donationEmail} onChange={this.handleDonationEmailChange}/>
                <br/>
                <button type="submit" onClick={this.handleDonation}>Donate</button>
              </div>
            </ReactModal>
        </div>

      );
    }
}
export default Donation;

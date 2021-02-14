import React from "react";
import ReactModal from 'react-modal';
import Speech from "./Speech.js"
import '../CSS/Character.css'
import squirtle from '../assets/dashboard/squirtle.gif';

class Donation extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        donationAmount: 5,
        donationName: "",
        donationEmail: "",
      };

      this.handleDonationAmountChange = this.handleDonationAmountChange.bind(this);
      this.handleDonationNameChange = this.handleDonationNameChange.bind(this);
      this.handleDonationEmailChange = this.handleDonationEmailChange.bind(this);
      this.handleDonation = this.handleDonation.bind(this);
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
      // // Demo API
      // console.log("demo api");
      // fetch('https://demo.checkbook.io/v3/check', {
      //   method: "GET",
      //   headers: {
      //     "Accept": "application/json",
      //     'Authorization': 'd6aa2703655f4ba2af2a56202961ca86:dXbCgzYBMibj8ZwuQMd2NXr6rtvjZ8'
      //   }
      // }).then(res => res.json())
      // .then(json =>
      //   console.log("responses: ", json.toString())
      //   // this.setState({numResponses: json.total_items.toString()})
      // );

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
    }


    render() {
      return (
            <div>
                <label> Would you like to donate? </label>
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

      );
    }
}
export default Donation;

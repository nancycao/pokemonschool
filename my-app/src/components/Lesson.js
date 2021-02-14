import React from "react";
import ReactModal from 'react-modal';
import "../CSS/Lesson.css";
import lessoninput from "../assets/dashboard/lesson_input.png";

class Lesson extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        showUrl: false,
        urlInput: "",
      };

      this.handleUrlInputChange = this.handleUrlInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUrlInputChange (event) {
      this.setState({urlInput: event.target.value});
    }

    handleSubmit (event) {
      //console.log("handleSubmit");
      this.setState ({showUrl: true});
      event.preventDefault();
    }

    render() {
      if (this.state.showUrl) {
        return (
          <div className="iframe">
            <iframe
              src={this.state.urlInput}
              frameborder="0"
              width="800"
              height="600"
            ></iframe>
          </div>
        );
      }
      return (
        <div className="lesson">
          <img src={lessoninput}/>
          <input type="text" name="nameInput" value={this.state.urlInput} onChange={this.handleUrlInputChange}/>
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </div>
      );
    }
}
export default Lesson;

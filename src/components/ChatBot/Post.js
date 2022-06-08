import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  constructor(props) {
    super(props);
    const { steps } = this.props;
    const { submit, firstname, email, query } = steps;

    this.state = { submit, firstname, email, query };
  }

  componentDidMount() {
    const userObject = {
      submit: this.state.submit.value,
      firstname: this.state.firstname.value,
      email: this.state.email.value,
      query: this.state.query.value,
    };
    axios
      .post(`http://localhost:4000/user/chatBot`, userObject)
      .then((res) => {
        console.log(res.status);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return <div>Thank you! Your Query was submitted successfully! you will receive the solution through email, with in 24 hours. </div>;
  }
}

export default Post;
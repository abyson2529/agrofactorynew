
import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import Post from "./Post";
import "./Chat.css";
// all available theme props
const theme = {
  background: "#f5f8fb",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#7E7E7E",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#7E7E7E",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

class Chat extends Component {
  render() {
    return (
      <div>
        <div className="chat-screen">
          <ThemeProvider theme={theme}>
            <ChatBot
              steps={[
                {
                  id: "q-firstname",
                  message: "What is your name?",
                  trigger: "firstname",
                },
                {
                  id: "firstname",
                  user: true,
                  trigger: "q-email",
                },
                {
                  id: "q-email",
                  message: " what is your email-id?",
                  trigger: "email",
                },
                {
                  id: "email",
                  user: true,
                  trigger: "q-query",
                },
                {
                  id: "q-query",
                  message: "Please enter your query.",
                  trigger: "query",
                },
                {
                  id: "query",
                  user: true,
                  trigger: "q-submit",
                },
               
                {
                  id: "q-submit",
                  message: "Do you wish to submit?",
                  trigger: "submit",
                },
                {
                  id: "submit",
                  options: [
                    { value: "y", label: "Yes", trigger: "end-message" },
                    { value: "n", label: "No", trigger: "no-submit" },
                  ],
                },
                {
                  id: "no-submit",
                  message: "Your Query was not submitted.",
                  end: true,
                },
                {
                  id: "end-message",
                  component: <Post />,
                  asMessage: true,
                  end: true,
                },
              ]}
            />
          </ThemeProvider>
        </div>
      </div>
    );
  }
}

export default Chat;
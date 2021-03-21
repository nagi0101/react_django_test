import React from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  state = {
    posts: [],
  };

  async getPosts() {
    axios
      .get("http://127.0.0.1:8000/api/")
      .then(({ data }) => {
        console.log(data);
        this.setState({ posts: data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getPosts();
  }

  render() {
    return (
      <div>
        {this.state.posts.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <span>{item.content}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;

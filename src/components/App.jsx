import { Component } from "react";
import ImageGallery from "./imageGallery/ImageGallery";
import { Searchbar } from "./searchbar/Searchbar";

export class App extends Component{
  state={
    value: ''
  }

  handleSubmit = value =>{
    this.setState({value: value})
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit}/>
        <ImageGallery value={this.state.value}/>
      </div>
    );
  }
};

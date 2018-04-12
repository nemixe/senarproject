import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="ui secondary menu">
      <a class="item active">
        Home
      </a>
      <a class="item">
        Messages
      </a>
      <a class="item">
        Friends
      </a>
      <div class="right menu">
        <div class="item">
          <div class="ui icon input">
            <input type="text" placeholder="Search..."/>
            <i class="search link icon"></i>
          </div>
        </div>
        <a class="ui item">
          Logout
        </a>
      </div>
</div>
    );
  }
}

export default App;

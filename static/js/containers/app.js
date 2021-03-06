import axios from 'axios';
import React, { Component } from 'react';
import { Graph } from 'react-d3-graph';

const myConfig = {
    nodeHighlightBehavior: false,
    node: {
        color: 'white',
        labelProperty: 'name',
        strokeWidth: 3
    },
    width: window.innerWidth,
    height: window.innerHeight
};

class App extends Component {

  constructor(props, context) {
    super();
    this.state = {
      data: null,
      isLoading: true
    }

    this.getData()
  }

  getData() {
    axios.get('/taxonomy_graphs')
      .then(response => this.setState({data: response.data, isLoading: false}));
  }

  render() {
    if (this.state.isLoading === true) {
      return (
        <p>Loading...</p>
      );
    } else {
      return (
        <Graph
          id="graph-id"
          data={this.state.data}
          config={myConfig}
        />
      );
    }
  }
}

export default App;

import React, { Component } from "react";

// Custom Components
import Layout from "./components-statefull/Layout/Layout";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Layout>
          <p>Test</p>
        </Layout>
      </div>
    );
  }
}

export default App;

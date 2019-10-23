import React, { Component } from 'react';
import Layout from './components/Layout/layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Layout>
            <BurgerBuilder />
        </Layout>
      </div>
      
      //The layout method is another way of awrapping the aapp completly in the root componinet
      //I will s get naeter at a typooing and in every abven e of the soul that is a giveing o en vwint heeven hd

    );
  }
}



export default App;

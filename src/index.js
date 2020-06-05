import React, {Component} from 'react';
import Navigator from './routes/routes';

class Index extends Component {
  render() {
    this.state = {
      logged_in: false,
    };
    return <Navigator />;
  }
}

export default Index;

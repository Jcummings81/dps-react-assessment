import { Component, } from 'react';
import { withRouter, } from 'react-router-dom';

class NinjaScroll extends Component {

  componentDidUpdate() {
      window.scrollTo(0,0);
  };

  render() {
    return this.props.children;
  };

};

export default withRouter(NinjaScroll);

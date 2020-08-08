import React from 'react';
import './components/home.css';

class GiveTime extends React.Component{
    constructor(props){
      super(props);
      this.state={apiResponse:""};
    }
    callAPI(){
      fetch('http://localhost:9000/giveTime')
      .then(res=>res.text())
      .then(res=>this.setState({apiResponse:res}));
    }
    componentWillMount(){
      this.callAPI();
    }

  render() {
    return (
      <div className="Home">
      </div>
    );
  }
}

export default GiveTime;

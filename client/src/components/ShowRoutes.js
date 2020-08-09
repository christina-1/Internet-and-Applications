import React from 'react';
import '../css/show_routes.css';

class ShowRoutes extends React.Component{
  constructor(props) {

    super(props);

    this.state = {
        items: [],
        isLoaded: false
    }
}

componentDidMount() {

    fetch(`http://localhost:9000/showRoutes/${this.props.data}`)
        .then(res => res.json())
        .then(json => {
            this.setState({
                items: json,
                isLoaded: true, 
            })
        }).catch((err) => {
            console.log(err);
        });
}

render() {

    const { isLoaded, items } = this.state;
    if (!isLoaded)
        return <div className="loading">  Loading... Please Wait!</div>;
    if(items.length == []){
        return <div className="message">  No results found! Maybe the input was too small! Try again with another input. </div>;
    }
    return (
        <div className="text_routes"> 
            <ul>
                {items.map((item) => (
                    <li key={item.Path_id} >
                        <b>Path Id:</b> {item.Path_id} | <b>Path Name:</b> {item.Path_name}           
                    </li>
                ))}
                {this.componentDidMount}
            </ul>
        </div>
    );
  }
}
export default ShowRoutes;

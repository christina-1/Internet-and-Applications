import React from 'react';
import '../css/select_time.css';
import ShowRoutes from './ShowRoutes';

var myTime = 0;
class SelectTime extends React.Component {
    constructor(){
        super();

        this.onHandleNumberChange = this.onHandleNumberChange.bind(this);

        this.state = {
            text: "Enter maximum time",
            regexp: /^[1-9]\d*$/, 
            results: null,
            isClicked: true,
            errorText: ""
        };
    }

    onHandleNumberChange = c => {
        let time = c.target.value;
        this.setState({results: time});

        // if value is not blank, then test the regular expression
        if(time === '' || this.state.regexp.test(time)){
            this.setState({
                isClicked: false,
                [c.target.name]: time})  
        }
        myTime = time; 
    }
    
    onClickHandler = () =>{
        let errorText = "";
        var isValid = true; 

        // Check if input is empty
        if(this.state.results == null){
            errorText = "Please insert a value!"
        }

        // Check if the input is valid integer 
        else if(!this.state.results.match(/^[1-9]\d*$/)){
            errorText = "Invalid input!";
        }

        // Check if input is too large
        else if(this.state.results>20000){
            errorText = "The input is too large!";
        }
        
        if(errorText!==""){
            this.setState({errorText});
            isValid = false;
        }

        // If an error exists in the input error message is shown to user
        if(!isValid){
            this.setState({
                isClicked: false,
                errorText: errorText
            })
        }
        else{
            this.setState({
                isClicked: true,
                time: myTime,
                errorText: ""
            })
        }
      }

    componentDidMount() {
        // Trigger update so that user can give another input 
        this.setState({ isClicked: !this.state.isClicked });
    }

    render(){
        return(
        <div className="background">
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Enter the time</h1>
                    <form action="http://localhost:9000/giveTime" method="POST">
                        <div className="minutes">
                            <label htmlFor="minutes"> Maximum available time</label>
                            <input type = "number" min = "1" max = "20000" name = "time" placeholder = "Type time..." 
                            onChange = {this.onHandleNumberChange}/> 
                            <div style = {{fontSize: 15, color: "#b30039"}}> 
                            {this.state.errorText}</div>
                            <div className="submitForm">
                                <button onClick = { (e) => { e.preventDefault(); this.onClickHandler();}} type = "submit"> Search </button>
                            </div>       
                        </div>
                    </form>
                </div>                 
            </div>
            <div>
                {this.state.isClicked ? <ShowRoutes data={this.state.time}/> : null}
            </div>
        </div>
            
        );
    }
}
export {SelectTime as default} ;
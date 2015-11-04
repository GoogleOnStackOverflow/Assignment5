var dataSetter = require('./dataSet.js');
var dataSet = dataSetter();
var person = require('./person.js');

const ENTER_KEY = 13;

class App extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {statement: 0,
    		value: ''};
  	}

 	clicks(st) {
		this.setState({
			statement:st,
		});
	}

	handleChange(changeEvent) {
    	this.setState({value: changeEvent.target.value});
  	}

  	buttonOnclick(){
    	if(this.state.value !== '')
    		dataSet.setMessage(this.state.value,this.state.statement);
    	this.setState({value :''});
  	}

	render() {
    	return (
      		  <div>
                <div>
      			   <person onClick = {this.clicks.bind(this,1)} className = 'btn btn-default'>Adam  </person>
      			   <person onClick = {this.clicks.bind(this,2)} className = 'btn btn-default'>Betty  </person>
      			   <person onClick = {this.clicks.bind(this,3)} className = 'btn btn-default'>Chris</person>
                </div>
      			
      			<textarea rows="10" cols="50" value = {dataSet.getMessage(this.state.statement)}>
      			</textarea>
      			
      			<div>
					<input onChange = {this.handleChange.bind(this)} value = {this.state.value}></input>
              		<button onClick = {this.buttonOnclick.bind(this)} className = 'btn btn-success'>submit</button>
      			</div>
      		</div>
    	);
  	}
};

ReactDOM.render(<App />, document.getElementById('root'));

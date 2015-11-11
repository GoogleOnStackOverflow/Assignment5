// use re-base to connect firebase
const Rebase = require('re-base');
const base = Rebase.createClass('https://popping-fire-7829.firebaseio.com');

// use modules
var person = require('./person.js');

const ENTER_KEY = 13;

class App extends React.Component {

  // Constructor
	constructor(props) {
    	super(props);
    	this.state = {
        statement: 0,
        messageHis: '',
    		value: '',
        Adam: '',
        Betty: '',
        Chris: '',
      };
  	}

  // re-base
  componentDidMount() {
    this.ref = [
      base.syncState('Adam', {
        context: this,
        state: 'Adam',
        asArray: false
      }),
      base.syncState('Betty', {
        context: this,
        state: 'Betty',
        asArray: false
      }),
      base.syncState('Chris', {
        context: this,
        state: 'Chris',
        asArray: false
      }),
    ]
  }

  componentWillUnmount() {
    base.removeBinding(this.ref[0]);
    base.removeBinding(this.ref[1]);
    base.removeBinding(this.ref[2]);
  }

  // action functions
 	clicks(st) {
		this.setState({
			statement:st,
		});
    switch(st){
      case 1:
        this.setState({
          messageHis: this.state.Adam,
        });
      break;
      case 2:
        this.setState({
          messageHis: this.state.Betty,
        });
      break;
      case 3:
        this.setState({
          messageHis: this.state.Chris,
        });
      break;
    }
	}

	handleChange(changeEvent) {
    	this.setState({value: changeEvent.target.value});
  }

  buttonOnclick(){
    	if(this.state.value !== ''){
        switch(this.state.statement){
          case 1:
            this.setState({
              Adam : this.state.Adam + '\nme: ' + this.state.value,
              messageHis : this.state.Adam + '\nme: ' + this.state.value,
            });
          break;
          case 2:
            this.setState({
              Betty : this.state.Betty + '\nme: ' + this.state.value,
              messageHis : this.state.Betty + '\nme: ' + this.state.value,
            });
          break;
          case 3:
            this.setState({
              Chris : this.state.Chris + '\nme: ' + this.state.value,
              messageHis : this.state.Chris + '\nme: ' + this.state.value,
            });
          break;
          default:
            this.setState({
              value :''
            });
          break;
        }
      }
      this.setState({
        value: ''
      });
  }

  getMessage(){
    var toReturn = '';
    switch(this.state.statement){
      case 1:
        toReturn = this.state.Adam;
      break;
      case 2:
        toReturn =  this.state.Betty;
      break;
      case 3:
        rtoReturn =  this.state.Chris;
      break;
      default:
        toReturn = '';
      break;
    }
    return toReturn;
  }

	render() {
    	return (
      		  <div>
                <div>
      			   <person onClick = {this.clicks.bind(this,1)} className = 'btn btn-default'>Adam  </person>
      			   <person onClick = {this.clicks.bind(this,2)} className = 'btn btn-default'>Betty  </person>
      			   <person onClick = {this.clicks.bind(this,3)} className = 'btn btn-default'>Chris</person>
                </div>
      			
      			<textarea rows="10" cols="50" value = {this.state.messageHis}>
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

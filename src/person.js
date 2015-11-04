module.exports = class person extends React.Component {
  render(){
    const { children, onClick , className} = this.props;
    return (
          <button 
          	type = "button"
            onClick = {onClick} 
            className = {className}
          >
            {children}
          </button>
    );
  }
}
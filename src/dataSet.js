var Adam = 'Adam: Hi!\nme: Hello\nAdam: What\'s going on?';
var Betty = 'Betty: Hi!\nme: Hello\nBetty: What\'s going on?';
var Chris = 'Chris: Hi!\nme: Hello\nChris: What\'s going on?';

var dateSet = {
	Adam : 'Adam: Hi!\nme: Hello\nAdam: What\'s going on?',
	Betty : 'Betty: Hi!\nme: Hello\nBetty: What\'s going on?',
	Chris : 'Chris: Hi!\nme: Hello\nChris: What\'s going on?',

	setMessage: function(message,state){
		switch(state){
			case 1 : Adam += ( '\nme: ' + message);
				break;
			case 2 : Betty += ( '\nme: ' + message);
				break;
			case 3 : Chris += ( '\nme: ' + message);
				break;
		}
	},

	getMessage: function(state){
		if(state === 1) return Adam;
		if(state === 2) return Betty;
    	if(state === 3) return Chris;
    	return '';
	}
};

module.exports = function(){return dateSet;};
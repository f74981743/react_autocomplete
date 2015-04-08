var MyForm = React.createClass({displayName: "MyForm",
	
	getInitialState: function() {
		return {
			firstName: 'hello world'
		};
	},
	
	onFirstNameChange: function(value) {
		this.setState({firstName: value});
	},
	
	render: function() {
		return (
			React.createElement("div", {className: "MyForm"}, 
				React.createElement("div", null, 
					React.createElement(KendoText, {value: this.state.firstName, onChange: this.onFirstNameChange})
				), 
				React.createElement("pre", null, JSON.stringify(this.state, undefined, 2))
			)
		);
	}

});	

React.renderComponent(React.createElement(MyForm, null), document.getElementById('content'));
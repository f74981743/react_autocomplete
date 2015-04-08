var MyForm = React.createClass({displayName: "MyForm",
	
	getInitialState: function() {
		return {
			firstName: 'hello world'
		};
	},
	
	render: function() {
		return (
			React.createElement("div", {className: "MyForm"}, 
				React.createElement("div", null, this.props.firstName), 
				React.createElement("pre", null, JSON.stringify(this.state, undefined, 2))
			)
		);
	}

});	

React.renderComponent(React.createElement(MyForm, null), document.getElementById('content'));
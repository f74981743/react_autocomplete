var MyForm = React.createClass({displayName: "MyForm",
	
	getInitialState: function() {
		return {
			firstName: 'hello world'
		};
	},
	
	onFirstNameChange: function(value) {
		this.setState({firstName: value});
	},
	
	onLastNameChange: function(value) {
		this.setState({lastName: value});
	},
	
	onAgeChange: function(value) {
		this.setState({age: value});
	},
	
	onBirthdayChange: function(value) {
		this.setState({birthday: value});
	},
	
	onBirthdayChange: function(value) {
		this.setState({birthday: value});
	},
	
	render: function() {
		return (
			React.createElement("div", {className: "MyForm"}, 
				React.createElement(FormField, {fieldInfo: {"label": "First name"}, isValid: [true, '']}, 
					React.createElement(KendoText, {value: this.state.firstName, onChange: this.onFirstNameChange})
				), 
				
				React.createElement(FormField, {fieldInfo: {"label": "Last name"}, isValid: [true, '']}, 
					React.createElement(KendoText, {value: this.state.lastName, onChange: this.onLastNameChange})
				), 
				
				React.createElement(FormField, {fieldInfo: {"label": "Gender"}, isValid: [true, '']}, 
					React.createElement(KendoCombobox, {
						dataSource: [
							{value: 'male', label: 'Male'},
							{value: 'female', label: 'Female'},
						], 
						displayField: "label", 
						valueField: "value", 
						value: this.state.gender, 
						onChange: this.onGenderChange})
				), 
				
				React.createElement(FormField, {fieldInfo: {"label": "Age"}, isValid: [true, '']}, 
					React.createElement(KendoNumber, {value: this.state.age, onChange: this.onAgeChange})
				), 
				
				React.createElement(FormField, {fieldInfo: {"label": "Birthday"}, isValid: [true, '']}, 
					React.createElement(KendoDate, {value: this.state.birthday, onChange: this.onBirthdayChange})
				), 
				
				
				React.createElement("pre", null, JSON.stringify(this.state, undefined, 2))
			)
		);
	}

});	

React.renderComponent(React.createElement(MyForm, null), document.getElementById('content'));
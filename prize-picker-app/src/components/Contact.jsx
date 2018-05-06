import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
    };
  }

  handleSubmit = (event) => {
    console.log(`first name: ${this.state.firstName}`);
    console.log(`last name: ${this.state.lastName}`);
    console.log(`email: ${this.state.email}`);

    this.props.history.push('/RandomNumber');

    event.preventDefault();
  }

  handleChange = (event) => {
    const name = event.currentTarget.name;
    const type = event.currentTarget.type;
    const value = type === 'checkbox' ? event.currentTarget.checked : event.currentTarget.value;

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <form id="contactForm" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="firstName">
            First Name:
            <input 
              id="firstName" 
              name="firstName" 
              type="text" 
              size="10" 
              maxLength="25" 
              placeholder="First Name" 
              value={this.state.firstName} 
              onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label htmlFor="lastName">
            Last Name:
            <input 
              id="lastName" 
              name="lastName" 
              type="text" 
              size="10" 
              maxLength="50" 
              placeholder="Last Name" 
              value={this.state.lastName} 
              onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email Address:
            <input
              id="email"
              name="email"
              type="email"
              size="25"
              maxLength="50"
              placeholder="kevin@example.com"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <button 
          id="submit" 
          name="submit" 
          type="submit" 
          form="contactForm">Claim your prize!</button>
      </form>
    );
  }
}

export default Contact;

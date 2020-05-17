import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'jdoe@gmail.com',
        phone: '555-555-5555'
      },
      {
        id: 2,
        name: 'Karen Wiliams',
        email: 'kw@gmail.com',
        phone: '400-555-5555'
      },
      {
        id: 3,
        name: 'henry',
        email: 'henry@gmail.com',
        phone: '355-555-5555'
      },
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;

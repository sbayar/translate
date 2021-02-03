import React, { Component } from 'react';

const Context = React.createContext('english');

export class LanguageStore extends Component<any, any> {
  state = { language: 'english' } ;

  onLanguageChange = (language: any) => {
    this.setState({ language });
  };

  render() {
    const value: any = { ...this.state, onLanguageChange: this.onLanguageChange };

    return <Context.Provider value={value}>{this.props.children}</Context.Provider>;
  }
}

export default Context;

import { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends Component {
  renderSubmit({ language }: any) {
    return language === 'english' ? 'Submit' : 'Voorlegen';
  }

  renderButton(color: string) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(value: any) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>{(color: string) => this.renderButton(color)}</ColorContext.Consumer>
    );
  }
}

export default Button;

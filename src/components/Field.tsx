import { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends Component {
  // Naming (fixed) important in order to make the context to work
  static contextType = LanguageContext;

  render() {
    const text = this.context.language === 'english' ? 'Name' : 'Naam';

    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;

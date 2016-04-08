import { React } from '../../dependencies';

export class Form extends React.Component {

  static get propTypes() {
    return {
      className: React.PropTypes.string,
      type: React.PropTypes.string,
      role: React.PropTypes.string,
      children: React.PropTypes.array
    };
  }

  render() {
    return (
      <form
        className={ this.props.className || 'form' }
        type={ this.props.type || 'form' } 
        role={ this.props.role || 'submit' } 
        >
          { this.props.children }
      </form>
    );
  }
}


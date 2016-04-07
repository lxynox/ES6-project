import { React } from '../../dependencies';

/**
 * @extends {React.Component}
 */
export class Button extends React.Component {

  /**
   * @return {Object} properties accepted by this component.
   * @property {?string} className
   * @property {?string} content
   * @property {?Function} onClick
   * @property {?string} type
   * @see https://facebook.github.io/react/docs/component-specs.html#proptypes
   */
  static get propTypes() {
    return {
      className: React.PropTypes.string,
      content: React.PropTypes.string,
      onClick: React.PropTypes.func,
      disabled: React.PropTypes.bool,
      type: React.PropTypes.string,
      children: React.PropTypes.object,
    };
  }

  /**
   * @return {ReactElement}
   * @see https://facebook.github.io/react/docs/component-specs.html#render
   */
  render() {
    return (<button
      className={ this.props.className || 'btn' }
      type={ this.props.type || 'button' }
      disabled={ this.props.disabled || false }
      onClick={ this.props.onClick } >
        { this.props.content }
    </button>);
  }
}

import { React } from '../../dependencies';

/**
 * @extends {React.Component}
 */
export class Navbar extends React.Component {

  /**
   * @return {Object} properties accepted by this component.
   * @property {?string} className
   * @property {?string} type
   * @property {?object} children
   * @see https://facebook.github.io/react/docs/component-specs.html#proptypes
   */
  static get propTypes() {
    return {
      className: React.PropTypes.string,
      type: React.PropTypes.string,
      children: React.PropTypes.object,
    };
  }

  /**
   * @return {ReactElement}
   * @see https://facebook.github.io/react/docs/component-specs.html#render
   */
  render() {
    return (
      <nav
        className={ this.props.className || 'nav nav-default' }
        type={ this.props.type || 'nav' } >
          { this.props.children }
      </nav>
    );
  }
}

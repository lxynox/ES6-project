import { React } from '../../dependencies';
import { Navbar } from './Navbar';

export class SideNavbar extends React.Component {
  render() {
    return (
      <Navbar
        className="nav col-sm-3 sidenav"
        type="sidenav">
        <ul className="nav nav-pills nav-stacked">
          <li className="active"><a href="#section1">Home</a></li>
          <li><a href="#section2">Friends</a></li>
          <li><a href="#section3">Family</a></li>
          <li><a href="#section3">Photos</a></li>
        </ul>
      </Navbar> 
    );
  }
}

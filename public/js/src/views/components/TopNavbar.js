import { React } from '../../dependencies';
import { Navbar } from './Navbar';

export class TopNavbar extends React.Component {
  render() {
    return (
      <Navbar type="topnav">
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><a href="#">WHO</a></li>
            <li><a href="#">WHAT</a></li>
            <li><a href="#">WHERE</a></li>
          </ul>

          <form className="navbar-form navbar-right" role="search">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search" />
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>
      </Navbar>
    );
  }
}

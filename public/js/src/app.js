import { _, React, ReactDOM } from './dependencies.js';

export class App extends React.Component {
  render() {
    let component;

    component = <div className="container">
                  // navigation section
                  <nav className="nav nav-default">
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
                  </nav>

                  // main section 
                  <div className="container-fluid">
                    <div className="row content">
                      <nav className="nav col-sm-3 sidenav">
                        <ul className="nav nav-pills nav-stacked">
                          <li className="active"><a href="#section1">Home</a></li>
                          <li><a href="#section2">Friends</a></li>
                          <li><a href="#section3">Family</a></li>
                          <li><a href="#section3">Photos</a></li>
                        </ul> 
                      </nav>

                      <div className="col-sm-9">
                         <p>Food is my passion. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                         </p> 
                      </div>
                    </div>
                  </div>

                  // footer section
                  <footer className="container-fluid text-center">
                    <p>@Copyright reserved by lxynox</p>
                  </footer>
                </div>;
    console.log('hello world example is done sofar!');

    return component;
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

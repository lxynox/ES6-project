// dependencies
import { React } from './dependencies.js';
// views
import { SideNavbar } from './views/components/SideNavbar';
import { Content } from './views/components/Content';
import { TopNavbar } from './views/components/TopNavbar';
import { Footer } from './views/components/Footer';

export class App extends React.Component {
  render() {
    let component;

    component = 
      <div className="container">
        // navigation section
        <TopNavbar />

        // main section 
        <div className="row content">
          <SideNavbar />
          <Content />
        </div>

        // footer section
        <Footer />
      </div>;

    return component;
  }
};

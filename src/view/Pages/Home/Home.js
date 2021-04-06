import React from 'react';
import ReactDOM from 'react-dom';
import '../parts/Header/Header'
import '../parts/content/heading.js';
import '../parts/content/heading.css';
import '../parts/footer/footer.js';
import '../parts/footer/footer.css';

class Home extends React.Component {
  render() {
    return (
      <Header />
      <Content />
      <Footer />
    );
  }
}
ReactDOM.render(<Home />, document.getElementById('root'));

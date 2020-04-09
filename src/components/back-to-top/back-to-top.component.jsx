import React from 'react';
import './back-to-top.styles.scss';

class BackToTop extends React.Component {

  trackingMagic = () => {
    function trackScroll() {
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight;

      if (scrolled > coords) {
        goTopBtn.classList.add('back-to-top-show');
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('back-to-top-show');
      }
    }

    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
      }
    }

    var goTopBtn = document.querySelector('.back-to-top');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
  }

  componentDidMount() {
    this.trackingMagic();
  }


  render() {
    return (
      <div>
        <button className="back-to-top" onClick={this.trackingMagic}>&uarr;</button>
      </div>
    )
  };
}

export default BackToTop;
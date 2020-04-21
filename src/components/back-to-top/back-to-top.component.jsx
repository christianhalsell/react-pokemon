import React from 'react';
import './back-to-top.styles.scss';

class BackToTop extends React.Component {
  scrollingMagic = () => {
    function trackScroll() {
      const scrolled = window.pageYOffset;
      const coords = document.documentElement.clientHeight;

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

    const goTopBtn = document.querySelector('.back-to-top');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
  }

  componentDidMount() {
    this.scrollingMagic();
  }

  render() {
    return (
      <button className="back-to-top" onClick={this.scrollingMagic}>&uarr;</button>
    )
  };
}

export default BackToTop;
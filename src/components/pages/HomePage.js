import React, { Component, Fragment } from 'react';
import Photo from 'components/gallery/Photo.js';
import imagesHome from 'config/images-home.json';
import styled from 'styled-components';

const HomeGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  grid-auto-flow: dense;
  grid-gap: 3rem;
  margin: 2rem 0;

  .title {
    display: block;
    font-size: 1.4rem;
    font-weight: 400;
    margin-top: 0.5rem;
    text-align: center;
  }
`;

class HomePage extends Component {
  componentDidMount() {
    const lazyImages = document.querySelectorAll('.lazy');

    const imageObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyImages.forEach(image => {
      imageObserver.observe(image);
    });
  }

  render() {
    return (
      <Fragment>
        <div className="intro-text">
          <p>Buttercream Dream is a cake company in Sunderland, baking up delicious cupcakes and celebration cakes for any occasion such as birthdays, christenings, weddings, anniversaries and baby showers – not to forget special days such as mothers day, fathers day and every event between.</p>
          <p>If you would like to see more pictures of cakes I've previously made, I upload them all to my <a href="https://www.facebook.com/pg/buttercreamdream.uk/photos/" target="_blank" rel="noopener noreferrer">Facebook gallery</a> and <a href="https://instagram.com/buttercream.rach" target="_blank" rel="noopener noreferrer">Instagram page</a></p>
        </div>
        <HomeGallery>
          {imagesHome.map((item, index) => <Photo {...item} key={index}  />)}
        </HomeGallery>
      </Fragment>
    )
  }
}

export default HomePage;

import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ pictures, toggleModal }) => {
  return (
    <>
      {!pictures && <p>No data</p>}
      <ul className="ImageGallery">
        {pictures &&
          pictures.map(el => (
            <ImageGalleryItem
              className="ImageGalleryItem"
              key={el.id}
              source={el.webformatURL}
              alternative={el.tags}
              full={el.largeImageURL}
              toggleModal={toggleModal}
            />
          ))}
      </ul>
    </>
  );
};

export default ImageGallery;

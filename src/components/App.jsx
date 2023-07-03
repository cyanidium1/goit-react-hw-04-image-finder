import '../styles.css';
import React from 'react';
import { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import '../styles.css';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import { getter } from 'utils/getter';

const App = () => {
  const [pictures, setPictures] = useState([]);
  const [search, setsearch] = useState('');
  const [loading, setloading] = useState(false);
  const [modal, setmodal] = useState(false);
  const [modalFull, setmodalFull] = useState(null);
  const [page, setpage] = useState(1);
  const [showBtn, setshowBtn] = useState(false);
  //а вот і костилі під'їхали)

  const setValue = searchName => {
    setsearch(searchName);
    setpage(1);
    setPictures([]);
  };

  const toggleModal = full => {
    setmodal(true);
    setmodalFull(full);
  };

  const closeModal = () => {
    setmodal(false);
  };

  const loadMore = () => {
    setpage(prevState => prevState + 1);
  };

  useEffect(() => {
    if (search) {
      setshowBtn(false);
      setloading(true);
      getter(search, page)
        .then(response => {
          if (response.data.hits.length > 0) {
            setPictures(prevState => {
              return [...prevState, ...response.data.hits];
            });
            setshowBtn(response.data.hits.length / 12 === 1);
          }
        })
        .catch(error => console.log('error msg:', error))
        .finally(setloading(false));
    }
  }, [page, search]);

  return (
    <>
      <Searchbar getName={setValue} />
      {!pictures && <p>No data</p>}
      <ImageGallery pictures={pictures} toggleModal={toggleModal} />
      {loading && <Loader />}
      {showBtn && <Button click={loadMore} />}
      {modal && <Modal full={modalFull} closeModal={closeModal} />}
    </>
  );
};
export default App;

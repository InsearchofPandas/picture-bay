import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';
import Footer from './components/Footer';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [term]);

  return (
    <>
      <h1 className='font-bold text-purple-700 text-3xl m-8 text-center md:text-6xl'>PICTURE BAY</h1>
      <div className='container mx-auto'>
        <ImageSearch searchText={(text) => setTerm(text)} />

        {!isLoading && images.length === 0 && <h1 className='text-5xl text-center mx-auto mt-32'>No Images Found</h1>}

        {isLoading ? (
          <h1 className='text-6xl text-center mx-auto mt-32'>Loading...</h1>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;

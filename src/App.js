import React, { useState, useEffect } from 'react';
import ImageCard from './components/imageCard';

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
  });

  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-3 gap-4'>
        {images.map((image) => (
          <ImageCard key={image.id} />
        ))}
      </div>
    </div>
  );
}

export default App;

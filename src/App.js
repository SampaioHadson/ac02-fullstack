import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [image, setImage] = useState();

  useEffect(() => {
    nextImage()
  }, []);

  function nextImage() {
    axios.get('https://picsum.photos/300/300', { responseType: 'blob' })
      .then(response => {
        setImage(URL.createObjectURL(response.data))
      })
      .catch(error => {
        console.log("error when getting image: " + error)
      })
  }

  return (
    <div className='container'>
      <div className='imageContainer'>
        <img src={image} alt='Error' />
        <button onClick={nextImage} className="App">Next Image</button>
      </div>
    </div>
  );
}

export default App;

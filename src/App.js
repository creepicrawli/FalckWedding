import './App.css';
import './WeddingVideo.js';
import React, { StrictMode } from 'react';
import WeddingVideo from './WeddingVideo.js';
function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src='/LineArt.png' alt='' width='70%' height='120px' />
        <p className='FalckWedding'>
          Falck Wedding
        </p>

      </header>
      <body className="App-Body">
        <StrictMode>
          <WeddingVideo />
        </StrictMode>

      </body>
      <footer className='footer'>
        <div className='VideoMessage'>
          <p className='SaveTheDate'>
            Save the Date!
          </p>
          <p>
            We’re excited to invite you to a weekend wedding getaway in Gansbaai.
          </p>
          <p>
            Mark your calendars for a weekend full of love, celebration, and unforgettable memories. We can’t wait to share this special time in our lives with you!
          </p>
          <p>
            More information coming soon…
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

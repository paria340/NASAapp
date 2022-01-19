import './App.css';

import NasaApi from './components/NasaApi';

function App() {
  return (
    <div className="App">
      <div className='intro'>
        <h1>Spacetagram</h1>
        <p>Brought to you by NASA's image api</p>
      </div>
      <NasaApi />
      <footer>
        <p>Made by Parisa for Shopify</p>
      </footer>
    </div>
  );
}

export default App;

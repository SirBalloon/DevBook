import React, {useState} from 'react';
import HomePage from './Pages/HomePage';
import PreloadingScreen from './Pages/Loading';

const App = () => {
  const [showNextPage, setShowNextPage] = useState(false);

  const handleNextPage = () => {
    setShowNextPage(true);
  };

  const hasPreloaded = localStorage.getItem('hasPreloaded');

  return (
    <div className="app">
      {showNextPage ? (
        <HomePage />
      ) : (
        !hasPreloaded && <PreloadingScreen onNextPage={handleNextPage} />
        )}
    </div>
  );
};

export default App;

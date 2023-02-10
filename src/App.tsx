import React, { useEffect, useState } from 'react';
import Footer from './components/footer/footer';
// import Footer from './components/footer/Footer';
import Header from './components/header/header';
// import Header from './components/header/Header';
import MyCart from './layout/myCartPage/MyCartPage';



// interface Props {
//   isMobile: boolean;
// }

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <Header />
      <div className="App">
        <MyCart isMobile={isMobile} />
        <Footer />
      </div>
    </div>
  );
};

export default App;

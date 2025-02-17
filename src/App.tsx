import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Menu1 from './components/Menu1';
import Menu2 from './components/Menu2';
import Menu3 from './components/Menu3';
import Header from './components/Header';
import Footer from './components/Footer';
import DetailOfArchitecture from './components/DetailOfArchitecture';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <BrowserRouter>
        <Header />

        <main className='flex-grow'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu1' element={<Menu1 />} />
            <Route path='/menu2' element={<Menu2 />} />
            <Route path='/menu3' element={<Menu3 />} />
            <Route path='/menu1/:name' element={<DetailOfArchitecture />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

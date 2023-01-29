import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import NewsUpdate from './pages/newsUpdate';
import CryptoCurrencies from './pages/cryptoCurrencies';
import Exchanges from './pages/exchanges';
import {Routes,Route} from 'react-router-dom'
import Layout from './components/layout';
function App() {
  return (
    <div >
     <Layout>
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/crypto' element={<CryptoCurrencies />}/>
        <Route path='/news' element={<NewsUpdate />} />
        <Route path='/exchanges' element={<Exchanges />}/>
      </Routes>
     </Layout>
      
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/header';
import Feature from './components/feature';
import OurProducts from './components/our_products';
import Inspirations from './components/inspirations';
import Tips from './components/tips';
import Share from './components/share_block';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Feature/>
      <OurProducts/>
      <Inspirations/>
      <Tips/>
      <Share/>
      <Footer/>
    </div>
  );
}

export default App;

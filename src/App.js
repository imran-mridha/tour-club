import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Tours from './components/Tours/Tours';

function App() {
  return (
    <div className="bg-slate-100">
      <Header />
      <Tours />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;

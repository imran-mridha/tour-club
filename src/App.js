import './App.css';
import Faq from './components/Faq/Faq';
import Header from './components/Header/Header';
import Tours from './components/Tours/Tours';

function App() {
  return (
    <div className="bg-slate-50">
      <Header />
      <Tours />
      <Faq />
    </div>
  );
}

export default App;

import About from './components/about.jsx'
import Header from './components/header.jsx';
import MissionVision from './components/MissionVission.jsx';
import Services from './components/services.jsx';
import CoreValues from './components/corevalues.jsx';
import Footer from './components/footer.jsx';
import Contact from './components/contact.jsx';
function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <MissionVision/>
      <Services/>
      <CoreValues/>
      <Contact/> 
      <Footer/>
    </div>
  );
}

export default App;

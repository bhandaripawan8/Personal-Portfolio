import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonials from './Components/Testimonials/Testimonials';
import Contacts from './Components/Contacts/Contacts';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {

  return (
    <>
      <div>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contacts/>
      <Footer/>
    </div>
    </>
  )
}

export default App

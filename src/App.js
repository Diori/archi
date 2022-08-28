import './App.css';
import React,{useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Presentation from './pages/Presentation';
import Equipes from "./pages/Equipes";
import Tout from "./pages/Tout";
import Contact from "./pages/Contact";
import Missions from './pages/Missions';
import Residentiel from './pages/projets/Residentiel';
import Bureau from './pages/projets/Bureau';
import Commercial from './pages/projets/Commercial';
import Indistruel from './pages/projets/Indistruel';
import Mixte from './pages/projets/Mixte';
import Culturel from './pages/projets/Culturel';
import Culte from './pages/projets/Clute';
import Public from './pages/projets/Public';
import Home from './pages/Home';
import Projet from './pages/Projet';
import Opportunite from './pages/Opportunite';
import { FaFacebook,FaInstagram,FaLinkedin,FaYoutube,FaWhatsapp } from "react-icons/fa";
import {SliderData} from '../src/pages/slider/SliderData';
import { HiMenu } from 'react-icons/hi';
import Villa from './pages/projets/Villa';
import Immeuble from './pages/projets/Immeuble';
import Actualite from './pages/Actualite';

function App() {  
  //toggle menu
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth)
  const toggleNavSmoolMenu = () =>{
    setToggleMenu(!toggleMenu)
  }
  useEffect(()=>{
    const changewidth = () =>{
      setLargeur(window.innerWidth);

      if(window.innerWidth >850){
        setToggleMenu(false)
      }
    }
    window.addEventListener('resize', changewidth);
    return () =>{
      window.removeEventListener('resize', changewidth);
    }

  },[])
  //fin du toogle
  return (
    <Router>
    <div className="App">
      <header className="App-header"> 

      <div>
      
      </div>
        <nav className='navbar-expand-md'>
        <Link to={'/'} className='img--logo'><img src="../images/logo.jpeg" alt="lllllll" className="img_logo"></img></Link>
        {(toggleMenu || largeur > 850)  &&(
          <ul className='ul__main'>
              <li>
                
              </li>
              <li className='deroulant sau '> <a href="#">A propos</a> &ensp;
                <ul className="sous"> 
                  <li><Link to="/presentation">Présentation</Link></li>
                  <li><Link to="/missions">Nos Missions</Link></li>
                  <li><Link to="/equipes">Notre Equipe</Link></li>
                  <li><a href='https://issuu.com/iconicarchilab/docs/book_iconic_archilab_rev.09.06.2021' target="_blank">Portfolio</a></li>
                </ul>
              </li>
              <li className="deroulant sau"><a href="#">Projets</a> &ensp;
                <ul className="sousx">
                  
                  <li><a href="#" className="deroulant">RESIDENTIEL</a>
                      <ul > 
                        <li className="souz"><Link to="/projets/villa">Villa</Link></li>
                        <li className="souz"><Link to="/projets/immeuble">Immeuble</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/projets/commercial">COMMERCIAL</Link></li>
                  <li><Link to="/projets/bureau" className='bureaux'>BUREAU</Link></li>
                  <li><Link to="/projets/public" className='publicx'>PUBLIC</Link></li>
                  <li><Link to="/projets/industriel" className='INDUSTRIELX'>INDUSTRIEL</Link></li>
                  <li><Link to="/projets/mixte" className='mixtex'>MIXTE</Link></li>
                  <li><Link to="/projets/culturel" className='culturelx' >CULTUREL</Link></li>
                  <li><Link to="/projets/culte" className='cultex'>CULTE</Link></li>
                  <li><Link to="/tout" className='toutx'>TOUS LES PROJETS</Link></li>
                </ul>
              </li>
              <li><Link to="/actualite" className='sau xc'>Actualités</Link></li>
              <li><Link to="/opportunite" className='sau xc'>Opportunités</Link></li>
              <li><Link to="/contact" className='sau xc'>Contact</Link></li>
              <li className='lien'>
              <a href='https://api.whatsapp.com/send/?phone=%2B221782620334&text&app_absent=0' target="_blank" className='img_rx_link wh' ><FaWhatsapp /></a>
            <a href='https://www.facebook.com/Iconicarchilab/' target="_blank" className='img_rx_link' ><FaFacebook  className='fb' /></a>
            <a href='https://www.linkedin.com/in/iconic-archi-lab-8a45121ab/' target="_blank" className='img_rx_link in'><FaLinkedin /></a>
          <a href='https://www.instagram.com/iconic_archilab/' target="_blank" className='img_rx_link ins'><FaInstagram /></a>
            <a href='https://www.youtube.com/channel/UCovThQxA710t9crFzXE_2dw' target="_blank" className='img_rx_link yt'><FaYoutube /></a>
            </li>


          </ul>
        )}
  </nav>
  <div className='btn' onClick={toggleNavSmoolMenu}><HiMenu /></div>
      </header>
      <main>
      <Switch>
          
      
          <Route path="/presentation">
            <Presentation />
          </Route>
          <Route path="/missions">
            <Missions />
          </Route>
          <Route path="/equipes">
            <Equipes />
          </Route>
          
         
          <Route path="/tout" exact>
            <Tout />
          </Route>
          <Route path="/projet/:id" render={(props) =>  <Projet {...props} />} >             
          </Route>
         
         
          <Route path="/projets/residentiel">
            <Residentiel />
          </Route>
          <Route path="/projets/commercial">
            <Commercial />
          </Route>
          <Route path="/projets/bureau">
            <Bureau />
          </Route>
          <Route path="/projets/public">
            <Public />
          </Route>

          <Route path="/projets/villa">
            <Villa />
          </Route>
          <Route path="/projets/immeuble">
          <Immeuble />
        </Route>

          <Route path="/projets/industriel">
            <Indistruel />
          </Route>
          <Route path="/projets/mixte">
            <Mixte />
          </Route>
          <Route path="/projets/culturel">
            <Culturel />
          </Route>
          <Route path="/projets/culte">
            <Culte />
          </Route>
          <Route path="/actualite">
            <Actualite />
          </Route>
          <Route path="/opportunite">
            <Opportunite />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/" exact>
            <Home slides={SliderData}/>
          </Route>
         
          
          </Switch>
          </main>
      <footer className="footer">
       
       ©2021 ARCHILAB 
       
          Dakar-Sénegal
          
        (+221) 78-262-03-34
      
      </footer>
    </div>
    </Router>
  );
}

export default App;

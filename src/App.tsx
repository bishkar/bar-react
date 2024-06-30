import './App.css';

import cn from 'classnames';
import { useRef, useState } from 'react';


import Logo from './components/Navbar/Logo/Logo';
import ApadtiveMenu from './components/Navbar/ApadtiveMenu/ApadtiveMenu';
import NavItem from './components/Navbar/NavItem/NavItem';
import Navbar from './components/Navbar/Navbar/Navbar';

import Banner from './components/Banner/Banner';
import Button from './components/Buttons/Button/Button';

import About from './components/Info/About/About';
import Header from './components/Info/Header/Header';
import InfoContainer from './components/Info/InfoContainer/InfoContainer';
import Advertisment from './components/Info/Advertisment/Advertisment';
import BackToTop from './components/BackToTop/BackToTop';
import Galery from './components/Info/Galery/Galery';
import Reservation from './components/Info/Reservation/Reservation/Reservation';
import { createBrowserRouter } from 'react-router-dom';



const router = createBrowserRouter([
  {
    'path': '/',
    'element': <App />,
  }
]);

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const regRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToReg = () => {
    regRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={cn('bg-cover bg-center h-screen', { 
      'bg-black bg-image' : isOpen,
      'bg-cocktail' : !isOpen,
    })}>
      <BackToTop />
      <nav>
        <div className={cn(
          'max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-6 sm:px-0 px-4 sm:mb-0 mb-36',
        )}>
          <Logo isOpen={isOpen}/>
          <ApadtiveMenu toggleMenu={toggleMenu} isOpen={isOpen} />

          <Navbar isOpen={isOpen}>
            <NavItem text="What's On" isOpen={isOpen} onClick={scrollToAbout}/>
            <NavItem text="Menu" isOpen={isOpen}/>
            <NavItem text="Book a Table" isOpen={isOpen} onClick={scrollToReg}/>
            <NavItem text="Contact" isOpen={isOpen}/>
          </Navbar>
        </div>
      </nav>

      {!isOpen && 
      <div className={cn(
        { 'opacity-0': isOpen}
      )}>
        <Banner>
          <Button text="Book a Table" onClick={scrollToReg}/>
        </Banner>
        <InfoContainer>
          <hr className='sm:w-0 w-full h1 sm:mb-0 mb-12'/>
          <About ref={aboutRef}>
            <Header text="About"/>
          </About>
          <hr className='sm:w-full w-0 h1 sm:mb-12 mb-0'/>

          <Advertisment
            title="Happy Hour"
            event="50% on all cocktails"
            date="Monday to Thursday"
            time="3pm-6pm"
            img="cocktails.jpg"
            reverse={false}
          >
            <Header text="What's on"/>
            <Button text="Book a Table" onClick={scrollToReg}/>
          </Advertisment>
          <Advertisment
            title="Friday Night Live"
            event="Taylor Rees"
            date="January 1st, 2035"
            time="8pm"
            img="tailor.jpeg"
            reverse={true}
          >
            <Header text=""></Header>
            <Button text="Book a Table" onClick={scrollToReg}/>
          </Advertisment>

          <Galery
            images={[
              { 'src': 'photoes/1.jpg', 'alt': '1' }, { 'src': 'photoes/2.jpg', 'alt': '2' }, { 'src': 'photoes/3.jpg', 'alt': '3' }, { 'src': 'photoes/4.jpg', 'alt': '4' }, { 'src': 'photoes/5.jpg', 'alt': '5' }
            ]}
          >
            <Header text="Come Down & Grab a Pint"/>
          </Galery>

          <Reservation ref={regRef}>
            <Header text="Reserve a Table"/>
          </Reservation>
        </InfoContainer>
      </div>
      
      }
    </div>
  );
}

export default App;

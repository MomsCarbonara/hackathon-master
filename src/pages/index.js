import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import {homeObjOne,homeObjTwo,homeObjThree,obj4} from '../components/InfoSection/Data';
import InfoSection from '../components/InfoSection';
//import Footer from '../components/Footer'
import Services from '../components/Services'

 const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <InfoSection {...obj4} />
      {/*<Footer/>*/}
    </>
  )
};

export default Home;






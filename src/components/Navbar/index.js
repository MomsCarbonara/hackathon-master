import React, {useState,useEffect} from 'react';
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll';
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)
  
    const changeNav = () =>{
      if(window.scrollY >= 80){
        setScrollNav(true)
      } else {
        setScrollNav(false)
      }
    }
  
    const toggleHome = () => {
      scroll.scrollToTop();
    }
  
  useEffect(()=>{
    window.addEventListener('scroll',changeNav)
  },[])
  return(
    <>
    <IconContext.Provider value={{color: '#fff'}}>
    <Nav scrollNav={scrollNav}>
        <NavbarContainer>
      <NavLogo to = '/' onClick={toggleHome}>
        ComeFind.Me
        </NavLogo>
      <MobileIcon onClick={toggle}>
        <FaBars />
      </MobileIcon>
      <NavMenu>
        <NavItem>
          <NavLinks 
          to='about'
          smooth={true} 
          duration={500} 
          spy={true} 
          exact='true'
          offset={-80}
          >
            Report missing
            </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks 
          to='discover'
          smooth={true} 
          duration={500} 
          spy={true} 
          exact='true'
          offset={-80}
          >
            Activities map
            </NavLinks>
            </NavItem>
            <NavItem>
          <NavLinks 
          to='service'
          smooth={true} 
          duration={500} 
          spy={true} 
          exact='true'
          offset={-80}
          >
            Search
            </NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks 
          to='signup'
          smooth={true} 
          duration={500} 
          spy={true} 
          exact='true'
          offset={-80}
          >
            Sign up                        
            </NavLinks>
        </NavItem>

        <NavBtn>
                    <NavBtnLink to="/signin">Log in</NavBtnLink>
                </NavBtn>
                
      </NavMenu>
      </NavbarContainer>
    </Nav>
    </IconContext.Provider>
    </>
  )
};

export default Navbar; 
import React from 'react'
import { IconBase } from 'react-icons'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute, SidebarWrapper } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>Report missing person</SidebarLink>
                <SidebarLink to="discover" onClick={toggle}>Activities map</SidebarLink>
                <SidebarLink to="service" onClick={toggle}>Search</SidebarLink>
                <SidebarLink to="signup" onClick={toggle}>Sign up</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/signin">
                    Log in
                </SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
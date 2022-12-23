import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useState } from 'react'

const NavBar = styled.nav`
    background-color: #041C32;
    height: 3rem;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 2px solid #064663;
    
    @media (max-width: 768px) {
        height: 6rem;
    }`;

const Headline = styled.h1`
    padding: 1rem;
    color: #F9FAFB;
    margin: 0;
    font-family: 'Pacifico', cursive;
    `;

const LinkWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    
    @media (max-width: 768px) {
        flex-direction: column;
        display:none;
    `;

const LinkStyle = styled(Link)`
    color: #3C415C;
    text-decoration: none;
    font-size: 1rem;
    padding: 2rem;
    `;

const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    gap: 0.2rem;
    padding: 1rem;
    cursor: pointer;
    span {
        width: 2rem;
        height: 0.2rem;
        background-color: #3C415C;
    }
    @media (max-width: 768px) {
        display: flex;
    }
    `;

const Hamburgermenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    background-color: #041C32;
    position: absolute;
    top: 3rem;
    right: 0;
    width: 100%;
    height: 20rem;
    border-bottom: 2px solid #064663;

    `;

const Nav = () => {
    const [open, setOpen] = useState(false)

    const handleToggle = () => {
        setOpen(prev => !prev)
      }
  return (
    <NavBar>
        <div>
        <Headline>Mythical Creatures</Headline>
        </div>
        <Hamburger onClick={()=> handleToggle()}>
            <span></span>
            <span></span>
            <span></span>
        </Hamburger>
        <LinkWrapper>
        <LinkStyle to="/">Home</LinkStyle>
         <LinkStyle to="/list">List</LinkStyle>
        <LinkStyle to="/add">Add</LinkStyle>
        </LinkWrapper>
       {open ? <Hamburgermenu>
            <LinkStyle to="/">Home</LinkStyle>
            <LinkStyle to="/list">List</LinkStyle>
            <LinkStyle to="/add">Add</LinkStyle>
        </Hamburgermenu> : null} 
            
        
    </NavBar>
  )
}

export default Nav
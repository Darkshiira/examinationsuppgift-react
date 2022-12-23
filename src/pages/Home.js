import styled from "styled-components"
import { Link } from "react-router-dom"

const Wrapper = styled.div`
    background-image: url("https://img.freepik.com/free-photo/beautiful-milky-way-night-sky_53876-139825.jpg?w=1060&t=st=1671724246~exp=1671724846~hmac=0bd0b8221e8a5d13e62b1a19187c471f895c1d7e5be69f7980a07c23867061a7");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    `;
const Headline = styled.h1`
    color: #F9FAFB;
    margin: 0;
    padding: 2rem 0;
    font-size: 3rem;
    font-family: 'Pacifico', cursive;
    `;

const LinkStyle = styled(Link)`
    img {
        width: 10rem;
        height: 10rem;
    }`;
const Home = () => {
  return (
    <Wrapper>
        <Headline>Learn more about the worlds mythical creatures here:</Headline>
        <LinkStyle to ="/list"><img src= "https://cdn-icons-png.flaticon.com/512/3609/3609709.png" /></LinkStyle>
    </Wrapper>
  )
}

export default Home
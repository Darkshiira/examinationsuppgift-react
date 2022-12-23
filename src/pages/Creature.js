import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    background-color: #04293A;
    height: 100%;
    display: flex;
    item-align: center;
    padding: 2rem 0;
    margin: 0;
    `;

const CreatureCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;
    background-color: #064663;
    color: #F9FAFB;
    border-radius: 0.5rem;
    border: 1px solid gold;
    margin-right: 2rem;

    >img {
        border: 1px solid gold;
        border-radius: 0.5rem;
        width: 45%;
    }

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        width: 100%;

        >img {
            width: 100%;
        }
    `;

const FactCard = styled.div`
    text-align: left;
    padding: 1rem;
    `;
const LinkStyled = styled(Link)`
    text-decoration: none;
    color: #F9FAFB;
    font-size: 1rem;
    margin: 1rem;

    img {
        width: 2rem;
        height: 2rem;
    }
    `;
const Headline = styled.h1`;
    margin: 0;
    padding: 2rem 0;
    `;

const Ahref = styled.a`
    text-decoration: none;
    height: 2rem;
    border: 1px solid #041C32;
    background-color: #041C32;
    color: #EEF1FF;
    border-radius: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    padding: 1rem;

    :hover {
        background-color: gold;
        color: black;
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: end;
    `;


    

const Creature = () => {
    const { id } = useParams()
    const [creature, setCreature] = useState([])

    useEffect(() => {
        const fetching = async () => {
            const res = await fetch(`http://localhost:3001/creatures/${id}`)
            const data = await res.json()
            setCreature(data)
        }
        fetching()
    }, [id])

  return (
    <Wrapper>
        <LinkStyled to ="/list"><img src= "https://cdn-icons-png.flaticon.com/512/507/507257.png"/></LinkStyled>
        <CreatureCard>
            <img src={creature.image} alt={creature.name} />
            <FactCard>
                <Headline>{creature.name}</Headline>
                <h3>Type:</h3><p>{creature.category}</p>
                <h3>Habitat:</h3><p>{creature.habitat}</p>
                <h3>Description:</h3><p>{creature.description}</p>
                <h3>Fun Facts:</h3><p>{creature.funfact}</p>
                <h3>Origin:</h3><p>{creature.origin}</p>
                <ButtonWrapper>
                <Ahref href={creature.link}>Read more?</Ahref>
                </ButtonWrapper>
            </FactCard>
        </CreatureCard>
    </Wrapper>
  )
}

export default Creature
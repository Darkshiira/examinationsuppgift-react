import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
    background-color: #064663;
    width: 20rem;
    height: 30rem;
    border: 3px solid #041C32;
    border-radius: 0.5rem;
    margin: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
    transition: all 0.3s ease-in-out;

    img {
        border: 1px solid gold;
        border-radius: 0.5rem;
        width: 100%;
        height: 100%;
        overflow:hidden;

    }
    `;

const CardFlow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    `;

const Button = styled.button`
    width: 5rem;
    height: 2rem;
    border: 1px solid #041C32;
    background-color: #041C32;
    color: #EEF1FF;
    border-radius: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 3rem;

    :hover {
        background-color: #064663;
    }
`;

const LinkStyle = styled(Link)`
    text-decoration: none;
    width: 9rem;
    height: 2rem;
    border: 1px solid #041C32;
    background-color: #041C32;
    color: #EEF1FF;
    border-radius: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    margin: 1rem;
    padding: 1rem;

    :hover {
        background-color: gold;
        color: black;
    }
    `;



const CreatureCard = ({creature}) => {

    const deleteThis = async (id) => {
        const res = await fetch(`http://localhost:3001/creatures/${id}`, {
            method: 'DELETE'
        })
        if (res.ok)
        {
            window.location.reload(false);
        }
    }

  return (
    
            <Card>
                
                <CardFlow>
                    <h1>{creature.name}</h1>
                    <p>{creature.category}</p>
                </CardFlow>
                <img src={creature.image} alt={creature.name} />
                <CardFlow>
                    <LinkStyle to={`/list/${creature.id}`}>Click here to learn more!</LinkStyle>
                    <Button onClick={() => deleteThis(creature.id)}>Delete</Button>
                </CardFlow>
            </Card>
    

  )
}

export default CreatureCard
import { useState } from 'react'
import styled from 'styled-components'

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`;

const Wrapper = styled.div`
    background-color: #04293A;
    height: 120%;


  `;  
const Button = styled.button`
width: 10rem;
        height: 2rem;
        border: 1px solid #041C32;
        background-color: #041C32;
        color: #EEF1FF;
        border-radius: 0.5rem;
        font-size: 1rem;
        cursor: pointer;
        margin: 1rem;

        :hover {
            background-color: #064663;
    }
`;

    const Headline = styled.h1`
    color: #F9FAFB;
    margin: 0;
    padding: 2rem 0;
    `;

    const Stylingdiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    
    @media (max-width: 1024px) {
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        width: 100%;
        }`;


const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 0.5rem;

    label {
        font-size: 1rem;
        color: #F9FAFB;
    }

    input {
        width: 20rem;
        height: 2rem;
        border: 1px solid gold;
        background-color: #A7D2CB;
        color: #EEF1FF;
        border-radius: 0.5rem;

        font-size: 1rem;

        ::placeholder {
            color: #064663;
            opacity: 0.5;
            font-size: 0.7rem;
        }
    }

    textarea {
        width: 41rem;
        height: 7rem;
        border: 1px solid gold;
        background-color: #A7D2CB;
        color: #EEF1FF;
        border-radius: 0.5rem;
    }

    @media (max-width: 1024px) {
        display:flex;
        flex-direction: column;

        textarea {
            width: 20rem;
        }
    `;


const Add = () => {

    const [name, setName] = useState('')
    const [habitat, setHabitat] = useState('')
    const [description, setDescription] = useState('')
    const [funfact, setFunfact] = useState('')
    const [category, setCategory] = useState('')
    const [origin, setOrigin] = useState('')
    const [image, setImage] = useState('')
    const [link, setLink] = useState('')
    const [popup, setPopup] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const creature = { name, habitat, description, funfact, category, origin, image, link }

        const fetching = async () => {
            const res = await fetch('http://localhost:3001/creatures', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(creature)
            })
            if (res.ok)
            {
                setName('')
                setHabitat('')
                setDescription('')
                setFunfact('')
                setCategory('')
                setOrigin('')
                setImage('')
                setLink('')
                setPopup(true)
                setInterval(() => {
                    setPopup(false)
                }, 3000);
            }
        }
        fetching()
    }


  return (
    <Wrapper>
        <Headline>If you know any creatures that we havent featured, add them here: </Headline>
        {popup  === true ? <h3>Your creature has been added</h3> : null}
        <Form onSubmit={handleSubmit}>
            <Stylingdiv>
            <InputDiv>
                <label htmlFor= "name">Name</label>
                <input type="text" name= "name" value={name} onChange={(e) => setName(e.target.value)} />
            </InputDiv>
            <InputDiv>
                <label htmlFor ="habitat">Habitat</label>
                <input type="text" value={habitat} onChange={(e) => setHabitat(e.target.value)} />
            </InputDiv>
            </Stylingdiv>
            <InputDiv>
                <label htmlFor= "description">Description</label>
                <textarea type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </InputDiv>
            <InputDiv>
                <label htmlFor= "funfact">Funfact</label>
                <textarea name="funfact" value={funfact} onChange={(e) => setFunfact(e.target.value)} />
            </InputDiv>
            <Stylingdiv>
            <InputDiv>
            <label htmlFor= "category">Category</label>
            <input type="text" name="category" value={category} onChange={(e) => setCategory(e.target.value)} />
            </InputDiv>
            <InputDiv>
                <label htmlFor ="origin">Origin</label>
                <input type="text" name="origin" value={origin} onChange={(e) => setOrigin(e.target.value)} />
            </InputDiv>
            </Stylingdiv>
            <Stylingdiv>
            <InputDiv>
                <label htmlFor= "image">Image</label>
                <input type="text" placeholder="  Write your images URL-adress here..." name="image"value={image} onChange={(e) => setImage(e.target.value)} />
            </InputDiv>
            <InputDiv>
                <label htmlFor= "link">Link</label>
                <input type="text" placeholder="  Write a informative webpages URL-adress here..." name="link" value={link} onChange={(e) => setLink(e.target.value)} />
            </InputDiv>
            </Stylingdiv>
            <Button>Add</Button>
        </Form>
    </Wrapper>
  )
}

export default Add
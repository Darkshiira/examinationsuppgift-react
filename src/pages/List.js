import { useEffect, useState } from 'react';
import CreatureCard from '../components/CreatureCard';
import styled from 'styled-components';


const Wrapper = styled.div`
    background-color: #04293A;
    height: 120%;
    
    padding: 4rem 0;
    `;
const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 2rem 0;
    `;

const SelectList = styled.select`
    width: 10rem;
    height: 2rem;
    border: 1px solid #064663;
    background-color: #041C32;
    color: #EEF1FF;
    border-radius: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    margin: 1rem;
    `;

const SelectSort = styled.select`
    width: 10rem;
    height: 2rem;
    border: 1px solid #064663;
    background-color: #041C32;
    color: #EEF1FF;
    border-radius: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    margin: 1rem;
    `;

    const CardContainer = styled.div`
display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    `;

const List = () => {
    const [creatures, setCreatures] = useState([])
    const [category, setCategory] = useState([])
    const [chosenCategory, setChosenCategory] = useState('all')
    const [origin, setOrigin] = useState([])
    const [chosenOrigin, setChosenOrigin] = useState('all')
    const [sort, setSort] = useState('A-Z')

    useEffect(() => {
        const fetching = async () => {
            const res = await fetch('http://localhost:3001/creatures')
            const data = await res.json()
            setCreatures(data)
            const categories = data.map((creature) => creature.category)
            const uniqueCategories = [...new Set(categories)]
            const origins = data.map((creature) => creature.origin)
            
            const uniqueOrigins = [...new Set(origins)]
            
            setCategory(uniqueCategories)
            setOrigin(uniqueOrigins)
        }
        fetching()
    }, []);
    

  return (
    <Wrapper>
    <Header>
    <div>
        <SelectList onChange={(e) => setChosenCategory(e.target.value)}>
            <option value="all" >All</option>
            {category.map((category, index) => (
                <option key ={index} value={category}>{category}</option>))}
        </SelectList>


        <SelectList onChange={(e) => setChosenOrigin(e.target.value)}>
            <option value="all" >All</option>
            {origin.map((origin, index) => (
                <option key ={index} value={origin}>{origin}</option>))}
        </SelectList>
        </div>
      
        <SelectSort onChange ={(e) => setSort(e.target.value)}>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="Category">Category</option>
            <option value="Origin">Origin</option>
        </SelectSort>
        </Header>
                {/* First it checks the state of sort, if it is A-Z it will sort the creatures in alphabetical order and then map through them. If the chosen category is all and the chosen origin is all it will return all creatures. 
                If the chosen category is all and the chosen origin is the same as the creatures origin it will return all creatures with that origin.
                 If the chosen category is the same as the creatures category and the chosen origin is all it will return all creatures with that category. If the chosen category is the same as the creatures category and the chosen origin is the same as the creatures origin it will return all creatures with that category and origin. */}
        <CardContainer>
        {sort === "A-Z" ? creatures.sort((a, b) => a.name.localeCompare(b.name)).map((creature) => (
            (chosenCategory === 'all' && chosenOrigin === 'all'  ? <CreatureCard key={creature.id} creature={creature} /> : null) ||
            (chosenCategory === 'all' && chosenOrigin === creature.origin ? <CreatureCard key={creature.id} creature={creature} /> : null) ||
            (chosenCategory === creature.category && chosenOrigin === 'all'? <CreatureCard key={creature.id} creature={creature} /> : null) ||
            (chosenCategory === creature.category && chosenOrigin === creature.origin? <CreatureCard key={creature.id} creature={creature} /> : null)
        ))
        : sort === "Z-A" ? creatures.sort((a, b) => b.name.localeCompare(a.name)).map((creature) => (
            (chosenCategory === 'all' && chosenOrigin === 'all'  ? <CreatureCard key={creature.id} creature={creature} /> : null) ||
            (chosenCategory === 'all' && chosenOrigin === creature.origin ? <CreatureCard key={creature.id} creature={creature} /> : null) ||
            (chosenCategory === creature.category && chosenOrigin === 'all'? <CreatureCard key={creature.id} creature={creature} /> : null) ||
            (chosenCategory === creature.category && chosenOrigin === creature.origin? <CreatureCard key={creature.id} creature={creature} /> : null)
        ))
        : sort === "Category" ? creatures.sort((a, b) => a.category.localeCompare(b.category)).map((creature) => (
            (chosenCategory === 'all' && chosenOrigin === 'all'  ? <CreatureCard key={creature.id} creature={creature} /> : null) ||
            (chosenCategory === 'all' && chosenOrigin === creature.origin ? <CreatureCard key={creature.id} creature={creature} /> : null) ||
            (chosenCategory === creature.category && chosenOrigin === 'all'? <CreatureCard key={creature.id} creature={creature} /> : null) ||
            (chosenCategory === creature.category && chosenOrigin === creature.origin? <CreatureCard key={creature.id} creature={creature} /> : null)
        ))
        : sort === "Origin" ? creatures.sort((a, b) => a.origin.localeCompare(b.origin)).map((creature) => (
            (chosenCategory === 'all' && chosenOrigin === 'all'  ? <CreatureCard key={creature.id} creature={creature} /> : null) ||
            (chosenCategory === 'all' && chosenOrigin === creature.origin ? <CreatureCard key={creature.id} creature={creature} /> : null) ||
            (chosenCategory === creature.category && chosenOrigin === 'all'? <CreatureCard key={creature.id} creature={creature} /> : null) ||
            (chosenCategory === creature.category && chosenOrigin === creature.origin? <CreatureCard key={creature.id} creature={creature} /> : null)
        ))
        :null}


        </CardContainer>
    </Wrapper>
  )
}

export default List
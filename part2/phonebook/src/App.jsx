/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Filter = ({search, handleSearch}) => {
  return (
    <div>Filter shown with: <input type="text" value={search} onChange={handleSearch} placeholder="Search..." /></div>

  )
}

const PersonForm = ({persons, newName, setPersons, setNewName, setNumber, number}) => {

  const handleSubmit = (event) => {
    event.preventDefault();

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      const response = axios.post('http://localhost:3001/persons', { name: newName, number: number })
      .then(response => setPersons(persons.concat(response.data)))
    }
    setNewName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>

      <div>
        name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
      </div>
      <div>number: <input value={number} onChange={(e) => setNumber(e.target.value)} /></div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>

  )
}

const Persons = ({ filteredPersons }) => {

  return(filteredPersons.map((person) => (
    <p key={person.id}> {person.name} {person.number} </p>
  )))

}


const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [number, setNumber] = useState('');
  const [search, setSearch] = useState('');

  const getPersons = () => {
    axios.get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
  })}

  useEffect(() => {
    getPersons();
  }, [])

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearch={handleSearch} />
      <h3>Add a new number</h3>
      <PersonForm persons={persons} number={number} setNewName={setNewName} setNumber={setNumber} newName={newName} setPersons={setPersons}/>
      <h3>Numbers</h3>
      <Persons filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;

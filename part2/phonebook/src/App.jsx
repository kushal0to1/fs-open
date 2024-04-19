/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
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
      setPersons([...persons, { name: newName, number: number, id: persons.reduce((max, obj) => obj['id'] > max ? obj['id'] : max, persons[0]['id']) + 1 }]);
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
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('');
  const [number, setNumber] = useState('');
  const [search, setSearch] = useState('');


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

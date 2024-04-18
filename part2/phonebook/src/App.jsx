import React, { useState } from 'react';

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

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <div>Filter shown with: <input type="text" value={search} onChange={handleSearch} placeholder="Search..." /></div>
      <form onSubmit={handleSubmit}>
        <h2>Add a new number</h2>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>number: <input value={number} onChange={(e) => setNumber(e.target.value)} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map((person) => (
        <p key={person.id}>{person.name} {person.number}</p>
      ))}
    </div>
  );
};

export default App;

import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

 const handleSubmit = (event) => {
  event.preventDefault();
  setPersons(persons.concat({'name' : newName}))
  setNewName('')
 }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={(e) => setNewName(e.target.value) } />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(p => {
        return <p key={p.name}>{p.name}</p>
      })
      
}
    </div>
  )
}

export default App
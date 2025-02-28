import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  function handleName (event){
    setNewName(event.target.value);
  }

  function handleForm(event){
    event.preventDefault();
    
    if(persons.filter((person) => person.name === newName).length === 1){
      alert(`${newName} is already added to phonebook`);
      return
    }

    setPersons(persons.concat({name: newName}))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleForm}>
        <div>
          name: <input 
                  value={newName}
                  onChange={handleName}
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map(person => (<p key={person.name}>{person.name}</p>))
      }
    </div>
  )
}

export default App
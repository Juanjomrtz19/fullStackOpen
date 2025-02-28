import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone:'040-1234567' }
  ]) 
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  function handleName (event){
    setNewName(event.target.value);
  }

  function handleForm(event){
    event.preventDefault();
    
    if(persons.filter((person) => person.name === newName).length === 1){
      alert(`${newName} is already added to phonebook`);
      return
    }

    setPersons(persons.concat({name: newName, phone: newPhone}))
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
          phone: <input 
                  value={newPhone}
                  onChange={(event) => setNewPhone(event.target.value)}
                />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map(person => (
        <div key={person.name}> 
          <p>{person.name} {person.phone}</p>
        </div>
        ))
      }
    </div>
  )
}

export default App
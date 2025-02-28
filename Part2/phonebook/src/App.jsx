import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [personsShown, setPersonsShown] = useState(persons);

  function handleName (event){
    setNewName(event.target.value);
  }

  function handleFilter(event){
    setPersonsShown(persons.filter(person =>(person.name.includes(event.target.value))))
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

      <div>
        filter shown with 
        <input
          onChange={handleFilter}
        />
      </div>

      <h2>Add a new</h2>

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
        personsShown.map(person => (
        <div key={person.name}> 
          <p>{person.name} {person.number}</p>
        </div>
        ))
      }
    </div>
  )
}

export default App
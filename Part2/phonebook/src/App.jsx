import { useState } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

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
  const [filter, setFilter] = useState('');

  function handleName (event){
    setNewName(event.target.value);
  }

  function handleFilter(event){
    setPersonsShown(persons.filter(person =>(person.name.includes(event.target.value))));
    setFilter(event.target.value);
  }

  function handleForm(event){
    event.preventDefault();
    
    if(persons.filter((person) => person.name === newName).length === 1){
      alert(`${newName} is already added to phonebook`);
      return
    }

    setPersons(persons.concat({name: newName, number: newPhone, id: persons.length() + 1}))
    setPersonsShown(persons.filter(person =>(person.name.includes(filter))))
    
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter handleFilter={handleFilter}/>

      <h2>Add a new</h2>

      <PersonForm handleForm={handleForm} newName={newName} handleName={handleName}
      newPhone={newPhone} handlePhone={setNewPhone}/>
      <h2>Numbers</h2>
      <Persons persons={personsShown}/>
    </div>
  )
}

export default App
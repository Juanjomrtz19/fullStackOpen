const Persons = ({persons, handleDelete}) => {
    {   
        return(
        persons.map(person => (
            <div key={person.id}>
                <p>{person.name} {person.number}</p>
                <button onClick={() => handleDelete(person)}>Delete</button>
            </div>
        )))
    }
}

export default Persons;
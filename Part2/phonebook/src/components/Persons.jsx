const Persons = ({persons}) => {
    {   
        return(
        persons.map(person => (
            <div key={person.id}>
                <p>{person.name} {person.number}</p>
            </div>
        )))
    }
}

export default Persons;
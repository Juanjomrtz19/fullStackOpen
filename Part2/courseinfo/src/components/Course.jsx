const Course = ({course}) => {
    const {name, parts} = course

    return(
        <>
        <h1>{name}</h1>
        {
            parts.map(part => {
                const {name, exercises, id} = part;
                return(
                   <p key={id}>{name} {exercises}</p> 
                );
            })
        }
        </>
    );
}

export default Course;


const Course = ({course}) => {
    const {name, parts} = course;

    const sum = parts.reduce((s,p) => 
        {
            s+=p.exercises;
            return s;
    }, 0);


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
        <h3>total of {sum} exercises</h3>
        </>
    );
}

export default Course;
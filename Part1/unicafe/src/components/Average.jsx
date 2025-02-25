const Average = ({good, bad, all}) => {
    const average = (good - bad) / all;

    return(
        <p>average {average}</p>
    )

}

export default Average;
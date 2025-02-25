const Average = ({good, bad, all}) => {
    const average = (good - bad) / all;

    return(
        <td>average {average}</td>
    )

}

export default Average;
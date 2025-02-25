const Positive = ({good, all}) => {
    const positive = good/all * 100;

    return (
        <td>positive {positive}%</td>
    )
}

export default Positive;
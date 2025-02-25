const Positive = ({good, all}) => {
    const positive = good/all * 100;

    return (
        <p>positive {positive}%</p>
    )
}

export default Positive;
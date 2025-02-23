function addUp(numbers){
    let sum = 0;
    numbers.forEach((num) => {
        sum += num;
    });

    return sum;
}


const Total = ({numbers}) => {
    
    const numAddedUp = addUp(numbers);

    return(
        <p>Number of exercises {numAddedUp}</p>
    );
}

export default Total;
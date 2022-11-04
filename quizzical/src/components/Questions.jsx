import React from 'react';
import {nanoid} from 'nanoid';
import Card from './Card';

const Questions = () => {

    // for storing and accessing the data from api 
    const [allTriviaData ,setAllTriviaData] = React.useState(null);
    const [isPending, setIsPending] = React.useState(true);
    
    // API call
    React.useEffect(()=>{
        fetch('https://opentdb.com/api.php?amount=4&category=11')
        .then(res =>  res.json())
        .then(data => {setAllTriviaData(data);setIsPending(false)}) //storing the api data
      },[]);

    let questions;

    if(!isPending){
            questions = allTriviaData.results.map((obj)=>{
                const id = nanoid();
            return <Card key={id} data={obj} id={id}>
                    </Card>
        });
    }
    return(
        <div className='container'>
            {!isPending && questions}
            {!isPending && <button className='check--ans'>Check Answers</button>}
        </div>
    )
};

export default Questions;
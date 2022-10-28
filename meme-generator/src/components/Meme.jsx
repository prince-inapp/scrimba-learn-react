import React, {useState} from 'react';
import './Meme.css'
import memeData from '../memeData';

export default function Meme(props){

//    const [imgUrl , setImgUrl] = React.useState(null);
    const [meme, setMeme] = React.useState({
        topText:'',
        bottomText:'',
        randomImage:null
    });
    const [allMemeData, setAllMemeData] = useState(memeData.data.memes);
    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMemeData.length);
        const randomMeme = allMemeData[randomNumber];

        setMeme(prevMeme => (
                {...prevMeme, randomImage: randomMeme.url}));
        }

    return(
            <main>
                <div className="form--container">
                    <input className="form--input" type="text" placeholder="Top Text" />
                    <input className="form--input" type="text" placeholder="Bottom Text"/>
                    <button onClick={getMemeImage} className="form--btn">Get a new meme image</button>
                    { meme.randomImage && <img className="image--container" src={meme.randomImage}/> }
                </div>
            </main>)
};
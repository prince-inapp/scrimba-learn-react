import React, {useState, useEffect} from 'react';
import './Meme.css'

export default function Meme(props){

//    const [imgUrl , setImgUrl] = React.useState(null);


    const [meme, setMeme] = React.useState({
        topText:'',
        bottomText:'',
        randomImage:null
    });
    const [allMemeData, setAllMemeData] = useState([]);

    function onChangeHandler(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
        }));
    }
    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMemeData.length);
        const randomMeme = allMemeData[randomNumber];

        setMeme(prevMeme => (
                {...prevMeme, randomImage: randomMeme.url}));
        }
    useEffect( () => {
        fetch('https://api.imgflip.com/get_memes')
        .then((response) => response.json())
        .then((data) => setAllMemeData(data.data.memes))
        console.log(allMemeData);
    }, [])

    return(
            <main>
                <div className="form--container">
                    <input className="form--input"
                        type="text"
                        placeholder="Top Text"
                        value={meme.topText}
                        onChange={onChangeHandler}
                        name="topText"
                    />
                    <input className="form--input"
                        type="text"
                        placeholder="Bottom Text"
                        value={meme.bottomText}
                        onChange={onChangeHandler}
                        name="bottomText"
                    />
                    <button onClick={getMemeImage} className="form--btn">Get a new meme image</button>
                    { meme.randomImage &&
                    <div className="image--container meme">

                        <img className="image--container" src={meme.randomImage}/>
                        <h1 className="meme--text top">{meme.topText}</h1>
                        <h1 className="meme--text bottom">{meme.bottomText}</h1>
                    </div>}
                </div>
            </main>)
};
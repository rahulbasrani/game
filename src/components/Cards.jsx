import React, { useEffect, useState } from 'react';
import {Data} from '../data';
import {Card,CardImg} from 'reactstrap';
import Header from './Header';
import Rules from './Rules';

export default function Cards(props){
    const [Cardp] = useState(Data);
    const [Images,setImages] = useState([]);
    const [Clicked,setClicked] = useState([]);
    const [Score,setScore] = useState(0);
    const [Highscore,setHighscore] = useState(0);

    const randomimg  = () =>{
        const arr = [];
        const n = Cardp.length;
        while(arr.length < 3){
            var x = Math.floor(Math.random() * n);
            if(arr.indexOf(x)===-1)
                arr.push(x);
        }
        const img = [];
        for(var j=0; j<3; j++){
            img.push(Cardp[arr[j]]);
        }
        setImages(img);
    }

    const randomclick = (event) =>{
        const y = event.target.id;
        if(Clicked.indexOf(y) === -1){
            setClicked([...Clicked,y]);
            randomimg();
            setScore(Score+1);
            document.body.style.backgroundColor='wheat';
        }
        else{
            if(Highscore<Score)
                setHighscore(Score);
            setScore(0);
            setClicked([]);
            document.body.style.backgroundColor = 'red';
        }
    }

    useEffect(() => {
        randomimg();
    },[]);

    const list = Images.map((imgs) => {
        return(
            <div key={imgs.id} className="col-4">
                <Card>
                    <CardImg id={imgs.id} onClick={(event) => randomclick(event)} src={`/game/${imgs.image}`} className="look"></CardImg>
                </Card>
            </div>
        );
    });
    return(
        <div className="container">
            
                <Header lastScore={Highscore} score={Score}/>
            
            <Rules/>
            <div className="row">
                {list}
            </div>
        </div>
    );
}


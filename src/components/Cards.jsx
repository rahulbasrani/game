import React, { useEffect, useState } from 'react';
import {Data} from '../data';
import {Card,CardImg} from 'reactstrap';

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
        }
        else{
            alert("Believe it! Your score is :" + Score);
            // window.location.reload();
            if(Highscore<Score)
                setHighscore(Score);
            setScore(0);
            setClicked([]);
        }
    }

    useEffect(() => {
        randomimg();
    },[]);

    const list = Images.map((imgs) => {
        return(
            <div key={imgs.id} className="col-4">
                <Card>
                    <CardImg id={imgs.id} onClick={(event) => randomclick(event)} src={imgs.image} className="look"></CardImg>
                </Card>
            </div>
        );
    });
    return(
        <div className="container">
            <div className="row">
                <h2>Score: {Score}</h2>
                <h2>Highscore: {Highscore}</h2>
            </div><br/><br/>
            <div className="row">
                {list}
            </div>
        </div>
    );
}


// const Cardp=(props)=>{
//     const [Imgs,setImgs] = useState([]);

//     const [Carding] = useState(Sdata);
    
//     const [Clickit,setClickit] = useState([]);
    
//     const [highscore,setHighscore] = useState(0);

//     const [score,setScore] = useState(0);

//     const randomimgs = () =>{

//         const a = [];
//         const n = Carding.length;
//         while(a.length < 3){
//             var x = Math.floor(Math.random() * n);

//             if(a.indexOf(x)===-1)
//                 a.push(x);
//         }
//         const img = [];
//         for(var j=0; j<3; j++){
//             img.push(Carding[a[j]]);
//         }
//         setImgs(img);
//     }

//     const click_it = (event) =>{
//         const y = event.target.id;
//         if(Clickit.indexOf(y) === -1){
//             setClickit([...Clickit,y]);
//             randomimgs();
//             setScore(score+1);
//         }
//         else{
//             alert("Believe it! Your score is :" + score);
//             if(highscore<score)
//                 setHighscore(score);
//             setScore(0);
//             setClickit([]);
//         }
//     }

//     useEffect(() => {
//         randomimgs();
//     },[]);

//     const group = Imgs.map((ims) => {
//         return(
//             <div key={ims.id} className="col-4">
//                 <Card>
//                     <CardImg id={ims.id} onClick={(event) => click_it(event)} src={`/card/${ims.image}`} className="look"></CardImg>
//                 </Card>
//             </div>
//         );
//     });
//     return(
//         <div className="container">
//             <div className="row">
//             <Header lastScore={highscore} score={score}/>
//             </div><br/><br/>
//             <div className="row">
//                 <Rules/>
//             </div>
//             <div className="row">
//                 {group}
//             </div>
//         </div>
//     );
// }


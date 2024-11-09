import { useState } from "react";

import { data }  from "../assets/data";
import { useRef } from "react";
import { Link } from "react-router-dom";


const Quize = () => {

    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]);
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);
    let [result, setResult] = useState(false);

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let option_array = [Option1, Option2, Option3, Option4];

    const checkAnswer = (e, answer) => {
       if(lock === false){
        if (answer === question.answer) {
            e.target.classList.add('correct');
            setLock(true);
            setScore(prev=>prev + 1);
         } else {
             e.target.classList.add('wrong');
             setLock(true);
             option_array[question.answer - 1].current.classList.add('correct');
         }
       }
    }

    const nextQuestion = () => {
        if(lock === true){
            if(index === data.length - 1){
                setResult(true);
                return 0;
            }
            setLock(false);
            setIndex(++index);
            setQuestion(data[index]);
            option_array.map((option)=>{
                option.current.classList.remove('correct');
                option.current.classList.remove('wrong');
                return null;
            })
        }
    }

    const backToStart = ()=>{
        setIndex(0);
        setQuestion(data[0]);
        setResult(false);
        setLock(false);
        setScore(0);
        option_array.map((option)=>{
            option.current.classList.remove('correct');
            option.current.classList.remove('wrong');
            return null;
        })
    }
    return (
        <div className="container">
            {
               index === 0 && (
                <Link to='/'> <em>Back To Home Page</em></Link>
               ) 
            }
            <h1>Quize Application</h1>
            <hr/>
           {
            result ? <>
                <h2>Your Scored: {score} out of {data.length}</h2>
                <button onClick={backToStart}>Got To Start</button>
            </>: (
                <>
                <h2>{index + 1}. {question.question}</h2>
                <ul>
                    <li ref={Option1} onClick={(e)=>checkAnswer(e, 1)}>{question.option1}</li>
                    <li ref={Option2} onClick={(e)=>checkAnswer(e, 2)}>{question.option2}</li>
                    <li ref={Option3} onClick={(e)=>checkAnswer(e, 3)}>{question.option3}</li>
                    <li ref={Option4} onClick={(e)=>checkAnswer(e, 4)}>{question.option4}</li>
                </ul>
                <button onClick={nextQuestion}>Next</button>
                <div className="index" >{index + 1} of {data.length} questions</div>
                </>
            )
           }
        </div>
    );
};

export default Quize;
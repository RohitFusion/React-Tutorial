import { useState } from 'react';
import { InputOne } from './InputOne';
import { ResultOne } from './ResultOne';
export const ParentOne =()=>{
 
    const [num1,setNum1] = useState("");
    const [num2,setNum2] = useState("");
    const [oper,setOper] = useState("");

    const [result,setResult] = useState("Waiting Result");

     
    const operation =()=>{
        
        const number = parseInt(num1) + parseInt(num2);
        setResult(number);
    }


    const clear =()=>{
        setNum1("");
        setNum2("");
        setResult("Waiting Result");
    }

    return (
        <>
           <InputOne num1={[num1,setNum1]} num2={[num2,setNum2]} oper={operation} />
           <ResultOne  result={result} clear={clear}/>
        </>
    )
 

    

}
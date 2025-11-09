export const InputOne =({num1,num2,oper})=>{


    return (
    <>
    
      <input value={num1[0]}  placeholder="number1" onChange={(e)=>num1[1](e.target.value)}/><br></br>
      <input value={num2[0]}  placeholder="number2" onChange={(e)=>num2[1](e.target.value)} /><br></br>
      

      <button type="button" onClick={oper}>Submit</button>
      
    
    </>
    );
}
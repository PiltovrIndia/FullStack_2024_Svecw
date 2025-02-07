import { useEffect, useState } from "react";

function Nine(){
    const [count, setCount] = useState(1);
    useEffect(()=>{
        console.log("Use effect is called");
    }, []);

    const btnDecrement =()=> {
        if(count > 0)
            setCount(count-1);
    }
    const btnIncrement =()=> {
        setCount(count+1);
    }
    const btnAddToCard = () => {
        setCount(1)
    }
    return(
        <div>
            {(count == 0) ? 
            <button className="btn btn-outline-dark btn-sm" 
            onClick={btnAddToCard}> Add to Cart </button>
            :
            <div style={{display:'flex'}}>
                <button className="btn btn-outline-dark btn-sm" 
                onClick={btnDecrement}> - </button>
                <h1> {count} </h1> 
                <button className="btn btn-outline-dark btn-sm" 
                onClick={btnIncrement}> + </button>
            </div>
            }
        </div>
    );
}
export default Nine;
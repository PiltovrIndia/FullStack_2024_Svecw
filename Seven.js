function Seven(){
const names = ["name1","name2","name3","name4"];
    return(
        // <div>
        //     {names.map((name,index)=>
        //         <div key={index}>{name}</div>)
        //     }
        // </div>
        <div>
            <ul>
            {names.map((name,index)=>
                <li key={index}>{name}</li>)
            }
            </ul>
        </div>
    );
}
export default Seven;
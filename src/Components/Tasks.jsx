import React from "react";

const Tasks= ({t,del,done}) =>{

    return(
        <div className="todo">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
           <div className="name" style={{color:t.status?"green":"white"}}>
               {t.name}
           </div>
           <button onClick={() => del(t.name)}className="delete"><i class="fa fa-close"></i></button>
           <button onClick={() => done(t.name)}className="done"><i class="fa fa-check"></i></button>
        </div>
        
    )
}
export default Tasks;
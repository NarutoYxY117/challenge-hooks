import React from "react";

const Tasks= ({t,del,done}) =>{

    return(
        <div className="todo">
           <div className="name" style={{color:t.status?"green":"black"}}>
               {t.name}
           </div>
           <button onClick={() => del(t.name)}>delete</button>
           <button onClick={() => done(t.name)}>Done</button>
        </div>
        
    )
}
export default Tasks;
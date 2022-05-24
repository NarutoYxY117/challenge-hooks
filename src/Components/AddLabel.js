import React,{useState} from "react";

const AddLabel= ({add}) =>{
    const [text, setText] = useState("")
    return(
        <div className="Container">
            <div className="label">
              
                    <input type='text' className="add" onChange={(e) => setText(e.target.value)} ></input>
                <button className="btn" onClick={() => add(text)} >add</button>
                
            </div>
        </div>
    )
}
export default AddLabel
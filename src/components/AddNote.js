
import React from "react";
import "./AddNote.css";
import { nanoid } from "nanoid";
function AddNote(props) {
  const [text, settext] = React.useState("");
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const handleonChange=(e)=>{
    const length = 200-e.target.value.length;
    if (length >= 0) {
      settext(e.target.value);
    }
  }
  
  const save = () => {
    if(text.trim().length>0){
      props.setdata([
        ...props.data,
        { id: nanoid(), note: text, date: `${day}/${month}/${year}` },
      ]);
      settext('');
    }
  };

  return (
    <div className="card new">
      <div className="card-body">
        <textarea
          cols="10"
          rows="8"
          onChange={handleonChange}
          className="input-text"
          placeholder="Add Note"
          value={text}
        ></textarea>
      </div>
      <div className="card-footer">
        <span className="date">{200-text.length} remaining </span>
        <button className="btn" onClick={save}>
          save
        </button>
      </div>
    </div>
  );
}

export default AddNote;

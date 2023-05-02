import React from "react";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import "./Note.css";
function Note(props) {
 
  const handleDelete=(id)=>{
    const newnotes=props.data.filter(m=>(id!==m.id))
    props.setdata(newnotes)
  }
  return (
    <div className="note-item ">
      {props.data.map((m) => (
        <NoteItem key={m.id} id={m.id} handleDelete={handleDelete} note={m.note} date={m.date} />
      ))}
      <AddNote data={props.data} setdata={props.setdata} />
    </div>
  );
}

export default Note;

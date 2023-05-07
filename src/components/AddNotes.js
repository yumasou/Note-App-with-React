import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import "./AddNotes.css";
import { nanoid } from "nanoid";
function AddNotes(props) {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const showmodal = () => {
    let modal = document.querySelector(".modal-boxs");
    let addicon = document.querySelector(".add-icon");
    addicon.style.display = "none";
    modal.style.display = "flex";
  };
  const closemodal = () => {
    let modal = document.querySelector(".modal-boxs");
    let addicon = document.querySelector(".add-icon");
    modal.style.display = "none";
    addicon.style.display = "block";
  };
  const clear = (e) => {
    settexts("");
    e.preventDefault();
  };
  const [texts, settexts] = React.useState('');
  const handleChange = (e) => {
   if(texts.length<200)
    {settexts(e.target.value)}
  };
  const handleSave = () => {
    if (texts.trim().length > 0) {
      props.setdata([
        ...props.data,
        { id: nanoid(), note: texts, date: `${day}/${month}/${year}` },
      ]);
      settexts("");
    }
  };
  return (
    <div>
      <form className="modal-boxs">
        <h2 className="note-headers">Add Note</h2>
        <span className="close" onClick={closemodal}>
          &times;
        </span>
        <textarea
          onChangeCapture={handleChange}
          className="input-texts"
          placeholder="Add Note"
          cols="30"
          rows="10"
          value={texts}
        ></textarea>
        <span className="footers">
            <span className="limit">{200-texts.length}reamining</span>
          <button className="btn" onClick=
          {closemodal}>
            cancel
          </button>{" "}
          <button className="btn" onClick={clear}>
            clear
          </button>
          <button className="btn" onClick={handleSave}>
            save
          </button>
        </span>
      </form>
      <BsFillPlusCircleFill className="add-icon" onClick={showmodal} />
    </div>
  );
}

export default AddNotes;

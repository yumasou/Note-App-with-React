// import React from "react";
// import { BsFillPlusCircleFill } from "react-icons/bs";
// import "./AddNote.css";
// function AddNote() {
//   const showmodal = () => {
//     let modal = document.querySelector(".modal-box");
//     let addicon = document.querySelector(".add-icon");
//     addicon.style.display = "none";
//     modal.style.display = "flex";
//   };
//   const closemodal = () => {
//     let modal = document.querySelector(".modal-box");
//     let addicon = document.querySelector(".add-icon");
//     modal.style.display = "none";
//     addicon.style.display = "block";
//   };
//   const clear = (e) => {
//     document.querySelector(".input-text").value = "";
//     e.preventDefault();
//   };
//   return (
//     <div>
//       <form className="modal-box">
//         <h2 className="note-header">Add Note</h2>
//         <span className="close" onClick={closemodal}>
//           x
//         </span>
//         <textarea
//           className="input-text"
//           placeholder="Enter Note"
//           cols="30"
//           rows="10"
//         ></textarea>
//         <span className="footer">
//           <button className="btn" onClick={closemodal}>
//             cancel
//           </button>{" "}
//           <button className="btn" onClick={clear}>
//             clear
//           </button>
//           <button className="btn">save</button>
//         </span>
//       </form>
//       <BsFillPlusCircleFill className="add-icon" onClick={showmodal} />
//     </div>
//   );
// }

// export default AddNote;
import React from "react";
import "./AddNote.css";
import { nanoid } from "nanoid";
function AddNote(props) {
  const [text, settext] = React.useState("");
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  console.log(date.toLocaleDateString);
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

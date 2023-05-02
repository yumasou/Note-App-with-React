import React from "react";
import Note from "./components/Note";
import { nanoid } from "nanoid";
import "./App.css";
import Navbar from "./Navbar";
import Search from "./components/Search";
// import AddNote from './components/AddNote'
function App() {
  const [data, setdata] = React.useState([
    {
      id: nanoid(),
      note: "I want to  note is text and hfgshfghsfghgs blah bla 1",
      date: "30/4/2023",
    },
    {
      id: nanoid(),
      note: "I want to  note is text and blah bla 2",
      date: "10/4/2023",
    },
    {
      id: nanoid(),
      note: "I want to  note is text and blah sdfgsdfgdsfkhjkjhg jghjghjfhgjghfbla 3",
      date: "20/4/2023",
    },
  ]);
  const [search,setsearch]=React.useState('')
  return (
    <div>
      <Navbar />
      <div className="container">
      <Search setsearch={setsearch} />
      <Note data={
        data.filter(m=>m.note.toLowerCase().includes(search))
      } 
        setdata={setdata}/>
        </div>
      </div>
  );
}

export default App;

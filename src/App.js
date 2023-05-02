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
      note: "This is test note 1",
      date: "30/4/2023",
    },
    {
      id: nanoid(),
      note: "This is test note 2",
      date: "10/4/2023",
    },
    {
      id: nanoid(),
      note: "This is test note 3",
      date: "20/4/2023",
    },
  ]);

  React.useEffect(() => {
    const saveddata = JSON.parse(localStorage.getItem("react-note-data"));
    if (saveddata) {
      setdata(saveddata);
      console.log(saveddata);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("react-note-data", JSON.stringify(data));
    console.log(data)
  }, [data]);

  const [mode, setmode] = React.useState(false);
  const [search, setsearch] = React.useState("");
  return (
    <div className={mode ? "dark-mode" : "light-mode"}>
      <Navbar mode={mode} setmode={setmode} />
      <div className="container">
        <Search setsearch={setsearch} />
        <Note
          data={data.filter((m) => m.note.toLowerCase().includes(search))}
          setdata={setdata}
        />
      </div>
    </div>
  );
}

export default App;

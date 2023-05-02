import React from 'react'
import './NoteItem.css'
import {BsFillArchiveFill} from 'react-icons/bs'
function NoteItem(props) {
  const deleted=(id)=>{
    props.handleDelete(id)
  }
  return (
    <div className='card'>
      <div className="card-body">
      <p className='card-text'>{props.note}</p>
      </div>
      <div className="card-footer">
       <span className='date'>{props.date} </span> 
        <BsFillArchiveFill className='delete-icon' onClick={()=>deleted(props.id)}/> 
      </div>
    </div>
  )
}

export default NoteItem

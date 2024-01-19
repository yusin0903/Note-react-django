import React from 'react'
import { Link } from "react-router-dom"

const ListItem = ({ note }) => {
  return (
    //Link 實現 onclick的效果
    <Link to ={`/note/${note.id}`}>
        <div className='notes-list-item'>
            <h3>{note.body}</h3>
        </div>
        
    </Link>
  )
};
ListItem.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string.isRequired, // Assuming id is a string and is required
    body: PropTypes.string.isRequired, // Assuming body is a string and is required
    // Add more prop types for other properties of the note object
  }).isRequired,
};

export default ListItem

import React from 'react'

export default function ViewNotes({notes, handleDeleteNote}) {
	return (
		<div className="noteslist">
			{notes && notes.map(({title, note, id}) => (
				<div key={id}>
					<div className="noteItem" key={note.id}>
						<input maxLength="255" id='title' required placeholder="Enter Note Title..." type="text" value={title} onChange={(value) => {console.log(value)}} />
						<textarea placeholder="Enter Note..." id='note' value={note} onChange={(value) => {console.log(value)}} />
					</div>
					<div className="noteItemBtn">
						<button onClick={() => handleDeleteNote(id)}>Delete</button>
					</div>
				</div>
			))}
		</div>
	)
}

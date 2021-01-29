import React from 'react'

export default function ViewNotes({notes, handleDeleteNote}) {
	return (
		<div className="noteslist">
			{notes && notes.map(({title, note, id}) => (
				<div key={id}>
					<div className="noteItem" key={note.id}>
						<input maxLength="255" id='title' placeholder="Enter Note Title..." type="text" value={title} />
						<textarea placeholder="Enter Note..." id='note' value={note} />
					</div>
					<div className="noteItemBtn">
						<button onClick={() => handleDeleteNote(id)}>Delete</button>
					</div>
				</div>
			))}
		</div>
	)
}

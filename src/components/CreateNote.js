import React from 'react'

const CreateNote = () => {
	return (
		<div className="createNoteForm">
			<h1 style={{fontSize: '18px'}}>My Notes</h1>
			<button onClick={() => {console.log('added')}}>Add</button>
		</div>
	)
}

export default CreateNote;
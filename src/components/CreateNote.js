import React from 'react'

const CreateNote = ({onSave}) => {
	const [title, setTitle] = React.useState('');
	const [note, setNote] = React.useState('');

	const isDisabled = () => (title.trim() === '' && note.trim() === '');

	const clearFields = () => {
		setTitle('');
		setNote('');
	}

	return (
		<div className="createNoteForm">
			<h1 style={{fontSize: '18px'}}>My Notes</h1>
			<input maxLength="255" id='title' required placeholder="Enter Note Title..." type="text" value={title} onChange={(value) => setTitle(value.target.value)} />
			<textarea maxLength="1000" placeholder="Enter Note..." id='note' value={note} onChange={(value) => setNote(value.target.value)} />
			<button onClick={() => {onSave({title, note}); clearFields()}}>Add</button>
		</div>
	)
}

export default CreateNote;
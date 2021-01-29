import React from 'react'

export const NoteTitle = ({onSave, onDelete, title, onTitleChange}) => (
	<div className="noteTitle">
		<div className="noteTitleInput">
			<label>
			Notepad Title
			<input type="text" placeholder="My notepad title..." value={title} onChange={(value) => onTitleChange(value.target.value)} />
			</label>
		</div>
		<div className="noteTitleBtnGroup">
			<button className="noteTitleFormSaveBtn" onClick={onSave}>Save</button>
			<button className="noteTitleFormDeleteBtn" onDelete={onDelete}>Delete</button>
		</div>
	</div>
)
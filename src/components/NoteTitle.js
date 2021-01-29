import React from 'react'

export const NoteTitle = () => (
	<div className="noteTitle">
		<div className="noteTitleInput">
			<label>
			Notepad Title
			<input type="text" placeholder="My notepad title..." />
			</label>
		</div>
		<div className="noteTitleBtnGroup">
			<button className="noteTitleFormSaveBtn" onClick={() => {console.log('Save click')}}>Save</button>
			<button className="noteTitleFormDeleteBtn" onDelete={() => {console.log('Delete click')}}>Delete</button>
		</div>
	</div>
)
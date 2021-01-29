const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({ 
	auth: `bee50136566f08a1cd4f9b1be693ae03619a86a6`,
	userAgent: 'disqo notepad',
});


export const createNotePad = async(notes) => await octokit.gists.create({
	files: {
		note: {
			content: JSON.stringify(notes)
		}
	}
})

export const getNotePad = async(gist_id) => await octokit.gists.get({
  gist_id,
});

export const deleteNotePad = async(gist_id) => await octokit.gists.delete({
  gist_id,
});

export const updateNotePad = async(gist_id, notes) => await octokit.gists.update({
	gist_id,
	files: {
		note: {
			content: JSON.stringify(notes)
		}
	}
  });
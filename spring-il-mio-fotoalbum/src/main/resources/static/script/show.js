console.log("Show");

const urlParams = new URLSearchParams(window.location.search);
const photoId = parseInt(urlParams.get('id'));

showPhoto(photoId);
showComments(photoId);

function showPhoto(photoId) {
	axios.get(`http://localhost:8080/api/photos/${photoId}`)
		.then((res) => {
			const photo = res.data;
			const photoContainer = document.querySelector('#photo-details');

			const photoCard = `
      <div >
        <img src="${photo.url}" class="card-img-top" alt="${photo.title}">
        <div class="card-body">
          <h5 class="card-title">Title: ${photo.title}</h5>
          <p class="card-text">${photo.description}</p>
          <p class="card-text">Tags: ${photo.tag}</p>
          <div>
            <a href="/mygallery" class="btn btn-primary">Back to index</a>
          </div>
        </div>
      </div>
    `;
			photoContainer.insertAdjacentHTML('beforeend', photoCard);
		})
		.catch((err) => {
			console.error('request error', err);
			alert('Error during the request');
		});
}


function showComments(photoId) {
	axios.get(`http://localhost:8080/api/photos/${photoId}`)
		.then((res) => {
			const comments = res.data.comments;
			const commentContainer = document.querySelector('#comments');

			if (comments.length > 0) {
				commentContainer.innerHTML = '<h3>Comments:</h3>';

				comments.forEach((comment) => {
					const commentDiv = document.createElement('div');
					commentDiv.classList.add('comment');
					commentContainer.appendChild(commentDiv);

					const username = document.createElement('span');
					username.classList.add('username');
					username.innerHTML = `Username: ${comment.username}`;
					commentDiv.appendChild(username);

					const content = document.createElement('div');
					content.classList.add('content');
					content.innerHTML = `Comment: ${comment.content}`;
					commentDiv.appendChild(content);

					const hr = document.createElement('hr');
					commentDiv.appendChild(hr);
				});
			} else {
				commentContainer.innerHTML = '<p>there are no comments</p>';
			}
		})
		.catch((err) => {
			console.error('request error', err);
			alert('Error during the request');
		});
}



function addComment(photoId) {
	const username = document.querySelector('#username').value;
	const content = document.querySelector('#content').value;

	axios.post(`http://localhost:8080/api/photos/${photoId}/comments`, {
		username: username,
		content: content
	})
		.then((res) => {
			console.log(res.data);
			document.querySelector('#username').value = '';
			document.querySelector('#content').value = '';
			showComments(photoId);
		})
		.catch((err) => {
			console.error('request error', err);
			alert('Error during the request');
		});
}
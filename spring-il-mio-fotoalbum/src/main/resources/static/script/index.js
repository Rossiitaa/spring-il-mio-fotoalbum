console.log("Index");

photoList();

function photoList() {
	axios.get('http://localhost:8080/api/photos')
		.then((res) => {
			const photoListContainer = document.querySelector('#photo-list');
			res.data.forEach(photo => {
				const photoCard = 
			` <div class="col-md-4 mb-4">
              <div>
                <a href="/mygallery/show?id=${photo.id}">
                  <img src="${photo.url}" class="card-img-top" alt="${photo.title}">
                </a>
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="/mygallery/show?id=${photo.id}">${photo.title}</a>
                  </h5>
                  <p class="card-text">${photo.description}</p>
                  <p class="card-text tags">Tags: ${photo.tag}</p>
                </div>
                <div class="p-3">
                  <a href="/mygallery/show?id=${photo.id}" class="btn btn-primary">Show details</a>
                </div>
              </div>
            </div>`;
				photoListContainer.insertAdjacentHTML('beforeend', photoCard);
			});
		})
		.catch((err) => {
			console.error('request error', err);
			alert('Error during the request');
		});
}


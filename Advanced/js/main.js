document.querySelector('#movie1').addEventListener('click', function(){
	let content = document.querySelector('.content');
	content.innerHTML = '';
	content.insertAdjacentHTML('afterbegin', `
			<div class="card-header text-center">
				<span>${movieList[0].title}</span>
			</div>
			<div class="mx-auto">
				<img src="${movieList[0].posterUrl}" class="img-fluid">
			</div>
			<div class="text-center">
				<span class="font-weight-bold">Plot: </span><br>
				<span>${movieList[0].plot}</span>
			</div>
			<div class="text-center">
				<span class="font-weight-bold">Actors: </span><br>
				<span>${movieList[0].actors}</span>
			</div>
	`)
})

document.querySelector('#movie2').addEventListener('click', function(){
	let content = document.querySelector('.content');
	content.innerHTML = '';
	content.insertAdjacentHTML('afterbegin', `
		<div class="card-header text-center">
			<span>${movieList[1].title}</span>
		</div>
			<div class="mx-auto">
				<img src="${movieList[1].posterUrl}">
			</div>
			<div class="text-center">
				<span class="font-weight-bold">Plot: </span><br>
				<span>${movieList[1].plot}</span>
			</div>
			<div class="text-center">
				<span class="font-weight-bold">Actors: </span><br>
				<span>${movieList[1].actors}</span>
			</div>
	`)
})

document.addEventListener('DOMContentLoaded', () => {
	getRandomUserData();
});

function getRandomUserData() {
	// console.log('getRandomUserData function call ok');
	const url = new URL('https://random-data-api.com/api/v2/users?size=5');
	fetch(url)
		.then((response) => {
			if (!response.ok) throw Error('Bad things happened');
			return response.json();
		})
		.then(buildUserHTML)
		.catch(console.warn);
}

function buildUserHTML(data) {
	console.log(data);
	let timeline = document.querySelector('.timeline');
	timeline.innerHTML = data
		.map(({ first_name, username, avatar, address }) => {
			return `<div class="timeline-box" id="primary">
		<div class="icon">
		<img src="${avatar}" alt="robohash api" />
		</div>
		<div class="timeline-body">
			<div class="header-box">
				<h4 class="header"><span class="badge">${first_name}</span></h4>
				<h4 id="username">@${username}</h4>
			</div>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga non beatae consectetur odit libero vitae cupiditate voluptates. Iste cupiditate repellat, soluta commodi modi delectus praesentium quibusdam, odit nobis doloremque ipsum.</p>
				<p class="time"><i class="fa-solid fa-location-dot"></i> ${address.city}</p>
		</div>
	</div>`;
		})
		.join('');
}

const players = [
	{
		name: 'David Road',
		spec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis',
		linkedin: 'https://linkedin.com/alfabot1337',
		instagram: 'https://instagram.com/maxxlwr',
		image: 'img/player-1.png'
	},
	{
		name: 'Maxim Ostapenko',
		spec: '1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis',
		linkedin: 'https://linkedin.com/alfabot13371',
		instagram: 'https://instagram.com/maxxlwr',
		image: 'img/player-2.png'
	},
	{
		name: 'Alyona Sarapina',
		spec: '2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis',
		linkedin: '2https://linkedin.com/alfabot1337',
		instagram: 'https://instagram.com/maxxlwr',
		image: 'img/player-3.png'
	},
	{
		name: 'Dmitriy Skrypchenko',
		spec: '3Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis',
		linkedin: 'https://linkedin.com/alfabot1337',
		instagram: 'https://instagram.com/maxxlwr',
		image: 'img/player-4.png'
	}
];


const changeDesc = e => {
	console.log(e)
	const playerId = e.target.parentElement.id;
	const playerName = document.querySelector('h4.description__heading');
	const playerSpec = document.querySelector('p.description__spec');
	const playerLinkInst = document.querySelector('.description__links .instagram');
	const playerLinkLinkedIn = document.querySelector('.description__links .linkedin');
	const sliderInfo = document.querySelector('.slider__main_info');

	playerName.innerHTML = players[playerId].name;
	playerSpec.innerHTML = players[playerId].spec;
	playerLinkInst.href = players[playerId].instagram;
	playerLinkLinkedIn.href = players[playerId].linkedin;
	sliderInfo.style.backgroundImage = `url(${players[playerId].image})`;
}

const sliderItems = document.querySelectorAll('.slider__item');

sliderItems.forEach(i => addEventListener('click', changeDesc))
const elbtn = document.querySelector('.btn');
const elbody = document.querySelector('body');

elbtn.addEventListener('click', () => {
	elbody.classList.toggle('dark-mode');
	console.log('salom');
});

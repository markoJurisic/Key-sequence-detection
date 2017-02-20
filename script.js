const pressed = [];
const secretCode = 'secret';
const text = document.querySelector('.text');
const show = document.querySelector('.show');

window.addEventListener('keyup', (e) => {
	pressed.push(e.key);
	pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
	if (pressed.join('').includes(secretCode)) {
		document.body.style.backgroundColor = 'red';
		text.style.fontSize = '100px';
		text.style.color = 'white';
		text.textContent = 'Well done!';

		setTimeout(() => {
			show.classList.add('showed');
		}, 2000)
	}
})
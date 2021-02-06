const navToggler = document.querySelector('.nav__toggler');

navToggler.addEventListener('click', () => {
	const hero = document.querySelector('.hero');
	hero.classList.toggle('active');
});

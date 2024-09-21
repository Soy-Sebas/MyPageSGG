
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
	mobileMenu.classList.toggle('hidden'); // Alterna la clase hidden para mostrar/ocultar el menú
});

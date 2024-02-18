const navAElements = Array.from(document.querySelectorAll('header nav a'));

window.addEventListener('scroll', () => {
    navAElements.forEach(a => {
        const selectionForSection = a.getAttribute('href')?.substring(1);
        
        // Verificar si selectionForSection no está vacío
        if (!selectionForSection) return;

        const sectionElement = document.querySelector(selectionForSection);

        // Verificar si sectionElement es null y es de tipo HTMLElement
        if (!sectionElement || !(sectionElement instanceof HTMLElement)) return;

        const selectionTop = sectionElement.offsetTop - 150;

        if (window.scrollY <= selectionTop) return;

        // Eliminar las clases de resaltado de todos los elementos a
        navAElements.forEach(aToRemove => {
            aToRemove.classList.remove('bg-white/15', 'bg-black/15');
        });

        // Agregar la clase de resaltado al elemento actual
        a.classList.add(getHighlightClass());
    });
});

// Función para obtener la clase de resaltado según el tema actual
function getHighlightClass() {
    const isDarkMode = document.documentElement.classList.contains('dark');

    // Si el modo oscuro está activo, el color de resaltado será claro, de lo contrario, oscuro.
    return isDarkMode ? 'bg-white/15' : 'bg-black/15';
}


window.addEventListener('scroll', () => {
  navAElements.forEach(a => {
      const selectionForSection = a.getAttribute('href')?.substring(1);

      // Verificar si selectionForSection no está vacío
      if (!selectionForSection) return;

      const sectionElement = document.querySelector(selectionForSection);

      // Verificar si sectionElement es null y es de tipo HTMLElement
      if (!sectionElement || !(sectionElement instanceof HTMLElement)) return;

      const selectionTop = sectionElement.offsetTop - 150;

      if (window.scrollY <= selectionTop) return;

      navAElements.forEach(aToRemove => {
          aToRemove.classList.remove(getHighlightClass());
      });

      a.classList.add(getHighlightClass());
  });
});

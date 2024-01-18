const socialElement = document.getElementById('miSocialElementCorreo');
						const copiedNotification = document.getElementById('copiedNotification');
	
						if (socialElement && copiedNotification) {
						socialElement.addEventListener('click', () => {
								// Obtener el texto dentro del SocialElement
								const email = socialElement.innerText.trim();
	
								// Crear un elemento de texto temporal
								const textArea = document.createElement('textarea');
								textArea.value = email;
	
								// Añadir el elemento al DOM
								document.body.appendChild(textArea);
	
								// Seleccionar el texto en el área de texto
								textArea.select();
								textArea.setSelectionRange(0, 99999); // Para dispositivos móviles
	
								// Ejecutar el comando de copiar
								document.execCommand('copy');
	
								// Eliminar el área de texto del DOM
								document.body.removeChild(textArea);
	
								// Muestra la notificación de copiado
								copiedNotification.textContent = `¡Copiado al portapapeles!`;
									copiedNotification.classList.add('show');
	
									// Oculta la notificación después de un tiempo
									setTimeout(() => {
									copiedNotification.classList.remove('show');
									}, 3*1000);
							});
						}
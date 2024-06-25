document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('registroForm');
    form.addEventListener('submit', function(event) {
        // Realizar acciones adicionales aquí antes de permitir el envío del formulario

        // Aquí puedes hacer cualquier acción adicional antes del envío, si es necesario

        // No es necesario devolver false ni prevenir el comportamiento predeterminado del formulario

        // Redirigir a la página del canal de WhatsApp después de enviar el formulario
        setTimeout(function() {
            window.location.href = 'https://whatsapp.com/channel/0029Vaimr1d6mYPKmkt4Jr1j';
        }, 1000); // Redirección después de 1 segundo (ajusta el tiempo según sea necesario)
    });
});

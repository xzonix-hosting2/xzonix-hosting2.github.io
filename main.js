(function() {
    // Función para verificar si la página existe mediante fetch
    function checkPageExistence(page, callback) {
        fetch(page, { method: 'HEAD' })
            .then(function(response) {
                callback(response.ok);
            })
            .catch(function() {
                callback(false);
            });
    }

    // Redirigir a 404.html si la página no existe
    document.addEventListener('DOMContentLoaded', function() {
        var currentPath = window.location.pathname;

        // Define las páginas existentes
        var existingPages = [
            '/',
            '/index.html',
            '/about.html',
            '/contact.html'
        ];

        // Si la página actual no está en la lista de páginas existentes y no es 404.html
        if (!existingPages.includes(currentPath) && currentPath !== '/404.html') {
            checkPageExistence(currentPath, function(exists) {
                if (!exists) {
                    window.location.href = '/404';
                }
            });
        }
    });
})();

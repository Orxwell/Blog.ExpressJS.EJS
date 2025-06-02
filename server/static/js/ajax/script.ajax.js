window.addEventListener('DOMContentLoaded', () => {
  const partOne   = document.getElementById('partOne')  ;
  const fetchBttn = document.getElementById('fetchBttn');

  const contentArea = document.getElementById('contentArea');
  const stateArea   = document.getElementById('stateArea')  ;
  const headersArea = document.getElementById('headersArea');

  const statusCode = document.getElementById('statusCode');

  // Ejercicio 1: Mostrar la URL actual al cargar la página
  partOne.value = window.location.href;

  // Ejercicio 2: Descargar el contenido de la URL mediante peticiones
  fetchBttn.addEventListener('click', () => {
    const url = partOne.value;
    const xhr = new XMLHttpRequest();

    stateArea.textContent = "Estado: Petición no iniciada";

    xhr.onreadystatechange = () => {
      // Ejercicio 3. Mostrar los estados de la petición
      const states = [
        "Petición no iniciada",
        "Conexión establecida con el servidor",
        "Petición recibida",
        "Procesando respuesta",
        "Petición completada"
      ];
      stateArea.textContent = `Estado: ${states[xhr.readyState]}`;

      // Ejercicio 4 y 5. Si se completó, mostrar contenido, cabeceras, código
      if (xhr.readyState === 4) {
        contentArea.textContent = xhr.responseText;
        headersArea.textContent = xhr.getAllResponseHeaders();
        statusCode.textContent  = `${xhr.status} ${xhr.statusText}`;
      }
    };

    // Hacer la petición
    xhr.open("GET", url, true);
    xhr.send();
  });
});
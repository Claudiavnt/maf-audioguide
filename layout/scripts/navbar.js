document.addEventListener('DOMContentLoaded', function () {
  // Initiate the wowjs
  new WOW().init();
  var navbarContainer = document.getElementById('mainav');

  var currentPage = window.location.pathname.split('/').pop(); // Ottieni il nome della pagina corrente
    var listItem = document.createElement('ul');
    listItem.className = 'clear mainav-inline';
    listItem.innerHTML = `
      <li class="${currentPage === 'sala_uno.html' ? 'active' : ''}"><a href="sala_uno.html">Sala uno</a></li>
      <li class="${currentPage === 'sala_due.html' ? 'active' : ''}"><a href="sala_due.html">Sala due</a></li>
      <li class="${currentPage === 'sala_tre.html' ? 'active' : ''}"><a href="sala_tre.html">Sala tre</a></li>
    `;
    navbarContainer.appendChild(listItem);

    $('[data-toggle="tooltip"]').tooltip()
});

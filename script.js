function sharePage() {
  navigator.share({
    title: 'Топ фільмів',
    url: window.location.href
  });
}
 
document.addEventListener('DOMContentLoaded', function () {
  var navLinks = document.querySelectorAll('header nav a');
  var sections = document.querySelectorAll('main section');
 
  function showSection(id) {
    sections.forEach(function (section) {
      section.classList.toggle('active', section.id === id);
    });
    navLinks.forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('href') === '#' + id);
    });
  }
 
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      var id = this.getAttribute('href').substring(1);
      showSection(id);
      history.replaceState(null, '', '#' + id);
    });
  });

  var startId = window.location.hash
    ? window.location.hash.substring(1)
    : sections[0].id;
  showSection(startId);
});
 
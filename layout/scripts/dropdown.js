document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.menu .menu-title').forEach(function(title) {
    title.addEventListener('click', function() {
      var parentLi = this.parentNode;
      parentLi.classList.toggle('open');
    });
  });
});



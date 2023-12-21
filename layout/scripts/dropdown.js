document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.menu-title').forEach(function(title) {
    title.addEventListener('click', function() {
      var parentLi = this.parentNode;
      if (parentLi.classList.contains('menu-item')) {
        // 切换当前菜单项的展开/收起状态
        parentLi.classList.toggle('open');
      }
    });
  });
});


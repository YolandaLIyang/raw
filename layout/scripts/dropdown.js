document.querySelectorAll('.dropbtn').forEach(item => {
  item.addEventListener('click', event => {
    let dropdownContent = event.target.nextElementSibling;
    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
    } else {
      // 关闭其他所有打开的下拉菜单
      document.querySelectorAll('.ant-menu').forEach(d => {
        d.style.display = 'none';
      });
      // 打开当前下拉菜单
      dropdownContent.style.display = 'block';
    }
  });
});

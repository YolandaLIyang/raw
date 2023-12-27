document.querySelectorAll('.menu-title').forEach(item => {
    item.addEventListener('click', function() {
        const target = document.querySelector(this.getAttribute('data-target'));
        if (target) {
            target.style.display = target.style.display === 'none' ? 'block' : 'none';
            // 根据菜单的展开状态旋转箭头
            this.querySelector('.menu-icon').style.transform = target.style.display === 'none' ? 'rotate(0deg)' : 'rotate(90deg)';
        }
    });
});


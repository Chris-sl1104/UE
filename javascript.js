document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.transparent-navbar');
    const triggerOffset = 50;

    window.addEventListener('scroll', function() {
        const offset =  document.documentElement.scrollTop;

        if (offset > triggerOffset) {
            // 直接设置背景颜色以确保过渡效果
            navbar.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        } else {
            // 渐变回透明背景
            navbar.style.backgroundColor = "transparent";
        }
    });

});





document.getElementById('introContent').addEventListener('mouseenter', function() {
    const spans = document.querySelectorAll('#introContent span');
    spans.forEach(function(span) {
        const randomX = Math.floor(Math.random() * 200 - 100); // 生成随机 X 方向移动距离
        const randomY = Math.floor(Math.random() * 200 + 100); // 生成随机 Y 方向移动距离
        const randomRotate = Math.floor(Math.random() * 720); // 生成随机旋转角度
        span.style.transition = 'transform 2s ease, opacity 2s ease'; // 添加过渡效果
        span.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`; // 随机移动和旋转
        span.style.opacity = '0'; // 设置透明度为0，实现消失效果
    });
});

document.getElementById('introContent').addEventListener('mouseleave', function() {
    const spans = document.querySelectorAll('#introContent span');
    spans.forEach(function(span) {
        span.style.transition = 'transform 0.5s ease, opacity 0.3s ease'; // 添加过渡效果
        span.style.transform = 'translate(0, 0) rotate(0deg)'; // 恢复原始位置和旋转
        span.style.opacity = '1'; // 恢复原始透明度
    });
});

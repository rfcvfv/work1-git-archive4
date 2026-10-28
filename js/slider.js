// 首页轮播：点击技能标签切换高亮
document.addEventListener('DOMContentLoaded', () => {
  const tags = document.querySelectorAll('.tag');
  tags.forEach((tag) => {
    tag.addEventListener('click', () => tag.classList.toggle('active'));
  });
});
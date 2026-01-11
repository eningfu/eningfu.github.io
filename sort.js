function filterGallery(category) {
  const items = document.querySelectorAll('.gallery-item');
  const buttons = document.querySelectorAll('.left button');
  buttons.forEach(btn => btn.classList.remove('current'));
  document.getElementById(category).classList.add('current');
  items.forEach(item => {
    item.classList.toggle('hidden', !item.classList.contains(category));
  });

}
window.addEventListener('DOMContentLoaded', () => {
  filterGallery('char');
});

let [...items] = document.querySelectorAll('.static_menu__item');
let [...sections] = document.querySelectorAll('section');

const switchActive = (e) => {
  items.forEach((i) => i.classList.remove('static_active'));

  e.target.parentElement.classList.add('static_active');
};

items.forEach((i) => {
  i.addEventListener('click', switchActive, false);
});

sections = sections.filter((i) => i.id);

window.addEventListener('scroll', () => {
  sections.forEach((section, index) => {
    let y = section.getBoundingClientRect().top;
    if (y > 0 && y < 200) {
      items.forEach((i) => i.classList.remove('static_active'));
      items[index].classList.add('static_active');
    }
  });
});

const navLiEl = document.querySelectorAll('.item');
console.log('Number of categories:', navLiEl.length);
const LiTitleEl = document.querySelectorAll('.item h2');
const UlTitleEl = document.querySelectorAll('.item ul');
console.log('Category:', LiTitleEl[0].textContent);
console.log('Elements', UlTitleEl[0].children.length);
console.log('Category:', LiTitleEl[1].textContent);
console.log('Elements', UlTitleEl[1].children.length);
console.log('Category:', LiTitleEl[2].textContent);
console.log('Elements', UlTitleEl[2].children.length);
const navLiEl = document.querySelectorAll('.item');
console.log('Number of categories:', navLiEl.length);
const liTitleEl = document.querySelectorAll('.item h2');
const ulTitleEl = document.querySelectorAll('.item ul');
liTitleEl.forEach(element => {
    console.log('Category:', element.textContent);
})
ulTitleEl.forEach(element => {
    console.log('Elements:', element.children.length);
})

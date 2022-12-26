const navLiEl = document.querySelectorAll('.item');
console.log('Number of categories:', navLiEl.length);

navLiEl.forEach(element => {
    console.log('Category:', element.firstElementChild.textContent);
    console.log('Elements:', element.lastElementChild.childElementCount);
})


const liItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${liItems.length}`);


liItems.forEach(item => {
    const titleEl = item.querySelector("h2").textContent;
    console.log(`Category: ${titleEl}`);

    const elements = item.querySelectorAll('.item>ul>li')
    console.log(`Elements: ${elements.length}`);
});


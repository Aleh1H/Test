// for (let x = 0; x<10; x++){
//     document.write('<div>Lorem ipsum dolor sit amet.</div>');
// }

// for (let a = 0; a<10; a++){
//     document.write(`<div> ${a} Lorem ipsum dolor sit amet.</div>`);
// }

// let a = 0;
// while (a < 20) {
//     document.write(`<h1>any text</h1>`);
//     a++
// }

// let a = 0;
// while (a < 20) {
//     document.write(`<h1>${a}. any text</h1>`);
//     a++
// }

// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// document.write(`<ul>`)
// for (x = 0; x < listOfItems.length; x++){
//     document.write(`<li>${listOfItems[x]}</li>`)
// }
// document.write(`</ul>`);

let products = [{
    title: 'milk',
    price: 22,
    image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
}, {
    title: 'juice',
    price: 27,
    image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
}, {
    title: 'tomato',
    price: 47,
    image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
}, {
    title: 'tea',
    price: 15,
    image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
},];
for (a = 0; a < products.length; a++) {
    document.write(`<div class = "product-card"><h3 class = "product-title"> Product - ${products[a].title} <img src="${products[a].image}" alt="" class="product-image"> Price - ${products[a].price}</h3>
</div>`)
}

var BooksList = [
   {
      name: 'The first ladies',
      price: '10$',
      date: '2008',
      rate: '9.0',
      nbofpage: '200 page',
      imgSrc: 'images/520.jpg'
   },
   {
       name: 'The wager ',
       price: '13$',
       date: '2017',
       rate: '9.4',
       nbofpage: '220 page',
       imgSrc: 'images/521.webp',
    },
    {
       name: 'Bad summer people',
      price: '8$',
      date: '1970',
      rate: '7.8',
      nbofpage: '107 page',
      imgSrc: 'images/522.jpg',
    },
    {
       name: 'Small Mercies',
      price: '9$',
      date: '1978',
      rate: '8,0',
      nbofpage: '128 page',
      imgSrc: 'images/523.jpg',
    },
    {
       name: 'Happy place',
      price: '15$',
      date: '2018',
      rate: '9.7',
      nbofpage: '66 page',
      imgSrc: 'images/524.jpg',
    },
    {
       name: 'The covenant water',
      price: '5$',
      date: '1965',
      rate: '7.2',
      nbofpage: '230 page',
      imgSrc: 'images/525.jpg',
    },
 ];
 
 var filteredList = [...BooksList];
 
 createBooksList();
 
 var searchInput = document.getElementById('searchInput');
 
 function onSearch() {
   console.log(searchInput.value)
   filteredList = BooksList.filter(Books => Books.name.toLocaleLowerCase().startsWith(searchInput.value.toLocaleLowerCase()))
 
   console.log({filteredList});
 
   removeChildren('.col-12', document.body);
 
   createBooksList();
 }
 
 function removeChildren(cssSelector, parentNode){
   var elements = parentNode.querySelectorAll(cssSelector);
   let fragment = document.createDocumentFragment(); 
   fragment.textContent=' ';
   fragment.firstChild.replaceWith(...elements);
 }
 
 function createBooksList() {
   filteredList.forEach(Books => {
       var div = document.createElement('div');
 
       var content = `
       <div class="card">
           <div class="details">
               <div class="left">
                   <p class="name">${Books.name}</p>
                   <div class="date_price">
                       <p class="price">${Books.price}</p>
                       <p class="date">${Books.date}</p>
                   </div>
                   <div class="info">
                       <div class="rate">
                           <i class="fa-solid fa-star"></i>
                           <p>${Books.rate}</p>
                       </div>
                       <div class="nbofpage">
                           <i class="fa-regular fa-clock"></i>
                           <p>${Books.nbofpage}</p>
                       </div>
                   </div>
               </div>
               <div class="right">
                   <i class="fa-solid fa-play"></i>
               </div>
           </div>
           <img src="${Books.imgSrc}">
       </div>
       `;
 
       div.innerHTML = content;
       div.className = "col-lg-3 col-md-4 col-sm-6 col-12";
       document.getElementById('myBox').appendChild(div);
   });
 }
 
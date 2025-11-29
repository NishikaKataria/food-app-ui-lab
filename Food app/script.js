const menuItems = [
  { id:1, name: "Veg Pizza", type:"veg", price: 199, img:"images/pizza1.jpg" },
  { id:2, name: "Paneer Wrap", type:"veg", price: 129, img:"images/wrap.jpg" },
  { id:3, name: "Chicken Burger", type:"nonveg", price: 179, img:"images/burger1.jpg" },
  { id:4, name: "French Fries", type:"veg", price: 79, img:"images/fries.jpg" },
  { id:5, name: "Fried Chicken", type:"nonveg", price: 229, img:"images/Fried-Chicken.jpg" }
];

const menuGrid = document.getElementById('menuGrid');
const search = document.getElementById('search');
const filter = document.getElementById('filter');

function renderItems(items){
  menuGrid.innerHTML = '';
  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <h3>${item.name}</h3>
      <div class="meta">
        <div>₹ ${item.price}</div>
        <button class="btn" data-id="${item.id}">Add</button>
      </div>
    `;
    menuGrid.appendChild(card);
  });
}

// initial render
renderItems(menuItems);

// search and filter
function filterList(){
  const q = search.value.toLowerCase().trim();
  const t = filter.value;
  const filtered = menuItems.filter(it => {
    const matchQuery = it.name.toLowerCase().includes(q);
    const matchType = t === 'all' ? true : it.type === t;
    return matchQuery && matchType;
  });
  renderItems(filtered);
}

search.addEventListener('input', filterList);
filter.addEventListener('change', filterList);

// simple add button action (no cart backend - just a small message)
menuGrid.addEventListener('click', (e) => {
  if(e.target.matches('button[data-id]')){
    const id = +e.target.dataset.id;
    const item = menuItems.find(x => x.id === id);
    alert(item.name + " added to cart (demo)");
  }
});

// update year
document.getElementById('year').textContent = new Date().getFullYear();
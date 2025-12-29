const products = [
  // MEN
  { name: "Nike Air Max", price: 120, category: "men", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
  { name: "Adidas Ultraboost", price: 150, category: "men", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a" },
  { name: "Puma RS-X", price: 95, category: "men", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77" },
  { name: "Reebok Classic", price: 85, category: "men", image: "https://images.unsplash.com/photo-1584000302558-ce0ba6aa4a07?auto=format&fit=crop&w=400&q=80" },

  // WOMEN
  { name: "Nike Women Flex", price: 110, category: "women", image: "https://images.unsplash.com/photo-1515444744559-7be63e1600de?auto=format&fit=crop&w=400&q=80" },
  { name: "Adidas Pureboost", price: 140, category: "women", image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&w=400&q=80" },
  { name: "Puma Cali", price: 100, category: "women", image: "https://images.unsplash.com/photo-1521093470119-a3ac9f99869e?auto=format&fit=crop&w=400&q=80" },
  { name: "Fila Disruptor", price: 90, category: "women", image: "https://images.unsplash.com/photo-1512374382149-4332c6c02151?auto=format&fit=crop&w=400&q=80" },

  // CHILD
  { name: "Kids Nike Runner", price: 70, category: "child", image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=400&q=80" },
  { name: "Adidas Kids Star", price: 65, category: "child", image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=400&q=80" },
  { name: "Puma Kids Fun", price: 60, category: "child", image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=400&q=80" },
  { name: "Kids Sports Shoe", price: 55, category: "child", image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=400&q=80" }
];

const list = document.getElementById("product-list");
const search = document.getElementById("search");
const cartCount = document.getElementById("cart-count");

let cart = 0;
let current = "all";

function show(items) {
  list.innerHTML = "";
  items.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <p class="price">$${p.price}</p>
      <button>Add to Cart</button>
    `;
    card.querySelector("button").onclick = () => {
      cart++;
      cartCount.textContent = cart;
    };
    list.appendChild(card);
  });
}

function filterCategory(cat) {
  current = cat;
  apply();
}

function apply() {
  let filtered = products;
  if (current !== "all") {
    filtered = filtered.filter(p => p.category === current);
  }
  const val = search.value.toLowerCase();
  if (val) {
    filtered = filtered.filter(p => p.name.toLowerCase().includes(val));
  }
  show(filtered);
}

search.addEventListener("keyup", apply);
show(products);

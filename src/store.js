import { configureStore, createSlice } from '@reduxjs/toolkit';
const vegSlice = createSlice({
  name: 'products',
  initialState: {
  vegItems : [
  { id: 1, name: "Tomato", description: "Fresh red tomatoes full of flavor, perfect for curries, salads, and soups.", price: 40, image: "/veg/tomato.png" },
  { id: 2, name: "Potato", description: "Golden potatoes rich in starch, used in fries, curries, and parathas.", price: 1, image: "/veg/potato.png" },
  { id: 3, name: "Ladies Finger (Bhindi)", description: "Green bhindi with a crunchy taste, ideal for stir-fries and curries.", price: 50, image: "/veg/bendi.png" },
  { id: 4, name: "Bottle Gourd", description: "Light and healthy vegetable for curries, soups, and dals.", price: 35, image: "/veg/bottle_guard.png" },
  { id: 5, name: "Carrot", description: "Crunchy and sweet carrots, rich in Vitamin A, great for salads and curries.", price: 45, image: "/veg/carrot.png" },
  { id: 6, name: "Cabbage", description: "Fresh green cabbage, perfect for stir-fry, curries, and momos stuffing.", price: 25, image: "/veg/cabbage.png" },
  { id: 7, name: "Cauliflower", description: "White florets of cauliflower, delicious in curries and pakoras.", price: 55, image: "/veg/cauliflower.png" },
  { id: 8, name: "Spinach (Palak)", description: "Green leafy spinach rich in iron, best for palak paneer and dals.", price: 20, image: "/veg/spinach.png" },
  { id: 9, name: "Brinjal (Eggplant)", description: "Purple brinjal, soft and tasty, great for curries and bharta.", price: 40, image: "/veg/brinjal.png" },
  { id: 10, name: "Capsicum (Bell Pepper)", description: "Colorful bell peppers with crunchy texture, perfect for fried rice and curries.", price: 60, image: "/veg/capsicum.png" },
  { id: 11, name: "Green Peas", description: "Sweet and fresh peas, used in curries, pulao, and snacks.", price: 70, image: "/veg/peas.png" },
  { id: 12, name: "Onion", description: "Fresh red onions, essential for curries, gravies, and salads.", price: 35, image: "/veg/onion.png" },
  { id: 13, name: "Garlic", description: "Aromatic garlic pods, widely used for flavoring dishes and curries.", price: 90, image: "/veg/garlic.png" },
  { id: 14, name: "Ginger", description: "Fresh ginger roots with strong flavor, perfect for teas and curries.", price: 120, image: "/veg/ginger.png" },
  { id: 15, name: "Coriander Leaves", description: "Fresh green coriander leaves to garnish and add flavor to dishes.", price: 15, image: "/veg/coriander.png" },
  { id: 16, name: "Mint Leaves", description: "Refreshing mint leaves used in chutneys, biryanis, and drinks.", price: 20, image: "/veg/mint.png" },
  { id: 17, name: "Radish", description: "White radish with crunchy texture, great for parathas and salads.", price: 25, image: "/veg/radish.png" },
  { id: 18, name: "Drumstick (Moringa)", description: "Nutritious drumsticks used in sambhar, curries, and dals.", price: 40, image: "/veg/drumstick.png" },
  { id: 19, name: "Pumpkin", description: "Yellow pumpkin with sweet taste, ideal for curries and soups.", price: 35, image: "/veg/pumpkin.png" },
  { id: 20, name: "Bitter Gourd (Karela)", description: "Green bitter gourd, healthy and commonly used in stir-fries and curries.", price: 45, image: "/veg/bitter_gourd.png" }
]
,
nonvegItems :[
  { id: 101, name: "Chicken", description: "Fresh farm chicken, tender and juicy, perfect for curries, biryanis, and roasts.", price: 200, image: "/nonveg/chicken.png" },
  { id: 102, name: "Mutton", description: "Premium quality mutton, soft and delicious, ideal for curries and biryanis.", price: 550, image: "/nonveg/mutton.webp" },
  { id: 103, name: "Fish", description: "Fresh river fish, rich in protein, great for fries, curries, and soups.", price: 300, image: "/nonveg/fish.png" },
  { id: 104, name: "Prawns", description: "Juicy prawns full of flavor, perfect for curries, stir-fries, and biryanis.", price: 400, image: "/nonveg/prawns.png" },
  { id: 105, name: "Eggs", description: "Farm-fresh eggs, full of protein, ideal for omelets, curries, and snacks.", price: 60, image: "/nonveg/eggs.png" },
  { id: 106, name: "Crab", description: "Fresh sea crab, juicy and rich in flavor, great for curries and seafood dishes.", price: 500, image: "/nonveg/crab.png" },
  { id: 107, name: "Lamb", description: "Tender lamb meat, perfect for kebabs, curries, and grills.", price: 600, image: "/nonveg/lamb.png" },
  { id: 108, name: "Duck", description: "Farm-raised duck, flavorful and rich, ideal for roasts and curries.", price: 450, image: "/nonveg/duck.png" },
  { id: 109, name: "Squid (Calamari)", description: "Fresh squid, tender and delicious, best for fried rings and curries.", price: 350, image: "/nonveg/squid.png" },
  { id: 110, name: "Turkey", description: "Lean and protein-rich turkey meat, great for roasts, curries, and grills.", price: 500, image: "/nonveg/turkey.png" },
  { id: 112, name: "Goat", description: "Fresh goat meat, rich in taste, ideal for traditional curries and stews.", price: 550, image: "/nonveg/goat.png" },
  { id: 113, name: "Beef", description: "Premium beef cuts, juicy and tender, best for steaks, curries, and grills.", price: 700, image: "/nonveg/beef.png" },
  { id: 114, name: "Pork", description: "Farm-raised pork, rich and flavorful, perfect for roasts, curries, and chops.", price: 400, image: "/nonveg/pork.png" },
  { id: 115, name: "Salmon", description: "Fresh Atlantic salmon, rich in omega-3, great for grills and sushi.", price: 800, image: "/nonveg/salmon.png" },
  { id: 117, name: "Octopus", description: "Tender octopus, perfect for Mediterranean grills and seafood curries.", price: 600, image: "/nonveg/octopus.png" },
  { id: 118, name: "Lobster", description: "Premium lobster, sweet and juicy, best for seafood platters and curries.", price: 1200, image: "/nonveg/lobster.png" },
  { id: 120, name: "Oysters", description: "Juicy oysters, fresh from the sea, great for grills, soups, and raw dishes.", price: 500, image: "/nonveg/oyster.png" },
  { id: 121, name: "Anchovies", description: "Small, salty anchovies, great for pizzas, salads, and curries.", price: 250, image: "/nonveg/anchovis.png" },
  { id: 122, name: "Sardines", description: "Fresh sardines, rich in calcium and flavor, best for fries and grills.", price: 220, image: "/nonveg/sardine.png" },
  { id: 123, name: "Ham", description: "Smoked ham, rich in flavor, perfect for sandwiches, pizzas, and grills.", price: 600, image: "/nonveg/ham.png" },
  { id: 124, name: "Bacon", description: "Crispy bacon strips, smoky and delicious, great for breakfast and burgers.", price: 450, image: "/nonveg/bacon.png" },
  { id: 126, name: "Venison", description: "Lean venison meat, tender and healthy, ideal for steaks and curries.", price: 900, image: "/nonveg/venison.png" },
  ],
 milkItems :[
  { id: 201, name: "Full Cream Milk", description: "Rich and creamy full cream milk, perfect for tea, coffee, and desserts.", price: 60, image: "/milk/full-cream.png" },
  { id: 202, name: "Toned Milk", description: "Healthy toned milk with reduced fat, ideal for daily use.", price: 50, image: "/milk/toned-milk.webp" },
  { id: 203, name: "Double Toned Milk", description: "Low-fat double toned milk, great for fitness-conscious people.", price: 45, image: "/milk/double-toned.webp" },
  { id: 204, name: "Skimmed Milk", description: "Fat-free skimmed milk, rich in protein, suitable for diets.", price: 40, image: "/milk/skimmed-milk.png" },
  { id: 205, name: "Cow Milk", description: "Pure cow milk, fresh and nutritious, perfect for daily drinking.", price: 55, image: "/milk/cow-milk.webp" },
  { id: 206, name: "Buffalo Milk", description: "Thick and creamy buffalo milk, rich in calcium and taste.", price: 65, image: "/milk/buffalo-milk.webp" },
  { id: 207, name: "Organic Milk", description: "Farm-fresh organic milk without preservatives or additives.", price: 70, image: "/milk/organic-milk.png" },
  { id: 208, name: "Flavored Milk - Chocolate", description: "Delicious chocolate flavored milk, loved by kids and adults.", price: 80, image: "/milk/chacolate-milk.png" },
  { id: 209, name: "Flavored Milk - Strawberry", description: "Sweet strawberry flavored milk, refreshing and tasty.", price: 80, image: "/milk/strawberry-milk.png" },
  { id: 210, name: "Flavored Milk - Vanilla", description: "Smooth vanilla flavored milk, perfect as a refreshing drink.", price: 80, image: "/milk/vanilla-milk.png" },
  { id: 211, name: "Milk Powder", description: "Instant milk powder, convenient for tea, coffee, and desserts.", price: 200, image: "/milk/milk-powder.png" },
  { id: 212, name: "Condensed Milk", description: "Thick and sweet condensed milk, perfect for sweets and desserts.", price: 120, image: "/milk/condensed-milk.png" },
  { id: 213, name: "Evaporated Milk", description: "Creamy evaporated milk, excellent for baking and desserts.", price: 100, image: "/milk/evaporated-milk.webp" },
  { id: 214, name: "UHT Milk", description: "Long-life UHT milk, stays fresh without refrigeration.", price: 75, image: "/milk/UHT-milk.webp" },
  { id: 215, name: "Lactose-Free Milk", description: "Lactose-free milk, easy to digest and healthy.", price: 90, image: "/milk/lactose-milk.png" },
  { id: 216, name: "Buttermilk", description: "Refreshing buttermilk (chaas), great for digestion.", price: 35, image: "/milk/buttermilk.png" },
  { id: 217, name: "Curd", description: "Fresh curd (dahi), creamy and healthy, perfect for meals.", price: 60, image: "/milk/curd.png" },
  { id: 218, name: "Paneer", description: "Soft paneer (cottage cheese), rich in protein and taste.", price: 300, image: "/milk/paneer.png" },
  { id: 219, name: "Cheese", description: "Delicious cheese, great for pizzas, sandwiches, and snacks.", price: 400, image: "/milk/cheese-milk.png" },
  { id: 220, name: "Butter", description: "Smooth and creamy butter, perfect for bread and cooking.", price: 200, image: "/milk/butter.png" },
  { id: 221, name: "Ghee", description: "Pure desi ghee, rich in flavor and nutrition.", price: 600, image: "/milk/ghee.webp" },

],
medicineItems : [
  { id: 301, name: "Paracetamol", description: "Used for fever and mild pain relief. Commonly known as Crocin or Dolo-650.", price: 30, image: "/medicines/paracetamal.png" },
  { id: 302, name: "Ibuprofen", description: "Anti-inflammatory and pain reliever, good for headaches and muscle pain.", price: 40, image: "/medicines/ibuprofen.png" },
  { id: 303, name: "Amoxicillin", description: "Antibiotic used to treat bacterial infections like throat infection, pneumonia.", price: 120, image: "/medicines/amoxicillin.png" },
  { id: 304, name: "Cetirizine", description: "Anti-allergic tablet used for runny nose, sneezing, and allergy relief.", price: 25, image: "/medicines/cetirizine.png" },
  { id: 305, name: "Vitamin C", description: "Boosts immunity, helps fight infections, and improves skin health.", price: 150, image: "/medicines/vitamin-c.png" },
  { id: 306, name: "Multivitamin Tablets", description: "Complete multivitamin supplement for daily health and immunity.", price: 200, image: "/medicines/multivitamin.png" },
  { id: 307, name: "ORS Sachets", description: "Oral rehydration solution for dehydration due to diarrhea or heat.", price: 15, image: "/medicines/ors.avif" },
  { id: 308, name: "Cough Syrup", description: "Relieves dry and wet cough, soothes throat irritation.", price: 90, image: "/medicines/cough-syrup.webp" },
  { id: 309, name: "Azithromycin", description: "Broad-spectrum antibiotic used for bacterial infections.", price: 150, image: "/medicines/Azithromycin.jpeg" },
  { id: 310, name: "Pain Relief Spray", description: "Instant pain relief spray for muscle pain, sprains, and joint pain.", price: 180, image: "/medicines/Pain Relief Spray.webp" },
  { id: 311, name: "Digene", description: "Antacid tablets or syrup for acidity and indigestion relief.", price: 80, image: "/medicines/Digene.jpg" },
  { id: 312, name: "ORS Drink Bottle", description: "Ready-to-drink rehydration solution with electrolytes.", price: 35, image: "/medicines/ORS Drink Bottle.jpg" },
  { id: 313, name: "Insulin Injection", description: "Essential for diabetic patients to control blood sugar levels.", price: 500, image: "/medicines/Insulin Injection.webp" },
  { id: 314, name: "Glucometer Strips", description: "Test strips for monitoring blood sugar levels at home.", price: 600, image: "/medicines/Glucometer Strips.png" },
  { id: 315, name: "Bandages", description: "Sterile bandages for wounds and injuries.", price: 50, image: "/medicines/Bandages.jpg" },
  { id: 316, name: "Antiseptic Liquid", description: "Used to clean wounds and prevent infections (Dettol/Savlon).", price: 120, image: "/medicines/Antiseptic Liquid.webp" },
  { id: 317, name: "Vitamin D3", description: "Supports bone health and immunity, essential for calcium absorption.", price: 180, image: "/public/medicines/Vitamin D3.jpg" },
  { id: 318, name: "Calcium Tablets", description: "Boosts bone strength, prevents osteoporosis.", price: 200, image: "/medicines/Calcium Tablets.jpg" },
  { id: 319, name: "Iron Supplements", description: "Used to treat iron deficiency and anemia.", price: 170, image: "/medicines/Iron Supplements.jpg" },
  { id: 320, name: "Electrolyte Powder", description: "Energy and hydration drink powder, replenishes lost salts.", price: 40, image: "/medicines/Electrolyte Powder.jpg" },
  { id: 321, name: "Hand Sanitizer", description: "Kills 99.9% of germs, essential for hygiene.", price: 70, image: "/medicines/Hand Sanitizer.webp" },
  { id: 322, name: "Thermometer", description: "Digital thermometer for measuring body temperature.", price: 250, image: "/medicines/Thermometer.png" }
],
 SweetsItems :[
  { id: 401, name: "Gulab Jamun", description: "Soft and juicy gulab jamun soaked in sugar syrup.", price: 5, image: "/sweets/gulab-jamun.png" },
  { id: 402, name: "Rasgulla", description: "Spongy rasgulla made with fresh chhena and sugar syrup.", price: 140, image: "/sweets/Rasgulla.png" },
  { id: 403, name: "Kaju Katli", description: "Delicious kaju katli made with cashews and sugar.", price: 500, image: "/sweets/kaju-katli.png" },
  { id: 404, name: "Motichoor Laddu", description: "Soft and tasty motichoor laddu, perfect for festivals.", price: 200, image: "/sweets/motichoor-laddu.png" },
  { id: 405, name: "Besan Laddu", description: "Traditional besan laddu made with gram flour and ghee.", price: 180, image: "/sweets/besan-laddu.png" },
  { id: 406, name: "Soan Papdi", description: "Flaky and sweet soan papdi, a favorite Indian sweet.", price: 160, image: "/sweets/soan-papdi.png" },
  { id: 407, name: "Jalebi", description: "Crispy and juicy jalebi fried in ghee and dipped in syrup.", price: 120, image: "/sweets/jalebi.png" },
  { id: 408, name: "Barfi", description: "Delicious milk barfi made with khoya and sugar.", price: 250, image: "/sweets/barfi.png" },
  { id: 409, name: "Peda", description: "Soft and sweet peda made from khoya and sugar.", price: 220, image: "/sweets/peda.png" },
  { id: 410, name: "Sandesh", description: "Bengali special sandesh made from fresh paneer.", price: 270, image: "/sweets/sandesh.png" },
  { id: 411, name: "Cham Cham", description: "Colorful Bengali cham cham sweet, soft and delicious.", price: 280, image: "/sweets/cham-cham.png" },
  { id: 412, name: "Rabri", description: "Thick and creamy rabri topped with dry fruits.", price: 300, image: "/sweets/rabri.png" },
  { id: 413, name: "Halwa", description: "Rich and tasty suji halwa with ghee and nuts.", price: 150, image: "/sweets/halwa.png" },
  { id: 414, name: "Malpua", description: "Traditional malpua pancakes soaked in sugar syrup.", price: 200, image: "/sweets/malpua.png" },
  { id: 415, name: "Balushahi", description: "Flaky and sugary balushahi, crispy outside, soft inside.", price: 170, image: "/sweets/balushahi.png" },
  { id: 416, name: "Mysore Pak", description: "Famous South Indian sweet made with gram flour and ghee.", price: 260, image: "/sweets/mysore-pak.png" },
  { id: 417, name: "Chikki", description: "Crunchy peanut chikki made with jaggery.", price: 130, image: "/sweets/chikki.png" },
  { id: 418, name: "Kalakand", description: "Delicious milk-based kalakand topped with pistachios.", price: 280, image: "/sweets/kalakand.png" },
  { id: 419, name: "Kheer", description: "Creamy rice kheer cooked with milk and dry fruits.", price: 200, image: "/sweets/kheer.png" },
  { id: 420, name: "Modak", description: "Traditional sweet modak filled with jaggery and coconut.", price: 300, image: "/sweets/modak.png" }
],
 drinkItems: [
  { id: 1, name: "Thumsup", price: 50, image: "/drinks/Thumsup.jpg" },
    { id: 2, name: "Coca Cola", price: 50, image: "/drinks/7 Up.jpg" },
    { id: 3, name: "Pepsi", price: 45, image: "/drinks/Pepsi.jpg" },
    { id: 4, name: "Sprite", price: 40, image: "/drinks/Sprite.jpg" },
    { id: 5, name: "Fanta", price: 42, image: "/drinks/Fanta.jpg" },
    { id: 6, name: "Maaza Mango", price: 55, image: "/drinks/Maaza Mango.jpg" },
    { id: 7, name: "Red Bull", price: 120, image: "/drinks/Red Bull.jpg" },
    { id: 8, name: "Tropicana Orange Juice", price: 65, image: "/drinks/Tropicana Orange Juice.jpg" },
    { id: 9, name: "Bovonto", price: 35, image: "/drinks/Bovonto.jpg" },
    { id: 10, name: "Mountain Dew", price: 48, image: "/drinks/Mountain Dew.jpg" },
    { id: 11, name: "7 Up", price: 44, image: "/drinks/7 Up.jpg" },
  ],
  icecreamItems: [
    { id: 1, name: "Vanilla Ice Cream", price: 60, image: "/icecreams/Vanilla Ice Cream.jpg" },
    { id: 2, name: "Chocolate Ice Cream", price: 70, image: "/icecreams/Chocolate Ice Cream.jpg" },
    { id: 3, name: "Strawberry Ice Cream", price: 75, image: "/icecreams/Strawberry Ice Cream.jpg" },
    { id: 4, name: "Butterscotch Ice Cream", price: 80, image: "/icecreams/Butterscotch Ice Cream.jpg" },
    { id: 5, name: "Mango Ice Cream", price: 65, image: "/icecreams/Mango Ice Cream.jpg" },
    { id: 6, name: "Black Currant Ice Cream", price: 85, image: "/icecreams/Black Currant Ice Cream.jpg" },
    { id: 7, name: "Kulfi", price: 50, image: "/icecreams/Kulfi.jpg" },
    { id: 8, name: "Choco Chip Ice Cream", price: 90, image: "/icecreams/Choco Chip Ice Cream.jpg" },
    { id: 9, name: "Pista Ice Cream", price: 85, image: "/icecreams/Pista Ice Cream.jpg" },
    { id: 10, name: "Oreo Ice Cream", price: 95, image: "/icecreams/Oreo Ice Cream.jpg" },
  ],
  },
  reducers : {}
});

// Load wishlist from localStorage initially
const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: savedWishlist, 
  reducers: {
    addToWishlist: (state, action) => {
      const item = action.payload;
      // Prevent duplicates
      const exists = state.find((i) => i.id === item.id);
      if (!exists) {
        state.push(item);
        localStorage.setItem("wishlist", JSON.stringify(state));
      }
    },

    removeFromWishlist: (state, action) => {
      const updatedState = state.filter((i) => i.id !== action.payload.id);
      localStorage.setItem("wishlist", JSON.stringify(updatedState));
      return updatedState; // Important: return new array
    },

    clearWishlist: () => {
      localStorage.removeItem("wishlist");
      return [];
    }
  },
});


// Load from localStorage
const loadFromLocalStorage = () => {
  const data = localStorage.getItem("userState");
  return data
    ? JSON.parse(data)
    : { allUsers: [], authenticated: false, currentUser: null, error: null };
};

// Save to localStorage
const saveToLocalStorage = (state) => {
  localStorage.setItem("userState", JSON.stringify(state));
};

const initialState = loadFromLocalStorage();

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.allUsers.push(action.payload);
      state.error = null; // clear errors on successful register
      saveToLocalStorage(state);
    },
    loginUser: (state, action) => {
       state.error = null; 
      const { email, password } = action.payload;
      const user = state.allUsers.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        state.authenticated = true;
        state.currentUser = user;
       // ✅ successful login
      } else {
        state.authenticated = false;
        state.currentUser = null;
        state.error = "Invalid email or password"; // ❌ error state
      }
      saveToLocalStorage(state);
    },
    logoutUser: (state) => {
      state.authenticated = false;
      state.currentUser = null;
      state.error = null;
      saveToLocalStorage(state);
    },
  },
});




const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
const cartSlice = createSlice({
  name: "Cart",
  initialState: savedCart, // ✅ Load cart from localStorage initially
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      
        state.push({ ...item, quantity: 1 });

      // ✅ Store updated cart in localStorage
      localStorage.setItem("cart", JSON.stringify(state));
    },


    incrementQuantity: (state, action) => {
      const item = state.find((i) => i.id === action.payload.id);
      console.log(action.payload);
      if (item) {
        item.quantity += 1;
        
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },

    decrementQuantity: (state, action) => {
      let updatedCart = state;
      const item = state.find((i) => i.id === action.payload.id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          // If quantity == 1, remove item from cart
          updatedCart = state.filter((i) => i.id !== action.payload.id);
        }
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    },

    removeFromCart: (state, action) => {
      const updatedCart = state.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    },

    clearCart: () => {
      localStorage.removeItem("cart");
      return [];
    },
  },
});

const orderSlice = createSlice({
  name : "orders",
  initialState: [],
  reducers: {
    addOrder: (state, action) => {
      state.push(action.payload);
    },
    removeOrder: (state, action) => {
      return state.filter(order => order.id !== action.payload.id);
    },
    clearOrders: () => {
      return [];
    },
  },
});


// Step 3: Configure store
const store = configureStore({
  reducer: {
    products: vegSlice.reducer,
    Cart : cartSlice.reducer,
    orders : orderSlice.reducer,
    wishlist : wishlistSlice.reducer,
    users : userSlice.reducer
  }
});
export const {addToCart, incrementQuantity, decrementQuantity, removeFromCart, clearCart } = cartSlice.actions;
export const {addToWishlist, removeFromWishlist, clearWishlist} = wishlistSlice.actions;
export const { addOrder, removeOrder, clearOrders } = orderSlice.actions;

export const { registerUser, loginUser, logoutUser } = userSlice.actions;

export default store;
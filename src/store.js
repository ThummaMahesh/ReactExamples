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
  { id: 101, name: "Chicken", description: "Fresh farm chicken, tender and juicy, perfect for curries, biryanis, and roasts.", price: 200, image: "/public/nonveg/chicken.png" },
  { id: 102, name: "Mutton", description: "Premium quality mutton, soft and delicious, ideal for curries and biryanis.", price: 550, image: "/public/nonveg/mutton.webp" },
  { id: 103, name: "Fish", description: "Fresh river fish, rich in protein, great for fries, curries, and soups.", price: 300, image: "/public/nonveg/fish.png" },
  { id: 104, name: "Prawns", description: "Juicy prawns full of flavor, perfect for curries, stir-fries, and biryanis.", price: 400, image: "/public/nonveg/prawns.png" },
  { id: 105, name: "Eggs", description: "Farm-fresh eggs, full of protein, ideal for omelets, curries, and snacks.", price: 60, image: "/public/nonveg/eggs.png" },
  { id: 106, name: "Crab", description: "Fresh sea crab, juicy and rich in flavor, great for curries and seafood dishes.", price: 500, image: "/public/nonveg/crab.png" },
  { id: 107, name: "Lamb", description: "Tender lamb meat, perfect for kebabs, curries, and grills.", price: 600, image: "/public/nonveg/lamb.png" },
  { id: 108, name: "Duck", description: "Farm-raised duck, flavorful and rich, ideal for roasts and curries.", price: 450, image: "/public/nonveg/duck.png" },
  { id: 109, name: "Squid (Calamari)", description: "Fresh squid, tender and delicious, best for fried rings and curries.", price: 350, image: "/public/nonveg/squid.png" },
  { id: 110, name: "Turkey", description: "Lean and protein-rich turkey meat, great for roasts, curries, and grills.", price: 500, image: "/public/nonveg/turkey.png" },
  { id: 112, name: "Goat", description: "Fresh goat meat, rich in taste, ideal for traditional curries and stews.", price: 550, image: "/public/nonveg/goat.png" },
  { id: 113, name: "Beef", description: "Premium beef cuts, juicy and tender, best for steaks, curries, and grills.", price: 700, image: "/public/nonveg/beef.png" },
  { id: 114, name: "Pork", description: "Farm-raised pork, rich and flavorful, perfect for roasts, curries, and chops.", price: 400, image: "/public/nonveg/pork.png" },
  { id: 115, name: "Salmon", description: "Fresh Atlantic salmon, rich in omega-3, great for grills and sushi.", price: 800, image: "/public/nonveg/salmon.png" },
  { id: 117, name: "Octopus", description: "Tender octopus, perfect for Mediterranean grills and seafood curries.", price: 600, image: "/public/nonveg/octopus.png" },
  { id: 118, name: "Lobster", description: "Premium lobster, sweet and juicy, best for seafood platters and curries.", price: 1200, image: "/public/nonveg/lobster.png" },
  { id: 120, name: "Oysters", description: "Juicy oysters, fresh from the sea, great for grills, soups, and raw dishes.", price: 500, image: "/public/nonveg/oyster.png" },
  { id: 121, name: "Anchovies", description: "Small, salty anchovies, great for pizzas, salads, and curries.", price: 250, image: "/public/nonveg/anchovis.png" },
  { id: 122, name: "Sardines", description: "Fresh sardines, rich in calcium and flavor, best for fries and grills.", price: 220, image: "/public/nonveg/sardine.png" },
  { id: 123, name: "Ham", description: "Smoked ham, rich in flavor, perfect for sandwiches, pizzas, and grills.", price: 600, image: "/public/nonveg/ham.png" },
  { id: 124, name: "Bacon", description: "Crispy bacon strips, smoky and delicious, great for breakfast and burgers.", price: 450, image: "/public/nonveg/bacon.png" },
  { id: 126, name: "Venison", description: "Lean venison meat, tender and healthy, ideal for steaks and curries.", price: 900, image: "/public/nonveg/venison.png" },
  ],
 milkItems :[
  { id: 201, name: "Full Cream Milk", description: "Rich and creamy full cream milk, perfect for tea, coffee, and desserts.", price: 60, image: "/public/milk/full-cream.png" },
  { id: 202, name: "Toned Milk", description: "Healthy toned milk with reduced fat, ideal for daily use.", price: 50, image: "/public/milk/toned-milk.webp" },
  { id: 203, name: "Double Toned Milk", description: "Low-fat double toned milk, great for fitness-conscious people.", price: 45, image: "/public/milk/double-toned.webp" },
  { id: 204, name: "Skimmed Milk", description: "Fat-free skimmed milk, rich in protein, suitable for diets.", price: 40, image: "/public/milk/skimmed-milk.png" },
  { id: 205, name: "Cow Milk", description: "Pure cow milk, fresh and nutritious, perfect for daily drinking.", price: 55, image: "/public/milk/cow-milk.webp" },
  { id: 206, name: "Buffalo Milk", description: "Thick and creamy buffalo milk, rich in calcium and taste.", price: 65, image: "/public/milk/buffalo-milk.webp" },
  { id: 207, name: "Organic Milk", description: "Farm-fresh organic milk without preservatives or additives.", price: 70, image: "/public/milk/organic-milk.png" },
  { id: 208, name: "Flavored Milk - Chocolate", description: "Delicious chocolate flavored milk, loved by kids and adults.", price: 80, image: "/public/milk/chacolate-milk.png" },
  { id: 209, name: "Flavored Milk - Strawberry", description: "Sweet strawberry flavored milk, refreshing and tasty.", price: 80, image: "/public/milk/strawberry-milk.png" },
  { id: 210, name: "Flavored Milk - Vanilla", description: "Smooth vanilla flavored milk, perfect as a refreshing drink.", price: 80, image: "/public/milk/vanilla-milk.png" },
  { id: 211, name: "Milk Powder", description: "Instant milk powder, convenient for tea, coffee, and desserts.", price: 200, image: "/public/milk/milk-powder.png" },
  { id: 212, name: "Condensed Milk", description: "Thick and sweet condensed milk, perfect for sweets and desserts.", price: 120, image: "/public/milk/condensed-milk.png" },
  { id: 213, name: "Evaporated Milk", description: "Creamy evaporated milk, excellent for baking and desserts.", price: 100, image: "/public/milk/evaporated-milk.webp" },
  { id: 214, name: "UHT Milk", description: "Long-life UHT milk, stays fresh without refrigeration.", price: 75, image: "/public/milk/UHT-milk.webp" },
  { id: 215, name: "Lactose-Free Milk", description: "Lactose-free milk, easy to digest and healthy.", price: 90, image: "/public/milk/lactose-milk.png" },
  { id: 216, name: "Buttermilk", description: "Refreshing buttermilk (chaas), great for digestion.", price: 35, image: "/public/milk/buttermilk.png" },
  { id: 217, name: "Curd", description: "Fresh curd (dahi), creamy and healthy, perfect for meals.", price: 60, image: "/public/milk/curd.png" },
  { id: 218, name: "Paneer", description: "Soft paneer (cottage cheese), rich in protein and taste.", price: 300, image: "/public/milk/paneer.png" },
  { id: 219, name: "Cheese", description: "Delicious cheese, great for pizzas, sandwiches, and snacks.", price: 400, image: "/public/milk/cheese-milk.png" },
  { id: 220, name: "Butter", description: "Smooth and creamy butter, perfect for bread and cooking.", price: 200, image: "/public/milk/butter.png" },
  { id: 221, name: "Ghee", description: "Pure desi ghee, rich in flavor and nutrition.", price: 600, image: "/public/milk/ghee.webp" },
  { id: 222, name: "Fresh Cream", description: "Rich fresh cream, perfect for desserts and gravies.", price: 150, image: "/public/milk/cream.webp" }
],
medicineItems : [
  { id: 301, name: "Paracetamol", description: "Used for fever and mild pain relief. Commonly known as Crocin or Dolo-650.", price: 30, image: "/public/medicines/paracetamal.png" },
  { id: 302, name: "Ibuprofen", description: "Anti-inflammatory and pain reliever, good for headaches and muscle pain.", price: 40, image: "/public/medicines/ibuprofen.png" },
  { id: 303, name: "Amoxicillin", description: "Antibiotic used to treat bacterial infections like throat infection, pneumonia.", price: 120, image: "/public/medicines/amoxicillin.png" },
  { id: 304, name: "Cetirizine", description: "Anti-allergic tablet used for runny nose, sneezing, and allergy relief.", price: 25, image: "/public/medicines/cetirizine.png" },
  { id: 305, name: "Vitamin C", description: "Boosts immunity, helps fight infections, and improves skin health.", price: 150, image: "/public/medicines/vitamin-c.png" },
  { id: 306, name: "Multivitamin Tablets", description: "Complete multivitamin supplement for daily health and immunity.", price: 200, image: "/public/medicines/multivitamin.png" },
  { id: 307, name: "ORS Sachets", description: "Oral rehydration solution for dehydration due to diarrhea or heat.", price: 15, image: "/public/medicines/ors.avif" },
  { id: 308, name: "Cough Syrup", description: "Relieves dry and wet cough, soothes throat irritation.", price: 90, image: "/public/medicines/cough-syrup.webp" },
  { id: 309, name: "Azithromycin", description: "Broad-spectrum antibiotic used for bacterial infections.", price: 150, image: "/public/medicines/azithromycin.png" },
  { id: 310, name: "Pain Relief Spray", description: "Instant pain relief spray for muscle pain, sprains, and joint pain.", price: 180, image: "/public/medicines/pain-spray.png" },
  { id: 311, name: "Digene", description: "Antacid tablets or syrup for acidity and indigestion relief.", price: 80, image: "/public/medicines/digene.png" },
  { id: 312, name: "ORS Drink Bottle", description: "Ready-to-drink rehydration solution with electrolytes.", price: 35, image: "/public/medicines/ors-bottle.png" },
  { id: 313, name: "Insulin Injection", description: "Essential for diabetic patients to control blood sugar levels.", price: 500, image: "/public/medicines/insulin.png" },
  { id: 314, name: "Glucometer Strips", description: "Test strips for monitoring blood sugar levels at home.", price: 600, image: "/public/medicines/glucometer-strips.png" },
  { id: 315, name: "Bandages", description: "Sterile bandages for wounds and injuries.", price: 50, image: "/public/medicines/bandage.png" },
  { id: 316, name: "Antiseptic Liquid", description: "Used to clean wounds and prevent infections (Dettol/Savlon).", price: 120, image: "/public/medicines/antiseptic.png" },
  { id: 317, name: "Vitamin D3", description: "Supports bone health and immunity, essential for calcium absorption.", price: 180, image: "/public/medicines/vitamin-d3.png" },
  { id: 318, name: "Calcium Tablets", description: "Boosts bone strength, prevents osteoporosis.", price: 200, image: "/public/medicines/calcium.png" },
  { id: 319, name: "Iron Supplements", description: "Used to treat iron deficiency and anemia.", price: 170, image: "/public/medicines/iron.png" },
  { id: 320, name: "Electrolyte Powder", description: "Energy and hydration drink powder, replenishes lost salts.", price: 40, image: "/public/medicines/electrolyte.png" },
  { id: 321, name: "Hand Sanitizer", description: "Kills 99.9% of germs, essential for hygiene.", price: 70, image: "/public/medicines/sanitizer.png" },
  { id: 322, name: "Thermometer", description: "Digital thermometer for measuring body temperature.", price: 250, image: "/public/medicines/thermometer.png" }
],
 SweetsItems :[
  { id: 401, name: "Gulab Jamun", description: "Soft and juicy gulab jamun soaked in sugar syrup.", price: 5, image: "/public/sweets/gulab-jamun.png" },
  { id: 402, name: "Rasgulla", description: "Spongy rasgulla made with fresh chhena and sugar syrup.", price: 140, image: "/public/sweets/rasgulla.png" },
  { id: 403, name: "Kaju Katli", description: "Delicious kaju katli made with cashews and sugar.", price: 500, image: "/public/sweets/kaju-katli.png" },
  { id: 404, name: "Motichoor Laddu", description: "Soft and tasty motichoor laddu, perfect for festivals.", price: 200, image: "/public/sweets/motichoor-laddu.png" },
  { id: 405, name: "Besan Laddu", description: "Traditional besan laddu made with gram flour and ghee.", price: 180, image: "/public/sweets/besan-laddu.png" },
  { id: 406, name: "Soan Papdi", description: "Flaky and sweet soan papdi, a favorite Indian sweet.", price: 160, image: "/public/sweets/soan-papdi.png" },
  { id: 407, name: "Jalebi", description: "Crispy and juicy jalebi fried in ghee and dipped in syrup.", price: 120, image: "/public/sweets/jalebi.png" },
  { id: 408, name: "Barfi", description: "Delicious milk barfi made with khoya and sugar.", price: 250, image: "/public/sweets/barfi.png" },
  { id: 409, name: "Peda", description: "Soft and sweet peda made from khoya and sugar.", price: 220, image: "/public/sweets/peda.png" },
  { id: 410, name: "Sandesh", description: "Bengali special sandesh made from fresh paneer.", price: 270, image: "/public/sweets/sandesh.png" },
  { id: 411, name: "Cham Cham", description: "Colorful Bengali cham cham sweet, soft and delicious.", price: 280, image: "/public/sweets/cham-cham.png" },
  { id: 412, name: "Rabri", description: "Thick and creamy rabri topped with dry fruits.", price: 300, image: "/public/sweets/rabri.png" },
  { id: 413, name: "Halwa", description: "Rich and tasty suji halwa with ghee and nuts.", price: 150, image: "/public/sweets/halwa.png" },
  { id: 414, name: "Malpua", description: "Traditional malpua pancakes soaked in sugar syrup.", price: 200, image: "/public/sweets/malpua.png" },
  { id: 415, name: "Balushahi", description: "Flaky and sugary balushahi, crispy outside, soft inside.", price: 170, image: "/public/sweets/balushahi.png" },
  { id: 416, name: "Mysore Pak", description: "Famous South Indian sweet made with gram flour and ghee.", price: 260, image: "/public/sweets/mysore-pak.png" },
  { id: 417, name: "Chikki", description: "Crunchy peanut chikki made with jaggery.", price: 130, image: "/public/sweets/chikki.png" },
  { id: 418, name: "Kalakand", description: "Delicious milk-based kalakand topped with pistachios.", price: 280, image: "/public/sweets/kalakand.png" },
  { id: 419, name: "Kheer", description: "Creamy rice kheer cooked with milk and dry fruits.", price: 200, image: "/public/sweets/kheer.png" },
  { id: 420, name: "Modak", description: "Traditional sweet modak filled with jaggery and coconut.", price: 300, image: "/public/sweets/modak.png" }
]
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


const loadFromLocalStorage = () => {
  const data = localStorage.getItem("userState");
  return data
    ? JSON.parse(data)
    : { allUsers: [], authenticated: false, currentUser: null };
};

// Save data to localStorage
const saveToLocalStorage = (state) => {
  localStorage.setItem("userState", JSON.stringify(state));
};

const initialState = loadFromLocalStorage();

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.allUsers.push(action.payload); // add new user
      saveToLocalStorage(state);
    },
    loginUser: (state, action) => {
      const { email, password } = action.payload;
      const user = state.allUsers.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        state.authenticated = true;
        state.currentUser = user;
      }
      saveToLocalStorage(state);
    },
    logoutUser: (state) => {
      state.authenticated = false;
      state.currentUser = null;
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
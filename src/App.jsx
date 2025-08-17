import ProductCard from "./Components/ProductCard";

function App() {
  const products = [
    {
      id: 1,
      name: "Tuscan Garden Pizza",
      price: "₱450 (Family Size)",
      image: "/image1.jpg",
      description: "A rustic Italian favorite topped with vine-ripened tomatoes, fresh basil leaves, earthy mushrooms, garlic, and a generous layer of melted mozzarella on a golden hand-tossed crust.",
    },
    {
      id: 2,
      name: "Classic Pepperoni Feast",
      price: "₱499 (Family Size)",
      image: "/image2.jpg",
      description: "A timeless favorite topped with layers of smoky pepperoni slices, melted mozzarella, tangy tomato sauce, and a sprinkle of fresh herbs. Served on our golden, hand-tossed crust for the perfect bite every time.",
    },
    {
      id: 3,
      name: "Supreme Overload Pizza",
      price: "₱599 (Family Size)",
      image: "/image3.jpg",
      description: "A feast for pizza lovers! Generously topped with pepperoni, ham, mushrooms, black olives, bell peppers, and juicy tomatoes on a bed of rich tomato sauce and gooey mozzarella. Every slice is loaded with flavor",
    },
    {
      id: 4,
      name: "Rustic Pepperoni Supreme",
      price: "₱529 (Family Size)",
      image: "/image4.jpg",
      description: "A wood-fired masterpiece! Loaded with premium pepperoni slices, creamy mozzarella cheese, and fresh basil herbs on our signature hand-stretched dough.",
    },
    {
      id: 5,
      name: "Sausage Festival Pizza",
      price: "₱649 (Family Size)",
      image: "/image5.jpg",
      description: "The ultimate meat lover's dream! Featuring premium sliced sausages, pepperoni, and savory ham perfectly arranged over melted mozzarella cheese and tangy tomato sauce.",
    },
    {
      id: 6,
      name: "Overload Veggie Pizza",
      price: " ₱479 (Family Size)",
      image: "/image6.jpg",
      description: "Topped with vibrant cherry tomatoes, crisp broccoli florets, sweet bell peppers, and aromatic fresh basil on a bed of melted mozzarella and rich tomato sauce. ",
    },
  ];

  return (
    <div className="center-ui">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default App;

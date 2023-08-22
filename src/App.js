import Delivery from "./components/Delivery";
import Features from "./components/Features";
import TopNav from "./components/TopNav";
import TopPicks from "./components/TopPicks";
import Meal from "./components/Meal";
import Categories from "./components/Categories";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Features />
      <Delivery />
      <TopPicks />
      <Meal />
      <Categories />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;

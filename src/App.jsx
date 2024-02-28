import { Footer, Header } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

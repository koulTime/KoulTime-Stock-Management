import "./App.css";
import SideBar from "./Components/SideBar";
import Container from "./Components/Container";
import Help from "./Components/Help";
import Profile from "./Components/Profile";
import ComingSoon from "./Components/ComingSoon";
import Chat from "./Components/Chat";
import Modal from "./Components/Modal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MeatFish from "./Components/Categories/MeatFish";
import FruitsVegetable from "./Components/Categories/FruitsVegetable";
import FreshSeafood from "./Components/Categories/FreshSeafood";
import CookingEssentials from "./Components/Categories/CookingEssentials";
import Drinks from "./Components/Categories/Drinks";
import SaucesPickles from "./Components/Categories/SaucesPickles";
import Desert from "./Components/Categories/Desert";
import CleaningTools from "./Components/Categories/CleaningTools";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <SideBar />
          {/* <Container /> */}
          <Routes>
            <Route path="/" element={<Container />} />
            <Route path="/meat_fish" element={<MeatFish />} />
            <Route path="/fruits_vegetable" element={<FruitsVegetable />} />
            <Route path="/fresh_seafood" element={<FreshSeafood />} />
            <Route path="/cooking_essentials" element={<CookingEssentials />} />
            <Route path="/drinks" element={<Drinks />} />
            <Route path="/sauces_pickles" element={<SaucesPickles />} />
            <Route path="/desert" element={<Desert />} />
            <Route path="/cleaning_tools" element={<CleaningTools />} />

            <Route path="/help" element={<Help />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/comingsoon" element={<ComingSoon />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/modal" element={<Modal />} />
            <Route path="/update/:id" element={<Modal />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

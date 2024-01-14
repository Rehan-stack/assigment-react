import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Contact from "./pages/contactus";

function App() {
  return (
    <BrowserRouter>
    <Routes>

<Route index element={< Home/>}/>
<Route path="/home" element={<Home/>}/>
<Route path="/contact" element={<Contact/>}/>


    </Routes >
    
    </BrowserRouter>
  );
}

export default App;

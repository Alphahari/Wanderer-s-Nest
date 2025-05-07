import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import RegisterLocal from "./pages/RegisterLocal"
import ContactForm from "./pages/ContactForm"
import Location from "./pages/Location"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import About from "./pages/About"
import Logout from "./pages/Logout"
import Error from "./pages/Error"
import ManageReviews from "./pages/ManageReviews"
import RegisterTourist from "./pages/registerTourist"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/registerAsLocal" element={<RegisterLocal />} />
        <Route path="/registerAsTourist" element={<RegisterTourist />} />
        <Route path="/location/:locationName" element={<Location />} />
        <Route path="/Admin/Manage" element={<ManageReviews />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
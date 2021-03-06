import React from "react";
import {Routes, Route} from "react-router-dom"


import Navbar from "./js/components/Navbar";
import Footer from "./js/components/Footer";
import Home from "./js/pages/Home"
import About from "./js/pages/About"
import Contacts from "./js/pages/Contacts"

function App()
{
    return (
        <>
            <Navbar />
            <main className="main">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
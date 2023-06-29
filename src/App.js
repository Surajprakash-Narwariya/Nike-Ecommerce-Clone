import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Test from './Components/Test';
import Footer from './Components/Footer';

// Routing Take place in App.js

function App() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

export default App;

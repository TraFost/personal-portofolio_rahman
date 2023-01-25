import { Link } from "react-router-dom";

function Navbar() {

    return (
        <header>
        <nav className="flex justify-around">
            <ul className="flex gap-6 pt-3">
                <li><Link to="/" className="text-teal hover:text-black hover:border-b border-teal font-bold">Home</Link></li>
                <li><Link to="/portofolio" className="text-teal hover:text-black hover:border-b border-teal font-bold">Portfolio</Link></li>
                <li><Link to="/contact" className="text-teal hover:text-black hover:border-b border-teal font-bold">Contact</Link></li>
            </ul>
        </nav>
        </header>
    )
}

export default Navbar;
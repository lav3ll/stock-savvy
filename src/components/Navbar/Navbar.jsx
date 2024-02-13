export default function Navbar() {
    return (
        <nav className="my-nav bg-indigo-900 text-white flex justify-between items-center gap-8 p-4">
            <a href="/" className="my-site text-3xl">Stock Savvy</a>
            <ul className="flex gap-8">
                <li><a href="/">Home</a></li>
                <li>Contact Us</li>
            </ul>
        </nav>
    )
}
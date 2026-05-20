const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-10 py-6 bg-[#020617]/90 backdrop-blur-md fixed w-full z-50">
            <h1 className="text-3x1 font-bold tracking-widest">
                BEPETA <span className="text-blue-500">LOGICX</span>
            </h1>

            <div className="flex gap-8 text-lg">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Technology</a>
                <a href="#">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
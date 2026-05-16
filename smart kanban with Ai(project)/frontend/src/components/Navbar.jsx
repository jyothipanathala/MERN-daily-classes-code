// src/components/Navbar.jsx

const Navbar = () => {
  return (
    <nav className="w-full bg-[#111827] border-b border-purple-500/10 px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-semibold text-purple-300 tracking-wide">
        Smart Kanban AI
      </h1>

      <div className="text-sm text-gray-400">
        AI Productivity Board
      </div>
    </nav>
  );
};

export default Navbar;
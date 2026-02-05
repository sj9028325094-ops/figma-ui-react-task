const Sidebar = () => {
  return (
    <aside className="w-64 bg-[#111827] text-white p-6 hidden md:block">
      <h1 className="text-xl font-bold mb-8">MyApp</h1>

      <ul className="space-y-4 text-sm">
        <li className="text-[#9CA3AF] hover:text-white cursor-pointer">
          Dashboard
        </li>
        <li className="text-[#9CA3AF] hover:text-white cursor-pointer">
          Reports
        </li>
        <li className="text-[#9CA3AF] hover:text-white cursor-pointer">
          Settings
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div className="flex h-screen bg-[#F5F7FA]">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;

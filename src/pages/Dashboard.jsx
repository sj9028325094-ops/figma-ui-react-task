import Card from "../components/Card";

const Dashboard = () => {
  return (
    <main className="p-6 flex-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Total Users" value="1,250" />
        <Card title="Revenue" value="₹50,000" />
        <Card title="Orders" value="320" />
      </div>
    </main>
  );
};

export default Dashboard;

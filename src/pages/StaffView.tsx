
import { Card } from "@/components/ui/card";

const StaffView = () => {
  return (
    <div className="max-w-7xl mx-auto pt-16">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-cafe-800 mb-2">Staff Portal</h1>
        <p className="text-gray-600">Manage orders and queue</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-cafe-800 mb-4">Active Orders</h2>
          <div className="space-y-4">
            <p className="text-gray-600">No active orders</p>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold text-cafe-800 mb-4">Queue Status</h2>
          <div className="space-y-4">
            <p className="text-gray-600">Queue is empty</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default StaffView;

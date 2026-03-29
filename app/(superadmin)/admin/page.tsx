"use client";

import { useQuery } from "@tanstack/react-query";
import { getAdminStats } from "@/modules/superadmin/api";
import Card from "@/components/ui/card";

export default function AdminDashboard() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["adminStats"],
    queryFn: getAdminStats,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading stats</p>;

  const stats = data?.data;

  return (
    <div className="grid md:grid-cols-4 gap-6">

      <Card>
        <h3>Total Tenants</h3>
        <p className="text-2xl">{stats.tenants}</p>
      </Card>

      <Card>
        <h3>Total Revenue</h3>
        <p className="text-2xl">₹{stats.revenue}</p>
      </Card>

      <Card>
        <h3>Active Users</h3>
        <p className="text-2xl">{stats.users}</p>
      </Card>

      <Card>
        <h3>Messages Sent</h3>
        <p className="text-2xl">{stats.messages}</p>
      </Card>

    </div>
  );
}
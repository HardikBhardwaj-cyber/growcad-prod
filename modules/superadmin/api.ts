import { api } from "@/lib/api";

// ✅ TYPES
export type Tenant = {
  id: string;
  name: string;
  email: string;
  status: "active" | "inactive";
};

export type AdminStats = {
  total_tenants: number;
  total_students: number;
  revenue: number;
};

export type UpdateTenantInput = {
  name?: string;
  email?: string;
  status?: "active" | "inactive";
};

// ✅ API FUNCTIONS

// Get all tenants
export const getTenants = async () => {
  const res = await api.get<Tenant[]>("/admin/tenants");
  return res.data;
};

// Update tenant
export const updateTenant = async (id: string, data: UpdateTenantInput) => {
  const res = await api.put<Tenant>(`/admin/tenant/${id}`, data);
  return res.data;
};

// Admin dashboard stats
export const getAdminStats = async () => {
  const res = await api.get<AdminStats>("/admin/stats");
  return res.data;
};
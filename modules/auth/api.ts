import { api } from "@/lib/api";

export const sendOTP = (phone: string) =>
  api.post("/auth/send-otp", { phone });

export const verifyOTP = (phone: string, otp: string) =>
  api.post("/auth/verify-otp", { phone, otp });

export const googleLogin = (token: string) =>
  api.post("/auth/google", { token });
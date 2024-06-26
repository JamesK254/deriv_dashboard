"use client";
import LoginScreen from "@/components/login";
import Dashboard from "@/components/main_dash";

export default function Home() {
  const isLoggedIn =
    typeof localStorage !== "undefined" ? localStorage.getItem("isLogged") : null;
  return isLoggedIn === "true" ? <Dashboard /> : <LoginScreen />;
}

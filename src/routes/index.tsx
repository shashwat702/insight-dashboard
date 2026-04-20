import { createFileRoute } from "@tanstack/react-router";
import { DashboardLanding } from "@/components/DashboardLanding";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <DashboardLanding />;
}

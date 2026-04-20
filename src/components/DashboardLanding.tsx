import {
  Building2,
  Users,
  Activity,
  CheckCircle2,
  MapPin,
  Briefcase,
  DollarSign,
  Globe,
  Linkedin,
  Twitter,
  Bell,
  TrendingUp,
  TrendingDown,
  Sparkles,
} from "lucide-react";

function ProgressRow({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-xs">
        <span className="text-foreground/70">{label}</span>
        <span className="font-medium text-foreground">{value}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-foreground/5">
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${value}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

export function DashboardLanding() {
  return (
    <main className="min-h-screen bg-[var(--surface)] px-4 py-12 sm:px-6 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        {/* TOP LEFT — heading */}
        <section className="flex flex-col justify-center lg:pr-8">
          <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--pastel-purple)] px-3 py-1 text-xs font-medium text-[var(--pastel-purple-foreground)]">
            <Sparkles className="h-3.5 w-3.5" />
            Customer Reports
          </span>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            We automatically generate reports for each of your customers
          </h1>
          <p className="mt-5 max-w-md text-base text-muted-foreground">
            Get a clear, real-time view of every account — no spreadsheets, no manual work.
          </p>
        </section>

        {/* TOP RIGHT — two cards side by side */}
        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Company info card */}
          <div
            className="rounded-2xl bg-card p-5"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--pastel-blue)] text-[var(--pastel-blue-foreground)]">
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Intercom</p>
                <p className="text-xs text-muted-foreground">Joined Mar 12, 2024</p>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4" /> Total seats
                </span>
                <span className="font-semibold text-foreground">240</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4" /> Active seats
                </span>
                <span className="font-semibold text-foreground">186</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-muted-foreground">
                  <Activity className="h-4 w-4" /> Active 7 days
                </span>
                <span className="font-semibold text-foreground">142</span>
              </div>
            </div>
          </div>

          {/* Activation card */}
          <div
            className="rounded-2xl bg-[var(--pastel-purple)] p-5"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <p className="text-xs font-medium uppercase tracking-wide text-[var(--pastel-purple-foreground)]/70">
              Company activation
            </p>
            <p className="mt-1 text-3xl font-semibold text-[var(--pastel-purple-foreground)]">
              40%
            </p>
            <div className="mt-5 space-y-3">
              <ProgressRow label="Signed up" value={100} color="oklch(0.5 0.18 300)" />
              <ProgressRow label="Setup" value={80} color="oklch(0.5 0.18 300)" />
              <ProgressRow label="Aha moment" value={60} color="oklch(0.5 0.18 300)" />
              <ProgressRow label="Activated" value={40} color="oklch(0.5 0.18 300)" />
              <ProgressRow label="Active" value={20} color="oklch(0.5 0.18 300)" />
            </div>
          </div>
        </section>

        {/* BOTTOM LEFT — milestones */}
        <section className="flex flex-col">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Celebrate milestones
          </h2>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            Real-time alerts and weekly digests so your team never misses a key signup or expansion.
          </p>

          <div
            className="mt-6 rounded-2xl bg-card p-5"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--pastel-purple)] text-[var(--pastel-purple-foreground)]">
                <Bell className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">
                  New signup · <span className="text-muted-foreground">Sarah Chen</span>
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">2 minutes ago</p>

                <div className="mt-3 rounded-xl bg-[var(--surface)] p-3 text-xs">
                  <p className="font-semibold text-foreground">Linear · San Francisco, CA</p>
                  <div className="mt-2 grid grid-cols-2 gap-y-1.5 text-muted-foreground">
                    <span>Role</span>
                    <span className="text-right text-foreground">Head of Product</span>
                    <span>Funding</span>
                    <span className="text-right text-foreground">$130M Series C</span>
                    <span>Employees</span>
                    <span className="text-right text-foreground">120</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM RIGHT — yellow + green stacked */}
        <section className="flex flex-col gap-6">
          {/* Yellow — enrichment */}
          <div
            className="rounded-2xl bg-[var(--pastel-yellow)] p-5"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <h3 className="text-lg font-semibold text-[var(--pastel-yellow-foreground)]">
              Automatic enrichment
            </h3>
            <p className="mt-1 text-sm text-[var(--pastel-yellow-foreground)]/70">
              Every account is enriched with the data you need to act.
            </p>

            <div className="mt-4 rounded-xl bg-card p-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--pastel-yellow)] text-[var(--pastel-yellow-foreground)]">
                  <Building2 className="h-4 w-4" />
                </div>
                <p className="text-sm font-semibold text-foreground">Notion Labs Inc.</p>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-y-2 text-xs">
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <Globe className="h-3.5 w-3.5" /> notion.so
                </span>
                <span className="flex items-center justify-end gap-1.5 text-foreground">
                  <Users className="h-3.5 w-3.5" /> 600+ employees
                </span>
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <DollarSign className="h-3.5 w-3.5" /> $343M raised
                </span>
                <span className="flex items-center justify-end gap-1.5 text-foreground">
                  <MapPin className="h-3.5 w-3.5" /> San Francisco
                </span>
              </div>
              <div className="mt-3 flex items-center gap-2 border-t border-foreground/5 pt-3">
                <Linkedin className="h-3.5 w-3.5 text-muted-foreground" />
                <Twitter className="h-3.5 w-3.5 text-muted-foreground" />
                <Briefcase className="h-3.5 w-3.5 text-muted-foreground" />
              </div>
            </div>
          </div>

          {/* Green — CRM */}
          <div
            className="rounded-2xl bg-[var(--pastel-green)] p-5"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <h3 className="text-lg font-semibold text-[var(--pastel-green-foreground)]">
              Integrated with your CRM
            </h3>
            <p className="mt-1 text-sm text-[var(--pastel-green-foreground)]/70">
              Sync enriched usage data straight into Salesforce, HubSpot, or Attio.
            </p>

            <div className="mt-4 overflow-hidden rounded-xl bg-card">
              <div className="grid grid-cols-2 border-b border-foreground/5 px-4 py-2 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                <span>Company</span>
                <span className="text-right">Active seats</span>
              </div>
              {[
                { name: "Figma", change: 12, up: true },
                { name: "Vercel", change: 8, up: true },
                { name: "Loom", change: 4, up: false },
                { name: "Stripe", change: 21, up: true },
              ].map((row) => (
                <div
                  key={row.name}
                  className="grid grid-cols-2 items-center px-4 py-2.5 text-sm odd:bg-[var(--surface)]/50"
                >
                  <span className="font-medium text-foreground">{row.name}</span>
                  <span
                    className={`flex items-center justify-end gap-1 text-xs font-semibold ${
                      row.up ? "text-[var(--pastel-green-foreground)]" : "text-destructive"
                    }`}
                  >
                    {row.up ? (
                      <TrendingUp className="h-3.5 w-3.5" />
                    ) : (
                      <TrendingDown className="h-3.5 w-3.5" />
                    )}
                    {row.up ? "+" : "-"}
                    {row.change}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
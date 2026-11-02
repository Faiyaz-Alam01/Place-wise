const navItems = [
  { label: "Overview", href: "/dashboard" },
  { label: "Opportunities", href: "/dashboard/opportunities" },
  { label: "Resources", href: "/dashboard/resources" },
  { label: "Roadmap", href: "/dashboard/roadmap" },
  { label: "Profile", href: "/dashboard/profile" },
];

export default function AppSidebar() {
  return (
    <aside className="w-72 shrink-0 border-r border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
          PlaceWise
        </p>
        <h2 className="mt-2 text-2xl font-bold text-slate-900">Dashboard</h2>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}

import { Routes, Route, NavLink } from "react-router-dom";
import { motion } from "motion/react";
import ventasCsv from "../tablas/ventas.csv?raw";
import logoImg from "../assets/images/logos/WhatsApp Image 2026-03-27 at 8.50.51 PM.jpeg";
import tiendaImg from "../assets/images/tienda/WhatsApp Image 2026-04-12 at 6.29.19 PM.jpeg";

const rows = parseCsv(ventasCsv);
const sellers = ["Todos", ...new Set(rows.map((row) => row.vendedor))];

function parseCsv(raw) {
  const [headerLine, ...lines] = raw.trim().split(/\r?\n/);
  const headers = headerLine.split(",");

  return lines.map((line) => {
    const values = splitCsvLine(line);
    const row = Object.fromEntries(headers.map((header, i) => [header, values[i] ?? ""]));

    return {
      folio: row.Folio,
      fecha: row.Fecha,
      vendedor: row.Vendedor,
      producto: row.Producto,
      cantidad: Number(row.Cantidad || 0),
      precio: Number(row["Precio Unitario (MXN)"] || 0),
      descuento: Number(row["Descuento %"] || 0),
      total: Number(row["Total Venta (MXN)"] || 0),
      pago: row["Metodo de Pago"],
      notas: row.Notas,
    };
  });
}

function splitCsvLine(line) {
  const result = [];
  let current = "";
  let quoted = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];

    if (char === '"') {
      quoted = !quoted;
      continue;
    }

    if (char === "," && !quoted) {
      result.push(current);
      current = "";
      continue;
    }

    current += char;
  }

  result.push(current);
  return result;
}

function money(value) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(value);
}

function Dashboard() {
  const activeSeller = "Todos";
  const sellerTotals = sellers.slice(1).map((seller) => {
    const sellerRows = rows.filter((row) => row.vendedor === seller);
    return {
      seller,
      total: sellerRows.reduce((sum, row) => sum + row.total, 0),
      sales: sellerRows.length,
    };
  });

  const totalSales = rows.reduce((sum, row) => sum + row.total, 0);
  const totalUnits = rows.reduce((sum, row) => sum + row.cantidad, 0);
  const avgTicket = rows.length ? totalSales / rows.length : 0;
  const byPayment = rows.reduce((acc, row) => {
    acc[row.pago] = (acc[row.pago] || 0) + row.total;
    return acc;
  }, {});

  const topRows = [...rows].sort((a, b) => b.total - a.total).slice(0, 8);

  return (
    <div className="min-h-screen bg-hero-wash">
      <header className="sticky top-0 z-20 border-b border-line bg-[rgba(7,7,9,0.86)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <img
              src={logoImg}
              alt="Dr. Smoke"
              className="h-11 w-11 rounded-full border border-[rgba(201,168,76,0.45)] object-cover shadow-gold"
            />
            <div>
              <p className="font-display text-2xl italic leading-none text-cream">
                Dr. <span className="text-gold">Smoke</span>
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.35em] text-mist">
                panel de ventas
              </p>
            </div>
          </div>

          <nav className="flex items-center gap-3 text-sm text-mist">
            <NavLink className="rounded-full border border-line px-4 py-2 text-cream" to="/">
              Ventas
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-16 pt-10">
        <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-[28px] border border-line bg-[linear-gradient(180deg,rgba(201,168,76,0.08),rgba(18,18,24,0.82))] p-8 shadow-glow"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-gold">Doctor Smoke 2026</p>
            <h1 className="mt-5 max-w-2xl font-display text-5xl font-medium leading-[0.95] text-cream md:text-6xl">
              Réplica en React del panel de <span className="italic text-gold">ventas</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-mist">
              Tomé la referencia de tu archivo de ventas y la convertí en una pantalla React con Vite,
              Tailwind y datos reales desde el CSV que ya tienes en esta carpeta.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <KpiCard label="Ventas cargadas" value={rows.length} accent="text-gold" />
              <KpiCard label="Unidades movidas" value={totalUnits} accent="text-emerald" />
              <KpiCard label="Ticket promedio" value={money(avgTicket)} accent="text-azure" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="overflow-hidden rounded-[28px] border border-line bg-ink-card shadow-glow"
          >
            <img src={tiendaImg} alt="Foto de ventas Dr. Smoke" className="h-full min-h-[320px] w-full object-cover" />
          </motion.div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <StatPanel title="Total vendido" value={money(totalSales)} meta={`${rows.length} operaciones`} />
          <StatPanel title="Efectivo" value={money(byPayment.Efectivo || 0)} meta="flujo principal" />
          <StatPanel title="Tarjeta" value={money(byPayment.Tarjeta || 0)} meta="pagos con terminal" />
          <StatPanel
            title="Transferencia"
            value={money(byPayment.Transferencia || 0)}
            meta="SPEI y depósitos"
          />
        </section>

        <section className="mt-8 grid gap-8 xl:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[24px] border border-line bg-ink-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-mist">Vendedores</p>
                <h2 className="mt-2 font-display text-3xl text-cream">Ranking actual</h2>
              </div>
              <span className="rounded-full border border-[rgba(201,168,76,0.24)] px-4 py-2 text-xs text-gold">
                {activeSeller}
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {sellerTotals
                .sort((a, b) => b.total - a.total)
                .map((item, index) => (
                  <div
                    key={item.seller}
                    className="rounded-2xl border border-line bg-[rgba(255,255,255,0.02)] p-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-mist">#{index + 1}</p>
                        <h3 className="mt-1 font-display text-3xl text-cream">{item.seller}</h3>
                        <p className="mt-1 text-sm text-mist">{item.sales} ventas registradas</p>
                      </div>
                      <p className="font-mono text-lg text-gold">{money(item.total)}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-line bg-ink-card p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-mist">Tabla</p>
                <h2 className="mt-2 font-display text-3xl text-cream">Ventas más altas</h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {sellers.map((seller) => (
                  <span
                    key={seller}
                    className="rounded-full border border-line px-3 py-1 text-xs uppercase tracking-[0.22em] text-mist"
                  >
                    {seller}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-line">
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-[rgba(255,255,255,0.03)] text-[11px] uppercase tracking-[0.24em] text-mist">
                    <tr>
                      <th className="px-4 py-4">Folio</th>
                      <th className="px-4 py-4">Fecha</th>
                      <th className="px-4 py-4">Vendedor</th>
                      <th className="px-4 py-4">Producto</th>
                      <th className="px-4 py-4 text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topRows.map((row, index) => (
                      <tr
                        key={row.folio}
                        className={index % 2 === 0 ? "bg-[rgba(255,255,255,0.015)]" : "bg-transparent"}
                      >
                        <td className="px-4 py-4 font-mono text-gold">{row.folio}</td>
                        <td className="px-4 py-4 text-mist">{row.fecha}</td>
                        <td className="px-4 py-4 text-cream">{row.vendedor}</td>
                        <td className="px-4 py-4 text-mist">{row.producto}</td>
                        <td className="px-4 py-4 text-right font-mono text-cream">{money(row.total)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function KpiCard({ label, value, accent }) {
  return (
    <div className="rounded-2xl border border-line bg-[rgba(255,255,255,0.03)] p-4">
      <p className="text-xs uppercase tracking-[0.24em] text-mist">{label}</p>
      <p className={`mt-3 font-mono text-2xl ${accent}`}>{value}</p>
    </div>
  );
}

function StatPanel({ title, value, meta }) {
  return (
    <div className="rounded-[22px] border border-line bg-ink-card p-5">
      <p className="text-xs uppercase tracking-[0.24em] text-mist">{title}</p>
      <p className="mt-4 font-mono text-3xl text-cream">{value}</p>
      <p className="mt-2 text-sm text-mist">{meta}</p>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

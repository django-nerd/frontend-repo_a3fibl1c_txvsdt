import { Wrench, Ruler, HardHat, Trees } from 'lucide-react'

const services = [
  {
    icon: HardHat,
    title: 'General Contracting',
    desc: 'End‑to‑end project management with licensed crews, transparent budgets, and on‑time delivery.'
  },
  {
    icon: Ruler,
    title: 'Design & Build',
    desc: 'Unified design and construction for faster timelines and a single point of accountability.'
  },
  {
    icon: Wrench,
    title: 'Renovations',
    desc: 'Kitchen, bath, and full‑home remodels that marry craftsmanship with modern materials.'
  },
  {
    icon: Trees,
    title: 'Outdoor Structures',
    desc: 'Decks, pergolas, and play spaces that bring the outside in with durable finishes.'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-orange-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What We Do</h2>
          <p className="mt-2 text-gray-600">Comprehensive services tailored to your goals, budget, and timeline.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center rounded-lg bg-orange-100 text-orange-700 p-3">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

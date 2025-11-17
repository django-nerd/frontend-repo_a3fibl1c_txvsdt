import { useEffect, useState } from 'react'
import { Image as ImageIcon, MapPin, Home, Building2 } from 'lucide-react'

const mockProjects = [
  {
    id: 1,
    title: 'Modern Family Home',
    type: 'Residential',
    icon: Home,
    location: 'Austin, TX',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Riverside Apartments',
    type: 'Multi‑unit',
    icon: Building2,
    location: 'Denver, CO',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Creative Workspace',
    type: 'Commercial',
    icon: Building2,
    location: 'Seattle, WA',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1400&auto=format&fit=crop',
  },
]

export default function Projects() {
  const [projects] = useState(mockProjects)

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Featured Projects</h2>
            <p className="text-gray-600 mt-2">A selection of recent builds across residential and commercial sectors.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 shadow">Request a full portfolio</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => {
            const Icon = p.icon || ImageIcon
            return (
              <article key={p.id} className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 text-xs text-orange-600">
                    <Icon className="h-4 w-4" />
                    {p.type}
                  </div>
                  <h3 className="mt-1 text-lg font-semibold text-gray-900">{p.title}</h3>
                  <div className="mt-1 flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    {p.location}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

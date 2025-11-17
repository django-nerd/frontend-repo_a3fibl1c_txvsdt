import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] grid place-items-center overflow-hidden bg-gradient-to-b from-orange-50 via-amber-50 to-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/70 px-3 py-1 text-xs text-orange-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
              Award‑winning builds since 2010
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Crafting durable spaces that inspire
            </h1>
            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              We are a full‑service construction studio specializing in modern homes, commercial renovations, and creative outdoor structures.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-orange-500 px-5 py-3 text-white font-semibold shadow hover:bg-orange-600 transition">View Projects</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-gray-800 font-semibold shadow border border-gray-200 hover:bg-gray-50 transition">Get a Quote</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
    </section>
  )
}

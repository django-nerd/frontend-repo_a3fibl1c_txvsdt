import { useState } from 'react'
import { Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      // This would normally post to the backend; here we just simulate success
      await new Promise((r) => setTimeout(r, 800))
      setStatus('Thanks! We will get back to you shortly.')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Let’s build something</h2>
            <p className="mt-2 text-gray-600">Tell us about your project and we’ll prepare a tailored estimate.</p>
            <div className="mt-6 rounded-xl border border-gray-200 bg-orange-50 p-6 text-orange-900">
              <p className="font-medium">Average response time: under 24 hours</p>
              <p className="text-sm mt-1 opacity-80">Serving residential and commercial clients across the West Coast.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-md border-gray-300 focus:border-orange-500 focus:ring-orange-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-md border-gray-300 focus:border-orange-500 focus:ring-orange-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea name="message" rows="4" value={form.message} onChange={handleChange} required className="mt-1 w-full rounded-md border-gray-300 focus:border-orange-500 focus:ring-orange-500" />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 justify-center rounded-md bg-orange-500 px-5 py-3 text-white font-semibold shadow hover:bg-orange-600 transition">
                <Send className="h-4 w-4" />
                Send Message
              </button>
              {status && <p className="text-sm text-gray-600">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

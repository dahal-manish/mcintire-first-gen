import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      <main>
        <section className="bg-white text-blue-2 py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">McIntire First Generation Scholarship</h1>
            <p className="text-xl mb-8 italic">
              "Imagine a world where underrepresented students have equal opportunities and a community that empowers them to become pioneers in their respective fields..."
            </p>
            <div className="flex justify-center space-x-4">
              <Button asChild>
                <Link href="/apply" className="bg-gold text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-gold-dark transition duration-300">Apply Now</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/donate" className="border-2 border-gold text-gold px-6 py-2 rounded-full text-lg font-semibold hover:bg-gold transition duration-300">Donate</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Mission and Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-gray p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Mission</h3>
                <p>Empower underprivileged first-generation students to aim for success in their respective business fields</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Vision</h3>
                <p>To "be a helping hand on the road to greatness" and create a community of first-generation and/or low-income business scholars who excel academically, professionally, and personally, through comprehensive support, mentorship, and financial assistance.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-navy-blue text-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">MFGS in the News</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white text-navy-blue p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">UVA Today Article</h3>
                <p>Coming soon...</p>
              </div>
              <div className="bg-white text-navy-blue p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Sarrah's McIntire Article</h3>
                <a href="https://experience.mcintire.virginia.edu/news/sarrah-abdulali-drawn-to-commerce-community/" className="text-gold hover:underline">Read More</a>
              </div>
              <div className="bg-white text-navy-blue p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Manish's UVA Today</h3>
                <a href="https://news.virginia.edu/content/every-hoo-has-story-taxing-hobby" className="text-gold hover:underline">Read More</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
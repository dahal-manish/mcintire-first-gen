import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { LEADERSHIP } from '@/constants/leadership'
import ExecCard from '@/components/ExecCard'
export default function AboutUs() {
  return (
    <div className="min-h-screen">
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-blue-3 mb-8 text-center">About Us</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-2 mb-4">Our Purpose</h2>
          <p className="text-blue-1 mb-4">
            The McIntire First Generation Scholarship is designed to reduce the cost of attending UVA, but more importantly, to provide a community that equips and emboldens students to succeed in business and make a lasting impact on their communities at UVA and beyond.
          </p>
          <p className="text-blue-1 mb-4">
            Recipients will have access to a robust mentorship program with alumni working in Consulting, Investment Banking, Technology, Private Equity, Venture Capital, and more.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-2 mb-4">Our Story</h2>
          <p className="text-blue-1 mb-4">
            The McIntire First Generation Scholarship was created in 2024 by two first-generation McIntire graduates, <span className="font-bold">Sarrah Abdulali</span> (COMM '24) and <span className="font-bold">Manish Dahal</span> (COMM '24), who imagine a world where underrepresented students have equal opportunities and a community that empowers them to become pioneers in their respective fields.
          </p>
          <p className="text-blue-1 mb-4">
            Initially, the two faced hardships in navigating college and the business field because they lacked the necessary resources. Determined to succeed, the two worked hard in and out of the classroom.
          </p>
          <p className="text-blue-1 mb-4">
            In their final semester, they created UVA's first community dedicated to supporting and empowering First-Generation and/or Limited Income students interested in business – <a href="https://www.instagram.com/1gen_uva/" className="font-bold underline" target="_blank" rel="noopener noreferrer">One Generation Network</a>.
          </p>
          <p className="text-blue-1 mb-4">
            Later, they invited Jack Banbury (COMM '78) and his wife Mary Beth (Edinboro '81), a first-generation graduate, to their team. Inspired by Manish and Sarrah's vision to assist other first-generation students, the two made a generous donation to ignite the program.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-2 mb-4">Our Founders</h2>
          <div className="flex justify-start gap-12">
            {LEADERSHIP.map((leader) => (
              <ExecCard key={leader.id} leader={leader} />
            ))}
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-2 mb-4">Our Vision</h2>
          <p className="text-blue-1 mb-4">
            Our long-term vision is to create a sustainable and impactful program that not only provides financial support but also builds a strong community of first-generation business leaders. We aim to:
          </p>
          <ul className="list-disc list-inside text-blue-1 mb-4">
            <li>Expand our mentorship network to cover a wide range of business fields</li>
            <li>Increase the number of scholarships awarded each year</li>
            <li>Develop additional resources and workshops tailored to first-generation students' needs</li>
            <li>Foster a supportive alumni network of scholarship recipients</li>
            <li>Collaborate with other organizations to create more opportunities for underrepresented students in business</li>
          </ul>
        </section>
      </main>
    </div>
  )
}
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export default function ScholarshipDetails() {
  return (
    <div className="min-h-screen">
       
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-blue-3 mb-8 text-center">Scholarship Details</h1>
        
        <section className="mb-12">
          <Card className="bg-blue-gray shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-blue-3">Award Information</CardTitle>
              <CardDescription className="text-blue-2 hidden">Learn about our scholarship award</CardDescription>
            </CardHeader>
            <CardContent className="text-blue-2">
              <p className="mb-4">
                The McIntire First Generation Scholarship is proud to offer financial support to deserving students. Here are the key details:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>We award at least two or three scholarships annually</li>
                <li>Each scholarship is valued at $1,000</li>
                <li>The scholarship is designed to support first-generation college students at UVA</li>
              </ul>
              <p>
                This financial assistance aims to reduce the cost of attending UVA and empower students to focus on their academic and professional growth.
              </p>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12">
          <Card className="bg-blue-gray shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-blue-3">Eligibility Criteria</CardTitle>
              <CardDescription className="text-blue-2 hidden">Check if you qualify for our scholarship</CardDescription>
            </CardHeader>
            <CardContent className="text-blue-2">
              <p className="mb-4">To be eligible for the McIntire First Generation Scholarship, applicants must meet the following criteria:</p>
              <ul className="list-disc list-inside mb-4">
                <li>Be a first-generation college student (neither parent has completed a four-year college degree)</li>
                <li>Be enrolled or accepted as a full-time undergraduate student at the University of Virginia</li>
                <li>Demonstrate financial need</li>
                <li>Maintain a minimum GPA of 3.0</li>
                <li>Show interest in pursuing a career in business</li>
                <li>Demonstrate leadership potential and community involvement</li>
              </ul>
              <p>
                Meeting these criteria does not guarantee a scholarship, but it does ensure that your application will be considered.
              </p>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12">
          <Card className="bg-blue-gray shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-blue-3">Application Requirements</CardTitle>
              <CardDescription className="text-blue-2 hidden">What you need to apply</CardDescription>
            </CardHeader>
            <CardContent className="text-blue-2">
              <p className="mb-4">To apply for the McIntire First Generation Scholarship, you will need to submit the following:</p>
              <ul className="list-disc list-inside mb-4">
                <li>Completed application form</li>
                <li>Personal statement (500-750 words) describing your background, career goals, and how this scholarship will impact your education</li>
                <li>Two letters of recommendation (one academic and one personal)</li>
                <li>Official high school transcript and college transcript (if applicable)</li>
                <li>Copy of your FAFSA Student Aid Report</li>
                <li>Resume highlighting your extracurricular activities, work experience, and community service</li>
              </ul>
              <p className="mb-4">
                All materials must be submitted by the application deadline. Incomplete applications will not be considered.
              </p>
              <Button asChild>
                <Link href="/apply" className="bg-blue-2 text-blue-0 hover:bg-blue-3">Apply Now</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
      
    </div>
  )
}
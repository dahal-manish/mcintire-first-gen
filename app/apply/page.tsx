import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, ExternalLink } from "lucide-react"

export default function ApplyPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-blue-3 mb-8 text-center">Apply for the Scholarship</h1>
        
        <Card className="bg-blue-gray mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-blue-3">Application Process</CardTitle>
            <CardDescription className="text-blue-2 hidden">Follow these steps to apply for the McIntire First Generation Scholarship</CardDescription>
          </CardHeader>
          <CardContent className="text-blue-2">
            <ol className="list-decimal list-inside space-y-2">
              <li>Visit the UVA Alumni Association <a href="https://uva-alumni-scholarships.awardspring.com/" className="font-medium underline" target="_blank" rel="noopener noreferrer">AwardSpring website</a></li>
              <li>Create an account or log in if you already have one</li>
              <li>Complete the general application form</li>
              <li>Look for the McIntire First Generation Scholarship in the list of available scholarships</li>
              <li>Answer any additional questions specific to our scholarship</li>
              <li>Upload required documents (e.g., transcripts, essays, letters of recommendation)</li>
              <li>Review your application for completeness and accuracy</li>
              <li>Submit your application before the deadline</li>
            </ol>
          </CardContent>
        </Card>
        
        <Card className="bg-blue-gray mb-8 shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-blue-3">Important Dates</CardTitle>
            <CardDescription className="text-blue-2 hidden">Mark your calendar for these crucial deadlines</CardDescription>
          </CardHeader>
          <CardContent className="text-blue-2">
            <div className="flex items-center mb-4">
              <Calendar className="mr-2 h-5 w-5 text-blue-3" />
              <p>Application Opens: January 15, 2025</p>
            </div>
            <div className="flex items-center mb-4">
              <Calendar className="mr-2 h-5 w-5 text-blue-3" />
              <p>Application Deadline: March 31, 2025</p>
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-blue-3" />
              <p>Results Announced: May 15, 2025</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-blue-gray shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-blue-3">Ready to Apply?</CardTitle>
            <CardDescription className="text-blue-2">Click the button below to start your application</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="bg-blue-2 text-blue-0 hover:bg-blue-3">
              <a href="https://uva-alumni-scholarships.awardspring.com/" target="_blank" rel="noopener noreferrer">
                Go to Application Portal
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <p className="mt-4 text-sm text-blue-2 italic">
              Note: You will be redirected to the UVA Alumni Association AwardSpring website to complete your application.
            </p>
          </CardContent>
        </Card>
        
        <div className="mt-8 text-center">
          <p className="text-blue-2 mb-4">Need help with your application?</p>
          <Button asChild variant="outline" className="border-blue-2 text-blue-2">
            <a href="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </main>
    </div>
  )
}
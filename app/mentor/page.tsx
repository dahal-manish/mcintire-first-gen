import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { UserPlus, Briefcase, GraduationCap, Users } from "lucide-react"
import Image from "next/image"

export default function MentorPage() {
  return (
    <div className="min-h-screen py-12">
      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-blue-3 mb-8 text-center">Become a Mentor</h1>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <Card className="bg-blue-gray">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-blue-3">Who We're Looking For</CardTitle>
              <CardDescription className="text-blue-2">Help shape the future of first-generation business leaders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6 text-blue-2">
                <p className="text-lg">
                  We are looking for those in the business realm who are passionate about supporting first-gen students as they jumpstart their careers. If you feel that you can aid in our mission, please fill out the attached form!
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start space-x-3">
                    <Briefcase className="h-6 w-6 text-blue-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-blue-3">Business Experience</h3>
                      <p className="text-sm">Active professionals in various business fields</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <GraduationCap className="h-6 w-6 text-blue-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-blue-3">Educational Impact</h3>
                      <p className="text-sm">Committed to supporting academic growth</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Users className="h-6 w-6 text-blue-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-blue-3">Community Focus</h3>
                      <p className="text-sm">Dedicated to building supportive networks</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <UserPlus className="h-6 w-6 text-blue-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-blue-3">Mentorship Passion</h3>
                      <p className="text-sm">Enthusiastic about guiding future leaders</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-gray">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-blue-3">Sign Up to Be a Mentor</CardTitle>
              <CardDescription className="text-blue-2">
                Interested in coaching students to success? Please fill out this brief form and we will get back to you with directions on how to interact with recipients.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-[600px] bg-white rounded-lg overflow-hidden">
                <iframe
                  src="https://form.jotform.com/242867873649073"
                  className="absolute top-0 left-0 w-full h-full border-0"
                  title="Mentor Signup Form"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="min-h-screen py-12">
      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-blue-3 mb-8 text-center">Contact Us</h1>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="bg-blue-gray">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-blue-3">Contact Information</CardTitle>
              <CardDescription className="text-blue-2">Reach out to our team</CardDescription>
            </CardHeader>
            <CardContent className="text-blue-2">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Manish Dahal</h3>
                  <div className="space-y-2">
                    <Button asChild variant="outline" className="w-full justify-start">
                      <a href="mailto:manish.dahal@virginia.edu" className="text-blue-3 hover:text-blue-2">
                        <Mail className="mr-2 h-4 w-4" />
                        manish.dahal@virginia.edu
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full justify-start">
                      <a href="https://www.linkedin.com/in/manish-dahal/" target="_blank" rel="noopener noreferrer" className="text-blue-3 hover:text-blue-2">
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Sarrah Abdulali</h3>
                  <div className="space-y-2">
                    <Button asChild variant="outline" className="w-full justify-start">
                      <a href="mailto:ssa4ec@virginia.edu" className="text-blue-3 hover:text-blue-2">
                        <Mail className="mr-2 h-4 w-4" />
                        ssa4ec@virginia.edu
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full justify-start">
                      <a href="https://www.linkedin.com/in/sarrah-abdulali/" target="_blank" rel="noopener noreferrer" className="text-blue-3 hover:text-blue-2">
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-gray">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-blue-3">Send us a Message</CardTitle>
              <CardDescription className="text-blue-2">Fill out our contact form</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-[600px] bg-white rounded-lg overflow-hidden">
                <iframe
                  src="https://form.jotform.com/242867399182068"
                  className="absolute top-0 left-0 w-full h-full border-0"
                  title="Contact Form"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
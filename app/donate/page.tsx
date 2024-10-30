import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Gift, DollarSign, CalendarClock, Users } from "lucide-react"

export default function DonatePage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-blue-3 mb-6 text-center">Support Our Scholars</h1>
        <p className="text-blue-2 mb-4 text-center italic">Every contribution, no matter the size, helps us empower first-generation students.</p>

        <Card className="bg-blue-gray mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-blue-3">How to Contribute</CardTitle>
            <CardDescription className="text-blue-2 hidden">Your support makes a difference</CardDescription>
          </CardHeader>
          <CardContent className="text-blue-2">
            <p className="mb-4">We accept all gifts, big and small, especially as we are in the early stages of our program. Your contribution directly impacts the lives of first-generation students at UVA.</p>
            <div className="grid gap-4 md:grid-cols-2">
              <Button asChild className="bg-blue-2 text-blue-0 hover:bg-blue-3">
                <a href="https://www.givecampus.com/campaigns/20633/donations/new?designation=mcintirefirstgenerationscholarship&" target="_blank" rel="noopener noreferrer">
                  <Gift className="mr-2 h-4 w-4" />
                  Support Growing Endowment
                </a>
              </Button>
              <Button asChild className="bg-blue-2 text-blue-0 hover:bg-blue-3">
                <a href="https://www.givecampus.com/campaigns/20633/donations/new?designation=mcintirefirstgenerationscholarshipcurrentuse&" target="_blank" rel="noopener noreferrer">
                  <DollarSign className="mr-2 h-4 w-4" />
                  Support Current Use Fund
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-blue-gray mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-blue-3">Recurring Donations</CardTitle>
            <CardDescription className="text-blue-2 hidden">Set up a lasting impact</CardDescription>
          </CardHeader>
          <CardContent className="text-blue-2">
            <p className="mb-4">To set up a recurring gift, please reach out to our dedicated team:</p>
            <ul className="list-disc list-inside space-y-2 font-bold">
              <li>Elizabeth Joyner: <a href="mailto:hst3bm@virginia.edu" className="text-blue-2 hover:underline font-normal">hst3bm@virginia.edu</a></li>
              <li>Nola Miller: <a href="mailto:nf9f@virginia.edu" className="text-blue-2 hover:underline font-normal">nf9f@virginia.edu</a></li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="bg-blue-gray">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-blue-3">Impact of Your Contribution</CardTitle>
            <CardDescription className="text-blue-2 hidden">Where your funds go and how they help</CardDescription>
          </CardHeader>
          <CardContent className="text-blue-2">
            <p className="mb-4">Your contributions make a significant impact on the lives of our scholars:</p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Users className="mr-2 h-5 w-5 text-blue-3 mt-1 min-w-[1.25rem] min-h-[1.25rem]" />
                <span>Funds go directly to recipients through Student Financial Services.</span>
              </li>
              <li className="flex items-start">
                <CalendarClock className="mr-2 h-5 w-5 text-blue-3 mt-1 min-w-[1.25rem] min-h-[1.25rem]" />
                <span>We work with recipients to provide the scholarship in a way that best suits their needs, even for those with full financial aid from UVA.</span>
              </li>
              <li className="flex items-start">
                <DollarSign className="mr-2 h-5 w-5 text-blue-3 mt-1 min-w-[1.25rem] min-h-[1.25rem]" />
                <span>Recipients are encouraged to use the funds for business-related costs that lessen the burden of being a first-generation student, such as:</span>
              </li>
            </ul>
            <ul className="list-disc list-inside ml-8 mt-2 space-y-1">
              <li>Business attire</li>
              <li>Conference attendance</li>
              <li>Interview preparation materials</li>
            </ul>
          </CardContent>
        </Card>
        
      </main>
    </div>
  )
}
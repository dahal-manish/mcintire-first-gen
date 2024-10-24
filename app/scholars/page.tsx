import { Clock } from "lucide-react"

export default function OurScholarsPage() {
    return (
        <div className="min-h-screen">
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-blue-3 mb-8 text-center">Our Scholars</h1>

                <div className="flex flex-col items-center mt-12">
                    <Clock className="mx-auto h-16 w-16 text-blue-2 mb-4" />
                    <p className="text-xl font-semibold mb-2">Coming Soon!</p>
                    <p className="text-lg">Come back mid-2025 to meet our first official scholars cohort!</p>
                </div>
            </main>
        </div>
    )
}
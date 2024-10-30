import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export default function ArticleCard({ title, description, image, imageAlt, link }: { title: string, description: string, image: string, imageAlt: string, link: string }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block h-full focus:outline-none focus:ring-2 focus:ring-blue-3 focus:ring-offset-2 rounded-lg"
            aria-label={`Read ${title}`}
        >
            <Card className="h-full transition-transform duration-300 ease-in-out hover:border-blue-3 bg-blue-gray hover:bg-blue-0 shadow-md hover:scale-[1.03]">
                <CardContent className="p-0">
                    <div className="aspect-[16/9] relative">
                        <Image
                            src={image}
                            alt={imageAlt}
                            fill
                            className="object-cover rounded-t-lg"
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-3">
                            {title}
                            <ExternalLink className="inline-block ml-2 h-4 w-4" />
                        </h3>
                        <p className="text-blue-2">
                            {description}
                        </p>
                    </div>
                </CardContent>
            </Card>
        </a>
    )
}
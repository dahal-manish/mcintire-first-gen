import Image from "next/image";
import { notFound } from "next/navigation";
import { SCHOLARS } from "@/constants/scholars";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ScholarProfilePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ScholarProfilePage({
  params,
}: ScholarProfilePageProps) {
  const { slug } = await params;
  const scholar = SCHOLARS.find((s) => s.slug === slug);

  if (!scholar) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        {/* Back button */}
        <Link
          href="/scholars"
          className="inline-flex items-center text-blue-2 hover:text-blue-3 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Scholars
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 mb-8">
            {/* Scholar Image */}
            <div className="lg:w-1/3">
              <div className="w-full max-w-sm mx-auto lg:mx-0">
                <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={scholar.image}
                    alt={`${scholar.name} headshot`}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Scholar Info */}
            <div className="lg:w-2/3 space-y-6">
              <div>
                <p className="text-sm text-blue-2 font-medium mb-2">
                  {scholar.education}
                </p>
                <h1 className="text-4xl font-bold text-blue-3 mb-4">
                  {scholar.name}
                </h1>
                <div className="space-y-1 text-gray-600">
                  <p className="text-lg font-medium">{scholar.cohort}</p>
                  <p className="text-lg">{scholar.location}</p>
                </div>
              </div>

              {/* Education Section */}
              <div>
                <h2 className="text-xl font-semibold text-blue-3 mb-2">
                  Education
                </h2>
                <p className="text-gray-700">{scholar.education}</p>
              </div>
            </div>
          </div>

          {/* Biography */}
          <div className="bg-blue-gray p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-3 mb-4">
              Biography
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {scholar.bio}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

// Generate static params for all scholars
export async function generateStaticParams() {
  return SCHOLARS.map((scholar) => ({
    slug: scholar.slug,
  }));
}

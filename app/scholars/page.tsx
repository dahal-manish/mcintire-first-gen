import ScholarCard from "@/components/ScholarCard";
import { SCHOLARS } from "@/constants/scholars";

export default function OurScholarsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-3 mb-4">
            Meet the 2025 Cohort
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our inaugural cohort of scholars represents the next generation of
            business leaders. Each scholar brings unique perspectives and
            experiences that enrich our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {SCHOLARS.map((scholar) => (
            <ScholarCard key={scholar.id} scholar={scholar} />
          ))}
        </div>
      </main>
    </div>
  );
}

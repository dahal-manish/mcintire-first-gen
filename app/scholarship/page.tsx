import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";

export default function ScholarshipDetails() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-blue-3 mb-8 text-center">
          Scholarship Details
        </h1>

        <section className="mb-12">
          <Card className="bg-blue-gray shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-blue-3">
                Award Information
              </CardTitle>
              <CardDescription className="text-blue-2 hidden">
                Learn about our scholarship award
              </CardDescription>
            </CardHeader>
            <CardContent className="text-blue-2">
              <p className="mb-4">
                The McIntire First Generation Scholarship is proud to offer
                financial support to deserving students. Here are the key
                details:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>We award at least two or three scholarships annually</li>
                <li>Each scholarship is valued at $1,000</li>
                <li>
                  The scholarship is designed to support first-generation
                  college students at UVA
                </li>
              </ul>
              <p>
                This financial assistance aims to reduce the cost of attending
                UVA and empower students to focus on their academic and
                professional growth.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <Card className="bg-blue-gray shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-blue-3">
                Eligibility Criteria
              </CardTitle>
              <CardDescription className="text-blue-2 hidden">
                Check if you qualify for our scholarship
              </CardDescription>
            </CardHeader>
            <CardContent className="text-blue-2">
              <p className="mb-4">
                To be eligible for the McIntire First Generation Scholarship,
                applicants must meet the following criteria:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>
                  Be enrolled in or accepted as a full-time undergraduate
                  student at McIntire School of Commerce, University of Virginia
                </li>
                <li>Be a first-generation and/or low-income student</li>
                <li>
                  Demonstrate leadership potential and community involvement
                </li>
              </ul>
              <p>
                Meeting these criteria does not guarantee a scholarship, but it
                does ensure that your application will be considered.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <Card className="bg-blue-gray shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-blue-3">
                Application Requirements
              </CardTitle>
              <CardDescription className="text-blue-2">
                <Link
                  href="https://alumni.virginia.edu/scholarships/alumni-association-awards/mcintire-first-generation-scholarship/#:~:text=The%20McIntire%20First%20Generation%20Scholarship,pioneers%20in%20their%20respective%20fields"
                  className="hover:underline"
                >
                  See AwardSpring for applications requirements under the Apply
                  section
                </Link>
              </CardDescription>
            </CardHeader>
          </Card>
        </section>
      </main>
    </div>
  );
}

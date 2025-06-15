import Link from "next/link";
import { Button } from "@/components/ui/button";
import ArticleCard from "@/components/ArticleCard";
import { ARTICLES } from "@/constants/articles";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <main>
        <section className="relative bg-blue-3 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/comm.png"
              alt="McIntire School of Commerce"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="opacity-15"
            />
            <div className="absolute inset-0 bg-blue-2 opacity-40"></div>
          </div>
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow">
              McIntire First Generation Scholarship
            </h1>
            <p className="text-xl md:text-2xl mb-8 italic max-w-3xl mx-auto text-shadow">
              &quot;Imagine a world where underrepresented students have equal
              opportunities and a community that empowers them to become
              pioneers in their respective fields...&quot;
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="hover:scale-[1.03] transition-transform duration-300"
              >
                <Link href="/apply">Apply Now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="hover:scale-[1.03] transition-transform duration-300"
              >
                <Link href="/donate">Donate</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="mt-8 bg-white text-blue-2">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Our Mission and Values
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-gray p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Mission</h3>
                <p>
                  Empower underprivileged first-generation students to aim for
                  success in their respective business fields
                </p>
              </div>
              <div className="bg-blue-gray p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Vision</h3>
                <p>
                  To &quot;be a helping hand on the road to greatness&quot; and
                  create a community of first-generation and/or low-income
                  business scholars who excel academically, professionally, and
                  personally, through comprehensive support, mentorship, and
                  financial assistance.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-gray text-blue-2">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Recent Highlights
            </h2>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg mb-6">
                Our founder, Manish, spoke at the UVA Hoos First reception—an
                important step in raising visibility across UVA.{" "}
                <a
                  href="https://www.linkedin.com/posts/manish-dahal_last-month-i-had-the-privilege-of-addressing-activity-7330581843894751232-3bxA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADFwD84BslFp7pOPGeumRENNJM7m5lBwTdE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-3 hover:underline font-semibold"
                >
                  Check out his takeaways here.
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 text-blue-2">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              MFGS in the News
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {ARTICLES.map((article) => (
                <ArticleCard key={article.title} {...article} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

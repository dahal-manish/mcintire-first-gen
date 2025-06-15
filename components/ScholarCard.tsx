import Image from "next/image";
import Link from "next/link";
import { SCHOLARS } from "@/constants/scholars";

const ScholarCard = ({ scholar }: { scholar: (typeof SCHOLARS)[number] }) => {
  return (
    <Link href={`/scholars/${scholar.slug}`}>
      <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden cursor-pointer duration-300 hover:scale-[1.02] hover:shadow-lg transition-all ease-in-out">
        <div className="w-full h-80 overflow-hidden relative">
          <Image
            src={scholar.image}
            alt={`${scholar.name} headshot`}
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-blue-3 mb-2">
            {scholar.name}
          </h3>
          <div className="text-sm text-gray-600 space-y-1">
            <p className="font-medium text-blue-2">{scholar.education}</p>
            <p>{scholar.cohort}</p>
            <p>{scholar.location}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ScholarCard;

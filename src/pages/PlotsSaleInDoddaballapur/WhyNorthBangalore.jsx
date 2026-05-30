import React from "react";
import {
  FaPlane,
  FaIndustry,
  FaBuilding,
  FaChartLine,
  FaLeaf,
  FaRoad,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaPlane className="text-3xl text-[#24457b]" />,
    title: "Airport Connectivity",
    desc: "Excellent connectivity to Kempegowda International Airport — a major advantage for professionals, NRIs, and frequent travelers.",
  },
  {
    icon: <FaIndustry className="text-3xl text-[#24457b]" />,
    title: "IT & Industrial Growth",
    desc: "Fast-growing IT parks, aerospace developments, and industrial corridors are driving massive demand for residential land.",
  },
  {
    icon: <FaBuilding className="text-3xl text-[#24457b]" />,
    title: "Social Infrastructure",
    desc: "Reputed educational institutions, hospitals, shopping centers, and retail zones are well within reach.",
  },
  {
    icon: <FaChartLine className="text-3xl text-[#24457b]" />,
    title: "High Appreciation",
    desc: "Residential land in North Bangalore has shown consistent value appreciation year on year due to rapid urbanisation.",
  },
  {
    icon: <FaLeaf className="text-3xl text-[#24457b]" />,
    title: "Peaceful Environment",
    desc: "Pollution-free, green surroundings ideal for families seeking a balanced and healthy lifestyle away from city congestion.",
  },
  {
    icon: <FaRoad className="text-3xl text-[#24457b]" />,
    title: "Upcoming Metro & Roads",
    desc: "Metro expansion and Satellite Township Ring Road (STRR) infrastructure projects are boosting accessibility significantly.",
  },
];

const WhyNorthBangalore = () => {
  return (
    <section className="py-14 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-10">
          <h2
            className="text-2xl md:text-3xl font-extrabold text-[#24457b]"
          >
            Why North Bangalore is the Preferred Real Estate Destination
          </h2>
          <div className="w-20 h-1 bg-yellow-900 mx-auto mt-3 rounded-full" />
          <p className="text-gray-500 mt-4 max-w-6xl mx-auto text-sm md:text-base">
            North Bangalore has transformed into a thriving residential and
            commercial hub. Major infrastructure projects, IT parks, aerospace
            developments, and improved road networks have significantly increased
            demand for plotted developments in the region.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col gap-3"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                {item.icon}
              </div>
              <h3
                className="text-base font-bold text-[#24457b]"
              >
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNorthBangalore;

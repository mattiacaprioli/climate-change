import React from "react";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <div>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          {/* DESCRIPTION */}
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-800">
              Explore Environmental Data
            </h2>
            <p className="mt-2 text-gray-600">
              Discover statistics on various environmental factors:
            </p>
          </div>
          {/* CARD CONTAINER */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 hover:shadow-md">
            {/* CARD METHANE */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Link to="./Methane">
                <div className="p-4">
                  <h4 className="text-xl font-semibold text-gray-800">
                    Methane
                  </h4>
                </div>
              </Link>
            </div>
            {/* CARD TEMPERATURE */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Link to="./Temperature">
                <div className="p-4">
                  <h4 className="text-xl font-semibold text-gray-800">
                    Temperature
                  </h4>
                </div>
              </Link>
            </div>
            {/* CARD NO2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Link to="./NO2">
                <div className="p-4">
                  <h4 className="text-xl font-semibold text-gray-800">NO2</h4>
                </div>
              </Link>
            </div>
            {/* CARD CO2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Link to="./CO2">
                <div className="p-4">
                  <h4 className="text-xl font-semibold text-gray-800">CO2</h4>
                </div>
              </Link>
            </div>
            {/* CARD GLACIER */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Link to="./Glaciers">
                <div className="p-4">
                  <h4 className="text-xl font-semibold text-gray-800">
                    Glacier
                  </h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;


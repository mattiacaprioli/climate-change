import React from "react";

// import components
import Bottons from "./Bottons";

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

          {/* BOTTONS */}
          <Bottons /> 

        </div>
      </section>
    </div>
  );
};

export default Section;


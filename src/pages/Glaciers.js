import React from "react";
import { Line } from "react-chartjs-2";

// import Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// import data
import { newArrayGlaciersArea, newArrayGlaciersExtent, glaciersTime } from "../data/fetchData";

const Glaciers = () => {
  return (
    <div>
      <Navbar />
      <GlaciersSection />
      <LineChart />
      <Footer />
    </div>
  );
};

export default Glaciers;

const GlaciersSection = () => {
    return (
      <div className='flex flex-col my-12'>
          <h1 className='text-black text-center text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 relative'>
            Polar Ice
          </h1>
          <hr className='opacity-5' />
          <p className='mx-12 my-8'>
            Methane is a potent greenhouse gas whose emissions are affected by
            industrial and agricultural activities, as well as natural processes.
            
            This gas significantly contributes to global warming by retaining heat
            in the atmosphere. Its impact is reflected in the amplified greenhouse
            effect and the release from ice deposits and permafrost. 
            
            Reducing methane emissions is crucial for mitigating climate change and
            preserving the balance of our planet.
          </p>
      </div>
    );
  };


//--------------- Graphic ---------------
const setupChartGlaciers = {
  labels: glaciersTime,
  datasets: [
    {
      label: "Area",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: newArrayGlaciersArea,
      borderWidth: 2,
      fill: false,
      pointBorderWidth: -5,
      pointRadius: 1.5,
      lineTension: 0.4, // Set the curvature of the lines
    },
    {
      label: "Extension",
      backgroundColor: "rgb(54, 162, 235)",
      borderColor: "rgb(54, 162, 235)",
      data: newArrayGlaciersExtent,
      borderWidth: 2,
      fill: false,
      pointBorderWidth: -5,
      pointRadius: 1.5,
      lineTension: 0.4, // Set the curvature of the lines
    },
  ],
};

const optionsChart = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: "rgba(255, 255, 255, 0.2)", // Color and opacity of Y-axis lines
      },
    },
    x: {
      grid: {
        color: "rgba(255, 255, 255, 0.2)", // Color and opacity of X-axis lines
      },
    },
  },
  plugins: {
    zoom: {
      pan: {
        enabled: true,
        mode: "xy",
      },
      zoom: {
        enabled: true,
        mode: "xy",
      },
    },
  },
};

const LineChart = () => {
    return (
      <div className="flex justify-center m-8 mb-32 md:mb-8">
        <Line className="graphic" data={setupChartGlaciers} options={optionsChart} />
      </div>
    );
  };
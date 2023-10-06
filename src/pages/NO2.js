import React from "react";
import { Line } from "react-chartjs-2";

// import Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//import Data
import { No2Time, newArrayNo2 } from "../data/fetchData";

const NO2 = () => {
  return (
    <div>
      <Navbar />
      <NO2Section />
      <LineChart />
      <Footer />
    </div>
  );
};

export default NO2;

const NO2Section = () => {
    return (
      <div className='flex flex-col my-12'>
          <h1 className='text-black text-center text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 relative'>
            N02
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

const setupChartNo2 = {
  labels: No2Time,
  datasets: [
    {
      label: "NO2",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: newArrayNo2,
      borderWidth: 2, // //Change the thickness of the line
      fill: false, //  Prevents underlined fill
      pointBorderWidth: -5, // Change the radius of the point apexes
    },
  ],
};

const optionsChart = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      min: 310, // Set the minimum value of the y-axis
      max: 340, // Set the maximum value of the y-axis
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
        <Line className="graphic" data={setupChartNo2} options={optionsChart} />
      </div>
    );
  };
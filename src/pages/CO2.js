import React from "react";
import { Line } from "react-chartjs-2";

// import Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//import Data
import { co2Time, newArrayCO2 } from "../data/fetchData";

const CO2 = () => {
  return (
    <div>
      <Navbar />
      <CO2Section />
      <LineChart />
      <Footer />
    </div>
  );
};

export default CO2;

const CO2Section = () => {
    return (
      <div className='flex flex-col my-12'>
          <h1 className='text-black text-center text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 relative'>
            CO2
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

const setupChartCo2 = {
  labels: co2Time, // y-axis dates
  datasets: [
    {
      label: "CO2",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: newArrayCO2, // y-axis dates
      borderWidth: 1, // Change the thickness of the line
      fill: false, // Prevents underlined fill
      pointBorderWidth: -5, //Change the thickness of the superscript points
      pointRadius: 1.5,
    },
  ],
};

const optionsChart = {
  responsive: true,
  maintainAspectRatio: false,

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
  scales: {
    y: {
      min: 370, // Set the minimum value of the x-axis
      max: 440, // Set the minimum value of the y-axis
      grid: {
        color: "rgba(255, 255, 255, 0.3)", // Color and opacity of Y-axis lines
      },
    },
    x: {
      grid: {
        color: "rgba(255, 255, 255, 0.3)", // Color and opacity of X-axis lines
      },
    },
  },
};

const LineChart = () => {
    return (
      <div className="flex justify-center m-8 mb-32 md:mb-8">
        <Line className="graphic" data={setupChartCo2} options={optionsChart} />
      </div>
    );
  };
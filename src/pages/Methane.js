import React from "react";
import { Line } from "react-chartjs-2";

// import Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//import Data
import { methaneTime, newArrayMethane } from "../data/fetchData";

const Methane = () => {
  return (
    <div>
      <Navbar />
      <MethaneSection />
      <LineChart />
      <Footer />
    </div>
  );
};

export default Methane;

const MethaneSection = () => {
  return (
    <div className='flex flex-col my-12'>
        <h1 className='text-black text-center text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 relative'>
            Methane
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

const setupChartMethane = {
  labels: methaneTime,
  datasets: [
    {
      label: "Methane",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: newArrayMethane,
      borderWidth: 1,
      fill: false,
      pointBorderWidth: -5,
      pointRadius: 1.5,
    },
  ],
};

const optionsChart = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      min: 1500,
      max: 2000,
      grid: {
        color: "rgba(255, 255, 255, 0.2)",
      },
    },
    x: {
      grid: {
        color: "rgba(255, 255, 255, 0.2)",
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
      <Line className="graphic" data={setupChartMethane} options={optionsChart} />
    </div>
  );
};

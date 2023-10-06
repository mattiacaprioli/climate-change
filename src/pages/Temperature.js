import React from "react";
import { Line } from "react-chartjs-2";

// import Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//import Data
import { newArrayTemperature, newArrayTime } from "../data/fetchData";

const Temperature = () => {
  return (
    <div>
      <Navbar />
      <TemperatureSection />
      <LineChart />
      <Footer />
    </div>
  );
};

export default Temperature;

const TemperatureSection = () => {
    return (
      <div className='flex flex-col my-12'>
          <h2 className='text-black text-center text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 relative'>
            Temperature
          </h2>
          <hr className='opacity-5' />
          <p className='mx-12 my-8'>
            The increase in global temperatures is primarily driven by the excessive release of greenhouse gases, including carbon dioxide and methane, resulting from human activities like industry and transportation. These gases trap heat in the atmosphere, creating the greenhouse effect and causing significant climate changes.

            The consequences are manifold: melting glaciers contribute to rising sea levels, endangering coastlines and coastal communities. More frequent extreme weather events, like storms and heatwaves, damage infrastructure and agriculture. Essential ecosystems, such as coral reefs, are at risk, impacting biodiversity.
          </p>
      </div>
    );
  };

const setupChartTemperature = {
  labels: newArrayTime,
  datasets: [
    {
      label: "Temperature",
      backgroundColor: "rgb(30, 86, 196)",
      borderColor: "rgb(30, 86, 196)",
      data: newArrayTemperature,
      borderWidth: 1, //Change the thickness of the line
      fill: false, // Prevents underlined fill
      pointBorderWidth: -5, // Change the radius of the point apexes
      pointRadius: 1.5,
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
        wheel: {
          enabled: true,
        },
        pinch: {
          enabled: true,
        },
        mode: "xy",
      },
    },
  },
};


const LineChart = () => {
    return (
      <div className="flex justify-center m-8 mb-32  md:mb-16">
        <Line className="h-60" data={setupChartTemperature} options={optionsChart} />
      </div>
    );
  };
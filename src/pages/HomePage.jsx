import Header from "../components/Header";
import Footer from "../components/Footer"
import Header1 from "../components/Header1";
import Card1 from "../components/Card1";

import Card from "../components/Card";
import bill from "../assets/billing.avif";
import inventory from "../assets/inventory.avif";
import crm from "../assets/CRM.webp";
import hrm from "../assets/HRM.avif";
import report from "../assets/Reports.avif";
import anytime from "../assets/Anytime.avif";
import { RiEdit2Line } from "@remixicon/react";
import QuoteForm from "../components/QuoteForm";

import chat from "../assets/Chat.png"
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";
import { useState } from "react";
import DemoForm from "../components/DemoForm";
import { useSelector } from "react-redux";

const HomePage = () => {
  const navigate = useNavigate();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const [openForm, setOpenForm] = useState(false);
  const closeForm = () => {
    setOpenForm(false);
  }

  const cardData = [
    {
      image: bill,
      heading: "All In One Software Solutions",
      description: "Get all type of required software like ERP, CRM, HRMS, E-Commerce Website & Mobile Application for your business in our All-in-One Software."
    },
    {
      image: inventory,
      heading: "Any Where Any Time",
      description: "Access your business from anywhere with our cloud-based ERP system & CRM system from any type of device"
    },
    {
      image: "img3.jpg",
      heading: "Increase Your Sales",
      description: "Use our advanced CRM tools to increase sales, team productivity and efficiency."
    },
    {
      image: "img4.jpg",
      heading: "Executive Control",
      description: "Provide access to your team as per their Responsibilities"
    }
  ];

  const serviceData = [
    {
      image: bill,
      heading: "Billing & Accounting",
      description: "Generate GST invoices, manage expenses and track profits easily."
    },
    {
      image: inventory,
      heading: "Inventory Management",
      description: "Track stock levels, manage products and get low stock alerts."
    },
    {
      image: crm,
      heading: "CRM System",
      description: "Manage customers, leads and improve your sales process."
    },
    {
      image: hrm,
      heading: "HRM & Payroll",
      description: "Handle employee data, salaries and attendance efficiently."
    },
    {
      image: report,
      heading: "Reports & Analytics",
      description: "Get detailed business insights with smart reports."
    },
    {
      image: anytime,
      heading: "Anytime Anywhere Access",
      description: "Access your business from mobile, desktop or cloud anytime."
    }
  ];

  const whyBillingMitra = [
    {
      heading: "All-in-One Business Solution",
      description: "Billing Mitra provides a complete solution including billing, accounting, CRM, HRM, and inventory management in one platform."
    },
    {
      heading: "Easy to Use Interface",
      description: "Our software is designed with a simple and user-friendly interface so that anyone can use it without technical knowledge."
    },
    {
      heading: "Real-Time Data Access",
      description: "Access your business data anytime and anywhere with cloud-based technology and stay updated in real time."
    },
    {
      heading: "Increase Productivity",
      description: "Automate your daily business tasks and improve your team’s productivity and efficiency."
    },
    {
      heading: "Accurate Reports & Insights",
      description: "Generate detailed reports and analytics to make better business decisions."
    },
    {
      heading: "Secure & Reliable",
      description: "Your data is सुरक्षित and protected with advanced security and backup systems."
    },
    {
      heading: "Customizable for Every Business",
      description: "Billing Mitra can be customized according to your business needs and industry requirements."
    },
    {
      heading: "Cost-Effective Solution",
      description: "Save money by replacing multiple tools with one powerful and affordable software."
    }
  ];
  return (
    <div className={`w-full overflow-x-hidden no-scrollbar transition-colors duration-300 ${isDarkMode ? 'mesh-gradient-dark text-white' : 'mesh-gradient-light text-gray-900'}`}>

      {/* FIXED HEADER */}
      <div className="fixed w-full top-0 z-50 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-colors duration-300">
        <Header1 />
        <Header />
      </div>

      {/* HERO SECTION */}
      <div className="pt-[140px] min-h-[60vh] flex flex-col items-center justify-center text-center px-4 md:px-8">
        <h1
          style={{ fontFamily: "Dancing Script" }}
          className="text-5xl md:text-7xl lg:text-8xl leading-[1.4] font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent"
        >
          All in One Billing Solutions
        </h1>

        <h2
          style={{ fontFamily: "Dancing Script" }}
          className="text-3xl md:text-4xl lg:text-5xl text-blue-600 dark:text-blue-400 mt-8"
        >
          Easy, Efficient & Cost-effective
        </h2>

        <div className="flex gap-4 mt-8 flex-wrap justify-center">
          <button onClick={() => setOpenForm(true)} className="bg-blue-900 dark:bg-blue-700 text-white px-6 py-2 rounded-md shadow-md text-sm md:text-base hover:bg-blue-800 transition-colors">
            Sign Up - It's Free
          </button>
          <button onClick={() => setOpenForm(true)} className="bg-green-500 dark:bg-green-600 text-white px-6 py-2 rounded-md shadow-md text-sm md:text-base hover:bg-green-600 transition-colors">
            Request For Demo
          </button>
          <button onClick={() => navigate("video")} className="bg-gray-700 dark:bg-gray-600 text-white px-6 py-2 rounded-md shadow-md text-sm md:text-base hover:bg-gray-800 transition-colors">
            Video Demonstration
          </button>
        </div>

        <div className="flex flex-wrap justify-center text-gray-800 dark:text-gray-200 gap-4 md:gap-6 mt-8 text-xs md:text-sm font-semibold tracking-wide">
          <span>✓ BILLING & ACCOUNTING (ERP)</span>
          <span>✓ INVENTORY MANAGEMENT</span>
          <span>✓ CRM & HRM</span>
          <span>✓ WEBSITE & MOBILE APP</span>
        </div>
      </div>

      <div className="w-full px-4 mt-12">
        <div className="text-xl md:text-2xl text-center text-gray-800 dark:text-gray-200">HOW CAN I HELP YOU </div>

        <div className="text-3xl md:text-5xl text-center font-bold">We Help You in Your <span className=" bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">Billing </span> Process </div>
      </div>


      {/* VIDEO + CARDS SECTION */}
      <div className="w-full min-w-7xl mx-auto p-8 mt-20" >
        <div className={`w-full flex flex-col lg:flex-row items-center justify-center p-6 md:p-10 rounded-4xl shadow-2xl shadow-amber-600/20 overflow-hidden gap-8 transition-colors duration-300 ${isDarkMode ? 'mesh-gradient-dark' : 'bg-gray-100'}`}>
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full aspect-video min-w-[560px]">
              <iframe
                className="w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/siw7-MTgE4s"
                title="YouTube video"
                frameBorder="0"
                allowFullScreen>
              </iframe>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full lg:w-1/2">
            {cardData.map((item, index) => (
              <Card1 key={index} index={index} heading={item.heading} description={item.description} image={item.image} />
            ))}
          </div>
        </div>
      </div >

      {/* QUOTE BANNER */}
      <div div className="w-full max-w-7xl mx-auto px-4 mt-20 mb-20" >
        <div className="w-full ext-xl md:text-3xl lg:text-4xl text-center py-8 px-6 rounded-2xl shadow-xl bg-gradient-to-r from-red-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent font-bold leading-tight">
          The world is moving very fast day by day and we should also take our business forward by using advance software like <span className="">Billing Mitra</span>  “All in One Software Solution”
        </div>
      </div >

      {/* SERVICES SECTION */}
      <div className="p-8" >
        <div className="w-full p-8 border-2 rounded-2xl pb-4 bg-gradient-to-b from-red-500 via-orange-600 to-yellow-500 text-white">
          <div className="w-full px-6 mx-auto ">
            <h1 className="text-4xl md:text-5xl text-center  text-white font-bold mb-10">Our Service</h1>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-16">
              {serviceData.map((card, index) => (
                <div key={index} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] max-w-[400px]">
                  <Card
                    index={index}
                    image={card.image}
                    heading={card.heading}
                    description={card.description} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div >

      {/* WHY CHOOSE SECTION */}
      <div className="p-8" >
        <div className="w-full mx-auto px-4 py-12  bg-gradient-to-r from-red-500 via-orange-600 to-yellow-500  rounded-4xl shadow-2xl" >
          <h2 className="text-4xl md:text-5xl text-center text-white font-bold mb-10">Why Choose Billing Mitra</h2>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-12">
            {whyBillingMitra.map((card, index) => (
              <div key={index} className="w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] max-w-[400px]">
                <Card
                  index={index}
                  heading={card.heading}
                  description={card.description} />
              </div>
            ))}
          </div>
        </div >
      </div>

      {/* WHO ARE WE SECTION */}
      <div className="w-full max-w-7xl mx-auto px-4 py-16" >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Who Are We</h2>
          <p className="text-xl md:text-2xl dark:opacity-90">Custom IT Solutions for Your Business</p>
          <div className="flex justify-center gap-2 mt-4">
            <span className="w-12 h-1.5 bg-blue-600 dark:bg-white rounded-full"></span>
            <span className="w-12 h-1.5 bg-blue-600 dark:bg-white rounded-full opacity-50"></span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center p-8 bg-gray-100 dark:bg-gray-800 rounded-2xl backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 min-h-[250px] justify-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
               <RiEdit2Line size={32} className="text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Understand Your Requirement</h1>
          </div>
          <div className="flex flex-col items-center p-8 bg-gray-100 dark:bg-gray-800 rounded-2xl backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 min-h-[250px] justify-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6 overflow-hidden p-3">
              <img src={chat} alt="Chat" className="w-full h-full object-contain filter dark:invert" />
            </div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Modify Software As per Need</h1>
          </div>
          <div className="flex flex-col items-center p-8 bg-gray-100 dark:bg-gray-800 rounded-2xl backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 min-h-[250px] justify-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">3</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Deliver Complete Solution</h1>
          </div>
        </div>
      </div >
      <div className="px-11">
        <QuoteForm />
      </div>
      <Footer />
      {
        openForm && (
          <DemoForm onClose={closeForm} />
        )
      }
      {
        openForm && (
          <Login onClose={closeForm} />
        )
      }
    </div >
  );
};

export default HomePage;
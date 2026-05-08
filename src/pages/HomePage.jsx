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
import increasesales from "../assets/increase-sales.jpg";

const HomePage = () => {
  const navigate = useNavigate();

  const [activeForm, setActiveForm] = useState(null);
  const closeForm = () => {
    setActiveForm(null);
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
      image: increasesales,
      heading: "Increase Your Sales",
      description: "Use our advanced CRM tools to increase sales, team productivity and efficiency."
    },
    {
      image: "",
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
    <div className="w-full overflow-x-hidden bg-white text-gray-900">

      {/* FIXED HEADER */}
      <div className="fixed w-full top-0 z-50 border-b border-gray-200 bg-white">
        <Header1 />
        <Header />
      </div>

      {/* HERO SECTION */}
      <div className="pt-[140px] md:pt-[180px] lg:pt-[200px] min-h-[60vh] flex flex-col items-center justify-center text-center px-4 md:px-8">
        <h1
          style={{ fontFamily: "Dancing Script" }}
          className="text-7xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.2] md:leading-[1.4] font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-orange-400 bg-clip-text text-transparent"
        >
          All in One Billing Solutions
        </h1>

        <h2
          style={{ fontFamily: "Dancing Script" }}
          className="text-2xl md:text-4xl lg:text-5xl text-primary mt-6 md:mt-8"
        >
          Easy, Efficient & Cost-effective
        </h2>

        <div className="flex gap-4 mt-8 flex-wrap justify-center px-4">
          <button onClick={() => setActiveForm('login')} className="flex-1 sm:flex-none bg-orange-500 text-white px-6 py-3 rounded-md shadow-md text-sm md:text-base hover:bg-orange-600 transition-colors">
            Sign Up - It's Free
          </button>
          <button onClick={() => setActiveForm('demo')} className="flex-1 sm:flex-none bg-orange-500 text-white px-6 py-3 rounded-md shadow-md text-sm md:text-base hover:bg-orange-600 transition-colors">
            Request For Demo
          </button>
          <button onClick={() => navigate("video")} className="w-full sm:w-auto bg-orange-500 text-white px-6 py-3 rounded-md shadow-md text-sm md:text-base hover:bg-orange-600 transition-colors">
            Video Demonstration
          </button>
        </div>

        <div className="flex flex-wrap justify-center text-gray-800 gap-3 md:gap-6 mt-10 text-[10px] sm:text-xs md:text-sm font-bold tracking-wide">
          <span>✓ BILLING & ACCOUNTING (ERP)</span>
          <span>✓ INVENTORY MANAGEMENT</span>
          <span>✓ CRM & HRM</span>
          <span>✓ WEBSITE & MOBILE APP</span>
        </div>
      </div>

      <div className="w-full px-4 mt-16 md:mt-24">
        <div className="text-lg md:text-2xl text-center text-gray-800 font-medium mb-2">HOW CAN I HELP YOU </div>

        <div className="text-3xl md:text-5xl lg:text-6xl text-center font-black leading-tight">
          We Help You in Your <span className=" bg-gradient-to-r from-amber-500 via-orange-500 to-orange-400 bg-clip-text text-transparent">Billing</span> Process
        </div>
      </div>


      {/* VIDEO + CARDS SECTION */}
      <div className="w-full  mx-auto px-4 md:px-8 mt-20" >
        <div className="w-full flex flex-col lg:flex-row items-stretch justify-center p-4 md:p-10 rounded-3xl md:rounded-[3rem] shadow-2xl shadow-orange-600/10 overflow-hidden gap-8 bg-gray-50 border border-gray-100">
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="w-full aspect-video">
              <iframe
                className="w-full h-full rounded-2xl shadow-lg"
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
      <div className="w-full  mx-auto px-4 mt-12 mb-2" >
        <div className="w-full text-xl md:text-3xl lg:text-4xl text-center py-10 px-6 rounded-3xl shadow-xl bg-white border border-gray-100 bg-gradient-to-r from-orange-500 via-orange-500 to-orange-500 bg-clip-text text-transparent font-black leading-relaxed">
          The world is moving very fast day by day and we should also take our business forward by using advance software like <span className="text-black">Billing Mitra</span> “All in One Software Solution”
        </div>
      </div >

      {/* SERVICES SECTION */}
      <section className="pb-6 md:pb-8 pt-6 md:pt-8 px-4 bg-gradient-to-b from-white to-orange-50/30">
        <div className=" mx-auto shadow-2xl shadow-orange-900/5 gap-8 py-10 md:py-16 px-4 md:px-12 bg-white rounded-[3rem] border border-gray-100">
          <div className="text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm block mb-4">What We Offer</span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Our <span className="text-orange-500">Services</span></h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full shadow-sm shadow-orange-500/50"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {serviceData.map((card, index) => (
              <Card
                key={index}
                index={index}
                image={card.image}
                heading={card.heading}
                description={card.description} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section className="pb-12 md:pb-20 pt-6 md:pt-8 px-4 bg-gradient-to-b from-orange-50/30 to-amber-50/20">
        <div className=" mx-auto shadow-2xl shadow-orange-900/5 gap-8 py-10 md:py-16 px-4 md:px-12 bg-white rounded-[3rem] border border-gray-100">
          <div className="text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm block mb-4">Strategic Advantage</span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Why Choose <span className="text-orange-500">Billing </span>Mitra</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full shadow-sm shadow-orange-500/50"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {whyBillingMitra.map((card, index) => (
              <Card
                key={index}
                index={index}
                heading={card.heading}
                description={card.description} />
            ))}
          </div>
        </div>
      </section>

      {/* WHO ARE WE SECTION */}
      <div className="w-full  mx-auto px-4 py-8" >
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">Who Are We</h2>
          <p className="text-xl md:text-3xl text-orange-500 font-medium">Custom IT Solutions for Your Business</p>
          <div className="flex justify-center gap-2 mt-8">
            <span className="w-16 h-2 bg-primary rounded-full"></span>
            <span className="w-16 h-2 bg-primary rounded-full opacity-20"></span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="flex flex-col items-center p-10 bg-gray-50 rounded-[2.5rem] shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all duration-300 min-h-[300px] justify-center border border-white">
            <div className="w-20 h-20 bg-orange-100 rounded-3xl flex items-center justify-center mb-8">
              <RiEdit2Line size={40} className="text-primary" />
            </div>
            <h1 className="text-2xl font-black text-orange-500 text-center">Understand Your Requirement</h1>
          </div>
          <div className="flex flex-col items-center p-10 bg-gray-50 rounded-[2.5rem] shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all duration-300 min-h-[300px] justify-center border border-white">
            <div className="w-20 h-20 bg-orange-100 rounded-3xl flex items-center justify-center mb-8 overflow-hidden p-4">
              <img src={chat} alt="Chat" className="w-full h-full object-contain" />
            </div>
            <h1 className="text-2xl font-black text-orange-500 text-center">Modify Software As per Need</h1>
          </div>
          <div className="flex flex-col items-center p-10 bg-gray-50 rounded-[2.5rem] shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all duration-300 min-h-[300px] justify-center border border-white">
            <div className="w-20 h-20 bg-orange-100 rounded-3xl flex items-center justify-center mb-8">
              <span className="text-4xl font-black text-primary">3</span>
            </div>
            <h1 className="text-2xl font-black text-orange-500 text-center">Deliver Complete Solution</h1>
          </div>
        </div>
      </div >
      <div className="px-4 md:px-8  mx-auto mb-20">
        <QuoteForm />
      </div>
      <Footer />
      {
        activeForm === 'demo' && (
          <DemoForm onClose={closeForm} />
        )
      }
      {
        activeForm === 'login' && (
          <Login onClose={closeForm} />
        )
      }
    </div >
  );
};

export default HomePage;
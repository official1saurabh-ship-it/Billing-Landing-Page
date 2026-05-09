import React from 'react';
import Header from "../components/Header";
import Header1 from "../components/Header1";
import Footer from "../components/Footer";

const Features = () => {
    const features = [

        {
            title: "Purchases",
            items: [
                "Purchase",
                "Purchase Requisition",
                "Purchase Order",
                "Purchase Return"
            ]
        },
        {
            title: "Sales",
            items: [
                "Sales Order",
                "Invoices",
                "Sales Return",
                "Quotation"
            ]
        },
        {
            title: "People",
            items: ["Customers", "Suppliers", "Stores", "Warehouses"]
        },
        {
            title: "Transactions",
            items: ["Received", "Payment", "Transaction"]
        },
        {
            title: "Inventory",
            items: ["Products", "Category", "Sub Category", "Brands", "Units"]
        },
        {
            title: "Reports",
            items: [
                "Sales Report",
                "Purchase Report",
                "Inventory Report",
                "Invoice Report",
                "Supplier Report",
                "Supplier Ledger",
                "Customer Report",
                "Customer Ledger",
                "Expense Report",
                "Transaction Report",
                "Tax Report",
                "Profit & Loss"
            ]
        },
        {
            title: "Settings",
            items: [
                "General Settings",
                "Account Master",
                "Website Settings",
                "Financial Settings",
                "Subscription"
            ]
        },
        {
            title: "HRM",
            items: ["Employees", "Departments", "Designations"]
        }
    ];

    // Split into 2 parts
    const mid = Math.ceil(features.length / 2);
    const leftData = features.slice(0, mid);
    const rightData = features.slice(mid);

    const renderSection = (data) =>
        data.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-12 p-8 rounded-3xl border bg-white border-gray-100 shadow-lg shadow-gray-200/50">
                <div className="mb-6 inline-block">
                    <h3 className="text-2xl font-black mb-2 text-gray-900">
                        {section.title}
                    </h3>
                    <div className="h-1.5 w-16 bg-orange-500 rounded-full shadow-sm shadow-orange-500/50"></div>
                </div>

                <div className="space-y-1">
                    {section.items.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-4 py-4 border-b last:border-0 group transition-all duration-300 px-4 -mx-4 rounded-lg border-gray-100 hover:bg-orange-50/50"
                        >
                            <span className="text-primary font-bold min-w-[28px] text-lg">
                                {index + 1}.
                            </span>
                            <p className="font-medium leading-relaxed transition-colors duration-300 text-gray-900 group-hover:text-primary">
                                {item}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        ));

    return (
        <div className="flex flex-col min-h-screen bg-white text-gray-900">
            <Header1 />
            <div className="sticky w-full top-0 z-50 bg-white shadow-sm border-b border-gray-100">
                <Header />
            </div>

            <main className="flex-grow pt-10 md:pt-16 pb-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 md:mb-24 max-w-4xl mx-auto">
                        <span className="text-primary font-black uppercase tracking-[0.2em] text-xs md:text-sm block mb-4">Core Capabilities</span>
                        <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
                            Powerful Business <span className="text-primary">Management Features</span>
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                        <div className="space-y-8">
                            {renderSection(leftData)}
                        </div>
                        <div className="space-y-8">
                            {renderSection(rightData)}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Features;
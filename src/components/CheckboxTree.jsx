import React, { useState, useRef, useEffect } from "react";
import { RiArrowDownSLine, RiArrowRightSLine } from "@remixicon/react";

// Recursive Item Component
const TreeItem = ({ item }) => {
    const [checked, setChecked] = useState(false);
    const [expanded, setExpanded] = useState(false);
    
    const isObject = typeof item === "object";
    const label = isObject ? item.label : item;
    const children = isObject ? item.children : [];
    const hasChildren = isObject && children && children.length > 0;

    const handleCheck = (e) => {
        e.stopPropagation();
        setChecked(!checked);
        if (!checked && hasChildren) setExpanded(true); // Auto-expand when checked
    };

    const toggleExpand = (e) => {
        e.stopPropagation();
        setExpanded(!expanded);
    };

    return (
        <div className="w-full">
            <div 
                className="flex items-center gap-2 hover:bg-white/10 p-1.5 rounded-lg transition cursor-pointer group"
                onClick={hasChildren ? toggleExpand : handleCheck}
            >
                {/* Chevron for expansion */}
                <div className="w-5 h-5 flex items-center justify-center text-white/50 group-hover:text-white">
                    {hasChildren && (
                        expanded ? <RiArrowDownSLine size={18} /> : <RiArrowRightSLine size={18} />
                    )}
                </div>

                <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleCheck}
                    className="w-4 h-4 accent-orange-500 cursor-pointer"
                    onClick={(e) => e.stopPropagation()}
                />
                
                <span className="text-sm font-medium text-white/90 group-hover:text-white transition">
                    {label}
                </span>
            </div>

            {/* Children */}
            {hasChildren && expanded && (
                <div className="ml-6 border-l border-white/10 pl-2 mt-1 flex flex-col gap-1">
                    {children.map((child, index) => (
                        <TreeItem key={index} item={child} />
                    ))}
                </div>
            )}
        </div>
    );
};

// Main Component
const CheckboxTree = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="w-full relative" ref={dropdownRef}>
            <p className="mb-1.5 ml-1 text-sm font-medium text-white">Select Services</p>
            
            {/* Dropdown Trigger */}
            <div 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full bg-white/10 border border-white/20 rounded-full px-5 py-2.5 flex items-center justify-between cursor-pointer hover:bg-white/15 transition focus:border-white"
            >
                <span className="text-white/60 text-sm">
                    Choose required services...
                </span>
                <RiArrowDownSLine className={`text-white/60 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full mt-2 bg-[#1e293b] border border-white/20 rounded-2xl shadow-2xl z-[110] p-3 max-h-72 overflow-y-auto custom-scrollbar animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="flex flex-col gap-1">
                        {data.map((item, index) => (
                            <TreeItem key={index} item={item} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CheckboxTree;
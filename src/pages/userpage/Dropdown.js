import React from 'react';

function Dropdown({ label, options, onChange }) {
    return (
        <div className="flex flex-col space-y-1 mt-8">
            {/* <label className="text-sm font-semibold">{label}</label> */}
            <select 
                className="px-10 py-[3.78px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  "
                onChange={(e) => onChange(e.target.value)}
            >
                <option value="">{label}</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Dropdown;

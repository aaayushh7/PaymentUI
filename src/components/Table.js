import React, { useState } from 'react';
import FormComponent1 from './FormComponent1';
import FormComponent2 from './FormComponent2';


const Table = () => {
  const [currentFormIndex, setCurrentFormIndex] = useState(0);
  const [activeRowIndex, setActiveRowIndex] = useState(1);

  const forms = [FormComponent1, FormComponent2];

  const handleGenerate = () => {
    setCurrentFormIndex((prevIndex) => (prevIndex + 1) % forms.length);
    setActiveRowIndex((prevIndex) => (prevIndex % 7) + 1);
  };

  const CurrentForm = forms[currentFormIndex];

  const getRowColor = (rowIndex) => {
    // if (rowIndex === 1) return 'bg-[#FF5A00]';
    if (rowIndex === activeRowIndex) return 'bg-[#FF5A00]';
    return 'bg-[#51A2BF]';
  };
  return (
    <div className="grid grid-cols-4 gap-0 border-[7px] border-white rounded-xl">
      <div className="col-span-1 p-4 border-r-[3px] border-b-[3px] border-white bg-[#FF5A00] h-16 flex items-center justify-center">
        <span className="font-bold text-white">FX</span>
      </div>
      <div className="col-span-3 border-b-[3px] border-white bg-[#00739C] h-16">
        <div className="flex items-center justify-center h-full">
          <div className="p-5 border-r-[3px] border-l-[3px] border-white">
            <span className="font-bold text-white">Single Sided Cashflows</span>
          </div>
          <div className="flex-grow"></div>
        </div>
      </div>
      <div className="col-span-1 border-r-[3px] border-white bg-[#00749C] flex flex-col space-y-2 py-4">
        <div className="h-9"></div>
        {['CashFlow Count', 'CounterParty', 'ProductType', 'Currency', 'Timings', 'SecondaryCurrency', 'PriorityFlags'].map((rowName, index) => (
          <div
            key={index}
            className={`p-4 ${getRowColor(index + 1)} h-10 flex items-center justify-center cursor-pointer hover:bg-[#FF7A20]`}
          >
            <span className="font-bold text-white">{rowName}</span>
          </div>
        ))}
        <div className="h-9"></div>
      </div>
      <div className="col-span-3 p-4 border-l-[3px] border-white bg-[#00739C] h-full relative">
        <div className="flex flex-col justify-center h-full">
          <CurrentForm />
        </div>
        <div className="absolute bottom-4 right-4">
          <button
            className="bg-[#FF5A00] text-white font-bold py-2 px-9 rounded-2xl hover:bg-[#FF7A20]"
            onClick={handleGenerate}
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;

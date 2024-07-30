import React from 'react';

const FormComponent1 = () => {
  return (
    <form className="w-full max-w-md">
      <div className="mb-4 flex items-center">
        <label htmlFor="cashflows" className="text-sm font-bold text-white w-2/3">Number of cashflows : </label>
        <input type="text" placeholder='inputNumber' id="cashflows" name="cashflows" className="flex-grow border border-gray-300 rounded-md shadow-sm p-1" />
      </div>
      <div className="mb-4 flex items-center">
        <label htmlFor="tradeDates" className="text-sm font-bold text-white w-2/3">Valid trade dates : </label>
        <input type="text" placeholder='inputDates' id="tradeDates" name="tradeDates" className="flex-grow border border-gray-300 rounded-md shadow-sm p-1" />
      </div>
      <div className="mb-4 flex items-center">
        <label htmlFor="tradingParty" className="text-sm font-bold text-white w-1/3">Trading party : </label>
        <select id="tradingParty" name="tradingParty" className="flex-grow border border-gray-300 rounded-md shadow-sm p-1 appearance-none">
          <option value="">Select trading parties</option>
          <option value="party1">Party 1</option>
          <option value="party2">Party 2</option>
          <option value="party3">Party 3</option>
        </select>
      </div>
    </form>
  );
};

export default FormComponent1;
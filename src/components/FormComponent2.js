import React from 'react';

const FormComponent2 = () => {
  return (
    <form className="w-full max-w-md">
  <div className="mb-4 flex flex-col">
    <label htmlFor="internal" className="text-sm font-bold text-white mb-1">Internal</label>
    <input type="text" placeholder='InputPercentageHere' id="internal" name="internal" className="border border-gray-300 rounded-md shadow-sm p-1" />
  </div>
  <div className="mb-4 flex flex-col">
    <label htmlFor="interbank" className="text-sm font-bold text-white mb-1">Interbank</label>
    <input type="text" placeholder='InputPercentageHere' id="interbank" name="interbank" className="border border-gray-300 rounded-md shadow-sm p-1" />
  </div>
  <div className="mb-4 flex flex-col">
    <label htmlFor="corporate" className="text-sm font-bold text-white mb-1">Corporate</label>
    <input type="text" placeholder='InputPercentageHere' id="corporate" name="corporate" className="border border-gray-300 rounded-md shadow-sm p-1" />
  </div>
</form>
  );
};

export default FormComponent2;
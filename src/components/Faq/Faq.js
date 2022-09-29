import React from 'react';

const Faq = () => {
  return (
    <div className='w-6/12 mx-auto my-10'>
      <div tabIndex={0} className="collapse collapse-arrow border border-red-300 bg-base-100 rounded-box my-5">
        <div className="collapse-title text-xl font-medium">
          Focus me to see content
        </div>
        <div className="collapse-content">
          <p>tabIndex={0} attribute is necessary to make the div focusable</p>
        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
        <div className="collapse-title text-xl font-medium">
          Focus me to see content
        </div>
        <div className="collapse-content">
          <p>tabIndex={0} attribute is necessary to make the div focusable</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
import React from 'react';

const Faq = () => {
  return (
    <div className='w-8/12 my-10 mx-10'>
      <h2 className='text-3xl font-semibold'>Frequently Asked Question</h2>
      <div tabIndex={0} className="collapse collapse-arrow border border-red-300 bg-base-100 rounded-box my-5">
        <div className="collapse-title text-xl font-medium">
          How Does React Works?
        </div>
        <div className="collapse-content">
          <p>At its very core, React basically maintains a tree. This tree is able to do efficient diff computations on the nodes.
            React allows us  effectively re-construct DOM in JavaScript and push only those changes to the DOM which have actually occurred.</p>
        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-arrow border border-red-300 bg-base-100 rounded-box my-5">
        <div className="collapse-title text-xl font-medium">
          Difference between props and state.
        </div>
        <div className="collapse-content">
          <div className='props'>
            <p className='text-2xl font-semibold my-2'>Props:</p>
            <p>1. Props are immutable.</p>
            <p>2. Props are read-only.</p>
            <p>3. Props can be accessed by the child component.</p>
            <p>4. Stateless component can have Props.</p>
            <p>5. Props make components reusable.</p>
          </div>
          <div className='State'>
            <p className='text-2xl font-semibold my-2'>Props:</p>
            <p>1. State is mutable.</p>
            <p>2. State changes can be asynchronous.</p>
            <p>3. State cannot be accessed by child components.</p>
            <p>4. Stateless components cannot have State.</p>
            <p>5. State cannot make components reusable.</p>
          </div>
        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-arrow border border-red-300 bg-base-100 rounded-box my-5">
        <div className="collapse-title text-xl font-medium">
          Why we use useEffect in react?
        </div>
        <div className="collapse-content">
          <p>The UseEffect generally do the side effect work in react.

            Examples of side-effects are fetch requests, manipulating DOM directly, using timer functions like setTimeout(), and more.</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
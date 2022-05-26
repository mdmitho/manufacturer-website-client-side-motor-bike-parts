import React from "react";

const Blogs = () => {
  return (
    <div className="container mx-auto my-16">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingOne">
            <button
              className="
          accordion-button
          relative
          flex
          items-center
          w-full
          py-4
          px-5
          text-base text-gray-800 text-left
          bg-white
          border-0
          rounded-none
          transition
          focus:outline-none
        "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              1. How will you improve the performance of a React Application?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5 text-left">
              <code>
                JavInternally, React uses several clever techniques to minimize the number of
                costly DOM operations required to update the UI. For many applications, using
                React will lead to a fast user interface without doing much work to
                specifically optimize for performance. Nevertheless, there are several ways you
                can speed up your React application.aScript
              </code>{" "}
              <br />
              <br /> 1. Keeping component state local where necessary.
              <br /> 2. Memoizing React components to prevent unnecessary re-renders.
              <br /> 3. Code-splitting in React using dynamic import()
              <br /> 4. Windowing or list virtualization in React.
              <br /> 5. Lazy loading images in React.
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingTwo">
            <button
              className="
          accordion-button
          collapsed
          relative
          flex
          items-center
          w-full
          py-4
          px-5
          text-base text-gray-800 text-left
          bg-white
          border-0
          rounded-none
          transition
          focus:outline-none
        "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              2. What are the different ways to manage a state in a React application?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5 text-left">
              <code>
                There are four main types of state you need to properly manage in your React
                apps:
              </code>
              <br />
              <br />
              1 Local state. <br />2 Global state.
              <br />
              3Server state.
              <br /> 4 URL state.
            </div>
          </div>
        </div>

        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingThree">
            <button
              className="
          accordion-button
          collapsed
          relative
          flex
          items-center
          w-full
          py-4
          px-5
          text-base text-gray-800 text-left
          bg-white
          border-0
          rounded-none
          transition
          focus:outline-none
        "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              3. How does prototypical inheritance work?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5">
              <strong>
                The Prototypal Inheritance is a feature in javascript used to add methods and
                properties in objects. It is a method by which an object can inherit the
                properties and methods of another object. Traditionally, in order to get and
                set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                Every object with its methods and properties contains an internal and hidden
                property known as [[Prototype]]. The Prototypal Inheritance is a feature in
                javascript used to add methods and properties in objects. It is a method by
                which an object can inherit the properties and methods of another object.
                Traditionally, in order to get and set the [[Prototype]] of an object, we use
                Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language,
                it is being set using __proto__.{" "}
              </strong>{" "}
              <br /> br If you update it directly, calling the setState() afterward may just
              replace the update you made. When you directly update the state, it does not
              change this.state immediately. Instead, it creates a pending state transition,
              and accessing it after calling this method will only return the present value.
              You will lose control of the state across all components.
            </div>
          </div>
        </div>

        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingFour">
            <button
              className="
          accordion-button
          collapsed
          relative
          flex
          items-center
          w-full
          py-4
          px-5
          text-base text-gray-800 text-left
          bg-white
          border-0
          rounded-none
          transition
          focus:outline-none
        "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              4. What is a unit test?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5">
              <strong>
                Unit testing is a type of testing in which individual units or functions of
                software testing. Its primary purpose is to test each unit or function. A unit
                is the smallest testable part of an application. It mainly has one or a few
                inputs and produces a single output.
              </strong>{" "}
            </div>
          </div>
        </div>

        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingFive">
            <button
              className="
          accordion-button
          collapsed
          relative
          flex
          items-center
          w-full
          py-4
          px-5
          text-base text-gray-800 text-left
          bg-white
          border-0
          rounded-none
          transition
          focus:outline-none
        "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              5. Why should write unit tests?
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5">
              <strong>
                Unit testing ensures that all code meets quality standards before it's
                deployed. This ensures a reliable engineering environment where quality is
                paramount. Over the course of the product development life cycle, unit testing
                saves time and money, and helps developers write better code, more efficiently
              </strong>{" "}
            </div>
          </div>
        </div>

        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingSix">
            <button
              className="
          accordion-button
          collapsed
          relative
          flex
          items-center
          w-full
          py-4
          px-5
          text-base text-gray-800 text-left
          bg-white
          border-0
          rounded-none
          transition
          focus:outline-none
        "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              6. Why should we not update the state directly?
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5">
              <strong>
                If you update it directly, calling the setState() afterward may just replace
                the update you made. When you directly update the state, it does not change
                this.state immediately. Instead, it creates a pending state transition, and
                accessing it after calling this method will only return the present value. You
                will lose control of the state across all components.
              </strong>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

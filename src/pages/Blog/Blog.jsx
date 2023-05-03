import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold text-center mb-10 text-black'>Some Question and Answer</h2>
            <div className='flex flex-col gap-8'>

                {/* question-1 */}

                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium text-sky-600">
                        Tell us the differences between uncontrolled and controlled components.
                    </div>
                    <div className="collapse-content">
                        <p>In React, controlled and uncontrolled components refer to how a component manages its state and responds to user input. The main difference between controlled and uncontrolled components in React is that controlled components have their state fully managed by the parent component, while uncontrolled components manage their own state internally.</p>
                    </div>
                </div>

                {/* question-2 */}

                <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium text-sky-600">
                        How to validate React props using PropTypes?
                    </div>
                    <div className="collapse-content">
                        <p>PropTypes is a built-in library in React that allows developers to validate the props passed to a component. It is used by defining the expected type and shape of the props.To use PropTypes, import it into your component, then define the expected types and shapes of the props using PropTypes validators. This provides a warning in the console if the props passed to the component do not match the expected types or shapes.</p>
                    </div>
                </div>

                {/* question-3 */}

                <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium text-sky-600">
                        Tell us the difference between nodejs and express js.
                    </div>
                    <div className="collapse-content">
                        <p>Here the difference between firstly, Node.js is a JavaScript runtime environment that allows developers to execute JavaScript code on the server-side. Express.js is a web application framework built on top of Node.js that provides a set of features for building web applications such as routing, middleware, and handling HTTP requests and responses.</p>
                    </div>
                </div>

                {/* question-4 */}

                <div tabIndex={3} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium text-sky-600">
                        What is a custom hook, and why will you create a custom hook?
                    </div>
                    <div className="collapse-content">
                        <p>In React, a custom hook is a JavaScript function that starts with the prefix use and allows developers to reuse stateful logic between components. Custom hooks are created to abstract away complex logic and make it reusable across multiple components.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold text-center mb-10'>Some Question and Answer</h2>
            <div className='flex flex-col gap-8'>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium text-sky-600">
                        Tell us the differences between uncontrolled and controlled components.
                    </div>
                    <div className="collapse-content">
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                </div>
                <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium text-sky-600">
                        How to validate React props using PropTypes?
                    </div>
                    <div className="collapse-content">
                        <p>tabIndex={1} attribute is necessary to make the div focusable</p>
                    </div>
                </div>
                <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium text-sky-600">
                        Tell us the difference between nodejs and express js.
                    </div>
                    <div className="collapse-content">
                        <p>tabIndex={2} attribute is necessary to make the div focusable</p>
                    </div>
                </div>
                <div tabIndex={3} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium text-sky-600">
                        What is a custom hook, and why will you create a custom hook?
                    </div>
                    <div className="collapse-content">
                        <p>attribute is necessary to make the div focusable</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
import React from 'react';
import PavanResume from "../../assets/PAVAN_KUMAR_KURUVA.pdf";

const Resume = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = PavanResume;
        link.download = 'Pavan_Kumar_Kuruva_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleLoadError = () => {
        alert('Failed to load the resume. Please try downloading it.');
    };


    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-800">
            <div className="max-w-4xl bg-white rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">My Resume</h1>
                    <button
                        onClick={handleDownload}
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Download CV
                    </button>
                </div>
                <div className="mt-4">
                    <iframe
                        className="border-none w-full h-96"
                        title="Resume"
                        src={PavanResume}
                        width="100%"
                        height="600"
                        onError={handleLoadError}
                    ></iframe>
                </div>
                <div className="mt-12">
                    <p className="text-gray-700 text-sm">
                        This is a professional summary of my skills and experience.
                        MERN Full Stack Developer certified by Jspiders. Proficient in JavaScript, React.js, MongoDB, Express.js, and Node.js. 
                        Dedicated to delivering high-quality web solutions through collaborative problem-solving.
                    </p>
                    <p className="text-gray-700 text-sm mt-4">I hereby declare that the above-mentioned information is correct up to my knowledge and I bear the responsibility for the correctness of the above-mentioned information.</p>
                </div>
            </div>
        </div>
    );
};

export default Resume;

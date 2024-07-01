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

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-900 to-purple-700">
            <div className="max-w-4xl bg-white rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">My Resume</h1>
                    <button
                        onClick={handleDownload}
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
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
                    ></iframe>
                </div>
                <div className="mt-6">
                    <p className="text-gray-700 text-sm">
                        This is a professional summary of my skills and experience.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed vitae justo a leo ultricies fringilla sed id eros.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Resume;

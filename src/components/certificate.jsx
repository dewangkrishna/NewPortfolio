import React from 'react';

const certificates = [
  {
    title: 'Ethical Hacking and Penetration Testing | EHPT+',
    date: 'August 2024',
    pdfUrl: 'ethical hacking.pdf', // URL to the PDF file
  },
  {
    title: 'Introduction to MongoDB',
    date: 'January 2024',
    pdfUrl: 'mongodb.pdf', // URL to the PDF file
  },
  {
    title: 'Qlick Sense Business Analyst Certification',
    date: 'June 2023',
    pdfUrl: 'Qlick.pdf', // URL to the PDF file
  },
];

const Certificates = () => {

  const redirectToPdf = (pdfUrl) => {
    window.location.href = pdfUrl; // Redirect to the PDF file
  };

  return (
    <section id="certificates" className="min-h-screen bg-black pb-0">
      <h1 className="text-3xl font-bold text-white text-center mb-8">
        Certificates
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-0">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="relative group cursor-pointer border border-green-500 rounded-lg hover:shadow-green-500 hover:shadow-xl"
            onClick={() => redirectToPdf(cert.pdfUrl)}
          >
            <div className="w-full h-64 bg-gray-800 flex items-center justify-center rounded-lg shadow-lg">
              <span className="text-white text-lg font-semibold">{cert.title}</span>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-white text-lg font-semibold">{cert.title}</h2>
              <p className="text-gray-300">{cert.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
//de
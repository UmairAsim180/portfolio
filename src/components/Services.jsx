const Services = () => {
  const services = [
    {
      title: "Frontend Development",
      description: "Creating modern and responsive user interfaces using HTML, CSS, JavaScript, and Tailwind CSS. Building interactive web experiences with React and Next.js."
    },
    {
      title: "Backend Development",
      description: "Developing secure and efficient backend systems using Node.js and Express. Handling API requests, authentication, and database integration with MongoDB."
    },
    {
      title: "Full-Stack Development",
      description: "Building complete web applications with both frontend and backend technologies. Connecting React or Next.js with Express and MongoDB for dynamic and functional websites."
    },
    {
      title: "Portfolio & Business Websites",
      description: "Designing and developing personalized portfolio websites and small business sites. Ensuring a professional look with smooth animations and SEO-friendly performance."
    }
  ];

  return (
    <>
      <div className="container flex gap-5 mx-auto px-3 flex-wrap md:flex-nowrap">
        {services.map((service, index) => {
          return (
            <div key={index} className="card border-2 rounded-md p-4 shadow-lg shadow-black">
              <h3 className="text-2xl font-bold text-center text-[#112D4E] dark:text-[#3498DB] my-3">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Services;

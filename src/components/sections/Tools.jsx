
import React from 'react';

const LogoCarousel = () => {
  // Company logos with their names and image URLs
  const logos = [
    { 
      name: 'CVAT', 
      image: 'https://ai-infrastructure.org/wp-content/uploads/2022/10/cvat.png' 
    },
    { 
      name: 'SuperAnnotate', 
      image: 'https://runacap.com/wp-content/uploads/2020/03/SuperAnnotate_color_600x300.svg' 
    },
    { 
      name: 'Roboflow', 
      image: 'https://security.roboflow.com/api/share/d560a04b-1859-4677-a8a3-e0a72dc70231/logo.png' 
    },
    { 
      name: 'Labelbox', 
      image: 'https://miro.medium.com/v2/resize:fit:1400/0*-xeH0j0dpx7H6CAa.jpg' 
    },
    { 
      name: 'Supervisely', 
      image: 'https://i.imgur.com/B276eMS.png' 
    },
    { 
      name: 'V7 Labs', 
      image: 'https://taxtechnology.org.uk/wp-content/uploads/2025/05/V7_logo_black.png' 
    },
    { 
      name: 'Prodigy', 
      image: 'https://support.prodi.gy/uploads/short-url/dtfiC2PJMTUtmtMSUHf4xcVUST8.svg' 
    },
    { 
      name: 'BasicAI', 
      image: 'https://static.wixstatic.com/media/4c4fd6_5b0efe6db4e44db68151ab69cd36803d~mv2.png' 
    },
    { 
      name: 'ScaleAI', 
      image: 'https://cdn.prod.website-files.com/619c5a34100fe677d0c61e04/65d61264bb757955b5caec0d_Scale-AI-Canada.png' 
    },
   
  ];

  return (
    <div className="w-full bg-gray-50 py-12 overflow-hidden">
      <div className="tools-carousel-header">
          <h2>Our Annotation Tools</h2>
          <p>
            Professional-grade tools we use to deliver precise annotations
          </p>
        </div>
      
      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        
        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-8 group cursor-pointer"
            >
              <div className=" hover:shadow-lg transition-all duration-300 p-6  transform hover:scale-105">
                <div className="w-40 h-40 flex items-center justify-center">
                  <img 
                    src={logo.image} 
                    alt={`${logo.name} logo`}
                    className="w-40 h-40 object-contain filter group-hover:brightness-105 transition-all duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="w-20 h-20 rounded-full bg-gray-200 items-center justify-center text-gray-600 font-bold text-lg hidden"
                  >
                    {logo.name.charAt(0)}
                  </div>
                </div>
               
              </div>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-8 group cursor-pointer"
            >
              <div className="  hover:shadow-lg transition-all duration-300 p-6 transform hover:scale-105">
                <div className="w-40 h-40 flex items-center justify-center">
                  <img 
                    src={logo.image} 
                    alt={`${logo.name} logo`}
                    className="w-40 h-40 object-contain filter group-hover:brightness-105 transition-all duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="w-20 h-20 rounded-full bg-gray-200 items-center justify-center text-gray-600 font-bold text-lg hidden"
                  >
                    {logo.name.charAt(0)}
                  </div>
                </div>
                
              </div>
            </div>
          ))}

        

        
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 25s linear infinite;
          width: fit-content;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

        <div className="tools-carousel-button-container">
          <a href="/contact">
          <button className="tools-carousel-button">
            Request Custom Tool Setup
          </button>
          </a>
        </div>
    </div>
  );
};

export default LogoCarousel;
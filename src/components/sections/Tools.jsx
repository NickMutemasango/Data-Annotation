import { useRef } from 'react';

const ToolsCarousel = () => {
  const tools = [
    { name: "CVAT", logo: "https://ai-infrastructure.org/wp-content/uploads/2022/10/cvat.png" },
    { name: "Labelbox", logo: "https://miro.medium.com/v2/resize:fit:1400/0*-xeH0j0dpx7H6CAa.jpg" },
    { name: "Supervisely", logo: "https://i.imgur.com/B276eMS.png" },
    { name: "Prodigy", logo: "https://static.wixstatic.com/media/4c4fd6_5b0efe6db4e44db68151ab69cd36803d~mv2.png" },
    { name: "VGG Image Annotator", logo: "https://cdn.prod.website-files.com/619c5a34100fe677d0c61e04/65d61264bb757955b5caec0d_Scale-AI-Canada.png" },
    { name: "RectLabel", logo: "https://miro.medium.com/v2/resize:fit:612/1*pdnzWlBZkhiwyr9kfX6b3g.png" },
    { name: "Dataloop", logo: "https://support.prodi.gy/uploads/short-url/dtfiC2PJMTUtmtMSUHf4xcVUST8.svg" },
    { name: "Diffgram", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrpaEnmFlxJz7LLUVdvvhwHGEPUoR4t5ep7g&s" },
    { name: "DataLoop", logo: "https://dka575ofm4ao0.cloudfront.net/pages-transactional_logos/retina/205745/Dataloop_Color_logo_with_black_text_4x-5a6885c5-d2e0-4666-9b42-1b875a72d4c4.png" },
    { name: "Roboflow", logo: "https://security.roboflow.com/api/share/d560a04b-1859-4677-a8a3-e0a72dc70231/logo.png" },
    { name: "SuperAnnotate", logo: "https://runacap.com/wp-content/uploads/2020/03/SuperAnnotate_color_600x300.svg" },
  ];

  const loopedTools = [...tools, ...tools, ...tools]; // Triple the items for seamless looping

  return (
    <section className="tools-carousel-section">
      <div className="tools-carousel-container">
        <div className="tools-carousel-header">
          <h2>Our Annotation Tools</h2>
          <p>
            Professional-grade tools we use to deliver precise annotations
          </p>
        </div>

        <div className="tools-carousel-wrapper">
          {/* Gradient fade effects */}
          <div className="tools-carousel-fade-left" />
          <div className="tools-carousel-fade-right" />

          <div className="tools-carousel-scroll-container">
            <div className="tools-carousel-track">
              {loopedTools.map((tool, index) => (
                <div
                  key={`${tool.name}-${index}`}
                  className="tools-carousel-item"
                >
                  <img 
                    src={tool.logo} 
                    alt={tool.name} 
                    className="tools-carousel-image"
                    title={tool.name}
                    onError={(e) => {
                      e.currentTarget.src = `https://via.placeholder.com/120x60?text=${tool.name}`;
                      e.currentTarget.className = 'tools-carousel-image-error';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="tools-carousel-button-container">
          <button className="tools-carousel-button">
            Request Custom Tool Setup
          </button>
        </div>
      </div>

      <style jsx>{`
        .tools-carousel-section {
          background-color: #f9fafb;
          padding: 4rem 0;
        }

        .tools-carousel-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .tools-carousel-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .tools-carousel-header h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #111827;
        }

        @media (min-width: 768px) {
          .tools-carousel-header h2 {
            font-size: 2.25rem;
          }
        }

        .tools-carousel-header p {
          font-size: 1.125rem;
          color: #4b5563;
          max-width: 42rem;
          margin: 0 auto;
        }

        .tools-carousel-wrapper {
          position: relative;
          overflow: hidden;
          padding: 2rem 0;
        }

        .tools-carousel-fade-left,
        .tools-carousel-fade-right {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 6rem;
          z-index: 10;
        }

        .tools-carousel-fade-left {
          left: 0;
          background: linear-gradient(to right, #f9fafb, transparent);
        }

        .tools-carousel-fade-right {
          right: 0;
          background: linear-gradient(to left, #f9fafb, transparent);
        }

        .tools-carousel-scroll-container {
          position: relative;
          height: 8rem;
          overflow: hidden;
        }

        .tools-carousel-track {
          display: flex;
          align-items: center;
          height: 100%;
          width: max-content;
          animation: scroll 20s linear infinite;
          duration: 2000s;
        }

       

        .tools-carousel-item {
          margin: 0 1.5rem;
          flex-shrink: 0;
          transition: transform 1s ease;
        }

        .tools-carousel-item:hover {
          transform: scale(1.1);
        }

        .tools-carousel-image {
          height: 4rem;
          width: auto;
          max-width: 120px;
          object-fit: contain;
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }

        .tools-carousel-image:hover {
          opacity: 1;
        }

        .tools-carousel-image-error {
          height: 4rem;
          width: auto;
          object-fit: contain;
          filter: grayscale(100%);
          opacity: 0.7;
        }

        .tools-carousel-button-container {
          text-align: center;
          margin-top: 3rem;
        }

        .tools-carousel-button {
          background-color: #10B981;
          color: white;
          padding: 0.75rem 2rem;
          border-radius: 0.5rem;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .tools-carousel-button:hover {
          background-color: #0e9f72;
        }
      `}</style>
    </section>
  );
};

export default ToolsCarousel;
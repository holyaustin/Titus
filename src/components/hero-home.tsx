import VideoThumb from "@/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";
import {Link} from "react-router-dom";


export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-6 text-center md:pb-10">
            <h1
              className="pb-3 text-4xl font-semibold mb-8 text-white md:text-5xl " 
               
            >
             Crypto Yield & token Analysis using AI Agent.
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Titus is revolutionizing the intersection of artificial intelligence and blockchain, delivering secure, transparent, and decentralized AI solutions for the future of Web3.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                <Link to="/token"
                  
                    className="btn group mb-4 w-full bg-blue-800 text-white shadow-blue-300 hover:bg-blue-700 sm:mb-0 sm:w-auto p-5 font-semibold "
                    
                  >
                    <span className="relative inline-flex items-center pr-3">
                      Token Analysis

                    </span>
                  </Link>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                <Link to="/yield"
                    className="p-5 btn relative w-full bg-gray-800 text-white before:pointer-events-none font-semibold before:absolute before:inset-0 hover:bg-gray-700 sm:ml-4 sm:w-auto "
                    
                  >
                    <span className="relative inline-flex items-center pr-3">
                    Yield Agent
                    </span>
                 
                    </Link>
                </div>
              </div>
            </div>
          </div>

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="videos//video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
          {/**
 */}
        </div>
      </div>
    </section>
  );
}

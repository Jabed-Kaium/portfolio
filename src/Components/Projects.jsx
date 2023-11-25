
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { PData } from './ProjectData';


function SampleNextArrow(prop) {
    const { className, style, onClick } = prop;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#2B3940", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(prop) {
    const { className, style, onClick } = prop;
    return (
        <div
        className={className}
        style={{ ...style, display: "block", background: "#2B3940", borderRadius: "50%" }}
        onClick={onClick}
        />
    );
}


const Projects = () => {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    };

    return (
        <section id="Projects">
            <div className="container projects">
                <div className="row pt-5">
                    <div className="col-md-6 mb-5">
                        <h1 className="project-heading ps-5">Check out my projects</h1>
                    </div>
                    <div className="col-md-6 px-5">
                        <Slider {...settings}>
                            {
                                PData.map((item, id) => (
                                    <a className="project-link" key={id} href={item.link} target="_blank" rel="noreferrer">
                                    <div className="card">
                                        <div className="card-top">
                                            <img src={item.imgsrc} alt={item.title} />
                                        </div>
                                        <div className="card-bottom mt-4 text-center">
                                            <h5 className="text-center fw-bold">{item.title}</h5>
                                        </div>
                                    </div>
                                    </a>
                                ))
                            }
                        </Slider>
                    </div> 
                </div>
            </div>
        </section>
    );
}
export default Projects

import { useState, useEffect } from "react"
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {

    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 150) {
                setBackToTop(true);
            }
            else {
                setBackToTop(false);
            }
        })
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            {backToTop && (
                <button className="back-to-top btn btn-success" onClick={scrollUp}><FaArrowUp /></button>
            )}
        </>
    )
}

export default BackToTopButton
import about_me from '../assets/images/about_me.png'

const About = () => {
    return (
        <section id='About'>
            <div className="container about">
                <div className="about-item row">
                    <div className="col-md-6">
                            <img className='about-img' src={about_me}/>
                    </div>
                    <div className="col-md-6">
                        <div className="about-description">
                            <h1 className='about-title'>WHO AM I?</h1>
                            <p>Skilled programmer proficient in C, C++, Java, HTML, CSS, JavaScript and MySQL. Specialized in Full Stack projects with a strong track record of problem-solving, including 800+ solutions on prominent coding platforms(Codeforces, Codechef, UVA, LightOJ etc). Involved in programming contests and served as a mentor and problem setter in the CSTE Club. Proficient in quickly adapting to new technologies and utilizing them to drive innovation. Committed to continuous growth and eager to contribute to dynamic teams pushing the boundaries of what's possible in the digital landscape. </p>
                            <h4>Education</h4>
                            <p> <strong>B.Sc</strong> <br/> Computer Science and Telecommunication Engineering, <br/> Noakhali Science and Technology University </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About
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
                            <p>I am a computer science student and passionate software developer. My interested technology fields are Java and Spring Boot. I have solved so many problems in various online judge such as Codeforces, UVA, LightOJ etc. </p>
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
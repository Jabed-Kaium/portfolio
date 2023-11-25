import Typewriter from 'typewriter-effect';
import dp from '../assets/images/profile_pic.png'

const Home = () => {
    return (
        <section id='Home'>
            <div className="home">
            <div className="container">
                <div className="home-item row">
                    <div className="home-info col-md-6 my-auto">
                        <div className="designation pt-1">
                            <h4>
                                <Typewriter 
                                options= {{
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                    strings: ["CS Student, Software Developer"]
                                }}
                                />
                            </h4>
                        </div>
                        <div className="name pt-1">
                            <h1>Jabed Kaium</h1>
                        </div>
                        <div className="description pt-1">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt officiis aliquam vel commodi aspernatur eum omnis, tenetur labore aperiam culpa animi iure beatae rerum doloremque optio libero quas velit totam blanditiis officia reprehenderit nihil.</p>
                        </div>
                        <div className="view-btn pt-2">
                            <a className="btn btn-outline" href="#About">View More</a>
                        </div>
                    </div>
                    <div className="home-image col-md-6">
                        <img src={dp} height="500"/>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}
export default Home
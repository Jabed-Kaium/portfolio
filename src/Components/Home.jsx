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
                                    strings: ["CSE Graduate, Software Developer"]
                                }}
                                />
                            </h4>
                        </div>
                        <div className="name pt-1">
                            <h1>Jabed Kaium</h1>
                        </div>
                        <div className="description pt-1">
                            <p>An ambitious and hardworking person, ready to take new challenges. Determined to take my skills to a unique level by taking new challenges. Every task is a new experience and it is a pleasure to learn something from it. I am very much focused to reach the target. 
                            </p>
                            <h5 className='py-1'>Let&apos;s build together something valuable.</h5>
                        </div>
                        <div className="view-btn pt-2">
                            <a className="btn btn-outline mb-5" href="#About">View More</a>
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
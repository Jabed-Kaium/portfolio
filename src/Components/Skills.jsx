
import SkillCard from './SkillCard';
import c from '../assets/images/C.png'
import cpp from '../assets/images/C++.png'
import java from '../assets/images/java.png'
import springboot from '../assets/images/spring_boot.png'
import javascript from '../assets/images/JavaScript.png'
import html from '../assets/images/HTML.png'
import css from '../assets/images/CSS3.png'
import bootstrap from '../assets/images/bootstrap.png'
import mysql from '../assets/images/Mysql.png'
import react from '../assets/images/react.png'

const Skills = () => {

    const SData = [
        {
            imgsrc: c,
        },
        {
            imgsrc: cpp,
        },
        {
            imgsrc: java,
        },
        {
            imgsrc: springboot,
        },
        {
            imgsrc: javascript,
        },
        {
            imgsrc: react,
        },
        {
            imgsrc: html,
        },
        {
            imgsrc: css,
        },
        {
            imgsrc: bootstrap,
        },
        {
            imgsrc: mysql,
        }
    ];

    return (
        <section id='Skills'>
            <div className="container skills">
                <h1 className='pt-3 pb-5 text-center'>My Skills</h1>
                <div className="box">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row skill-logo">
                                {
                                    SData.map((val, id)=>{
                                        return <SkillCard key={id} imgsrc={val.imgsrc} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Skills
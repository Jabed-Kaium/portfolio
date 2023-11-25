
const SkillCard = (prop) => {

    return (
        <>
            <div className="skill-img col-md-2 col-6 mx-auto my-3">
                <div>
                    <img src={prop.imgsrc} alt="skill image" />
                </div>
            </div>
        </>
    );
}

export default SkillCard;
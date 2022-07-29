export default function ImproveSkills(){
    const list = [
        "Learn new recepies",
        "Experiment with food",
        "Write your own recepies",
        "Know nutrition facts",
        "Get cooking tips",
        
    ]

    return (
        <div className="section improve-skills">
            <div className="col img">
                <img src="/img/gallery/chapati.jpg" alt="" />
            </div>
            <div className="col typography">
                <h1 className="title">Improve Your Kitchen Skills</h1>
                { list.map((item, index) => (
                    <p className="skill-item" key={index}>{item}</p>
                )) }
                <button className="btn">singup now</button>
            </div>
        </div>
    )
}
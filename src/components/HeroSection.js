import CustomImage from "./CustomImage"

export default function HeroSection(){
    const images = [
        "/img/gallery/chai.jpg",
        "/img/gallery/matoke.jpg",
        "/img/gallery/githeri.jpg",
        "/img/gallery/piza.jpg",
        "/img/gallery/dawa.jpg",
        "/img/gallery/mukimo.jpg",
        "/img/gallery/pilau.jpg",
        "/img/gallery/samosa.jpg",
        "/img/gallery/ugali.jpg"
    ]
    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">What Are We About</h1>
                <p className="info">kenfood is a place where you get food recepies at affordable prices.</p>
                <button className="btn">explore now</button>
            </div>
            <div className="col gallery">
                { images.map((src, index) => (
                    <CustomImage key={index} imgSrc={src} pt={"90%"} />
                )) }
            </div>
        </div>
    )
}
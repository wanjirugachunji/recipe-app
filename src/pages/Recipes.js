import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"

export default function Recipes(){
    const recipes = [
        {
            title: "Chai Masala",
            image: "/img/gallery/chai.jpg",
            
        }, 
        {
            title: "Soft Chapati",
            image: "/img/gallery/chapati.jpg",
           
        },
        {
            title: "Healthy Dawa",
            image: "/img/gallery/dawa.jpg",
           
        },
        {
            title: "Kenyan Githeri",
            image: "/img/gallery/githeri.jpg",
          
        },
        {
            title: "Soup and Matoke",
            image: "/img/gallery/matoke.jpg",
           
        },
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/piza.jpg",
           
        }, 
        {
            title: "Kenyan Samosa",
            image: "/img/gallery/samosa.jpg",
            
        },
        {
            title: "Pilau na Salad",
            image: "/img/gallery/pilau.jpg",
            
        },
        {
            title: "Kenya Samosa",
            image: "/img/gallery/samosa.jpg",
            
        },
        {
            title: "Ugali Sukuma",
            image: "/img/gallery/ugali.jpg",
        
        },
        {
            title: "Mukimo na nyama",
            image: "/img/gallery/mukimo.jpg",
           
        },
        {
            title: "Nyama Pilau",
            image: "/img/gallery/pilau.jpg",
            
        }
    ].sort(() => Math.random() - 0.5)

    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {/* <RecipeCard /> */}
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}
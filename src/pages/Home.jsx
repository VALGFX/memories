import Hero from "../components/Hero.jsx";
import LatestCollection from "../components/LatestCollection.jsx";
import OurPolicy from "../components/OurPolicy.jsx";
import NewsletterBox from "../components/NewsletterBox.jsx";

const Home = () => {
    return (
        <div>
            <Hero/>
            <LatestCollection/>
            <OurPolicy/>
            <NewsletterBox/>
        </div>
    )
}

export default Home;
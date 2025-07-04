// import Navbar from "../components/Navbar/Navbar";
// import Footer from "../components/Footer/Footer";

import AddMovieForm from "../components/AddMovie/AddMovie";
import Hero from "../components/Hero/Hero";
function CreateMovie(){
    return(
        <>
        {/* <Navbar /> */}
        <h2>Create Movie</h2>
        <Hero />
        <AddMovieForm />
        {/* <Footer /> */}
        </>
    )
}

export default CreateMovie;
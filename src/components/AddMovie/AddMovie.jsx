import { useContext, useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./AddMovie.module.css";
import { useNavigate } from "react-router-dom";
import MoviesContext from "../Constext/MoviesContext";

function AddMovieForm() {
    const [formData, setFormData] = useState({
        title: "",
        date: "",
    });

    const {movies, setMovies} = useContext(MoviesContext);

    const navigation = useNavigate();

    const [errors, setErrors] = useState({
        title: false,
        date: false,
    });

    // const { movies, setMovies } = props;
    const { title, date } = formData;

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    function validate() {
        let isValid = true;
        const newErrors = {
            title: false,
            date: false,
        };

        if (title.trim() === "") {
            newErrors.title = true;
            isValid = false;
        }

        if (date.trim() === "") {
            newErrors.date = true;
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    }

    function addMovie() {
        
        const movie = {
            id: "xyz",
            title: title,
            year: date,
            type: "Movie",
            poster: "https://picsum.photos/200/300",
        };
        setMovies([...movies, movie]);
        navigation("/");
        // Optional: reset form
        setFormData({ title: "", date: "" });
    }

    function handleSubmit(e) {
        e.preventDefault();
        validate() && addMovie();
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <input
                    className={styles.input_form}
                    id="title"
                    type="text"
                    value={title}
                    name="title"
                    onChange={handleChange}
                />
                {errors.title && <Alert>Title Wajib Diisi</Alert>}

                <input
                    className={styles.input_form}
                    id="date"
                    type="text"
                    value={date}
                    name="date"
                    onChange={handleChange}
                />
                {errors.date && <Alert>Date Wajib Diisi</Alert>}

                <button className={styles.button_form}>Add Movie</button>
            </form>
        </div>
    );
}

export default AddMovieForm;

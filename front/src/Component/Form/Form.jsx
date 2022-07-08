import {useState} from "react";

const Form = () => {

    const [formData, setFormData] = useState("");

    const handleChange = (e) => {
        setFormData(e.target.value);
    }

    const handleSubmit = () => {

        fetch("http://localhost:8000/api/personnes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify({
                name: formData
            })
        })
    }

    return(
        <form className="new-member-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Nom de l&apos;Argonaute</label>
            <input onChange={handleChange} id="name" name="name" type="text" placeholder="Charalampos"/>
            <button type="submit">Envoyer</button>
        </form>
    )
}

export default Form;
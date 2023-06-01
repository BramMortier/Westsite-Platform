import React, { useState } from "react";
import { nieuwsPostLabels } from "@config/dropdownMenus";
import { Input, DropdownMenu, Button, Textarea } from "@components";
import axios from "@config/axios";
import "./addNieuwsPostForm.scss";

const AddNieuwsPostForm = () => {
    const nieuwsPostInitialState = {
        title: "",
        description: "",
        label: "",
    };

    const [nieuwsPostFormData, setNieuwsPostFormData] = useState(nieuwsPostInitialState);
    const [nieuwsPostFormErrors, setNieuwsPostFormErrors] = useState({});
    const [nieuwsPostFormMessage, setNieuwsPostFormMessage] = useState(null);

    const handleNieuwsPostLabelChange = (selectedOption, name) => {
        setNieuwsPostFormData({ ...nieuwsPostFormData, [name]: selectedOption });
    };

    const handleNieuwsPostFormChange = (e) => {
        const { name, value } = e.target;

        setNieuwsPostFormData({
            ...nieuwsPostFormData,
            [name]: value,
        });
    };

    const handleNieuwsPostFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/newsposts", nieuwsPostFormData);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form className="add-nieuws-post-form" noValidate onSubmit={handleNieuwsPostFormSubmit}>
            <fieldset>
                <legend>Basis Informatie</legend>
                <div className="add-nieuws-post-form__row">
                    <div className="add-nieuws-post-form__group add-nieuws-post-form__group--full-width">
                        <label htmlFor="">Titel</label>
                        <Input
                            type="text"
                            id="addNieuwsPostTitle"
                            name="title"
                            value={nieuwsPostFormData.title}
                            onChange={handleNieuwsPostFormChange}
                            placeholder="Vul een titel in"
                        />
                    </div>
                    <div className="add-nieuws-post-form__group add-nieuws-post-form__group--full-width">
                        <label htmlFor="">Inhoud</label>
                        <Textarea
                            id="addNieuwsPostDescription"
                            name="description"
                            value={nieuwsPostFormData.description}
                            onChange={handleNieuwsPostFormChange}
                            placeholder="Stel je bericht op"
                        />
                    </div>
                </div>
            </fieldset>
            <fieldset>
                <legend>Extra Informatie</legend>
                <div className="add-nieuws-post-form__row">
                    <div className="add-nieuws-post-form__group add-nieuws-post-form__group--wide">
                        <label htmlFor="">Label</label>
                        <DropdownMenu type="stretched" options={nieuwsPostLabels} onOptionChange={handleNieuwsPostLabelChange} name="label" />
                    </div>
                </div>
            </fieldset>
            <div className="add-nieuws-post-form__submit">
                <Button submit={true} type="primary">
                    <img src="/icons/plus-dark.svg" alt="plus icon" />
                    Toevoegen
                </Button>
            </div>
        </form>
    );
};

export default AddNieuwsPostForm;

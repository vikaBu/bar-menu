import React from "react";
import {MenuItem} from "../Preview/Preview";

export const Settings = ({selectedTitle, setTitle}) => {
    const changeName = (event) => {
        setTitle(event.target.value)
    };
    return (
        <section>
            <h2>Settings</h2>
            <div>
                <label for  ="fname">First Name:</label>
                <input onChange ={changeName} type ="text" id="name" name ="fname" value={selectedTitle}/>
            </div>
        </section>
    );
};

export const AddItem =({selectedItem, setItem}) => {

    const changeItem = (event)=> {
        setItem(event.target.value)
    };

    return (
        <section>
            <label for ="fname">New Item</label>
            <input onChange ={changeItem} type = "text" id ="fname" name = "fname" value={selectedItem}/>
        </section>
    );
};
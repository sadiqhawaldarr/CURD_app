import { useEffect, useState } from 'react';
import { getPost, postData } from '../Api/PostApi';
import './Post.css';



export const UpdatecardPopup = ({ data, setData }) => {
    const [addData, setAddData] = useState({
        title: "",
        body: ""
    });

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setAddData((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })

    }


    const addPostData = async () => {
        const res = await postData(addData);
        console.log("res", res)
        if ((res.status === 201)) {
            setData(prevData => [...prevData, res.data]); 
            setAddData({ title: "", body: "" });
        }
    }
    //form submit

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addPostData();
    }

    return (
        <>
            {/* --- Input Form --- */}
            <form className="card-form" onSubmit={handleFormSubmit} >
                <input
                    type="text"
                    id='title'
                    name='title'
                    placeholder="Enter Title"
                    value={addData.title}
                    onChange={handleInputChange}
                />
                <textarea
                    type="text"
                    id='title'
                    name='body'
                    placeholder="Enter Description"
                    value={addData.body}
                    onChange={handleInputChange}
                ></textarea>
                <button type="submit" className="btn-add">
                    ➕ Add Card
                </button>
            </form>
        </>
    )
}


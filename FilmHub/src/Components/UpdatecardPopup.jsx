import { useEffect, useState } from 'react';
import { getPost } from '../Api/PostApi';
import './Post.css';



export const UpdatecardPopup = () => {

    const [data, setDate] = useState([]);

    return (
        <>
            {/* --- Input Form --- */}
            <form className="card-form" >
                <input
                    type="text"
                    placeholder="Enter Title"
                // value={title}
                // onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Enter Description"
                // value={body}
                // onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <button type="submit" className="btn-add">
                    ➕ Add Card
                </button>
            </form>               
            </>
    )
}


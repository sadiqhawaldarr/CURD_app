import { useEffect, useState } from 'react';
import { getPost } from '../Api/PostApi';
import './Post.css';
import { UpdatecardPopup } from './UpdatecardPopup';



export const Post = () => {

    const [data, setDate] = useState([]);

    const getPostData = async () => {
        const res = await getPost();
        console.log(res.data)
        setDate(res.data)
    }

    useEffect(() => {
        getPostData();
    }, [])

    return (
        <>

            <UpdatecardPopup/>
            <section className='main-card'>
                <ul>
                    {data.map((curElem) => {
                        const { id, title, body } = curElem;
                        return (
                            <li key={id} className="card">

                                <p className='card-title'>{title}</p>
                                <p className='card-body'>{body}</p>
                                <div className='card-buttons'>
                                    <button className='btn-edit'>Edit</button>
                                    <button className='btn-delete'>Delete</button>
                                </div>
                            </li>


                        );
                    })}
                </ul>
            </section>
        </>
    )
}


import { useEffect, useState } from 'react';
import { getPost } from '../Api/PostApi';


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
        <section className='Main-card'>

            <ul>
                {data.map((curElem) =>{
                const { id, title, body } = curElem;
                    return (
                    <li key={id}>
                        <p className='card-title'>Title: {title }</p>
                        <p className='card-body'>Body: {body }</p>
                        <button className='btn-edit'>Edit</button>
                        <button className='btn-delete'>Delete</button>
                    </li>
                    )
                })}
            </ul>

        </section>
    )
}


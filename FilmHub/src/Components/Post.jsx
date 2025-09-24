import { useEffect, useState } from 'react';
import { getPost } from '../Api/PostApi';
import { deletePost } from '../Api/PostApi';
import './Post.css';
import { UpdatecardPopup } from './UpdatecardPopup';



export const Post = () => {

    const [data, setData] = useState([]);
    const [deletedata, setDeletedata] = useState([]);

    //Finctionality for get the data

    const getPostData = async () => {
        const res = await getPost();
        console.log(res.data)
        setData(res.data)
    }

    useEffect(() => {
        getPostData();
    }, [])

    //Finctionality for Delete the data

    const handleDeletePost = async (id) => {
        try {
            const res = await deletePost(id);
            if (res.status === 200){
                const newUpdatePosts = data.filter((curPost) =>{
                    return curPost.id != id;

                });
                setData(newUpdatePosts);
            }else{
                console.log("Failed to delect the card:", res.status )
            }
            } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <>

            <UpdatecardPopup 
            data={data}
            setData={setData}
            />
            <section className='main-card'>
                <ul>
                    {data.map((curElem) => {
                        const { id, title, body } = curElem;
                        return (
                           <li key={`${id}-${Math.random()}`} className="card">

                                <p className='card-title'>{title}</p>
                                <p className='card-body'>{body}</p>
                                <div className='card-buttons'>
                                    <button className='btn-edit'>Edit</button>
                                    <button className='btn-delete'  onClick={()=>handleDeletePost(id)}>Delete</button>
                                </div>
                            </li>


                        );
                    })}
                </ul>
            </section>
        </>
    )
}


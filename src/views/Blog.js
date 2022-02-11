import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Blog = () => {

    const { id } = useParams();

    const [posts, setPosts] = useState([]);

    const [post, setPost] = useState(null);

    useEffect(() => {
        getPosts();

        if(id > 0) getPostById(id);


    }, [])

    useEffect(() => {
        if(id > 0) getPostById(id);
    }, [id]) 

    const getPosts = async () => {
        try {

            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await response.json();

            setPosts(data);

        } catch (error) {
            console.log(error)
        }
    }

    const getPostById = async id => {
        try {

            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const data = await response.json();

            setPost(data);

        } catch (error) {
            console.log(error)
        }
    } 

    return (
        <>
            {/* Header - set the background image for the header in the line below*/}
            <header
                className="py-5 bg-image-full"
                style={{
                    backgroundImage: 'url("https://source.unsplash.com/wfh8dDlNFOk/1600x900")'
                }}
            >
                <div className="text-center my-5">
                    <h1 className="text-white fs-3 fw-bolder">Blog</h1>
                    <p className="text-white-50 mb-0">Landing Page Template</p>
                </div>
            </header>
            {/* Content section*/}
            <section className="py-5">
                <div className="container my-5">
                    {
                        post !== null && (
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h2 className='card-title'>{post.title}</h2>
                                            <p className="card-text">{post.body}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    <div className="row">
                        {
                            posts.map((post) => {
                                return (
                                    <div className="col-md-4 py-3" key={post.id}>
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    {post.title}
                                                </h5>
                                                <p className="card-text">
                                                    {post.body}
                                                </p>
                                                <Link to={"/blog/"+post.id} className="btn btn-primary">
                                                    Read more
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            {/* Image element - set the background image for the header in the line below*/}
            <div
                className="py-5 bg-image-full"
                style={{
                    backgroundImage: 'url("https://source.unsplash.com/4ulffa6qoKA/1200x800")'
                }}
            >
                {/* Put anything you want here! The spacer below with inline CSS is just for demo purposes!*/}
                <div style={{ height: "20rem" }} />
            </div>
            {/* Content section*/}
            <section className="py-5">
                <div className="container my-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <h2>Engaging Background Images</h2>
                            <p className="lead">
                                The background images used in this template are sourced from
                                Unsplash and are open source and free to use.
                            </p>
                            <p className="mb-0">
                                I can't tell you how many people say they were turned off from
                                science because of a science teacher that completely sucked out all
                                the inspiration and enthusiasm they had for the course.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer*/}
            <footer className="py-5 bg-dark">
                <div className="container">
                    <p className="m-0 text-center text-white">
                        Copyright © Your Website 2021
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Blog;
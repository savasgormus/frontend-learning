import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Back from '../assets/BackArrow';
import styles from "./Details.module.css";

const Details = () => {
    const params = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/1")
            .then((res) => res.json())
            .then((json) => setProduct(json))
    }, [])


    console.log(params.id);
    return (
        <div>
            <h1>Details Page</h1>
            <Back />
            <div className={styles.detailsWrapper}>
                <p>{product?.id}</p>
                <p>{product?.title}</p>
                <p>{product?.description}</p>
                <p>{product?.category}</p>
                <p>{product?.price}</p>
                <p>{product?.rating?.rate}</p>
                <p>{product?.raing?.count}</p>
                <img className={styles.detailsImage} src={product?.image} alt={product?.title} />
            </div>
        </div>
    )
}

export default Details
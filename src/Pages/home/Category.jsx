import React from 'react';
import topSellerImg from '../../assets/images/right-arrow-icon.svg';
import starsImg from '../../assets/images/five-stars.png';
import { Link } from 'react-router-dom';

export default function Category({ title, category, products }) {
    return (
        <>
            <section className="category padding-block-650">
                <div className="container">
                    <div className="flex justify-between">
                        <h2 className="secondary-heading fs-700 sm-fs-650">{title}</h2>
                        <div className=''>
                            <Link to={`/products/${category}`}>
                                <div className='flex items-center'>
                                    See All &ensp; <span><img src={topSellerImg} alt="" /></span>
                                </div>

                            </Link> </div>
                    </div>
                    <div className="even-columns justify-center mt-2">
                        {
                            products.map((p) => {
                                return (
                                    <Link to={`/product/${p.id}`} key={p.id} className="card-link">
                                        <div className="card" key={p.id}>
                                            <div className="img-holder bg-silver m-auto">
                                                <img src={`../assets/images/products/product-1.png`} alt="" />
                                            </div>
                                            <div className="product-info mt-2">
                                                <h2 className="fs-500 fw-bold">{p.name}</h2>
                                                <h3 className="fs-300 fw-regular text-gray">{p.description}</h3>
                                                <div className="price-review flex justify-between w-full mt-1">
                                                    <p className="fs-400">${p.price}</p>
                                                    <img src={starsImg} alt="" />
                                                </div>
                                                <button className="btn bg-white text-primary w-full mt-1">ADD TO CART</button>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

import Products from "./ProductsPage";


export default function Content({products}) {
    return (

        <>
            <section className="products-section padding-block-800">
                <div className="container">
                    <div className="even-columns">
                        <aside className="filter-">
                            <div className="flex justify-between items-center">
                                <span>Filters</span>
                                <span><button className="btn clearBtn">Clear All</button></span>
                            </div>
                            <div className="group mt-3">
                                <h2 className="fw-bold fs-600">Product Categories</h2>
                                <div className="devider"></div>

                                <ol role="list" className="mt-2 p-1">
                                    <li className="flex justify-between ml-2 border-b-1 p-2"><a href=""
                                        className="fs-300 text-gray fw-regular">Catgory 1</a>
                                        <span>+</span>
                                    </li>
                                    <li className="flex justify-between ml-2 border-b-1 p-2"><a href=""
                                        className="fs-300 text-gray fw-regular">Catgory 2</a>
                                        <span>+</span>
                                    </li>
                                    <li className="flex justify-between ml-2 border-b-1 p-2"><a href=""
                                        className="fs-300 text-gray fw-regular">Catgory 3</a>
                                        <span>+</span>
                                    </li>
                                    <li className="flex justify-between ml-2 border-b-1 p-2"><a href=""
                                        className="fs-300 text-gray fw-regular">Catgory 4</a>
                                        <span>+</span>
                                    </li>
                                    <li className="flex justify-between ml-2 border-b-1 p-2"><a href=""
                                        className="fs-300 text-gray fw-regular">Catgory 5</a>
                                        <span>+</span>
                                    </li>
                                    <li className="flex justify-between ml-2 border-b-1 p-2"><a href=""
                                        className="fs-300 text-gray fw-regular">Catgory 6</a>
                                        <span>+</span>
                                    </li>
                                    <li className="flex justify-between ml-2 border-b-1 p-2"><a href=""
                                        className="fs-300 text-gray fw-regular">Catgory 7</a>
                                        <span>+</span>
                                    </li>
                                    <li className="flex justify-between ml-2 border-b-1 p-2"><a href=""
                                        className="fs-300 text-gray fw-regular">Catgory 8</a>
                                        <span>+</span>
                                    </li>
                                    <li className="flex justify-between ml-2 border-b-1 p-2"><a href=""
                                        className="fs-300 text-gray fw-regular">Catgory 9</a>
                                        <span>+</span>
                                    </li>
                                    <li className="flex justify-between ml-2 border-b-1 p-2"><a href=""
                                        className="fs-300 text-gray fw-regular">Catgory 10</a>
                                        <span>+</span>
                                    </li>
                                </ol>
                            </div>
                            <div className="filter-price group pt-3">
                                <h2 className="fw-bold fs-600">Filter by Price </h2>

                                <div className="">
                                    <div>
                                        <input type="range" name="" id="" />
                                    </div>
                                    <div className="flex items-center overflow-v m-2">
                                        <input className="t-center m-1 overflow-v" type="number" id="max" />
                                        <input className="t-center m-1 overflow-v" type="number" id="min" />
                                        <button className="btn bg-red text-white">Filter</button>
                                    </div>

                                </div>
                            </div>
                            <div className="group mt-3">
                                <h2 className="fw-bold fs-600">filter by Brand</h2>


                                <ol role="list" className="mt-2 p-1">
                                    <li className="flex justify-between ml-2 border-b-1 p-2"><a href=""
                                        className="fs-300 text-gray fw-regular">Brand 1</a>
                                        <span>+</span>
                                    </li>
                                    <li className="flex justify-between ml-2 border-b-1 p-2"><a href=""
                                        className="fs-300 text-gray fw-regular">Brand 2</a>
                                        <span>+</span>
                                    </li>
                                    <li className="flex justify-between ml-2 border-b-1 p-2"><a href=""
                                        className="fs-300 text-gray fw-regular">Brand 3</a>
                                        <span>+</span>
                                    </li>
                                    <li className="flex justify-between ml-2 border-b-1 p-2"><a href=""
                                        className="fs-300 text-gray fw-regular">Brand 4</a>
                                        <span>+</span>
                                    </li>
                                    <li className="flex justify-between ml-2 border-b-1 p-2"><a href=""
                                        className="fs-300 text-gray fw-regular">Brand 5</a>
                                        <span>+</span>
                                    </li>
                                    <li className="flex justify-between ml-2 border-b-1 p-2"><a href=""
                                        className="fs-300 text-gray fw-regular">Brand 6</a>
                                        <span>+</span>
                                    </li>
                                    <li className="flex justify-between ml-2 border-b-1 p-2"><a href=""
                                        className="fs-300 text-gray fw-regular">Brand 7</a>
                                        <span>+</span>
                                    </li>
                                    <li className="flex justify-between ml-2 border-b-1 p-2"><a href=""
                                        className="fs-300 text-gray fw-regular">Brand 8</a>
                                        <span>+</span>
                                    </li>
                                    <li className="flex justify-between ml-2 border-b-1 p-2"><a href=""
                                        className="fs-300 text-gray fw-regular">Brand 9</a>
                                        <span>+</span>
                                    </li>
                                    <li className="flex justify-between ml-2 border-b-1 p-2"><a href=""
                                        className="fs-300 text-gray fw-regular">Brand 10</a>
                                        <span>+</span>
                                    </li>
                                </ol>
                            </div>
                            <div className="group mt-3">
                                <h2 className="fw-bold fs-600">Filter by Tags </h2>

                                <ol role="list" className="mt-2 p-1">
                                    <li className="flex justify-between ml-2 border-b-1 p-2"><a href="" className="fs-300 text-gray fw-regular">Tag
                                        1</a> <span>+</span>
                                    </li>
                                    <li className="flex justify-between ml-2 border-b-1 p-2"><a href="" className="fs-300 text-gray fw-regular">Tag
                                        2</a> <span>+</span>
                                    </li>
                                    <li className="flex justify-between ml-2 border-b-1 p-2"><a href="" className="fs-300 text-gray fw-regular">Tag
                                        3</a> <span>+</span>
                                    </li>
                                    <li className="flex justify-between ml-2 border-b-1 p-2"><a href="" className="fs-300 text-gray fw-regular">Tag
                                        4</a> <span>+</span>
                                    </li>
                                    <li className="flex justify-between ml-2 border-b-1 p-2"><a href="" className="fs-300 text-gray fw-regular">Tag
                                        5</a> <span>+</span>
                                    </li>
                                    <li className="flex justify-between ml-2 border-b-1 p-2"><a href="" className="fs-300 text-gray fw-regular">Tag
                                        6</a> <span>+</span>
                                    </li>
                                    <li className="flex justify-between ml-2 border-b-1 p-2"><a href="" className="fs-300 text-gray fw-regular">Tag
                                        7</a> <span>+</span>
                                    </li>
                                    <li className="flex justify-between ml-2 border-b-1 p-2"><a href="" className="fs-300 text-gray fw-regular">Tag
                                        8</a> <span>+</span>
                                    </li>
                                    <li className="flex justify-between ml-2 border-b-1 p-2"><a href="" className="fs-300 text-gray fw-regular">Tag
                                        9</a> <span>+</span>
                                    </li>
                                    <li className="flex justify-between ml-2 border-b-1 p-2"><a href="" className="fs-300 text-gray fw-regular">Tag
                                        10</a>
                                        <span>+</span>
                                    </li>
                                </ol>
                            </div>
                        </aside>

                        <div className="ml-2">
                            <div className="flex justify-between">
                                <span className="fs-500 text-gray fw-light">Showing 12 Result from total 230</span>
                                <select name="" id="" className="p-1">
                                    <option value="">Popularity</option>
                                    <option value="">Price</option>
                                    <option value="">Name</option>
                                    <option value="">Best Selling</option>
                                </select>
                            </div>
                        
                            <div className="card-columns mt-4">
                                {
                                    products.length === 0 ?  <p className="m-auto">No Products Within this category</p> :  
                                     products.map((product) => {
                                        return (
                                            <div className="card" key={product.id}>
                                                <div className="img-holder bg-silver m-auto">
                                                    <img className="m-auto" src="../assets/images/products/product-1.png" alt="" />
                                                </div>
                                                <div className="product-info">
                                                    <h2 className="fs-600">{product.name}</h2>
                                                    <h3 className="fs-300 fw-regular text-gray">{product.description}</h3>
                                                    <div className="price-review flex justify-between w-full mt-1">
                                                        <p className="fs-400">${product.price}</p>
                                                        <img src="../assets/images/five-stars.png" alt="" />

                                                    </div>
                                                    <button className="btn bg-white text-primary w-full mt-1">ADD TO CART</button>
                                                </div>
                                            </div>
                                        )
                                    })
                                  
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
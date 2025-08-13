import React from 'react'
import CarouselHome from '../ui/CarouselHome'
import products from '../../api/productos.json'
const Inicio = () => {
    return (
        <div>
            <CarouselHome />
            <div className="products">
                <h2>Proudctos destacados</h2>
                <div className="products-grid">
                    {products.slice(0, 3).map((product) =>
                        <div className="card" key={product.id}>
                            <div className="card-image">
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className="card-content">
                                <h3 className="card-title">{product.title}</h3>
                                <p className="card-description">{product.description}</p>
                                <div className="card-footer">
                                    <span className="category">{product.category}</span>
                                    <div className="price-rating">
                                        <span className="price">${product.price}</span>
                                        <span className="rating">⭐ {product.rating.rate}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Inicio

import React from 'react'
import Slider from 'react-slick'
const CarouselHome = () => {
    const settings = {
        dots: true,           // puntos de navegación
        infinite: true,       // loop infinito
        speed: 500,           // velocidad transición
        slidesToShow: 1,      // cantidad de slides visibles
        slidesToScroll: 1,    // cuántos se mueven por vez
        autoplay: true,       // auto play
        autoplaySpeed: 3000,  // tiempo entre imágenes
        arrows: true          // flechas de navegación
    };

    const slides = [
        {
            "img": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=800&fit=crop&q=80",
            "text": "Moda para todos"
        },
        {
            "img": "https://fimstar.net/wp-content/uploads/2023/02/importar-aparatos-electronicos-baterias.jpg",
            "text": "Tecnología al mejor precio"
        },
        {
            "img": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&h=800&fit=crop&q=80",
            "text": "Elegancia en cada detalle"
        }
    ];


    return (
        <Slider {...settings}>
            {slides.map((slide, index) => (
                <div key={index} className='content-slide'>
                    <div className="slideHome" style={{ backgroundImage: `url(${slide.img})` }}>
                        <h2>{slide.text}</h2>
                    </div>
                </div>
            ))}

        </Slider>
    )
}

export default CarouselHome

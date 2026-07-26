import { Carousel } from "flowbite-react";

export function Carrusel(){
    const slides = [
        {
          id: 1,
          src: '/img-slide1.png',
          alt: "Primera imagen",
          texto: "Registra las plantas de tu jardin."
        },
        {
          id: 2,
          src: '/img-slide2.png',
          alt: "Segunda imagen",
          texto: "Recibe recomendaciones para un mejor cuidado de tus plantas."
        },
        {
          id: 3,
          src: '/img-slide3.png',
          alt: "Tercera imagen",
          texto: "Descubre temas acerca de las plantas y arboles por medio de un juego educativo"
        }
      ];
    return (
        <div className="max-w-2x1 mx-auto h-70 sm:h-68 md:h-60 lg-h-64 xl:h-[22rem] 2xl:h-[24rem]">
          <Carousel className="h-full">
              {slides.map((slide) => (
                  <div key={slide.id} className='flex flex-col items-center jutify-center text-center p-4 h-full'>
                      <img src={slide.src} alt={slide.alt} className='w-2/3 sm:w-3/4 h-auto max-h-40 sm:max-h-48 md:max-h-52 lg:max-h-56 object-contain' />
                      <p className="mt-5 text-sm sm:text-base text-gray-700">{slide.texto}</p>
                  </div>
              ))}
          </Carousel>
        </div>
    )
}
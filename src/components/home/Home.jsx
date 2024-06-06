import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
import "./home.css";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Máximo de tarjetas por página

  // Datos simulados para 20 tarjetas
  const totalItems = 20;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const cardData = [
    { id: 1, title: "Girl with a pearl earring", image: "https://i.blogs.es/c5d6f7/la-joven-de-la-perla-al-detalle/1366_2000.jpeg", description: "Johannes Vermeer" },
    { id: 2, title: "El grito", image: "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvZWwtZ3JpdG8tZWR2YXJkLW11bmNoLTE4OTMuanBnIiwicmVzaXplLDIwMDAsMjAwMCJdfQ.ugWfufr00YMOEH4vRKvOmvvlljydK4mOoH-dpe8vjCE.jpg", description: "Edward Munch" },
    { id: 3, title: "Las meninas", image: "https://c4.wallpaperflare.com/wallpaper/940/16/53/arte-las-meninas-pintura-wallpaper-preview.jpg", description: "Diego Velazquez" },
    { id: 4, title: "La noche estrellada", image: "https://hips.hearstapps.com/hmg-prod/images/la-noche-estrellada1-1586872678.jpg", description: "Vincent Van Gogh" },
    { id: 5, title: "La Gioconda", image: "https://p4.wallpaperbetter.com/wallpaper/783/16/970/famous-paintings-s-hd-famous-paintings-s-hd-wallpaper-preview.jpg", description: "Leonardo Da Vinci" },
    { id: 6, title: "Sol Naciente", image: "https://hips.hearstapps.com/hmg-prod/images/impression-sunrise-by-claude-monet-paris-mus-c3-a9e-marmottan-news-photo-1652352017.jpg?resize=980:*", description: "Claude Monet" },
    { id: 7, title: "El nacimiento de Venus", image: "https://hips.hearstapps.com/hmg-prod/images/painting-titled-the-birth-of-venus-by-sandro-botticelli-news-photo-1652351940.jpg?resize=980:*", description: "Botticelli" },
    { id: 8, title: "El jardin de las delicias", image: "https://hips.hearstapps.com/hmg-prod/images/oil-on-panel-220-x-389-cm-museo-del-prado-madrid-spain-news-photo-1652350791.jpg?resize=980:*", description: "El Bosco" },
    { id: 9, title: "Los fusilamientos", image: "https://hips.hearstapps.com/hmg-prod/images/museum-worker-wearing-a-face-mask-and-shield-stands-next-to-news-photo-1652350934.jpg?resize=980:*", description: "Francisco de Goya" },
    { id: 10, title: "El gran siglo", image: "https://hips.hearstapps.com/hmg-prod/images/magritte-gran-siglo-0-1631622123.jpg?resize=980:*", description: "Rene Magritte" },
    { id: 11, title: "La muerte de Marat", image: "https://hips.hearstapps.com/hmg-prod/images/jean-paul-marat-murdered-in-his-bath-13-july-1793-painting-news-photo-1676884882.jpg?resize=980:*", description: "Jacques-Louis David" },
    { id: 12, title: "La ronda de noche", image: "https://hips.hearstapps.com/hmg-prod/images/the-company-of-frans-banning-cocq-and-willem-van-news-photo-1676885087.jpg?resize=980:*", description: "Rembrandt" },
    { id: 13, title: "La libertad guiando al pueblo", image: "https://hips.hearstapps.com/hmg-prod/images/eugene-delacroix-french-romantic-painter-liberty-leading-news-photo-1676892718.jpg?resize=980:*", description: "Eugéne Delacroix" },
    { id: 14, title: "La gran ola de Kanagaza", image: "https://hips.hearstapps.com/hmg-prod/images/also-known-as-the-great-wave-the-print-is-from-the-series-news-photo-1676888508.jpg?resize=980:*", description: "Katsushika Hokusai" },
    { id: 15, title: "La ultima cena", image: "https://hips.hearstapps.com/hmg-prod/images/the-last-supper-15th-century-mural-painting-in-milan-news-photo-1676890788.jpg?resize=980:*", description: "Leonardo da Vinci" },
    { id: 16, title: "Noctambulos", image: "https://hips.hearstapps.com/hmg-prod/images/edward-hopper-nighthawks-oil-on-canvas-84-1-x-152-4-cm-art-news-photo-1676891191.jpg?resize=980:*", description: "Edwar Hopper" },
    { id: 17, title: "La balsa de Medusa", image: "https://hips.hearstapps.com/hmg-prod/images/jean-louis-theodore-gericault-the-raft-of-the-medusa-1819-news-photo-1698147643.jpg?resize=980:*", description: "Théodore Géricault" },
    { id: 18, title: "La primavera", image: "https://hips.hearstapps.com/hmg-prod/images/primavera-by-sandro-botticelli-news-photo-1689195689.jpg?resize=980:*", description: "Sandro Boticelli" },
    { id: 19, title: "Judith y Holofernes", image: "https://hips.hearstapps.com/hmg-prod/images/rome-galleria-nazionale-darte-antica-di-palazzo-barberini-news-photo-1707826548.jpg?resize=980:*", description: "Caravaggio" },
    { id: 20, title: "La Venus de Urbino", image: "https://hips.hearstapps.com/hmg-prod/images/obras-de-arte-famosas-6661cd1823954.jpg?resize=980:*", description: "Tiziano" },
  ];

  // Datos para el carrusel
  const carouselData = [
    {
      src: "https://deepdreamgenerator.com/storage/fast_queue/temp_images/536086a65cf784b78a8af7645aa3be49efb96d0c.jpg",
      caption:
        "Sumérgete en la emoción de las subastas de arte: ¡cada obra tiene una historia que contar!",
    },
    {
      src: "https://deepdreamgenerator.com/storage/fast_queue/temp_images/1fd1ac7bac495752f95259edf8dd64ce1c9f68fe.jpg",
      caption:
        "¡Descubre la emoción de la subasta! Hazte con una pieza única en nuestra colección exclusiva",
    },
    {
      src: "https://deepdreamgenerator.com/storage/fast_queue/temp_images/4e0761140ccfe9c10d12ea4755547f2e06183b82.jpg",
      caption:
        "Sumérgete en el mundo del arte con nuestras subastas. Encuentra tu próxima joya artística",
    },
  ];

  // Calculando tarjetas para la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCards = cardData.slice(indexOfFirstItem, indexOfLastItem);

  // Cambiar página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Container className="text-center my-5">
      <div className="title-wrapper">
        <img
          src="https://cdn-icons-png.flaticon.com/512/103/103461.png"
          alt="Left"
          className="title-image"
        />
          <h1 className="welcome-title display-4">
            Welcome to <br />{" "}
            <span className="gallery-title">Gallery Gavel</span>
          </h1>
          <img
            src="https://cdn-icons-png.flaticon.com/512/103/103461.png"
            alt="Right"
            className="title-image flipped"
          />
        </div>

        <div className="auction-header">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1076/1076724.png"
            alt="Left"
            className="title-image2"
          />
          <p className="collection-text lead">Artwork Auction</p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1076/1076724.png"
            alt="Right"
            className="title-image2 flipped"
          />
        </div>
      </Container>
      <Container className="carousel-wrapper">
        <Carousel>
          {carouselData.map((item, index) => (
            <Carousel.Item key={`carousel-item-${index}`}>
              <img
                className="d-block w-100"
                src={item.src}
                alt={item.alt}
                style={{ height: "485px", objectFit: "fill" }}
              />
              <Carousel.Caption>
                <h3>{item.caption}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
      <Container className="cards-container">
        {currentCards.map((card) => (
          <Card
            key={card.id}
            className="m-3 shadow-sm"
            style={{ width: "18rem" }}
          >
            <Card.Img variant="top" src={card.image} className="card-image" />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.description}</Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        ))}
      </Container>
      <Container className="d-flex justify-content-center mt-4">
        <Pagination>
          {Array.from({ length: totalPages }, (_, i) => (
            <Pagination.Item
              key={i + 1}
              active={i + 1 === currentPage}
              onClick={() => paginate(i + 1)}
            >
              {i + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </Container>
    </div>
  );
};

export default Home;
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
  const cardData = Array.from({ length: totalItems }, (_, i) => ({
    id: i + 1,
    title: `Card Title ${i + 1}`,
    image: `https://via.placeholder.com/150`,
    description: `Description for card ${i + 1}`,
  }));

  // Datos para el carrusel
  const carouselData = [
    {
      src: "https://deepdreamgenerator.com/storage/fast_queue/temp_images/536086a65cf784b78a8af7645aa3be49efb96d0c.jpg",
      caption: "Sumérgete en la emoción de las subastas de arte: ¡cada obra tiene una historia que contar!",
    },
    {
      src: "https://deepdreamgenerator.com/storage/fast_queue/temp_images/1fd1ac7bac495752f95259edf8dd64ce1c9f68fe.jpg",
      caption: "¡Descubre la emoción de la subasta! Hazte con una pieza única en nuestra colección exclusiva",
    },
    {
      src: "https://deepdreamgenerator.com/storage/fast_queue/temp_images/4e0761140ccfe9c10d12ea4755547f2e06183b82.jpg",
      caption: "Sumérgete en el mundo del arte con nuestras subastas. Encuentra tu próxima joya artística",
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
            alt="Left Image"
            className="title-image"
          />
          <h1 className="welcome-title display-4">
            Welcome to <br />{" "}
            <span className="gallery-title">Gallery Gavel</span>
          </h1>
          <img
            src="https://cdn-icons-png.flaticon.com/512/103/103461.png"
            alt="Right Image"
            className="title-image flipped"
          />
        </div>

        <div className="auction-header">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1076/1076724.png"
            alt="Left Image"
            className="title-image2"
          />
          <p className="collection-text lead">Artwork Auction</p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1076/1076724.png"
            alt="Right Image"
            className="title-image2 flipped"
          />
        </div>
      </Container>
      <Container className="carousel-wrapper">
        <Carousel>
          {carouselData.map((item, index) => (
            <Carousel.Item key={index}>
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
            <Card.Img variant="top" src={card.image} />
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
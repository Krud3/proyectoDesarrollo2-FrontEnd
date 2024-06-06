import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
import { getToken } from "../../auth"; // Asegúrate de ajustar la ruta si auth.js está en otro directorio
import "./home.css";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [artworks, setArtworks] = useState([]);
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

  // Calculando tarjetas para la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCards = cardData.slice(indexOfFirstItem, indexOfLastItem);

  // Cambiar página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchArtworks = async () => {
      const token = await getToken('facil', '123facil123');
      if (token) {
        try {
          const response = await axios.get('https://ds2-backend-096a70ca1369.herokuapp.com/auction_app/v1/api/artworks/', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setArtworks(response.data);
        } catch (error) {
          console.error('Error fetching artworks:', error);
        }
      }
    };

    fetchArtworks();
  }, []);

  return (
    <div>
      <Container className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img
              src="https://s.superbid.net/image/f9/53/f953b395-e158-4da0-8a4f-9c4e7199b506.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://s.superbid.net/image/f9/53/f953b395-e158-4da0-8a4f-9c4e7199b506.png"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://s.superbid.net/image/f9/53/f953b395-e158-4da0-8a4f-9c4e7199b506.png"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      <Container className="cards-container">
        {currentCards.map((card) => (
          <Card key={card.id} style={{ width: "18rem", margin: "10px" }}>
            <Card.Img variant="top" src={card.image} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.description}</Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        ))}
        {artworks.map((artwork) => (
          <div key={artwork.id}>
            <h3>{artwork.title}</h3>
            <p>{artwork.description}</p>
          </div>
        ))}
      </Container>
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
    </div>
  );
};
export default Home;

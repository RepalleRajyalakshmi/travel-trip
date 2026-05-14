import { useNavigate } from "react-router-dom";

import "./index.css";

const placesList = [
  {
    id: 1,
    name: "Goa",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
    price: "₹15,000",
  },

  {
    id: 2,
    name: "Manali",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
    price: "₹20,000",
  },

  {
    id: 3,
    name: "Maldives",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
    price: "₹50,000",
  },

  {
    id: 4,
    name: "Paris",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    price: "₹75,000",
  },

  {
    id: 5,
    name: "Ooty",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5",
    price: "₹12,000",
  },

  {
    id: 6,
    name: "Kashmir",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d",
    price: "₹35,000",
  },

  {
    id: 7,
    name: "Bali",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    price: "₹60,000",
  },

  {
    id: 8,
    name: "Switzerland",
    image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95",
    price: "₹1,20,000",
  },
];

function Places() {
  const navigate = useNavigate();

  const goToTrip = () => {
    navigate("/trip");
  };

  return (
    <div className="places-container">
      <h1 className="places-heading">Popular Places</h1>

      <div className="places-list">
        {placesList.map((eachPlace) => (
          <div className="place-card" key={eachPlace.id} onClick={goToTrip}>
            <img
              src={eachPlace.image}
              alt={eachPlace.name}
              className="place-image"
            />

            <div className="place-content">
              <h1 className="place-name">{eachPlace.name}</h1>

              <p className="place-price">{eachPlace.price}</p>

              <button className="book-btn">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Places;

/*import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { increaseQuantity, decreaseQuantity, addItem, removeItem } from "./cartSlice";

export const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate
  const cartItems = useSelector((state) => state.cart.items);
  const [products, setProducts] = useState([]);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products.slice(0, 8)); // Limit to 8 products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Navigate to the product detail page
  const handleViewDetails = (id) => {
    navigate(`/product/${id}`);
  };

  // Add item to cart
  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  // Remove item from cart
  const handleRemoveFromCart = (productId) => {
    dispatch(removeItem(productId));
  };

  /* Remove from home page (optional)
  const handleRemoveFromHomePage = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  // Render star rating
  const renderStars = (rating) => {
    return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>Available Beauty Products</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 2fr)", // 4 items per row
          gap: "20px",
          padding: "20px",
        }}
      >
        {products.map((product) => {
          const isInCart = cartItems.some((item) => item.id === product.id);

          return (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                padding: "15px",
                borderRadius: "8px",
                textAlign: "center",
                boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
                backgroundColor: "#fff",
              }}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>Category: {product.category}</p>
              <p>
                <b>Price:</b> Rs.{product.price} &nbsp;
                <span style={{ color: "red" }}>
                  ({product.discountPercentage}% OFF)
                </span>
              </p>
              <p>Rating: {renderStars(product.rating)}</p>

              {isInCart ? (
                <>
                  <button
                    onClick={() => dispatch(decreaseQuantity(product.id))}
                    style={{
                      backgroundColor: "#ccc",
                      border: "none",
                      padding: "5px 10px",
                      cursor: "pointer",
                      margin: "5px",
                    }}
                  >
                    -
                  </button>
                  <button
                    onClick={() => dispatch(increaseQuantity(product.id))}
                    style={{
                      backgroundColor: "#ccc",
                      border: "none",
                      padding: "5px 10px",
                      cursor: "pointer",
                      margin: "5px",
                    }}
                  >
                    +
                  </button>
                
                  <button
                    onClick={() => {
                      handleRemoveFromCart(product.id);
            
                    }}
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      cursor: "pointer",
                      marginTop: "10px",
                    }}
                  >
                    Remove
                  </button>
                </>
              ) : (
                <button
                  onClick={() => handleAddToCart(product)}
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    cursor: "pointer",
                    marginTop: "10px",
                  }}
                >
                  Add to Cart
                </button>
              )}

              <button
                onClick={() => handleViewDetails(product.id)}
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                View Details
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;*/
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { increaseQuantity, decreaseQuantity, addItem, removeItem } from "./cartSlice";

export const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const [products, setProducts] = useState([]);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products.slice(0, 8)); // Limit to 8 products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Navigate to the product detail page
  const handleViewDetails = (id) => {
    navigate(`/product/${id}`);
  };

  // Add item to cart
  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  // Remove item from cart
  const handleRemoveFromCart = (productId) => {
    dispatch(removeItem(productId));
  };

  // Render star rating
  const renderStars = (rating) => {
    return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>Available Beauty Products</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 2fr)", // 4 items per row
          gap: "20px",
          padding: "20px",
        }}
      >
        {products.map((product) => {
          const cartItem = cartItems.find((item) => item.id === product.id);
          const isInCart = Boolean(cartItem);

          return (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                padding: "15px",
                borderRadius: "8px",
                textAlign: "center",
                boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
                backgroundColor: "#fff",
              }}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>Category: {product.category}</p>
              <p>
                <b>Price:</b> Rs.{product.price} &nbsp;
                <span style={{ color: "red" }}>
                  ({product.discountPercentage}% OFF)
                </span>
              </p>
              <p>Rating: {renderStars(product.rating)}</p>

              {isInCart ? (
                <>
                  <button
                    onClick={() => dispatch(decreaseQuantity(product.id))}
                    style={{
                      backgroundColor: "#ccc",
                      border: "none",
                      padding: "5px 10px",
                      cursor: "pointer",
                      margin: "5px",
                    }}
                    disabled={cartItem.quantity < 1} // Prevent going below1
                  >
                    -
                  </button>

                  <span style={{ margin: "0 10px", fontWeight: "bold" }}>
                    {cartItem.quantity}
                  </span>

                  <button
                    onClick={() => dispatch(increaseQuantity(product.id))}
                    style={{
                      backgroundColor: "#ccc",
                      border: "none",
                      padding: "5px 10px",
                      cursor: "pointer",
                      margin: "5px",
                    }}
                  >
                    +
                  </button>

                  <button
                    onClick={() => handleRemoveFromCart(product.id)}
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      cursor: "pointer",
                      marginTop: "10px",
                    }}
                  >
                    Remove
                  </button>
                </>
              ) : (
                <button
                  onClick={() => handleAddToCart(product)}
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    cursor: "pointer",
                    marginTop: "10px",
                  }}
                >
                  Add to Cart
                </button>
              )}

              <button
                onClick={() => handleViewDetails(product.id)}
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                View Details
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;



          
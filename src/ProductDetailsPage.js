import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // State to hold the selected image
  const [rotation, setRotation] = useState(0); // State to track image rotation

  // Fetch the product details using the ID
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setSelectedImage(data.thumbnail); // Set the default image to the thumbnail
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    fetchProductDetails();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  // Function to rotate the image by 90 degrees
  const handleRotate = () => {
    setRotation((prevRotation) => (prevRotation + 90) % 360); // Rotate by 90 degrees each time
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.title}</h2>
      
      {/* Display selected image with rotation */}
      <div>
        <img
          src={selectedImage} // Display the selected image
          alt={product.title}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
            transform: `rotate(${rotation}deg)`, // Apply the rotation based on state
            transition: "transform 0.3s ease-in-out", // Smooth transition for rotation
          }}
        />
      </div>

      {/* Display thumbnails */}
      <div style={{ display: "flex", marginTop: "10px" }}>
        {product.images && product.images.length > 0 ? (
          product.images.slice(0, 3).map((img, index) => (
            <img
              key={index}
              src={img} // Thumbnail image
              alt={`Thumbnail ${index}`}
              style={{
                width: "80px",
                height: "80px",
                margin: "0 5px",
                objectFit: "contain",
                cursor: "pointer",
                border: selectedImage === img ? "2px solid blue" : "none", // Highlight selected image
              }}
              onClick={() => setSelectedImage(img)} // Update the selected image
            />
          ))
        ) : (
          <p>No additional images available</p>
        )}
      </div>

      <p>{product.description}</p>
      <p><b>Category:</b> {product.category}</p>
      <p><b>Price:</b> Rs.{product.price}</p>
      <p><b>Discount:</b> {product.discountPercentage}% OFF</p>
      <p><b>Rating:</b> {product.rating} / 5</p>

      {/* Button to rotate the image */}
      <button
        onClick={handleRotate}
        style={{
          marginTop: "20px",
          padding: "10px 15px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Rotate Image
      </button>
    </div>
  );
};

export default ProductDetailPage;





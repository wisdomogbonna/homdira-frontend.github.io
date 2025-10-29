import React from "react";
import "./PropertyCard.css";

function PropertyCard({ property }) {
  return (
      <div className="property-card">
            <img src={property.image} alt={property.title} />
                  <div className="property-info">
                          <h3>{property.title}</h3>
                                  <p className="location">{property.location}</p>
                                          <p className="price">₦{Number(property.price).toLocaleString()}</p>
                                                  <p className="description">{property.description}</p>
                                                          <p className="contact">📞 {property.contact}</p>
                                                                </div>
                                                                    </div>
                                                                      );
                                                                      }

                                                                      export default PropertyCard;
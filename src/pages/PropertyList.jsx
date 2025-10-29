import React from "react";
import "./PropertyList.css";
import PropertyCard from "./PropertyCard";

const PropertyList = ({ apartments }) => {
  if (!apartments || apartments.length === 0) {
      return (
            <div className="no-apartments">
                    <h3>No apartments found.</h3>
                            <p>Check back later for new listings!</p>
                                  </div>
                                      );
                                        }

                                          return (
                                              <div className="property-list">
                                                    {apartments.map((property) => (
                                                            <PropertyCard key={property._id} property={property} />
                                                                  ))}
                                                                      </div>
                                                                        );
                                                                        };

                                                                        export default PropertyList;
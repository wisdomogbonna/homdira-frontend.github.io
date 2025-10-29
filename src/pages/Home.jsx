import React, { useEffect, useState } from "react";
import axios from "axios";
import PropertyList from "../components/PropertyList";

const Home = () => {
  const [apartments, setApartments] = useState([]);

    useEffect(() => {
        const fetchApartments = async () => {
              try {
                      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/properties`);
                              setApartments(res.data);
                                    } catch (error) {
                                            console.error("Error fetching apartments", error);
                                                  }
                                                      };
                                                          fetchApartments();
                                                            }, []);

                                                              return (
                                                                  <div className="home-container">
                                                                        <style>{`
                                                                                .home-container {
                                                                                          padding: 20px;
                                                                                                    background-color: #f9fdf9;
                                                                                                              min-height: 100vh;
                                                                                                                        text-align: center;
                                                                                                                                }
                                                                                                                                        .home-container h2 {
                                                                                                                                                  color: #0a9d57;
                                                                                                                                                            margin-bottom: 15px;
                                                                                                                                                                      font-weight: 700;
                                                                                                                                                                                letter-spacing: 0.5px;
                                                                                                                                                                                        }
                                                                                                                                                                                              `}</style>

                                                                                                                                                                                                    <h2>Available Apartments</h2>
                                                                                                                                                                                                          <PropertyList apartments={apartments} />
                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                );
                                                                                                                                                                                                                };

                                                                                                                                                                                                                export default Home;
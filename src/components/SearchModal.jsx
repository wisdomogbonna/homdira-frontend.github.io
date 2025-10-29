import React, { useState } from "react";
import "./SearchModal.css";

const suggestedCities = [
  "Lagos",
    "Abuja",
      "Port Harcourt",
        "Enugu",
          "Kano",
            "Ibadan",
              "Owerri"
              ];

              function SearchModal({ onClose, onSearch }) {
                const [query, setQuery] = useState("");

                  const handleSubmit = (e) => {
                      e.preventDefault();
                          onSearch(query);
                              onClose();
                                };

                                  const filteredSuggestions = suggestedCities.filter(city =>
                                      city.toLowerCase().includes(query.toLowerCase())
                                        );

                                          return (
                                              <div className="search-overlay">
                                                    <div className="search-box">
                                                            <button className="close-search" onClick={onClose}>×</button>
                                                                    <h3>Search Apartments</h3>

                                                                            <form onSubmit={handleSubmit}>
                                                                                      <input
                                                                                                  type="text"
                                                                                                              placeholder="Enter city or location (e.g., Lekki)"
                                                                                                                          value={query}
                                                                                                                                      onChange={(e) => setQuery(e.target.value)}
                                                                                                                                                />
                                                                                                                                                          <button type="submit">Search</button>
                                                                                                                                                                  </form>

                                                                                                                                                                          {query && filteredSuggestions.length > 0 && (
                                                                                                                                                                                    <ul className="suggestions">
                                                                                                                                                                                                {filteredSuggestions.map((city, i) => (
                                                                                                                                                                                                              <li key={i} onClick={() => { setQuery(city); onSearch(city); onClose(); }}>
                                                                                                                                                                                                                              {city}
                                                                                                                                                                                                                                            </li>
                                                                                                                                                                                                                                                        ))}
                                                                                                                                                                                                                                                                  </ul>
                                                                                                                                                                                                                                                                          )}
                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                                                      export default SearchModal;
function PropertyList({ properties }) {
      if (!properties.length)
          return <p style={{ textAlign: "center", marginTop: "50px" }}>No apartments available yet.</p>;

            return (
                <div className="property-list">
                      {properties.map((p) => (
                              <div key={p._id} className="property-card">
                                        <img src={p.imageUrl} alt={p.title} className="property-img" />
                                                  <h3>{p.title}</h3>
                                                            <p><strong>₦{p.price}</strong></p>
                                                                      <p>{p.location}</p>
                                                                                <p>📞 {p.contact}</p>
                                                                                        </div>
                                                                                              ))}
                                                                                                  </div>
                                                                                                    );
                                                                                                    }

                                                                                                    export default PropertyList;
}
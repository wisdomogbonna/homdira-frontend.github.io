import React from "react";

const PropertyList = ({ apartments }) => {
  return (
    <div className="property-list">
      <style>{`
        .property-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          padding: 20px;
          background-color: #f9fdf9;
          min-height: 100vh;
        }

        .property-card {
          background: #ffffff;
          border-radius: 10px;
          box-shadow: 0 3px 12px rgba(0, 0, 0, 0.08);
          overflow: hidden;
          text-align: left;
          transition: all 0.3s ease-in-out;
          display: flex;
          flex-direction: column;
        }

        .property-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(10, 157, 87, 0.2);
        }

        .property-image {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-bottom: 1px solid #eee;
        }

        .property-content {
          padding: 15px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .property-title {
          color: #0a9d57;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 5px;
        }

        .property-location {
          color: #555;
          font-size: 15px;
          margin-bottom: 8px;
        }

        .property-price {
          font-weight: bold;
          color: #222;
          margin-bottom: 12px;
        }

        .contact-btn {
          background: #0a9d57;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 10px 14px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s ease;
          width: 100%;
        }

        .contact-btn:hover {
          background: #087c44;
        }

        .no-apartments {
          grid-column: 1 / -1;
          text-align: center;
          font-size: 16px;
          color: #555;
          padding: 50px 0;
        }

        @media (max-width: 600px) {
          .property-list {
            grid-template-columns: 1fr;
            padding: 10px;
          }
          .property-card {
            margin-bottom: 20px;
          }
        }
      `}</style>

      {apartments.length === 0 ? (
        <p className="no-apartments">No apartments available yet.</p>
      ) : (
        apartments.map((apt) => (
          <div className="property-card" key={apt._id}>
            <img src={apt.image} alt={apt.title} className="property-image" />
            <div className="property-content">
              <div>
                <h3 className="property-title">{apt.title}</h3>
                <p className="property-location">📍 {apt.location}</p>
                <p className="property-price">💰 ₦{apt.price}</p>
              </div>
              <button
                className="contact-btn"
                onClick={() =>
                  window.open(
                    `mailto:${apt.landlordEmail}?subject=Inquiry about ${apt.title}`
                  )
                }
              >
                Contact Landlord
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PropertyList;
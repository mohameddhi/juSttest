import React, { useEffect, useState } from "react";
import axios from "axios";

const Contenu = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/read-excel")
      .then(response => {
        console.log("Données récupérées :", response.data);
        if (response.data.success && Array.isArray(response.data.result)) {
          setData(response.data.result); // Accédez à response.data.result
        } else {
          console.error("Données inattendues :", response.data);
          setData([]);
        }
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des données :", error);
        setError("Erreur de chargement des données.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="background-radial-gradient overflow-hidden">
      <style jsx>{`
        .background-radial-gradient {
          background-color: hsl(218, 41%, 15%);
          background-image: radial-gradient(
              650px circle at 0% 0%,
              hsl(218, 41%, 35%) 15%,
              hsl(218, 41%, 30%) 35%,
              hsl(218, 41%, 20%) 75%,
              hsl(218, 41%, 19%) 80%,
              transparent 100%
            ),
            radial-gradient(
              1250px circle at 100% 100%,
              hsl(218, 41%, 45%) 15%,
              hsl(218, 41%, 30%) 35%,
              hsl(218, 41%, 20%) 75%,
              hsl(218, 41%, 19%) 80%,
              transparent 100%
            );
        }
        #radius-shape-1 {
          height: 220px;
          width: 220px;
          top: -60px;
          left: -130px;
          background: radial-gradient(#44006b, #ad1fff);
          overflow: hidden;
        }
        #radius-shape-2 {
          border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;
          bottom: -60px;
          right: -110px;
          width: 300px;
          height: 300px;
          background: radial-gradient(#44006b, #ad1fff);
          overflow: hidden;
        }
        .bg-glass {
          background-color: hsla(0, 0%, 100%, 0.9) !important;
          backdrop-filter: saturate(200%) blur(25px);
        }
        .percentage-button {
          border-radius: 20px;
          padding: 5px 10px;
          background-color: rgb(70, 112, 152);
          color: white;
          border: none;
          cursor: pointer;
          margin-left: 10px;
        }
        .table-responsive {
          overflow-x: auto;
        }
        .table {
          width: 100%;
          margin-top: 20px;
          border-collapse: collapse;
        }
        .table th,
        .table td {
          padding: 12px;
          border: 1px solid #ddd;
          text-align: left;
        }
        .table th {
          background-color: hsl(218, 41%, 35%);
          color: white;
        }
        .table tr:nth-child(even) {
          background-color: #f2f2f2;
        }
        .table tr:hover {
          background-color: #ddd;
        }
      `}</style>

      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
            <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: "hsl(218, 81%, 95%)" }}>
              The best offer <br />
              <span style={{ color: "hsl(218, 81%, 75%)" }}>Smart Order Optimization</span>
            </h1>
            <p className="mb-4 opacity-70" style={{ color: "hsl(218, 81%, 85%)" }}>
              Thanks to artificial intelligence, we offer smart orders that anticipate your needs. Our system analyzes
              your purchase history, seasonality, purchase frequency, and available stock to suggest the most relevant
              products. Simplify your inventory management and maximize your efficiency with accurate and personalized
              forecasts.
            </p>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

            <div className="card bg-glass">
              <div className="card-body px-4 py-5 px-md-5">
                <form>
                  <div className="mb-4 d-flex align-items-center">
                    <input type="text" id="form3Example1" className="form-control" placeholder="available stock" />
                    <button type="button" className="percentage-button">
                      50%
                    </button>
                  </div>

                  <div className="mb-4 d-flex align-items-center">
                    <input type="text" id="form3Example3" className="form-control" placeholder="seasonality" />
                    <button type="button" className="percentage-button">
                      30%
                    </button>
                  </div>

                  <div className="mb-4 d-flex align-items-center">
                    <input type="text" id="form3Example4" className="form-control" placeholder="purchase history" />
                    <button type="button" className="percentage-button">
                      70%
                    </button>
                  </div>
                  <div className="mb-4 d-flex align-items-center">
                    <input type="text" id="form3Example4" className="form-control" placeholder="purchase frequency" />
                    <button type="button" className="percentage-button">
                      20%
                    </button>
                  </div>

                  <button type="submit" className="btn btn-primary btn-block mb-4">
                    generate
                  </button>

                  <div className="text-center">
                    <p> Click On Button </p>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-facebook-f"></i>
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-google"></i>
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-twitter"></i>
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-github"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tableau pour afficher les données */}
      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <h2 className="my-5 display-5 fw-bold ls-tight" style={{ color: "hsl(218, 81%, 95%)" }}>
          Données du fichier Excel
        </h2>
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Reference Order</th>
                <th>Order ID</th>
                <th>Date Created</th>
                <th>Ordered Quantity</th>
                <th>Total Price</th>
                <th>Total Products</th>
                <th>Name</th>
                <th>Stock Quantity</th>
                <th>Warehouse Reference</th>
                <th>Organization</th>
                <th>Reference</th>
                <th>Item Category Name</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{row.referenceOrder}</td>
                  <td>{row.orderId}</td>
                  <td>{row.dateCreated}</td>
                  <td>{row.orderedQuantity}</td>
                  <td>{row.totalPrice}</td>
                  <td>{row.totalProducts}</td>
                  <td>{row.name}</td>
                  <td>{row.stockQuantity}</td>
                  <td>{row.warehouseReference}</td>
                  <td>{row.organization}</td>
                  <td>{row.reference}</td>
                  <td>{row.itemCategoryname}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Contenu;












/*
import React from "react";

const Contenu = () => {
  return (
    <section className="background-radial-gradient overflow-hidden">
      <style jsx>{`
        .background-radial-gradient {
          background-color: hsl(218, 41%, 15%);
          background-image: radial-gradient(
              650px circle at 0% 0%,
              hsl(218, 41%, 35%) 15%,
              hsl(218, 41%, 30%) 35%,
              hsl(218, 41%, 20%) 75%,
              hsl(218, 41%, 19%) 80%,
              transparent 100%
            ),
            radial-gradient(
              1250px circle at 100% 100%,
              hsl(218, 41%, 45%) 15%,
              hsl(218, 41%, 30%) 35%,
              hsl(218, 41%, 20%) 75%,
              hsl(218, 41%, 19%) 80%,
              transparent 100%
            );
        }
        #radius-shape-1 {
          height: 220px;
          width: 220px;
          top: -60px;
          left: -130px;
          background: radial-gradient(#44006b, #ad1fff);
          overflow: hidden;
        }
        #radius-shape-2 {
          border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;
          bottom: -60px;
          right: -110px;
          width: 300px;
          height: 300px;
          background: radial-gradient(#44006b, #ad1fff);
          overflow: hidden;
        }
        .bg-glass {
          background-color: hsla(0, 0%, 100%, 0.9) !important;
          backdrop-filter: saturate(200%) blur(25px);
        }
        .percentage-button {
          border-radius: 20px;
          padding: 5px 10px;
          background-color:rgb(70, 112, 152);
          color: white;
          border: none;
          cursor: pointer;
          margin-left: 10px;
        }
      `}</style>

      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
            <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: "hsl(218, 81%, 95%)" }}>
              The best offer <br />
              <span style={{ color: "hsl(218, 81%, 75%)" }}>Smart Order Optimization</span>
            </h1>
            <p className="mb-4 opacity-70" style={{ color: "hsl(218, 81%, 85%)" }}>
            Thanks to artificial intelligence, we offer smart orders that anticipate your needs. Our system analyzes your purchase history, seasonality, purchase frequency, and available stock to suggest the most relevant products. Simplify your inventory management and maximize your efficiency with accurate and personalized forecasts.
            </p>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

            <div className="card bg-glass">
              <div className="card-body px-4 py-5 px-md-5">
                <form>
              
                  <div className="mb-4 d-flex align-items-center">
                    <input type="text" id="form3Example1" className="form-control" placeholder="available stock" /> 
                    <button type="button" className="percentage-button">50%</button> 
                  </div>
              
                  <div className="mb-4 d-flex align-items-center">
                    <input type="text" id="form3Example3" className="form-control" placeholder="seasonality" />
                    <button type="button" className="percentage-button">30%</button>
                  </div>

                  <div className="mb-4 d-flex align-items-center">
                    <input type="text" id="form3Example4" className="form-control" placeholder="purchase history" />
                    <button type="button" className="percentage-button">70%</button>
                  </div>
                  <div className="mb-4 d-flex align-items-center">
                    <input type="text" id="form3Example4" className="form-control" placeholder="purchase frequency" />
                    <button type="button" className="percentage-button">20%</button>
                  </div>

                  <button type="submit" className="btn btn-primary btn-block mb-4">
                  generate
                  </button>

                  <div className="text-center">
                    <p> Click On Button </p>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-facebook-f"></i>
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-google"></i>
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-twitter"></i>
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-github"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contenu;*/
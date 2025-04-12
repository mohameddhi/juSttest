import { useState } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "../styles/login.css"; // Custom CSS
import { useRouter } from "next/router";

export default function Login() {
  const [organisation, setOrganisation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          organisation,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Rediriger vers la page d'accueil après une connexion réussie
        router.push("/");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <section className="h-100 gradient-form" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                {/* Left Side - Login Form */}
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img
                        src="/Logo2.png"
                        style={{ width: "185px" }}
                        alt="logo"
                      />
                      <br /> <br /> <br />
                    </div>

                    
                    <form onSubmit={handleLogin}>
                      <div style={{ textAlign: "center" }}>
                        <p>
                          <strong>Veuillez vous connecter à votre compte</strong>
                        </p>
                      </div>

                      <br />

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example11">
                          Organisation
                        </label>
                        <input
                          type="text"
                          id="form2Example11"
                          className="form-control"
                          placeholder="Entrer nom d'organisation"
                          value={organisation}
                          onChange={(e) => setOrganisation(e.target.value)}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example22">
                          Email
                        </label>
                        <input
                          type="email"
                          id="form2Example22"
                          className="form-control"
                          placeholder="Entrer email please"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example22">
                          Password
                        </label>
                        <input
                          type="password"
                          id="form2Example22"
                          className="form-control"
                          placeholder="Entrer password please"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      {error && <div className="alert alert-danger">{error}</div>}

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                        >
                          Log in
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Right Side - Info Section */}
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <div style={{ textAlign: "center" }}>
                      <h4 className="mb-4">Valomnia</h4>
                    </div>
                    <p className="small mb-0" style={{ textAlign: "center" }}>
                      Valomnia, filiale de Proxym Group, optimise vos ventes et circuits de distribution avec des solutions mobiles, Cloud et Big Data, pré-intégrées avec Oracle, SAP, et Sage. Simplifiez la gestion de votre entreprise avec des applications métiers performantes et faciles à déployer.
                    </p>
                  </div>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

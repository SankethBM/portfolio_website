import { useState } from "react";
import "./projects.css";
import onlineShopping from "../../assets/Online_Shopping.gif";
import mobileDev from "../../assets/Mobile_Development.gif";
import blogWriting from '../../assets/Newspaper.gif'
import protection from '../../assets/FingerprintReader.gif'
import ai_project from '../../assets/AiService.gif'
import ecom_img from "../../assets/E-Commerce_project_img.png";
import mob_img from '../../assets/Mobile_app_demo_img.svg'
import nadb_img from '../../assets/nadb_image.svg'
import ai_project_img from '../../assets/ai_project.svg'
import blog_img from '../../assets/blogWebsite.svg'

export default function Projects() {
  const projects = [
    {
      id: 1,
      gif: onlineShopping,
      title: "E-Commerce Platform",
      subtitle: "Complete online store with custom features",
      description:
        "A robust and scalable e-commerce platform tailored for online businesses.",
      details: [
        "Built using ReactJS for frontend and ExpressJS for backend.",
        "Styled with Bootstrap for responsive design.",
        "Advanced CRUD operations in the admin panel for managing products, users, and orders.",
        "Secure and smooth checkout experience with integrated PayPal payment gateway.",
        "Fully scalable architecture with modular and reusable code components.",
      ],
      img: ecom_img,
      url: "https://proshop-x9aw.onrender.com/",
    },
    {
      id: 2,
      gif: mobileDev,
      title: "Local Business Finder App",
      subtitle: "Mobile app for discovering and managing local businesses",
      description:
        "A cross-platform mobile application that allows users to discover, review, and interact with businesses near them.",
      details: [
        "Developed using React Native for iOS and Android.",
        "Firebase backend for real-time data and Google Authentication.",
        "Users can add their business profiles and view others'.",
        "Features include calling, messaging, reviewing, and location sharing.",
        "Includes search functionality and category filters for easier discovery.",
        "Clean UI with performance-optimized navigation and state management.",
      ],
      img: mob_img,
      url: "Business_Details.apk",
    },
    {
      id: 3,
      gif: blogWriting,
      title: "Blog Platform",
      subtitle: "Developed using Python",
      description:
        "A website that allows users to discover and view blog posts and it supports CRUD operations",
      details: [
        "Developed using Python and PostgreSQL",
        "Styled with Bootstrap for responsive design.",
        "CRUD Supported web application",
        "Secure and smooth communication experience.",
        "Fully scalable architecture with modular and reusable code components.",
    
      ],
      img: blog_img,
      url: "",
    },
    {
      id: 4,
      gif: protection,
      title:"NADB Client Website",
      subtitle: "Developed using HTML and CSS",
      description:
        "A website that allows users to discover and contact the team which will take action against duplication of any content.",
      details: [
        "Developed using HTML and CSS",
        "Styled with Bootstrap for responsive design.",
        "Advanced E-Mail Integration",
        "Secure and smooth communication experience.",
        "Fully scalable architecture with modular and reusable code components.",
    
      ],
      img: nadb_img,
      url: "https://nadb.org.in/",
    },
    {
      id: 5,
      gif: ai_project,
      title: "AI Virtual Assistant",
      subtitle: "Python, Django ",
      details: "",
      description:
        "It's an AI personal Virtual Assistant built using Python ",
      details: [
        "Developed using Python and Django Framework",
        "Styled with Bootstrap for responsive design.",
        "used PyAudio, pyttxs3, ADB and Speech Recognition",
        "Secure and smooth communication experience.",
        "Fully scalable architecture with modular and reusable code components.",
    
      ],
      img: ai_project_img,
      url: "",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const [active, setActive] = useState(null); // modal project

  return (
    <section id="projects" className="projects">
      <div className="projects__inner">
        {/* heading */}
        <header className="projects__heading">
          <h2 className="projects__title">My Projects</h2>
          <div className="projects__divider"></div>
          <p className="projects__subtitle">
            Explore our portfolio of successful projects delivered to clients
            across various industries.
          </p>
        </header>

        {/* grid */}
        <div className="projects__grid">
          {(showAll ? projects : projects.slice(0, 3)).map((p) => (
            <article key={p.id} className="card">
              <div className="card__image">
                <img src={p.gif} alt={p.title} />
              </div>
              <div className="card__body">
                <h3 className="card__title">{p.title}</h3>
                <p className="card__subtitle">{p.subtitle}</p>
                <button
                  className="btn btn--primary"
                  onClick={() => setActive(p)}
                >
                  View Details
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* toggle button */}
        <div className="projects__toggle">
          <button
            className="btn btn--primary"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "View All Projects"}
          </button>
        </div>
      </div>

      {/* modal */}
      {active && (
        <div className="modal" onClick={() => setActive(null)}>
          <div className="modal__dialog" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" onClick={() => setActive(null)}>
              &times;
            </button>
            <img className="modal__image" src={active.img} alt={active.title} />
            <h3 className="modal__title">{active.title}</h3>
            <p className="modal__description">{active.description}</p>
            <p className="modal__description">{active.details}</p>
            <div
              style={{
                textAlign: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <a href={active.url} style={{ color: "#fff" }}>
                <p
                  href={active.url}
                  style={{
                    textAlign: "center",
                    background: "var(--text-color)",
                    borderRadius: "20px",
                    padding: "9px",
                    fontWeight: "800",
                  }}
                >
                  Visit Website
                </p>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

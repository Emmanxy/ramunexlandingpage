
import {
  ArrowDown,
  ArrowRight,
  Cpu,
  BrainCircuit,
  Cloud,
  Boxes,
  CircuitBoard,
  ExternalLink,
  Mail,
  Phone,
  MoveRight
} from "lucide-react";

import Nav from "./components/Nav";
import Reveal from "./components/Reveal";
import EngineeringBackdrop from "./assets/EngineeringBackdrop";
import { siteConfig } from "./config/site";

const CONTACT_EMAIL = "emmanuelramunex@gmail.com";
const CONTACT_PHONE = "066 542 8673";
const CONTACT_PHONE_LINK = "+27665428673";

const capabilities = [
  {
    icon: CircuitBoard,
    title: "Hardware",
    text: "Electronics, sensors, embedded systems and connected devices."
  },
  {
    icon: Cpu,
    title: "Software",
    text: "Applications, platforms, APIs, backend systems and distributed software."
  },
  {
    icon: BrainCircuit,
    title: "AI & Intelligence",
    text: "Machine learning, computer vision, intelligent automation and AI-powered systems."
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    text: "Cloud platforms, DevOps, distributed computing and scalable infrastructure."
  },
  {
    icon: Boxes,
    title: "Integrated Systems",
    text: "Connecting physical technology, software, data and intelligence into complete systems."
  }
];

const services = [
  [
    "Technology Engineering",
    "End-to-end technology systems combining hardware, software and infrastructure."
  ],
  [
    "Software Engineering",
    "Custom applications, platforms, APIs and backend systems."
  ],
  [
    "AI & Machine Learning",
    "Intelligent systems, computer vision, machine learning and automation."
  ],
  [
    "Cloud & Infrastructure",
    "Cloud systems, deployment, DevOps and scalable infrastructure."
  ],
  [
    "Embedded & Connected Technology",
    "Hardware, embedded software, sensors and connected devices."
  ]
];

const process = [
  ["01", "Understand", "Understand the problem and requirements."],
  ["02", "Engineer", "Design the architecture and technology."],
  ["03", "Build", "Develop the hardware, software and systems."],
  ["04", "Test", "Validate the technology in real conditions."],
  ["05", "Deploy", "Put the system into production."],
  ["06", "Evolve", "Continuously improve the technology."]
];

function SectionHeading({ eyebrow, title, body }) {
  return (
    <Reveal className="section-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {body && <p className="section-lead">{body}</p>}
    </Reveal>
  );
}

function App() {
  const product = siteConfig.products[0];
  const work = siteConfig.work[0];

  const handleContact = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = form.get("name");
    const email = form.get("email");
    const company = form.get("company");
    const building = form.get("building");
    const message = form.get("message");

    const subject = encodeURIComponent(
      `Ramunex enquiry — ${building || "New project"}`
    );

    const body = encodeURIComponent(
      `Name: ${name}
Email: ${email}
Company / Organisation: ${company}
What are you building?: ${building}

Message:
${message}`
    );

    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    const status = event.currentTarget.querySelector("[data-status]");

    if (status) {
      status.textContent =
        "Your email application will open with the enquiry prepared. Please send the email to complete your enquiry.";
    }
  };

  return (
    <div id="top">

      <Nav />

      <main>

        {/* HERO */}
        <section className="hero cinematic-section">
          <EngineeringBackdrop variant="circuit" />
          <div className="scene-overlay" />

          <div className="container hero-content">

            <h1>
              We Engineer<br />
              Technology.
            </h1>

            <p className="hero-copy">
              From hardware and embedded systems to software,
              AI and cloud infrastructure, Ramunex Technologies
              builds technology from the ground up.
            </p>

            <div className="hero-actions">
              <a className="button" href="#about">
                Explore Ramunex
                <ArrowRight size={18} />
              </a>

              <a className="text-link" href="#contact">
                Work With Us
                <MoveRight size={18} />
              </a>
            </div>

          </div>

          <a
            className="scroll-cue"
            href="#about"
            aria-label="Scroll to about"
          >
            <ArrowDown size={19} />
          </a>
        </section>

        {/* ABOUT */}
        <section id="about" className="section section-dark">
          <div className="container split-intro">

            <SectionHeading
              eyebrow="What we do"
              title="Engineering without boundaries."
              body="Modern technology is not limited to a single discipline. Ramunex brings hardware, software, intelligence, infrastructure and engineering together to build complete systems."
            />

            <Reveal className="stack-line" delay={120}>
              <span>PHYSICAL</span>
              <i />
              <span>DIGITAL</span>
              <i />
              <span>INTELLIGENT</span>
            </Reveal>

          </div>
        </section>

        {/* CAPABILITIES */}
        <section
          id="capabilities"
          className="section capabilities-section"
        >
          <div className="container">

            <SectionHeading
              eyebrow="Capabilities"
              title="One engineering stack."
            />

            <div className="capability-grid">
              {capabilities.map(
                ({ icon: Icon, title, text }, i) => (
                  <Reveal
                    key={title}
                    className="capability-card"
                    delay={i * 70}
                  >
                    <Icon size={26} strokeWidth={1.5} />
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </Reveal>
                )
              )}
            </div>

          </div>
        </section>

        {/* INTELLIGENCE */}
        <section className="cinematic-section feature-scene">
          <EngineeringBackdrop variant="vision" />
          <div className="scene-overlay scene-overlay-soft" />

          <div className="container scene-copy">
            <Reveal>
              <p className="eyebrow">
                Engineering + intelligence
              </p>

              <h2>
                Systems that sense,<br />
                compute and act.
              </h2>

              <p>
                We design technology as a connected whole—from
                the physical layer to the intelligence and
                infrastructure behind it.
              </p>
            </Reveal>
          </div>
        </section>

        {/* PRODUCTS */}
        <section
          id="products"
          className="section products-section"
        >
          <div className="container">

            <SectionHeading
              eyebrow="Products"
              title="Built by Ramunex."
              body="Ramunex does not only build technology for clients. We also develop and operate our own products."
            />

            <Reveal className="product-card">

              <div className="product-mark">R</div>

              <div className="product-content">
                <p className="eyebrow">
                  Ramunex product
                </p>

                <h3>{product.name}</h3>

                {product.description ? (
                  <p>{product.description}</p>
                ) : (
                  <p className="muted">
                    Product information will be published
                    here once the verified description
                    is configured.
                  </p>
                )}
              </div>

              {product.url ? (
                <a
                  className="button button-ghost"
                  href={product.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Rapply
                  <ExternalLink size={16} />
                </a>
              ) : (
                <span className="config-label">
                  Link configurable
                </span>
              )}

            </Reveal>

          </div>
        </section>

        {/* WORK */}
        <section id="work" className="section work-section">
          <div className="container">

            <SectionHeading
              eyebrow="Selected work"
              title="Technology built for real organisations."
            />

            <Reveal className="work-card">

              <div className="work-meta">
                <span>Education technology</span>
                <span>South Africa</span>
              </div>

              <h3>{work.name}</h3>

              <p className="work-subtitle">
                {work.subtitle}
              </p>

              <p>{work.description}</p>

              <a
                className="text-link"
                href={work.url}
                target="_blank"
                rel="noreferrer"
              >
                Visit Edu-Ca-Te
                <ExternalLink size={17} />
              </a>

            </Reveal>

          </div>
        </section>

        {/* INFRASTRUCTURE */}
        <section className="cinematic-section infrastructure-scene">
          <EngineeringBackdrop variant="infrastructure" />
          <div className="scene-overlay" />

          <div className="container scene-copy align-bottom">
            <Reveal>

              <p className="eyebrow">
                Infrastructure matters
              </p>

              <h2>
                Built beyond<br />
                the interface.
              </h2>

              <p>
                Reliable digital products depend on
                architecture, deployment, data systems
                and computing infrastructure engineered
                as carefully as the user experience.
              </p>

            </Reveal>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="section services-section"
        >
          <div className="container">

            <SectionHeading
              eyebrow="Work with Ramunex"
              title="Build serious technology."
              body="Organisations can work with Ramunex to engineer technology across the full stack."
            />

            <div className="service-list">
              {services.map(([title, text], i) => (
                <Reveal
                  key={title}
                  className="service-row"
                  delay={i * 55}
                >
                  <span className="service-number">
                    0{i + 1}
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <ArrowRight size={20} />
                </Reveal>
              ))}
            </div>

          </div>
        </section>

        {/* PROCESS */}
        <section className="section process-section">
          <div className="container">

            <SectionHeading
              eyebrow="Engineering process"
              title="From problem to production."
            />

            <div className="process-grid">
              {process.map(([num, title, text], i) => (
                <Reveal
                  className="process-step"
                  key={title}
                  delay={i * 60}
                >
                  <span>{num}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </Reveal>
              ))}
            </div>

          </div>
        </section>

        {/* CAREERS */}
        <section
          id="careers"
          className="section careers-section"
        >
          <div className="container careers-grid">

            <SectionHeading
              eyebrow="Careers"
              title="Build the future with us."
              body="Ramunex is building an engineering technology company for people who want to work across disciplines and turn ambitious ideas into working systems."
            />

            <Reveal className="careers-panel" delay={120}>

              <div className="areas">
                {[
                  "Software Engineering",
                  "AI / Machine Learning",
                  "Hardware Engineering",
                  "Embedded Systems",
                  "Cloud & Infrastructure",
                  "Data Engineering",
                  "Research & Development"
                ].map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>

              <div className="vacancy-status">
                <strong>
                  No open positions currently.
                </strong>

                <p>
                  Future opportunities can be discussed
                  through the contact section below.
                </p>
              </div>

            </Reveal>

          </div>
        </section>

        {/* CONTACT SECTION */}
        <section
          id="contact"
          className="section contact-section"
        >
          <div className="container contact-grid">

            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Let's build something."
                body="Tell us what you are trying to build, improve or explore."
              />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  marginTop: "24px"
                }}
              >
                <a
                  href={`tel:${CONTACT_PHONE_LINK}`}
                  style={{
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    textDecoration: "none"
                  }}
                >
                  <Phone size={18} />
                  {CONTACT_PHONE}
                </a>

                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  style={{
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    textDecoration: "none",
                    overflowWrap: "anywhere"
                  }}
                >
                  <Mail size={18} />
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            <Reveal delay={120}>

              <form
                className="contact-form"
                onSubmit={handleContact}
              >
                <label>
                  Name
                  <input
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                  />
                </label>

                <label>
                  Email
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </label>

                <label>
                  Company / Organisation
                  <input
                    name="company"
                    type="text"
                    autoComplete="organization"
                  />
                </label>

                <label>
                  What are you building?
                  <input
                    name="building"
                    type="text"
                    required
                  />
                </label>

                <label className="full">
                  Message
                  <textarea
                    name="message"
                    rows="6"
                    required
                  />
                </label>

                <div className="form-footer full">
                  <button
                    className="button"
                    type="submit"
                  >
                    Send enquiry
                    <Mail size={18} />
                  </button>

                  <p
                    className="form-status"
                    data-status
                    aria-live="polite"
                  />
                </div>
              </form>

            </Reveal>

          </div>
        </section>

      </main>

      {/* UPDATED RAMUNEX FOOTER */}
      <footer>

        <div className="container footer-grid">

          {/* LOGO AND BRAND */}
          <div>

            <a
              href="#top"
              aria-label="Ramunex Technologies home"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                textDecoration: "none"
              }}
            >

              <img
                src="/ramunex-logo.jpg"
                alt="Ramunex Technologies Logo"
                style={{
                  width: "55px",
                  height: "55px",
                  objectFit: "contain",
                  borderRadius: "8px",
                  flexShrink: 0
                }}
              />

              <span
                style={{
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "2px",
                  lineHeight: "1.5"
                }}
              >
                RAMUNEX TECHNOLOGIES
              </span>

            </a>

            <p style={{ marginTop: "12px" }}>
              We Engineer Technology.
            </p>

          </div>

          {/* FOOTER NAVIGATION */}
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#products">Products</a>
            <a href="#work">Work</a>
            <a href="#careers">Careers</a>
            <a href="#contact">Contact</a>
          </div>

          {/* CONTACT DETAILS */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              minWidth: 0
            }}
          >

            <strong
              style={{
                color: "#ffffff",
                fontSize: "13px",
                letterSpacing: "2px"
              }}
            >
              GET IN TOUCH
            </strong>

            <a
              href={`tel:${CONTACT_PHONE_LINK}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "#aab7c5",
                fontSize: "13px",
                textDecoration: "none"
              }}
            >
              <Phone size={16} />
              {CONTACT_PHONE}
            </a>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "#aab7c5",
                fontSize: "13px",
                textDecoration: "none",
                overflowWrap: "anywhere"
              }}
            >
              <Mail size={16} />
              {CONTACT_EMAIL}
            </a>

            <a
              href={siteConfig.company.domain}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#aab7c5",
                fontSize: "13px",
                textDecoration: "none"
              }}
            >
              ramunextechnologies.co.za
              <ExternalLink size={14} />
            </a>

          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="container footer-bottom">

          <span>
            © {new Date().getFullYear()} RAMUNEX TECHNOLOGIES
          </span>

          <span>
            ENGINEERING TECHNOLOGY FROM SOUTH AFRICA.
          </span>

        </div>

      </footer>

    </div>
  );
}

export default App;

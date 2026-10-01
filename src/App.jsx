import { useEffect, useRef, useState } from "react";
import "./App.css";

/* =========================================================
   SKILLS
   ========================================================= */

const skills = [
  {
    number: "01",
    title: "FULL STACK",
    subtitle: "DEVELOPMENT",
    text: "Building responsive interfaces, application logic and complete digital experiences.",
    tags: ["REACT", "JAVASCRIPT", "API"],
  },
  {
    number: "02",
    title: "FIGMA ×",
    subtitle: "CANVA DESIGN",
    text: "Creating visual systems, interfaces, social creatives and polished digital compositions.",
    tags: ["FIGMA", "CANVA", "UI"],
  },
  {
    number: "03",
    title: "AI ×",
    subtitle: "CODE",
    text: "Exploring artificial intelligence as a creative partner for development and experimentation.",
    tags: ["AI", "PROMPTS", "TOOLS"],
  },
];

/* =========================================================
   SKILL VISUALS
   ========================================================= */

const skillVisuals = {
  "FULL STACK": [
    ["01", "INTERFACE", "UI / DEVELOPMENT"],
    ["02", "SYSTEM", "LOGIC / API"],
    ["03", "PRODUCT", "WEB EXPERIENCE"],
  ],

  "FIGMA ×": [
    ["01", "WIREFRAME", "STRUCTURE / UI"],
    ["02", "VISUAL", "LAYOUT / TYPE"],
    ["03", "DESIGN", "BRAND / SYSTEM"],
  ],

  "AI ×": [
    ["01", "PROMPT", "IDEA / INPUT"],
    ["02", "GENERATE", "AI / PROCESS"],
    ["03", "REFINE", "HUMAN / CODE"],
  ],
};

/* =========================================================
   PROJECT CATEGORIES
   ========================================================= */

const projectCategories = [
  {
    id: "figma",
    number: "01",
    category: "FIGMA → WEB",
    title: "FROM FRAME TO EXPERIENCE",
    description:
      "Interfaces designed visually in Figma and transformed into responsive coded experiences.",
    tags: ["FIGMA", "UI", "FRONTEND"],
  },

  {
    id: "web",
    number: "02",
    category: "WEB DEVELOPMENT",
    title: "FUNCTION MEETS FORM",
    description:
      "Web applications where interface, interaction and development work together as one system.",
    tags: ["REACT", "WEB", "FULL STACK"],
  },

  {
    id: "canva",
    number: "03",
    category: "CANVA DESIGN",
    title: "VISUAL LANGUAGE",
    description:
      "Creative visual work including social content, layouts, branding and digital compositions.",
    tags: ["CANVA", "VISUAL", "CREATIVE"],
  },

  {
    id: "ai",
    number: "04",
    category: "AI / ENGINEERING",
    title: "INTELLIGENCE IN CODE",
    description:
      "AI-powered systems, agentic workflows and engineering experiments that turn ideas into useful digital tools.",
    tags: ["AI", "AGENTS", "PYTHON"],
  },
];

/* =========================================================
   PROJECT COLLECTIONS
   ========================================================= */

const projectsByCategory = {
  figma: Array.from({ length: 6 }, (_, index) => ({
    number: String(index + 1).padStart(2, "0"),
    title: `INTERFACE / ${String(index + 1).padStart(2, "0")}`,
    type: "FIGMA → WEB",
    description:
      "A visual interface concept designed in Figma and developed into a responsive web experience.",
  })),

  web: Array.from({ length: 6 }, (_, index) => ({
    number: String(index + 1).padStart(2, "0"),
    title: `SYSTEM / ${String(index + 1).padStart(2, "0")}`,
    type: "WEB DEVELOPMENT",
    description:
      "A development project focused on interaction, responsive design and real-world functionality.",
  })),

  canva: Array.from({ length: 6 }, (_, index) => ({
    number: String(index + 1).padStart(2, "0"),
    title: `VISUAL / ${String(index + 1).padStart(2, "0")}`,
    type: "CANVA DESIGN",
    description:
      "A visual design project exploring composition, typography, branding and digital communication.",
  })),

  ai: [
    {
      number: "01",
      title: "SPECGUARD",
      type: "AI / AGENTIC ENGINEERING",
      description:
        "A requirements-to-reality agent that compares product requirements with repository code, tests and documentation using evidence-based verification.",
    },
    ...Array.from({ length: 5 }, (_, index) => ({
      number: String(index + 2).padStart(2, "0"),
      title: `AI SYSTEM / ${String(index + 2).padStart(2, "0")}`,
      type: "AI / ENGINEERING",
      description:
        "An AI engineering project exploring agents, automation, intelligent workflows and practical developer tools.",
    })),
  ],
};

/* =========================================================
   BUILD PROCESS
   ========================================================= */

const buildSteps = [
  ["01", "THINK", "Understand the idea."],
  ["02", "DESIGN", "Build the visual direction."],
  ["03", "DEVELOP", "Turn design into code."],
  ["04", "REFINE", "Polish every interaction."],
  ["05", "SHIP", "Make it real."],
];

/* =========================================================
   JOURNEY
   ========================================================= */

const journey = [
  ["01", "LEARN", "Building the fundamentals."],
  ["02", "BUILD", "Turning knowledge into projects."],
  ["03", "EXPLORE", "Experimenting with code, design and AI."],
  ["04", "CREATE", "Developing a personal digital language."],
];

/* =========================================================
   NAVIGATION
   ========================================================= */

const navItems = [
  ["home", "THE ENTRANCE"],
  ["identity", "THE SIGNAL"],
  ["stack", "SKILL SYSTEM"],
  ["proof", "PROOF OF WORK"],
  ["process", "BUILD FLOW"],
  ["projects", "SELECTED WORK"],
  ["lab", "CREATIVE LAB"],
  ["journey", "EVOLUTION"],
  ["contact", "OPEN CHANNEL"],
];

/* =========================================================
   APP
   ========================================================= */

function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [universeEntered, setUniverseEntered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const [selectedSkill, setSelectedSkill] = useState(null);
  const [projectCategory, setProjectCategory] = useState(null);

  const [contactOpen, setContactOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const portfolioRef = useRef(null);

  /* =======================================================
     INTRO TIMER
     ======================================================= */

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroFinished(true);
    }, 5200);

    return () => clearTimeout(timer);
  }, []);

  /* =======================================================
     PORTFOLIO SCROLL PROGRESS
     ======================================================= */

  useEffect(() => {
    const container = portfolioRef.current;

    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;

      const maxScroll = scrollHeight - clientHeight;

      if (maxScroll <= 0) {
        setProgress(0);
        return;
      }

      const percentage = (scrollTop / maxScroll) * 100;

      setProgress(Math.min(100, Math.max(0, percentage)));
    };

    container.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [universeEntered, projectCategory]);

  /* =======================================================
     REVEAL ANIMATIONS
     ======================================================= */

  useEffect(() => {
    if (!universeEntered) return;

    const container = portfolioRef.current;

    if (!container) return;

    const elements = container.querySelectorAll(".reveal");

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        root: container,
        threshold: 0.1,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [universeEntered, projectCategory]);

  /* =======================================================
     SAFE INTERNAL SCROLL
     ======================================================= */

  const goTo = (id) => {
    setMenuOpen(false);
    setProjectCategory(null);

    if (id === "contact") {
      setContactOpen(true);
    }

    requestAnimationFrame(() => {
      setTimeout(() => {
        const container = portfolioRef.current;
        const target = document.getElementById(id);

        if (!container || !target) return;

        const containerRect = container.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();

        const targetTop =
          container.scrollTop +
          (targetRect.top - containerRect.top);

        container.scrollTo({
          top: Math.max(0, targetTop),
          behavior: "smooth",
        });
      }, 80);
    });
  };

  /* =======================================================
     OPEN PROJECT COLLECTION
     ======================================================= */

  const openProjects = (category) => {
    setProjectCategory(category);
    setMenuOpen(false);

    requestAnimationFrame(() => {
      setTimeout(() => {
        const container = portfolioRef.current;

        if (!container) return;

        container.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 50);
    });
  };

  /* =======================================================
     BACK TO PROJECTS
     ======================================================= */

  const backToProjects = () => {
    setProjectCategory(null);

    requestAnimationFrame(() => {
      setTimeout(() => {
        const container = portfolioRef.current;
        const target = document.getElementById("projects");

        if (!container || !target) return;

        const containerRect = container.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();

        const targetTop =
          container.scrollTop +
          (targetRect.top - containerRect.top);

        container.scrollTo({
          top: Math.max(0, targetTop),
          behavior: "smooth",
        });
      }, 80);
    });
  };

  /* =======================================================
     POINTER GLOW
     ======================================================= */

  const handlePointerMove = (event) => {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();

    element.style.setProperty(
      "--mouse-x",
      `${event.clientX - rect.left}px`
    );

    element.style.setProperty(
      "--mouse-y",
      `${event.clientY - rect.top}px`
    );
  };

  /* =======================================================
     CONTACT FORM
     ======================================================= */

  const CONTACT_ENDPOINT =
    "https://formsubmit.co/ajax/nidazahara2007@gmail.com";

  const handleContactSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmitted(false);
    setSubmitError("");

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || result.success === false) {
        throw new Error("Message could not be sent.");
      }

      setSubmitted(true);
      form.reset();

      setTimeout(() => {
        setSubmitted(false);
      }, 4500);
    } catch (error) {
      console.error("Contact form error:", error);
      setSubmitError(
        "MESSAGE NOT SENT — CHECK THE CONTACT EMAIL SETUP."
      );
    }
  };

  /* =======================================================
     RENDER
     ======================================================= */

  return (
    <main className="opening">

      {/* ===================================================
          CINEMATIC INTRO
          =================================================== */}

      {!introFinished && (
        <section className="cinematic-intro">
          <div className="intro-stars"></div>

          <div className="intro-line"></div>

          <div className="aircraft">
            <div className="aircraft-body"></div>

            <div className="aircraft-wing aircraft-wing-top"></div>

            <div className="aircraft-wing aircraft-wing-bottom"></div>

            <div className="aircraft-tail"></div>

            <div className="aircraft-light"></div>
          </div>

          <div className="flight-trail"></div>

          <div className="intro-text">
            <span>INITIALIZING</span>
            <strong>DIGITAL UNIVERSE</strong>
          </div>
        </section>
      )}

      {/* ===================================================
          DIGITAL UNIVERSE OPENING
          =================================================== */}

      <section
        className={`universe-screen ${
          introFinished ? "universe-visible" : ""
        } ${
          universeEntered ? "universe-exit" : ""
        }`}
      >
        <div className="grid"></div>

        <div className="universe-noise"></div>

        <div className="orbit-system">
          <div className="orbit orbit-large"></div>

          <div className="orbit orbit-medium"></div>

          <div className="orbit orbit-small"></div>

          <div className="signal-dot"></div>

          <div className="signal-dot signal-dot-two"></div>
        </div>

        <div className="opening-content">
          <p className="eyebrow">
            DIGITAL UNIVERSE / 2026
          </p>

          <h1>NIDA</h1>

          <p className="subtitle">
            CODE × DESIGN × AI
          </p>

          <button
            className="enter-button"
            onClick={() => {
              setUniverseEntered(true);

              requestAnimationFrame(() => {
                setTimeout(() => {
                  portfolioRef.current?.scrollTo({
                    top: 0,
                    behavior: "instant",
                  });
                }, 50);
              });
            }}
          >
            ENTER THE UNIVERSE <span>→</span>
          </button>
        </div>

        <div className="universe-corner universe-corner-left">
          SYSTEM 01
        </div>

        <div className="universe-corner universe-corner-right">
          ONLINE
        </div>
      </section>

      {/* ===================================================
          MAIN PORTFOLIO
          =================================================== */}

      <section
        ref={portfolioRef}
        className={`portfolio ${
          universeEntered ? "portfolio-visible" : ""
        }`}
        onPointerMove={handlePointerMove}
      >

        {/* CURSOR GLOW */}

        <div
          className="cursor-glow"
          style={{
            left: "var(--mouse-x)",
            top: "var(--mouse-y)",
          }}
        ></div>

        {/* =================================================
            TOP PROGRESS
            ================================================= */}

        <div className="top-progress">
          <div
            className="top-progress-bar"
            style={{
              width: `${progress}%`,
            }}
          ></div>
        </div>

        {/* =================================================
            INDEX BUTTON
            ================================================= */}

        <button
          className={`index-trigger ${
            menuOpen ? "index-active" : ""
          }`}
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Open navigation"
          aria-expanded={menuOpen}
        >
          <span>INDEX</span>

          <strong>
            {menuOpen ? "×" : "+"}
          </strong>
        </button>

        {/* =================================================
            INDEX OVERLAY
            ================================================= */}

        <div
          className={`index-overlay ${
            menuOpen ? "index-open" : ""
          }`}
        >
          <div className="overlay-grid"></div>

          <div className="overlay-header">
            <span>
              NIDA / DIGITAL UNIVERSE
            </span>

            <span>
              INDEX 09
            </span>
          </div>

          <div className="overlay-navigation">
            {navItems.map(([id, label], index) => (
              <button
                key={id}
                onClick={() => goTo(id)}
              >
                <small>
                  {String(index + 1).padStart(2, "0")}
                </small>

                <span>{label}</span>

                <b>↗</b>
              </button>
            ))}
          </div>

          <div className="overlay-footer">
            CODE / DESIGN / AI
          </div>
        </div>

        {/* =================================================
            PROJECT DETAIL MODE
            ================================================= */}

        {projectCategory ? (
          <section className="project-detail-page">

            <div className="detail-topbar">

              <button
                className="back-button"
                onClick={backToProjects}
              >
                ← BACK TO PROJECTS
              </button>

              <span>
                PROJECT VAULT / 2026
              </span>

            </div>

            <div className="detail-heading reveal">

              <p className="section-index">
                CATEGORY / {projectCategory}
              </p>

              <h2>
                {
                  projectCategories.find(
                    (item) =>
                      item.id === projectCategory
                  )?.category
                }
              </h2>

              <p>
                Explore the selected work collection.
                Each project is structured for a future
                live link and case study.
              </p>

            </div>

            <div className="project-detail-grid">

              {projectsByCategory[projectCategory].map(
                (project) => (
                  <article
                    className="project-detail-card reveal"
                    key={project.number}
                  >

                    <div className="project-visual">

                      <div className="visual-lines"></div>

                      <span>
                        {project.number}
                      </span>

                      <div className="visual-center">
                        <b>PROJECT</b>

                        <strong>
                          {project.number}
                        </strong>
                      </div>

                    </div>

                    <div className="project-detail-info">

                      <div className="project-meta">
                        <span>
                          {project.type}
                        </span>

                        <span>
                          {project.number} / 06
                        </span>
                      </div>

                      <h3>
                        {project.title}
                      </h3>

                      <p>
                        {project.description}
                      </p>

                      <div className="project-actions">

                        <a
                          href="#"
                          onClick={(event) =>
                            event.preventDefault()
                          }
                        >
                          LIVE VIEW ↗
                        </a>

                        <button
                          onClick={() =>
                            alert(
                              "Case study will be added when this project is ready."
                            )
                          }
                        >
                          CASE STUDY →
                        </button>

                      </div>

                    </div>

                  </article>
                )
              )}

            </div>

            <div className="detail-bottom">

              <button
                className="continue-button"
                onClick={() => {
                  const currentIndex =
                    projectCategories.findIndex(
                      (item) =>
                        item.id === projectCategory
                    );

                  const next =
                    projectCategories[
                      (currentIndex + 1) %
                        projectCategories.length
                    ];

                  setProjectCategory(next.id);

                  requestAnimationFrame(() => {
                    setTimeout(() => {
                      portfolioRef.current?.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }, 50);
                  });
                }}
              >
                NEXT CATEGORY <span>→</span>
              </button>

            </div>

          </section>
        ) : (

          /* =================================================
             NORMAL PORTFOLIO
             ================================================= */

          <>

            {/* ===============================================
                01 — HOME
                =============================================== */}

            <section
              id="home"
              className="hero-section"
            >

              <div className="hero-top reveal">

                <span>
                  01 / THE ENTRANCE
                </span>

                <span>
                  CODE × DESIGN × AI
                </span>

              </div>

              <div className="hero-main">

                <p className="hero-kicker reveal">
                  CREATIVE DEVELOPER /
                  DIGITAL DESIGNER
                </p>

                <h2 className="hero-title reveal">
                  I BUILD
                  <br />
                  <span>
                    DIGITAL WORLDS.
                  </span>
                </h2>

                <p className="hero-description reveal">
                  I combine development, visual
                  design and artificial intelligence
                  to create digital experiences with
                  personality.
                </p>

                <button
                  className="hero-scroll reveal"
                  onClick={() =>
                    goTo("identity")
                  }
                >
                  SCROLL TO EXPLORE
                  <span>↓</span>
                </button>

              </div>

            </section>

            {/* ===============================================
                02 — IDENTITY
                =============================================== */}

            <section
              id="identity"
              className="identity-section"
            >

              <div className="section-heading reveal">

                <p className="section-index">
                  02 / THE SIGNAL
                </p>

                <h2>
                  NOT JUST
                  <br />
                  <span>
                    A DEVELOPER.
                  </span>
                </h2>

              </div>

              <div className="identity-grid">

                <div className="identity-copy reveal">

                  <p>
                    I work between code and visual
                    thinking — building interfaces
                    that feel intentional, useful
                    and memorable.
                  </p>

                  <p>
                    My current universe sits at
                    the intersection of development,
                    design and AI experimentation.
                  </p>

                </div>

                <div className="identity-stats reveal">

                  <div>
                    <strong>03</strong>
                    <span>
                      CORE DISCIPLINES
                    </span>
                  </div>

                  <div>
                    <strong>∞</strong>
                    <span>
                      IDEAS TO EXPLORE
                    </span>
                  </div>

                  <div>
                    <strong>01</strong>
                    <span>
                      DIGITAL UNIVERSE
                    </span>
                  </div>

                </div>

              </div>

            </section>

            {/* ===============================================
                03 — SKILLS
                =============================================== */}

            <section
              id="stack"
              className="stack-section"
            >

              <div className="section-heading reveal">

                <p className="section-index">
                  03 / SKILL SYSTEM
                </p>

                <h2>
                  WHAT I
                  <br />
                  <span>
                    CAN BUILD.
                  </span>
                </h2>

              </div>

              <div className="skills-grid">

                {skills.map((skill) => (
                  <article
                    className={`skill-panel reveal ${
                      selectedSkill === skill.number
                        ? "skill-active"
                        : ""
                    }`}
                    key={skill.number}
                  >

                    <div className="skill-panel-top">
                      <span>
                        {skill.number}
                      </span>

                      <span>
                        SKILL
                      </span>
                    </div>

                    <div className="skill-title">

                      <h3>
                        {skill.title}
                      </h3>

                      <strong>
                        {skill.subtitle}
                      </strong>

                    </div>

                    <p>
                      {skill.text}
                    </p>

                    <div className="skill-tags">

                      {skill.tags.map((tag) => (
                        <span key={tag}>
                          {tag}
                        </span>
                      ))}

                    </div>

                    <button
                      className="skill-trigger"
                      onClick={() =>
                        setSelectedSkill(
                          selectedSkill ===
                            skill.number
                            ? null
                            : skill.number
                        )
                      }
                    >
                      {selectedSkill ===
                      skill.number
                        ? "CLOSE VISUALS"
                        : "OPEN VISUALS"}

                      <span>↗</span>
                    </button>

                  </article>
                ))}

              </div>

              {/* SKILL SHOWCASE */}

              {selectedSkill && (
                <div className="skill-showcase">

                  <div className="showcase-header">

                    <div>

                      <span>
                        LIVE SKILL VISUAL
                      </span>

                      <strong>
                        {
                          skills.find(
                            (skill) =>
                              skill.number ===
                              selectedSkill
                          )?.title
                        }
                      </strong>

                    </div>

                    <small>
                      03 VISUALS
                    </small>

                  </div>

                  <div className="skill-visual-grid">

                    {skillVisuals[
                      skills.find(
                        (skill) =>
                          skill.number ===
                          selectedSkill
                      )?.title
                    ].map(
                      (
                        [number, title, type],
                        index
                      ) => (
                        <a
                          className="skill-visual-card"
                          href="#projects"
                          key={number}
                          onClick={(event) => {
                            event.preventDefault();
                            goTo("projects");
                          }}
                          style={{
                            "--delay": `${index * 120}ms`,
                          }}
                        >

                          <div className="skill-art">

                            <div className="art-grid"></div>

                            <div className="art-circle"></div>

                            <div className="art-line"></div>

                            <strong>
                              {number}
                            </strong>

                          </div>

                          <div className="skill-art-info">

                            <span>
                              {type}
                            </span>

                            <h3>
                              {title}
                            </h3>

                            <b>
                              VIEW WORK ↗
                            </b>

                          </div>

                        </a>
                      )
                    )}

                  </div>

                </div>
              )}

              <button
                className="section-next reveal"
                onClick={() =>
                  goTo("proof")
                }
              >
                CONTINUE TO PROOF
                <span>→</span>
              </button>

            </section>

            {/* ===============================================
                04 — PROOF
                =============================================== */}

            <section
              id="proof"
              className="proof-section"
            >

              <div className="proof-heading reveal">

                <p className="section-index">
                  04 / PROOF OF WORK
                </p>

                <h2>
                  IDEAS ARE
                  <br />
                  <span>
                    BETTER WHEN BUILT.
                  </span>
                </h2>

              </div>

              <div className="proof-grid">

                <div className="proof-item reveal">
                  <strong>03</strong>
                  <span>
                    CORE SKILLS
                  </span>
                  <p>
                    Development / Design / AI
                  </p>
                </div>

                <div className="proof-item reveal">
                  <strong>24</strong>
                  <span>
                    PROJECT SLOTS
                  </span>
                  <p>
                    Growing with every build
                  </p>
                </div>

                <div className="proof-item reveal">
                  <strong>∞</strong>
                  <span>
                    EXPERIMENTS
                  </span>
                  <p>
                    Always testing something new
                  </p>
                </div>

                <div className="proof-item reveal">
                  <strong>01</strong>
                  <span>
                    CREATIVE SYSTEM
                  </span>
                  <p>
                    Code × Design × AI
                  </p>
                </div>

              </div>

            </section>

            {/* ===============================================
                05 — PROCESS
                =============================================== */}

            <section
              id="process"
              className="process-section"
            >

              <div className="section-heading reveal">

                <p className="section-index">
                  05 / BUILD FLOW
                </p>

                <h2>
                  FROM IDEA
                  <br />
                  <span>
                    TO REALITY.
                  </span>
                </h2>

              </div>

              <div className="process-list">

                {buildSteps.map(
                  ([number, title, text]) => (
                    <div
                      className="process-row reveal"
                      key={number}
                    >

                      <span>
                        {number}
                      </span>

                      <h3>
                        {title}
                      </h3>

                      <p>
                        {text}
                      </p>

                      <b>
                        ↗
                      </b>

                    </div>
                  )
                )}

              </div>

            </section>

            {/* ===============================================
                06 — PROJECTS
                =============================================== */}

            <section
              id="projects"
              className="projects-section"
            >

              <div className="projects-intro reveal">

                <div>

                  <p className="section-index">
                    06 / SELECTED WORK
                  </p>

                  <h2>
                    PROJECTS
                    <br />
                    <span>
                      IN PROGRESS.
                    </span>
                  </h2>

                </div>

                <p>
                  Four directions. One creative
                  system. Each collection will grow
                  as real projects are added.
                </p>

              </div>

              <div className="category-grid">

                {projectCategories.map(
                  (category) => (
                    <article
                      className="category-card reveal"
                      key={category.id}
                    >

                      <div className="category-visual">

                        <span>
                          {category.number}
                        </span>

                        <div className="category-symbol">

                          {category.id ===
                            "figma" && "◈"}

                          {category.id ===
                            "web" && "⌁"}

                          {category.id ===
                            "canva" && "✦"}

                          {category.id ===
                            "ai" && "⌬"}

                        </div>

                        <div className="category-corner">
                          SELECTED WORK
                        </div>

                      </div>

                      <div className="category-content">

                        <span>
                          {category.category}
                        </span>

                        <h3>
                          {category.title}
                        </h3>

                        <p>
                          {category.description}
                        </p>

                        <div className="category-tags">

                          {category.tags.map(
                            (tag) => (
                              <small key={tag}>
                                {tag}
                              </small>
                            )
                          )}

                        </div>

                        <button
                          className="category-open"
                          onClick={() =>
                            openProjects(
                              category.id
                            )
                          }
                        >
                          OPEN COLLECTION
                          <span>→</span>
                        </button>

                      </div>

                    </article>
                  )
                )}

              </div>

            </section>

            {/* ===============================================
                07 — CREATIVE LAB
                =============================================== */}

            <section
              id="lab"
              className="lab-section"
            >

              <div className="section-heading reveal">

                <p className="section-index">
                  07 / CREATIVE LAB
                </p>

                <h2>
                  ALWAYS
                  <br />
                  <span>
                    EXPERIMENTING.
                  </span>
                </h2>

              </div>

              <div className="lab-grid">

                <div className="lab-card reveal">
                  <span>01</span>

                  <strong>
                    AI × CODE
                  </strong>

                  <p>
                    Exploring how AI can accelerate
                    ideas, prototypes and development.
                  </p>
                </div>

                <div className="lab-card reveal">
                  <span>02</span>

                  <strong>
                    UI MOTION
                  </strong>

                  <p>
                    Designing subtle interactions
                    that make interfaces feel alive.
                  </p>
                </div>

                <div className="lab-card reveal">
                  <span>03</span>

                  <strong>
                    VISUAL SYSTEMS
                  </strong>

                  <p>
                    Experimenting with typography,
                    composition and digital identity.
                  </p>
                </div>

              </div>

            </section>

            {/* ===============================================
                08 — JOURNEY
                =============================================== */}

            <section
              id="journey"
              className="journey-section"
            >

              <div className="section-heading reveal">

                <p className="section-index">
                  08 / EVOLUTION
                </p>

                <h2>
                  STILL
                  <br />
                  <span>
                    EVOLVING.
                  </span>
                </h2>

              </div>

              <div className="journey-list">

                {journey.map(
                  ([number, title, text]) => (
                    <div
                      className="journey-row reveal"
                      key={number}
                    >

                      <span>
                        {number}
                      </span>

                      <h3>
                        {title}
                      </h3>

                      <p>
                        {text}
                      </p>

                    </div>
                  )
                )}

              </div>

            </section>

            {/* ===============================================
                09 — CONTACT
                =============================================== */}

            <section
              id="contact"
              className="contact-section"
            >

              <div className="contact-heading reveal">

                <p className="section-index">
                  09 / OPEN CHANNEL
                </p>

                <h2>
                  LET'S BUILD
                  <br />
                  <span>
                    SOMETHING UNEXPECTED.
                  </span>
                </h2>

              </div>

              <button
                className="contact-open-button reveal"
                onClick={() =>
                  setContactOpen(
                    (current) => !current
                  )
                }
              >
                {contactOpen
                  ? "CLOSE CONTACT FORM"
                  : "OPEN CONTACT FORM"}

                <span>
                  ↗
                </span>
              </button>

              {contactOpen && (
                <div className="contact-layout">

                  <form
                    className="contact-form reveal"
                    onSubmit={handleContactSubmit}
                  >

                    <input
                      type="hidden"
                      name="_subject"
                      value="New Portfolio Contact — Nida"
                    />

                    <input
                      type="hidden"
                      name="_captcha"
                      value="false"
                    />

                    <label>
                      NAME

                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        autoComplete="name"
                        required
                      />
                    </label>

                    <label>
                      EMAIL

                      <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                      />
                    </label>

                    <label>
                      MESSAGE

                      <textarea
                        name="message"
                        rows="6"
                        placeholder="Tell me about your idea..."
                        required
                      ></textarea>
                    </label>

                    <button
                      type="submit"
                      disabled={submitted}
                    >
                      {submitted
                        ? "MESSAGE SENT ✓"
                        : "SEND MESSAGE →"}
                    </button>

                    {submitError && (
                      <p className="contact-form-error">
                        {submitError}
                      </p>
                    )}

                  </form>

                  <div className="system-status reveal">

                    <span>
                      SYSTEM STATUS
                    </span>

                    <div className="status-line">

                      <i></i>

                      <strong>
                        OPEN TO OPPORTUNITIES
                      </strong>

                    </div>

                    <p>
                      Remote work / freelance /
                      collaboration
                    </p>

                    <div className="status-block">

                      <small>
                        CURRENTLY EXPLORING
                      </small>

                      <strong>
                        AI × CODE × DESIGN
                      </strong>

                    </div>

                    <div className="status-block">

                      <small>
                        LOCATION
                      </small>

                      <strong>
                        DIGITAL / ONLINE
                      </strong>

                    </div>

                  </div>

                </div>
              )}

            </section>

            {/* ===============================================
                FOOTER
                =============================================== */}

            <footer className="portfolio-footer">

              <span>
                NIDA / DIGITAL UNIVERSE
              </span>

              <span>
                CODE × DESIGN × AI
              </span>

              <span>
                © 2026
              </span>

            </footer>

          </>
        )}

      </section>
    </main>
  );
}

export default App;
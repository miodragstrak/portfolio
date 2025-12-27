import { ProjectCard } from "./components/ProjectCard";

function App() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-avatar">
          <img src="/portfolio/profile.jpg" alt="Miodrag Strak" />
        </div>

        <div className="hero-content">
          <h1>Miodrag Strak</h1>
          <h2>Product Manager · Automation & AI Systems</h2>
          <p>
            I design and deliver complex digital products by combining
            product strategy, automation, and AI-driven workflows —
            from concept to production.
          </p>

          <div className="actions">
            <a
              href="/portfolio/CV_MiodragStrak.pdf"
              className="btn primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <h3>Projects</h3>

        <div className="cards">
          <ProjectCard
            title="AI Automation Platform"
            summary="AI-driven automation platform integrating CRMs, messaging systems, and external APIs to reduce manual operational work."
            actions={[
              "Defined product requirements and automation flows",
              "Designed AI-assisted workflows for CRM and messaging systems",
              "Coordinated API integrations and implementation",
            ]}
            result="Reduced manual work by 60%+ and improved process reliability."
            tools={[
              "n8n",
              "OpenAI API",
              "REST APIs",
              "CRM systems",
              "Webhooks",
            ]}
            link="https://github.com/yourusername/ai-automation-platform"
          />

          <ProjectCard
            title="Logistics Intelligence Dashboard"
            summary="Dashboard providing real-time shipment tracking and trade intelligence through third-party logistics APIs."
            actions={[
              "Led API vendor evaluation and comparison",
              "Defined data models and dashboard requirements",
              "Coordinated data integration and synchronization",
            ]}
            result="Enabled real-time shipment visibility and data-driven operational decisions."
            tools={[
              "Logistics APIs",
              "Data aggregation",
              "Dashboards",
              "Product discovery",
            ]}
            link="https://github.com/yourusername/logistics-dashboard"
          />
        </div>
      </section>

      <section className="section">
        <h3>Skills & Certifications</h3>

        <div className="skills-grid">
          <div className="skill-group">
            <h4>Product & Strategy</h4>
            <ul>
              <li>Product discovery & roadmapping</li>
              <li>Stakeholder management</li>
              <li>Requirements definition</li>
              <li>Process optimization</li>
            </ul>
          </div>

          <div className="skill-group">
            <h4>Automation & AI</h4>
            <ul>
              <li>Workflow automation (n8n)</li>
              <li>AI agents & prompt design</li>
              <li>API orchestration</li>
              <li>Event-driven systems</li>
            </ul>
          </div>

          <div className="skill-group">
            <h4>Technical</h4>
            <ul>
              <li>JavaScript · Node.js</li>
              <li>REST APIs · Webhooks</li>
              <li>SQL · Data modeling</li>
              <li>Git · Basic React</li>
            </ul>
          </div>

          <div className="skill-group">
            <h4>Certifications</h4>
            <ul className="cert-list">
              <li>
                <strong>Business Plan Development</strong>
                <span>Faculty of Organizational Sciences (FON)</span>
              </li>
              <li>
                <strong>ISO Standards & Quality Management</strong>
                <span>TÜV Serbia</span>
              </li>
              <li>
                <strong>AI & Automation (Applied)</strong>
                <span>Project-based experience</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

    <section className="section">
      <h3>Contact</h3>

      <p className="muted">
        Feel free to reach out or explore my work through the links below.
      </p>

      <div className="social-links icons">
        <a
          href="mailto:miodrag@example.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 4h16v16H4z" fill="none" />
            <path d="M20 6l-8 5-8-5v2l8 5 8-5z" />
          </svg>
          Email
        </a>

        <a
          href="https://www.linkedin.com/in/your-linkedin/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 3a2 2 0 110 4 2 2 0 010-4zm-1 6h2v12H3V9zm6 0h2v2h.03c.28-.53.97-1.09 2-1.09 2.14 0 2.54 1.41 2.54 3.24V21h-2v-6.13c0-1.46-.03-3.34-2.03-3.34-2.03 0-2.34 1.58-2.34 3.24V21h-2V9z" />
          </svg>
          LinkedIn
        </a>

        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 .5a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.21.09 1.85 1.24 1.85 1.24 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.24-3.24-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.92 1.24 3.24 0 4.64-2.8 5.66-5.48 5.96.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0012 .5z" />
          </svg>
          GitHub
        </a>
      </div>
    </section>
    </div>
  );
}

export default App;

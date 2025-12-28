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
          <h2>Product Manager · Automation & Intelligent Systems</h2>
          <p>
            I design and deliver complex digital products by combining
            product strategy, automation, and intelligent systems -
            bridging technology, organizations, and real-world constraints.
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
            title="AI-Driven Travel Itinerary & Quotation Automation"
            summary="Designed and delivered a dynamic AI-assisted system for building and pricing multi-day golf travel itineraries, fully automated through Google Sheets and workflow orchestration."
            role="AI Automation Engineer · Product Designer"
            solution="Designed and implemented a complete itinerary-building and quotation system that enables travel managers to generate detailed day-by-day
                      golf travel packages including transport, accommodation, golf courses,
                      and local tours.

                      The solution dynamically pulls pricing and configuration data from
                      Google Sheets and assembles structured itineraries using automated
                      workflows and AI-assisted content generation."
            stack="JavaScript · n8n · AI Agent API · Google Sites"
            duration="Jul 2025 - Nov 2025"
            link="https://sites.google.com/view/golf-connor/input-parameters"
            thumbnail={`${import.meta.env.BASE_URL}thumbs/n8n.jpeg`}
          />

          <ProjectCard
            title="NelutAI - AI-Powered Tourist Experience Assistant"
            summary="Designed and developed an AI-powered chatbot that helps tourists
                    interact with destinations through natural language, leveraging
                    open data and cloud-based AI services."
            role="Product Lead · AI Systems Designer"
            solution="Led the design and development of NelutAI, an AI-driven conversational
                      assistant that enables tourists to access destination information,
                      services, and recommendations through natural language interaction.

                      The solution integrates open data sources and curated local knowledge,
                      and is deployed using cloud-based AI infrastructure to ensure
                      scalability, reliability, and real-time response generation."
            stack="AI Chatbot Frameworks · Open Data APIs · Microsoft Azure · Workflow Automation · Web Integrations"
            duration="May 2024 - Jun 2025"
            link="https://miodragstrak.github.io/_nelutai/"
            thumbnail={`${import.meta.env.BASE_URL}thumbs/nelutai.png`}
          />

          <ProjectCard
            title="Materialize - Decentralized Manufacturing Platform"
            summary="Co-founded a decentralized fabrication platform bridging digital
                    ownership and physical manufacturing through verifiable on-chain
                    production events."
            role="Startup Co-Founder · Product & Strategy Lead · Developer"
            solution="Materialize introduces Decentralized Fabrication (DeFab), a network
                      of verified manufacturing machines that record each act of physical
                      creation on-chain.

                      The platform enables “Reverse RWA” workflows, where NFT designs are
                      materialized into physical objects and cryptographically verified
                      through machine data and blockchain proofs.

                      The first Proof of Make prototype was demonstrated during the
                      Colosseum Cypherpunk Hackathon, producing a CNC-engraved pendant
                      verified on-chain. The project is being extended with knowledge-layer
                      anchoring to ensure full traceability from design to physical output."
            stack="Solana · OriginTrail DKG · CNC / LaserGRBL · DePIN · IoT"
            duration="Sep 2025 - Present"
            link="https://www.materialize4.me/"
            thumbnail={`${import.meta.env.BASE_URL}thumbs/materialize.jpg`}
          />

          <ProjectCard
            title="StayDirect AI - AI-Driven PropTech Marketing Automation"
            summary="Led technical project delivery for an AI-powered property rental
                    platform focused on direct bookings and automated guest engagement."
            role="Technical Project Manager"
            solution="Managed technical delivery for StayDirect, a property rental platform
                      designed to streamline direct bookings for hosts while improving guest
                      communication and retention.

                      The platform integrates AI-driven automation to support marketing,
                      messaging, and onboarding workflows, reducing operational overhead
                      for property owners and improving conversion rates."
            stack="AI Automation · CRM Integrations · Workflow Orchestration · Web Platforms · Messaging Automation"
            duration="Sep 2024 - Jun 2025"
            link="https://www.staydirect.ai/"
            thumbnail={`${import.meta.env.BASE_URL}thumbs/staydirect.png`}
          />

          <ProjectCard
            title="VSEA - Utility Token for the SEA Nexus"
            summary="Managed the launch and evolution of a blockchain-based utility token
                    supporting environmental data integrity and incentive mechanisms."
            role="Project Manager"
            solution="Supported the design, launch, and lifecycle management of VSEA,
                      the utility token powering the SEA Nexus ecosystem.

                      The token incentivizes accurate environmental data, supports network
                      operations, and aligns stakeholder participation through transparent,
                      on-chain economic mechanisms."
            stack="Algorand (ASA) · Token Economics · Blockchain Governance · Environmental Data Systems"
            duration="Jan 2022 - Mar 2025"
            link="https://sea.earth/"
            thumbnail={`${import.meta.env.BASE_URL}thumbs/vsea.png`}
          />

          <ProjectCard
            title="RTI Blockchain - Returnable Transport Item Management"
            summary="Contributed to a blockchain-based platform simplifying registration
                    and tracking of returnable transport items in supply chains."
            role="Business Analyst"
            solution="Supported the development of a blockchain platform that automates the
                      registration and tracking of returnable transport items (RTIs),
                      providing a single, transparent overview of load carrier data,
                      balances, and stock levels.

                      The solution significantly reduced reconciliation effort and improved
                      visibility across logistics stakeholders."
            stack="Blockchain · Supply Chain · Data Analysis · Business Process Modeling"
            duration="Jan 2022 - Jun 2023"
            link="https://www.rtiblockchain.com/"
            thumbnail={`${import.meta.env.BASE_URL}thumbs/rtiblockchain.png`}
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
                <strong>Business Investment Plan Development (2025)</strong>
                <span>Chamber of Commerce and Industry of Serbia - training in investment planning, entrepreneurship, and business sustainability.</span>
              </li>
              <li>
                <strong>Software Development (2023)</strong>
                <span>MVP Workshop - Hands-on training focused on software development in blockchain and Web3-based software projects.</span>
              </li>
              <li>
                <strong>Scrum Master Accredited Certification (2019)</strong>
                <span>International Scrum Institute™ - Agile delivery, team facilitation, and iterative product development.</span>
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
          href="mailto:miodrag.strak@gmail.com"
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
          href="https://www.linkedin.com/in/miodragstrak/"
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
          href="https://github.com/miodragstrak"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 .5a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.21.09 1.85 1.24 1.85 1.24 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.24-3.24-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.92 1.24 3.24 0 4.64-2.8 5.66-5.48 5.96.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0012 .5z" />
          </svg>
          GitHub
        </a>

        <a
          href="https://x.com/MiodragStrak"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.24 2H21l-6.54 7.47L22 22h-6.5l-5.1-6.1L4.8 22H2l7-8L2 2h6.6l4.6 5.5L18.24 2z"/>
          </svg>
          X
        </a>

        <a
          href="https://www.instagram.com/miodrag.strak/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm10 2H7a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3zm-5 3a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm4.8-.9a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"/>
          </svg>
          Instagram
        </a>
      </div>
    </section>
    </div>
  );
}

export default App;

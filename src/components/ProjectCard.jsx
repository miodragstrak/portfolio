import { useState } from "react";

export function ProjectCard({
  title,
  summary,
  actions,
  result,
  tools,
  link,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`project-card compact ${open ? "open" : ""}`}>
      <div className="project-header">
        <h4 className="project-title">{title}</h4>

        <button
          className="project-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          {open ? "Hide details ▴" : "Show details ▾"}
        </button>
      </div>

      <p className="project-summary">{summary}</p>

      <p className="project-result">
        <strong>Result:</strong> {result}
      </p>

      {open && (
        <div className="project-details">
          <ul className="project-actions">
            {actions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className="project-tools">{tools.join(" · ")}</p>

          {link && (
            <a
              href={link}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View project →
            </a>
          )}
        </div>
      )}
    </div>
  );
}

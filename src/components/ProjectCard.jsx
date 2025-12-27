import { useState } from "react";

export function ProjectCard({
  title,
  summary,
  role,
  solution,
  stack,
  duration,
  link,
  thumbnail,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`project-card ${open ? "open" : ""}`}>
      {/* COLLAPSED HEADER */}
      <div className="project-main">
        <div className="project-thumb">
          <img src={thumbnail} alt={`${title} thumbnail`} />
        </div>

        <div className="project-info">
          <h4 className="project-title">{title}</h4>
          <p className="project-summary">{summary}</p>
          <p className="project-role">
            <strong>Role:</strong> {role}
          </p>

          <button
            className="project-toggle"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
          >
            {open ? "Hide details ▴" : "Show details ▾"}
          </button>
        </div>
      </div>

      {/* EXPANDED DETAILS */}
      {open && (
        <div className="project-details">
          <p>
            <strong>Solution</strong>
            <br />
            {solution}
          </p>

          <p>
            <strong>Stack</strong>
            <br />
            {stack}
          </p>

          <p>
            <strong>Duration</strong>
            <br />
            {duration}
          </p>

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View project →
            </a>
          )}
        </div>
      )}
    </div>
  );
}

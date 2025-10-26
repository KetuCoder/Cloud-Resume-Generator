export default function ResumePreview({ resume, template }) {
  if (!resume.username) return <p>No resume data provided.</p>;

  const listFormat = (text) =>
    text?.split(",").map((item, i) => <li key={i}>{item.trim()}</li>);

  if (template === "classic") {
    return (
      <div id={`resume-preview-${template}`} className="resume-preview-container resume-classic">
        <h1>{resume.username}</h1>
        <p><strong>Email:</strong> {resume.email}</p>
        <p><strong>Country:</strong> {resume.country}</p>

        <section>
          <h3>Education</h3>
          <p>{resume.college}</p>
        </section>

        <section>
          <h3>Experience</h3>
          <p>{resume.experience}</p>
        </section>

        <section>
          <h3>Internship</h3>
          <p>{resume.internship}</p>
        </section>

        <section>
          <h3>Skills</h3>
          <ul>{listFormat(resume.skills)}</ul>
        </section>

        <section>
          <h3>Soft Skills</h3>
          <ul>{listFormat(resume.softSkills)}</ul>
        </section>

        <section>
          <h3>Certifications</h3>
          <p>{resume.certification}</p>
        </section>
      </div>
    );
  }

  // ==== MODERN TEMPLATE ====
  return (
    <div id={`resume-preview-${template}`} className="resume-preview-container resume-modern">
      <div className="header">
        <h1>{resume.username}</h1>
        <p>{resume.email} | {resume.country}</p>
      </div>

      <h3>Education</h3>
      <p>{resume.college}</p>

      <h3>Experience</h3>
      <p>{resume.experience}</p>

      <h3>Internship</h3>
      <p>{resume.internship}</p>

      <h3>Skills</h3>
      <ul>{listFormat(resume.skills)}</ul>

      <h3>Soft Skills</h3>
      <ul>{listFormat(resume.softSkills)}</ul>

      <h3>Certifications</h3>
      <p>{resume.certification}</p>
    </div>
  );
}

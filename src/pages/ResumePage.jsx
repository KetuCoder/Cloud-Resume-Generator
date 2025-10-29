import { useState } from "react";
import Navbar from "../components/Navbar";
import ResumePreview from "../components/ResumePreview";
import { generatePDF } from "../utils/pdfUtils";

export default function ResumePage() {
  const data = JSON.parse(localStorage.getItem("resumeData") || "{}");
  const [s3Url, setS3Url] = useState("");

  const handleDownload = async (templateType) => {
    const requiredFields = [
      "username", "email", "country", "college",
      "skills", "experience", "internship", "softSkills", "certification"
    ];
    const missing = requiredFields.filter((field) => !data[field]);

    if (missing.length > 0) {
      alert(`Please fill all fields before downloading: ${missing.join(", ")}`);
      return;
    }

    try {
      const pdfBlob = await generatePDF(templateType, true);
      const filename = `${data.username || "resume"}-${templateType}.pdf`;
      const apiUrl = "https://nvos8oe6ul.execute-api.us-east-2.amazonaws.com/test/resume"; // ✅ your API Gateway URL

      // Convert Blob → base64
      const arrayBuffer = await pdfBlob.arrayBuffer();
      const base64Data = btoa(
        new Uint8Array(arrayBuffer).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      );

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          filename,
          fileData: base64Data,
          ...data
        }),
      });

      if (!response.ok) throw new Error("Upload failed");

      const { url } = await response.json();
      setS3Url(url);
    } catch (error) {
      console.error(error);
      alert("Something went wrong while uploading your resume.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2 style={{ textAlign: "center", marginBottom: "25px" }}>
          Choose Your Resume Template
        </h2>

        <div className="resume-page-grid">
          {/* Classic Template */}
          <div>
            <h3 style={{ textAlign: "center" }}>Classic Template</h3>
            <div id="resume-preview-classic">
              <ResumePreview resume={data} template="classic" />
            </div>
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <button onClick={() => handleDownload("classic")}>
                Upload Classic Resume
              </button>
            </div>
          </div>

          {/* Modern Template */}
          <div>
            <h3 style={{ textAlign: "center" }}>Modern Template</h3>
            <div id="resume-preview-modern">
              <ResumePreview resume={data} template="modern" />
            </div>
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <button onClick={() => handleDownload("modern")}>
                Upload Modern Resume
              </button>
            </div>
          </div>
        </div>

        {s3Url && (
          <div style={styles.s3Card}>
            <h3>✅ Your Resume Is uploaded !</h3>
            <p>Click Below To View It From S3:</p>
            <a
              href={s3Url}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.s3Link}
            >
              View Resume On S3
            </a>
          </div>
        )}
      </div>
    </>
  );
}


const styles = {
  downloadButton: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  s3Card: {
    marginTop: "40px",
    padding: "20px",
    border: "1px solid #28a745",
    borderRadius: "8px",
    backgroundColor: "#e9f9ee",
    textAlign: "center",
  },
  s3Link: {
    display: "inline-block",
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "#fff",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
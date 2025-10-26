// import Navbar from "../components/Navbar";
// import ResumePreview from "../components/ResumePreview";
// import { generatePDF } from "../utils/pdfUtils";

// export default function ResumePage() {
//   const data = JSON.parse(localStorage.getItem("resumeData") || "{}");

// //
// const LAMBDA_API_URL = "https://YOUR_API_GATEWAY_URL/resume/generate";

//   const handleDownload = async (templateType) => {
//     // Validation check
//     const requiredFields = [
//       "username", "email", "country", "college",
//       "skills", "experience", "internship", "softSkills", "certification"
//     ];
//     const missing = requiredFields.filter(field => !data[field]);
//     if (missing.length > 0) {
//       alert(`Please fill all fields before downloading: ${missing.join(", ")}`);
//       return;
//     }

//     try {
//       const response = await fetch(LAMBDA_API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           ...data,
//           template: templateType,  // either "classic" or "modern"
//         }),
//       });

//       const result = await response.json();

//       if (response.ok && result.downloadUrl) {
//         alert(`✅ Resume PDF generated successfully!\n\nDownload link:\n${result.downloadUrl}`);
//         window.open(result.downloadUrl, "_blank"); // open the presigned URL
//       } else {
//         alert(`❌ Error: ${result.message || "Something went wrong"}`);
//       }
//     } catch (error) {
//       console.error("Error generating resume:", error);
//       alert("Failed to connect to the server. Try again.");
//     }
//   };
// //

  
//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <h2 style={{ textAlign: "center", marginBottom: "25px" }}>
//           Choose Your Resume Template
//         </h2>

//         <div className="resume-page-grid">
//           <div>
//             <h3 style={{ textAlign: "center" }}>Classic Template</h3>
//             <ResumePreview resume={data} template="classic" />
//             <div style={{ textAlign: "center", marginTop: "10px" }}>
//               <button onClick={() => generatePDF("classic")}>Download Classic</button>
//             </div>
//           </div>

//           <div>
//             <h3 style={{ textAlign: "center" }}>Modern Template</h3>
//             <ResumePreview resume={data} template="modern" />
//             <div style={{ textAlign: "center", marginTop: "10px" }}>
//               <button onClick={() => generatePDF("modern")}>Download Modern</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// import Navbar from "../components/Navbar";
// import ResumePreview from "../components/ResumePreview";

// export default function ResumePage() {
//   const data = JSON.parse(localStorage.getItem("resumeData") || "{}");

//   // Lambda API Gateway endpoint (replace with your actual one)
//   const LAMBDA_API_URL = "https://b2oudm0t2f.execute-api.us-east-1.amazonaws.com/resume/resume";

//   // Function to generate and download PDF from Lambda
//   const handleDownload = async (templateType) => {
//     // Validation check
//     const requiredFields = [
//       "username", "email", "country", "college",
//       "skills", "experience", "internship", "softSkills", "certification"
//     ];
//     const missing = requiredFields.filter(field => !data[field]);
//     if (missing.length > 0) {
//       alert(`Please fill all fields before downloading: ${missing.join(", ")}`);
//       return;
//     }

//     try {
//       const response = await fetch(LAMBDA_API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           ...data,
//           template: templateType,  // either "classic" or "modern"
//         }),
//       });

//       const result = await response.json();

//       if (response.ok && result.downloadUrl) {
//         alert(`✅ Resume PDF generated successfully!\n\nDownload link:\n${result.downloadUrl}`);
//         window.open(result.downloadUrl, "_blank"); // open the presigned URL
//       } else {
//         alert(`❌ Error: ${result.message || "Something went wrong"}`);
//       }
//     } catch (error) {
//       console.error("Error generating resume:", error);
//       alert("Failed to connect to the server. Try again.");
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <h2 style={{ textAlign: "center", marginBottom: "25px" }}>
//           Choose Your Resume Template
//         </h2>

//         <div className="resume-page-grid">
//           {/* Classic Template */}
//           <div>
//             <h3 style={{ textAlign: "center" }}>Classic Template</h3>
//             <ResumePreview resume={data} template="classic" />
//             <div style={{ textAlign: "center", marginTop: "10px" }}>
//               <button onClick={() => handleDownload("classic")}>
//                 Download Classic PDF
//               </button>
//             </div>
//           </div>

//           {/* Modern Template */}
//           <div>
//             <h3 style={{ textAlign: "center" }}>Modern Template</h3>
//             <ResumePreview resume={data} template="modern" />
//             <div style={{ textAlign: "center", marginTop: "10px" }}>
//               <button onClick={() => handleDownload("modern")}>
//                 Download Modern PDF
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


// testing logic starts here

// import Navbar from "../components/Navbar";
// import ResumePreview from "../components/ResumePreview";
// import { generatePDF } from "../utils/pdfUtils"; // ✅ Import the utility

// export default function ResumePage() {
//   const data = JSON.parse(localStorage.getItem("resumeData") || "{}");

//   // Function to generate PDF directly in the browser
//   const handleDownload = (templateType) => {
//     // Validation check
//     const requiredFields = [
//       "username", "email", "country", "college",
//       "skills", "experience", "internship", "softSkills", "certification"
//     ];
//     const missing = requiredFields.filter((field) => !data[field]);

//     if (missing.length > 0) {
//       alert(`Please fill all fields before downloading: ${missing.join(", ")}`);
//       return;
//     }

//     try {
//       // ✅ Generate the PDF using the utility
//       generatePDF(templateType);
//     } catch (error) {
//       console.error("Error generating PDF:", error);
//       alert("Something went wrong while generating the PDF.");
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <h2 style={{ textAlign: "center", marginBottom: "25px" }}>
//           Choose Your Resume Template
//         </h2>

//         <div className="resume-page-grid">
//           {/* Classic Template */}
//           <div>
//             <h3 style={{ textAlign: "center" }}>Classic Template</h3>
//             {/* Each preview should have a unique ID so html2pdf can find it */}
//             <div id="resume-preview-classic">
//               <ResumePreview resume={data} template="classic" />
//             </div>
//             <div style={{ textAlign: "center", marginTop: "10px" }}>
//               <button onClick={() => handleDownload("classic")}>
//                 Download Classic PDF
//               </button>
//             </div>
//           </div>

//           {/* Modern Template */}
//           <div>
//             <h3 style={{ textAlign: "center" }}>Modern Template</h3>
//             <div id="resume-preview-modern">
//               <ResumePreview resume={data} template="modern" />
//             </div>
//             <div style={{ textAlign: "center", marginTop: "10px" }}>
//               <button onClick={() => handleDownload("modern")}>
//                 Download Modern PDF
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


// production code starts here



// import Navbar from "../components/Navbar";
// import ResumePreview from "../components/ResumePreview";

// export default function ResumePage() {
//   const data = JSON.parse(localStorage.getItem("resumeData") || "{}");

//   // Lambda API Gateway endpoint (replace this with yours)
//   const LAMBDA_API_URL =
//     "https://siatpnsx57.execute-api.ap-south-1.amazonaws.com/try/test";

//   // Function to request PDF generation from Lambda
//   const handleDownload = async (templateType) => {
//     const requiredFields = [
//       "username",
//       "email",
//       "country",
//       "college",
//       "skills",
//       "experience",
//       "internship",
//       "softSkills",
//       "certification",
//     ];

//     const missing = requiredFields.filter((field) => !data[field]);
//     if (missing.length > 0) {
//       alert(`Please fill all fields before downloading: ${missing.join(", ")}`);
//       return;
//     }

//     try {
//       const response = await fetch(LAMBDA_API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           ...data,
//           template: templateType, // "classic" or "modern"
//         }),
//       });

//       const result = await response.json();

//       if (response.ok && result.downloadUrl) {
//         alert(
//           `✅ Resume PDF generated successfully!\n\nYour download link will open in a new tab.`
//         );
//         window.open(result.downloadUrl, "_blank");
//       } else {
//         alert(`❌ Error: ${result.message || "Something went wrong."}`);
//       }
//     } catch (error) {
//       console.error("Error generating resume:", error);
//       alert("Failed to connect to the server. Please try again.");
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <h2 style={{ textAlign: "center", marginBottom: "25px" }}>
//           Choose Your Resume Template
//         </h2>

//         <div className="resume-page-grid">
//           {/* Classic Template */}
//           <div>
//             <h3 style={{ textAlign: "center" }}>Classic Template</h3>
//             <ResumePreview resume={data} template="classic" />
//             <div style={{ textAlign: "center", marginTop: "10px" }}>
//               <button onClick={() => handleDownload("classic")}>
//                 Generate Classic PDF
//               </button>
//             </div>
//           </div>

//           {/* Modern Template */}
//           <div>
//             <h3 style={{ textAlign: "center" }}>Modern Template</h3>
//             <ResumePreview resume={data} template="modern" />
//             <div style={{ textAlign: "center", marginTop: "10px" }}>
//               <button onClick={() => handleDownload("modern")}>
//                 Generate Modern PDF
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }













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
      const apiUrl = "https://564qrvptn9.execute-api.us-west-2.amazonaws.com/test/resume"; // replace

      const formData = new FormData();
      formData.append("file", pdfBlob, filename);

      const response = await fetch(apiUrl, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Upload failed");

      const { url } = await response.json();

      setS3Url(url);

      const link = document.createElement("a");
      link.href = URL.createObjectURL(pdfBlob);
      link.download = filename;
      link.click();

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
                Download Classic PDF
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
                Download Modern PDF
              </button>
            </div>
          </div>
        </div>

        {/* {s3Url && (
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <h3>
              S3 Download Link:{" "}
              <a href={s3Url} target="_blank" rel="noopener noreferrer">
                {s3Url}
              </a>
            </h3>
          </div>
        )} */}

        {s3Url && (
          <div style={styles.s3Card}>
            <h3>✅ Your resume is ready!</h3>
            <p>Click below to view or download from S3:</p>
            <a href={s3Url} target="_blank" rel="noopener noreferrer" style={styles.s3Link}>
              View Resume
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
// import html2pdf from "html2pdf.js";

// export const generatePDF = (template) => {
//   const element = document.getElementById(`resume-preview-${template}`);
//   const opt = {
//     margin: 0.5,
//     filename: `${template}-resume.pdf`,
//     image: { type: "jpeg", quality: 0.98 },
//     html2canvas: { scale: 2, useCORS: true },
//     jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
//   };
//   html2pdf().set(opt).from(element).save();
// };

// export const handleGenerate = async () => {
//   // Validation: ensure all required fields are filled
//   const requiredFields = [
//     "username", "email", "country", "college",
//     "skills", "experience", "internship", "softSkills", "certification"
//   ];

//   const missingFields = requiredFields.filter(field => !resume[field]);
//   if (missingFields.length > 0) {
//     alert(`Please fill all fields: ${missingFields.join(", ")}`);
//     return;
//   }

//   try {
//     const response = await fetch("", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(resume),
//     });

//     const data = await response.json();

//     if (response.ok) {
//       alert(`✅ Resume saved successfully!`);
//       // Display and download pre-signed URL
//       console.log("Pre-signed URL:", data.downloadUrl);
//       window.alert(`Download your resume here: ${data.downloadUrl}`);
//       window.open(data.downloadUrl, "_blank"); // Open in new tab
//     } else {
//       alert(`❌ Error: ${data.message || "Something went wrong."}`);
//     }
//   } catch (err) {
//     console.error("Error:", err);
//     alert("Error connecting to the server.");
//   }
// };












import html2pdf from "html2pdf.js";

export async function generatePDF(templateType, returnBlob = false) {
  const element = document.getElementById(`resume-preview-${templateType}`);
  const opt = {
    margin: 0.5,
    filename: `${templateType}-resume.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  if (returnBlob) {
    return html2pdf().from(element).set(opt).outputPdf("blob");
  } else {
    await html2pdf().from(element).set(opt).save();
  }
}

// import { useState } from "react";
// import ResumePreview from "../components/ResumePreview";
// import TemplateSelector from "../components/TemplateSelector";
// import { generatePDF } from "../utils/pdfUtils";

// export default function ResumeEditor() {
//   const [resume, setResume] = useState({
//     name: "",
//     email: "",
//     experience: "",
//     education: "",
//     skills: "",
//   });
//   const [template, setTemplate] = useState("classic");

//   const handleChange = (e) => {
//     setResume({ ...resume, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="p-8 grid md:grid-cols-2 gap-8">
//       <div>
//         <h2 className="text-2xl font-bold mb-4">Resume Editor</h2>
//         <input
//           name="name"
//           placeholder="Full Name"
//           value={resume.name}
//           onChange={handleChange}
//           className="w-full border p-2 mb-2"
//         />
//         <input
//           name="email"
//           placeholder="Email"
//           value={resume.email}
//           onChange={handleChange}
//           className="w-full border p-2 mb-2"
//         />
//         <textarea
//           name="experience"
//           placeholder="Experience"
//           value={resume.experience}
//           onChange={handleChange}
//           className="w-full border p-2 mb-2"
//         />
//         <textarea
//           name="education"
//           placeholder="Education"
//           value={resume.education}
//           onChange={handleChange}
//           className="w-full border p-2 mb-2"
//         />
//         <input
//           name="skills"
//           placeholder="Skills (comma-separated)"
//           value={resume.skills}
//           onChange={handleChange}
//           className="w-full border p-2 mb-4"
//         />

//         <TemplateSelector template={template} setTemplate={setTemplate} />

//         <button
//           onClick={() => generatePDF(resume, template)}
//           className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//         >
//           Download PDF
//         </button>
//       </div>

//       <ResumePreview resume={resume} template={template} />
//     </div>
//   );
// }
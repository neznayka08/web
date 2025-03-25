document.getElementById("download-btn").addEventListener("click", () => {
    const resume = document.querySelector(".resume");
    const opt = {
      margin: 1,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
  
    html2pdf().from(resume).set(opt).save();
  });
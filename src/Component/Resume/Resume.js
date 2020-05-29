import React from 'react';
import ResumenPDF from "../../data/Resume/resume.pdf";

import "./Resume.css";

function Resume() {

  return (
      <div >
       <embed className="Resume" src={ResumenPDF} type="application/pdf" width="100%" height="1000px"/>
      </div>
  );
}
export default Resume;
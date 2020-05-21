import React, { useState } from 'react';
import ResumenPDF from "../../data/cv/resumen.pdf";
import "./Resumen.css";

function Resumen() {

  return (
      <div >
       <embed className="Resumen" src={ResumenPDF} type="application/pdf" width="100%" height="1000px"/>
      </div>
  );
}
export default Resumen;
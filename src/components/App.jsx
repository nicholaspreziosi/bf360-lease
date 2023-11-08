import { useState } from "react";
import "../App.css";
import Header from "./Header.jsx";
import Form from "./Form.jsx";
import Instructions from "./Instructions.jsx";
import Footer from "./Footer.jsx";
import Lease from "./Lease.jsx";

function App() {
  const [leaseData, setLeaseData] = useState({
    dealership: "",
    year: "",
    make: "",
    model: "",
    trim: "",
    modelCode: "",
    vin: "",
    stock: "",
    msrp: "",
    capitalizedCost: "",
    payment: "",
    months: "",
    downPayment: "",
    dueAtSigning: "",
    securityDeposit: "",
    firstMonth: true,
    mileageFee: "",
    mileageAmount: "",
    dispositionAmount: "",
    dispositionIncluded: true,
    docAmount: "",
    acquisitionAmount: "",
    acquisitionIncluded: true,
    expiration: "",
    additionalInfo: "",
  });

  return (
    <>
      <Header></Header>
      <Instructions></Instructions>
      <Form leaseData={leaseData} setLeaseData={setLeaseData}></Form>
      <Lease leaseData={leaseData}></Lease>
      <Footer></Footer>
    </>
  );
}

export default App;

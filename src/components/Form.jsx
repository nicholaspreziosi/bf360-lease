import { useState } from "react";
import "../App.css";

function Form({ leaseData, setLeaseData }) {
  const [capCost, setCapCost] = useState(true);
  const [modelCode, setModelCode] = useState(false);

  function handleMakeChange(e) {
    if (e.target.value === "Subaru") {
      setModelCode(true);
    } else {
      setModelCode(false);
    }
    console.log(modelCode);
    if (e.target.value === "Audi") {
      setCapCost(true);
    } else {
      setCapCost(false);
    }
  }

  function handleFirstMonthChange(e) {
    if (e.target.value === "Included") {
      setLeaseData({
        ...leaseData,
        firstMonth: true,
      });
    } else {
      setLeaseData({
        ...leaseData,
        firstMonth: false,
      });
    }
  }

  function handleAcqChange(e) {
    if (e.target.value === "Included") {
      setLeaseData({
        ...leaseData,
        acquisitionIncluded: true,
      });
    } else {
      setLeaseData({
        ...leaseData,
        acquisitionIncluded: false,
      });
    }
  }

  function handleDispChange(e) {
    if (e.target.value === "Included") {
      setLeaseData({
        ...leaseData,
        dispositionIncluded: true,
      });
    } else {
      setLeaseData({
        ...leaseData,
        dispositionIncluded: false,
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    setLeaseData({
      ...leaseData,
      dealership: `${document.querySelector("#dealership").value}`,
      year: `${document.querySelector("#year").value}`,
      make: `${document.querySelector("#make").value}`,
      model: `${document.querySelector("#model").value}`,
      trim: `${document.querySelector("#trim").value}`,
      modelCode: `${document.querySelector("#model-code").value}`,
      vin: `${document.querySelector("#vin").value}`,
      stock: `${document.querySelector("#stock").value}`,
      msrp: `${document.querySelector("#msrp").value}`,
      capitalizedCost: `${document.querySelector("#capitalized-cost").value}`,
      payment: `${document.querySelector("#payment").value}`,
      months: `${document.querySelector("#months").value}`,
      downPayment: `${document.querySelector("#down-payment").value}`,
      dueAtSigning: `${document.querySelector("#due-at-signing").value}`,
      securityDeposit: `${document.querySelector("#security-deposit").value}`,
      mileageFee: `${document.querySelector("#mileage-fee").value}`,
      mileageAmount: `${document.querySelector("#mileage-amount").value}`,
      dispositionAmount: `${document.querySelector("#disposition").value}`,
      docAmount: `${document.querySelector("#doc").value}`,
      acquisitionAmount: `${document.querySelector("#acquisition").value}`,
      expiration: `${document.querySelector("#expiration").value}`,
      additionalInfo: `${document.querySelector("#additional-info").value}`,
    });
  }

  return (
    <>
      <form className="lease-form" action="">
        <div className="form-div">
          <label htmlFor="make">Manufacturer:</label>
          <select onChange={handleMakeChange} required name="make" id="make">
            <option value="Audi">Audi</option>
            <option value="Ford">Ford</option>
            <option value="Subaru">Subaru</option>
            <option value="Toyota">Toyota</option>
            <option value="Volkswagen">Volkswagen</option>
          </select>
        </div>
        <div className="form-div">
          <label htmlFor="dealership">Dealership:</label>
          <input
            placeholder="Dealership"
            id="dealership"
            required
            name="dealership"
            type="text"
          />
        </div>
        <div className="form-div">
          <label htmlFor="year">Year:</label>
          <input
            placeholder="Year"
            id="year"
            required
            name="year"
            type="text"
          />
        </div>
        <div className="form-div">
          <label htmlFor="model">Model:</label>
          <input
            placeholder="Model"
            id="model"
            required
            name="model"
            type="text"
          />
        </div>
        <div className="form-div">
          <label htmlFor="trim">Trim:</label>
          <input
            placeholder="Trim"
            id="trim"
            required
            name="trim"
            type="text"
          />
        </div>
        {}
        <div
          className={modelCode ? "form-div" : "hidden"}
          id="model-code-container"
        >
          <label htmlFor="model-code">Model & Option Code:</label>
          <input
            id="model-code"
            required={modelCode ? "required" : ""}
            placeholder="Model & Option Code (Ex. PLA-03)"
            name="model-code"
            type="text"
          />
        </div>
        <div className="form-div">
          <label htmlFor="vin">VIN #:</label>
          <input placeholder="VIN #" id="vin" required name="vin" type="text" />
        </div>
        <div className="form-div">
          <label htmlFor="stock">Stock #:</label>
          <input
            placeholder="Stock #"
            id="stock"
            required
            name="stock"
            type="text"
          />
        </div>
        <div className="form-div">
          <label htmlFor="msrp">MSRP:</label>
          <input
            placeholder="MSRP"
            id="msrp"
            required
            name="msrp"
            type="number"
          />
        </div>
        <div className={capCost ? "form-div" : "hidden"}>
          <label htmlFor="capitalized-cost">Capitalized Cost:</label>
          <input
            placeholder="Capitalized Cost"
            id="capitalized-cost"
            required={capCost ? "required" : ""}
            name="msrp"
            type="number"
          />
        </div>
        <div className="form-div">
          <label htmlFor="payment">Monthly Payment:</label>
          <input
            placeholder="Monthly Payment"
            id="payment"
            required
            name="payment"
            type="number"
          />
        </div>
        <div className="form-div">
          <label htmlFor="months">Number of Months:</label>
          <input
            placeholder="Number of Months"
            id="months"
            required
            name="months"
            type="number"
          />
        </div>
        <div className="form-div">
          <label htmlFor="due-at-signing">Due At Signing:</label>
          <input
            placeholder="Due At Signing"
            id="due-at-signing"
            required
            name="due-at-signing"
            type="number"
          />
        </div>
        <div className="form-div">
          <label htmlFor="down-payment">Down Payment:</label>
          <input
            placeholder="Down Payment"
            id="down-payment"
            required
            name="down-payment"
            type="number"
          />
        </div>
        <div className="form-div">
          <label htmlFor="security-deposit">Security Deposit:</label>
          <input
            placeholder="Security Deposit"
            id="security-deposit"
            required
            name="security-deposit"
            type="number"
          />
        </div>
        <div className="form-div">
          <label htmlFor="first-month">First Month Payment?</label>
          <select
            onChange={handleFirstMonthChange}
            id="first-month"
            required
            name="first-month"
          >
            <option value="Included">Included</option>
            <option value="Not Included">Not Included</option>
          </select>
        </div>
        <div className="form-div">
          <label htmlFor="mileage-fee">Excessive Mileage Fee:</label>
          <input
            id="mileage-fee"
            required
            placeholder="Excessive Mileage Fee (Ex. 0.15)"
            name="mileage-fee"
            type="number"
          />
        </div>
        <div className="form-div">
          <label htmlFor="mileage-amount">Mileage Allowance:</label>
          <input
            id="mileage-amount"
            required
            placeholder="Mileage Allowance (Ex. 10000)"
            name="mileage-fee"
            type="number"
          />
        </div>
        <div className="form-div">
          <label htmlFor="doc">Dealer Doc Fee:</label>
          <input
            placeholder="Dealer Doc Fee (Ex. 799)"
            id="doc"
            required
            name="doc"
            type="number"
          />
        </div>
        <div className="form-div">
          <label htmlFor="acquisition">Acquisition Fee:</label>
          <input
            placeholder="Acquisition Fee (Ex. 695)"
            id="acquisition"
            htmlFor="acquisition"
            required
            name="acquisition"
            type="number"
          />
        </div>
        <div className="form-div">
          <label htmlFor="acquisition-select"> Included? </label>
          <select
            onChange={handleAcqChange}
            id="acquisition-select"
            required
            name="acquisition-select"
          >
            <option value="Included">Included</option>
            <option value="Not Included">Not Included</option>
          </select>
        </div>
        <div className="form-div">
          <label htmlFor="disposition">Disposition Fee:</label>
          <input
            placeholder="Disposition Fee (Ex. 350)"
            id="disposition"
            required
            name="disposition"
            type="number"
          />
        </div>
        <div className="form-div">
          <label htmlFor="disposition-select">Included? </label>
          <select
            onChange={handleDispChange}
            id="disposition-select"
            required
            name="disposition-select"
          >
            <option value="Included">Included</option>
            <option value="Not Included">Not Included</option>
          </select>
        </div>
        <div className="form-div">
          <label htmlFor="expiration">Expiration Date:</label>
          <input
            id="expiration"
            required
            name="expiration"
            type="date"
            data-date-format="DD MMMM YYYY"
          />
        </div>
        <div className="form-div">
          <label htmlFor="additional-info">Additional Information:</label>
          <textarea
            id="additional-info"
            name="additional-info"
            cols="50"
            rows="10"
          ></textarea>
        </div>
        <button onClick={handleSubmit}>Generate Lease Information</button>
      </form>
    </>
  );
}

export default Form;

import { useState } from "react";
import "../App.css";
import { render } from "react-dom";

function Lease({ leaseData }) {
  function formatDate(date) {
    let formattedDate = `${date.slice(5, 7)}/${date.slice(8, 10)}/${date.slice(
      0,
      4
    )}`;
    return formattedDate;
  }

  function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function audiDisclaimer(leaseData) {
    return (
      <div className={leaseData.make === "Audi" ? "lease" : "hidden"}>
        <h1>Audi</h1>
        <p>
          {leaseData.year} {leaseData.make} {leaseData.model} {leaseData.trim}
        </p>
        <p>
          ${numberWithCommas(parseInt(leaseData.payment))} / month for{" "}
          {leaseData.months} months
        </p>
        <p>
          ${numberWithCommas(leaseData.payment)} month. MSRP: $
          {numberWithCommas(leaseData.msrp)}. {leaseData.months} month closed
          end lease. {numberWithCommas(leaseData.mileageAmount)} miles per year
          with approved credit through Audi Financial Services. $
          {numberWithCommas(leaseData.downPayment)} down payment. Capitalized
          cost of ${numberWithCommas(leaseData.capitalizedCost)}. $
          {numberWithCommas(leaseData.dueAtSigning)} total due at signing.
          Excludes sales taxes, motor vehicle fees, and doc fee. See dealer for
          complete details. Expires {formatDate(leaseData.expiration)}.
        </p>
      </div>
    );
  }

  function subaruDisclaimer(leaseData) {
    function generateSubaruFees(leaseData) {
      if (leaseData.firstMonth) {
        return `Does not include taxes, license,
        dealer doc fee of ${numberWithCommas(leaseData.docAmount)}, or other
        dealer fees.`;
      } else if (!leaseData.firstMonth) {
        return `Does not include taxes, license,
        dealer doc fee of ${numberWithCommas(
          leaseData.docAmount
        )}, first month's payment, or other
        dealer fees.`;
      }
    }

    return (
      <div className={leaseData.make === "Subaru" ? "lease" : "hidden"}>
        <h1>Subaru</h1>
        <p>
          {leaseData.year} {leaseData.make} {leaseData.model} {leaseData.trim}
        </p>
        <p>Lease For</p>
        <p>
          ${numberWithCommas(parseInt(leaseData.payment))} / month for{" "}
          {leaseData.months} months
        </p>
        <p>With ${numberWithCommas(leaseData.dueAtSigning)} Due At Signing</p>
        <p>
          Close-end lease. Price(s) include(s) all costs to be paid by a
          consumer, except for taxes and fees. VIN #: {leaseData.vin}. Stock #:{" "}
          {leaseData.stock}. Model Code: {leaseData.modelCode}. New{" "}
          {leaseData.year} {leaseData.make} {leaseData.model} {leaseData.trim}{" "}
          for ${numberWithCommas(leaseData.payment)}/mo for {leaseData.months}{" "}
          mos w/ ${numberWithCommas(leaseData.dueAtSigning)} due at signing. TTL
          PYMT: ${numberWithCommas(leaseData.payment * leaseData.months)}.{" "}
          {numberWithCommas(leaseData.mileageAmount)} mi per year. $
          {leaseData.mileageFee} per mi over. {generateSubaruFees(leaseData)}{" "}
          Cannot be combined with any other offers or discounts. Subject to
          credit approval. Other restrictions may apply. See dealer for details.
          Expires {formatDate(leaseData.expiration)}.
        </p>
      </div>
    );
  }

  function toyotaDisclaimer(leaseData) {
    function generateToyotaFees(leaseData) {
      if (!leaseData.firstMonth) {
        return `Price(s) include(s) all costs to be paid by a customer, except for applicable taxes, licensing costs, registration fees, the dealership's $${numberWithCommas(
          leaseData.docAmount
        )} documentation fee, first month's payment, and other fees.`;
      } else {
        return `Price(s) include(s) all costs to be paid by a customer, except for applicable taxes, licensing costs, registration fees, the dealership's $${numberWithCommas(
          leaseData.docAmount
        )} documentation fee, and other fees.`;
      }
    }

    return (
      <div className={leaseData.make === "Toyota" ? "lease" : "hidden"}>
        <h1>Toyota</h1>
        <p>
          {leaseData.year} {leaseData.make} {leaseData.model} {leaseData.trim}
        </p>
        <p>
          ${numberWithCommas(parseInt(leaseData.payment))} / month for{" "}
          {leaseData.months} months
        </p>
        <p>
          {leaseData.year} {leaseData.make} {leaseData.model} {leaseData.trim}.{" "}
          VIN #: {leaseData.vin}. MSRP: ${numberWithCommas(leaseData.msrp)}. $
          {numberWithCommas(leaseData.payment)} per month. {leaseData.months}
          -month lease, {numberWithCommas(leaseData.mileageAmount)} miles/year
          with ${numberWithCommas(leaseData.dueAtSigning)} due at signing.
          Payments totaling: $
          {numberWithCommas(leaseData.payment * leaseData.months)}. $
          {numberWithCommas(leaseData.securityDeposit)} security deposit.{" "}
          {generateToyotaFees(leaseData)} Customer is responsible for excessive
          wear and excess mileage of ${leaseData.mileageFee} per mile in excel
          of {numberWithCommas(leaseData.mileageAmount)} mi/year. Leasing or
          financing is based upon approved credit. Not all applicants will
          qualify. See dealer for details. Offer expires{" "}
          {formatDate(leaseData.expiration)}.
        </p>
      </div>
    );
  }

  function volkswagenDisclaimer(leaseData) {
    function generateVWFees(leaseData) {
      if (leaseData.firstMonth) {
        return `Does not include MVC fees, dealer doc fee of $${leaseData.docAmount}, taxes, or other fees.`;
      } else if (!leaseData.firstMonth) {
        return `Does not include MVC fees, dealer doc fee of $${leaseData.docAmount}, first month's payment, taxes, or other fees.`;
      }
    }

    return (
      <div className={leaseData.make === "Volkswagen" ? "lease" : "hidden"}>
        <h1>Volkswagen</h1>
        <p>
          {leaseData.year} {leaseData.make} {leaseData.model} {leaseData.trim}
        </p>
        <p>
          ${numberWithCommas(parseInt(leaseData.payment))} / month for{" "}
          {leaseData.months} months
        </p>
        <p>
          Capitalized cost may be higher or lower than price shown. Lease based
          on ${numberWithCommas(leaseData.payment)} / mo for {leaseData.months}{" "}
          mos with ${numberWithCommas(leaseData.downPayment)} down. VIN #:{" "}
          {leaseData.vin}. MSRP: ${numberWithCommas(leaseData.msrp)}. $
          {leaseData.mileageFee} / mile over{" "}
          {numberWithCommas(leaseData.mileageAmount)} miles.{" "}
          {generateVWFees(leaseData)} See dealer for details or, for general
          product information, call (973) 756-3100. Cannot be combined with
          other offers or discounts. Other restrictions may apply. Subject to
          credit approval. Financing through VCI. Expires{" "}
          {formatDate(leaseData.expiration)}.
        </p>
      </div>
    );
  }

  return (
    <>
      {audiDisclaimer(leaseData)}
      {subaruDisclaimer(leaseData)}
      {toyotaDisclaimer(leaseData)}
      {volkswagenDisclaimer(leaseData)}
    </>
  );
}

export default Lease;

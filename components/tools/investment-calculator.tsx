"use client";

import { useMemo, useState } from "react";

const peso = new Intl.NumberFormat("en-PH", {
  style: "currency",
  currency: "PHP",
  maximumFractionDigits: 2,
});

function positiveNumber(value: string) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
}

export function InvestmentCalculator() {
  const [capital, setCapital] = useState("250000");
  const [price, setPrice] = useState("42.50");
  const lotSize = 100;

  const estimate = useMemo(() => {
    const available = positiveNumber(capital);
    const sharePrice = positiveNumber(price);
    const boardLots = sharePrice ? Math.floor(available / (sharePrice * lotSize)) : 0;
    const shares = boardLots * lotSize;
    const grossPosition = shares * sharePrice;

    return {
      boardLots,
      shares,
      grossPosition,
      remainingCash: Math.max(available - grossPosition, 0),
    };
  }, [capital, price]);

  return (
    <div className="trade-estimator">
      <div className="trade-estimator-inputs">
        <div>
          <p>Position estimator</p>
          <h2>Organize the numbers before the instruction.</h2>
          <span>
            This planning view uses a sample board lot of 100 shares and excludes commissions,
            taxes, and other transaction charges.
          </span>
        </div>
        <label>
          <span>Capital available</span>
          <span className="calculator-field">
            <b aria-hidden="true">₱</b>
            <input
              inputMode="decimal"
              min="0"
              onChange={(event) => setCapital(event.target.value)}
              type="number"
              value={capital}
            />
          </span>
        </label>
        <label>
          <span>Illustrative price per share</span>
          <span className="calculator-field">
            <b aria-hidden="true">₱</b>
            <input
              inputMode="decimal"
              min="0"
              onChange={(event) => setPrice(event.target.value)}
              step="0.01"
              type="number"
              value={price}
            />
          </span>
        </label>
      </div>

      <div className="trade-estimator-output" aria-live="polite">
        <p>Illustrative position</p>
        <div className="trade-estimator-primary">
          <span>Estimated shares</span>
          <strong>{estimate.shares.toLocaleString("en-PH")}</strong>
          <small>{estimate.boardLots.toLocaleString("en-PH")} board lots</small>
        </div>
        <dl>
          <div>
            <dt>Gross position value</dt>
            <dd>{peso.format(estimate.grossPosition)}</dd>
          </div>
          <div>
            <dt>Capital not allocated</dt>
            <dd>{peso.format(estimate.remainingCash)}</dd>
          </div>
          <div>
            <dt>Assumed board lot</dt>
            <dd>{lotSize} shares</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

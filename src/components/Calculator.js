import Percentage from "./Percentage";
import Bill from "./Bill";
import { DisplaySummary } from "./DisplaySummary";
import Reset from "./Reset";
import { useState } from "react";

export default function Calculator() {

    const [percentage1, setPercentance1] = useState(0);
    const [percentage2, setPercentance2] = useState(0);
    const [billValue, addBillValue] = useState('');

    return (
        <div>
            <h2>Bill Calculator</h2>
            <Bill billValue={billValue} onAddBillValue={addBillValue} />
            <Percentage percentage={percentage1} onAddPercentage={setPercentance1}>How did you like the service?</Percentage>
            <Percentage percentage={percentage2} onAddPercentage={setPercentance2}>How did you friend like the service?</Percentage>
            <DisplaySummary percentage1={percentage1} percentage2={percentage2} billValue={billValue} />
            {billValue > 0 && <Reset onAddBillValue={addBillValue} onAddPercentage1={setPercentance1} onAddPercentage2={setPercentance2} />}
        </div>
    )
}
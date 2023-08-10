export default function Bill({ billValue, onAddBillValue }) {

    return (
        <div>
            <div className="inline">
                <p className="add-space">How much was the bill</p>
                <input type='number' value={billValue} onChange={(e) => onAddBillValue(Number(e.target.value))}></input>
            </div>
        </div>
    )
}


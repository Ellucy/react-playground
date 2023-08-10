export function DisplaySummary({ billValue, percentage1, percentage2 }) {

    const tip = +(billValue * ((percentage1 + percentage2) / 2 / 100)).toFixed(1);
    const total = billValue + tip;

    if (!billValue) return ('');
    return (
        <div className="add-space">
            <p className="add-space">{`You pay $${total} ($${billValue} + $${tip} tip)`}</p>
        </div>
    );
}

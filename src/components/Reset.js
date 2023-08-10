export default function Reset({ onAddBillValue, onAddPercentage1, onAddPercentage2 }) {

    function setToStartPosition() {
        onAddBillValue('');
        onAddPercentage1(0);
        onAddPercentage2(0)
    }

    return (
        <div className="add-space inl">
            <button onClick={setToStartPosition}>Reset</button>
        </div >
    )
}
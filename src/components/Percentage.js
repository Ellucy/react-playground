export default function Percentage({ percentage, onAddPercentage, children }) {

    return (
        <div>
            <div className="inline">

                <p className="add-space">{children}</p>

                <select
                    value={percentage}
                    onChange={(e) => onAddPercentage(Number(e.target.value))}
                >
                    <option value='0'>Dissatisfied 0%</option>
                    <option value='5'>It was okay 5%</option>
                    <option value='10'>It was good 10%</option>
                    <option value='20'>Absolutely amazing 20%</option>
                </select>
            </div>

        </div >
    )
}

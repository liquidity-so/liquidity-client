const Normalize = {
    addDollarSymbol(value) {
        return `$${value}`; 
    },
    normalizeDollarAmount(value) {
        if (parseFloat(value)) {
            const floatVal = parseFloat(value)
            const normalizedFloat = Math.round((floatVal + Number.EPSILON) * 10000) / 10000
            const dollarAmount = normalizedFloat.toLocaleString("en-US", {style: "decimal", minimumFractionDigits: 0})
            return `$${dollarAmount}`;
        }
        else {
            return null
        }
    },
    normalizePercentChange(value) {
        if (parseFloat(value)) {
            const floatVal = parseFloat(value)
            return floatVal < 0 ? `-${value}%` : floatVal > 0 ? `+${value}%` : `${value}`
        }
        else {
            return null
        }
    }
}

export default Normalize
const CurrencyHelpers = {
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
    }
}

export default CurrencyHelpers
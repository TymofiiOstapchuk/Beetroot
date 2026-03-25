
const operations = {
    '+': (left: number, right: number): number => left + right,
    '-': (left: number, right: number): number => left - right,
    '*': (left: number, right: number): number => left * right,
    '/': (left: number, right: number): number => left / right,
}



function Calc({ left, operator, right }) {
    const result = operations[operator](left, right)
    return (
        <div>
            <code style={{ fontSize: "2rem" }}>
                {left} {operator} {right} = <output>{result}</output>
            </code>
        </div>
    )
}

const Calculator = () => {
    return <>
        <h2>Calculator</h2>
        <Calc left={1} operator="+" right={2} />
        <Calc left={1} operator="-" right={2} />
        <Calc left={1} operator="*" right={2} />
        <Calc left={1} operator="/" right={2} />
    </>
};

export default Calculator;

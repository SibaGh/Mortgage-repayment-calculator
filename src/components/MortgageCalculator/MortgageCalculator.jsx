import { useState } from 'react';
import CalculatorForm from '../CalculatorForm/CalculatorForm'
import ResultsContainer from '../ResultsContainer/ResultsContainer'
import styles from './MortgageCalculator.module.css'

const MortgageCalculator = () => {
    const [results, setResults] = useState(null);
    return (
        <div className={styles.mortgageCalculator}>
            <CalculatorForm onCalculate={setResults}/>
            <ResultsContainer results={results}/>
        </div>
    )
}

export default MortgageCalculator

import styles from './SubmitButton.module.css'

const SubmitButton = () => {
    return (
        
            <button type='submit' className={styles.submitButton}>
                <img src="/assets/images/icon-calculator.svg" alt="calculator-icon" 
                className={styles.calculatorIcon}
                />
                <span>Calculate Repayments</span>
            </button>
        
    )
}

export default SubmitButton

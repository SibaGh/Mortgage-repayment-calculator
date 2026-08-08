import styles from './RadioGroup.module.css';

const RadioGroup = ({ selectedType, onChange, error }) => {

    return (
        <fieldset className={styles.radioGroup}>
            <legend className={styles.legend}>Mortgage Type</legend>

            <label htmlFor="repayment" className={styles.radioLabel}>
                <input 
                type="radio" 
                id="repayment"
                name="mortgageType" 
                value="repayment" 
                checked={selectedType === 'repayment'} 
                onChange={onChange}
                className={styles.radioInput}
                /> 
                <span className={styles.radioText}>Repayment</span>
            </label>

            <label htmlFor="interestOnly" className={styles.radioLabel}>
                <input 
                type="radio" 
                id="interestOnly"
                name="mortgageType" 
                value="interestOnly" 
                checked={selectedType === 'interestOnly'} 
                onChange={onChange}
                className={styles.radioInput}
                /> 
                <span className={styles.radioText}>Interest Only</span>
            </label>

            {/* إظهار رسالة الخطأ أسفل الخيارات عند وجودها */}
            {error && <span className={styles.errorMessage}>{error}</span>}
        </fieldset>
    );
};

export default RadioGroup;
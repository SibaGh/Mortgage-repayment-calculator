import styles from './CompletedState.module.css'
import ResultCard from "../ResultCard/ResultCard"

const CompletedState = ({ monthlyPayment, totalPayment }) => {
    return (
        <div className={styles.completedState}>
            <div className={styles.yourResult}>
                <h3>Your results</h3>
                <p>Your results are shown below based on the information you provided. 
                    To adjust the results, edit the form and click “calculatore repayments” again.
                </p>
            </div>
            {/* كرت النتائج المصمم */}
            <ResultCard
            monthlyPayment={monthlyPayment}
            totalPayment={totalPayment}
            />
        </div>
        
    )
}

export default CompletedState

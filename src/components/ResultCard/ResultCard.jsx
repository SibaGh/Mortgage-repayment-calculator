import styles from './ResultCard.module.css'

const ResultCard = ({ monthlyPayment, totalPayment}) => {
    return (
        <div className={styles.resultCard}>
            <div className={styles.monthlySection}>
                <p className={styles.monthlyRepayments}>Your monthly repayments</p>
                <p className={styles.monthlyNumber}>{monthlyPayment}</p>
            </div>
            <div className={styles.totalSection}>
                <p className={styles.totalRepayments}>Total you'll repay over the term</p>
                <p className={styles.totalNumber}>{totalPayment}</p>
            </div>
        </div>
    )
}

export default ResultCard

import styles from './EmptyState.module.css'

const EmptyState = () => {
    return (
        <div className={styles.emptyState}>
            <img src="/assets/images/illustration-empty.svg" alt="EmptyState-img" />
            <h2>Results shown here</h2>
            <p>Complete the form and click “calculate repayments” 
                to see what your monthly repayments would be.
            </p>
        </div>
    )
}

export default EmptyState

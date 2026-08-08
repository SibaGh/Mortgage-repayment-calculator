import EmptyState from '../EmptyState/EmptyState'
import styles from './ResultsContainer.module.css'
import CompletedState from '../CompletedState/CompletedState'

const ResultsContainer = ({results}) => {
    return (
        <div className={styles.resultsContainer}>
            {results? 
            (<CompletedState 
            monthlyPayment={results.monthlyPayment}
            totalPayment={results.totalPayment}
            />
            ) : (
            <EmptyState/>
            )}
        </div>
    )
}

export default ResultsContainer

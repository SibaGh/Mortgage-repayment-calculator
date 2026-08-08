import styles from './Container.module.css'
import MortgageCalculator from '../MortgageCalculator/MortgageCalculator'

const Container = () => {
    return (
        <div className={styles.container}>
            <MortgageCalculator/>
        </div>
    )
}

export default Container

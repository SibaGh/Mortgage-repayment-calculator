import styles from './FormHeader.module.css'

const FormHeader = ({onClear}) => {
    return (
        <div className={styles.formHeader}>
            <h1 className={styles.formTitle}>Mortgage Calculator</h1>
            <button className={styles.clearBtn} onClick={onClear}>Clear All</button>
        </div>
    )
}

export default FormHeader

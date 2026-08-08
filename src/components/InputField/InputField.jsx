import styles from './InputField.module.css'



const InputField = ({ label, id, type = "text", unit, unitPosition = "prefix", value, onChange, error }) => {
    return (
        <div className={styles.inputGroup}>
            
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>
            
            
            <div className={`${styles.inputWrapper} ${error ? styles.error : ''}`}>
                {/* إذا كانت السابقة تسبق النص */}
                {unitPosition === "prefix" && (
                    <span className={styles.unit}>{unit}</span>
                )}

                <input 
                id={id}
                name={id}
                type={type}
                className={styles.input}
                value={value}
                onChange={onChange}
                />

                {/* إذا كانت اللاحقة بعد النص */}
                {unitPosition === "suffix" && (
                    <span className={styles.unit}>{unit}</span>
                )}
            </div>
            {/* رسالة الخطأ تحت الحقل */}
            {error && <span className={styles.errorMessage}>{error}</span>}

        </div>
    )
}

export default InputField

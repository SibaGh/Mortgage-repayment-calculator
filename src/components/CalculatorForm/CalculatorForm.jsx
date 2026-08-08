import styles from './CalculatorForm.module.css'
import SubmitButton from '../SubmitButton/SubmitButton'
import FormHeader from '../FormHeader/FormHeader'
import InputField from '../InputField/InputField'
import RadioGroup from '../RadioGroup/RadioGroup'
import { useState } from 'react'

const CalculatorForm = ({onCalculate}) => {
    const [amount, setAmount] = useState("")
    const [term, setTerm] = useState("")
    const [rate, setRate] = useState("")
    const [mortgageType, setmMortgageType] = useState("")
    /// إنشاء State مخصص للأخطاء في CalculatorForm
    ///نحتاج لكائن (Object) يحمل حالة كل حقل (هل يحتوي على خطأ أم لا)، وتكون قيمته الابتدائية فارغة:
    const [errors, setErrors] = useState({});

    // دالة الإرسال والطباعة في الكونسول
    const handleSubmit = (e) => {
        e.preventDefault(); // يمنع إعادة تحميل الصفحة


        // 1. فحص الأخطاء
        let newErrors = {};

        if (!amount) newErrors.amount = "This field is required";
        if (!term) newErrors.term = "This field is required";
        if (!rate) newErrors.rate = "This field is required";
        if (!mortgageType) newErrors.mortgageType = "This field is required";

        setErrors(newErrors);

        // حارس البوابة: التوقف عند وجود أخطاء
        // إذا كان كائن الأخطاء يحتوي على أي عنصر، أوقف التنفيذ فوراً
        if (Object.keys(newErrors).length > 0) return;
        // console.log("All fields are valid!");

        // 2. تحويل النصوص إلى أرقام حقيقية
        const principal = parseFloat(amount);
        const years = parseFloat(term);
        const annualRate = parseFloat(rate);

        // 3. تجهيز أرقام المعادلة
        const monthlyRate = annualRate / 100 / 12; // الفائدة الشهرية ككسر عشري
        const totalMonths = years * 12;            // عدد الأشهر الإجمالي

        let monthly = 0;
        let total = 0;

        // 4. تطبيق المعادلة بحسب نوع القرض
        if (mortgageType === "repayment") {
            // معادلة السداد الكامل (أصل القرض + الفائدة)
            monthly = (principal * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) /
                    (Math.pow(1 + monthlyRate, totalMonths) - 1);
            total = monthly * totalMonths;
        } else if (mortgageType === "interestOnly") {
            // معادلة الفائدة فقط
            monthly = principal * monthlyRate;
            total = monthly * totalMonths;
        }

        // onCalculate({
        //     monthlyPayment: monthly.toFixed(2),
        //     totalPayment: total.toFixed(2)
        //     });
        
        // دالة مساعدة لتنسيق العملة
        const formatCurrency = (val) => {
            return new Intl.NumberFormat('en-GB', {
                style: 'currency',
                currency: 'GBP',
            }).format(val);
            };

            // داخل handleSubmit بعد إنهاء الحسابات الرياضية:
        onCalculate({
            monthlyPayment: formatCurrency(monthly),
            totalPayment: formatCurrency(total)
        });
    };

    const handleClear = (e) => {
        e.preventDefault; // منع تنشيط الرابط الافتراضي

        // 1. إرجاع قيم الحقول للنص الفارغ
        setAmount("");
        setTerm("");
        setRate("");
        setmMortgageType("");

        // 2. إزالة أي رسائل أخطاء حمراء ظاهرة
        setErrors({});

        // 3. إبلاغ المكون الأب بإخفاء النتائج وإعادة الـ EmptyState
        onCalculate(null);
    }
    return (
        <div className={styles.calculatorForm}>
            <FormHeader onClear={handleClear}/>
            
            {/* 2. ربط دالة handleSubmit مع حدث onSubmit للفروم */}
            {/* جعل كل العناصر التفاعلية داخل الـ form */}
            <form className={styles.form} onSubmit={handleSubmit}>
                {/* حقل المبلغ - يأخذ العرض كامل */}
                <InputField
                label="Mortgage Amount"
                id="amount" 
                unit="£" 
                unitPosition="prefix"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}  // تحديث قيمة المبلغ
                error={errors.amount} // تمرير رسالة الخطأ إن وجدت
                />


                {/* صف يحتوي الحقلين الآخرين بجانب بعضهما */}
                <div className={styles.row}>
                    <InputField
                    label="Mortgage Term"
                    id="term" 
                    unit="Years" 
                    unitPosition="suffix"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}  // تحديث قيمة المدة
                    error={errors.term} // تمرير رسالة الخطأ إن وجدت
                    />

                    <InputField
                    label="Interest Rate"
                    id="rate" 
                    unit="%" 
                    unitPosition="suffix"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}  // تحديث نسبة الفائدة
                    error={errors.rate} // تمرير رسالة الخطأ إن وجدت
                    />
                </div>

                <RadioGroup
                // value={mortgageType}
                selectedType={mortgageType}
                onChange={(e) => setmMortgageType(e.target.value)}  // تحديث نوع الرهن
                error={errors.mortgageType} // تمرير رسالة الخطأ إن وجدت
                />

                <SubmitButton/>
            </form>

        </div>
    )
}

export default CalculatorForm

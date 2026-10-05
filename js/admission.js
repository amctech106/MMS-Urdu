// js/admission.js

// 1. Supabase کنکشن کو امپورٹ کریں
import { supabase } from './supabase.js';

// فارم سبمٹ ہونے کا ایونٹ
document.getElementById('admissionForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // پیج کو ریفریش ہونے سے روکنے کے لیے

    // 2. فارم کے خانوں سے ڈیٹا حاصل کریں
    const studentName = document.getElementById('studentName').value;
    const parentName = document.getElementById('parentName').value;
    const dob = document.getElementById('dob').value;
    const residentialStatus = document.getElementById('residentialStatus').value;
    
    // برانچ اور ولدیت/بنت کا فیصلہ کریں (لوکل اسٹوریج سے)
    const branchType = localStorage.getItem('activeBranch') || 'central';
    const parentRelation = (branchType === 'girls') ? 'بنت' : 'ولد';
    
    // عارضی رجسٹریشن نمبر (ہم وقتی طور پر ٹائم اسٹیمپ استعمال کر رہے ہیں تاکہ ہر نمبر منفرد ہو)
    const regNumber = 'REG-' + new Date().getTime();

    try {
        // 3. Supabase کے 'students' ٹیبل میں ڈیٹا داخل (Insert) کریں
        const { data, error } = await supabase
            .from('students')
            .insert([
                {
                    reg_number: regNumber,
                    branch_type: branchType,
                    student_name: studentName,
                    parent_relation: parentRelation,
                    parent_name: parentName,
                    dob: dob,
                    residential_status: residentialStatus,
                    status: 'داخل شدہ'
                }
            ]);

        // اگر کوئی خرابی آئے
        if (error) {
            console.error('Supabase Error:', error);
            alert('ڈیٹا محفوظ کرنے میں مسئلہ پیش آیا: ' + error.message);
        } 
        // اگر ڈیٹا کامیابی سے چلا جائے
        else {
            alert('طالب علم کا داخلہ فارم کامیابی سے محفوظ ہو گیا ہے!');
            // ڈیٹا محفوظ ہونے کے بعد فارم کو صاف (Clear) کر دیں
            document.getElementById('admissionForm').reset();
        }
    } catch (err) {
        console.error('System Error:', err);
        alert('سسٹم میں کوئی خرابی پیش آئی ہے۔');
    }
});
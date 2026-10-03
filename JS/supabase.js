// js/supabase.js
import { createClient } from '@supabase/supabase-js';

// اپنے Supabase ڈیش بورڈ سے URL اور Key یہاں ڈالیں
const supabaseUrl = 'https://dpapzvisxhhkhvhqnvhj.supabase.co';
const supabaseKey = 'sb_publishable_VLm-0HQQ_JcWGKOiDQI02g_SjFg37QR';

// کلائنٹ بنائیں اور اسے ایکسپورٹ کریں تاکہ باقی فائلز استعمال کر سکیں
export const supabase = createClient(supabaseUrl, supabaseKey);

console.log("Supabase connected via NPM!");
// CDN کے ذریعے Supabase امپورٹ کریں
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// اپنے Supabase پروجیکٹ کا URL اور ANON KEY یہاں لکھیں
const supabaseUrl = 'https://dpapzvisxhhkhvhqnvhj.supabase.co';
const supabaseKey = 'sb_publishable_VLm-0HQQ_JcWGKOiDQI02g_SjFg37QR';

export const supabase = createClient(supabaseUrl, supabaseKey);




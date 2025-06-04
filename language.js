document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        en: {
            // Navigation (common to all pages)
            'nav-home': 'Home',
            'nav-staff': 'Staff',
            'nav-department': 'About Department',
            'nav-about-us': 'About Us',
            'nav-language-main': 'Language',
            'lang-kurdish': 'Kurdish',
            'lang-english': 'English',
            'nav-logo-title': 'MIS',

            // Index Page Specific
            'index-more-info-button': 'More Information',
            'index-main-title': 'SHAQLAWA TECHNICAL COLLEGE MANAGEMENT INFORMATION SYSTEM',
            'index-intro-text': 'The department was officially inaugurated in the academic year <span style="color: aliceblue; "><i>2020–2021 at Shaqlawa Technical College</i></span> <br> marking a significant step in the development of modern education within the institution. In the very same year, it proudly welcomed its first cohort of students, beginning a new chapter in the college\'s academic offerings. This department is uniquely structured, offering a dual-specialization curriculum that combines two essential fields:',
            'index-specialization-admin': '➣ Administration',
            'index-specialization-it': '➣ Information Technology',
            'index-curriculum-intro': '<SPAN style="color: rgb(151, 151, 151);">The curriculum is strategically divided to ensure a balanced and practical education, with:</SPAN>',
            'index-coursework-it': '➣ 60% of the coursework focused on Information Technology',
            'index-coursework-management': '➣ 40% dedicated to Management and Administration studies',
            'index-integrated-model-text': 'This integrated model ensures that students graduate with a strong foundation in both technical and managerial skills, preparing them for the demands of today\'s job market. As a result, graduates are awarded a diploma that qualifies them in both IT and Administration, significantly increasing their employment opportunities across various sectors. One of the department\'s key strengths is that it creates a clear academic and professional pathway. Upon completion of the program, students are eligible to pursue further studies at the Technical College of Engineering, which opens the door to advanced qualifications and higher-level careers in the field. However, it is important to highlight that only students from a Science high school background are eligible to enroll in this department. This requirement ensures that students have the necessary foundational knowledge to handle the technical nature of the coursework. In conclusion, this department represents a mind-opening opportunity for students who wish to build a career that combines technology and management. It equips students with the dual skills needed in modern workplaces, making them versatile, competitive, and ready to contribute meaningfully in a variety of professional environments.',

            // About Us Page Specific (Ensure these IDs are present in aboutus.html)
            'aboutus-supervisor-title': 'SUPERVISOR and supporter',
            'aboutus-supervisor-name1': 'dr. Hiwa Taha ',
            'aboutus-supervisor-name2': 'Zhala Tahsen Jalal',
            'aboutus-idea-title': 'idea and supporter',
            'aboutus-idea-name1': 'RAWAN KAZM HAMED',
            'aboutus-supporter-title': 'supporter',
            'aboutus-supporter-name1': 'Tariq Muhammad Sabr',
            'aboutus-our-message-title': 'OUR MESSAGE',
            'aboutus-our-message-text': 'Thank you for visiting our website! Every part of this platform is built with passion, effort, and countless hours of hard work. We kindly ask that you respect and value the dedication behind what we\'ve created. Your support means everything to us. We\'re committed to improving and growing, with exciting new updates and features coming every year. This is just the beginning – stay tuned for what\'s next!',
            'aboutus-web-design-title': 'Web Design and Web Publisher',
            'aboutus-web-design-name': 'Aryan Bakhtyar Jameel',
            'aboutus-translator-title': 'ENGLISH TRANSLATOR AND DESIGN HELPER',
            'aboutus-translator-name': 'Ronya Hemn AbdullQahar',

            // Staff Page Specific
            'staff-page-title': 'STAFF',
            'staff-sem1-title': 'FIRST SEMESTER',
            'staff-s1m1-name': 'Jamal Saeed Saeed',
            'staff-s1m1-degree': 'Higher Diploma',
            'staff-s1m1-subject': 'Statistic principles',
            'staff-s1m2-name': 'Hawkar Jameel Mohammed',
            'staff-s1m2-degree': 'Master',
            'staff-s1m2-subject': 'Kurdology',
            'staff-s1m3-name': 'Gardoon Khurshed Izzat',
            'staff-s1m3-degree': 'Master',
            'staff-s1m3-subject': 'Business administration principles',
            'staff-s1m4-name': 'Tariq Mohammed Saber',
            'staff-s1m4-degree': 'Master',
            'staff-s1m4-subject': 'Computer essentials',
            'staff-s1m5-name': 'Rebwar Mustafa',
            'staff-s1m5-degree': 'Higher Diploma',
            'staff-s1m5-subject': 'English Skills',
            'staff-sem2-title': 'SECOND SEMESTER',
            'staff-s2m1-name': 'Dehat Hamed',
            'staff-s2m1-degree': 'Master',
            'staff-s2m1-subject': 'Programming fundamentals / C++',
            'staff-s2m2-name': 'Hiwa Taha',
            'staff-s2m2-degree': 'Doctor',
            'staff-s2m2-subject': 'Web Design (HTML)',
            'staff-s2m3-name': 'Tariq Mohammed Saber',
            'staff-s2m3-degree': 'Master',
            'staff-s2m3-subject': 'Management information system',
            'staff-s2m4-name': 'Aras Nasr Younis',
            'staff-s2m4-degree': 'Master',
            'staff-s2m4-subject': 'Marketing principles',
            'staff-s2m5-name': 'Rebwar Mustafa',
            'staff-s2m5-degree': 'Higher Diploma',
            'staff-s2m5-subject': 'English Skills',
            'staff-sem3-title': 'THIRD SEMESTER',
            'staff-s3m1-name': 'Aras Nasr Younis',
            'staff-s3m1-degree': 'Master',
            'staff-s3m1-subject': 'Human Resource Management',
            'staff-s3m2-name': 'Rebwar Mustafa',
            'staff-s3m2-degree': 'Higher Diploma',
            'staff-s3m2-subject': 'English language for business',
            'staff-s3m3-name': 'Rebaz Dara Mustafa',
            'staff-s3m3-degree': 'Doctor',
            'staff-s3m3-subject': 'Advanced programming / C++',
            'staff-s3m4-name': 'Hiwa Taha',
            'staff-s3m4-degree': 'Doctor',
            'staff-s3m4-subject': 'Web development',
            'staff-s3m5-name': 'Balin Abdulqader',
            'staff-s3m5-degree': 'Master',
            'staff-s3m5-subject': 'Database',
            'staff-sem4-title': 'FOURTH SEMESTER',
            'staff-s4m1-name': 'Aras Nasr Younis',
            'staff-s4m1-degree': 'Master',
            'staff-s4m1-subject': 'Knowledge management',
            'staff-s4m2-name': 'Rebwar Mustafa',
            'staff-s4m2-degree': 'Higher Diploma',
            'staff-s4m2-subject': 'English language for business 2',
            'staff-s4m3-name': 'Jamal Saeed Saeed',
            'staff-s4m3-degree': 'Higher Diploma',
            'staff-s4m3-subject': 'Management statics',
            'staff-s4m4-name': 'Balin Abdulqader',
            'staff-s4m4-degree': 'Master',
            'staff-s4m4-subject': 'Advanced database',
            'staff-s4m5-name': 'Dehat Hamed',
            'staff-s4m5-degree': 'Master',
            'staff-s4m5-subject': 'Business communication & network',
            'staff-practical-title': 'PRACTICAL TEACHERS',
            'staff-ptm1-name': 'Rawan Kazm Hamed',
            'staff-ptm1-degree': 'Practical Teacher, Dibloma',
            'staff-ptm1-subject': 'C++, Database, Networking',
            'staff-ptm2-name': 'Zhala Tahsen Jalal',
            'staff-ptm2-degree': 'Practical Teacher, Dibloma',
            'staff-ptm2-subject': 'Computer essentials, Advanced Databases, Web Design, Web Development',
            'staff-ptm3-name': 'Parez Namiq Abdulxalq',
            'staff-ptm3-degree': 'Clerk, Dibloma',
            'staff-ptm3-subject': '',
            'staff-ptm4-name': 'Nazdar Fatah Ebrahim',
            'staff-ptm4-degree': 'Practical Teacher, Dibloma',
            'staff-ptm4-subject': 'Marketing',
            'staff-ptm5-name': 'Hawzhen Wali Ahmed',
            'staff-ptm5-degree': 'Practical Teacher, Dibloma',
            'staff-ptm5-subject': 'SPSS',
            'staff-ptm6-name': 'Xansa Saad Saber',
            'staff-ptm6-degree': 'Practical Teacher, Bachelor',
            'staff-ptm6-subject': '',
            'staff-ptm7-name': 'Zaynab Rafaee Majed',
            'staff-ptm7-degree': 'Staff MIS, Master',
            'staff-ptm7-subject': '',
            'staff-ptm8-name': 'Ibrahim Mohamed Taha',
            'staff-ptm8-degree': 'Staff MIS, Master',
            'staff-ptm8-subject': '',
            'staff-ptm9-name': 'Dlnya Jalal Ahmed',
            'staff-ptm9-degree': 'Staff MIS, Bachelor',
            'staff-ptm9-subject': '',
            'staff-ptm10-name': 'Gaylan Husman Hasan',
            'staff-ptm10-degree': 'Staff MIS, Master',
            'staff-ptm10-subject': '',
            'staff-thankyou-p1': 'A HEARTFELT THANK YOU TO ALL OUR STAFF MEMBERS. YOUR DEDICATION, KNOWLEDGE, AND SUPPORT HAVE MADE A LASTING IMPACT ON OUR EDUCATION.',
            'staff-thankyou-p2': 'YOU NOT ONLY TEACH US BUT ALSO INSPIRE US TO BECOME MORE ADVANCED, SKILLED, AND CONFIDENT IN OUR JOURNEY.',
            'staff-thankyou-p3': 'WE DEEPLY APPRECIATE YOUR EFFORTS AND ARE GRATEFUL FOR THE GUIDANCE YOU CONTINUE TO PROVIDE.',
            'staff-thankyou-p4': '............',

            // Copyright (common to all pages)
            'copyright-text': '© 2025 www.epumis.com Aryan Bakhtyar ⥼⥽ Ronya Hemn'
        },
        ku: {
            // Navigation (common to all pages) - REPLACE WITH ACTUAL KURDISH
            'nav-home': 'ماڵپەری سەرەکی',
            'nav-staff': 'ستاف',
            'nav-department': 'دەربارەی بەش',
            'nav-about-us': 'دەربارەی ئێمە',
            'nav-language-main': 'زمان',
            'lang-kurdish': 'کوردی',
            'lang-english': 'ئینگلیزی',
            'nav-logo-title': 'MIS', // Placeholder, likely no change or use Kurdish abbreviation if available

            // Index Page Specific - REPLACE WITH ACTUAL KURDISH
            'index-more-info-button': 'زانیاری زیاتر',
            'index-main-title': 'سیستەمی زانیاری کارگێری کۆلێژی تەکنیکی شەقڵاوە',
            'index-intro-text': 'ئەم بەشە بە فەرمی لە ساڵی خوێندنی <span style="color: aliceblue; "><i>٢٠٢٠-٢٠٢١ لە کۆلێژی تەکنیکی شەقڵاوە</i></span> کرایەوە، <br> ئەمەش هەنگاوێکی گرنگ بوو لە گەشەپێدانی خوێndنی مۆدێرن لە دامەزراوەکەدا. هەر لە هەمان ساڵدا، شانازی بە پێشوازیکردنی یەکەم گروپی خوێندکارانییەوە کرد، کە سەرەتایەکی نوێ بوو لە پێشکەشکردنی ئەکادیمی کۆلێژەکە. ئەم بەشە بە شێوەیەکی تایبەت داڕێژراوە، پرۆگرامێکی خوێندنی دوو پسپۆڕی پێشکەش دەکات کە دوو بواری سەرەکی تێکەڵ دەکات:',
            'index-specialization-admin': '➣ کارگێڕی',
            'index-specialization-it': '➣ تەکنەلۆژیای زانیاری',
            'index-curriculum-intro': '<SPAN style="color: rgb(151, 151, 151);">پرۆگرامی خوێندن بە شێوەیەکی ستراتیژی دابەشکراوە بۆ دڵنیابوون لە خوێندنێکی هاوسەنگ و کرداری، لەگەڵ:</SPAN>',
            'index-coursework-it': '➣ ٦٠٪ ی کۆرسەکان تەرخانکراوە بۆ تەکنەلۆژیای زانیاری',
            'index-coursework-management': '➣ ٤٠٪ تەرخانکراوە بۆ خوێندنی بەڕێوەبردن و کارگێڕی',
            'index-integrated-model-text': 'ئەم مۆدێلە یەکگرتووە دڵنیایی دەدات کە خوێندکاران بە بناغەیەکی بەهێز لە هەردوو بواری تەکنیکی و کارگێڕی دەردەچن، و ئامادەیان دەکات بۆ داواکارییەکانی بازاڕی کاری ئەمڕۆ. لە ئەنجامدا، دەرچووان بڕوانامەی دبلۆم وەردەگرن کە شایستەیان دەکات لە هەردوو بواری ئایتی و کارگێڕیدا، ئەمەش بە شێوەیەکی بەرچاو هەلی دامەزراندنیان زیاد دەکات لە سێکتەرە جیاوازەکاندا. یەکێک لە خاڵە بەهێزەکانی بەشەکە ئەوەیە کە ڕێڕەوێکی ئەکادیمی و پیشەیی ڕوون دروست دەکات. لە کاتی تەواوکردنی پرۆگرامەکە، خوێندکاران شایستەی ئەوەن کە درێژە بە خوێندن بدەن لە کۆلێژی تەکنیکی ئەندازیاری، کە دەرگا بۆ بڕوانامەی پێشکەوتووتر و پیشەی ئاست بەرزتر دەکاتەوە لە بوارەکەدا. بەڵام، گرنگە ئاماژە بەوە بکرێت کە تەنها خوێندکارانی پۆلی زانستی ئامادەیی شایستەی وەرگرتنن لەم بەشە. ئەم مەرجە دڵنیایی دەدات کە خوێندکاران زانیاری بناغەیی پێویستیان هەیە بۆ مامەڵەکردن لەگەڵ سروشتی تەکنیکی کۆرسەکان. لە کۆتاییدا، ئەم بەشە دەرفەتێکی مێشک کراوە نوێنەرایەتی دەکات بۆ ئەو خوێندکارانەی کە ئارەزووی بنیادنانی پیشەیەک دەکەن کە تەکنەلۆژیا و بەڕێوەبردن تێکەڵ دەکات. خوێندکاران بەو دوو شارەزاییە پڕچەک دەکات کە پێویستن لە شوێنی کاری مۆدێرندا، و وایان لێدەکات کە فرەتوانا، کێبڕکێکار، و ئامادەبن بۆ بەشداریکردنی بەمانا لە ژینگەی پیشەیی جۆراوجۆردا.',

            // About Us Page Specific (Ensure these IDs are present in aboutus.html) - REPLACE WITH ACTUAL KURDISH
            'aboutus-supervisor-title': 'سەرپەرشتیار و پشتیوان', // Placeholder
            'aboutus-supervisor-name1': 'د. هیوا تەها ', // Placeholder
            'aboutus-supervisor-name2': 'ژاڵە تەحسین جەلال', // Placeholder
            'aboutus-idea-title': 'بیرۆکە و پشتیوان', // Placeholder
            'aboutus-idea-name1': 'ڕەوان کاضم حمد', // Placeholder
            'aboutus-supporter-title': 'پشتیوان', // Placeholder
            'aboutus-supporter-name1': 'طارق محمد صابر', // Placeholder
            'aboutus-our-message-title': 'پەیامی ئێمە', // Placeholder
            'aboutus-our-message-text': 'سوپاس بۆ سەردانکردنی ماڵپەڕەکەمان! هەموو بەشێکی ئەم پلاتفۆرمە بە حەز و ماندووبوون و کاتژمێرەهای زۆری کاری سەخت دروستکراوە. بەڕێزتان تکایە ڕێز لەو ماندووبوونە بگرن کە لە پشت ئەوەی دروستمان کردووە هەیە. پشتیوانی ئێوە هەموو شتێکە بۆ ئێمە. ئێمە پابەندین بە باشترکردن و گەشەکردن، لەگەڵ نوێکاری و تایبەتمەندی نوێی سەرنجڕاکێش کە هەموو ساڵێک دێن. ئەمە تەنها سەرەتایە – چاوەڕوانی ئەوەی داهاتوو بن!', // Placeholder
            'aboutus-web-design-title': 'دیزاینی وێب و بڵاوکەرەوەی وێب', // Placeholder
            'aboutus-web-design-name': 'ئاریان بەختیار جەمیل', // Placeholder
            'aboutus-translator-title': 'وەرگێڕی ئینگلیزی و یارمەتیدەری دیزاین', // Placeholder
            'aboutus-translator-name': 'ڕۆنیا هێمن عبدالقهار ', // Placeholder

            // Staff Page Specific - REPLACE WITH ACTUAL KURDISH
            'staff-page-title': 'ستاف', // Placeholder
            'staff-sem1-title': 'سمستەری یەکەم', // Placeholder
            'staff-s1m1-name': 'جەمال سەعید سەعید', // Placeholder
            'staff-s1m1-degree': 'دبلۆمی باڵا', // Placeholder
            'staff-s1m1-subject': 'بنەماکانی ئامار', // Placeholder
            'staff-s1m2-name': 'هاوکار جەمیل محەمەد', // Placeholder
            'staff-s1m2-degree': 'ماستەر', // Placeholder
            'staff-s1m2-subject': 'کوردۆلۆجی', // Placeholder
            'staff-s1m3-name': 'گەردوون خورشید عیزەت', // Placeholder
            'staff-s1m3-degree': 'ماستەر', // Placeholder
            'staff-s1m3-subject': 'بنەماکانی کارگێڕی کار', // Placeholder
            'staff-s1m4-name': 'طارق محمد صابر', // Placeholder
            'staff-s1m4-degree': 'ماستەر', // Placeholder
            'staff-s1m4-subject': 'بنەماکانی کۆمپیوتەر', // Placeholder
            'staff-s1m5-name': 'ڕێبوار مستەفا', // Placeholder
            'staff-s1m5-degree': 'دبلۆمی باڵا', // Placeholder
            'staff-s1m5-subject': 'تواناکانی زمانی ئینگلیزی', // Placeholder
            'staff-sem2-title': 'سمستەری دووەم', // Placeholder
            'staff-s2m1-name': 'دێهات حمد', // Placeholder
            'staff-s2m1-degree': 'ماستەر', // Placeholder
            'staff-s2m1-subject': 'بنەماکانی پرۆگرامسازی / ++C', // Placeholder
            'staff-s2m2-name': 'هیوا طە', // Placeholder
            'staff-s2m2-degree': 'دکتۆرا', // Placeholder
            'staff-s2m2-subject': 'دیزاینی وێب (HTML)', // Placeholder
            'staff-s2m3-name': 'طارق محمد صابر', // Placeholder
            'staff-s2m3-degree': 'ماستەر', // Placeholder
            'staff-s2m3-subject': 'سیستەمی زانیاری کارگێڕی', // Placeholder
            'staff-s2m4-name': 'ئاراس ناسر یونس', // Placeholder
            'staff-s2m4-degree': 'ماستەر', // Placeholder
            'staff-s2m4-subject': 'بنەماکانی بازاڕگەری', // Placeholder
            'staff-s2m5-name': 'ڕێبوار مستەفا', // Placeholder
            'staff-s2m5-degree': 'دبلۆمی باڵا', // Placeholder
            'staff-s2m5-subject': 'تواناکانی زمانی ئینگلیزی ٢', // Placeholder
            'staff-sem3-title': 'سمستەری سێیەم', // Placeholder
            'staff-s3m1-name': 'ئاراس ناسر یونس', // Placeholder
            'staff-s3m1-degree': 'ماستەر', // Placeholder
            'staff-s3m1-subject': 'بەڕێوەبردنی سەرچاوە مرۆییەکان', // Placeholder
            'staff-s3m2-name': 'ڕێبوار مستەفا', // Placeholder
            'staff-s3m2-degree': 'دبلۆمی باڵا', // Placeholder
            'staff-s3m2-subject': 'زمانی ئینگلیزی بۆ کار', // Placeholder
            'staff-s3m3-name': 'ڕێباز دارا مستەفا', // Placeholder
            'staff-s3m3-degree': 'دکتۆرا', // Placeholder
            'staff-s3m3-subject': 'پرۆگرامسازی پێشکەوتوو / ++C', // Placeholder
            'staff-s3m4-name': 'هیوا طە', // Placeholder
            'staff-s3m4-degree': 'دکتۆرا', // Placeholder
            'staff-s3m4-subject': 'پەرەپێدانی وێب', // Placeholder
            'staff-s3m5-name': 'بەڵین عەبدولقادر', // Placeholder
            'staff-s3m5-degree': 'ماستەر', // Placeholder
            'staff-s3m5-subject': 'داتابەیس', // Placeholder
            'staff-sem4-title': 'سمستەری چوارەم', // Placeholder
            'staff-s4m1-name': 'ئاراس ناسر یونس', // Placeholder
            'staff-s4m1-degree': 'ماستەر', // Placeholder
            'staff-s4m1-subject': 'سیستەمی زانیاری', // Placeholder
            'staff-s4m2-name': 'ڕێبوار مستەفا', // Placeholder
            'staff-s4m2-degree': 'دبلۆمی باڵا', // Placeholder
            'staff-s4m2-subject': 'زمانی ئینگلیزی بۆ کار ٢', // Placeholder
            'staff-s4m3-name': 'جەمال سەعید سەعید', // Placeholder
            'staff-s4m3-degree': 'دبلۆمی باڵا', // Placeholder
            'staff-s4m3-subject': 'ئاماری کارگێڕی', // Placeholder
            'staff-s4m4-name': 'بەڵین عەبدولقادر', // Placeholder
            'staff-s4m4-degree': 'ماستەر', // Placeholder
            'staff-s4m4-subject': 'داتابەیسی پێشکەوتوو', // Placeholder
            'staff-s4m5-name': 'دێهات حمد', // Placeholder
            'staff-s4m5-degree': 'ماستەر', // Placeholder
            'staff-s4m5-subject': 'پەیوەندی کار و تۆڕ', // Placeholder
            'staff-practical-title': 'مامۆستایانی کرداری', // Placeholder
            'staff-ptm1-name': 'ڕەوان کاضم حمد', // Placeholder
            'staff-ptm1-degree': 'مامۆستای کرداری، دبلۆم', // Placeholder
            'staff-ptm1-subject': '++C، داتابەیس، تۆڕسازی', // Placeholder
            'staff-ptm2-name': 'ژاڵە تەحسین جەلال', // Placeholder
            'staff-ptm2-degree': 'مامۆستای کرداری، دبلۆم', // Placeholder
            'staff-ptm2-subject': 'بنەماکانی کۆمپیوتەر، داتابەیسی پێشکەوتوو، دیزاینی وێب، پەرەپێدانی وێب', // Placeholder
            'staff-ptm3-name': 'پەرێز نامیق عەبدولخالق', // Placeholder
            'staff-ptm3-degree': 'کارگێڕ، دبلۆم', // Placeholder
            'staff-ptm3-subject': '', // Placeholder (empty as in English)
            'staff-ptm4-name': 'نازدار فەتاح ئیبراهیم', // Placeholder
            'staff-ptm4-degree': 'مامۆستای کرداری، دبلۆم', // Placeholder
            'staff-ptm4-subject': 'بازاڕگەری', // Placeholder
            'staff-ptm5-name': 'هاوژین وەلی ئەحمەد', // Placeholder
            'staff-ptm5-degree': 'مامۆستای کرداری، دبلۆم', // Placeholder
            'staff-ptm5-subject': 'ئامار', // Placeholder
            'staff-ptm6-name': 'خەنساء سەعد سابر', // Placeholder
            'staff-ptm6-degree': 'مامۆستای کرداری، بەکالۆریۆس', // Placeholder
            'staff-ptm6-subject': ' ', // Placeholder
            'staff-ptm7-name': 'زینەب ڕەفاعی مەجید', // Placeholder
            'staff-ptm7-degree': 'ستافی MIS، ماستەر', // Placeholder
            'staff-ptm7-subject': '', // Placeholder (empty as in English)
            'staff-ptm8-name': 'ئیبراهیم محەمەد تەها', // Placeholder
            'staff-ptm8-degree': 'ستاف MIS، ماستەر', // Placeholder
            'staff-ptm8-subject': '', // Placeholder (empty as in English)
            'staff-ptm9-name': 'دڵنیا جەلال ئەحمەد', // Placeholder
            'staff-ptm9-degree': 'ستاف MIS، بەکالۆریۆس', // Placeholder
            'staff-ptm9-subject': '', // Placeholder (empty as in English)
            'staff-ptm10-name': 'گەیلان عوسمان حەسەن', // Placeholder
            'staff-ptm10-degree': 'ستاف MIS، ماستەر', // Placeholder
            'staff-ptm10-subject': '', // Placeholder (empty as in English)
            'staff-thankyou-p1': 'سوپاسێکی دڵسۆزانە بۆ هەموو ئەندامانی ستافەکەمان. دڵسۆزی، زانیاری، و پشتیوانی ئێوە کاریگەرییەکی بەردەوامی لەسەر خوێندنی ئێمە هەبووە.', // Placeholder
            'staff-thankyou-p2': 'ئێوە نەک تەنها فێرمان دەکەن بەڵکو هاندەریشمانن بۆ ئەوەی پێشکەوتووتر، شارەزاتر، و دڵنیاتر بین لە گەشتەکەماندا.', // Placeholder
            'staff-thankyou-p3': 'ئێمە بە قووڵی سوپاسی هەوڵەکانتان دەکەین و سوپاسگوزارین بۆ ئەو ڕێنماییانەی کە بەردەوامن لە پێشکەشکردنی.', // Placeholder
            'staff-thankyou-p4': '............', // Placeholder

            // Copyright (common to all pages) - REPLACE WITH ACTUAL KURDISH
            'copyright-text': '© ٢٠٢٥ www.epumis.com ئاریان بەختیار ⥼⥽ ڕۆنیا هێمن',

            // Department Page Specific
            'dept-head-title': 'سەرۆکی بەش',
            'dept-head-name': ' گەردوون خورشید عیزەت',
            'dept-page-title': 'سیستەمی زانیاری کارگێری ',
            'dept-dean-title': 'ڕاگری بەش',
            'dept-dean-name': ' تارق محمد صابر',
            'dept-what-learn-title': 'لە بەشی سیستەمی زانیاری کارگێری (MIS) چی فێردەبیت؟',
            'dept-what-learn-intro': 'بە شێوەیەکی سادە ڕوون دەکەمەوە:',
            'dept-what-learn-desc': 'لە بەشی MIS، فێری ئەوە دەبیت چۆن تیکنەلۆژیا بەکاربهێنی بۆ چارەسەری کێشەکانی کاروبار. ئەمانە گرنگترین بابەتەکانن کە فێری دەبیت و چۆن کۆمپیوتەر کاردەکات (هاردوێر و سۆفتوێر):',
            'dept-list-databases': 'داتابەیسەکان (چۆن داتا پاشەکەوت و ڕێکدەخرێت)',
            'dept-list-networking': 'تۆڕسازی (چۆن کۆمپیوتەرەکان پەیوەندیدەبن و زانیاریان هاوبەش دەکەن)',
            'dept-list-programming': 'پرۆگرامسازی (نووسینی پرۆگرامە سادەکان، زۆربەی کات بە زمانەکان وەک جاڤا یان C++)',
            'dept-list-business': 'بنەماکانی کاروبار (بەڕێوەبردن، بازاڕگەری، ژمێریاری)',
            'dept-list-systems': 'شیکردنەوە و دیزاینی سیستەم (چۆن پلاندانان و دروستکردنی سیستەمی زانیاری)',
            'dept-list-project': 'بەڕێوەبردنی پرۆژە (چۆن پێشەنگی پرۆژەی تیکنەلۆژیا بکەیت)',
            'dept-list-web': 'پەرەپێدانی وێب (دروستکردنی ماڵپەڕ و سیستەمە ئۆنلاینەکان)',
            'dept-sem1-title': 'بابەتەکانی سمستەری یەکەم',
            'dept-sem1-kurdology': '➣ کوردۆلۆجی',
            'dept-sem1-english': '➣ تواناکانی زمانی ئینگلیزی',
            'dept-sem1-computer': '➣ بنەماکانی کۆمپیوتەر',
            'dept-sem1-statistics': '➣ بنەماکانی ئامار',
            'dept-sem1-business': '➣ بنەماکانی بەڕێوەبردنی کاروبار',
            'dept-sem2-title': 'بابەتەکانی سمستەری دووەم',
            'dept-sem2-mis': '➣ سیستەمی زانیاری کارگێری',
            'dept-sem2-english2': '➣ تواناکانی زمانی ئینگلیزی ٢',
            'dept-sem2-programming': '➣ بنەماکانی پرۆگرامسازی / ++C',
            'dept-sem2-web': '➣ دیزاینی وێب (HTML)',
            'dept-sem2-marketing': '➣ بنەماکانی بازاڕگەری',
            'dept-sem3-title': 'بابەتەکانی سمستەری سێیەم',
            'dept-sem3-hr': '➣ بەڕێوەبردنی سەرچاوە مرۆییەکان',
            'dept-sem3-english': '➣ زمانی ئینگلیزی بۆ کاروبار',
            'dept-sem3-webdev': '➣ پەرەپێدانی وێب',
            'dept-sem3-advprog': '➣ پرۆگرامسازی پێشکەوتوو / ++C',
            'dept-sem3-database': '➣ داتابەیس',
            'dept-sem4-title': 'بابەتەکانی سمستەری چوارەم',
            'dept-sem4-english': '➣ زمانی ئینگلیزی بۆ کاروبار ٢',
            'dept-sem4-statics': '➣ ئاماری بەڕێوەبردن',
            'dept-sem4-comm': '➣ پەیوەندی کاروبار و تۆڕ',
            'dept-sem4-knowledge': '➣ بەڕێوەبردنی زانیاری',
            'dept-sem4-advdb': '➣ داتابەیسی پێشکەوتوو'
        }
    };

    const languageSelectorKurdish = document.getElementById('lang-kurdish');
    const languageSelectorEnglish = document.getElementById('lang-english');

    function setLanguage(lang) {
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang; // Set language on <html> tag
        if (lang === 'ku') {
            document.body.classList.add('lang-ku');
            document.body.classList.remove('lang-en');
            document.body.classList.add('kurdish');
            document.body.classList.remove('kurdish-removed');
            document.documentElement.dir = 'rtl'; // Set direction to right-to-left
        } else {
            document.body.classList.add('lang-en');
            document.body.classList.remove('lang-ku');
            document.body.classList.remove('kurdish');
            document.body.classList.add('kurdish-removed');
            document.documentElement.dir = 'ltr'; // Set direction to left-to-right
        }
        updateText(lang);
    }

    function updateText(lang) {
        if (!translations[lang]) {
            console.error('Language not found in translations:', lang);
            return;
        }
        for (const key in translations[lang]) {
            const element = document.getElementById(key);
            if (element) {
                // For elements that contain HTML, use innerHTML. For others, textContent.
                if (key === 'index-intro-text' || key === 'index-curriculum-intro') {
                    element.innerHTML = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        }
    }

    if (languageSelectorKurdish && languageSelectorEnglish) {
        languageSelectorKurdish.addEventListener('click', (e) => { e.preventDefault(); setLanguage('ku'); });
        languageSelectorEnglish.addEventListener('click', (e) => { e.preventDefault(); setLanguage('en'); });
    } else {
        console.warn('Language selectors not found on this page. Language will be set from localStorage if available.');
    }

    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);
}); 
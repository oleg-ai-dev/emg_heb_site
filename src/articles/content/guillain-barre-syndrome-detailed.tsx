import React from 'react';
import { Link } from 'react-router-dom';
import BlogCtaBanner from '@/components/BlogCtaBanner';
import BlogShortForm from '@/components/BlogShortForm';

const GuillainBarreSyndromeDetailed: React.FC = () => {
  return (
    <article dir="rtl" lang="he" className="prose prose-lg prose-sky max-w-none mx-auto">
      <h1 className="!text-4xl !font-extrabold text-medblue-dark mb-6">תסמונת גיאן-בארה (Guillain-Barré Syndrome - GBS): מדריך מקיף ומעמיק</h1>

      <p className="text-lg leading-relaxed mb-6">
        תסמונת גיאן-בארה (Guillain-Barré Syndrome, או בקיצור GBS) היא הפרעה נוירולוגית נדירה אך חמורה, בה מערכת החיסון של הגוף תוקפת בטעות חלקים ממערכת העצבים ההיקפית – רשת העצבים הממוקמת מחוץ למוח ולחוט השדרה. התקפה זו מובילה לדלקת בעצבים הגורמת לחולשת שרירים, נימול, ובמקרים קשים אף לשיתוק. תסמונת זו יכולה להתפתח במהירות, לעיתים תוך ימים ספורים, ולהשפיע באופן דרמטי על חיי המטופל. הבנה מעמיקה של התסמונת, דרכי האבחון והטיפול, חיונית להתמודדות יעילה ולהחלמה.
      </p>

      <p className="mb-6">
        במאמר מקיף זה, נצלול לעומק תסמונת גיאן-בארה. נסקור את התסמינים הראשונים והמתקדמים, נבחן את הגורמים האפשריים והטריגרים הנפוצים, נפרט את שיטות האבחון המדויקות, בדגש על בדיקת EMG (אלקטרומיוגרפיה) החיונית, נדון באפשרויות הטיפול המקובלות ובתהליך השיקום המורכב, ונספק מידע על הפרוגנוזה ועל החיים עם התסמונת.
      </p>

      <h2 className="!text-2xl !font-bold text-medblue-dark mt-10 mb-4">מהי תסמונת גיאן-בארה?</h2>

      <p className="mb-6">
        GBS היא מחלה אוטואימונית, כלומר, מחלה שבה מערכת החיסון, שאמורה להגן על הגוף מפני פולשים זרים כמו חיידקים ווירוסים, מזהה בטעות תאים ורקמות בריאים של הגוף כאויב ותוקפת אותם. במקרה של תסמונת גיאן-בארה, המטרה העיקרית של ההתקפה החיסונית היא מעטפת המיאלין, החומר השומני המבודד את סיבי העצב (אקסונים) במערכת העצבים ההיקפית. המיאלין מאפשר הולכה עצבית מהירה ויעילה. כאשר המיאלין נפגע (תהליך הנקרא דה-מיאלינציה), ההולכה העצבית מואטת או נחסמת לחלוטין, מה שמוביל לתסמינים האופייניים למחלה.
      </p>

      <p className="mb-4">
        קיימים מספר תתי-סוגים של תסמונת גיאן-בארה, הנבדלים זה מזה בחלקים הספציפיים של העצב הנפגעים ובדפוס התסמינים:
      </p>
      <ul className="mb-6">
        <li><strong>AIDP (Acute Inflammatory Demyelinating Polyneuropathy):</strong> הצורה הנפוצה ביותר בעולם המערבי. מאופיינת בפגיעה נרחבת במיאלין. התסמין העיקרי הוא חולשת שרירים המתחילה בדרך כלל ברגליים ומתקדמת כלפי מעלה.</li>
        <li><strong>AMAN (Acute Motor Axonal Neuropathy):</strong> צורה זו פוגעת ישירות באקסונים המוטוריים (האחראים על תנועת השרירים), ולא רק במיאלין. נפוצה יותר באסיה ובדרום אמריקה.</li>
        <li><strong>AMSAN (Acute Motor Sensory Axonal Neuropathy):</strong> דומה ל-AMAN אך פוגעת גם באקסונים התחושתיים, ולכן כוללת גם הפרעות תחושה משמעותיות.</li>
        <li><strong>תסמונת מילר-פישר (Miller Fisher Syndrome - MFS):</strong> תת-סוג נדיר יחסית המאופיין בשלישיית תסמינים קלאסית: אטקסיה (חוסר קואורדינציה), אופתלמופלגיה (שיתוק שרירי העיניים) וא-רפלקסיה (היעדר רפלקסים).</li>
      </ul>
      <p className="mb-6">
        למרות השוני בין תתי-הסוגים, המשותף לכולם הוא ההתפתחות החריפה והפגיעה במערכת העצבים ההיקפית כתוצאה מתגובה חיסונית שגויה.
      </p>

      <hr className="my-8" />

      <h2 className="!text-2xl !font-bold text-medblue-dark mt-10 mb-4">תסמינים של תסמונת גיאן-בארה: מתי לפנות לעזרה?</h2>

      <p className="mb-6">
        התסמינים של GBS יכולים להשתנות מאדם לאדם בעוצמתם ובקצב התקדמותם, אך לרוב מתחילים באופן פתאומי ומתפתחים במהירות תוך ימים עד שבועות. זיהוי מוקדם של התסמינים חיוני לפנייה מהירה לטיפול רפואי.
      </p>

      <h3 className="!text-xl !font-semibold text-medblue-dark mt-8 mb-3">תסמינים ראשונים נפוצים:</h3>
      <ul className="mb-6">
        <li><strong>נימול ועקצוץ:</strong> תחושות אלו מתחילות לעיתים קרובות בקצות האצבעות של הרגליים והידיים ומתפשטות כלפי מעלה. זוהי לעיתים קרובות התלונה הראשונה.</li>
        <li><strong>חולשת שרירים:</strong> החולשה מתחילה בדרך כלל ברגליים (קושי בהליכה, עמידה או עלייה במדרגות) ומתקדמת באופן סימטרי לשאר הגוף, כולל הזרועות, שרירי הנשימה ושרירי הפנים. החולשה יכולה להחמיר במהירות.</li>
        <li><strong>כאב:</strong> כאב עז, לעיתים דמוי התכווצות שרירים או כאב עצבי שורף, יכול להופיע בגב, בגפיים או באזורים אחרים.</li>
      </ul>

      <h3 className="!text-xl !font-semibold text-medblue-dark mt-8 mb-3">תסמינים מתקדמים וחמורים:</h3>
      <ul className="mb-6">
        <li><strong>שיתוק:</strong> במקרים רבים, החולשה מחמירה עד כדי שיתוק מלא או כמעט מלא של הגפיים.</li>
        <li><strong>קשיי נשימה:</strong> פגיעה בעצבים האחראים על שרירי הנשימה (בעיקר הסרעפת) עלולה לגרום לקוצר נשימה חמור עד כדי אי-ספיקה נשימתית, מצב מסכן חיים הדורש הנשמה מלאכותית.</li>
        <li><strong>קשיי בליעה ודיבור:</strong> חולשה של שרירי הפנים והגרון.</li>
        <li><strong>שינויים בקצב הלב ובלחץ הדם:</strong> פגיעה במערכת העצבים האוטונומית (האחראית על תפקודים לא רצוניים) עלולה לגרום לתנודות מסוכנות בקצב הלב ובלחץ הדם.</li>
        <li><strong>בעיות בשליטה על סוגרים:</strong> קושי בשליטה על מתן שתן או צואה (נדיר יחסית).</li>
        <li><strong>שיתוק שרירי העיניים:</strong> בעיקר בתסמונת מילר-פישר.</li>
      </ul>
      <blockquote className="bg-orange-100 border-r-4 border-orange-400 p-4 rounded-lg my-6">
        <p className="!mt-0 !mb-0"><strong className="text-orange-700">חשוב ביותר:</strong> אם אתם או אדם קרוב חווים תסמינים המתאימים ל-GBS, במיוחד חולשה מתקדמת או קשיי נשימה, יש לפנות <strong>מיידית</strong> לחדר מיון או להזעיק עזרה רפואית דחופה. התערבות מהירה יכולה למנוע סיבוכים מסכני חיים.</p>
      </blockquote>

      <BlogCtaBanner />

      <h2 className="!text-2xl !font-bold text-medblue-dark mt-10 mb-4">גורמים וטריגרים לתסמונת גיאן-בארה</h2>

      <p className="mb-6">
        הסיבה המדויקת לתגובה האוטואימונית ב-GBS אינה מובנת לחלוטין, אך במרבית המקרים (כשני שלישים מהחולים) התסמונת מופיעה מספר ימים עד שבועות לאחר זיהום נגיפי או חיידקי. ההשערה המקובלת היא שמנגנון הנקרא "חיקוי מולקולרי" (Molecular Mimicry) משחק תפקיד מרכזי.
      </p>
      <p className="mb-6">
        במנגנון זה, למזהם (חיידק או וירוס) יש מבנים חלבוניים הדומים למבנים הקיימים על גבי תאי העצב או מעטפת המיאלין. כאשר מערכת החיסון מפתחת נוגדנים ותאים חיסוניים כדי להילחם בזיהום, חלקם מזהים בטעות גם את המבנים העצביים הדומים ותוקפים אותם, כאילו היו חלק מהפולש הזר.
      </p>

      <h3 className="!text-xl !font-semibold text-medblue-dark mt-8 mb-3">זיהומים נפוצים הקשורים ל-GBS:</h3>
      <ul className="mb-6">
        <li><strong>קמפילובקטר ג'ג'וני (Campylobacter jejuni):</strong> חיידק זה, הגורם הנפוץ ביותר לשלשולים זיהומיים (הרעלת מזון), נחשב לטריגר המשמעותי ביותר ל-GBS, במיוחד לצורת AMAN.</li>
        <li><strong>נגיפים:</strong>
          <ul>
            <li>ציטומגלווירוס (CMV)</li>
            <li>וירוס אפשטיין-בר (EBV, גורם למחלת הנשיקה)</li>
            <li>וירוס הזיקה (Zika)</li>
            <li>נגיפי שפעת</li>
            <li>HIV</li>
            <li>COVID-19 (אם כי הקשר עדיין נחקר)</li>
          </ul>
        </li>
        <li><strong>Mycoplasma pneumoniae:</strong> חיידק הגורם לדלקת ריאות.</li>
      </ul>

      <h3 className="!text-xl !font-semibold text-medblue-dark mt-8 mb-3">גורמים פחות נפוצים:</h3>
      <ul className="mb-6">
        <li>ניתוחים</li>
        <li>חיסונים (נדיר ביותר, והסיכון לפתח GBS מזיהום גבוה לאין שיעור מהסיכון הקשור לחיסון)</li>
        <li>לימפומה או מחלות אוטואימוניות אחרות כמו זאבת.</li>
      </ul>
      <p className="mb-6">
        חשוב לציין שלא כל מי שנדבק באחד מהזיהומים הללו יפתח GBS. נראה כי נדרש שילוב של גורמים גנטיים וסביבתיים כדי שהתגובה האוטואימונית תתרחש.
      </p>

      <hr className="my-8" />

      <h2 className="!text-2xl !font-bold text-medblue-dark mt-10 mb-4">אבחון תסמונת גיאן-בארה: תפקידה המכריע של בדיקת EMG</h2>

      <p className="mb-6">
        אבחון GBS מתבסס על שילוב של ההיסטוריה הרפואית של המטופל, התסמינים הקליניים, בדיקה נוירולוגית ובדיקות עזר. מכיוון שהתסמינים יכולים לחקות מצבים נוירולוגיים אחרים, אבחון מדויק ומהיר הוא קריטי.
      </p>

      <h3 className="!text-xl !font-semibold text-medblue-dark mt-8 mb-3">מרכיבי האבחון:</h3>
      <ol className="mb-6">
        <li><strong>הערכה קלינית ובדיקה נוירולוגית:</strong> הרופא יתשאל לגבי תחילת התסמינים, קצב ההתקדמות, זיהומים קודמים ויבצע בדיקה נוירולוגית מקיפה להערכת כוח שרירים, רפלקסים, תחושה ותפקוד עצבי קרניאלי (עצבי הגולגולת). ממצאים אופייניים כוללים חולשה סימטרית מתקדמת והיעדר או ירידה ברפלקסים הגידיים העמוקים.</li>
        <li><strong>ניקור מותני (Lumbar Puncture):</strong> דגימה של נוזל חוט השדרה (CSF) נלקחת לבדיקה. במטופלי GBS, לרוב מוצאים רמה גבוהה של חלבון ללא עלייה משמעותית במספר תאי הדם הלבנים – ממצא המכונה "דיסוציאציה אלבומינו-ציטולוגית". שינוי זה מופיע בדרך כלל כשבוע לאחר תחילת התסמינים.</li>
        <li><strong>בדיקות הולכה עצבית (NCS) ואלקטרומיוגרפיה (EMG):</strong> אלו הן בדיקות אלקטרופיזיולוגיות המהוות כלי אבחוני מרכזי וחשוב ביותר ב-GBS.
          <ul>
            <li><strong>בדיקת הולכה עצבית (NCS - Nerve Conduction Studies):</strong> מודדת את מהירות ואיכות ההולכה של אותות חשמליים לאורך העצבים ההיקפיים. מדבקות אלקטרודה מונחות על העור מעל העצבים, וגירוי חשמלי קל מועבר דרך עצב אחד בעוד אלקטרודה אחרת קולטת את התגובה. ב-GBS, במיוחד בצורת AIDP, ניתן לראות האטה משמעותית במהירות ההולכה, חסימות הולכה (Conduction Blocks) והארכה של זמני חביון (Latencies) – כולם סימנים לפגיעה במיאלין.</li>
            <li><strong>אלקטרומיוגרפיה (EMG - Electromyography):</strong> בודקת את הפעילות החשמלית בתוך השרירים. אלקטרודת מחט דקה מוחדרת לשריר כדי להקליט את הפעילות החשמלית שלו במנוחה ובזמן כיווץ. ב-GBS, בדיקת EMG יכולה להראות סימנים של דנרבציה (אובדן אספקת העצבים לשריר) אם יש פגיעה באקסונים (כמו ב-AMAN/AMSAN), או דפוסים המעידים על בעיה בהפעלת השריר עקב חסימת ההולכה העצבית. בדיקת EMG חיונית לא רק לאישור האבחנה אלא גם לקביעת תת-הסוג של GBS (פגיעה במיאלין לעומת פגיעה באקסון), מידע בעל חשיבות פרוגנוסטית. תוצאות בדיקת EMG יכולות לסייע בהערכת חומרת הפגיעה העצבית ולעקוב אחר תהליך ההחלמה. למידע נוסף על הבדיקה, קראו את המאמר המלא על <Link to="/blog/what-is-emg" className="text-medblue underline">בדיקת EMG</Link>.</li>
          </ul>
        </li>
        <li><strong>בדיקות דם:</strong> לשלילת סיבות אחרות לחולשה ולעיתים לזיהוי נוגדנים ספציפיים (כמו Anti-GQ1b בתסמונת מילר-פישר).</li>
      </ol>
      <p className="mb-6">
        השילוב של הממצאים הקליניים, תוצאות ניקור מותני ותוצאות בדיקות ה-EMG/NCS מאפשר לרופאים לאבחן את תסמונת גיאן-בארה בדרגת ודאות גבוהה ולשלול מצבים אחרים.
      </p>

      <hr className="my-8" />

      <h2 className="!text-2xl !font-bold text-medblue-dark mt-10 mb-4">טיפול בתסמונת גיאן-בארה: עצירת ההתקפה וטיפול תומך</h2>

      <p className="mb-6">
        אין תרופה המרפאת את GBS באופן ישיר, אך קיימים טיפולים שיכולים לקצר את משך המחלה, להפחית את חומרתה ולמנוע סיבוכים. הטיפול מתמקד בשני היבטים עיקריים: טיפול אימונומודולטורי (המשפיע על מערכת החיסון) וטיפול תומך אינטנסיבי.
      </p>

      <h3 className="!text-xl !font-semibold text-medblue-dark mt-8 mb-3">טיפולים אימונומודולטוריים:</h3>
      <p className="mb-4">מטרת טיפולים אלו היא לעצור את ההתקפה של מערכת החיסון על העצבים. שתי האפשרויות העיקריות, הנחשבות יעילות במידה דומה, הן:</p>
      <ul className="mb-6">
        <li><strong>פלזמפרזיס (Plasmapheresis) או החלפת פלזמה:</strong> הליך שבו דם המטופל מוצא מהגוף, מופרד לתאי דם ולפלזמה (הנוזל בו נמצאים הנוגדנים התוקפים), הפלזמה המסוננת מוחלפת בתחליף פלזמה או בפלזמה מתורם, ותאי הדם מוחזרים לגוף המטופל. התהליך מסיר את הנוגדנים המזיקים מזרם הדם. לרוב נדרשים מספר טיפולים על פני ימים עד שבועות.</li>
        <li><strong>טיפול באימונוגלובולינים תוך-ורידי (IVIG - Intravenous Immunoglobulin):</strong> עירוי תוך-ורידי של נוגדנים בריכוז גבוה, שנאספו מתרומות דם של אלפי אנשים בריאים. מנגנון הפעולה המדויק אינו ברור לחלוטין, אך משערים שנוגדנים אלו "מדללים" או מנטרלים את הנוגדנים המזיקים של המטופל וחוסמים את פעילותם. הטיפול ניתן בדרך כלל במשך 5 ימים רצופים.</li>
      </ul>
      <p className="mb-6">
        הבחירה בין פלזמפרזיס ל-IVIG תלויה בזמינות, במצב הרפואי הכללי של המטופל ובגורמים נוספים. מתן סטרואידים, שהיה מקובל בעבר, הוכח כלא יעיל בטיפול ב-GBS.
      </p>

      <h3 className="!text-xl !font-semibold text-medblue-dark mt-8 mb-3">טיפול תומך:</h3>
      <p className="mb-4">
        בשל הפגיעה הרב-מערכתית האפשרית, טיפול תומך אינטנסיבי הוא חיוני, ולרוב מתבצע ביחידה לטיפול נמרץ או במחלקה נוירולוגית עם יכולות ניטור גבוהות:
      </p>
      <ul className="mb-6">
        <li><strong>תמיכה נשימתית:</strong> ניטור צמוד של תפקודי הנשימה. במקרה של אי-ספיקה נשימתית, נדרשת הנשמה מלאכותית באמצעות מכונת הנשמה.</li>
        <li><strong>ניטור לבבי ולחץ דם:</strong> מעקב רציף אחר קצב הלב ולחץ הדם, וטיפול בתנודות מסוכנות במידת הצורך.</li>
        <li><strong>מניעת סיבוכים:</strong> טיפול למניעת קרישי דם (בשל חוסר תנועה), פצעי לחץ, זיהומים (במיוחד דלקת ריאות) וכאבים.</li>
        <li><strong>תזונה:</strong> במקרים של קשיי בליעה, ייתכן צורך בהזנה דרך זונדה או עירוי.</li>
        <li><strong>טיפול בכאב:</strong> שימוש במשככי כאבים, לעיתים תרופות ספציפיות לכאב נוירופתי.</li>
        <li><strong>תמיכה פסיכולוגית:</strong> התמודדות עם מחלה פתאומית ומשתקת היא קשה ביותר, ותמיכה נפשית למטופל ולמשפחתו היא חלק בלתי נפרד מהטיפול.</li>
      </ul>

      <BlogShortForm />

      <h2 className="!text-2xl !font-bold text-medblue-dark mt-10 mb-4">החלמה ושיקום מתסמונת גיאן-בארה</h2>

      <p className="mb-6">
        תהליך ההחלמה מ-GBS יכול להיות ארוך ומאתגר, ונמשך לעיתים חודשים ואף שנים. לאחר השלב החריף של המחלה והתייצבות המצב, מתחיל שלב השיקום, שמטרתו להחזיר למטופל את כוח השרירים, הקואורדינציה והתפקוד היומיומי.
      </p>
      <p className="mb-4">
        השיקום הוא תהליך רב-מקצועי הכולל:
      </p>
      <ul className="mb-6">
        <li><strong>פיזיותרפיה:</strong> תרגילים לחיזוק שרירים, שיפור טווחי תנועה, שיווי משקל וקואורדינציה. הפיזיותרפיה מותאמת אישית ליכולות המטופל ומתקדמת בהדרגה.</li>
        <li><strong>ריפוי בעיסוק:</strong> סיוע בחזרה לפעילויות יומיומיות (ADL - Activities of Daily Living) כמו לבוש, רחצה, אכילה, ושימוש באביזרי עזר במידת הצורך.</li>
        <li><strong>קלינאות תקשורת:</strong> טיפול בקשיי בליעה ודיבור.</li>
        <li><strong>תמיכה נפשית וסוציאלית:</strong> התמודדות עם ההשלכות הרגשיות והחברתיות של המחלה.</li>
      </ul>
      <p className="mb-6">
        השיקום מתחיל לרוב במסגרת אשפוז שיקומי ייעודי וממשיך לאחר מכן במסגרת אמבולטורית (מרפאות חוץ) או בבית. סבלנות, התמדה ומוטיבציה הן מפתח להצלחת השיקום.
      </p>

      <hr className="my-8" />

      <h2 className="!text-2xl !font-bold text-medblue-dark mt-10 mb-4">פרוגנוזה וחיים עם GBS</h2>

      <p className="mb-6">
        הפרוגנוזה (סיכויי ההחלמה) של GBS היא בדרך כלל טובה, אך משתנה בין אנשים. רוב המטופלים (כ-80-85%) מחלימים באופן מלא או כמעט מלא תוך 6 עד 12 חודשים, אם כי חלקם עשויים להישאר עם חולשה קלה, נימול או כאב כרוני.
      </p>
      <p className="mb-4">
        גורמים המשפיעים על הפרוגנוזה כוללים:
      </p>
      <ul className="mb-6">
        <li>גיל המטופל (מבוגרים יותר נוטים להחלמה איטית יותר)</li>
        <li>חומרת המחלה בשיאה (במיוחד צורך בהנשמה)</li>
        <li>קצב התקדמות מהיר של התסמינים</li>
        <li>תת-סוג המחלה (פגיעה אקסונלית נוטה להיות קשה יותר מפגיעה מיאלינית)</li>
        <li>עיכוב באבחון ובתחילת הטיפול</li>
      </ul>
      <p className="mb-6">
        מיעוט קטן מהחולים (כ-3-5%) נפטרים מהמחלה, לרוב כתוצאה מסיבוכים כמו אי-ספיקה נשימתית, זיהומים קשים או הפרעות בקצב הלב. כ-10-15% מהחולים נותרים עם נכות משמעותית לטווח ארוך.
      </p>
      <p className="mb-6">
        תופעה נוספת היא עייפות כרונית, המדווחת על ידי מטופלים רבים גם לאחר החלמה טובה מבחינה מוטורית. התמודדות עם עייפות זו דורשת ניהול אנרגיה, מנוחה מספקת והתאמת אורח החיים.
      </p>
      <p className="mb-6">
        חשוב לזכור ש-GBS היא בדרך כלל מחלה חד-פעמית. הישנות המחלה (Relapse) נדירה יחסית, אם כי קיימת צורה כרונית הנקראת CIDP (Chronic Inflammatory Demyelinating Polyneuropathy), שהיא מחלה נפרדת הדורשת טיפול ארוך טווח.
      </p>

      <h2 className="!text-2xl !font-bold text-medblue-dark mt-10 mb-4">סיכום ומסקנות</h2>

      <p className="mb-6">
        תסמונת גיאן-בארה היא אתגר רפואי משמעותי, הדורש אבחון מהיר, טיפול אינטנסיבי ותהליך שיקום ממושך. למרות חומרתה הפוטנציאלית, הפרוגנוזה לטווח ארוך היא לרוב חיובית, ומרבית החולים חוזרים לתפקוד מלא או כמעט מלא. בדיקות אלקטרופיזיולוגיות, ובמיוחד <strong>אבחון גיאן בארה עם בדיקת EMG</strong> ו-NCS, הן קריטיות לאבחון מדויק, להערכת חומרת הפגיעה ולהנחיית הטיפול והשיקום.
      </p>
      <p className="mb-6">
        המודעות לתסמינים הראשונים, כגון <strong>תסמינים ראשונים של תסמונת גיאן בארה</strong> כמו נימול וחולשה מתקדמת, והפנייה המהירה לקבלת טיפול רפואי, יכולות לשפר משמעותית את תוצאות הטיפול ולהפחית את הסיכון לסיבוכים. תהליך ההחלמה דורש סבלנות, תמיכה והתמדה בשיקום, אך בעזרת הטיפול הנכון והגישה הרב-מקצועית, ניתן להתגבר על האתגרים ולחזור לחיים מלאים ופעילים.
      </p>
      <p className="mb-6">
        אם אתם חושדים ב-GBS או זקוקים לאבחון נוירולוגי, פנו למומחים. בדיקת EMG יכולה לספק תשובות חיוניות. למידע נוסף על מחלות נוירולוגיות אחרות, עיינו במאמרים שלנו על <Link to="/blog/als" className="text-medblue underline">ALS</Link> או <Link to="/blog/myasthenia-gravis" className="text-medblue underline">מיאסטניה גרביס</Link>.
      </p>
      <hr className="my-8" />
      <p className="text-xs text-gray-500">
        המידע במאמר זה אינו מהווה תחליף לייעוץ רפואי אישי. בכל מקרה של תסמינים או חשש – יש לפנות לרופא מומחה.
      </p>
    </article>
  );
};

export default GuillainBarreSyndromeDetailed;

import { useEffect, useState } from "react";

export default function Timer({ val }) {
    // פעם אחת מגדיר את הסטייט
    const [seconds, setSeconds] = useState(val);

    // רץ בכל שינוי של סטייט או פרופס
    // console.log('timer');

    // בעיה: רץ אינסוף פעמים בכל שינוי סטייט, רקורסיה אינסופית
    // setInterval(() => {
    //     setSeconds(seconds + 1);
    // }, 500);

    // פתרון
    // use effect פונקציה שמבצעת משהו בזמן מסוים של הקומפוננטה ולא בכל רנדר
    // 1. גוף הפונקציה - מה אמורה לבצע
    // 2. ריטרן פונקציה שמתבצעת כשהקומפוננטה מוסרת מהמסך
    // 3. מערך תלויות של סטייט/פרופס
    // [] - בפעם הראשונה שהקומפוננטה עולה
    useEffect(() => {
        // closure - אם יש פונקציה בתוך פונקציה
        // שומר בפונקציה החיצונית את הערך שהפונקציה הפנימית משתמשת בו
        // seconds = 0
        // f = prevSeconds => prevSeconds + 1
        console.log(val + "================");
        // בכל עדכון של הפרופ - יעדכן את הסטייט המתאים
        setSeconds(val);

        const id = setInterval(() => {
            // console.log('interval');

            // setSeconds(Math.random());

            // כדי לעדכן סטייט
            // 1. אם לא תלוי בערך הקודם - שולחים את הערך לסט
            // setSeconds(seconds + 1);

            // 2. תלוי בערך הקודם - נשלח פונקציה שתקבל ערך קודם ותחזיר את הסטייט המעודכן
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 5000);

        return () => {
            clearInterval(id);
        }
    }, [val]);

    return (
        <div>{seconds}</div>
    )
}

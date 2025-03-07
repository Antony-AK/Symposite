import { useState, useEffect } from "react";

const CountdownTimer = () => {
    const eventDate = new Date("2025-03-26T09:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState(eventDate - new Date().getTime());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(eventDate - new Date().getTime());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (ms) => {
        if (ms <= 0) return "🎉 Event Started! 🎉";

        let days = Math.floor(ms / (1000 * 60 * 60 * 24));
        let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((ms / (1000 * 60)) % 60);
        let seconds = Math.floor((ms / 1000) % 60);

        return { days, hours, minutes, seconds };
    };

    const time = formatTime(timeLeft);

    return (


        <div className="flex ms-4 md:ms-0 space-x-4 md:space-x-32 text-center mt-3">
            {Object.entries(time).map(([label, value]) => (
                <div key={label} className="flex flex-col">
                    <span className="text-3xl md:text-6xl font-extrabold text-blue-100
  [text-shadow:_0_0_10px_#7B68EE,0_0_20px_#9370DB,0_0_40px_#7B68EE] animate-[bounce_0.5s_infinite_alternate]">
                        {value}
                    </span>
                    <span className="text-sm md:text-lg mt-2 mb-2 text-white font-base font-semibold uppercase">{label}</span>
                </div>
            ))}
        </div>

    );
};

export default CountdownTimer;

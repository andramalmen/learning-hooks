import * as React from 'react';

const TimerContext = React.createContext();

const TimerProvider = props => {
    const [time, setTime] = React.useState(0);

    const value = { time, setTime };

    return <TimerContext.Provider {...props} value={value} />;
};

const useTimer = () => {
    const context = React.useContext(TimerContext);
    if (!context) {
        throw new Error(`useTimer must be used within TimerProvider`);
    }
    return context;
};

const TimerDisplay = () => {
    const { time } = useTimer();
    return <div>{`The current timer is ${time}`}</div>;
};

const Timer = ({ interval = 1000 }) => {
    const { setTime } = useTimer();
    React.useDebugValue(`Interval here: ${interval}`);

    React.useEffect(() => {
        const intervalId = window.setInterval(() => {
            setTime(currentTime => currentTime + 1);
        }, interval);

        return () => {
            window.clearInterval(intervalId);
        };
    }, [interval, setTime]);

    return <></>;
};

const ResetTimer = () => {
    const { setTime } = useTimer();

    const resetTime = e => {
        e.preventDefault();
        setTime(0);
    };

    return (
        <button
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 mt-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={resetTime}
        >
            Reset timer
        </button>
    );
};

const App = () => {
    return (
        <>
            <TimerProvider>
                <TimerDisplay />
                <Timer />
                <ResetTimer />
            </TimerProvider>
            <div className="mt-6">
                <a
                    className="text-pink-500"
                    href="https://codesandbox.io/s/use-context-timer-pbluv"
                    target="_blank"
                    rel="noreferrer"
                >
                    Check and change the code in CodeSandbox
                </a>
            </div>
        </>
    );
};

export default App;

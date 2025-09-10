
const PinkSpinner = () => (
    <div className="flex flex-col items-center justify-center py-12">
        <svg
            className="animate-spin h-12 w-12 text-pink-400"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                className="opacity-25"
                cx="25"
                cy="25"
                r="20"
                stroke="currentColor"
                strokeWidth="6"
            />
            <path
                className="opacity-75"
                fill="currentColor"
                d="M25 5a20 20 0 0 1 20 20h-6a14 14 0 0 0-14-14V5z"
            />
        </svg>
        <span className="mt-4 text-pink-500 font-semibold text-lg">
            Cargando productos...
        </span>
    </div>
);

export default PinkSpinner;
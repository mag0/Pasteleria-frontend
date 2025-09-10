interface CupcakeSpinnerProps {
    message: string;
}

const CupcakeSpinner = ({ message }: CupcakeSpinnerProps) => (
    <div className="flex flex-col items-center justify-center py-12">
        <svg
            className="h-20 w-20 animate-bounce"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Base del cupcake */}
            <path
                d="M16 28h32l-4 24H20l-4-24z"
                fill="#f9a8d4"  // rosa pastel
            />
            {/* Líneas del pirotín */}
            <path d="M22 28l2 24M28 28l2 24M34 28l2 24M40 28l2 24" stroke="#ec4899" strokeWidth="2" />

            {/* Frosting */}
            <path
                d="M32 10c-8 0-14 6-14 12 0 4 2 7 5 9h18c3-2 5-5 5-9 0-6-6-12-14-12z"
                fill="#f472b6"
            />
            <path
                d="M24 18c0-4 3-7 8-7s8 3 8 7c0 3-2 5-4 6H28c-2-1-4-3-4-6z"
                fill="#f9a8d4"
            />

            {/* Chispitas */}
            <circle cx="26" cy="18" r="1.5" fill="#fff" />
            <circle cx="34" cy="14" r="1.5" fill="#fff" />
            <circle cx="38" cy="20" r="1.5" fill="#fff" />
        </svg>

        <span className="mt-4 text-pink-500 font-semibold text-lg">
            {message}
        </span>
    </div>
);

export default CupcakeSpinner;

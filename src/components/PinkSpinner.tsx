interface CupcakeSpinnerProps {
    message: string;
}

const CupcakeSpinner = ({ message }: CupcakeSpinnerProps) => (
    <div className="flex flex-col items-center justify-center min-h-[300px] gap-6">

        {/* Cupcake */}
        <div className="relative">
            <svg
                className="h-20 w-20 animate-[spin_3s_linear_infinite]"
                viewBox="0 0 64 64"
            >
                {/* Base */}
                <path
                    d="M16 28h32l-4 24H20l-4-24z"
                    fill="#f9a8d4"
                />

                {/* Líneas */}
                <path
                    d="M22 28l2 24M28 28l2 24M34 28l2 24M40 28l2 24"
                    stroke="#ec4899"
                    strokeWidth="2"
                />

                {/* Frosting */}
                <path
                    d="M32 10c-8 0-14 6-14 12 0 4 2 7 5 9h18c3-2 5-5 5-9 0-6-6-12-14-12z"
                    fill="#f472b6"
                />
                <path
                    d="M24 18c0-4 3-7 8-7s8 3 8 7c0 3-2 5-4 6H28c-2-1-4-3-4-6z"
                    fill="#f9a8d4"
                />

                {/* Sprinkles */}
                <circle cx="26" cy="18" r="1.5" fill="#fff" />
                <circle cx="34" cy="14" r="1.5" fill="#fff" />
                <circle cx="38" cy="20" r="1.5" fill="#fff" />
            </svg>

            {/* glow */}
            <div className="absolute inset-0 rounded-full blur-xl bg-pink-300/40"></div>
        </div>

        {/* texto */}
        <p className="text-white font-serif text-lg tracking-wide animate-pulse">
            {message}
        </p>
    </div>
);

export default CupcakeSpinner;
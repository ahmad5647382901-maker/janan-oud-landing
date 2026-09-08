"use client";

type ErrorFallbackProps = {
  error?: Error;
  reset?: () => void;
};

export default function ErrorFallback({
  error,
  reset,
}: ErrorFallbackProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-6 text-center text-white">
      <div>
        <p className="mb-3 text-xs uppercase tracking-[0.4em] text-white/40">
          JANAN OUD
        </p>

        <h1 className="text-2xl font-light tracking-wider">
          Something went wrong
        </h1>

        {error?.message && (
          <p className="mx-auto mt-4 max-w-md text-sm text-white/50">
            {error.message}
          </p>
        )}

        {reset && (
          <button
            onClick={reset}
            className="mt-8 rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.2em] text-white/80 transition hover:border-white/50 hover:text-white"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
}

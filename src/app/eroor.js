"use client";

import Link from "next/link";
import { RefreshCcw, Home } from "lucide-react";

const GlobalError = ({ error, reset }) => {
    return (
        <section className="min-h-screen bg-[#1B1416] flex items-center justify-center px-6 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute w-[500px] h-[500px] bg-[#D95C78]/20 blur-3xl rounded-full" />
            <div className="absolute w-[350px] h-[350px] bg-[#F29BAE]/10 blur-3xl rounded-full right-20 top-20" />

            {/* Error Card */}
            <div className="relative z-10 max-w-2xl w-full">
                <div className="bg-[#2B1E22]/80 backdrop-blur-xl border border-white/10 rounded-[32px] p-10 shadow-2xl">

                    <div className="flex justify-center">
                        <div className="w-24 h-24 rounded-full bg-[#D95C78]/15 border border-[#D95C78]/30 flex items-center justify-center">
                            <span className="text-5xl">⚠️</span>
                        </div>
                    </div>

                    <h1 className="mt-8 text-center text-4xl font-bold text-[#FFF4F5]">
                        Something Went Wrong
                    </h1>

                    <p className="mt-4 text-center text-[#FFF4F5]/60 leading-relaxed">
                        We encountered an unexpected error while loading this page.
                    </p>

                    {error?.message && (
                        <div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/10 p-4">
                            <p className="text-sm text-red-300 break-all">
                                {error.message}
                            </p>
                        </div>
                    )}

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <button
                            onClick={() => reset()}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#D95C78] hover:bg-[#F29BAE] transition-all duration-300 text-white font-semibold"
                        >
                            <RefreshCcw size={18} />
                            Try Again
                        </button>

                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-white/10 bg-[#2B1E22] hover:border-[#D95C78]/40 transition-all duration-300 text-[#FFF4F5]"
                        >
                            <Home size={18} />
                            Go Home
                        </Link>
                    </div>

                    <div className="mt-10 border-t border-white/10 pt-6 text-center">
                        <p className="text-sm text-[#FFF4F5]/40">
                            DesignVault • Creative Design Community
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlobalError;
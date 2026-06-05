"use client";

import Link from "next/link";
import { RefreshCcw, Home } from "lucide-react";

const MainPageError = () => {
    return (
        <section className="min-h-[80vh] flex items-center justify-center px-6 py-20">
            <div className="max-w-2xl w-full">
                <div className="bg-[#2B1E22]/80 backdrop-blur-xl border border-white/10 rounded-[32px] p-10 shadow-2xl">

                    {/* Icon */}
                    <div className="flex justify-center">
                        <div className="w-24 h-24 rounded-full bg-[#D95C78]/15 border border-[#D95C78]/30 flex items-center justify-center">
                            <span className="text-5xl">💔</span>
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="mt-8 text-center text-4xl font-bold text-[#FFF4F5]">
                        Failed To Load Content
                    </h1>

                    <p className="mt-4 text-center text-[#FFF4F5]/60 leading-relaxed">
                        Something went wrong while loading this section.
                        Please refresh the page or return home.
                    </p>

                    {/* Actions */}
                    <div className="mt-8 flex flex-wrap justify-center gap-4">

                        <button
                            onClick={() => window.location.reload()}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#D95C78] hover:bg-[#F29BAE] transition-all duration-300 text-white font-semibold"
                        >
                            <RefreshCcw size={18} />
                            Reload
                        </button>

                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-white/10 bg-[#2B1E22] hover:border-[#D95C78]/40 transition-all duration-300 text-[#FFF4F5]"
                        >
                            <Home size={18} />
                            Go Home
                        </Link>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default MainPageError;
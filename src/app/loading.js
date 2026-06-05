const GlobalLoading = () => {
    return (
        <section className="min-h-screen bg-[#1B1416] flex items-center justify-center overflow-hidden">
            {/* Background Glow */}
            <div className="absolute w-96 h-96 bg-[#D95C78]/20 blur-3xl rounded-full" />
            <div className="absolute w-72 h-72 bg-[#F29BAE]/10 blur-3xl rounded-full right-20 top-20" />

            {/* Loader Card */}
            <div className="relative z-10">
                <div className="bg-[#2B1E22]/80 backdrop-blur-xl border border-white/10 rounded-[32px] px-16 py-12 flex flex-col items-center shadow-2xl">

                    {/* Spinner */}
                    <div className="relative w-20 h-20">
                        <div className="absolute inset-0 rounded-full border-4 border-[#D95C78]/20"></div>

                        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#D95C78] animate-spin"></div>

                        <div className="absolute inset-3 rounded-full border-4 border-transparent border-t-[#F29BAE] animate-spin [animation-duration:1.5s]"></div>
                    </div>

                    {/* Brand */}
                    <h1 className="mt-8 text-2xl font-bold text-[#FFF4F5]">
                        DesignVault
                    </h1>

                    <p className="mt-2 text-[#FFF4F5]/60 text-sm">
                        Loading your creative experience...
                    </p>

                    {/* Loading dots */}
                    <div className="flex gap-2 mt-6">
                        <span className="w-2 h-2 rounded-full bg-[#D95C78] animate-bounce"></span>
                        <span className="w-2 h-2 rounded-full bg-[#F29BAE] animate-bounce [animation-delay:0.2s]"></span>
                        <span className="w-2 h-2 rounded-full bg-[#D95C78] animate-bounce [animation-delay:0.4s]"></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlobalLoading;
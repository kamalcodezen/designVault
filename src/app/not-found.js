import Link from "next/link";
import { Home, Search } from "lucide-react";

const GlobalNotFound = () => {
    return (
        <section className="min-h-screen bg-[#1B1416] text-[#FFF4F5] flex items-center justify-center px-6">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D95C78]/30 bg-[#D95C78]/10 text-[#F29BAE] text-sm">
                        Lost in DesignVault
                    </span>

                    <h1 className="mt-6 text-7xl md:text-8xl font-black tracking-tight">
                        404
                    </h1>

                    <h2 className="mt-4 text-3xl md:text-4xl font-bold">
                        Oops! Page not found
                    </h2>

                    <p className="mt-5 text-[#FFF4F5]/60 max-w-lg leading-relaxed">
                        The page you're looking for seems to have drifted away into the
                        dreamy world of creativity. Let's get you back to exploring amazing
                        designs.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#D95C78] hover:bg-[#F29BAE] transition-all duration-300 font-semibold text-white shadow-lg shadow-[#D95C78]/20"
                        >
                            <Home size={18} />
                            Go Home
                        </Link>

                        <Link
                            href="/designs"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-white/10 bg-[#2B1E22] hover:border-[#D95C78]/40 transition-all duration-300"
                        >
                            <Search size={18} />
                            Explore Designs
                        </Link>
                    </div>
                </div>

                {/* Right Illustration */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#D95C78]/20 to-[#F29BAE]/10 blur-3xl rounded-full" />

                    <div className="relative bg-[#2B1E22]/80 backdrop-blur-xl border border-white/10 rounded-[32px] p-10 overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#D95C78]/10 via-transparent to-[#F29BAE]/10" />

                        <div className="relative flex flex-col items-center justify-center">
                            <div className="text-[140px] md:text-[180px] font-black leading-none bg-gradient-to-b from-[#F29BAE] to-[#D95C78] bg-clip-text text-transparent">
                                404
                            </div>

                            <div className="w-24 h-24 rounded-full bg-[#D95C78]/20 flex items-center justify-center border border-[#D95C78]/30">
                                <span className="text-4xl">🌙</span>
                            </div>

                            <p className="mt-6 text-center text-[#FFF4F5]/60">
                                This design page doesn't exist or has been moved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlobalNotFound;
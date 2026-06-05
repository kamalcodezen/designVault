import Link from "next/link";
import { Home, Search } from "lucide-react";

const MainLayoutNotFound = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 py-20">

            {/* Container */}
            <div className="max-w-4xl w-full">

                <div className="bg-[#2B1E22]/80 backdrop-blur-xl border border-white/10 rounded-[32px] p-10 md:p-16 shadow-2xl">

                    {/* 404 */}
                    <div className="text-center">

                        <h1 className="text-8xl md:text-9xl font-black bg-gradient-to-b from-[#F29BAE] to-[#D95C78] bg-clip-text text-transparent">
                            404
                        </h1>

                        <div className="flex justify-center mt-4">
                            <div className="w-24 h-24 rounded-full bg-[#D95C78]/15 border border-[#D95C78]/30 flex items-center justify-center">
                                <span className="text-5xl">🌙</span>
                            </div>
                        </div>

                        <h2 className="mt-8 text-3xl md:text-4xl font-bold text-[#FFF4F5]">
                            Page Not Found
                        </h2>

                        <p className="mt-4 max-w-xl mx-auto text-[#FFF4F5]/60 leading-relaxed">
                            The page you're looking for doesn't exist,
                            has been removed, or the URL may be incorrect.
                        </p>

                    </div>

                    {/* Actions */}
                    <div className="mt-10 flex flex-wrap justify-center gap-4">

                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#D95C78] hover:bg-[#F29BAE] transition-all duration-300 text-white font-semibold"
                        >
                            <Home size={18} />
                            Back Home
                        </Link>

                        <Link
                            href="/designs"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-white/10 bg-[#2B1E22] hover:border-[#D95C78]/40 transition-all duration-300 text-[#FFF4F5]"
                        >
                            <Search size={18} />
                            Explore Designs
                        </Link>

                    </div>

                    {/* Footer Text */}
                    <div className="mt-12 pt-6 border-t border-white/10 text-center">

                        <p className="text-sm text-[#FFF4F5]/40">
                            DesignVault • Showcase • Inspire • Create
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default MainLayoutNotFound;
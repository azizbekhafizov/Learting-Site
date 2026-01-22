import { Play } from "lucide-react";

export default function Landing() {
  return (
    <section className="relative bg-[#00CBB8] overflow-hidden min-h-[90vh]">
      <div className="max-w-7xl mx-auto px-6 pt-28 grid md:grid-cols-2 items-center">

        {/* LEFT CONTENT */}
        <div className="text-white space-y-6 z-10">
          <h1 className="text-4xl leading-tight font-bold">
            <span className="text-orange-400">Studying</span> Online is now <br />
            much easier
          </h1>

          <p className="text-white/80 max-w-md">
            TOTC is an interesting platform that will teach you in a more
            interactive way
          </p>

          <div className="flex gap-6 items-center">
            <button className="px-6 py-3 bg-white text-teal-500 rounded-full">
              Join for free
            </button>

            <button className="flex items-center gap-2 text-white">
              <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Play size={18} />
              </span>
              Watch how it works
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE PLACEHOLDER */}
        <div className="relative w-full h-[520px] flex justify-center">
          {/* MAIN IMAGE */}
          <div className="w-[360px] h-full bg-white/30 rounded-2xl z-10" />

          {/* FLOATING CARD 1 */}
          <div className="absolute top-12 left-0 bg-white text-gray-700 rounded-xl px-4 py-3 shadow-md">
            <p className="text-sm font-medium">250k</p>
            <p className="text-xs text-gray-500">Assisted Student</p>
          </div>

          {/* FLOATING CARD 2 */}
          <div className="absolute bottom-20 right-0 bg-white rounded-xl px-4 py-3 shadow-md">
            <p className="text-xs text-gray-500">User Experience Class</p>
            <button className="mt-2 px-3 py-1 bg-pink-500 text-white rounded-full text-xs">
              Join Now
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM WAVE */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-white rounded-t-[100%]" />
    </section>
  );
}

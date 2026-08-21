import { useState } from "react";

const InteractiveShowcase = () => {
  const [tickets, setTickets] = useState(1);
  const [isBooked, setIsBooked] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  // NAYA STATE: Transaction ID ke liye
  const [transactionId, setTransactionId] = useState("");

  const handleBook = () => {
    setIsProcessing(true);
    setTimeout(() => {
      // Button click hone par ek hi baar random ID generate hogi
      setTransactionId(Math.floor(Math.random() * 90000) + 10000);
      setIsProcessing(false);
      setIsBooked(true);
    }, 1500);
  };

  return (
    <section className="relative bg-[#030303] py-24 md:py-32 px-6 md:px-16 lg:px-24 border-t border-white/5 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div
          data-aos="fade-down"
          className="mb-16 md:mb-24 text-center flex flex-col items-center"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#e3563b]"></div>
            <p className="text-[#e3563b] text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
              Live Modules
            </p>
            <div className="w-8 h-[1px] bg-[#e3563b]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight">
            Interactive <span className="font-extrabold">Showcase.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Module 1: Live GitHub Grid */}
          <div
            data-aos="fade-right"
            className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-colors shadow-2xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#e3563b]"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                Live Contributions
              </h3>
              <p className="text-sm text-gray-400 mb-8">
                Real-time sync with my GitHub repository activity.
              </p>
            </div>
            <div className="w-full overflow-hidden rounded-xl bg-black/50 p-4 border border-white/5">
              <img
                src="https://ghchart.rshah.org/e3563b/SahilMirza1779"
                alt="Sahil's GitHub Graph"
                className="w-full object-contain filter hue-rotate-0 brightness-110"
              />
            </div>
          </div>

          {/* Module 2: Mini Event Booking UI */}
          <div
            data-aos="fade-left"
            className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-colors shadow-2xl"
          >
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#e3563b] animate-pulse"></span>
              Live Widget UI
            </h3>
            <p className="text-sm text-gray-400 mb-8">
              Test a mini event-booking logic flow I designed.
            </p>

            <div className="bg-[#111] border border-white/10 rounded-2xl p-6 relative overflow-hidden">
              {isBooked ? (
                <div className="flex flex-col items-center text-center animate-fade-in py-4">
                  <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h4 className="text-white font-bold text-lg">
                    Tickets Confirmed!
                  </h4>
                  {/* YAHAN PAR AB STATE USE HOGA */}
                  <p className="text-gray-400 text-xs mt-1">
                    Transaction ID: #{transactionId}
                  </p>
                  <button
                    onClick={() => setIsBooked(false)}
                    className="mt-6 text-[10px] uppercase tracking-widest text-[#e3563b] hover:text-white transition-colors"
                  >
                    Book Another
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-white/5 pb-4">
                    <div>
                      <h4 className="text-white font-medium">
                        Tech Meetup 2026
                      </h4>
                      <p className="text-gray-500 text-xs mt-1">
                        Surat, Gujarat
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[#e3563b] font-bold">₹499</p>
                      <p className="text-gray-500 text-xs mt-1">per ticket</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="text-white/70 text-sm">Select Tickets</p>
                    <div className="flex items-center gap-4 bg-black rounded-full border border-white/10 p-1">
                      <button
                        onClick={() => setTickets((t) => Math.max(1, t - 1))}
                        className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#e3563b] text-white flex items-center justify-center transition-colors"
                      >
                        -
                      </button>
                      <span className="text-white font-bold w-4 text-center">
                        {tickets}
                      </span>
                      <button
                        onClick={() => setTickets((t) => Math.min(5, t + 1))}
                        className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#e3563b] text-white flex items-center justify-center transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={handleBook}
                    disabled={isProcessing}
                    className="w-full py-4 bg-[#e3563b] hover:bg-[#c94930] text-white text-xs font-bold uppercase tracking-[0.2em] rounded-xl transition-all shadow-[0_0_15px_rgba(227,86,59,0.3)] flex justify-center items-center"
                  >
                    {isProcessing
                      ? "Processing..."
                      : `Checkout (₹${tickets * 499})`}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveShowcase;

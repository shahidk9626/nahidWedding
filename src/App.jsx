import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Dynamic script loading of the original unmodified script.js
    const script = document.createElement('script');
    script.src = '/script.js';
    script.async = true;
    script.onload = () => {
      // Dispatches DOMContentLoaded event so the event listeners in script.js initialize
      document.dispatchEvent(new Event('DOMContentLoaded'));
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* Golden Particles */}
      <div id="particles"></div>

      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="gold-glow glow-1"></div>
        <div className="gold-glow glow-2"></div>
      </div>

      {/* MUSIC */}
      <audio id="bgMusic" loop>
        <source src="music.mp3" type="audio/mp3" />
      </audio>

      {/* MUSIC BUTTON */}
      <button id="musicBtn" className="fixed z-50 right-5 bottom-5 w-14 h-14 rounded-full bg-yellow-500 text-black shadow-xl">
        🎵
      </button>

      {/* ================================================= */}
      {/* ENVELOPE SECTION */}
      {/* ================================================= */}

      <section id="envelopeSection" className="min-h-screen flex flex-col items-center justify-center relative">

        <div className="text-center mb-10">
          <h3 className="tracking-[8px] text-yellow-500 uppercase text-sm">
            Wedding Invitation
          </h3>

          <h1 className="font-[Cinzel] text-4xl md:text-6xl font-bold mt-5 gold-text">
            Nahid & Muskan
          </h1>

          <p className="mt-4 text-gray-400">
            Tap The Royal Envelope
          </p>
        </div>

        {/* Envelope */}

        <div id="envelopeWrapper">

          <div id="envelope">

            <div className="envelope-back"></div>

            <div className="envelope-letter">

              <div className="text-center pt-16 px-8">

                <h2 className="font-[Great_Vibes] text-5xl text-yellow-300">
                  Nahid ❤️ Muskan
                </h2>

                <p className="mt-6 text-gray-200">
                  Request the honour of your presence
                  at their wedding celebration.
                </p>

              </div>

            </div>

            <div className="envelope-flap"></div>

          </div>

        </div>

        <button id="openInvitation"
          className="mt-12 px-8 py-4 rounded-full border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black transition-all duration-500">
          Open Invitation
        </button>

      </section>

      {/* ================================================= */}
      {/* INVITATION CONTENT */}
      {/* ================================================= */}

      <main id="mainContent" className="hidden">

        {/* HERO */}
        <section className="relative min-h-screen flex items-center justify-center py-20">

          <div className="container mx-auto px-6">

            <div className="text-center">

              {/* Special Quote & Family Blessing */}
              <div className="max-w-3xl mx-auto mb-12 px-6 py-8 border border-yellow-500/10 rounded-3xl bg-white/[0.02] backdrop-blur-md shadow-2xl relative overflow-hidden" data-aos="fade-down">
                <p className="font-[Cinzel] text-yellow-500/80 text-sm md:text-base tracking-[4px] uppercase mb-4">
                  بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
                </p>
                <p className="font-[Great_Vibes] text-3xl md:text-4xl text-yellow-200 mb-4">
                  With the blessings of Allah & the Sunnah of Prophet Mohammed
                </p>
                <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto my-4"></div>
                <p className="font-[Cinzel] text-gray-300 uppercase tracking-[2px] text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
                  Grandson of <span className="text-yellow-400 font-semibold">Marhuma Hakiman Banu</span> & <span className="text-yellow-400 font-semibold">Mr. Latif Mohammed Pathan</span>
                </p>
              </div>

              <div className="mb-8">
                <span className="gold-divider"></span>
              </div>

              <h2 className="font-[Great_Vibes] text-6xl md:text-8xl text-yellow-300" data-aos="zoom-in">
                Nahid
              </h2>

              <div className="heart-container my-8">
                <span className="heartbeat text-6xl">
                  ❤️
                </span>
              </div>

              <h2 className="font-[Great_Vibes] text-6xl md:text-8xl text-yellow-300" data-aos="zoom-in">
                Muskan
              </h2>

              <p className="mt-10 uppercase tracking-[6px] text-yellow-500">
                Are Getting Married
              </p>

              <div className="mt-10">
                <h3 className="font-[Cinzel] text-3xl md:text-5xl">
                  1 - 3 October
                </h3>

                <p className="mt-4 text-gray-300">
                  Join us for three unforgettable days
                  of love, laughter and celebration.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* COUNTDOWN */}

        <section className="py-24">

          <div className="container mx-auto px-6">

            <div className="text-center">

              <h2 className="font-[Cinzel] text-4xl text-yellow-400 mb-14">
                Countdown To Wedding
              </h2>

              <div id="countdown" className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">

                <div className="count-box">
                  <span id="days">00</span>
                  <small>Days</small>
                </div>

                <div className="count-box">
                  <span id="hours">00</span>
                  <small>Hours</small>
                </div>

                <div className="count-box">
                  <span id="minutes">00</span>
                  <small>Minutes</small>
                </div>

                <div className="count-box">
                  <span id="seconds">00</span>
                  <small>Seconds</small>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* EVENTS */}

        <section className="py-24">

          <div className="container mx-auto px-6">

            <div className="text-center mb-20">

              <h2 className="font-[Cinzel] text-5xl text-yellow-400">
                Wedding Events
              </h2>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

              {/* Haldi Ceremony */}
              <div className="event-card">
                <div className="event-icon">🌼</div>
                <h3>Haldi Ceremony</h3>
                <p>1 October</p>
                <p className="text-yellow-400/90 text-sm mt-1">Time: 3:00 PM - 5:00 PM</p>
                <p className="mt-2 text-yellow-500 font-bold text-sm tracking-wide">
                  Venue: ROYAL FARM HOUSE ASIND
                </p>
              </div>

              {/* Mahila Sangeet */}
              <div className="event-card">
                <div className="event-icon">🎵</div>
                <h3>Mahila Sangeet</h3>
                <p>1 October</p>
                <p className="text-yellow-400/90 text-sm mt-1">Time: 9:00 PM - 12:00 AM</p>
                <p className="mt-2 text-yellow-500 font-bold text-sm tracking-wide">
                  Venue: ROYAL FARM HOUSE ASIND
                </p>
              </div>

              {/* Mayra Khana */}
              <div className="event-card">
                <div className="event-icon">🥘</div>
                <h3>Mayra Khana</h3>
                <p>2 October</p>
                <p className="text-yellow-400/90 text-sm mt-1">Time: 11:00 AM Onwards (Subh 11 Se)</p>
                <p className="mt-2 text-yellow-500 font-bold text-sm tracking-wide">
                  Venue: ROYAL FARM HOUSE ASIND
                </p>
              </div>

              {/* Barat Rawangi */}
              <div className="event-card">
                <div className="event-icon">🥁</div>
                <h3>Barat Rawangi</h3>
                <p>2 October</p>
                <p className="text-yellow-400/90 text-sm mt-1">Time: 3:00 PM</p>
                <p className="mt-2 text-yellow-500 font-bold text-sm tracking-wide">
                  Venue: ROYAL FARM HOUSE ASIND
                </p>
              </div>

              {/* Nikah */}
              <div className="event-card">
                <div className="event-icon">👑</div>
                <h3>Nikah</h3>
                <p>2 October</p>
                <p className="text-yellow-400/90 text-sm mt-1">Time: Between Asar & Maghrib (Asar Maghrib Ke Bich)</p>
                <p className="mt-2 text-yellow-500 font-bold text-sm tracking-wide">
                  Venue: MILAN VATIKA ASIND
                </p>
              </div>

              {/* Walima Khana */}
              <div className="event-card">
                <div className="event-icon">✨</div>
                <h3>Walima Khana</h3>
                <p>3 October</p>
                <p className="text-yellow-400/90 text-sm mt-1">Time: 5:30 PM Till Your Arrival (5:30 Se Apke Aane Tak)</p>
                <p className="mt-2 text-yellow-500 font-bold text-sm tracking-wide">
                  Venue: ROYAL FARM HOUSE ASIND
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* INVITATION MESSAGE */}

        <section className="py-28">

          <div className="container mx-auto px-6">

            <div className="royal-card text-center">

              <h2 className="font-[Great_Vibes] text-6xl text-yellow-300 mb-8">
                We Await Your Presence
              </h2>

              <p className="max-w-3xl mx-auto text-lg leading-9 text-gray-300">

                Together with our families,
                we warmly invite you to celebrate
                the beginning of our beautiful journey.

                Your blessings, prayers and presence
                will make our day even more special.

              </p>

            </div>

          </div>

        </section>

        {/* APKI AAMAD KE MUNTAZIR */}

        <section className="py-24 border-t border-yellow-500/10">

          <div className="container mx-auto px-6">

            <div className="text-center mb-16">

              <h2 className="font-[Cinzel] text-4xl md:text-5xl text-yellow-400">
                Apki Aamad Ke Muntazir
              </h2>

            </div>

            <div className="royal-card text-center max-w-4xl mx-auto">

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-lg font-medium text-gray-200">

                <div className="p-4 border border-yellow-500/10 rounded-xl bg-white/5 hover:border-yellow-500/30 transition-all duration-300">
                  Latif Mohammed Pathan
                </div>

                <div className="p-4 border border-yellow-500/10 rounded-xl bg-white/5 hover:border-yellow-500/30 transition-all duration-300">
                  Shabbir Mohammed Pathan
                </div>

                <div className="p-4 border border-yellow-500/10 rounded-xl bg-white/5 hover:border-yellow-500/30 transition-all duration-300">
                  Sagir Mohammed Pathan
                </div>

                <div className="p-4 border border-yellow-500/10 rounded-xl bg-white/5 hover:border-yellow-500/30 transition-all duration-300">
                  Yunus Mohammed Sheikh
                </div>

                <div className="p-4 border border-yellow-500/10 rounded-xl bg-white/5 hover:border-yellow-500/30 transition-all duration-300">
                  Latif Mohammed Sheikh
                </div>

                <div className="p-4 border border-yellow-500/10 rounded-xl bg-white/5 hover:border-yellow-500/30 transition-all duration-300">
                  Shahid Khan Pathan
                </div>

                <div className="p-4 border border-yellow-500/10 rounded-xl bg-white/5 hover:border-yellow-500/30 transition-all duration-300">
                  Amaan Sheikh
                </div>

                <div className="p-4 border border-yellow-500/10 rounded-xl bg-white/5 hover:border-yellow-500/30 transition-all duration-300">
                  Rehan Sheikh
                </div>

                <div className="p-4 border border-yellow-500/10 rounded-xl bg-white/5 hover:border-yellow-500/30 transition-all duration-300">
                  Mohammed Saif
                </div>

                <div className="p-4 border border-yellow-500/10 rounded-xl bg-white/5 hover:border-yellow-500/30 transition-all duration-300">
                  Ibrahim Pathan
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* FOOTER */}

        <footer className="py-12 border-t border-yellow-500/20">

          <div className="text-center">

            <h3 className="font-[Great_Vibes] text-5xl text-yellow-300">
              Nahid ❤️ Muskan
            </h3>

            <p className="mt-4 text-gray-400">
              1 - 3 October
            </p>

          </div>

        </footer>

      </main>
    </>
  );
}

export default App;

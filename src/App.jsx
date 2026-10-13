import Footer from "./components/Footer";

function App() {
  return (
    <div id="top" className="min-h-screen bg-[#E5EAF0] text-slate-700">
      {/* MAIN PAGE CONTENT */}

      <main className="flex min-h-[65vh] items-center justify-center bg-[#E5EAF0] px-6">
        <div className="max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            React + Tailwind CSS
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Animated Footer Template
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            A modern, responsive footer with smooth animations, social links and
            a global presence section.
          </p>

          <a
            href="#footer"
            className="mt-8 inline-flex rounded-full border border-blue-300 bg-white/60 px-6 py-3 text-sm font-semibold text-blue-700 transition duration-300 hover:border-blue-400 hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Explore Footer
          </a>
        </div>
      </main>

      {/* FOOTER */}

      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;

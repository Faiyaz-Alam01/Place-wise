const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Place<span className="text-blue-500">Wise</span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              Your smart companion for placement preparation.
              Prepare, discover opportunities and track your journey.
            </p>
          </div>


          {/* Platform */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Platform
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="/features" className="hover:text-blue-400">
                  Features
                </a>
              </li>

              <li>
                <a href="/opportunities" className="hover:text-blue-400">
                  Opportunities
                </a>
              </li>

              <li>
                <a href="/preparation" className="hover:text-blue-400">
                  Preparation
                </a>
              </li>

              <li>
                <a href="/roadmap" className="hover:text-blue-400">
                  Career Roadmap
                </a>
              </li>
            </ul>
          </div>


          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Company
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="/about" className="hover:text-blue-400">
                  About Us
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-blue-400">
                  Contact
                </a>
              </li>

              <li>
                <a href="/privacy" className="hover:text-blue-400">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="/terms" className="hover:text-blue-400">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>


          {/* Get Started */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Get Started
            </h3>

            <p className="text-sm text-slate-400 mb-4">
              Start your placement journey with PlaceWise.
            </p>

            <a
              href="/signup"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition"
            >
              Get Started
            </a>
          </div>

        </div>


        {/* Bottom */}
        <div className="border-t border-slate-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-slate-400">
            © 2026 PlaceWise. All rights reserved.
          </p>

          <div className="flex gap-5 text-sm">
            <a href="#" className="hover:text-blue-400">
              GitHub
            </a>

            <a href="#" className="hover:text-blue-400">
              LinkedIn
            </a>

            <a href="#" className="hover:text-blue-400">
              Instagram
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
import { motion, useReducedMotion } from "framer-motion";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaMedium,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiUpwork } from "react-icons/si";

/* ================= CONFIG ================= */

const BRAND_NAME = "NexaFlow";
const LOGO_URL = "/logo.png";

const SOCIAL_LINKS = [
  { name: "Facebook", href: "#", Icon: FaFacebookF },
  { name: "Instagram", href: "#", Icon: FaInstagram },
  { name: "LinkedIn", href: "#", Icon: FaLinkedinIn },
  { name: "X (Twitter)", href: "#", Icon: FaXTwitter },
  { name: "YouTube", href: "#", Icon: FaYoutube },
  { name: "GitHub", href: "#", Icon: FaGithub },
  { name: "Medium", href: "#", Icon: FaMedium },
  { name: "Upwork", href: "#", Icon: SiUpwork },
  { name: "TikTok", href: "#", Icon: FaTiktok },
  { name: "WhatsApp", href: "#", Icon: FaWhatsapp },
];

const COUNTRIES = [
  { code: "pk", name: "Pakistan", address: "" },
  { code: "us", name: "USA", address: "" },
  { code: "gb", name: "UK", address: "" },
  { code: "ae", name: "UAE", address: "" },
  { code: "om", name: "Oman", address: "" },
  { code: "sa", name: "KSA", address: "" },
  { code: "co", name: "Colombia", address: "" },
];

const FOOTER_COLUMNS = [
  {
    title: "Company",
    links: ["About", "Customers", "Enterprise", "Partners", "Jobs"],
  },
  {
    title: "Products",
    links: ["About", "Customers", "Enterprise", "Partners", "Jobs"],
  },
  {
    title: "Resources",
    links: ["About", "Customers", "Enterprise", "Partners", "Jobs"],
  },
];

/* ================= SOCIAL LINKS ================= */

function SocialLinks({ className = "" }) {
  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
      {SOCIAL_LINKS.map(({ name, href, Icon }) => (
        <li key={name}>
          <a
            href={href}
            aria-label={name}
            title={name}
            target={href !== "#" ? "_blank" : undefined}
            rel={href !== "#" ? "noopener noreferrer" : undefined}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white/70 text-slate-600 transition duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}

/* ================= GLOBAL PRESENCE ================= */

function GlobalPresence({ className = "" }) {
  return (
    <section aria-labelledby="global-presence-title" className={className}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
        Global presence
      </p>

      <h2
        id="global-presence-title"
        className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl"
      >
        A remote-first team, working worldwide.
      </h2>

      <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
        We collaborate across {COUNTRIES.length} countries and time zones, so
        you can find us wherever you are.
      </p>

      <ul className="mt-8 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {COUNTRIES.map(({ code, name, address }) => (
          <li
            key={code}
            className="flex items-center gap-3 rounded-xl border border-white/80 bg-white/60 px-4 py-3 transition duration-300 hover:border-blue-200 hover:bg-white"
          >
            <img
              src={`https://flagcdn.com/w40/${code}.png`}
              srcSet={`https://flagcdn.com/w80/${code}.png 2x`}
              width="24"
              height="18"
              alt={`${name} flag`}
              loading="lazy"
              className="h-[18px] w-6 shrink-0 rounded-[2px] object-cover"
            />

            <div className="min-w-0">
              <p className="font-semibold text-slate-800">{name}</p>

              {address && (
                <p className="mt-0.5 text-xs text-slate-500">{address}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ================= FOOTER ================= */

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="overflow-hidden border-t border-slate-200/80 bg-[#E5EAF0] pb-8 pt-20 text-slate-600 sm:pt-28">
      <div className="mx-auto space-y-8 px-4 sm:px-8 xl:max-w-6xl xl:px-0">
        <GlobalPresence className="border-b border-slate-300/70 pb-12" />

        <div className="grid grid-cols-8 gap-6 md:gap-0">
          {/* BRAND AND SOCIAL LINKS */}

          <div className="col-span-8 md:col-span-2 lg:col-span-3">
            <div className="flex h-full flex-col items-start justify-between gap-5 border-b border-slate-300/70 py-6 md:gap-6 md:border-none md:py-0">
              <div>
                <a
                  href="#top"
                  aria-label={`${BRAND_NAME} home`}
                  className="flex items-center"
                >
                  <img
                    src={LOGO_URL}
                    alt={`${BRAND_NAME} logo`}
                    className="h-10 w-10 shrink-0 object-contain sm:h-16 sm:w-16"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  <span className="ml-2 text-lg font-bold text-slate-900">
                    {BRAND_NAME}
                  </span>
                </a>

                <p className="mt-2 max-w-[240px] text-sm leading-5 text-slate-600">
                  Crafted for the web. Building digital experiences that connect
                  people and ideas.
                </p>
              </div>

              <SocialLinks className="max-w-full justify-start md:max-w-[16rem] md:justify-start" />
            </div>
          </div>

          {/* NAVIGATION COLUMNS */}

          <div className="col-span-8 md:col-span-6 lg:col-span-5">
            <div className="grid grid-cols-2 gap-6 pb-12 sm:grid-cols-3 md:pl-16 md:pb-16">
              {FOOTER_COLUMNS.map((column) => (
                <div key={column.title}>
                  <h3 className="text-base font-medium text-slate-900">
                    {column.title}
                  </h3>

                  <ul className="mt-4 space-y-4">
                    {column.links.map((label) => (
                      <li key={`${column.title}-${label}`}>
                        <a
                          href="#"
                          className="text-sm text-slate-600 transition-colors duration-200 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* COPYRIGHT */}

            <div className="flex flex-wrap justify-between gap-3 text-sm text-slate-500 md:pl-16">
              <span>
                &copy; {BRAND_NAME} {new Date().getFullYear()}
              </span>

              <span>All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>

      {/* ANIMATED BRAND WATERMARK */}

      <motion.div
        aria-hidden="true"
        className="relative mt-8 flex h-[110px] w-full select-none items-center justify-center overflow-hidden sm:h-[160px] md:h-[240px] lg:h-[300px]"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.8,
          ease: "easeOut",
        }}
      >
        <motion.div
          className="whitespace-nowrap bg-gradient-to-b from-slate-500/50 to-slate-500/10 bg-clip-text text-[15vw] font-bold leading-none tracking-tighter text-transparent md:text-[150px] lg:text-[200px] xl:text-[250px]"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1,
            ease: "easeOut",
            delay: shouldReduceMotion ? 0 : 0.2,
          }}
        >
          {BRAND_NAME}
        </motion.div>
      </motion.div>
    </footer>
  );
}

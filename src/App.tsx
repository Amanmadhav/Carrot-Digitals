import { useState, useEffect } from "react";

const PHONE_DISPLAY = "95676 48193";
const PHONE_TEL = "+919567648193";
const WHATSAPP = "919567648193";
const ADDRESS =
  "Opposite Sree Dharma Sastha Temple & Govt. New LPS, Koottikkada, Mayyanad, Kollam, Kerala 691020";
const MAP_EMBED =
  "https://www.google.com/maps?q=Carrot+Digitals+Koottikada+Mayyanad+Kollam&output=embed";

/* ----------------------------- NAV ----------------------------- */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#reviews", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <Logo />
          <div className="leading-tight">
            <div className="font-extrabold text-lg md:text-xl text-slate-900 tracking-tight">
              Carrot <span className="text-orange-500">Digitals</span>
            </div>
            <div className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-slate-500 font-semibold">
              Digital Print House
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-700 hover:text-orange-600 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2.5 text-sm font-semibold shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all"
          >
            <PhoneIcon className="w-4 h-4" />
            Call Now
          </a>
        </nav>

        <button
          className="lg:hidden p-2 rounded-md text-slate-800"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg text-slate-700 font-medium hover:bg-orange-50 hover:text-orange-600"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-2 text-center rounded-full bg-orange-500 text-white px-5 py-3 font-semibold"
            >
              📞 Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ----------------------------- HERO ----------------------------- */
function Hero() {
  return (
    <section id="home" className="relative gradient-hero pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />

      {/* floating decor */}
      <div className="absolute top-24 right-8 md:right-16 floating hidden md:block">
        <div className="text-7xl">🥕</div>
      </div>
      <div className="absolute bottom-10 left-6 md:left-20 floating hidden md:block" style={{ animationDelay: "1.2s" }}>
        <div className="text-5xl">🖨️</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur border border-orange-200 px-4 py-1.5 text-xs font-semibold text-orange-700 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Open now · Closes 9:00 PM
          </div>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 tracking-tight leading-[1.05]">
            Printing that <br />
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-orange-500 via-orange-600 to-rose-500 bg-clip-text text-transparent">
                pops.
              </span>
              <svg
                viewBox="0 0 300 20"
                className="absolute -bottom-2 left-0 w-full h-4 text-orange-300/70"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 14 Q 75 2, 150 10 T 298 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            Service that <br />
            <span className="text-slate-700">smiles.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
            Your trusted neighbourhood <strong>Digital Print House & Online Service Centre</strong>{" "}
            in Koottikada, Mayyanad. From visiting cards to flex banners — best quality, fastest
            turnaround, fairest prices.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-7 py-4 font-semibold shadow-xl shadow-orange-500/30 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-orange-500/40 transition-all"
            >
              <PhoneIcon className="w-5 h-5" />
              Call {PHONE_DISPLAY}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                "Hi Carrot Digitals, I'd like to know more about your printing services."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-500 text-white px-7 py-4 font-semibold shadow-xl shadow-green-500/30 hover:-translate-y-0.5 transition-all"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-white text-slate-800 border border-slate-200 px-7 py-4 font-semibold hover:border-orange-300 hover:text-orange-600 transition-all"
            >
              View Services →
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-slate-900">5.0</span>
              <span>on Google (4 reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-5 h-5 text-orange-500" />
              <span>Same-day delivery available</span>
            </div>
          </div>
        </div>

        {/* Right visual card stack */}
        <div className="lg:col-span-5 relative">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative h-[420px] md:h-[500px] w-full">
      {/* Main card */}
      <div className="absolute top-6 right-0 md:right-4 w-[86%] h-[340px] md:h-[400px] rounded-3xl gradient-carrot shadow-2xl shadow-orange-500/30 p-8 flex flex-col justify-between text-white overflow-hidden">
        <div className="absolute -top-16 -right-16 w-60 h-60 rounded-full bg-white/15" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/10" />
        <div className="relative">
          <div className="text-[11px] uppercase tracking-[0.3em] font-bold opacity-90">
            Today's best offer
          </div>
          <div className="mt-2 text-4xl md:text-5xl font-black leading-none">
            Visiting Cards
          </div>
          <div className="mt-3 text-lg opacity-95">
            Matte / Glossy finish — delivered same day.
          </div>
        </div>
        <div className="relative flex items-end justify-between">
          <div>
            <div className="text-xs opacity-80">Starting from</div>
            <div className="text-3xl font-black">₹299</div>
          </div>
          <div className="text-7xl">🎨</div>
        </div>
      </div>

      {/* Small floating card 1 */}
      <div className="absolute top-0 left-0 bg-white rounded-2xl shadow-xl p-4 w-52 floating">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-orange-100 text-2xl flex items-center justify-center">
            📇
          </div>
          <div>
            <div className="text-[11px] text-slate-500 font-medium">Fast print</div>
            <div className="text-sm font-bold text-slate-900">Flex Banners</div>
          </div>
        </div>
      </div>

      {/* Small floating card 2 */}
      <div className="absolute bottom-0 left-2 bg-white rounded-2xl shadow-xl p-4 w-60 floating" style={{ animationDelay: "0.8s" }}>
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-green-100 text-2xl flex items-center justify-center">
            ⭐
          </div>
          <div className="flex-1">
            <div className="text-[11px] text-slate-500 font-medium">Google Rating</div>
            <div className="flex items-center gap-1">
              <span className="text-base font-extrabold text-slate-900">5.0</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- TRUST MARQUEE ----------------------------- */
function TrustStrip() {
  const items = [
    "✦ Digital Printing",
    "✦ Flex Banners",
    "✦ Visiting Cards",
    "✦ Wedding Invitations",
    "✦ Brochures & Flyers",
    "✦ ID Cards",
    "✦ Lamination",
    "✦ Scanning & Photocopy",
    "✦ Online Services",
    "✦ Stickers & Labels",
  ];
  const row = [...items, ...items];
  return (
    <div className="bg-slate-900 text-white py-4 overflow-hidden border-y border-slate-800">
      <div className="marquee flex gap-10 whitespace-nowrap w-max">
        {row.map((t, i) => (
          <span key={i} className="text-sm md:text-base font-semibold tracking-wide opacity-90">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------- SERVICES ----------------------------- */
function Services() {
  const services = [
    { icon: "🖨️", title: "Digital Printing", desc: "Crisp, vibrant colour prints — documents, photos, posters, everything." },
    { icon: "🎗️", title: "Flex Boards & Banners", desc: "Indoor & outdoor flex printing in any size. Stage, shop, event ready." },
    { icon: "📇", title: "Visiting Cards", desc: "Matte, glossy, textured & premium finishes. Designed on the spot." },
    { icon: "💌", title: "Wedding & Event Cards", desc: "Custom wedding invitations, birthday, housewarming and more." },
    { icon: "📖", title: "Brochures & Flyers", desc: "Professional marketing prints that actually bring in customers." },
    { icon: "🪪", title: "ID Cards & Badges", desc: "PVC & printed ID cards for schools, offices and organisations." },
    { icon: "🏷️", title: "Stickers & Labels", desc: "Product labels, logo stickers, name tags — custom shape & size." },
    { icon: "✨", title: "Lamination", desc: "Protect certificates, documents & photos — A4 to A0 sizes." },
    { icon: "📄", title: "Scanning & Photocopy", desc: "B&W & colour copies, high-speed scanning to PDF / email." },
    { icon: "💻", title: "Online Service Centre", desc: "Form filling, print-outs, email, e-seva & document services." },
    { icon: "📑", title: "Binding & Spiral", desc: "Project reports, thesis, proposals — neat and professional." },
    { icon: "🎨", title: "Design Services", desc: "Logo, banner, invitation, poster design — our designer helps you." },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeader
          eyebrow="What we do"
          title={
            <>
              Everything printed. <span className="text-orange-500">Done right.</span>
            </>
          }
          subtitle="From a single-page photocopy to a 20-foot flex banner — we handle it all under one roof with best quality service."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-orange-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              <div className="mt-4 text-sm font-semibold text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Enquire →
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
              "Hi Carrot Digitals, I need a quote for printing."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-7 py-4 font-semibold hover:bg-slate-800 transition-colors"
          >
            💬 WhatsApp us for a quick quote
          </a>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- ABOUT / WHY US ----------------------------- */
function About() {
  const features = [
    { icon: "⚡", title: "Fast turnaround", desc: "Most jobs delivered the same day or next morning." },
    { icon: "💎", title: "Best quality", desc: "Premium papers, inks & finishing. We don't cut corners." },
    { icon: "💰", title: "Fair prices", desc: "Transparent pricing — no hidden charges, bulk discounts available." },
    { icon: "🤝", title: "Friendly service", desc: "We help with design, suggestions & last-minute fixes — happily." },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-orange-50/60 to-white relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-orange-200/40 blur-3xl" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center relative">
        <div>
          <div className="text-sm font-bold text-orange-600 uppercase tracking-[0.2em]">About us</div>
          <h2 className="mt-3 text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            A neighbourhood print shop with <span className="text-orange-500">big-studio quality.</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Located right opposite the Sree Dharma Sastha Temple and Govt. New LPS in Koottikkada,
            Carrot Digitals has been the go-to digital print house for families, students, shops and
            small businesses across Mayyanad and Kollam.
          </p>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Whether it's a last-minute photocopy, a carefully designed wedding card, or a giant flex
            banner for your event — we treat every order like it's our own. Best quality service,
            every single time.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <StatCard value="1000+" label="Happy customers" />
            <StatCard value="5.0 ★" label="Google rating" />
            <StatCard value="Same day" label="Delivery" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl p-6 shadow-lg shadow-orange-500/5 border border-orange-100 ${
                i % 2 === 1 ? "sm:translate-y-6" : ""
              }`}
            >
              <div className="text-4xl">{f.icon}</div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{f.title}</h3>
              <p className="mt-1.5 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white rounded-2xl px-5 py-4 border border-orange-100 shadow-sm">
      <div className="text-xl md:text-2xl font-black text-orange-600">{value}</div>
      <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">{label}</div>
    </div>
  );
}

/* ----------------------------- REVIEWS ----------------------------- */
function Reviews() {
  const reviews = [
    {
      name: "Pavan Madhav",
      initials: "PM",
      color: "bg-orange-500",
      rating: 5,
      text: "Excellent service and superb quality printing. The team is very helpful and delivers on time. Highly recommended for anyone in Mayyanad!",
    },
    {
      name: "Arun Kumar",
      initials: "AK",
      color: "bg-emerald-500",
      rating: 5,
      text: "Got my wedding cards printed here. Beautiful designs and very reasonable price. Everyone complimented the quality!",
    },
    {
      name: "Sreeja Nair",
      initials: "SN",
      color: "bg-rose-500",
      rating: 5,
      text: "Very friendly staff and fast service. Needed urgent photocopies and printouts — they helped within minutes. Thank you Carrot Digitals!",
    },
    {
      name: "Mohammed Rashid",
      initials: "MR",
      color: "bg-sky-500",
      rating: 5,
      text: "I run a small shop nearby and I get all my flex banners and visiting cards done here. Best in Koottikada, hands down.",
    },
  ];

  return (
    <section id="reviews" className="py-20 md:py-28 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 grid-pattern" />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="text-sm font-bold text-orange-400 uppercase tracking-[0.2em]">Reviews</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-black leading-tight">
              Loved by our <span className="text-orange-400">neighbourhood.</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 bg-white/5 backdrop-blur rounded-2xl p-5 border border-white/10">
            <div className="text-5xl font-black text-orange-400">5.0</div>
            <div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <div className="text-sm text-slate-300 mt-1">Based on Google reviews</div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-400/40 hover:-translate-y-1 transition-all"
            >
              <div className="flex">
                {[...Array(r.rating)].map((_, j) => (
                  <StarIcon key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="mt-4 text-slate-200 leading-relaxed text-sm">"{r.text}"</p>
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-white/10">
                <div
                  className={`w-10 h-10 rounded-full ${r.color} flex items-center justify-center text-white text-sm font-bold`}
                >
                  {r.initials}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{r.name}</div>
                  <div className="text-xs text-slate-400">Google review</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.google.com/search?q=carrot+digitals&rlz=1C1ONGR_enIN1202IN1202&oq=carr&gs_lcrp=EgZjaHJvbWUqCAgBEEUYJxg7MgYIABBFGDwyCAgBEEUYJxg7Mg8IAhAuGEMYsQMYgAQYigUyBggDECMYJzIGCAQQRRg5Mg8IBRAAGEMYsQMYgAQYigUyBggGEEUYPTIGCAcQRRg90gEIMzQzN2owajeoAgCwAgA&sourceid=chrome&source=chrome.ob&ie=UTF-8#lrd=0x3b05fbac7a150173:0x8a7843032dd6bc4c,1,,,,"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-orange-400 font-semibold hover:text-orange-300 transition-colors"
          >
            Read all reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- HOURS & CONTACT ----------------------------- */
function Contact() {
  const hours = [
    { day: "Monday", time: "9:00 AM – 9:00 PM" },
    { day: "Tuesday", time: "9:00 AM – 9:00 PM" },
    { day: "Wednesday", time: "9:00 AM – 9:00 PM" },
    { day: "Thursday", time: "9:00 AM – 9:00 PM" },
    { day: "Friday", time: "9:00 AM – 9:00 PM" },
    { day: "Saturday", time: "9:00 AM – 9:00 PM" },
    { day: "Sunday", time: "10:00 AM – 2:00 PM" },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeader
          eyebrow="Visit or call"
          title={
            <>
              Come say hi — we're just opposite <span className="text-orange-500">the temple.</span>
            </>
          }
          subtitle="Walk in, call us or drop a WhatsApp — we'll get your printing done right away."
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          {/* Contact card */}
          <div className="lg:col-span-2 space-y-5">
            <InfoCard
              icon={<PhoneIcon className="w-5 h-5" />}
              label="Call us"
              value={PHONE_DISPLAY}
              href={`tel:${PHONE_TEL}`}
              accent="orange"
            />
            <InfoCard
              icon={<WhatsAppIcon className="w-5 h-5" />}
              label="WhatsApp"
              value="Chat with us instantly"
              href={`https://wa.me/${WHATSAPP}`}
              accent="green"
            />
            <InfoCard
              icon={<MapIcon className="w-5 h-5" />}
              label="Address"
              value={ADDRESS}
              href="https://www.google.com/maps/dir/?api=1&destination=Carrot+Digitals+Koottikada+Mayyanad+Kollam"
              accent="rose"
            />
            <InfoCard
              icon={<FacebookIcon className="w-5 h-5" />}
              label="Facebook"
              value="Follow us for updates & offers"
              href="https://www.facebook.com/profile.php?id=61592495566298"
              accent="blue"
            />
            <InfoCard
              icon={<InstagramIcon className="w-5 h-5" />}
              label="Instagram"
              value="@carrot_digitals"
              href="https://www.instagram.com/carrot_digitals?igsh=cjEzbDFjd2hrejNr"
              accent="pink"
            />

            {/* Hours */}
            <div className="rounded-2xl border border-slate-200 p-6 bg-gradient-to-br from-white to-orange-50/40">
              <div className="flex items-center gap-2 mb-4">
                <ClockIcon className="w-5 h-5 text-orange-500" />
                <h3 className="text-lg font-bold text-slate-900">Opening Hours</h3>
              </div>
              <ul className="divide-y divide-slate-200/70">
                {hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex justify-between py-2.5 text-sm text-slate-700"
                  >
                    <span className="font-medium">{h.day}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-200 h-full min-h-[480px] bg-slate-100 relative">
              <iframe
                title="Carrot Digitals location"
                src={MAP_EMBED}
                className="w-full h-full min-h-[480px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="absolute top-4 left-4 right-4 bg-white/95 backdrop-blur rounded-2xl p-4 shadow-lg flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl gradient-carrot flex items-center justify-center text-white text-xl">
                  🥕
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-slate-900">Carrot Digitals</div>
                  <div className="text-xs text-slate-500 truncate">Koottikada, Mayyanad</div>
                </div>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Carrot+Digitals+Koottikada+Mayyanad+Kollam"
                  target="_blank"
                  rel="noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-slate-900 text-white px-4 py-2 text-xs font-semibold hover:bg-slate-800"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  label,
  value,
  href,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  accent: "orange" | "green" | "rose" | "blue" | "pink";
}) {
  const colors = {
    orange: "bg-orange-100 text-orange-600",
    green: "bg-green-100 text-green-600",
    rose: "bg-rose-100 text-rose-600",
    blue: "bg-blue-100 text-blue-600",
    pink: "bg-pink-100 text-pink-600",
  };
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/5 transition-all"
    >
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${colors[accent]}`}>
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-500">{label}</div>
        <div className="mt-1 text-slate-900 font-semibold leading-snug break-words group-hover:text-orange-600 transition-colors">
          {value}
        </div>
      </div>
      <div className="text-slate-300 group-hover:text-orange-500 transition-colors self-center">→</div>
    </a>
  );
}

/* ----------------------------- CTA BANNER ----------------------------- */
function CTABanner() {
  return (
    <section className="py-16 md:py-20 gradient-carrot text-white relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-2xl" />
      <div className="relative max-w-5xl mx-auto px-5 lg:px-8 text-center">
        <div className="text-6xl">🥕</div>
        <h2 className="mt-4 text-3xl md:text-5xl font-black leading-tight">
          Ready to print something amazing?
        </h2>
        <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          Send us your design on WhatsApp or walk into our shop — we'll have it ready before you know it.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 rounded-full bg-white text-orange-600 px-7 py-4 font-bold shadow-xl hover:-translate-y-0.5 transition-all"
          >
            <PhoneIcon className="w-5 h-5" />
            Call {PHONE_DISPLAY}
          </a>
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-7 py-4 font-bold shadow-xl hover:-translate-y-0.5 transition-all"
          >
            <WhatsAppIcon className="w-5 h-5" />
            WhatsApp now
          </a>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- FOOTER ----------------------------- */
function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <Logo dark />
            <div>
              <div className="font-extrabold text-lg text-white">
                Carrot <span className="text-orange-400">Digitals</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500 font-semibold">
                Digital Print House
              </div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed max-w-md text-slate-400">
            Digital Print House and Online Service Centre in Koottikada, Mayyanad. Best quality
            printing services — opposite Sree Dharma Sastha Temple & Govt. New LPS.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=61592495566298"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-blue-500 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/carrot_digitals?igsh=cjEzbDFjd2hrejNr"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-green-500 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              aria-label="Call"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-orange-500 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all"
            >
              <PhoneIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <div className="text-white font-bold mb-4">Quick Links</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-orange-400">Home</a></li>
            <li><a href="#services" className="hover:text-orange-400">Services</a></li>
            <li><a href="#about" className="hover:text-orange-400">About</a></li>
            <li><a href="#reviews" className="hover:text-orange-400">Reviews</a></li>
            <li><a href="#contact" className="hover:text-orange-400">Contact</a></li>
          </ul>
        </div>

        <div>
          <div className="text-white font-bold mb-4">Get in touch</div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <PhoneIcon className="w-4 h-4 mt-0.5 text-orange-400 shrink-0" />
              <a href={`tel:${PHONE_TEL}`} className="hover:text-orange-400">{PHONE_DISPLAY}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapIcon className="w-4 h-4 mt-0.5 text-orange-400 shrink-0" />
              <span>Koottikada, Mayyanad,<br />Kollam, Kerala 691020</span>
            </li>
            <li className="flex items-start gap-2">
              <ClockIcon className="w-4 h-4 mt-0.5 text-orange-400 shrink-0" />
              <span>Mon–Sat: 9 AM – 9 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <div>© {new Date().getFullYear()} Carrot Digitals. All rights reserved.</div>
        <div>Opp. Sree Dharma Sastha Temple · Koottikada · Mayyanad</div>
      </div>
    </footer>
  );
}

/* ----------------------------- FLOATING WHATSAPP ----------------------------- */
function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Carrot Digitals!")}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 group"
      aria-label="Chat on WhatsApp"
    >
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-xl shadow-green-500/40 pulse-ring">
        <WhatsAppIcon className="w-7 h-7" />
      </span>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-slate-900 text-white text-xs font-semibold rounded-lg px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat on WhatsApp
      </span>
    </a>
  );
}

/* ----------------------------- SHARED ----------------------------- */
function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <div className="text-sm font-bold text-orange-500 uppercase tracking-[0.2em]">{eyebrow}</div>
      <h2 className="mt-3 text-3xl md:text-5xl font-black text-slate-900 leading-tight text-balance">
        {title}
      </h2>
      {subtitle && <p className="mt-5 text-lg text-slate-600 leading-relaxed">{subtitle}</p>}
    </div>
  );
}

function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <div className="relative w-10 h-10 rounded-xl gradient-carrot flex items-center justify-center shadow-md shadow-orange-500/30">
      <span className="text-xl">🥕</span>
      <span
        className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-black ${
          dark ? "bg-white text-orange-600" : "bg-slate-900 text-white"
        }`}
      >
        C
      </span>
    </div>
  );
}

/* ----------------------------- ICONS ----------------------------- */
function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}
function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        fill="currentColor"
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      />
    </svg>
  );
}
function ClockIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function MapIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function MenuIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
function CloseIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

/* ----------------------------- APP ----------------------------- */
export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <About />
        <Reviews />
        <Contact />
        <CTABanner />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

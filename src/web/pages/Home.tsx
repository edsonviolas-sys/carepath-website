import { useEffect, useRef, useState } from "react";
import {
  Phone, Mail, MapPin, Clock, Shield, Star, Heart,
  ChevronRight, Menu, X, CheckCircle, Ambulance,
  Users, Award, ArrowRight, Send
} from "lucide-react";

// Fade-in hook
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

// ── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Home", "Services", "About", "Why Us", "Contact"];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(11,31,58,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.2)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img src="/logo.png" alt="Care Path Patient Transport" className="h-12 w-auto" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(" ", "-")}`}
              className="text-white/85 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-105"
            style={{ background: "#F5923A" }}
          >
            Book Now
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ background: "rgba(11,31,58,0.98)" }}
        >
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(" ", "-")}`}
              className="text-white/85 hover:text-white text-base font-medium py-2 border-b border-white/10"
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 text-center px-5 py-3 rounded-full text-sm font-semibold text-white"
            style={{ background: "#F5923A" }}
            onClick={() => setOpen(false)}
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#0B1F3A" }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232BAD8A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient orbs */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "#2BAD8A" }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full opacity-15 blur-3xl"
        style={{ background: "#F5923A" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-16">
        {/* Left content */}
        <div className="flex-1 text-center lg:text-left">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ background: "rgba(43,173,138,0.15)", color: "#2BAD8A", border: "1px solid rgba(43,173,138,0.3)" }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#2BAD8A" }} />
            Available 24/7 — 365 Days a Year
          </div>

          <h1
            className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-6"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Caring Every
            <br />
            <span style={{ color: "#2BAD8A" }}>Step</span> of the{" "}
            <span style={{ color: "#F5923A" }}>Journey</span>
          </h1>

          <p className="text-lg text-white/70 max-w-xl mb-10 leading-relaxed">
            Professional, compassionate and reliable non-emergency patient transport
            across the UK. Specialist staff, safe vehicles, and a commitment to
            dignity for every patient we carry.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-200 hover:scale-105 hover:shadow-xl"
              style={{ background: "#F5923A", boxShadow: "0 8px 30px rgba(245,146,58,0.35)" }}
            >
              Book a Transfer <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-200 hover:bg-white/10"
              style={{ border: "2px solid rgba(255,255,255,0.3)" }}
            >
              Our Services <ChevronRight size={18} />
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-6 mt-12 justify-center lg:justify-start">
            {[
              { icon: Shield, label: "DBS Checked Staff" },
              { icon: Award, label: "Fully Insured" },
              { icon: Heart, label: "Person-Centred Care" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-white/60 text-sm">
                <Icon size={16} style={{ color: "#2BAD8A" }} />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Right — stat cards */}
        <div className="flex-shrink-0 grid grid-cols-2 gap-4 w-full max-w-sm">
          {[
            { value: "24/7", label: "Always Available", color: "#2BAD8A" },
            { value: "100%", label: "DBS Verified", color: "#F5923A" },
            { value: "UK", label: "Nationwide Cover", color: "#2BAD8A" },
            { value: "Safe", label: "Secure Transport", color: "#F5923A" },
          ].map(({ value, label, color }) => (
            <div
              key={label}
              className="rounded-2xl p-6 text-center"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div className="text-3xl font-extrabold mb-1" style={{ color, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {value}
              </div>
              <div className="text-white/50 text-xs font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs">
        <span>Scroll down</span>
        <div className="w-px h-8 bg-white/20 animate-pulse" />
      </div>
    </section>
  );
}

// ── Services ─────────────────────────────────────────────────────────────────
const services = [
  {
    icon: "🏥",
    title: "Hospital Transfers",
    desc: "Safe and timely transfers between hospitals, wards and treatment centres across the UK.",
  },
  {
    icon: "🧠",
    title: "Mental Health Transport",
    desc: "Specialist transport for patients with mental health conditions, handled with full care and de-escalation training.",
  },
  {
    icon: "⚖️",
    title: "Court & Legal Transport",
    desc: "Secure and discreet transport to and from court hearings and legal appointments.",
  },
  {
    icon: "🏠",
    title: "Appointments & Home Visits",
    desc: "Reliable transport for outpatient appointments, home visits and routine medical travel.",
  },
  {
    icon: "🔒",
    title: "Secure Unit Transport",
    desc: "Transport to and from forensic, medium and low secure units with trained specialist staff.",
  },
  {
    icon: "📋",
    title: "CTO Recalls",
    desc: "Community Treatment Order recalls handled professionally and compassionately, 24/7.",
  },
];

function Services() {
  const ref = useFadeIn();
  return (
    <section id="services" className="py-24" style={{ background: "#F8FAFB" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="fade-in text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#2BAD8A" }}>
            What We Offer
          </p>
          <h2
            className="text-4xl lg:text-5xl font-extrabold text-navy mb-4"
            style={{ color: "#0B1F3A", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Our Transport Services
          </h2>
          <p className="text-grey max-w-2xl mx-auto text-lg" style={{ color: "#6B7280" }}>
            Comprehensive patient transport solutions tailored to each individual's needs,
            delivered with professionalism and compassion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const cardRef = useFadeIn();
            return (
              <div
                key={s.title}
                ref={cardRef}
                className="fade-in bg-white rounded-2xl p-8 group hover:shadow-xl transition-all duration-300"
                style={{
                  transitionDelay: `${i * 80}ms`,
                  border: "1px solid #e8f0ed",
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: "#EEF9F5" }}
                >
                  {s.icon}
                </div>
                <h3
                  className="text-xl font-bold mb-3 group-hover:text-teal transition-colors"
                  style={{ color: "#0B1F3A", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                  {s.desc}
                </p>
                <div
                  className="mt-5 flex items-center gap-1 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: "#2BAD8A" }}
                >
                  Learn more <ChevronRight size={14} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── About ─────────────────────────────────────────────────────────────────────
function About() {
  const ref = useFadeIn();
  const imgRef = useFadeIn();
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        {/* Visual side */}
        <div ref={imgRef} className="fade-in flex-1 relative">
          <div
            className="rounded-3xl overflow-hidden w-full aspect-[4/3] flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #0B1F3A 0%, #132d52 100%)" }}
          >
            <div className="text-center px-12">
              <img src="/logo.png" alt="Care Path" className="w-72 mx-auto mb-8 opacity-90" />
              <p className="text-white/60 text-sm leading-relaxed">
                Providing safe, dignified and compassionate transport across the United Kingdom.
              </p>
            </div>
          </div>
          {/* Floating card */}
          <div
            className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl"
            style={{ border: "1px solid #e8f0ed" }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl"
                style={{ background: "#2BAD8A" }}
              >
                ✓
              </div>
              <div>
                <div className="font-bold text-sm" style={{ color: "#0B1F3A", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  CQC Registered
                </div>
                <div className="text-xs" style={{ color: "#6B7280" }}>Quality assured care</div>
              </div>
            </div>
          </div>
        </div>

        {/* Text side */}
        <div ref={ref} className="fade-in flex-1">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#2BAD8A" }}>
            About Us
          </p>
          <h2
            className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight"
            style={{ color: "#0B1F3A", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Compassion at the
            <br />
            <span style={{ color: "#2BAD8A" }}>Heart of Every</span> Transfer
          </h2>
          <p className="mb-5 leading-relaxed" style={{ color: "#6B7280" }}>
            Care Path Patient Transport is a new, independent non-emergency patient transport
            service committed to providing safe, reliable and compassionate journeys for every
            patient we serve. We operate 24/7, 365 days a year across the UK.
          </p>
          <p className="mb-8 leading-relaxed" style={{ color: "#6B7280" }}>
            Our team of highly trained professionals follows a person-centred, holistic approach —
            treating every individual with the dignity, respect and empathy they deserve. All staff
            are DBS checked and trained in de-escalation techniques and physical intervention.
          </p>

          {/* 7 C's */}
          <div className="mb-8">
            <p className="text-sm font-semibold mb-4" style={{ color: "#0B1F3A", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              We follow the 7 C's of Care:
            </p>
            <div className="flex flex-wrap gap-2">
              {["Care", "Compassion", "Competence", "Communication", "Courage", "Commitment", "Consistency"].map((c) => (
                <span
                  key={c}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: "#EEF9F5", color: "#2BAD8A" }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:scale-105"
            style={{ background: "#2BAD8A" }}
          >
            Get in Touch <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Why Choose Us ────────────────────────────────────────────────────────────
const pillars = [
  {
    icon: Shield,
    title: "DBS Checked Staff",
    desc: "Every member of our team is fully DBS checked and carefully vetted before joining.",
    color: "#2BAD8A",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    desc: "We operate around the clock, 365 days a year — including bank holidays and emergencies.",
    color: "#F5923A",
  },
  {
    icon: Heart,
    title: "Person-Centred Care",
    desc: "We treat every patient as an individual, tailoring our approach to their specific needs.",
    color: "#2BAD8A",
  },
  {
    icon: Award,
    title: "Trained Professionals",
    desc: "Our staff hold physical intervention qualifications and de-escalation training.",
    color: "#F5923A",
  },
  {
    icon: Users,
    title: "Mental Health Expertise",
    desc: "Specialist in transporting patients with mental health disorders, working within MHA 1983 & 2007.",
    color: "#2BAD8A",
  },
  {
    icon: Star,
    title: "Nationwide Coverage",
    desc: "We cover Greater London, surrounding counties, and provide national transfers across the UK.",
    color: "#F5923A",
  },
];

function WhyUs() {
  const ref = useFadeIn();
  return (
    <section id="why-us" className="py-24" style={{ background: "#0B1F3A" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="fade-in text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#2BAD8A" }}>
            Why Choose Us
          </p>
          <h2
            className="text-4xl lg:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Built on Trust &amp; Expertise
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            We don't just transport patients — we deliver peace of mind to families,
            clinicians and care teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => {
            const cardRef = useFadeIn();
            return (
              <div
                key={p.title}
                ref={cardRef}
                className="fade-in rounded-2xl p-8 group hover:scale-105 transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${p.color}20`, border: `1px solid ${p.color}40` }}
                >
                  <p.icon size={24} style={{ color: p.color }} />
                </div>
                <h3
                  className="text-lg font-bold text-white mb-3"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/50">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Contact Form ─────────────────────────────────────────────────────────────
function Contact() {
  const ref = useFadeIn();
  const formRef = useFadeIn();
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-start">
        {/* Left info */}
        <div ref={ref} className="fade-in flex-1">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#2BAD8A" }}>
            Contact Us
          </p>
          <h2
            className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight"
            style={{ color: "#0B1F3A", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Ready to Book
            <br />
            <span style={{ color: "#F5923A" }}>a Transfer?</span>
          </h2>
          <p className="mb-10 leading-relaxed text-lg" style={{ color: "#6B7280" }}>
            Fill in the form and our team will get back to you promptly.
            We're available 24/7 for urgent bookings and enquiries.
          </p>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "#EEF9F5" }}
              >
                <Mail size={20} style={{ color: "#2BAD8A" }} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#6B7280" }}>Email</p>
                <a
                  href="mailto:info@carepathpatienttransport.co.uk"
                  className="font-semibold hover:underline"
                  style={{ color: "#0B1F3A" }}
                >
                  info@carepathpatienttransport.co.uk
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "#EEF9F5" }}
              >
                <Clock size={20} style={{ color: "#2BAD8A" }} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#6B7280" }}>Hours</p>
                <p className="font-semibold" style={{ color: "#0B1F3A" }}>Open 24/7 — 365 days a year</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "#EEF9F5" }}
              >
                <MapPin size={20} style={{ color: "#2BAD8A" }} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#6B7280" }}>Address</p>
                <p className="font-semibold" style={{ color: "#0B1F3A" }}>Coming soon</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "#EEF9F5" }}
              >
                <Phone size={20} style={{ color: "#2BAD8A" }} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#6B7280" }}>Phone</p>
                <p className="font-semibold" style={{ color: "#0B1F3A" }}>Coming soon</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div ref={formRef} className="fade-in flex-1 w-full">
          <div
            className="rounded-3xl p-8 lg:p-10"
            style={{ background: "#F8FAFB", border: "1px solid #e8f0ed" }}
          >
            {status === "sent" ? (
              <div className="text-center py-12">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background: "#EEF9F5" }}
                >
                  <CheckCircle size={40} style={{ color: "#2BAD8A" }} />
                </div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: "#0B1F3A", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Message Sent!
                </h3>
                <p style={{ color: "#6B7280" }}>
                  Thank you for getting in touch. We'll respond as soon as possible.
                </p>
                <button
                  className="mt-6 px-6 py-2.5 rounded-full text-white text-sm font-semibold"
                  style={{ background: "#2BAD8A" }}
                  onClick={() => setStatus("idle")}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: "#0B1F3A", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Send us a message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#6B7280" }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 transition-all bg-white"
                      style={{
                        border: "1px solid #d1e8e0",
                        color: "#0B1F3A",
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#6B7280" }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 transition-all bg-white"
                      style={{ border: "1px solid #d1e8e0", color: "#0B1F3A" }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#6B7280" }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+44 7700 000000"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 transition-all bg-white"
                      style={{ border: "1px solid #d1e8e0", color: "#0B1F3A" }}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#6B7280" }}>
                      Service Required
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 transition-all bg-white"
                      style={{ border: "1px solid #d1e8e0", color: form.service ? "#0B1F3A" : "#9ca3af" }}
                    >
                      <option value="">Select a service</option>
                      <option>Hospital Transfer</option>
                      <option>Mental Health Transport</option>
                      <option>Court Transport</option>
                      <option>Appointment / Home Visit</option>
                      <option>Secure Unit Transport</option>
                      <option>CTO Recall</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#6B7280" }}>
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Please describe your transport requirements, dates, locations, and any special needs..."
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 transition-all bg-white resize-none"
                    style={{ border: "1px solid #d1e8e0", color: "#0B1F3A" }}
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm">Something went wrong. Please try again or email us directly.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-semibold text-base transition-all duration-200 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{ background: status === "sending" ? "#6B7280" : "#F5923A" }}
                >
                  {status === "sending" ? "Sending..." : (<>Send Request <Send size={16} /></>)}
                </button>

                <p className="text-xs text-center" style={{ color: "#9ca3af" }}>
                  We typically respond within 1 hour. For urgent transfers please call us directly.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: "#0B1F3A" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img src="/logo.png" alt="Care Path Patient Transport" className="h-14 w-auto mb-5" />
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.45)" }}>
              Professional, reliable and compassionate non-emergency patient transport
              across the UK. Available 24/7, 365 days a year.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#2BAD8A" }} />
              <span className="text-sm font-medium" style={{ color: "#2BAD8A" }}>
                Available Now — 24/7
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-white font-bold mb-5 text-sm uppercase tracking-widest"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {["Home", "Services", "About Us", "Why Choose Us", "Contact"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase().replace(/ /g, "-")}`}
                  className="text-sm transition-colors hover:text-white flex items-center gap-1"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  <ChevronRight size={12} /> {l}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white font-bold mb-5 text-sm uppercase tracking-widest"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Our Services
            </h4>
            <div className="flex flex-col gap-3">
              {services.map((s) => (
                <span
                  key={s.title}
                  className="text-sm flex items-center gap-1"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  <ChevronRight size={12} /> {s.title}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Contact bar */}
        <div
          className="rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ background: "rgba(43,173,138,0.1)", border: "1px solid rgba(43,173,138,0.2)" }}
        >
          <div className="flex items-center gap-3">
            <Mail size={18} style={{ color: "#2BAD8A" }} />
            <a
              href="mailto:info@carepathpatienttransport.co.uk"
              className="text-sm font-medium hover:underline"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              info@carepathpatienttransport.co.uk
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={18} style={{ color: "#F5923A" }} />
            <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.8)" }}>
              Phone number coming soon
            </span>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full text-white text-sm font-semibold"
            style={{ background: "#F5923A" }}
          >
            Book Now
          </a>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            © 2026 Care Path Patient Transport. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            carepathpatienttransport.co.uk
          </p>
        </div>
      </div>
    </footer>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Services />
      <About />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}

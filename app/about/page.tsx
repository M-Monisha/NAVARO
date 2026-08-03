'use client'

import Link from 'next/link'

const font = { fontFamily: '"TASA Orbiter Deck", sans-serif' }
const fontDisplay = { fontFamily: '"TASA Orbiter Display", sans-serif' }

const team = [
  {
    name: 'Karan Wadhwa',
    role: 'Co-Founder & CEO',
    bio: 'Five years in active freight forwarding — on the calls, inside the chaos. He is building the platform he needed on day three. Turning his wounds to wisdom.',
    color: '#FBEBA9',
  },
  {
    name: 'Satyendra Sharma',
    role: 'Co-Founder & COO',
    bio: 'Twenty-seven years across the full arc of the trade: customs clearance, freight forwarding, then import-export companies of his own. LCL, FCL, air cargo; working for MNCs and alongside them. Every word of guidance on Navaro passes through him first.',
    color: '#9EE4D7',
  },
  {
    name: 'Naresh Kumar Wadhwa',
    role: 'Director',
    bio: 'Over 40 years of dedicated service in the logistics industry. From physically loading trucks to establishing global logistics networks for multinational corporations. Committed to delivering resilient, modern solutions that never crack under pressure.',
    color: '#DCB7EB',
  },
]

const beliefs = [
  {
    text: 'Because we believe in preparation over improvisation — every learning journey walks you through a real shipment, decision by decision, before you ever risk one of your own.',
  },
  {
    text: 'Because we believe in truth over theory — every piece of trade guidance is validated by Satyendra\'s twenty-seven years of practice before it reaches you. Nothing recycled. Nothing invented.',
  },
  {
    text: 'Because we believe in clarity over confusion — most traders don\'t fail from lack of ambition; they fail from leaks they never saw. Our tools show you the leak before you pour more into the bucket.',
  },
  {
    text: 'Because we believe no one should stand alone — guidance is built into the platform itself, not sold to you as an afterthought.',
  },
]

export default function About() {
  return (
    <main className="min-h-screen bg-[#F9F9F9]" style={font}>

      {/* ── Hero ── */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/landing/img/aboutbannervd.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#F9F9F9]/85" />
        <div className="relative z-10 text-center px-4 max-w-[860px] mx-auto">
          <p className="text-[#054742] text-sm font-semibold tracking-widest uppercase mb-4" style={font}>
            About Us
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-[68px] font-bold leading-[1.1] text-[#1E1E1E] mb-6" style={fontDisplay}>
            We believe no one should enter the world of trade unprepared, underequipped, or alone.
          </h1>
          <div className="flex items-center justify-center gap-3 flex-wrap mt-8">
            <Link href="/course" className="inline-flex items-center gap-2 bg-[#C780ED] text-black text-sm font-medium px-6 py-3 rounded-full hover:opacity-90 transition-opacity" style={font}>
              Explore our Courses
            </Link>
            <Link href="/dashboard" className="inline-flex items-center gap-2 border border-[#1E1E1E] text-[#1E1E1E] text-sm font-medium px-6 py-3 rounded-full hover:bg-[#1E1E1E] hover:text-white transition-colors" style={font}>
              NavTools
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why We Exist ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto px-6">
          <p className="text-[#054742] text-xs font-semibold tracking-widest uppercase mb-4" style={font}>Why we exist</p>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight text-[#1E1E1E]" style={fontDisplay}>
              Everything you own crossed a border to reach you.
            </h2>
            <div className="space-y-5 text-[#444] text-base leading-relaxed" style={font}>
              <p>
                Yet the people who move the world are handed five days of training — or even less — and told to figure the rest out. In import-export, confusion isn't an accident, it's the tradition. Accepted for so long that nobody questions it anymore.
              </p>
              <p className="font-semibold text-[#1E1E1E]">We know, because that's exactly how it started for us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Origin Story ── */}
      <section className="py-0 pb-20 md:pb-28">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="bg-[#054742] rounded-3xl p-10 md:p-16 text-[#FFFBF3]" style={font}>
            <p className="text-[#9EE4D7] text-xs font-semibold tracking-widest uppercase mb-6">The story</p>
            <div className="space-y-5 text-base md:text-lg leading-relaxed max-w-[820px]">
              <p>
                Two days into his first freight forwarding role, during COVID, Karan watched a container he had sold at $3,000 spike to $6,500 overnight. No warning. No playbook.
              </p>
              <p>
                What saved him wasn't a manual or a course. It was a person: <span className="font-semibold text-white">Satyendra</span>, his senior colleague, twenty-seven years deep in the trade, who stepped in and guided him through.
              </p>
              <p className="text-[#9EE4D7] font-semibold text-xl md:text-2xl leading-snug" style={fontDisplay}>
                That moment is the entire idea of Navaro.
              </p>
              <p>
                In this industry, the difference between sinking and sailing has always been whether someone experienced was standing next to you. Guidance shouldn't depend on luck.
              </p>
              <p className="font-semibold text-white text-lg">In your story, we play Satyendra's role.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── How We Do It ── */}
      <section className="py-0 pb-20 md:pb-28">
        <div className="max-w-[1100px] mx-auto px-6">
          <p className="text-[#054742] text-xs font-semibold tracking-widest uppercase mb-4" style={font}>How we do it</p>
          <h2 className="text-3xl md:text-[42px] font-bold text-[#1E1E1E] mb-12 max-w-[600px]" style={fontDisplay}>
            Four beliefs that shape every decision we make.
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {beliefs.map((b, i) => (
              <div key={i} className="bg-[#FDF8F3] border border-[#e8e0d8] rounded-3xl p-8">
                <span className="text-[#054742]/30 text-2xl font-bold block mb-4" style={fontDisplay}>0{i + 1}</span>
                <p className="text-[#333] text-base leading-relaxed" style={font}>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The People ── */}
      <section className="py-0 pb-24 md:pb-32">
        <div className="max-w-[1100px] mx-auto px-6">
          <p className="text-[#054742] text-xs font-semibold tracking-widest uppercase mb-4" style={font}>The people behind the belief</p>
          <h2 className="text-3xl md:text-[42px] font-bold text-[#1E1E1E] mb-12" style={fontDisplay}>
            Meet the team.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((p, i) => (
              <div
                key={i}
                className="rounded-3xl p-8 flex flex-col gap-4"
                style={{
                  backgroundColor: p.color,
                  backgroundImage: 'linear-gradient(rgba(0,0,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.07) 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                }}
              >
                {/* Initials avatar */}
                <div className="w-14 h-14 rounded-2xl bg-[#054742] flex items-center justify-center">
                  <span className="text-white text-xl font-bold" style={fontDisplay}>
                    {p.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="text-[#054742] text-xl font-bold leading-tight mb-1" style={fontDisplay}>{p.name}</h3>
                  <p className="text-[#054742]/70 text-sm font-medium mb-4" style={font}>{p.role}</p>
                  <p className="text-[#333] text-sm leading-relaxed" style={font}>{p.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Built ── */}
      <section className="bg-[#054742] py-14 md:py-20">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <p className="text-[#9EE4D7] text-xs font-semibold tracking-widest uppercase mb-3" style={font}>What we built</p>
          <h2 className="text-2xl md:text-[36px] font-bold text-white mb-3 leading-tight" style={fontDisplay}>
            Navaro — India's Trade Operating System.
          </h2>
          <p className="text-[#FFFBF3]/80 text-sm leading-relaxed max-w-[560px] mx-auto mb-6" style={font}>
            Learning, tools, AI assistance, and trade finance in one platform: NavLearn, NavTools, NavBot, NavFinance.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {['Explore', 'Evaluate', 'Execute', 'Experience'].map((e, i) => (
              <span key={i} className="bg-[#FFFBF3]/10 border border-[#FFFBF3]/20 text-[#FFFBF3] px-4 py-1.5 rounded-full text-xs font-medium" style={font}>
                {e}
              </span>
            ))}
          </div>
          <p className="text-[#9EE4D7] text-xl md:text-2xl font-bold mb-3" style={fontDisplay}>
            We make import export easy.
          </p>
          <p className="text-[#FFFBF3]/70 text-sm leading-relaxed max-w-[500px] mx-auto mb-8" style={font}>
            So that no one enters the world of trade unprepared, underequipped, or alone.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link href="/course" className="bg-[#C780ED] text-black font-medium px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity text-sm" style={font}>
              Start Learning
            </Link>
            <Link href="/dashboard" className="border border-[#FFFBF3]/40 text-[#FFFBF3] font-medium px-6 py-2.5 rounded-full hover:bg-[#FFFBF3]/10 transition-colors text-sm" style={font}>
              Explore Tools
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}

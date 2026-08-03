'use client'

import Link from 'next/link'

// Brand guidelines (TASA Orbiter, same font system as rest of site):
// Heading    - Medium (500), leading 1.0, Sentence case
// Subheading - Medium (500), leading 1.0, Sentence case
// Body       - Light (300),  leading 1.2, Sentence case
// Eyebrow    - Light (300),  leading 1.2, Sentence case, uppercase tracking

const heading    = { fontFamily: '"TASA Orbiter Display", sans-serif', fontWeight: 500, lineHeight: 1.0 }
const subheading = { fontFamily: '"TASA Orbiter Display", sans-serif', fontWeight: 500, lineHeight: 1.0 }
const body       = { fontFamily: '"TASA Orbiter Deck", sans-serif',    fontWeight: 300, lineHeight: 1.2 }
const eyebrow    = { fontFamily: '"TASA Orbiter Deck", sans-serif',    fontWeight: 300, lineHeight: 1.2, letterSpacing: '0.12em', textTransform: 'uppercase' as const }

const team = [
  {
    name: 'Karan Wadhwa',
    role: 'Co-Founder & CEO',
    bio: 'Five years in active freight forwarding, on the calls, inside the chaos. He is building the platform he needed on day three. Turning his wounds to wisdom.',
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
  { text: "Because we believe in preparation over improvisation: every learning journey walks you through a real shipment, decision by decision, before you ever risk one of your own." },
  { text: "Because we believe in truth over theory: every piece of trade guidance is validated by Satyendra&apos;s twenty-seven years of practice before it reaches you. Nothing recycled. Nothing invented." },
  { text: "Because we believe in clarity over confusion: most traders don&apos;t fail from lack of ambition; they fail from leaks they never saw. Our tools show you the leak before you pour more into the bucket." },
  { text: "Because we believe no one should stand alone: guidance is built into the platform itself, not sold to you as an afterthought." },
]

export default function About() {
  return (
    <main className="min-h-screen bg-[#F9F9F9]">

      {/* Hero */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/landing/img/aboutbannervd.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#F9F9F9]/85" />
        <div className="relative z-10 text-center px-4 max-w-[860px] mx-auto">
          <p className="text-[#054742] text-xs mb-5" style={eyebrow}>About us</p>
          <h1 className="text-4xl md:text-5xl lg:text-[60px] text-[#1E1E1E] mb-8 px-2" style={heading}>
            We believe no one should enter the world of trade unprepared, underequipped, or alone.
          </h1>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link href="/course" className="bg-[#C780ED] text-black text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity" style={body}>
              Explore our courses
            </Link>
            <Link href="/dashboard" className="border border-[#1E1E1E] text-[#1E1E1E] text-sm px-6 py-3 rounded-full hover:bg-[#1E1E1E] hover:text-white transition-colors" style={body}>
              NavTools
            </Link>
          </div>
        </div>
      </section>

      {/* Why we exist */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto px-6">
          <p className="text-[#054742] text-xs mb-5" style={eyebrow}>Why we exist</p>
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <h2 className="text-3xl md:text-[42px] text-[#1E1E1E]" style={heading}>
              Everything you own crossed a border to reach you.
            </h2>
            <div className="space-y-5 text-[#444] text-base" style={body}>
              <p>
                Yet the people who move the world are handed five days of training, or even less, and told to figure the rest out. In import-export, confusion isn&apos;t an accident, it&apos;s the tradition. Accepted for so long that nobody questions it anymore.
              </p>
              <p style={{ ...body, fontWeight: 500 }} className="text-[#1E1E1E]">
                We know, because that&apos;s exactly how it started for us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The story */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="bg-[#054742] rounded-3xl p-10 md:p-16">
            <p className="text-[#9EE4D7] text-xs mb-8" style={eyebrow}>The story</p>
            <div className="space-y-6 text-[#FFFBF3] text-base md:text-lg max-w-[800px]" style={body}>
              <p>
                Two days into his first freight forwarding role, during COVID, Karan watched a container he had sold at $3,000 spike to $6,500 overnight. No warning. No playbook.
              </p>
              <p>
                What saved him wasn&apos;t a manual or a course. It was a person: <span style={{ ...body, fontWeight: 500 }}>Satyendra</span>, his senior colleague, twenty-seven years deep in the trade, who stepped in and guided him through.
              </p>
              <p className="text-[#9EE4D7] text-xl md:text-2xl" style={subheading}>
                That moment is the entire idea of Navaro.
              </p>
              <p>
                In this industry, the difference between sinking and sailing has always been whether someone experienced was standing next to you. Guidance shouldn&apos;t depend on luck.
              </p>
              <p className="text-white text-lg" style={{ ...body, fontWeight: 500 }}>
                In your story, we play Satyendra&apos;s role.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we do it */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-[1100px] mx-auto px-6">
          <p className="text-[#054742] text-xs mb-5" style={eyebrow}>How we do it</p>
          <h2 className="text-3xl md:text-[40px] text-[#1E1E1E] mb-12 max-w-[560px]" style={heading}>
            Four beliefs that shape every decision we make.
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {beliefs.map((b, i) => (
              <div key={i} className="bg-[#FDF8F3] border border-[#e8e0d8] rounded-3xl p-8">
                <span className="text-[#054742]/30 text-2xl block mb-4" style={subheading}>0{i + 1}</span>
                <p className="text-[#333] text-base" style={body}>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The people */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-[1100px] mx-auto px-6">
          <p className="text-[#054742] text-xs mb-5" style={eyebrow}>The people behind the belief</p>
          <h2 className="text-3xl md:text-[40px] text-[#1E1E1E] mb-12" style={heading}>
            Meet the team.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((p, i) => (
              <div
                key={i}
                className="rounded-3xl p-10 flex flex-col gap-5"
                style={{
                  backgroundColor: p.color,
                  backgroundImage: 'linear-gradient(rgba(0,0,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.07) 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                }}
              >
                <div>
                  <h3 className="text-[#054742] text-xl mb-2" style={subheading}>{p.name}</h3>
                  <p className="text-[#054742]/60 text-xs mb-5" style={eyebrow}>{p.role}</p>
                  <p className="text-[#333] text-sm" style={{ ...body, lineHeight: 1.7 }}>{p.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we built */}
      <section className="bg-[#054742] py-14 md:py-20">
        <div className="max-w-[860px] mx-auto px-6 text-center">
          <p className="text-[#9EE4D7] text-xs mb-4" style={eyebrow}>What we built</p>
          <h2 className="text-2xl md:text-[34px] text-white mb-4" style={heading}>
            Navaro: India&apos;s trade operating system.
          </h2>
          <p className="text-[#FFFBF3]/75 text-sm max-w-[520px] mx-auto mb-6" style={body}>
            Learning, tools, AI assistance, and trade finance in one platform: NavLearn, NavTools, NavBot, NavFinance.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {['Explore', 'Evaluate', 'Execute', 'Experience'].map((e, i) => (
              <span key={i} className="bg-[#FFFBF3]/10 border border-[#FFFBF3]/20 text-[#FFFBF3] px-4 py-1.5 rounded-full text-xs" style={body}>
                {e}
              </span>
            ))}
          </div>
          <p className="text-[#9EE4D7] text-xl md:text-[26px] mb-3" style={subheading}>
            We make import export easy.
          </p>
          <p className="text-[#FFFBF3]/65 text-sm max-w-[460px] mx-auto mb-8" style={body}>
            So that no one enters the world of trade unprepared, underequipped, or alone.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link href="/course" className="bg-[#C780ED] text-black px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity text-sm" style={body}>
              Start learning
            </Link>
            <Link href="/dashboard" className="border border-[#FFFBF3]/40 text-[#FFFBF3] px-6 py-2.5 rounded-full hover:bg-[#FFFBF3]/10 transition-colors text-sm" style={body}>
              Explore tools
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}

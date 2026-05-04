export default function Home() {
  const faqs = [
    {
      q: "How does the AI categorization work?",
      a: "Our system uses OpenAI to analyze ticket content, detect urgency signals, and classify by topic—billing, bugs, feature requests, and more—then instantly routes to the right team member."
    },
    {
      q: "Which notification channels are supported?",
      a: "FeedbackRoute AI sends alerts via email and Slack. You can configure per-team routing rules and escalation paths from the dashboard."
    },
    {
      q: "Can I customize routing rules?",
      a: "Yes. The dashboard lets you define custom categories, assign team members, set urgency thresholds, and view analytics on ticket volume and response times."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          AI-Powered Support Routing
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-route customer feedback<br />
          <span className="text-[#58a6ff]">to the right team members</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          FeedbackRoute AI analyzes incoming support tickets, categorizes by type and urgency, and instantly notifies the right person—so nothing falls through the cracks.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $39/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center shadow-xl">
          <h2 className="text-xl font-bold text-white mb-1">Pro Plan</h2>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to route smarter</p>
          <div className="mb-6">
            <span className="text-5xl font-extrabold text-white">$39</span>
            <span className="text-[#8b949e] text-sm ml-1">/mo</span>
          </div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited ticket routing",
              "AI categorization & urgency scoring",
              "Email + Slack notifications",
              "Custom routing rules dashboard",
              "Analytics & response time tracking",
              "Up to 10 team members"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-xl border border-[#30363d] bg-[#161b22] p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-8 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} FeedbackRoute AI. All rights reserved.
      </footer>
    </main>
  );
}

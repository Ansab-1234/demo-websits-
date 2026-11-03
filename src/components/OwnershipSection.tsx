import {
  ShieldCheck,
  KeyRound,
  Lock,
  CheckCircle2,
  AlertTriangle,
  FolderLock,
  Globe,
  Server,
  FileCode,
  UserCheck,
  ExternalLink
} from 'lucide-react'

export default function OwnershipSection() {
  return (
    <section id="ownership" className="py-24 border-b border-black/5 dark:border-white/10 bg-[#FBF9F5] dark:bg-[#10110F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            Zero Vendor Lock-In & Total Transparency
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.08] mb-4 text-[#141512] dark:text-[#F5F0E7]">
            Your Website. Your Domain. <br />
            <span className="text-[#C6A46A]">Your Complete Ownership.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6A665E] dark:text-[#A8A49B] leading-relaxed font-normal">
            Unlike agencies that hold your domain hostage or lock you into proprietary hosting traps, we believe your business assets must always remain 100% under your ownership and direct control.
          </p>
        </div>

        {/* Why Ownership Matters Callout Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#191A17] border border-black/5 dark:border-white/10 mb-16 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0">
              <KeyRound className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Why Client Ownership Matters
              </h3>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-light italic">
                "We believe your digital assets should remain under your control. Your domain and hosting account are important business assets, so they should be registered in your name. This gives you independence, transparency and control over renewals, access and future development."
              </p>
            </div>
          </div>
        </div>

        {/* Ownership Comparison Table */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Client Column */}
          <div className="p-8 rounded-3xl bg-emerald-50/50 dark:bg-emerald-950/20 border-2 border-emerald-500/40 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Client Rights & Control
                </span>
                <h4 className="text-xl font-black text-slate-950 dark:text-white">
                  WHAT YOU OWN (100%)
                </h4>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <span><strong>Custom Domain Name:</strong> Registered directly in your personal or business name with your chosen registrar (GoDaddy, Namecheap, Google Domains).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <span><strong>Cloud Hosting Account:</strong> Hosted on your own cloud console (Vercel, Cloudflare, Netlify, AWS) under your primary billing control.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <span><strong>Website Business Identity:</strong> Complete intellectual property rights to your brand imagery, copy, and supplied assets.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <span><strong>Final Source Code Repository:</strong> Clean, un-obfuscated GitHub repository handed over at final milestone delivery.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <span><strong>Developer Freedom:</strong> You remain 100% free to continue working with another developer or engineer anytime without restriction.</span>
              </li>
            </ul>
          </div>

          {/* Agency Responsibilities Column */}
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-border-light dark:border-border-dark space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-bold">
                <FileCode className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                  Engineering Scope
                </span>
                <h4 className="text-xl font-black text-slate-950 dark:text-white">
                  WHAT PIXORA DIGITAL HANDLES
                </h4>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Bespoke UI/UX Architecture:</strong> Designing custom visual systems, responsive typography, and high-conversion wireframes.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Frontend & Full-Stack Development:</strong> Clean code implementation using modern React, TypeScript, and Tailwind CSS.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Deployment & DNS Setup:</strong> Delegated technical assistance to configure your domain records, nameservers, and SSL certificates.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Agreed Maintenance & Support:</strong> Ongoing WhatsApp technical updates, menu refreshes, and seasonal changes as agreed.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Transparent Billing:</strong> Domain and hosting renewals are billed directly to your credit card at actual registrar costs with zero markup.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Security & Privacy Standards Breakdown */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="w-6 h-6 text-emerald-400" />
            <h3 className="text-xl sm:text-2xl font-bold">
              Responsible Security & Credential Hygiene
            </h3>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed font-light mb-8 italic">
            "PIXORA DIGITAL does not need to permanently store your personal passwords. We prefer secure delegated access, collaborator invitations or temporary authorized access wherever supported. Your login credentials should remain private. We only access the services required to complete the agreed work."
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
              <strong className="text-white block text-sm">Delegated Collaborator Access</strong>
              <p>We guide you to send secure developer collaborator invites (e.g. Vercel member or GitHub invite) rather than sharing root master passwords.</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
              <strong className="text-white block text-sm">Zero Credentials in Git</strong>
              <p>All sensitive API keys, webhook URLs, and secrets are strictly managed via encrypted environment variables (`.env`) and never committed to code repositories.</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
              <strong className="text-white block text-sm">Principle of Least Privilege</strong>
              <p>We request only the minimum technical access necessary to deploy and configure your website. Temporary permissions can be revoked immediately after launch.</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex items-start gap-2.5 text-[11px] text-slate-400">
            <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Engineering Responsibility:</strong> While we enforce rigorous industry hygiene standards, no digital platform is completely immune to external risk. We educate clients on enabling Two-Factor Authentication (2FA) across all their domain and registrar accounts.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}


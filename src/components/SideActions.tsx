import { RESERVE_URL } from "@/lib/site";

const DESKTOP_ACTIONS: {
  label: string;
  href: string;
  external?: boolean;
}[] = [
  { label: "初診相談", href: "#counseling" },
  { label: "WEB予約", href: RESERVE_URL, external: true },
  { label: "アクセス", href: "#access" },
  { label: "診療時間", href: "#access" },
];

const MOBILE_ACTIONS: {
  label: string;
  href: string;
  external?: boolean;
}[] = [
  { label: "TEL", href: "tel:0458712281" },
  { label: "WEB予約", href: RESERVE_URL, external: true },
  { label: "初診相談", href: "#counseling" },
  { label: "アクセス", href: "#access" },
];

export default function SideActions() {
  return (
    <>
      {/* Desktop: right-side fixed actions */}
      <div className="hidden lg:flex fixed right-3 top-1/2 -translate-y-1/2 z-40 flex-col gap-2 items-end">
        {/* Phone — horizontal, prominent */}
        <a
          href="tel:0458712281"
          className="bg-[#9a998e] text-white px-4 py-3 hover:bg-[#b5b4a8] transition shadow-sm flex flex-col items-center min-w-[140px]"
          aria-label="045-871-2281 へ電話する"
        >
          <span className="text-[10px] tracking-[0.3em] text-white/85">TEL</span>
          <span className="text-[15px] tracking-wider mt-1">045-871-2281</span>
        </a>

        {/* Vertical-writing tiles */}
        {DESKTOP_ACTIONS.map((a) =>
          a.external ? (
            <a
              key={a.label}
              href={a.href}
              target="_blank"
              rel="noopener"
              data-ga-event="reserve_click"
              className="w-12 h-32 bg-[#f4f1ea] text-[#9a998e] hover:bg-[#e9e3d6] hover:text-[#222] transition flex items-center justify-center text-[13px] tracking-[0.25em]"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
              {a.label}
            </a>
          ) : (
            <a
              key={a.label}
              href={a.href}
              className="w-12 h-32 bg-[#f4f1ea] text-[#9a998e] hover:bg-[#e9e3d6] hover:text-[#222] transition flex items-center justify-center text-[13px] tracking-[0.25em]"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
              {a.label}
            </a>
          ),
        )}
      </div>

      {/* Mobile: bottom fixed actions */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 grid grid-cols-4 border-t border-[#e3e3e3]">
        {MOBILE_ACTIONS.map((a) =>
          a.external ? (
            <a
              key={a.label}
              href={a.href}
              target="_blank"
              rel="noopener"
              data-ga-event="reserve_click"
              className="bg-[#f4f1ea] text-[#9a998e] hover:bg-[#e9e3d6] transition flex items-center justify-center min-h-[52px] py-4 text-xs tracking-wider"
            >
              {a.label}
            </a>
          ) : (
            <a
              key={a.label}
              href={a.href}
              className="bg-[#f4f1ea] text-[#9a998e] hover:bg-[#e9e3d6] transition flex items-center justify-center min-h-[52px] py-4 text-xs tracking-wider"
            >
              {a.label}
            </a>
          ),
        )}
      </div>
    </>
  );
}

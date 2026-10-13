import { RESERVE_URL } from "@/lib/site";
import Photo from "./Photo";

const STEPS = [
  { n: "STEP 1", title: "ご予約", body: "お電話（045-871-2281）またはネット予約にて承ります。" },
  { n: "STEP 2", title: "矯正相談", body: "お口の中を拝見し、治療の必要性・期間・装置・料金等について丁寧にご説明します。" },
  { n: "STEP 3", title: "精密検査", body: "治療をご希望の場合、2回に分けてレントゲン・歯型・写真等の精密検査を行います。" },
  { n: "STEP 4", title: "診断・治療開始", body: "検査結果をもとに院長から治療方針をお話しし、治療をスタートいたします。" },
];

export default function Counseling() {
  return (
    <section id="counseling" className="bg-white py-16 lg:py-40">
      <div className="px-6 lg:px-10">
        <div className="anim text-center mb-10 lg:mb-16">
          <h2 className="section-eyebrow">Counseling</h2>
          <p className="text-xs sm:text-sm text-[#9a998e] tracking-[0.3em] mt-2">初診相談・カウンセリング</p>
          <div className="w-10 h-px bg-[#9a998e]/40 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-start max-w-[1400px] mx-auto mb-12 lg:mb-20">
          <div className="anim lg:pt-0">
            <Photo src="/photos/counseling-1.jpg" alt="待合室で問診票を記入する患者さん" ratio="3/4" className="w-full max-w-sm mx-auto lg:ml-auto" />
          </div>

          <div className="anim anim-delay-1 max-w-md text-center text-[14px] leading-[2] text-[#222] lg:pt-20">
            <p className="text-[#9a998e] tracking-widest text-xs mb-3">初診相談は無料です</p>
            <p>当院では安心して治療を受けていただけるよう、丁寧なカウンセリングと分かりやすい説明を大切にしています。</p>
            <div className="w-12 h-px bg-[#9a998e]/40 mx-auto my-6" />
            <p>お口のお悩みやご不安な点をしっかりお伺いし、一人ひとりに合った最適な治療計画をご提案いたします。</p>
            <p className="mt-3 text-[13px] text-[#666]">まずはお気軽にご相談ください。</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
              <a
                href="tel:0458712281"
                className="inline-flex items-center justify-center whitespace-nowrap bg-[#9a998e] text-white text-sm tracking-widest px-6 py-4 hover:bg-[#b5b4a8] transition"
              >
                045-871-2281 へ電話する
              </a>
              <a
                href={RESERVE_URL}
                target="_blank"
                rel="noopener"
                data-ga-event="reserve_click"
                className="inline-flex items-center justify-center whitespace-nowrap border border-[#9a998e] text-[#9a998e] text-sm tracking-widest px-6 py-4 hover:bg-[#9a998e] hover:text-white transition"
              >
                ネット予約はこちら →
              </a>
            </div>
          </div>

          <div className="anim anim-delay-2 lg:pt-40">
            <Photo src="/photos/counseling-2.jpg" alt="カウンセリングの様子" ratio="4/5" className="w-full max-w-sm mx-auto" />
          </div>
        </div>

        <div className="max-w-[1120px] mx-auto">
          <h3 className="anim text-center text-base lg:text-lg tracking-wider mb-10 text-[#222]">初診の流れ</h3>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s, i) => (
              <li key={s.n} className={`anim anim-delay-${Math.min(i + 1, 3)} relative bg-[#f4f1ea]/40 p-6 lg:p-8`}>
                <div className="text-[11px] tracking-[0.3em] text-[#9a998e] mb-3">{s.n}</div>
                <h4 className="text-base lg:text-lg mb-3">{s.title}</h4>
                <p className="text-[13px] leading-loose text-[#444]">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

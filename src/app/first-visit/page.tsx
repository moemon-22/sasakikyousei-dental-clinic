import { RESERVE_URL } from "@/lib/site";
import SubPageLayout from "@/components/SubPageLayout";
import PageSection from "@/components/PageSection";

export const metadata = {
  title: "初診の方へ｜ささき矯正歯科クリニック",
  description: "ささき矯正歯科クリニックの初診の流れと無料相談のご案内。",
};

const STEPS = [
  { n: "STEP 1", title: "ご予約", body: "お電話（045-871-2281）またはネット予約にて承ります。" },
  { n: "STEP 2", title: "矯正相談", body: "お口の中を拝見し、矯正治療の必要性・期間・装置・料金等について丁寧にご説明し、ご不安や疑問にお答えします。" },
  { n: "STEP 3", title: "精密検査", body: "治療をご希望の場合、2回に分けて精密検査を行います。1回目はレントゲン・顔写真（30〜40分）、2回目は口腔内撮影・歯型取り（1時間〜1時間30分）。" },
  { n: "STEP 4", title: "診断・治療開始", body: "検査結果をもとに院長から今後の方針をお話しし、治療をスタートいたします。" },
];

const PREP = [
  { title: "歯磨き", body: "歯磨きを済ませてお越しください。" },
  { title: "マスクの着用", body: "ご来院される方皆さまのマスクの着用をお願いいたします。" },
  { title: "ご本人様確認", body: "初回のみ保険証やマイナンバー等、ご本人様確認できるものをお持ちください。" },
];

export default function Page() {
  return (
    <SubPageLayout category="初めての方へ" enTitle="FIRST VISIT" jpTitle="初診の方へ" heroSrc="/photos/counseling-1.jpg">
      <PageSection>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 mb-16">
          <div className="text-[#9a998e] text-xs tracking-[0.3em]">初診相談は無料です</div>
          <div className="text-[14px] leading-loose text-[#444]">
            <p>当院では安心して治療を受けていただけるよう、丁寧なカウンセリングと分かりやすい説明を大切にしています。お口のお悩みやご不安な点をしっかりお伺いし、一人ひとりに合った最適な治療計画をご提案いたします。</p>
            <p className="mt-3">まずはお気軽にご相談ください。</p>
          </div>
        </div>
      </PageSection>

      <PageSection enTitle="Reservation" jpTitle="予約方法" bg="soft">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-8">
            <p className="text-[#9a998e] text-xs tracking-[0.3em] mb-3">お電話</p>
            <p className="text-2xl tracking-wider mb-2"><a href="tel:0458712281" className="link-underline">045-871-2281</a></p>
            <p className="text-[12px] text-[#666] leading-loose">受付時間：平日 10:00〜12:00 ／ 14:00〜19:00<br />土日 10:00〜13:00 ／ 15:00〜19:00</p>
          </div>
          <div className="bg-white p-8">
            <p className="text-[#9a998e] text-xs tracking-[0.3em] mb-3">ネット予約 ※初診のみ</p>
            <p className="text-[13px] text-[#444] leading-loose mb-4">予約カレンダーからご予約ください。ご相談には40分ほどお時間をいただいているため、ネット予約枠が限られている場合があります。</p>
            <p className="text-[12px] text-[#666] leading-loose mb-4">ご希望のお時間が×の場合でも、お電話で調整できる可能性がございますので一度お電話にてお問合せください。</p>
            <a href={RESERVE_URL} target="_blank" rel="noopener" data-ga-event="reserve_click" className="inline-block bg-[#9a998e] text-white text-sm tracking-widest px-6 py-3 hover:bg-[#b5b4a8] transition">
              予約カレンダーへ →
            </a>
          </div>
        </div>
      </PageSection>

      <PageSection enTitle="Flow" jpTitle="初診の流れ">
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s) => (
            <li key={s.n} className="bg-[#f4f1ea]/40 p-6 lg:p-8">
              <div className="text-[11px] tracking-[0.3em] text-[#9a998e] mb-3">{s.n}</div>
              <h3 className="text-base lg:text-lg mb-3">{s.title}</h3>
              <p className="text-[13px] leading-loose text-[#444]">{s.body}</p>
            </li>
          ))}
        </ol>
      </PageSection>

      <PageSection enTitle="Preparation" jpTitle="クリニックからのお願い" bg="soft">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PREP.map((p) => (
            <div key={p.title} className="bg-white p-6">
              <h3 className="text-base mb-3 text-[#9a998e]">{p.title}</h3>
              <p className="text-[13px] leading-loose text-[#444]">{p.body}</p>
            </div>
          ))}
        </div>
      </PageSection>
    </SubPageLayout>
  );
}

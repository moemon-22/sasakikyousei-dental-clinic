import { RESERVE_URL, SITE_NAME, SITE_URL } from "@/lib/site";

/**
 * トップページ用の構造化データ（JSON-LD）。
 * - Dentist: Google 検索のローカルビジネス情報（住所・電話・診療時間）
 * - WebSite: 検索結果に表示されるサイト名
 * 医院情報を変えたときは FooterAccess / access-info と合わせて更新する。
 */
const dentist = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": `${SITE_URL}/#dentist`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/og-image.jpg`,
  telephone: "+81-45-871-2281",
  faxNumber: "+81-45-871-2412",
  address: {
    "@type": "PostalAddress",
    postalCode: "244-0816",
    addressRegion: "神奈川県",
    addressLocality: "横浜市戸塚区",
    streetAddress: "上倉田町493-1 NOBオグシビル5F",
    addressCountry: "JP",
  },
  medicalSpecialty: "https://schema.org/Dentistry",
  // 平日（火・水・金）と土・日で時間帯が異なる。月・木・祝は休診
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Friday"], opens: "10:00", closes: "12:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Friday"], opens: "14:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday", "Sunday"], opens: "10:00", closes: "13:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday", "Sunday"], opens: "15:00", closes: "19:00" },
  ],
  potentialAction: {
    "@type": "ReserveAction",
    target: RESERVE_URL,
  },
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  inLanguage: "ja",
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify([dentist, website]) }}
    />
  );
}

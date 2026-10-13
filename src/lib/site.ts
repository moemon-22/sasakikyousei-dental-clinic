/**
 * サイト全体の URL 設定。
 * - 本番（Vercel）: NEXT_PUBLIC_SITE_URL 未設定 → https://www.sasakikyousei.com（正規ホストは www）
 * - デモ（GitHub Pages）: NEXT_PUBLIC_BASE_PATH が付く → 検索エンジンには載せない（noindex）
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sasakikyousei.com").replace(/\/$/, "");
export const SITE_NAME = "ささき矯正歯科クリニック";
export const IS_DEMO = Boolean(process.env.NEXT_PUBLIC_BASE_PATH);

/** 初診相談の WEB 予約（ネットラボ社）。CTA はすべてここへ直接リンクする */
export const RESERVE_URL = "https://reserve.net-lab.jp/user/facilities/10937/reservation";

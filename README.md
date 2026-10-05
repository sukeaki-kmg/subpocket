# SubPocket — 選択式料金カタログ版

サービス → 料金つきプラン → 登録。51サービス・117プランの選択肢を収録。料金、通貨、支払周期、カテゴリを自動入力します。検索は日本語別名に対応し、カテゴリで絞れます。

## 起動

このフォルダで `python3 -m http.server 8765 --bind 127.0.0.1` を実行し、http://127.0.0.1:8765/ を開きます。GitHub Pagesでも配信できます。外部ライブラリ・ビルド不要。index.html と catalog.js は同じフォルダに置いてください。

## 料金と収録範囲

2026-10-05に公式情報を参照した静的カタログです。リアルタイムの価格取得・自動更新はありません。全世界のサービス・全契約経路・全プランの網羅ではありません。無料体験・期間限定割引は通常料金として扱い、特別な契約額は任意の詳細欄で変更できます。

各サービスの公式情報へのリンク、参照日、適用条件を登録画面に表示。カタログを更新しても、登録済み料金は自動変更しません。編集時にプランを選び直すと新しいカタログ料金を適用します。旧プラン・既存の自由入力サービスも編集可能です。

USDプランは公式の基本料金を保持し、設定した概算レートで円換算して合計します。初期値は1 USD = 150円（計算用の仮レート）。画面で1〜1,000円・小数2桁まで変更でき、端末に保存します。税・追加使用量・決済手数料の加算と相場の自動取得は未対応。ChatGPTの円料金はiOS App Store Plusのみ収録。YouTube Premiumのファミリー・学割・年払い、Disney+プレミアム、Adobeフォト以外など未収録のプランがあります。Google One、PlayStation Plus、Canvaなども未収録です。Kindle Unlimitedは現行申込画面を取得できず、公式発表の通常額を収録したため注記があります。

## データ

保存キーは `subpocket.v2`。同じ配信元の `subpocket.v1` を初回読込時に移行対象として読み、元のキーは保持します。新しい版はversion 2のバックアップを出力し、version 1と2を復元できます。旧アプリへversion 2のバックアップを復元することはできません。配信元が変わる場合、旧アプリでバックアップし新しい版で復元してください。復元は一覧を置き換えます。

端末保存・編集・削除・検索・全登録合計・JSONバックアップ・別タブ同期を維持。バックアップをGitHubに含めないでください。公開作業は未実施。

## 料金の更新

catalog.js の各サービスにある plans を変更します。amount は支払周期全体の額です（年払いの月額換算を入れない）。source、checked、channel、currency、noteも更新してください。sourceはサービス単位・プラン単位で指定できます。年間契約の月々払いはプラン名に明記します。

## 公式参照先

- [Netflix](https://qr.netflix.com/jp/title/80200575)
- [YouTube Premium](https://www.softbank.jp/corp/set/data/news/press/sbkk/2026/20260410_04/pdf/attachment_03.pdf)
- [Amazon Prime](https://www.cdn.amazon.co.jp/-/en/gp/subs/primeclub/signup/main.html)
- [Disney+](https://www.disneyplus.com/ja-jp/explore/what-is-disneyplus)
- [Hulu](https://www.hulu.jp/static/)
- [U-NEXT](https://help.unext.jp/guide/detail/types-of-service-plan)
- [DMM TV](https://premium.dmm.com/about/)
- [ABEMA](https://help.abema.tv/hc/ja/articles/55297041707545)
- [dアニメストア](https://animestore.docomo.ne.jp/animestore/tp/)
- [Lemino](https://lemino.docomo.ne.jp/leminonews/articles/lemino-d-anime-store)
- [DAZN](https://www.dazn.com/ja-JP/help/articles/16308524311581-2026年2月2日以降の利用プラン一覧)
- [Apple TV](https://www.apple.com/jp/apple-one/)
- [Spotify](https://www.spotify.com/jp/premium/)
- [Apple Music](https://www.apple.com/jp/apple-music/)
- [Amazon Music Unlimited](https://music.amazon.co.jp/lp/freemusic)
- [LINE MUSIC](https://music.line.me/)
- [YouTube Premium Lite](https://blog.youtube/intl/ja-jp/news-and-events/introducing-premium-lite/)
- [ChatGPT](https://help.openai.com/ja-jp/articles/6950777-what-is-chatgpt-plus)
- [Claude](https://claude.com/pricing)
- [Gemini](https://gemini.google/jp/subscriptions/?hl=ja)
- [Cursor](https://cursor.com/en-US/pricing)
- [Perplexity](https://www.perplexity.ai/enterprise/pricing)
- [iCloud+](https://support.apple.com/ja-jp/108047)
- [Nintendo Switch Online](https://www.nintendo.com/jp/nintendo-switch-online/plan/index.html)
- [Apple Arcade](https://www.apple.com/jp/apple-one/)
- [Microsoft 365](https://www.microsoft.com/ja-jp/microsoft-365/p/microsoft-365-personal/cfq7ttc0k5bc)
- [Adobe Creative Cloud](https://www.adobe.com/jp/creativecloud/photography.html)
- [Kindle Unlimited](https://press.aboutamazon.com/jp/news/小売/2016/8/日本でもkindle-unlimited-月額980円の定額読み放題サービスを開始-書籍-コミック-雑誌を含む和書12万冊-洋書120万冊以上がお手持ちのios-androidスマートフォンやタブレット-kindle電子書籍リーダーやfireタブレットで読み放題に-http-www-amazon-co-jp-kindleunlimited)
- [Audible](https://www.audible.co.jp/)
- [dマガジン](https://www.docomo.ne.jp/special_contents/dmagazine/)
- [LYPプレミアム](https://support.yahoo-net.jp/PccPremium/s/article/H000006735)
- [Apple One](https://www.apple.com/jp/apple-one/)

## 動作確認

Chromeで71プランの料金・通貨・周期とフォーム妥当性、登録、再読込、旧料金の編集保持、v1データ移行、v1/v2バックアップ復元、重複ID拒否、削除、別タブ同期、検索中の全登録合計、破損データの上書き抑止を確認。390px幅で横方向のはみ出しがないことを確認しました。価格の将来の正確性・全サービスの網羅を保証するテストではありません。

## KLING AI追加

Standard / Pro / Premier / Ultraの月払い・年払い8選択肢を追加。2026-10-05の[公式料金画面](https://kling.ai/app/membership/membership-plan)に記載された継続料金（割引適用）を収録し、初月限定価格は除外。年払いは年間請求総額。USD原額を保持し、設定レートで概算の円合計に含めます。

レート設定は `subpocket.usdJpy` に独立して保存され、契約バックアップには含まれません。レートを変えると全USD契約を再計算します。丸めは合計算出後に表示時のみ行います。

## 国内動画サービス拡充

全専門チャンネル・全課金経路の網羅は未完了です。以下のサービスを公式情報から追加しました。

- [FOD](https://help.fod.fujitv.co.jp/hc/ja/articles/28978412775449)
- [フジテレビ ONE TWO NEXT smart](https://help.fod.fujitv.co.jp/hc/ja/articles/28978412775449)
- [FOD SHORT](https://help.fod.fujitv.co.jp/hc/ja/articles/28978412775449)
- [TELASA](https://apps.apple.com/jp/app/id561854152)
- [WOWOW](https://support.wowow.co.jp/answer/689c1dfa34906ed080431e54/)
- [NHKオンデマンド](https://www.nhk-ondemand.jp/share/faq/)
- [バンダイチャンネル](https://www.b-ch.com/contents/guide/index.html)
- [アニメ放題](https://help.animehodai.jp/faq/detail/monthly-fee)
- [東映特撮ファンクラブ](https://tokusatsu-fc.jp/)
- [TSUBURAYA IMAGINATION](https://m-78.jp/news/post-5811)
- [J SPORTSオンデマンド](https://www.jsports.co.jp/lp/jod/)
- [NJPW WORLD](https://help.njpwworld.com/hc/ja/articles/22487362918553)
- [クランクイン！ビデオ](https://user.crank-in.net/video/regist?tvod-svod=PRE000001)
- [テレ東BIZ](https://www.tv-tokyo.co.jp/biz/lp/)

### ロゴ・サイトアイコン
選択一覧と登録カードにローカル保存したサービスのサイトアイコンを表示します。取得できないサービスは頭文字で表示します。取得元ドメインは `assets/logos/sources.json` に記録しています。ブランド名・アイコンの権利は各権利者に帰属します。

### セット契約
セットプランで絞り込み可能。セット全体を1件として計上します。単独契約の自動削除・契約切替は行いません。
- [Hulu｜Disney+ セットプラン](https://news.hulu.jp/disneyplus_set_03/)
- [DMM｜Disney+ セットプラン](https://premium.dmm.com/feature/bundle/dmm-disneyplus/)
- [DMM×DAZNホーダイ](https://premium.dmm.com/feature/bundle/dmm-dazn/)
- [DMM×pixiv推しホーダイ](https://premium.dmm.com/feature/bundle/dmm-pixiv/)

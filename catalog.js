/* Official price snapshots; no background price updates. */
const CATALOG = [
  {
    "id": "s0",
    "name": "Netflix",
    "category": "動画",
    "source": "https://qr.netflix.com/jp/title/80200575",
    "checked": "2026-10-05",
    "aliases": "ネットフリックス ネトフリ",
    "note": "日本向け通常料金。期間限定割引は含みません。",
    "plans": [
      {
        "id": "p0",
        "name": "広告つきスタンダード",
        "amount": 890,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p1",
        "name": "スタンダード",
        "amount": 1590,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p2",
        "name": "プレミアム",
        "amount": 2290,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      }
    ],
    "logo": "assets/logos/s0.png"
  },
  {
    "id": "s1",
    "name": "YouTube Premium",
    "category": "動画",
    "source": "https://www.softbank.jp/corp/set/data/news/press/sbkk/2026/20260410_04/pdf/attachment_03.pdf",
    "checked": "2026-10-05",
    "aliases": "ユーチューブ youtube",
    "note": "日本・Android公式月額料金。ファミリー・学割・年払い・iOSの料金は未収録。",
    "plans": [
      {
        "id": "p0",
        "name": "個人",
        "amount": 1280,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      }
    ],
    "logo": "assets/logos/s1.png"
  },
  {
    "id": "s2",
    "name": "Amazon Prime",
    "category": "動画",
    "source": "https://www.cdn.amazon.co.jp/-/en/gp/subs/primeclub/signup/main.html",
    "checked": "2026-10-05",
    "aliases": "アマゾン プライム アマプラ prime video",
    "note": "日本向け通常料金。期間限定割引は含みません。",
    "plans": [
      {
        "id": "p0",
        "name": "Prime",
        "amount": 600,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p1",
        "name": "Prime",
        "amount": 5900,
        "cycle": "yearly",
        "channel": "公式・Web",
        "currency": "JPY"
      }
    ],
    "logo": "assets/logos/s2.png"
  },
  {
    "id": "s3",
    "name": "Disney+",
    "category": "動画",
    "source": "https://www.disneyplus.com/ja-jp/explore/what-is-disneyplus",
    "checked": "2026-10-05",
    "aliases": "ディズニープラス",
    "note": "日本向け通常料金。プレミアム・セットプランは未収録。",
    "plans": [
      {
        "id": "p0",
        "name": "スタンダード",
        "amount": 1250,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p1",
        "name": "スタンダード",
        "amount": 12500,
        "cycle": "yearly",
        "channel": "公式・Web",
        "currency": "JPY"
      }
    ],
    "logo": "assets/logos/s3.png"
  },
  {
    "id": "s4",
    "name": "Hulu",
    "category": "動画",
    "source": "https://www.hulu.jp/static/",
    "checked": "2026-10-05",
    "aliases": "フールー",
    "note": "日本向け通常料金。期間限定割引は含みません。",
    "plans": [
      {
        "id": "p0",
        "name": "見放題",
        "amount": 1026,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p1",
        "name": "見放題",
        "amount": 1050,
        "cycle": "monthly",
        "channel": "iTunes Store",
        "currency": "JPY"
      }
    ],
    "logo": "assets/logos/s4.png"
  },
  {
    "id": "s5",
    "name": "U-NEXT",
    "category": "動画",
    "source": "https://help.unext.jp/guide/detail/types-of-service-plan",
    "checked": "2026-10-05",
    "aliases": "ユーネクスト",
    "note": "ポイント還元を差し引かない請求額。追加購入は含みません。",
    "plans": [
      {
        "id": "p0",
        "name": "月額プラン",
        "amount": 2189,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p1",
        "name": "月額プラン",
        "amount": 2400,
        "cycle": "monthly",
        "channel": "アプリ",
        "currency": "JPY"
      }
    ],
    "logo": "assets/logos/s5.png"
  },
  {
    "id": "s6",
    "name": "DMM TV",
    "category": "動画",
    "source": "https://premium.dmm.com/about/",
    "checked": "2026-10-05",
    "aliases": "ディーエムエム DMMTV DMMテレビ DMMプレミアム",
    "note": "日本向け通常料金。期間限定割引は含みません。",
    "plans": [
      {
        "id": "p0",
        "name": "DMMプレミアム",
        "amount": 550,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p1",
        "name": "DMMプレミアム",
        "amount": 650,
        "cycle": "monthly",
        "channel": "App Store / Google Play",
        "currency": "JPY"
      }
    ],
    "logo": "assets/logos/s6.png"
  },
  {
    "id": "s7",
    "name": "ABEMA",
    "category": "動画",
    "source": "https://help.abema.tv/hc/ja/articles/55297041707545",
    "checked": "2026-10-05",
    "aliases": "アベマ ABEMAプレミアム AbemaTV アベマTV",
    "note": "日本向け通常料金。期間限定割引は含みません。",
    "plans": [
      {
        "id": "p0",
        "name": "広告つきプレミアム",
        "amount": 680,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p1",
        "name": "プレミアム",
        "amount": 1180,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      }
    ],
    "logo": "assets/logos/s7.png"
  },
  {
    "id": "s8",
    "name": "dアニメストア",
    "category": "動画",
    "source": "https://animestore.docomo.ne.jp/animestore/tp/",
    "checked": "2026-10-05",
    "aliases": "ディーアニメ",
    "note": "日本向け通常料金。期間限定割引は含みません。",
    "plans": [
      {
        "id": "p0",
        "name": "月額プラン",
        "amount": 660,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      }
    ],
    "logo": "assets/logos/s8.png"
  },
  {
    "id": "s9",
    "name": "Lemino",
    "category": "動画",
    "source": "https://lemino.docomo.ne.jp/leminonews/articles/lemino-d-anime-store",
    "checked": "2026-10-05",
    "aliases": "レミノ",
    "note": "日本向け通常料金。期間限定割引は含みません。",
    "plans": [
      {
        "id": "p0",
        "name": "プレミアム",
        "amount": 1540,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      }
    ],
    "logo": "assets/logos/s9.png"
  },
  {
    "id": "s10",
    "name": "DAZN",
    "category": "動画",
    "source": "https://www.dazn.com/ja-JP/help/articles/16308524311581-2026年2月2日以降の利用プラン一覧",
    "checked": "2026-10-05",
    "aliases": "ダゾーン",
    "note": "年間契約・月々払いは12か月契約です。追加購入・期間限定割引は含みません。",
    "plans": [
      {
        "id": "p0",
        "name": "Standard",
        "amount": 4200,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p1",
        "name": "Standard",
        "amount": 32000,
        "cycle": "yearly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p2",
        "name": "Standard 年間契約・月々払い",
        "amount": 3200,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      }
    ],
    "logo": "assets/logos/s10.png"
  },
  {
    "id": "s11",
    "name": "Apple TV",
    "category": "動画",
    "source": "https://www.apple.com/jp/apple-one/",
    "checked": "2026-10-05",
    "aliases": "アップル tv+",
    "note": "日本向け通常料金。期間限定割引は含みません。",
    "plans": [
      {
        "id": "p0",
        "name": "通常プラン",
        "amount": 1200,
        "cycle": "monthly",
        "channel": "Apple",
        "currency": "JPY"
      }
    ],
    "logo": "assets/logos/s11.png"
  },
  {
    "id": "s12",
    "name": "Spotify",
    "category": "音楽",
    "source": "https://www.spotify.com/jp/premium/",
    "checked": "2026-10-05",
    "aliases": "スポティファイ",
    "note": "日本向け通常料金。期間限定割引は含みません。",
    "plans": [
      {
        "id": "p0",
        "name": "Standard",
        "amount": 1080,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p1",
        "name": "Student",
        "amount": 580,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p2",
        "name": "Duo",
        "amount": 1480,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p3",
        "name": "Family",
        "amount": 1880,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      }
    ],
    "logo": "assets/logos/s12.png"
  },
  {
    "id": "s13",
    "name": "Apple Music",
    "category": "音楽",
    "source": "https://www.apple.com/jp/apple-music/",
    "checked": "2026-10-05",
    "aliases": "アップルミュージック",
    "note": "日本向け通常料金。期間限定割引は含みません。",
    "plans": [
      {
        "id": "p0",
        "name": "個人",
        "amount": 1180,
        "cycle": "monthly",
        "channel": "Apple",
        "currency": "JPY"
      },
      {
        "id": "p1",
        "name": "ファミリー",
        "amount": 1980,
        "cycle": "monthly",
        "channel": "Apple",
        "currency": "JPY"
      },
      {
        "id": "p2",
        "name": "学生",
        "amount": 680,
        "cycle": "monthly",
        "channel": "Apple",
        "currency": "JPY"
      }
    ],
    "logo": "assets/logos/s13.png"
  },
  {
    "id": "s14",
    "name": "Amazon Music Unlimited",
    "category": "音楽",
    "source": "https://music.amazon.co.jp/lp/freemusic",
    "checked": "2026-10-05",
    "aliases": "アマゾン ミュージック",
    "note": "日本向け通常料金。期間限定割引は含みません。",
    "plans": [
      {
        "id": "p0",
        "name": "個人",
        "amount": 1180,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p1",
        "name": "個人・Prime会員",
        "amount": 1080,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      }
    ],
    "logo": "assets/logos/s14.png"
  },
  {
    "id": "s15",
    "name": "LINE MUSIC",
    "category": "音楽",
    "source": "https://music.line.me/",
    "checked": "2026-10-05",
    "aliases": "ラインミュージック",
    "note": "日本向け通常料金。期間限定割引は含みません。",
    "plans": [
      {
        "id": "p0",
        "name": "一般",
        "amount": 1080,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p1",
        "name": "学生",
        "amount": 580,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      }
    ],
    "logo": "assets/logos/s15.png"
  },
  {
    "id": "s16",
    "name": "YouTube Premium Lite",
    "category": "動画",
    "source": "https://blog.youtube/intl/ja-jp/news-and-events/introducing-premium-lite/",
    "checked": "2026-10-05",
    "aliases": "ユーチューブ ライト",
    "note": "日本向け通常料金。期間限定割引は含みません。",
    "plans": [
      {
        "id": "p0",
        "name": "Lite",
        "amount": 780,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      }
    ],
    "logo": "assets/logos/s16.png"
  },
  {
    "id": "s17",
    "name": "ChatGPT",
    "category": "AI",
    "source": "https://help.openai.com/ja-jp/articles/6950777-what-is-chatgpt-plus",
    "checked": "2026-10-05",
    "aliases": "チャットジーピーティー OpenAI",
    "note": "iOS App Storeと米ドル建てWeb契約の選択肢。USD料金は税・為替手数料別。その他のプラン・円建てWeb契約は未収録。",
    "plans": [
      {
        "id": "ios-plus",
        "name": "Plus",
        "amount": 3000,
        "cycle": "monthly",
        "channel": "iOS App Store",
        "currency": "JPY",
        "source": "https://apps.apple.com/jp/app/chatgpt/id6448311069"
      },
      {
        "id": "p0",
        "name": "Plus",
        "amount": 20,
        "cycle": "monthly",
        "channel": "Web・USD請求",
        "currency": "USD"
      }
    ],
    "logo": "assets/logos/s17.png"
  },
  {
    "id": "s18",
    "name": "Claude",
    "category": "AI",
    "source": "https://claude.com/pricing",
    "checked": "2026-10-05",
    "aliases": "クロード",
    "note": "米ドル建ての公式基本料金。税・追加使用量・為替手数料は含みません。",
    "plans": [
      {
        "id": "p0",
        "name": "Pro",
        "amount": 20,
        "cycle": "monthly",
        "channel": "Web・税別",
        "currency": "USD"
      },
      {
        "id": "p1",
        "name": "Pro",
        "amount": 200,
        "cycle": "yearly",
        "channel": "Web・税別",
        "currency": "USD"
      },
      {
        "id": "p2",
        "name": "Max 5x",
        "amount": 100,
        "cycle": "monthly",
        "channel": "Web・税別",
        "currency": "USD"
      },
      {
        "id": "p3",
        "name": "Max 20x",
        "amount": 200,
        "cycle": "monthly",
        "channel": "Web・税別",
        "currency": "USD"
      }
    ],
    "logo": "assets/logos/s18.png"
  },
  {
    "id": "s19",
    "name": "Gemini",
    "category": "AI",
    "source": "https://gemini.google/jp/subscriptions/?hl=ja",
    "checked": "2026-10-05",
    "aliases": "ジェミニ Google AI グーグル",
    "note": "日本の通常料金。YouTubeなどの付帯特典は別契約として重複登録しないでください。",
    "plans": [
      {
        "id": "p0",
        "name": "Google AI Plus",
        "amount": 725,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p1",
        "name": "Google AI Pro",
        "amount": 2900,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p2",
        "name": "Google AI Ultra 5x",
        "amount": 14500,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p3",
        "name": "Google AI Ultra 20x",
        "amount": 32000,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      }
    ],
    "logo": "assets/logos/s19.png"
  },
  {
    "id": "s20",
    "name": "Cursor",
    "category": "AI",
    "source": "https://cursor.com/en-US/pricing",
    "checked": "2026-10-05",
    "aliases": "カーソル",
    "note": "米ドル建ての基本料金。税・従量課金・為替手数料は含みません。",
    "plans": [
      {
        "id": "p0",
        "name": "Pro",
        "amount": 20,
        "cycle": "monthly",
        "channel": "Web・USD",
        "currency": "USD"
      },
      {
        "id": "p1",
        "name": "Pro+",
        "amount": 60,
        "cycle": "monthly",
        "channel": "Web・USD",
        "currency": "USD"
      },
      {
        "id": "p2",
        "name": "Ultra",
        "amount": 200,
        "cycle": "monthly",
        "channel": "Web・USD",
        "currency": "USD"
      }
    ],
    "logo": "assets/logos/s20.png"
  },
  {
    "id": "s21",
    "name": "Perplexity",
    "category": "AI",
    "source": "https://www.perplexity.ai/enterprise/pricing",
    "checked": "2026-10-05",
    "aliases": "パープレキシティ",
    "note": "米ドル建ての基本料金。税・追加クレジット・為替手数料は含みません。",
    "plans": [
      {
        "id": "p0",
        "name": "Pro",
        "amount": 20,
        "cycle": "monthly",
        "channel": "Web・USD",
        "currency": "USD"
      }
    ],
    "logo": "assets/logos/s21.png"
  },
  {
    "id": "s22",
    "name": "iCloud+",
    "category": "ストレージ",
    "source": "https://support.apple.com/ja-jp/108047",
    "checked": "2026-10-05",
    "aliases": "アイクラウド Apple",
    "note": "日本向け通常料金。期間限定割引は含みません。",
    "plans": [
      {
        "id": "p0",
        "name": "50GB",
        "amount": 180,
        "cycle": "monthly",
        "channel": "Apple",
        "currency": "JPY"
      },
      {
        "id": "p1",
        "name": "200GB",
        "amount": 540,
        "cycle": "monthly",
        "channel": "Apple",
        "currency": "JPY"
      },
      {
        "id": "p2",
        "name": "2TB",
        "amount": 1800,
        "cycle": "monthly",
        "channel": "Apple",
        "currency": "JPY"
      },
      {
        "id": "p3",
        "name": "6TB",
        "amount": 5500,
        "cycle": "monthly",
        "channel": "Apple",
        "currency": "JPY"
      },
      {
        "id": "p4",
        "name": "12TB",
        "amount": 11000,
        "cycle": "monthly",
        "channel": "Apple",
        "currency": "JPY"
      }
    ],
    "logo": "assets/logos/s22.png"
  },
  {
    "id": "s23",
    "name": "Nintendo Switch Online",
    "category": "ゲーム",
    "source": "https://www.nintendo.com/jp/nintendo-switch-online/plan/index.html",
    "checked": "2026-10-05",
    "aliases": "ニンテンドー 任天堂 スイッチ",
    "note": "1か月・12か月の料金を収録。3か月プランは未収録。",
    "plans": [
      {
        "id": "p0",
        "name": "個人",
        "amount": 400,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p1",
        "name": "個人",
        "amount": 3000,
        "cycle": "yearly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p2",
        "name": "ファミリー",
        "amount": 5800,
        "cycle": "yearly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p3",
        "name": "追加パック・個人",
        "amount": 5900,
        "cycle": "yearly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p4",
        "name": "追加パック・ファミリー",
        "amount": 9900,
        "cycle": "yearly",
        "channel": "公式・Web",
        "currency": "JPY"
      }
    ],
    "logo": "assets/logos/s23.png"
  },
  {
    "id": "s24",
    "name": "Apple Arcade",
    "category": "ゲーム",
    "source": "https://www.apple.com/jp/apple-one/",
    "checked": "2026-10-05",
    "aliases": "アップル アーケード",
    "note": "日本向け通常料金。期間限定割引は含みません。",
    "plans": [
      {
        "id": "p0",
        "name": "通常プラン",
        "amount": 900,
        "cycle": "monthly",
        "channel": "Apple",
        "currency": "JPY"
      }
    ],
    "logo": "assets/logos/s24.png"
  },
  {
    "id": "s25",
    "name": "Microsoft 365",
    "category": "仕事",
    "source": "https://www.microsoft.com/ja-jp/microsoft-365/p/microsoft-365-personal/cfq7ttc0k5bc",
    "checked": "2026-10-05",
    "aliases": "マイクロソフト Office オフィス",
    "note": "日本向け通常料金。期間限定割引は含みません。",
    "plans": [
      {
        "id": "p0",
        "name": "Personal",
        "amount": 2130,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p1",
        "name": "Personal",
        "amount": 21300,
        "cycle": "yearly",
        "channel": "公式・Web",
        "currency": "JPY"
      }
    ],
    "logo": "assets/logos/s25.png"
  },
  {
    "id": "s26",
    "name": "Adobe Creative Cloud",
    "category": "仕事",
    "source": "https://www.adobe.com/jp/creativecloud/photography.html",
    "checked": "2026-10-05",
    "aliases": "アドビ Photoshop Lightroom",
    "note": "フォトプランのみ収録。月々払いも年間契約です。",
    "plans": [
      {
        "id": "p0",
        "name": "フォト 1TB・年間契約・月々払い",
        "amount": 2380,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p1",
        "name": "フォト 1TB・年間一括払い",
        "amount": 28480,
        "cycle": "yearly",
        "channel": "公式・Web",
        "currency": "JPY"
      }
    ],
    "logo": "assets/logos/s26.png"
  },
  {
    "id": "s27",
    "name": "Kindle Unlimited",
    "category": "読書",
    "source": "https://press.aboutamazon.com/jp/news/小売/2016/8/日本でもkindle-unlimited-月額980円の定額読み放題サービスを開始-書籍-コミック-雑誌を含む和書12万冊-洋書120万冊以上がお手持ちのios-androidスマートフォンやタブレット-kindle電子書籍リーダーやfireタブレットで読み放題に-http-www-amazon-co-jp-kindleunlimited",
    "checked": "2026-10-05",
    "aliases": "キンドル",
    "note": "公式発表の通常料金。現在の申込画面は取得できなかったため、登録時点の料金は公式サイトでも確認してください。",
    "plans": [
      {
        "id": "p0",
        "name": "読み放題",
        "amount": 980,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      }
    ]
  },
  {
    "id": "s28",
    "name": "Audible",
    "category": "読書",
    "source": "https://www.audible.co.jp/",
    "checked": "2026-10-05",
    "aliases": "オーディブル",
    "note": "日本向け通常料金。期間限定割引は含みません。",
    "plans": [
      {
        "id": "p0",
        "name": "スタンダード",
        "amount": 880,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p1",
        "name": "プレミアム",
        "amount": 1500,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      }
    ],
    "logo": "assets/logos/s28.png"
  },
  {
    "id": "s29",
    "name": "dマガジン",
    "category": "読書",
    "source": "https://www.docomo.ne.jp/special_contents/dmagazine/",
    "checked": "2026-10-05",
    "aliases": "ディーマガジン",
    "note": "日本向け通常料金。期間限定割引は含みません。",
    "plans": [
      {
        "id": "p0",
        "name": "月額プラン",
        "amount": 580,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      }
    ]
  },
  {
    "id": "s30",
    "name": "LYPプレミアム",
    "category": "その他",
    "source": "https://support.yahoo-net.jp/PccPremium/s/article/H000006735",
    "checked": "2026-10-05",
    "aliases": "ライン ヤフー Yahoo",
    "note": "日本向け通常料金。期間限定割引は含みません。",
    "plans": [
      {
        "id": "p0",
        "name": "スタンダード",
        "amount": 508,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p1",
        "name": "スタンダード",
        "amount": 650,
        "cycle": "monthly",
        "channel": "iOS / Android",
        "currency": "JPY"
      }
    ],
    "logo": "assets/logos/s30.png"
  },
  {
    "id": "s31",
    "name": "Apple One",
    "category": "その他",
    "source": "https://www.apple.com/jp/apple-one/",
    "checked": "2026-10-05",
    "aliases": "アップルワン",
    "note": "Apple Music、Apple TV、Apple Arcade、iCloud+を含むセット。付帯サービスの二重登録にご注意ください。",
    "plans": [
      {
        "id": "p0",
        "name": "個人",
        "amount": 1350,
        "cycle": "monthly",
        "channel": "Apple",
        "currency": "JPY"
      },
      {
        "id": "p1",
        "name": "ファミリー",
        "amount": 2500,
        "cycle": "monthly",
        "channel": "Apple",
        "currency": "JPY"
      }
    ],
    "logo": "assets/logos/s31.png"
  },
  {
    "id": "kling-ai",
    "name": "KLING AI",
    "category": "AI",
    "source": "https://kling.ai/app/membership/membership-plan",
    "checked": "2026-10-05",
    "aliases": "KLINGAI Kling クリング クリングAI クリングエーアイ 動画生成",
    "note": "公式画面に表示された自動更新の継続料金（割引適用）を収録。初月限定価格は含みません。年払いは1年分の支払額です。税・追加クレジット・為替手数料は含みません。割引や更新料金は変更される場合があります。",
    "plans": [
      {
        "id": "standard-monthly",
        "name": "Standard",
        "amount": 8.8,
        "cycle": "monthly",
        "channel": "Web・継続料金",
        "currency": "USD"
      },
      {
        "id": "standard-yearly",
        "name": "Standard",
        "amount": 79.2,
        "cycle": "yearly",
        "channel": "Web・継続料金",
        "currency": "USD"
      },
      {
        "id": "pro-monthly",
        "name": "Pro",
        "amount": 32.56,
        "cycle": "monthly",
        "channel": "Web・継続料金",
        "currency": "USD"
      },
      {
        "id": "pro-yearly",
        "name": "Pro",
        "amount": 293.04,
        "cycle": "yearly",
        "channel": "Web・継続料金",
        "currency": "USD"
      },
      {
        "id": "premier-monthly",
        "name": "Premier",
        "amount": 80.96,
        "cycle": "monthly",
        "channel": "Web・継続料金",
        "currency": "USD"
      },
      {
        "id": "premier-yearly",
        "name": "Premier",
        "amount": 728.64,
        "cycle": "yearly",
        "channel": "Web・継続料金",
        "currency": "USD"
      },
      {
        "id": "ultra-monthly",
        "name": "Ultra",
        "amount": 159.99,
        "cycle": "monthly",
        "channel": "Web・継続料金",
        "currency": "USD"
      },
      {
        "id": "ultra-yearly",
        "name": "Ultra",
        "amount": 1429.99,
        "cycle": "yearly",
        "channel": "Web・継続料金",
        "currency": "USD"
      }
    ],
    "logo": "assets/logos/kling-ai.png"
  },
  {
    "id": "fod",
    "name": "FOD",
    "category": "動画",
    "source": "https://help.fod.fujitv.co.jp/hc/ja/articles/28978412775449",
    "logoDomain": "fod.fujitv.co.jp",
    "checked": "2026-10-05",
    "aliases": "エフオーディー フジテレビ ドラマ FODプレミアム",
    "note": "日本向け税込料金。F1コースはクレジットカード決済限定。ポイント還元は請求額から差し引きません。",
    "plans": [
      {
        "id": "p0",
        "name": "プレミアム・広告付きライト",
        "amount": 976,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p1",
        "name": "プレミアム・スタンダード",
        "amount": 1320,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p2",
        "name": "プレミアム・ポイントMAX",
        "amount": 2090,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p3",
        "name": "F1 スターター",
        "amount": 3880,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p4",
        "name": "F1 プロ",
        "amount": 4900,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p5",
        "name": "F1 チャンピオン",
        "amount": 5900,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p6",
        "name": "F1 スターター・ポイントMAX",
        "amount": 4650,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p7",
        "name": "F1 プロ・ポイントMAX",
        "amount": 5670,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p8",
        "name": "F1 チャンピオン・ポイントMAX",
        "amount": 6670,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      }
    ],
    "logo": "assets/logos/fod.png"
  },
  {
    "id": "fuji-smart",
    "name": "フジテレビ ONE TWO NEXT smart",
    "category": "動画",
    "source": "https://help.fod.fujitv.co.jp/hc/ja/articles/28978412775449",
    "logoDomain": "otn.fujitv.co.jp",
    "checked": "2026-10-05",
    "aliases": "フジテレビ スマート ワン ツー ネクスト",
    "note": "日本向け通常料金（税込）。無料体験・追加購入・期間限定割引は含みません。",
    "plans": [
      {
        "id": "p0",
        "name": "ONE TWO・2チャンネルセット",
        "amount": 1100,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p1",
        "name": "NEXT",
        "amount": 2580,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p2",
        "name": "ONE TWO NEXT・3チャンネルセット",
        "amount": 2910,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      }
    ],
    "logo": "assets/logos/fuji-smart.png"
  },
  {
    "id": "fod-short",
    "name": "FOD SHORT",
    "category": "動画",
    "source": "https://help.fod.fujitv.co.jp/hc/ja/articles/28978412775449",
    "logoDomain": "fod.fujitv.co.jp",
    "checked": "2026-10-05",
    "aliases": "エフオーディー ショート",
    "note": "月払いのみ収録。週払いは未対応。FODプレミアムとは別の契約です。",
    "plans": [
      {
        "id": "p0",
        "name": "SHORT Unlimited",
        "amount": 5000,
        "cycle": "monthly",
        "channel": "iTunes Store / Google Play",
        "currency": "JPY"
      }
    ],
    "logo": "assets/logos/fod-short.png"
  },
  {
    "id": "telasa",
    "name": "TELASA",
    "category": "動画",
    "source": "https://apps.apple.com/jp/app/id561854152",
    "logoDomain": "telasa.jp",
    "checked": "2026-10-05",
    "aliases": "テラサ テレビ朝日",
    "note": "日本向け通常料金（税込）。無料体験・追加購入・期間限定割引は含みません。",
    "plans": [
      {
        "id": "p0",
        "name": "見放題プラン",
        "amount": 990,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      }
    ],
    "logo": "assets/logos/telasa.png"
  },
  {
    "id": "wowow",
    "name": "WOWOW",
    "category": "動画",
    "source": "https://support.wowow.co.jp/answer/689c1dfa34906ed080431e54/",
    "logoDomain": "wowow.co.jp",
    "checked": "2026-10-05",
    "aliases": "ワウワウ オンデマンド",
    "note": "スタンダードの月額契約。放送とオンデマンドを重複登録しないでください。その他のプランは未収録。",
    "plans": [
      {
        "id": "p0",
        "name": "スタンダード・月額契約",
        "amount": 2530,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      }
    ],
    "logo": "assets/logos/wowow.png"
  },
  {
    "id": "nhk-ondemand",
    "name": "NHKオンデマンド",
    "category": "動画",
    "source": "https://www.nhk-ondemand.jp/share/faq/",
    "logoDomain": "nhk-ondemand.jp",
    "checked": "2026-10-05",
    "aliases": "エヌエイチケー NHK オンデマンド",
    "note": "NHK受信料とは別のサービス。単品購入は含みません。",
    "plans": [
      {
        "id": "p0",
        "name": "まるごと見放題パック",
        "amount": 990,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      }
    ]
  },
  {
    "id": "bandai",
    "name": "バンダイチャンネル",
    "category": "動画",
    "source": "https://www.b-ch.com/contents/guide/index.html",
    "logoDomain": "b-ch.com",
    "checked": "2026-10-05",
    "aliases": "バンチャ アニメ 特撮 bandai",
    "note": "日本向け通常料金（税込）。無料体験・追加購入・期間限定割引は含みません。",
    "plans": [
      {
        "id": "p0",
        "name": "見放題会員",
        "amount": 1100,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      }
    ]
  },
  {
    "id": "animehodai",
    "name": "アニメ放題",
    "category": "動画",
    "source": "https://help.animehodai.jp/faq/detail/monthly-fee",
    "logoDomain": "animehodai.jp",
    "checked": "2026-10-05",
    "aliases": "アニメほうだい ソフトバンク",
    "note": "日本向け通常料金（税込）。無料体験・追加購入・期間限定割引は含みません。",
    "plans": [
      {
        "id": "p0",
        "name": "見放題",
        "amount": 440,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      }
    ]
  },
  {
    "id": "ttfc",
    "name": "東映特撮ファンクラブ",
    "category": "動画",
    "source": "https://tokusatsu-fc.jp/",
    "logoDomain": "tokusatsu-fc.jp",
    "checked": "2026-10-05",
    "aliases": "TTFC 仮面ライダー スーパー戦隊 東映",
    "note": "日本向け通常料金（税込）。無料体験・追加購入・期間限定割引は含みません。",
    "plans": [
      {
        "id": "p0",
        "name": "月額会員",
        "amount": 960,
        "cycle": "monthly",
        "channel": "アプリ",
        "currency": "JPY"
      }
    ],
    "logo": "assets/logos/ttfc.png"
  },
  {
    "id": "tsuburaya",
    "name": "TSUBURAYA IMAGINATION",
    "category": "動画",
    "source": "https://m-78.jp/news/post-5811",
    "logoDomain": "imagination.m-78.jp",
    "checked": "2026-10-05",
    "aliases": "円谷 ツブラヤ イマジネーション ウルトラマン",
    "note": "公式サービス案内の税込通常料金。現行の申込画面は取得できなかったため、契約条件は公式でもご確認ください。",
    "plans": [
      {
        "id": "p0",
        "name": "スタンダード",
        "amount": 550,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p1",
        "name": "プレミアム",
        "amount": 21780,
        "cycle": "yearly",
        "channel": "公式・Web",
        "currency": "JPY"
      }
    ],
    "logo": "assets/logos/tsuburaya.png"
  },
  {
    "id": "jsports",
    "name": "J SPORTSオンデマンド",
    "category": "動画",
    "source": "https://www.jsports.co.jp/lp/jod/",
    "logoDomain": "jsports.co.jp",
    "checked": "2026-10-05",
    "aliases": "ジェイスポーツ JSPORTS スポーツ",
    "note": "U25割は25歳以下が対象。PPV・別契約のテレビ放送料金は含みません。",
    "plans": [
      {
        "id": "p0",
        "name": "総合パック",
        "amount": 2980,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p1",
        "name": "総合パック",
        "amount": 26820,
        "cycle": "yearly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p2",
        "name": "ジャンルパック",
        "amount": 2580,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p3",
        "name": "サッカー＆フットサル",
        "amount": 1450,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p4",
        "name": "総合パック・U25割",
        "amount": 1490,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p5",
        "name": "ジャンルパック・U25割",
        "amount": 1290,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p6",
        "name": "サッカー＆フットサル・U25割",
        "amount": 725,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      }
    ]
  },
  {
    "id": "njpw",
    "name": "NJPW WORLD",
    "category": "動画",
    "source": "https://help.njpwworld.com/hc/ja/articles/22487362918553",
    "logoDomain": "njpwworld.com",
    "checked": "2026-10-05",
    "aliases": "新日本プロレス ワールド NJPWWORLD",
    "note": "日本向け通常料金（税込）。無料体験・追加購入・期間限定割引は含みません。",
    "plans": [
      {
        "id": "p0",
        "name": "月額見放題・日本国内",
        "amount": 1298,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      }
    ],
    "logo": "assets/logos/njpw.png"
  },
  {
    "id": "crank-in",
    "name": "クランクイン！ビデオ",
    "category": "動画",
    "source": "https://user.crank-in.net/video/regist?tvod-svod=PRE000001",
    "logoDomain": "crank-in.net",
    "checked": "2026-10-05",
    "aliases": "クランクイン ビデオ 映画",
    "note": "ポイント付与型のレンタル・購入サービス。見放題プランではありません。",
    "plans": [
      {
        "id": "p0",
        "name": "月額プラン",
        "amount": 990,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      }
    ]
  },
  {
    "id": "tvtokyo-biz",
    "name": "テレ東BIZ",
    "category": "動画",
    "source": "https://www.tv-tokyo.co.jp/biz/lp/",
    "logoDomain": "txbiz.tv-tokyo.co.jp",
    "checked": "2026-10-05",
    "aliases": "テレビ東京 ビジネスオンデマンド ニュース モーサテ",
    "note": "日本向け通常料金（税込）。無料体験・追加購入・期間限定割引は含みません。",
    "plans": [
      {
        "id": "p0",
        "name": "ベーシック",
        "amount": 1210,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      },
      {
        "id": "p1",
        "name": "モーサテプレミアム",
        "amount": 3300,
        "cycle": "monthly",
        "channel": "公式・Web",
        "currency": "JPY"
      }
    ],
    "logo": "assets/logos/tvtokyo-biz.png"
  },
  {
    "id": "hulu-disney",
    "name": "Hulu｜Disney+ セットプラン",
    "category": "動画",
    "source": "https://news.hulu.jp/disneyplus_set_03/",
    "checked": "2026-10-05",
    "bundle": true,
    "includes": [
      "Hulu",
      "Disney+"
    ],
    "aliases": "フールー ディズニープラス セット 合体 バンドル",
    "note": "セットに含まれるサービス：Hulu・Disney+。セット全体で1件として登録してください。単独契約も登録すると合計に両方が加算されます。税込通常料金。ポイント還元・期間限定特典は差し引きません。",
    "plans": [
      {
        "id": "p0",
        "name": "スタンダード",
        "amount": 1890,
        "cycle": "monthly",
        "currency": "JPY",
        "channel": "公式・Web"
      },
      {
        "id": "p1",
        "name": "プレミアム",
        "amount": 2150,
        "cycle": "monthly",
        "currency": "JPY",
        "channel": "公式・Web"
      }
    ]
  },
  {
    "id": "dmm-disney",
    "name": "DMM｜Disney+ セットプラン",
    "category": "動画",
    "source": "https://premium.dmm.com/feature/bundle/dmm-disneyplus/",
    "checked": "2026-10-05",
    "bundle": true,
    "includes": [
      "DMM TV",
      "Disney+"
    ],
    "aliases": "DMMTV ディズニープラス セット 合体 バンドル",
    "note": "セットに含まれるサービス：DMM TV・Disney+。セット全体で1件として登録してください。単独契約も登録すると合計に両方が加算されます。税込通常料金。ポイント還元・期間限定特典は差し引きません。",
    "plans": [
      {
        "id": "p0",
        "name": "スタンダード",
        "amount": 1490,
        "cycle": "monthly",
        "currency": "JPY",
        "channel": "公式・Web"
      },
      {
        "id": "p1",
        "name": "プレミアム",
        "amount": 1790,
        "cycle": "monthly",
        "currency": "JPY",
        "channel": "公式・Web"
      }
    ]
  },
  {
    "id": "dmm-dazn",
    "name": "DMM×DAZNホーダイ",
    "category": "動画",
    "source": "https://premium.dmm.com/feature/bundle/dmm-dazn/",
    "checked": "2026-10-05",
    "bundle": true,
    "includes": [
      "DMM TV",
      "DAZN"
    ],
    "aliases": "DMMTV ダゾーン セット 合体 バンドル",
    "note": "セットに含まれるサービス：DMM TV・DAZN。セット全体で1件として登録してください。単独契約も登録すると合計に両方が加算されます。税込通常料金。ポイント還元・期間限定特典は差し引きません。",
    "plans": [
      {
        "id": "p0",
        "name": "DMMプレミアム＋DAZN Standard",
        "amount": 3480,
        "cycle": "monthly",
        "currency": "JPY",
        "channel": "公式・Web"
      }
    ]
  },
  {
    "id": "dmm-pixiv",
    "name": "DMM×pixiv推しホーダイ",
    "category": "動画",
    "source": "https://premium.dmm.com/feature/bundle/dmm-pixiv/",
    "checked": "2026-10-05",
    "bundle": true,
    "includes": [
      "DMM TV",
      "pixivプレミアム"
    ],
    "aliases": "DMMTV ピクシブ セット 合体 バンドル",
    "note": "セットに含まれるサービス：DMM TV・pixivプレミアム。セット全体で1件として登録してください。単独契約も登録すると合計に両方が加算されます。税込通常料金。ポイント還元・期間限定特典は差し引きません。",
    "plans": [
      {
        "id": "p0",
        "name": "DMMプレミアム＋pixivプレミアム",
        "amount": 980,
        "cycle": "monthly",
        "currency": "JPY",
        "channel": "公式・Web"
      }
    ]
  }
];

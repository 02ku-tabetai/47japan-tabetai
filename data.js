// ==========================================
// サイト設定・企画データ
// ==========================================

const SITE_CONFIG = {
  title: "竹辺と一緒に47都道府県 〜美味しいもの見つけよう・食べよう〜",
  subtitle: "Vtuber「竹辺莉央」が毎月ルーレットで決まった都道府県のお土産を「見つけよう」で選び、「食べよう」で実食！\nここは経過と商品を検索できる非公式アーカイブサイトです。",
  playlistId: "PLdS9Xt67FhZc37zpTZ0pQCYrDocpaWdEh",
  disclaimer: "当サイトは非公式ファンサイトであり、本人および所属事務所とは一切関係ありません。",

  // Googleスプレッドシート連携用（「リンクを知っている全員・閲覧者」の共有URLを貼ります）
  sheetItemsCsvUrl: "https://docs.google.com/spreadsheets/d/193yK4RAnHHKavlZMwAaC0JX5S_Xrdd2PRhkdFqh-jq8/edit?gid=1644215093#gid=1644215093",
  sheetEpisodesCsvUrl: "https://docs.google.com/spreadsheets/d/193yK4RAnHHKavlZMwAaC0JX5S_Xrdd2PRhkdFqh-jq8/edit?gid=1483599386#gid=1483599386"
};

// 「竹辺莉央」の紹介
const PROFILE_CONFIG = {
  name: "竹辺 莉央",
  ruby: "Takebe Rio",
  catchcopy: "お料理大好き栄養士VTuber",
  bio: `「今日も1日、すまいり～お！」
LinoRium production所属、お料理大好き栄養士VTuber

夢・モットー： 自分のレシピを書籍化すること！料理を身近に楽しんでもらい、美味しいごはんで笑顔になってほしい！
主な配信： お料理動画・歌・ゲーム・麻雀・作業配信など
企画： 毎月ルーレットで決まった都道府県の定番〜地元民イチオシグルメまで、自分で選んで実食レポする『#47都道府県美味見っけ』を開催中！

「是非ご来店を心よりお待ちしております✨」`,
  tags: ["お料理大好き栄養士VTuber", "海風堂ch.", "LinoRium production", "#47都道府県美味見っけ"],
  illustCaption: ""
};

// ▼ バックアップデータ（スプレッドシートが万が一読めない時に自動で使われます）
const EPISODES = [
  { no: 1,  pref: "北海道", selectUrl: "https://www.youtube.com/watch?v=KHX0WJtYmOg" },
  { no: 2,  pref: "徳島",   selectUrl: "https://www.youtube.com/watch?v=kDFdZ0NVVZE" },
  { no: 3,  pref: "山形",   selectUrl: "https://www.youtube.com/watch?v=YCLCJEAW5YA" },
  { no: 4,  pref: "岩手",   selectUrl: "https://www.youtube.com/watch?v=8oDF10kt1W8" },
  { no: 5,  pref: "高知",   selectUrl: "https://www.youtube.com/watch?v=VThc7nZek9c" },
  { no: 6,  pref: "山口",   selectUrl: "https://www.youtube.com/watch?v=PGHGZeUiMyk" },
  { no: 7,  pref: "香川",   selectUrl: "https://www.youtube.com/watch?v=GVSqMI22ooM" },
  { no: 8,  pref: "青森",   selectUrl: "https://www.youtube.com/watch?v=3abvtsl5OsE" },
  { no: 9,  pref: "愛媛",   selectUrl: "https://www.youtube.com/watch?v=Ly47exNfgEw" },
  { no: 10, pref: "山梨",   selectUrl: "https://www.youtube.com/watch?v=7U1_GnB-ddY" },
  { no: 11, pref: "宮崎",   selectUrl: "https://www.youtube.com/watch?v=IUK2AF85v3g" },
  { no: 12, pref: "宮城",   selectUrl: "https://www.youtube.com/watch?v=z7rE7lqEBxs" },
  { no: 13, pref: "佐賀",   selectUrl: "https://www.youtube.com/watch?v=449-frgYr3k" },
  { no: 14, pref: "千葉",   selectUrl: "https://www.youtube.com/watch?v=KS1LPc5-B2M" },
  { no: 15, pref: "福岡",   selectUrl: "https://www.youtube.com/watch?v=-n-rRzwOaKs", status: "next" }
];

const RAW_CSV_DATA = `
北海道,あんバタサン,https://www.youtube.com/watch?v=4HQJKF_QzjI&t=567s,スイーツ
北海道,よいとまけ,https://www.youtube.com/watch?v=4HQJKF_QzjI&t=1111s,スイーツ
北海道,札幌農学校クッキー,https://www.youtube.com/watch?v=4HQJKF_QzjI&t=1989s,スイーツ
北海道,ねこんぶだし,https://www.youtube.com/watch?v=4HQJKF_QzjI&t=2646s,調味料・ご飯のお供
北海道,ジンギスカンたれ,https://www.youtube.com/watch?v=4HQJKF_QzjI&t=3225s,調味料・ご飯のお供
北海道,ジンギスカンキャラメル,https://www.youtube.com/watch?v=4HQJKF_QzjI&t=3878s,スイーツ
徳島,すだち鯛塩ラーメン,https://www.youtube.com/watch?v=MvH6SsRhQjQ&t=180s,麺・ご飯・スープ
徳島,ぶどう饅頭,https://www.youtube.com/watch?v=MvH6SsRhQjQ&t=876s,スイーツ
徳島,竹ちくわ,https://www.youtube.com/watch?v=MvH6SsRhQjQ&t=1455s,おつまみ・惣菜
徳島,みまから,https://www.youtube.com/watch?v=MvH6SsRhQjQ&t=1984s,調味料・ご飯のお供
山形,ほわいとぱりろーる　さくらんぼ,https://www.youtube.com/watch?v=T1UGYRkNPHY&t=418s,スイーツ
山形,のし梅,https://www.youtube.com/watch?v=T1UGYRkNPHY&t=948s,スイーツ
山形,クラゲドリーム館オリジナル　からから煎餅,https://www.youtube.com/watch?v=T1UGYRkNPHY&t=1608s,スイーツ
山形,うまいたれ,https://www.youtube.com/watch?v=T1UGYRkNPHY&t=2128s,調味料・ご飯のお供
山形,ハナブサ醤油のしょうゆの実,https://www.youtube.com/watch?v=T1UGYRkNPHY&t=2515s,調味料・ご飯のお供
岩手,名代　三色せんべい(南部せんべい),https://www.youtube.com/watch?v=Hl7MH5qnKw8&t=441s,スナック・塩菓子
岩手,奥州ポテト,https://www.youtube.com/watch?v=Hl7MH5qnKw8&t=1318s,スイーツ
岩手,ごま摺り団子,https://www.youtube.com/watch?v=Hl7MH5qnKw8&t=1910s,スイーツ
岩手,弁慶のほろほろ漬け,https://www.youtube.com/watch?v=Hl7MH5qnKw8&t=2440s,調味料・ご飯のお供
岩手,ダイナマイトソース,https://www.youtube.com/watch?v=Hl7MH5qnKw8&t=3028s,調味料・ご飯のお供
高知,南国製菓　塩けんぴ,https://www.youtube.com/watch?v=N26D3dWkmwU&t=163s,スナック・塩菓子
高知,4連パック芋けんぴ,https://www.youtube.com/watch?v=N26D3dWkmwU&t=424s,スナック・塩菓子
高知,まるかじり　しょうが,https://www.youtube.com/watch?v=N26D3dWkmwU&t=716s,おつまみ・惣菜
高知,姫かつおスティック(ゆず),https://www.youtube.com/watch?v=N26D3dWkmwU&t=716s,おつまみ・惣菜
高知,姫かつおスティック(しょうゆ),https://www.youtube.com/watch?v=N26D3dWkmwU&t=716s,おつまみ・惣菜
高知,かんざし,https://www.youtube.com/watch?v=N26D3dWkmwU&t=1560s,スイーツ
高知,野根まんじゅう,https://www.youtube.com/watch?v=N26D3dWkmwU&t=1897s,スイーツ
高知,旨塩ぽん酢,https://www.youtube.com/watch?v=N26D3dWkmwU&t=2295s,調味料・ご飯のお供
高知,にんにくと鰹のうま煮,https://www.youtube.com/watch?v=N26D3dWkmwU&t=2679s,調味料・ご飯のお供
山口,三浦製麺　瓦そば,https://www.youtube.com/watch?v=fRqvl-OJtoY&t=232s,麺・ご飯・スープ
山口,徳山ふくセンター　とらふく刺身,https://www.youtube.com/watch?v=fRqvl-OJtoY&t=776s,おつまみ・惣菜
山口,かまぼこ　白銀,https://www.youtube.com/watch?v=fRqvl-OJtoY&t=1261s,おつまみ・惣菜
山口,本多屋の外郎,https://www.youtube.com/watch?v=fRqvl-OJtoY&t=1806s,スイーツ
山口,国産天然おつまみ　ふぐ,https://www.youtube.com/watch?v=fRqvl-OJtoY&t=2366s,おつまみ・惣菜
山口,ふぐ煎餅,https://www.youtube.com/watch?v=fRqvl-OJtoY&t=2427s,スナック・塩菓子
山口,鶏卵せんべい,https://www.youtube.com/watch?v=fRqvl-OJtoY&t=2793s,スイーツ
山口,月でひろった卵,https://www.youtube.com/watch?v=fRqvl-OJtoY&t=3150s,スイーツ
山口,幸ふくまんじゅう,https://www.youtube.com/watch?v=fRqvl-OJtoY&t=3539s,スイーツ
山口,なみなみとらふくPOTATO（のり塩味）,https://www.youtube.com/watch?v=fRqvl-OJtoY&t=3714s,スナック・塩菓子
山口,ヤマカ醤油　ふぐだしポン酢,https://www.youtube.com/watch?v=fRqvl-OJtoY&t=3894s,調味料・ご飯のお供
山口,井上商店　しそわかめ,https://www.youtube.com/watch?v=fRqvl-OJtoY&t=4369s,調味料・ご飯のお供
山口,うに甚　味噌うに,https://www.youtube.com/watch?v=fRqvl-OJtoY&t=4844s,調味料・ご飯のお供
香川,桜かまど,https://www.youtube.com/watch?v=d4gprjNNxRw&t=617s,スイーツ
香川,讃岐うどん風味棒,https://www.youtube.com/watch?v=d4gprjNNxRw&t=930s,スナック・塩菓子
香川,オリーブサイダー,https://www.youtube.com/watch?v=d4gprjNNxRw&t=1399s,飲み物
香川,さぬき骨付鶏,https://www.youtube.com/watch?v=d4gprjNNxRw&t=1689s,おつまみ・惣菜
香川,UDON　AGETANーさぬき和風カレーー ,https://www.youtube.com/watch?v=d4gprjNNxRw&t=2204s,スナック・塩菓子
香川,クアトロえびチーズ,https://www.youtube.com/watch?v=d4gprjNNxRw&t=2568s,スナック・塩菓子
香川,共栄食糧　食べるオリーブオイル,https://www.youtube.com/watch?v=d4gprjNNxRw&t=3463s,調味料・ご飯のお供
香川,小豆島づくり さわやかオリーブドレッシング,https://www.youtube.com/watch?v=d4gprjNNxRw&t=3824s,調味料・ご飯のお供
香川,黒川のしょうゆ豆,https://www.youtube.com/watch?v=d4gprjNNxRw&t=4053s,おつまみ・惣菜
青森,パティシエのりんごスティック,https://www.youtube.com/watch?v=OGL0_T00JIc&t=245s,スイーツ
青森,らぷる,https://www.youtube.com/watch?v=OGL0_T00JIc&t=676s,スイーツ
青森,干し餅 角（塩味）,https://www.youtube.com/watch?v=OGL0_T00JIc&t=1076s,スナック・塩菓子
青森,甘精堂 昆布羊羹,https://www.youtube.com/watch?v=OGL0_T00JIc&t=1641s,スイーツ
青森,味の加久の屋 いちご煮パック,https://www.youtube.com/watch?v=OGL0_T00JIc&t=1973s,麺・ご飯・スープ
青森,バルサミィアップル,https://www.youtube.com/watch?v=OGL0_T00JIc&t=2595s,調味料・ご飯のお供
青森,八方汁（万能だし）,https://www.youtube.com/watch?v=OGL0_T00JIc&t=3076s,調味料・ご飯のお供
青森,食べるスタミナ源たれ,https://www.youtube.com/watch?v=OGL0_T00JIc&t=3517s,調味料・ご飯のお供
愛媛,山田屋まんじゅう,https://www.youtube.com/watch?v=CfF_FDoUp5E&t=828s,スイーツ
愛媛,あいさと 愛媛鯛めしパック,https://www.youtube.com/watch?v=CfF_FDoUp5E&t=1039s,麺・ご飯・スープ
愛媛,手押しじゃこ天,https://www.youtube.com/watch?v=CfF_FDoUp5E&t=1334s,おつまみ・惣菜
愛媛,ベビー母恵夢 愛媛のみかん,https://www.youtube.com/watch?v=CfF_FDoUp5E&t=1801s,スイーツ
愛媛,生母恵夢 瀬戸内レモン,https://www.youtube.com/watch?v=CfF_FDoUp5E&t=2043s,スイーツ
愛媛,一六名物しょうゆ餅,https://www.youtube.com/watch?v=CfF_FDoUp5E&t=2353s,スイーツ
愛媛,坊っちゃん団子,https://www.youtube.com/watch?v=CfF_FDoUp5E&t=2666s,スイーツ
愛媛,ひとくち生志ぐれ,https://www.youtube.com/watch?v=CfF_FDoUp5E&t=2905s,スイーツ
愛媛,旬のちゅうちゅうゼリー せとか,https://www.youtube.com/watch?v=CfF_FDoUp5E&t=3194s,スイーツ
愛媛,かどやの宇和島鯛めしのタレ,https://www.youtube.com/watch?v=CfF_FDoUp5E&t=3660s,調味料・ご飯のお供
愛媛,塩みかん　完熟,https://www.youtube.com/watch?v=CfF_FDoUp5E&t=4161s,調味料・ご飯のお供
山梨,プレミアム桔梗信玄餅アイス,https://www.youtube.com/watch?v=-4mSAZG4zc4&t=389s,スイーツ
山梨,はまなし,https://www.youtube.com/watch?v=-4mSAZG4zc4&t=671s,スイーツ
山梨,くろ玉,https://www.youtube.com/watch?v=-4mSAZG4zc4&t=1087s,スイーツ
山梨,時のなる木 ソフトタイプ,https://www.youtube.com/watch?v=-4mSAZG4zc4&t=1524s,スイーツ
山梨,時のなる木 ハードタイプ,https://www.youtube.com/watch?v=-4mSAZG4zc4&t=2023s,スイーツ
山梨,横内製麺 吉田のうどん,https://www.youtube.com/watch?v=-4mSAZG4zc4&t=2374s,麺・ご飯・スープ
山梨,すりだね,https://www.youtube.com/watch?v=-4mSAZG4zc4&t=3225s,調味料・ご飯のお供
宮崎,へべす地サイダー,https://www.youtube.com/watch?v=Qqy58qMurdA&t=480s,飲み物
宮崎,飲むマンゴープリン,https://www.youtube.com/watch?v=Qqy58qMurdA&t=682s,飲み物
宮崎,宮崎マンゴー大福,https://www.youtube.com/watch?v=Qqy58qMurdA&t=1015s,スイーツ
宮崎,おひさまチーズまんじゅう,https://www.youtube.com/watch?v=Qqy58qMurdA&t=1371s,スイーツ
宮崎,肉巻きおにぎり,https://www.youtube.com/watch?v=Qqy58qMurdA&t=1758s,麺・ご飯・スープ
宮崎,宮崎キャビア1983,https://www.youtube.com/watch?v=Qqy58qMurdA&t=2413s,おつまみ・惣菜
宮崎,J.CAVIARウォッカ,https://www.youtube.com/watch?v=Qqy58qMurdA&t=2731s,飲み物
宮崎,おび天,https://www.youtube.com/watch?v=Qqy58qMurdA&t=3085s,おつまみ・惣菜
宮崎,洋風チーズ饅頭,https://www.youtube.com/watch?v=Qqy58qMurdA&t=3454s,スイーツ
宮崎,チーズ饅頭塩キャラメル,https://www.youtube.com/watch?v=Qqy58qMurdA&t=3708s,スイーツ
宮崎,宮崎レモンケーキ,https://www.youtube.com/watch?v=Qqy58qMurdA&t=4190s,スイーツ
宮崎,極上スパイス「喜」,https://www.youtube.com/watch?v=Qqy58qMurdA&t=4977s,調味料・ご飯のお供
宮崎,チキン南蛮たれ,https://www.youtube.com/watch?v=Qqy58qMurdA&t=5281s,調味料・ご飯のお供
宮崎,これまでにない卵かけご飯が食べられるようになる醤油,https://www.youtube.com/watch?v=Qqy58qMurdA&t=5552s,調味料・ご飯のお供
宮城,ずんだシェイク,https://www.youtube.com/watch?v=zA-mOM6ubu4&t=468s,飲み物
宮城,ずんだ餅,https://www.youtube.com/watch?v=zA-mOM6ubu4&t=777s,スイーツ
宮城,ふかひれ濃縮スープ,https://www.youtube.com/watch?v=zA-mOM6ubu4&t=1192s,麺・ご飯・スープ
宮城,喜久福（ずんだ生クリーム）,https://www.youtube.com/watch?v=zA-mOM6ubu4&t=1625s,スイーツ
宮城,喜久福（抹茶生クリーム）,https://www.youtube.com/watch?v=zA-mOM6ubu4&t=1871s,スイーツ
宮城,喜久福（ほうじ茶生クリーム）,https://www.youtube.com/watch?v=zA-mOM6ubu4&t=2021s,スイーツ
宮城,笹かまぼこ（馬上かまぼこ店）,https://www.youtube.com/watch?v=zA-mOM6ubu4&t=2416s,おつまみ・惣菜
宮城,チーズボール ,https://www.youtube.com/watch?v=zA-mOM6ubu4&t=2669s,おつまみ・惣菜
宮城,浦上和子のしそ巻き,https://www.youtube.com/watch?v=zA-mOM6ubu4&t=2992s,調味料・ご飯のお供
宮城,くるみゆべし,https://www.youtube.com/watch?v=zA-mOM6ubu4&t=3589s,スイーツ
宮城,ほや味付,https://www.youtube.com/watch?v=zA-mOM6ubu4&t=3981s,おつまみ・惣菜
宮城,萩の月,https://www.youtube.com/watch?v=zA-mOM6ubu4&t=4571s,スイーツ
宮城,牛タン仙台ラー油,https://www.youtube.com/watch?v=zA-mOM6ubu4&t=4872s,調味料・ご飯のお供
宮城,よっちゃんなんばん,https://www.youtube.com/watch?v=zA-mOM6ubu4&t=5400s,調味料・ご飯のお供
佐賀,ドライブイン鳥 鳥スープ,https://www.youtube.com/watch?v=FGFLPF_rTMA&t=361s,麺・ご飯・スープ
佐賀,いかチーズボール,https://www.youtube.com/watch?v=FGFLPF_rTMA&t=658s,おつまみ・惣菜
佐賀,白玉饅頭,https://www.youtube.com/watch?v=FGFLPF_rTMA&t=1046s,スイーツ
佐賀,逸口香,https://www.youtube.com/watch?v=FGFLPF_rTMA&t=1684s,スイーツ
佐賀,ポリポリむつごろう,https://www.youtube.com/watch?v=FGFLPF_rTMA&t=2157s,おつまみ・惣菜
佐賀,いかしゅうまい,https://www.youtube.com/watch?v=FGFLPF_rTMA&t=2545s,おつまみ・惣菜
佐賀,わらすぼ醤油煮,https://www.youtube.com/watch?v=FGFLPF_rTMA&t=3017s,おつまみ・惣菜
佐賀,さが錦,https://www.youtube.com/watch?v=FGFLPF_rTMA&t=3523s,スイーツ
佐賀,ドライブイン鳥 鳥めしの素,https://www.youtube.com/watch?v=FGFLPF_rTMA&t=4075s,麺・ご飯・スープ
佐賀,ドライブイン鳥 うまいたれ,https://www.youtube.com/watch?v=FGFLPF_rTMA&t=4453s,調味料・ご飯のお供
千葉,マックスコーヒー,https://www.youtube.com/watch?v=EoXbENJ48Hw&t=842s,飲み物
千葉,ピーナツキング,https://www.youtube.com/watch?v=EoXbENJ48Hw&t=842s,スイーツ
千葉,スマイルピーナツキングジュニア,https://www.youtube.com/watch?v=EoXbENJ48Hw&t=1636s,スイーツ
千葉,ピーナツクイーン,https://www.youtube.com/watch?v=EoXbENJ48Hw&t=2164s,スイーツ
千葉,なごみるく,https://www.youtube.com/watch?v=EoXbENJ48Hw&t=2599s,スイーツ
千葉,ピーナツ王子 塩レモン,https://www.youtube.com/watch?v=EoXbENJ48Hw&t=2960s,スイーツ
千葉,ふたいろ羹 林檎,https://www.youtube.com/watch?v=EoXbENJ48Hw&t=3393s,スイーツ
千葉,ピーナッツみそまんじゅう,https://www.youtube.com/watch?v=EoXbENJ48Hw&t=3959s,スイーツ
千葉,ぴーなっつ最中,https://www.youtube.com/watch?v=EoXbENJ48Hw&t=4453s,スイーツ
千葉,殻付き塩ゆでおおまさり,https://www.youtube.com/watch?v=EoXbENJ48Hw&t=5022s,おつまみ・惣菜
千葉,ピーナツペーストドレッシング,https://www.youtube.com/watch?v=EoXbENJ48Hw&t=5657s,調味料・ご飯のお供
千葉,ネギイチバン,https://www.youtube.com/watch?v=EoXbENJ48Hw&t=6001s,調味料・ご飯のお供
千葉,マッシュルームイチバン,https://www.youtube.com/watch?v=EoXbENJ48Hw&t=6377s,調味料・ご飯のお供
`;
// ==========================================
// サイト設定・企画データ
// ==========================================

const SITE_CONFIG = {
  title: "竹辺と一緒に47都道府県 〜美味しいもの見つけよう・食べよう〜",
  subtitle: "Vtuber「竹辺莉央」が毎月ルーレットで決まった都道府県のお土産を「見つけよう」で選び、「食べよう」で実食！\nここは経過と商品を検索できる非公式アーカイブサイトです。",
  playlistId: "PLdS9Xt67FhZc37zpTZ0pQCYrDocpaWdEh",
  disclaimer: "当サイトは非公式ファンサイトであり、本人および所属事務所とは一切関係ありません。",

  // ▼ Googleスプレッドシート連携用（使わないときは "" のままでOK）
  sheetItemsCsvUrl: "https://docs.google.com/spreadsheets/d/193yK4RAnHHKavlZMwAaC0JX5S_Xrdd2PRhkdFqh-jq8/edit?gid=1644215093#gid=1644215093",    // 商品リスト用シートのCSV公開URL
  sheetEpisodesCsvUrl: "https://docs.google.com/spreadsheets/d/193yK4RAnHHKavlZMwAaC0JX5S_Xrdd2PRhkdFqh-jq8/edit?gid=1483599386#gid=1483599386"  // 開催順（見つけよう）用シートのCSV公開URL（任意）
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
  illustCaption: "" // 不要な場合は "" にしてください
};

// 中身を空の [] にする
const EPISODES = [];

// バッククォート `` の中身を空にする
const RAW_CSV_DATA = ``;
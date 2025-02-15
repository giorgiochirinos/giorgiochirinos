const container = document.querySelector(".row");
let column = null;
let videoList = {};
let videoElem = null;
let track = null;
column = document.createElement('DIV')
im = new Image();
im.src = `https://static.sonicbowl.cloud/img/podcast/5f943cf5-7d2c-4349-9ed6-0db8b1522437-20241013235131.jpg`;
im.alt = `グローバルニュース DAILY BRIEF supported by GRIC2024`;
column.appendChild(im);
column.id = `1`;
videoElem = document.createElement('VIDEO');
videoElem.id = `1`;
videoElem.src = `https://feed.sonicbowl.cloud/audio/d6d2d648-f292-48bc-b1f3-6f8cb3af0278/audio.mp3?updated=1726098614`;
track = videoElem.addTextTrack('subtitles', 'japanese', 'ja');
track.mode = 'showing';
track.addCue(new VTTCue(3.73, 6.99, `NHK ポッドキャスト`));
track.addCue(new VTTCue(10.95, 20.33, `イスラエルとイスラム組織ハマスの戦闘が続くガザ地区では、ポリオの感染拡大が懸念され、国連機関が対策を進めています。`));
track.addCue(new VTTCue(20.83, 26.31, `その最新の状況について、エルサレム市局の田村祐介記者に聞きます。`));
track.addCue(new VTTCue(27.17, 28.41, `田村さん、おはようございます。`));
track.addCue(new VTTCue(29.95, 30.75, `おはようございます。`));
track.addCue(new VTTCue(30.75, 36.01, `ガザ地区では、イスラエルとハマスの戦闘が11ヶ月続いています。`));
track.addCue(new VTTCue(36.27, 44.65, `現地ではポリオの感染拡大も懸念されるほど、衛生状況の悪化が深刻だということですけれども、今どのような状況ですか?`));
track.addCue(new VTTCue(46.21, 52.91, `はい、戦闘が続く中、ガザ地区では多くの人がテントでの避難生活を今も余儀なくされています。`));
track.addCue(new VTTCue(53.49, 63.91, `清潔な飲み水の確保が難しく、さらにゴミの処理もできないため、各地にはゴミが大きな山のように積み上がっていて、衛生状態は悪いままです。`));
track.addCue(new VTTCue(64.81, 73.35, `また、多くの医療機関が被害を受けていて、戦闘が始まる前は当たり前だった予防接種を受けられない子どもも多く、`));
track.addCue(new VTTCue(73.67, 79.97, `そうした中、今年5月にはガザ地区で25年ぶりにポリオの感染例が確認されました。`));
track.addCue(new VTTCue(80.59, 89.99, `ポリオは主に乳幼児が感染し、発症すると手足に麻痺が残ることもありますが、ワクチン接種を受ければ感染を予防できる病気です。`));
track.addCue(new VTTCue(90.63, 95.71, `防げるはずの病気に感染してしまうのは本来あってはならないことですよね。`));
track.addCue(new VTTCue(96.37, 101.73, `そのためにポリオのワクチン接種が始まりましたけれども、現状はどうなっていますか?`));
track.addCue(new VTTCue(102.75, 110.11, `はい、今月1日から地域と時間を限定してイスラエルとハマスが戦闘を一時休止し、`));
track.addCue(new VTTCue(110.23, 116.19, `それに伴って国連機関がポリオのワクチン接種を進める取り組みが始まっています。`));
track.addCue(new VTTCue(116.55, 122.23, `ガザ地区の中部や南部で接種が行われ、東海からは北部でも接種が始まっています。`));
track.addCue(new VTTCue(123.17, 128.35, `これまでに44万人以上の子どもが接種を受けるなど順調に進んでいるということです。`));
track.addCue(new VTTCue(129.17, 135.45, `実はこの接種に最前線で支援に当たっている日本人の国連職員がいます。`));
track.addCue(new VTTCue(135.95, 141.83, `あるは国連パレスチナ難民救済事業機関の瀬田昭博さんは、`));
track.addCue(new VTTCue(142.03, 146.71, `ガザ地区で保健部門のトップとしてワクチン接種の指揮に当たっています。`));
track.addCue(new VTTCue(147.23, 149.63, `現地にいる瀬田さんに話を聞きますと、`));
track.addCue(new VTTCue(149.83, 154.77, `危険と隣り合わせの環境でも子どもを感染症から守りたいという思いから、`));
track.addCue(new VTTCue(154.77, 160.53, `多くの親が子どもを連れて診療所に長い列を作っていたということでした。`));
track.addCue(new VTTCue(160.83, 163.25, `かつての日常を取り戻したいとの思いから、`));
track.addCue(new VTTCue(163.73, 168.95, `いつもより着飾った子どもを連れた親も多く、明るい雰囲気が見られたということでした。`));
track.addCue(new VTTCue(170.13, 174.11, `ただ、停戦に向けてはなかなか進展がないと伝えられています。`));
track.addCue(new VTTCue(174.75, 177.89, `ガザ地区での戦闘いつまで続くんでしょうか?`));
track.addCue(new VTTCue(179.21, 184.07, `はい。停戦と人質の解放に向けた協議は今も難航していて、`));
track.addCue(new VTTCue(184.43, 186.71, `すぐに合意する見通しは立っていません。`));
track.addCue(new VTTCue(187.67, 192.09, `今回のワクチン接種に伴う戦闘の一時休止は期限付きのもので、`));
track.addCue(new VTTCue(192.61, 196.13, `4週間後には2回目の接種が行われるとして、`));
track.addCue(new VTTCue(196.31, 200.13, `国連機関は再び戦闘が中止されることに期待を示しています。`));
track.addCue(new VTTCue(200.99, 202.99, `ただ、現地で支援に当たる瀬田さんは、`));
track.addCue(new VTTCue(203.59, 207.17, `今回のワクチン接種に伴う戦闘の一時休止は、`));
track.addCue(new VTTCue(207.17, 209.81, `人々の命のためにイクラエルとハマスが、`));
track.addCue(new VTTCue(209.83, 212.93, `戦闘を止めることができるという例になるとして、`));
track.addCue(new VTTCue(213.25, 217.31, `完全な停戦が一刻も早く実現してほしいと訴えていました。`));
track.addCue(new VTTCue(218.61, 221.69, `はい。エルサレル資局の田村祐介記者に聞きました。`));
track = videoElem.addTextTrack('subtitles', 'spanish', 'sp');
track.mode = 'showing';
track.addCue(new VTTCue(0.0, 40.687, `Made By Giorgio Chirinos`));
track.addCue(new VTTCue(47.021, 49.729, `Mel, kau baik-baik saja?`));
track.addCue(new VTTCue(67.896, 68.729, `Tidak apa-apa.`));
track.addCue(new VTTCue(95.812, 96.646, `Tidak.`));
track.addCue(new VTTCue(101.896, 103.896, `- Kau terluka?
- Aku baik-baik saja.`));
track.addCue(new VTTCue(108.312, 109.854, `Pergilah.`));
track.addCue(new VTTCue(354.021, 355.771, `Dia wanita yang hebat.`));
track.addCue(new VTTCue(355.771, 357.271, `Teman yang baik.`));
track.addCue(new VTTCue(358.479, 361.479, `Entah bagaimana kita menghadapi
krisis ini tanpanya.`));
track.addCue(new VTTCue(370.021, 373.104, `Kita hampir memperpanjang kedaulatan`));
track.addCue(new VTTCue(373.687, 375.562, `kepada makhluk yang melakukan ini.`));
track.addCue(new VTTCue(377.354, 379.312, `Kita ditugaskan
untuk menegakkan ketertiban.`));
track.addCue(new VTTCue(380.479, 382.562, `Tapi kita telah lalai.`));
track.addCue(new VTTCue(383.104, 384.479, `Aku telah sadar.`));
track.addCue(new VTTCue(385.021, 387.187, `Tidak akan ada lagi dongeng perdamaian`));
track.addCue(new VTTCue(387.187, 390.104, `sampai kita menumpas para iblis
dari basemen kita.`));
track.addCue(new VTTCue(390.979, 394.021, `Kau baik sekali membantu Dewan Salo, Ibu.`));
track.addCue(new VTTCue(394.604, 396.104, `Karena kita sedang berperang,`));
track.addCue(new VTTCue(396.104, 400.271, `kupikir bijaksana untuk meminta saran
dari veteran berpengalaman.`));
track.addCue(new VTTCue(401.146, 403.729, `Mari kita bahas masalah saat ini.`));
track.addCue(new VTTCue(403.729, 406.187, `Rakyat kita takut, menderita.`));
track.addCue(new VTTCue(406.187, 409.604, `Mereka harus tahu pemimpin mereka
bisa mengendalikan situasi.`));
track.addCue(new VTTCue(409.604, 411.687, `Pamer kekuatan
yang belum pernah dilakukan.`));
track.addCue(new VTTCue(411.687, 416.146, `Kita banjiri kota bawah dengan Enforcer,
dipersenjatai Hextech.`));
track.addCue(new VTTCue(416.146, 418.687, `Orang tak bersalah akan terjebak
dalam baku tembak.`));
track.addCue(new VTTCue(418.687, 422.104, `Berapa banyak lagi anggota dewan
yang harus diledakkan sebelum kau sadar?`));
track.addCue(new VTTCue(422.104, 423.354, `Kita dikepung.`));
track.addCue(new VTTCue(427.979, 429.354, `Sedang apa dia di sini?`));
track.addCue(new VTTCue(429.896, 432.312, `Petugas Kiramman menyaksikan
serangan itu langsung.`));
track.addCue(new VTTCue(432.312, 435.729, `Dia memastikan
ini tindakan satu orang gila.`));
track.addCue(new VTTCue(436.312, 437.271, `Jinx.`));
track.addCue(new VTTCue(437.271, 438.396, `Silco sudah mati.`));
track.addCue(new VTTCue(438.396, 440.479, `Kota bawah tanah tak punya pemimpin.`));
track.addCue(new VTTCue(440.479, 443.604, `Jika mengikuti rencanamu,
mereka bisa bersatu melawan kita.`));
track.addCue(new VTTCue(443.604, 445.229, `Jadi, apa solusimu?`));
track.addCue(new VTTCue(445.229, 446.146, `Hukuman?`));
track.addCue(new VTTCue(446.687, 447.896, `Teguran tegas?`));
track.addCue(new VTTCue(447.896, 450.062, `Kita gunakan perpecahan
untuk melawan mereka.`));
track.addCue(new VTTCue(450.062, 451.646, `Salahkan Jinx,`));
track.addCue(new VTTCue(451.646, 454.396, `pasang imbalan sangat besar
yang tak bisa diabaikan.`));
track.addCue(new VTTCue(454.396, 455.396, `Maaf, Mel.`));
track.addCue(new VTTCue(455.396, 458.521, `Aku tidak nyaman memercayakan
takdir kita pada ketidakpastian.`));
track.addCue(new VTTCue(458.521, 460.146, `Jinx terbukti sulit ditangkap.`));
track.addCue(new VTTCue(460.146, 463.854, `Kita baru bisa mulai pulih
setelah dia diadili.`));
track.addCue(new VTTCue(468.229, 471.646, `Kalau begitu, kita sepakat,
dua lawan satu.`));
track.addCue(new VTTCue(472.312, 473.396, `Kita menyerang.`));
track.addCue(new VTTCue(477.562, 478.979, `Jika boleh berpendapat...`));
track.addCue(new VTTCue(478.979, 480.521, `Dalam krisis seperti ini,`));
track.addCue(new VTTCue(480.521, 484.396, `sangat penting kalian terlihat kompak
di depan publik,`));
track.addCue(new VTTCue(484.396, 486.562, `apa pun perasaan pribadi kalian.`));
track.addCue(new VTTCue(489.021, 490.146, `Bijaksana sekali.`));
track.addCue(new VTTCue(492.396, 494.229, `Aku setuju mendukung serangan itu.`));
track.addCue(new VTTCue(496.271, 498.521, `Tapi aku membuat batasan di Hextech.`));
track.addCue(new VTTCue(499.521, 501.187, `Kita punya etos.`));
track.addCue(new VTTCue(501.187, 504.187, `Serangan seperti itu
harus menjadi pilihan terakhir.`));
track.addCue(new VTTCue(505.729, 506.896, `Setuju.`));
track.addCue(new VTTCue(508.812, 511.729, `Kalau begitu, kita sepakat,
dua lawan satu.`));
track.addCue(new VTTCue(585.146, 586.937, `Aku punya kesempatan.`));
track.addCue(new VTTCue(600.812, 603.187, `Ibumu meninggalkan ini untukmu.`));
track.addCue(new VTTCue(604.937, 606.104, `Kunci Kiramman?`));
track.addCue(new VTTCue(606.687, 608.104, `Tidak, aku bukan...`));
track.addCue(new VTTCue(609.062, 610.437, `Aku tidak pantas menerimanya.`));
track.addCue(new VTTCue(610.437, 613.146, `Kini itu warisanmu, Caitlyn.`));
track.addCue(new VTTCue(629.146, 631.062, `Kenapa dia masih di sini?`));
track.addCue(new VTTCue(655.562, 656.396, `Hei.`));
track.addCue(new VTTCue(679.729, 680.979, `Kau benar, Cait.`));
track.addCue(new VTTCue(681.521, 682.937, `Powder sudah tak ada.`));
track.addCue(new VTTCue(684.562, 685.937, `Aku bisa memperbaiki ini.`));
track.addCue(new VTTCue(685.937, 688.229, `Jika kau minta Jayce
memperbaiki sarung tangan,`));
track.addCue(new VTTCue(688.229, 689.812, `aku bisa melakukannya sendiri.`));
track.addCue(new VTTCue(689.812, 691.687, `Tak ada lagi yang perlu terluka.`));
track.addCue(new VTTCue(692.229, 693.146, `Tidak.`));
track.addCue(new VTTCue(693.146, 694.771, `Tak ada lagi misi liar.`));
track.addCue(new VTTCue(694.771, 696.896, `Tak ada lagi rencana ceroboh.`));
track.addCue(new VTTCue(696.896, 698.271, `Ibuku benar.`));
track.addCue(new VTTCue(698.271, 700.896, `Kesombonganku membuatku serakah,`));
track.addCue(new VTTCue(700.896, 702.521, `dan dia menanggung akibatnya.`));
track.addCue(new VTTCue(706.604, 708.854, `Mereka mengirim semua Enforcer
untuk mengejar Jinx.`));
track.addCue(new VTTCue(710.021, 711.396, `Aku akan ikut mereka.`));
track.addCue(new VTTCue(711.979, 714.146, `Kumohon, aku harus membantu.`));
track.addCue(new VTTCue(714.771, 715.604, `Kau bisa bantu.`));
track.addCue(new VTTCue(724.104, 725.021, `Sebagai bagian dari kami.`));
track.addCue(new VTTCue(725.854, 728.354, `Cait, aku tak bisa memakai ini.`));
track.addCue(new VTTCue(728.354, 729.812, `Rakyat ingin darah.`));
track.addCue(new VTTCue(730.521, 731.937, `Dewan takkan hentikan mereka.`));
track.addCue(new VTTCue(731.937, 734.979, `Kau bisa tunjukkan
bahwa tak semua Zaun mendukung Jinx.`));
track.addCue(new VTTCue(735.979, 737.021, `Kita bisa tunjukkan.`));
track.addCue(new VTTCue(738.062, 738.979, `Bersama.`));
track.addCue(new VTTCue(739.562, 741.312, `Aku lihat mereka membunuh orang tuaku.`));
track.addCue(new VTTCue(741.312, 743.562, `Kau tahu bagaimana rasanya?`));
track.addCue(new VTTCue(743.562, 744.479, `Ya.`));
track.addCue(new VTTCue(744.479, 745.562, `Aku tahu.`));
track.addCue(new VTTCue(750.396, 752.312, `Kupikir kau di pihak kami.`));
track.addCue(new VTTCue(753.396, 754.812, `Kau tak berpikir begitu.`));
track.addCue(new VTTCue(790.021, 791.812, `Hei, hati-hati.`));
track.addCue(new VTTCue(793.937, 794.854, `Maaf.`));
track.addCue(new VTTCue(798.437, 799.687, `Bukan yang pertama.`));
track.addCue(new VTTCue(805.187, 806.354, `Kau baik-baik saja?`));
track.addCue(new VTTCue(821.604, 822.687, `Kau`));
track.addCue(new VTTCue(822.687, 824.854, `kehilangan seseorang dalam serangan itu?`));
track.addCue(new VTTCue(853.312, 854.396, `Bagaimana keadaannya?`));
track.addCue(new VTTCue(854.979, 856.937, `Sama seperti sebelumnya. Bernapas.`));
track.addCue(new VTTCue(858.146, 859.604, `Denyut nadi konsisten.`));
track.addCue(new VTTCue(860.562, 861.646, `Selain itu,`));
track.addCue(new VTTCue(862.687, 864.187, `aku juga tidak tahu.`));
track.addCue(new VTTCue(880.437, 881.979, `Apa yang ia lakukan padanya?`));
track.addCue(new VTTCue(884.729, 886.937, `Hexcore berevolusi.`));
track.addCue(new VTTCue(886.937, 890.187, `Bergeser melalui pola rune
lebih cepat dari yang bisa kuikuti.`));
track.addCue(new VTTCue(890.187, 892.812, `Yang kutahu pasti adalah
itu menjaganya tetap hidup.`));
track.addCue(new VTTCue(894.604, 897.479, `Itu teka-teki yang akan disukai Viktor,
jika dia tidak...`));
track.addCue(new VTTCue(901.812, 904.187, `Seharusnya aku yang di sana, bukan dia.`));
track.addCue(new VTTCue(905.229, 906.479, `Jangan bilang begitu.`));
track.addCue(new VTTCue(907.521, 909.354, `Dia akan kembali kepada kita.`));
track.addCue(new VTTCue(909.354, 911.854, `Aku masih tidak mengerti.`));
track.addCue(new VTTCue(911.854, 913.354, `Dia tepat di sampingku.`));
track.addCue(new VTTCue(913.354, 916.687, `Bagaimana ledakan bisa melakukan itu
kepadanya, sedangkan aku`));
track.addCue(new VTTCue(916.687, 918.729, `keluar tanpa terluka?`));
track.addCue(new VTTCue(923.854, 926.229, `Hal-hal ini tak masuk akal, Jayce.`));
track.addCue(new VTTCue(928.354, 929.687, `Bagaimana dengan Dewan?`));
track.addCue(new VTTCue(931.104, 932.479, `Ibuku ikut bermain.`));
track.addCue(new VTTCue(934.562, 936.896, `Salo sudah termakan pengaruhnya.`));
track.addCue(new VTTCue(936.896, 939.854, `Memanfaatkan kesedihannya
untuk mengincar Hextech.`));
track.addCue(new VTTCue(941.229, 943.521, `Mel, aku berjanji kepada Viktor.`));
track.addCue(new VTTCue(943.521, 944.812, `Tidak akan pernah lagi.`));
track.addCue(new VTTCue(945.396, 946.396, `Tak apa-apa.`));
track.addCue(new VTTCue(946.396, 947.437, `Sudah kutangani.`));
track.addCue(new VTTCue(947.437, 949.854, `Aku tidak akan membiarkan mereka
merusak impianmu.`));
track.addCue(new VTTCue(955.771, 956.854, `Caitlyn ada di sana.`));
track.addCue(new VTTCue(957.437, 958.979, `Kau mungkin perlu mengunjunginya.`));
track.addCue(new VTTCue(958.979, 962.687, `Dia menyembunyikannya dengan baik,
tapi dia sangat menderita.`));
track.addCue(new VTTCue(1013.479, 1014.479, `<i>Hei, Sprout.</i>`));
track.addCue(new VTTCue(1019.396, 1020.646, `Bagaimana kau menemukanku?`));
track.addCue(new VTTCue(1020.646, 1021.562, `Ayahmu.`));
track.addCue(new VTTCue(1023.979, 1026.979, `Ibu dan aku biasa datang ke sini
saat kami butuh pelarian.`));
track.addCue(new VTTCue(1028.521, 1030.771, `Salah satu tempat
kami tak pernah bertengkar.`));
track.addCue(new VTTCue(1031.354, 1033.437, `Maaf aku tak ada belakangan ini.`));
track.addCue(new VTTCue(1035.396, 1036.479, `Bagaimana Viktor?`));
track.addCue(new VTTCue(1040.062, 1042.271, `Aku bahkan tak tahu apa dia masih hidup.`));
track.addCue(new VTTCue(1043.562, 1045.062, `Sejak itu terjadi...`));
track.addCue(new VTTCue(1047.021, 1049.729, `tiga wajah terus berputar di benakku.`));
track.addCue(new VTTCue(1052.521, 1053.396, `Aku melihat Ibu.`));
track.addCue(new VTTCue(1054.479, 1055.604, `Saat dia ditemukan.`));
track.addCue(new VTTCue(1056.396, 1058.854, `Seluruh tubuhku tenggelam,`));
track.addCue(new VTTCue(1058.854, 1061.312, `seperti batu yang ditelan air gelap.`));
track.addCue(new VTTCue(1062.646, 1064.271, `Tapi kemudian ada Jinx.`));
track.addCue(new VTTCue(1064.854, 1065.729, `Tertawa.`));
track.addCue(new VTTCue(1066.979, 1069.729, `Aku ingin merobek tawa itu
dari tenggorokannya selamanya.`));
track.addCue(new VTTCue(1069.729, 1070.646, `Cait.`));
track.addCue(new VTTCue(1071.312, 1072.146, `Aku tahu.`));
track.addCue(new VTTCue(1072.146, 1073.896, `Kini aku mengerti`));
track.addCue(new VTTCue(1073.896, 1076.021, `betapa mudahnya membenci mereka.`));
track.addCue(new VTTCue(1076.021, 1077.812, `Satu tindakan kejam.`));
track.addCue(new VTTCue(1080.854, 1082.271, `Lalu aku melihat Vi.`));
track.addCue(new VTTCue(1084.312, 1086.354, `Aku memintanya memakai seragam.`));
track.addCue(new VTTCue(1086.354, 1088.812, `Bisa dibilang, dia menolak.`));
track.addCue(new VTTCue(1089.396, 1091.396, `Vi? Memakai lencana?`));
track.addCue(new VTTCue(1091.979, 1095.687, `Dia pikir sarung tanganmu
akan menyelesaikan semua masalahnya.`));
track.addCue(new VTTCue(1098.021, 1099.437, `Bagaimana jika dia benar?`));
track.addCue(new VTTCue(1100.937, 1103.104, `Hextech mungkin menjaga kita
tetap hidup, Jayce,`));
track.addCue(new VTTCue(1103.104, 1105.021, `tapi tak akan menyelamatkan kita.`));
track.addCue(new VTTCue(1113.937, 1114.771, `Aku.`));
track.addCue(new VTTCue(1115.562, 1117.229, `Bergabung dengan patroli kacang.`));
track.addCue(new VTTCue(1118.312, 1120.562, `Padahal kukira dia tak punya selera humor.`));
track.addCue(new VTTCue(1122.312, 1123.562, `Aku suka kacang.`));
track.addCue(new VTTCue(1123.562, 1124.812, `Ayahnya benar.`));
track.addCue(new VTTCue(1124.812, 1127.062, `Tidak ada gunanya tetap di sini.`));
track.addCue(new VTTCue(1129.896, 1130.729, `Tapi`));
track.addCue(new VTTCue(1131.271, 1133.396, `aku yang menciptakan monster itu.`));
track.addCue(new VTTCue(1138.937, 1139.771, `Vi?`));
track.addCue(new VTTCue(1148.271, 1149.187, `Siapa kau?`));
track.addCue(new VTTCue(1149.854, 1151.896, `Bagaimana kau tahu namaku?`));
track.addCue(new VTTCue(1152.979, 1154.354, `Petugas Junior Nolen.`));
track.addCue(new VTTCue(1155.062, 1156.271, `Maddie.`));
track.addCue(new VTTCue(1156.271, 1157.354, `Dan...`));
track.addCue(new VTTCue(1158.479, 1160.437, `itu tertulis di wajahmu.`));
track.addCue(new VTTCue(1164.521, 1165.604, `Jadi, ada apa?`));
track.addCue(new VTTCue(1165.604, 1166.687, `Penggeledahan acak?`));
track.addCue(new VTTCue(1166.687, 1168.521, `Mengawal keluar dari properti?`));
track.addCue(new VTTCue(1169.229, 1171.104, `Atau hanya mau membuang waktuku?`));
track.addCue(new VTTCue(1171.646, 1173.312, `Penggeledahan? Tidak.`));
track.addCue(new VTTCue(1173.312, 1174.479, `Tidak.`));
track.addCue(new VTTCue(1174.479, 1178.271, `Kau semacam legenda di antara Enforcer.`));
track.addCue(new VTTCue(1178.271, 1182.229, `Caitlyn membuat keributan di kantor polisi
saat pendaftaranmu ditolak.`));
track.addCue(new VTTCue(1182.771, 1184.062, `Kini aku harus bertanya.`));
track.addCue(new VTTCue(1184.604, 1185.562, `Apa semua itu benar?`));
track.addCue(new VTTCue(1185.562, 1188.729, `Kau mengejar Silco sendirian
saat Dewan tidak mendukungmu?`));
track.addCue(new VTTCue(1188.729, 1190.271, `Melawan seluruh gengnya?`));
track.addCue(new VTTCue(1191.896, 1193.312, `Cait bilang semua itu?`));
track.addCue(new VTTCue(1193.312, 1194.604, `Dia bilang,`));
track.addCue(new VTTCue(1194.604, 1197.104, `jika setiap Enforcer punya hati sepertimu,`));
track.addCue(new VTTCue(1197.104, 1198.979, `kita bisa melawan Noxus.`));
track.addCue(new VTTCue(1200.271, 1202.812, `Lalu dia mengancam
menarik pendanaan keluarganya.`));
track.addCue(new VTTCue(1203.354, 1206.146, `Bagaimanapun, aku senang kau bergabung.`));
track.addCue(new VTTCue(1209.521, 1211.729, `Setelah sherif mengkhianati kita,`));
track.addCue(new VTTCue(1211.729, 1214.396, `anggap saja...`));
track.addCue(new VTTCue(1215.771, 1218.479, `senang mengetahui masih ada yang baik.`));
track.addCue(new VTTCue(1239.771, 1240.896, `Petugas Nolen.`));
track.addCue(new VTTCue(1242.687, 1244.021, `Tugas memanggil.`));
track.addCue(new VTTCue(1244.937, 1246.146, `Suatu kehormatan, Vi.`));
track.addCue(new VTTCue(1267.687, 1269.729, `- Silakan, Bu.
- Lewat sini, Bu.`));
track.addCue(new VTTCue(1269.729, 1272.271, `- Berhenti.
- Tolong terus berjalan.`));
track.addCue(new VTTCue(1312.479, 1315.562, `Salah satu dari banyak privilese
menjadi dewan kalian`));
track.addCue(new VTTCue(1316.104, 1319.937, `adalah sesekali memiliki kesempatan
berdiri di belakang podium ini`));
track.addCue(new VTTCue(1320.521, 1322.062, `untuk melihat begitu banyak,`));
track.addCue(new VTTCue(1322.604, 1325.229, `bukan disatukan
oleh kelahiran atau perintah,`));
track.addCue(new VTTCue(1325.229, 1327.146, `tapi oleh semua yang kita bagi.`));
track.addCue(new VTTCue(1328.312, 1329.604, `Harapan kita.`));
track.addCue(new VTTCue(1331.479, 1332.979, `Keingintahuan kita.`));
track.addCue(new VTTCue(1334.896, 1338.979, `Dorongan kita untuk meninggalkan dunia
yang lebih baik daripada sebelumnya.`));
track.addCue(new VTTCue(1340.354, 1344.104, `Hal-hal yang kita bagi ini
yang menjadikan kita bersatu.`));
track.addCue(new VTTCue(1357.187, 1362.271, `Hari ini kita berbagi kehilangan besar.`));
track.addCue(new VTTCue(1363.896, 1365.646, `Dewan Irius Bolbok,`));
track.addCue(new VTTCue(1366.354, 1368.021, `Dewan Torman Hoskel,`));
track.addCue(new VTTCue(1368.021, 1371.437, `dan Dewan Cassandra Kiramman
direnggut dari kita.`));
track.addCue(new VTTCue(1373.979, 1376.021, `Tapi mereka tak akan dilupakan.`));
track.addCue(new VTTCue(1379.479, 1380.854, `Kami mendirikan patung ini`));
track.addCue(new VTTCue(1380.854, 1383.812, `untuk mengingat kontribusi mereka
yang tak terhitung jumlahnya.`));
track.addCue(new VTTCue(1386.312, 1388.229, `Pengabdian seumur hidup mereka.`));
track.addCue(new VTTCue(1390.104, 1393.062, `Bukan tindakan pengecut
yang telah merenggut mereka.`));
track.addCue(new VTTCue(1393.062, 1394.854, `Bu, kau tak boleh masuk...`));
track.addCue(new VTTCue(1399.229, 1401.604, `Meski kita mengalami pukulan telak,`));
track.addCue(new VTTCue(1402.812, 1406.521, `percayalah,
aturan hukum menang di Piltover.`));
track.addCue(new VTTCue(1407.062, 1409.521, `- Tidak.
- Kita akan temukan pelakunya.`));
track.addCue(new VTTCue(1410.229, 1412.812, `Mereka akan bertanggung jawab
atas kejahatan mereka.`));
track.addCue(new VTTCue(1414.104, 1415.521, `Menyedihkan, bukan?`));
track.addCue(new VTTCue(1420.396, 1422.437, `Kehilangan orang yang dicintai.`));
track.addCue(new VTTCue(1452.271, 1455.187, `Kalian tak aman di sini, Orang Atas.`));
track.addCue(new VTTCue(1457.979, 1459.437, `Kalian semua tak aman.`));
track.addCue(new VTTCue(1483.354, 1484.187, `Awas.`));
track.addCue(new VTTCue(1566.937, 1567.812, `Ayo.`));
track.addCue(new VTTCue(1614.437, 1616.312, `Keluarkan para dewan dari sini.`));
track.addCue(new VTTCue(1616.312, 1617.396, `Aku punya ide.`));
track.addCue(new VTTCue(1617.396, 1618.854, `Apa yang kau lakukan?`));
track.addCue(new VTTCue(1765.854, 1767.896, `Untuk putraku.`));
track.addCue(new VTTCue(1807.229, 1808.521, `Ayo.`));
track.addCue(new VTTCue(1810.021, 1811.312, `Sial.`));
track.addCue(new VTTCue(1906.854, 1908.437, `Perimeter diamankan.`));
track.addCue(new VTTCue(1908.437, 1909.687, `Kita lihat saja nanti.`));
track.addCue(new VTTCue(1923.479, 1925.979, `Kukira kau akan terbunuh.`));
track.addCue(new VTTCue(1931.646, 1933.021, `Ikut aku.`));
track.addCue(new VTTCue(1933.604, 1934.604, `Memorial.`));
track.addCue(new VTTCue(1934.604, 1935.687, `Aku bersamamu.`));
track.addCue(new VTTCue(1936.271, 1938.979, `Binatang macam apa mereka?`));
track.addCue(new VTTCue(1938.979, 1940.979, `Mereka ingin tontonan.`));
track.addCue(new VTTCue(1940.979, 1942.729, `Mereka mencoba menakutimu.`));
track.addCue(new VTTCue(1942.729, 1945.062, `Mereka hanya membuatku kesal.`));
track.addCue(new VTTCue(1945.646, 1946.479, `Kau...`));
track.addCue(new VTTCue(1947.271, 1950.062, `Kau harus mencari cara
untuk membatalkan serangan itu.`));
track.addCue(new VTTCue(1950.062, 1951.104, `Apa?`));
track.addCue(new VTTCue(1951.104, 1953.271, `Pertempuran ini terjadi di tanahmu.`));
track.addCue(new VTTCue(1953.271, 1955.562, `Di bawah sana,
mereka yang memegang kendali.`));
track.addCue(new VTTCue(1955.562, 1958.479, `Semua ini tak sesuai kendali kita.`));
track.addCue(new VTTCue(1958.479, 1961.771, `- Mungkin kau harus mengubah itu.
- Aku tak tahu caranya!`));
track.addCue(new VTTCue(1962.396, 1965.271, `Dia mati dan meninggalkan lubang besar,`));
track.addCue(new VTTCue(1965.271, 1967.687, `dan aku harus mengisinya.`));
track.addCue(new VTTCue(1968.729, 1970.646, `Seolah-olah dia tak pernah ada.`));
track.addCue(new VTTCue(1971.187, 1972.021, `Hei.`));
track.addCue(new VTTCue(1972.604, 1973.437, `Tidak akan.`));
track.addCue(new VTTCue(1974.062, 1975.771, `Lubangnya mengecil,`));
track.addCue(new VTTCue(1976.812, 1978.187, `tapi kau tidak pernah mengisinya.`));
track.addCue(new VTTCue(1983.604, 1985.771, `Aku salah memberikan lencana itu kepadamu.`));
track.addCue(new VTTCue(1987.146, 1988.396, `Hanya saja...`));
track.addCue(new VTTCue(1988.396, 1990.187, `Bagaimana pun kupikirkan,`));
track.addCue(new VTTCue(1990.729, 1992.687, `jika aku mengejar adikmu sendirian,`));
track.addCue(new VTTCue(1992.687, 1994.812, `salah satu dari kami akan mati.`));
track.addCue(new VTTCue(1996.729, 1998.229, `Semuanya hancur.`));
track.addCue(new VTTCue(2000.104, 2001.021, `Tidak.`));
track.addCue(new VTTCue(2002.771, 2003.854, `Tak akan kita biarkan.`));
track.addCue(new VTTCue(2018.104, 2021.187, `<i>Aku tahu kau meragukan
hak lahirmu, Caitlyn.</i>`));
track.addCue(new VTTCue(2022.979, 2024.354, `<i>Ada kebijaksanaan di dalamnya.</i>`));
track.addCue(new VTTCue(2027.271, 2028.229, `<i>Tapi ingat.</i>`));
track.addCue(new VTTCue(2031.729, 2033.062, `<i>Kau seorang Kiramman.</i>`));
track.addCue(new VTTCue(2063.396, 2064.979, `Tak pernah sekali pun`));
track.addCue(new VTTCue(2064.979, 2068.979, `pemimpin Piltover dipaksa
ke penjara bawah tanah ibu kota kita.`));
track.addCue(new VTTCue(2070.771, 2071.979, `Tapi di sinilah kita.`));
track.addCue(new VTTCue(2072.729, 2077.687, `Apa masih ada yang ragu bahwa musuh kita
lebih besar daripada satu individu gila?`));
track.addCue(new VTTCue(2078.229, 2081.979, `Bagaimana mereka menyelundupkan
banyak benda ini ke upacara?`));
track.addCue(new VTTCue(2081.979, 2085.062, `Kukira kita sudah melakukan segala cara
untuk mengamankannya.`));
track.addCue(new VTTCue(2085.062, 2086.562, `Mereka pasti mendapat bantuan.`));
track.addCue(new VTTCue(2087.104, 2088.396, `Dari seseorang di sini.`));
track.addCue(new VTTCue(2088.979, 2091.146, `Tidak boleh terjadi serangan lagi.`));
track.addCue(new VTTCue(2091.146, 2093.271, `Jika kita tak membela diri dengan Hextech,`));
track.addCue(new VTTCue(2093.271, 2095.312, `prinsip kita takkan berarti.`));
track.addCue(new VTTCue(2096.896, 2097.729, `Aku...`));
track.addCue(new VTTCue(2098.812, 2101.104, `Kita tak siap untuk serangan skala penuh.`));
track.addCue(new VTTCue(2101.104, 2102.979, `Serangan kota bawah membuktikan itu.`));
track.addCue(new VTTCue(2102.979, 2106.021, `Ini rapat Dewan tertutup.
Siapa yang mengizinkanmu masuk?`));
track.addCue(new VTTCue(2107.062, 2109.104, `Aku petugas berprestasi.`));
track.addCue(new VTTCue(2109.104, 2110.812, `Pemimpin Klan Kiramman.`));
track.addCue(new VTTCue(2110.812, 2112.771, `Panggil aku dengan hormat,`));
track.addCue(new VTTCue(2112.771, 2114.687, `atau tutup mulutmu.`));
track.addCue(new VTTCue(2116.896, 2119.854, `Aku akan memimpin tim serbu ke Zaun
dengan tiga tujuan.`));
track.addCue(new VTTCue(2121.229, 2122.521, `Menemukan Jinx,`));
track.addCue(new VTTCue(2123.437, 2124.521, `<i>menghancurkan Shimmer,</i>`));
track.addCue(new VTTCue(2125.312, 2128.354, `<i>dan melumpuhkan agen
yang masih setia kepada Silco.</i>`));
track.addCue(new VTTCue(2129.104, 2132.562, `Apa yang membuatmu berpikir
kau akan lebih baik dari pasukan hari ini?`));
track.addCue(new VTTCue(2135.646, 2137.354, `Kami punya beberapa kejutan.`));
track.addCue(new VTTCue(2181.729, 2184.729, `PENDUKUNG KEMAJUAN`));
track.addCue(new VTTCue(2344.937, 2347.437, `Terjemahan subtitle oleh Dea Anindya`));
container.appendChild(column);
videoList[`1`] = videoElem;
column = document.createElement('DIV')
im = new Image();
im.src = `https://static.sonicbowl.cloud/img/podcast/5f943cf5-7d2c-4349-9ed6-0db8b1522437-20241013235131.jpg`;
im.alt = `グローバルニュース DAILY BRIEF supported by GRIC2024`;
column.appendChild(im);
column.id = `2`;
videoElem = document.createElement('VIDEO');
videoElem.id = `2`;
videoElem.src = `https://feed.sonicbowl.cloud/audio/d6d2d648-f292-48bc-b1f3-6f8cb3af0278/audio.mp3?updated=1726098614`;
track = videoElem.addTextTrack('subtitles', 'japanese', 'ja');
track.mode = 'showing';
track.addCue(new VTTCue(3.73, 6.99, `NHK ポッドキャスト`));
track.addCue(new VTTCue(10.95, 20.33, `イスラエルとイスラム組織ハマスの戦闘が続くガザ地区では、ポリオの感染拡大が懸念され、国連機関が対策を進めています。`));
track.addCue(new VTTCue(20.83, 26.31, `その最新の状況について、エルサレム市局の田村祐介記者に聞きます。`));
track.addCue(new VTTCue(27.17, 28.41, `田村さん、おはようございます。`));
track.addCue(new VTTCue(29.95, 30.75, `おはようございます。`));
track.addCue(new VTTCue(30.75, 36.01, `ガザ地区では、イスラエルとハマスの戦闘が11ヶ月続いています。`));
track.addCue(new VTTCue(36.27, 44.65, `現地ではポリオの感染拡大も懸念されるほど、衛生状況の悪化が深刻だということですけれども、今どのような状況ですか?`));
track.addCue(new VTTCue(46.21, 52.91, `はい、戦闘が続く中、ガザ地区では多くの人がテントでの避難生活を今も余儀なくされています。`));
track.addCue(new VTTCue(53.49, 63.91, `清潔な飲み水の確保が難しく、さらにゴミの処理もできないため、各地にはゴミが大きな山のように積み上がっていて、衛生状態は悪いままです。`));
track.addCue(new VTTCue(64.81, 73.35, `また、多くの医療機関が被害を受けていて、戦闘が始まる前は当たり前だった予防接種を受けられない子どもも多く、`));
track.addCue(new VTTCue(73.67, 79.97, `そうした中、今年5月にはガザ地区で25年ぶりにポリオの感染例が確認されました。`));
track.addCue(new VTTCue(80.59, 89.99, `ポリオは主に乳幼児が感染し、発症すると手足に麻痺が残ることもありますが、ワクチン接種を受ければ感染を予防できる病気です。`));
track.addCue(new VTTCue(90.63, 95.71, `防げるはずの病気に感染してしまうのは本来あってはならないことですよね。`));
track.addCue(new VTTCue(96.37, 101.73, `そのためにポリオのワクチン接種が始まりましたけれども、現状はどうなっていますか?`));
track.addCue(new VTTCue(102.75, 110.11, `はい、今月1日から地域と時間を限定してイスラエルとハマスが戦闘を一時休止し、`));
track.addCue(new VTTCue(110.23, 116.19, `それに伴って国連機関がポリオのワクチン接種を進める取り組みが始まっています。`));
track.addCue(new VTTCue(116.55, 122.23, `ガザ地区の中部や南部で接種が行われ、東海からは北部でも接種が始まっています。`));
track.addCue(new VTTCue(123.17, 128.35, `これまでに44万人以上の子どもが接種を受けるなど順調に進んでいるということです。`));
track.addCue(new VTTCue(129.17, 135.45, `実はこの接種に最前線で支援に当たっている日本人の国連職員がいます。`));
track.addCue(new VTTCue(135.95, 141.83, `あるは国連パレスチナ難民救済事業機関の瀬田昭博さんは、`));
track.addCue(new VTTCue(142.03, 146.71, `ガザ地区で保健部門のトップとしてワクチン接種の指揮に当たっています。`));
track.addCue(new VTTCue(147.23, 149.63, `現地にいる瀬田さんに話を聞きますと、`));
track.addCue(new VTTCue(149.83, 154.77, `危険と隣り合わせの環境でも子どもを感染症から守りたいという思いから、`));
track.addCue(new VTTCue(154.77, 160.53, `多くの親が子どもを連れて診療所に長い列を作っていたということでした。`));
track.addCue(new VTTCue(160.83, 163.25, `かつての日常を取り戻したいとの思いから、`));
track.addCue(new VTTCue(163.73, 168.95, `いつもより着飾った子どもを連れた親も多く、明るい雰囲気が見られたということでした。`));
track.addCue(new VTTCue(170.13, 174.11, `ただ、停戦に向けてはなかなか進展がないと伝えられています。`));
track.addCue(new VTTCue(174.75, 177.89, `ガザ地区での戦闘いつまで続くんでしょうか?`));
track.addCue(new VTTCue(179.21, 184.07, `はい。停戦と人質の解放に向けた協議は今も難航していて、`));
track.addCue(new VTTCue(184.43, 186.71, `すぐに合意する見通しは立っていません。`));
track.addCue(new VTTCue(187.67, 192.09, `今回のワクチン接種に伴う戦闘の一時休止は期限付きのもので、`));
track.addCue(new VTTCue(192.61, 196.13, `4週間後には2回目の接種が行われるとして、`));
track.addCue(new VTTCue(196.31, 200.13, `国連機関は再び戦闘が中止されることに期待を示しています。`));
track.addCue(new VTTCue(200.99, 202.99, `ただ、現地で支援に当たる瀬田さんは、`));
track.addCue(new VTTCue(203.59, 207.17, `今回のワクチン接種に伴う戦闘の一時休止は、`));
track.addCue(new VTTCue(207.17, 209.81, `人々の命のためにイクラエルとハマスが、`));
track.addCue(new VTTCue(209.83, 212.93, `戦闘を止めることができるという例になるとして、`));
track.addCue(new VTTCue(213.25, 217.31, `完全な停戦が一刻も早く実現してほしいと訴えていました。`));
track.addCue(new VTTCue(218.61, 221.69, `はい。エルサレル資局の田村祐介記者に聞きました。`));
container.appendChild(column);
videoList[`2`] = videoElem;
column = document.createElement('DIV')
im = new Image();
im.src = `https://static.sonicbowl.cloud/img/podcast/5f943cf5-7d2c-4349-9ed6-0db8b1522437-20241013235131.jpg`;
im.alt = `グローバルニュース DAILY BRIEF supported by GRIC2024`;
column.appendChild(im);
column.id = `3`;
videoElem = document.createElement('VIDEO');
videoElem.id = `3`;
videoElem.src = `https://feed.sonicbowl.cloud/audio/d6d2d648-f292-48bc-b1f3-6f8cb3af0278/audio.mp3?updated=1726098614`;
track = videoElem.addTextTrack('subtitles', 'english', 'en');
track.mode = 'showing';
track.addCue(new VTTCue(0.0, 40.687, `Made By Giorgio Chirinos`));
track.addCue(new VTTCue(47.021, 49.729, `Mel, kau baik-baik saja?`));
track.addCue(new VTTCue(67.896, 68.729, `Tidak apa-apa.`));
track.addCue(new VTTCue(95.812, 96.646, `Tidak.`));
track.addCue(new VTTCue(101.896, 103.896, `- Kau terluka?
- Aku baik-baik saja.`));
track.addCue(new VTTCue(108.312, 109.854, `Pergilah.`));
track.addCue(new VTTCue(354.021, 355.771, `Dia wanita yang hebat.`));
track.addCue(new VTTCue(355.771, 357.271, `Teman yang baik.`));
track.addCue(new VTTCue(358.479, 361.479, `Entah bagaimana kita menghadapi
krisis ini tanpanya.`));
track.addCue(new VTTCue(370.021, 373.104, `Kita hampir memperpanjang kedaulatan`));
track.addCue(new VTTCue(373.687, 375.562, `kepada makhluk yang melakukan ini.`));
track.addCue(new VTTCue(377.354, 379.312, `Kita ditugaskan
untuk menegakkan ketertiban.`));
track.addCue(new VTTCue(380.479, 382.562, `Tapi kita telah lalai.`));
track.addCue(new VTTCue(383.104, 384.479, `Aku telah sadar.`));
track.addCue(new VTTCue(385.021, 387.187, `Tidak akan ada lagi dongeng perdamaian`));
track.addCue(new VTTCue(387.187, 390.104, `sampai kita menumpas para iblis
dari basemen kita.`));
track.addCue(new VTTCue(390.979, 394.021, `Kau baik sekali membantu Dewan Salo, Ibu.`));
track.addCue(new VTTCue(394.604, 396.104, `Karena kita sedang berperang,`));
track.addCue(new VTTCue(396.104, 400.271, `kupikir bijaksana untuk meminta saran
dari veteran berpengalaman.`));
track.addCue(new VTTCue(401.146, 403.729, `Mari kita bahas masalah saat ini.`));
track.addCue(new VTTCue(403.729, 406.187, `Rakyat kita takut, menderita.`));
track.addCue(new VTTCue(406.187, 409.604, `Mereka harus tahu pemimpin mereka
bisa mengendalikan situasi.`));
track.addCue(new VTTCue(409.604, 411.687, `Pamer kekuatan
yang belum pernah dilakukan.`));
track.addCue(new VTTCue(411.687, 416.146, `Kita banjiri kota bawah dengan Enforcer,
dipersenjatai Hextech.`));
track.addCue(new VTTCue(416.146, 418.687, `Orang tak bersalah akan terjebak
dalam baku tembak.`));
track.addCue(new VTTCue(418.687, 422.104, `Berapa banyak lagi anggota dewan
yang harus diledakkan sebelum kau sadar?`));
track.addCue(new VTTCue(422.104, 423.354, `Kita dikepung.`));
track.addCue(new VTTCue(427.979, 429.354, `Sedang apa dia di sini?`));
track.addCue(new VTTCue(429.896, 432.312, `Petugas Kiramman menyaksikan
serangan itu langsung.`));
track.addCue(new VTTCue(432.312, 435.729, `Dia memastikan
ini tindakan satu orang gila.`));
track.addCue(new VTTCue(436.312, 437.271, `Jinx.`));
track.addCue(new VTTCue(437.271, 438.396, `Silco sudah mati.`));
track.addCue(new VTTCue(438.396, 440.479, `Kota bawah tanah tak punya pemimpin.`));
track.addCue(new VTTCue(440.479, 443.604, `Jika mengikuti rencanamu,
mereka bisa bersatu melawan kita.`));
track.addCue(new VTTCue(443.604, 445.229, `Jadi, apa solusimu?`));
track.addCue(new VTTCue(445.229, 446.146, `Hukuman?`));
track.addCue(new VTTCue(446.687, 447.896, `Teguran tegas?`));
track.addCue(new VTTCue(447.896, 450.062, `Kita gunakan perpecahan
untuk melawan mereka.`));
track.addCue(new VTTCue(450.062, 451.646, `Salahkan Jinx,`));
track.addCue(new VTTCue(451.646, 454.396, `pasang imbalan sangat besar
yang tak bisa diabaikan.`));
track.addCue(new VTTCue(454.396, 455.396, `Maaf, Mel.`));
track.addCue(new VTTCue(455.396, 458.521, `Aku tidak nyaman memercayakan
takdir kita pada ketidakpastian.`));
track.addCue(new VTTCue(458.521, 460.146, `Jinx terbukti sulit ditangkap.`));
track.addCue(new VTTCue(460.146, 463.854, `Kita baru bisa mulai pulih
setelah dia diadili.`));
track.addCue(new VTTCue(468.229, 471.646, `Kalau begitu, kita sepakat,
dua lawan satu.`));
track.addCue(new VTTCue(472.312, 473.396, `Kita menyerang.`));
track.addCue(new VTTCue(477.562, 478.979, `Jika boleh berpendapat...`));
track.addCue(new VTTCue(478.979, 480.521, `Dalam krisis seperti ini,`));
track.addCue(new VTTCue(480.521, 484.396, `sangat penting kalian terlihat kompak
di depan publik,`));
track.addCue(new VTTCue(484.396, 486.562, `apa pun perasaan pribadi kalian.`));
track.addCue(new VTTCue(489.021, 490.146, `Bijaksana sekali.`));
track.addCue(new VTTCue(492.396, 494.229, `Aku setuju mendukung serangan itu.`));
track.addCue(new VTTCue(496.271, 498.521, `Tapi aku membuat batasan di Hextech.`));
track.addCue(new VTTCue(499.521, 501.187, `Kita punya etos.`));
track.addCue(new VTTCue(501.187, 504.187, `Serangan seperti itu
harus menjadi pilihan terakhir.`));
track.addCue(new VTTCue(505.729, 506.896, `Setuju.`));
track.addCue(new VTTCue(508.812, 511.729, `Kalau begitu, kita sepakat,
dua lawan satu.`));
track.addCue(new VTTCue(585.146, 586.937, `Aku punya kesempatan.`));
track.addCue(new VTTCue(600.812, 603.187, `Ibumu meninggalkan ini untukmu.`));
track.addCue(new VTTCue(604.937, 606.104, `Kunci Kiramman?`));
track.addCue(new VTTCue(606.687, 608.104, `Tidak, aku bukan...`));
track.addCue(new VTTCue(609.062, 610.437, `Aku tidak pantas menerimanya.`));
track.addCue(new VTTCue(610.437, 613.146, `Kini itu warisanmu, Caitlyn.`));
track.addCue(new VTTCue(629.146, 631.062, `Kenapa dia masih di sini?`));
track.addCue(new VTTCue(655.562, 656.396, `Hei.`));
track.addCue(new VTTCue(679.729, 680.979, `Kau benar, Cait.`));
track.addCue(new VTTCue(681.521, 682.937, `Powder sudah tak ada.`));
track.addCue(new VTTCue(684.562, 685.937, `Aku bisa memperbaiki ini.`));
track.addCue(new VTTCue(685.937, 688.229, `Jika kau minta Jayce
memperbaiki sarung tangan,`));
track.addCue(new VTTCue(688.229, 689.812, `aku bisa melakukannya sendiri.`));
track.addCue(new VTTCue(689.812, 691.687, `Tak ada lagi yang perlu terluka.`));
track.addCue(new VTTCue(692.229, 693.146, `Tidak.`));
track.addCue(new VTTCue(693.146, 694.771, `Tak ada lagi misi liar.`));
track.addCue(new VTTCue(694.771, 696.896, `Tak ada lagi rencana ceroboh.`));
track.addCue(new VTTCue(696.896, 698.271, `Ibuku benar.`));
track.addCue(new VTTCue(698.271, 700.896, `Kesombonganku membuatku serakah,`));
track.addCue(new VTTCue(700.896, 702.521, `dan dia menanggung akibatnya.`));
track.addCue(new VTTCue(706.604, 708.854, `Mereka mengirim semua Enforcer
untuk mengejar Jinx.`));
track.addCue(new VTTCue(710.021, 711.396, `Aku akan ikut mereka.`));
track.addCue(new VTTCue(711.979, 714.146, `Kumohon, aku harus membantu.`));
track.addCue(new VTTCue(714.771, 715.604, `Kau bisa bantu.`));
track.addCue(new VTTCue(724.104, 725.021, `Sebagai bagian dari kami.`));
track.addCue(new VTTCue(725.854, 728.354, `Cait, aku tak bisa memakai ini.`));
track.addCue(new VTTCue(728.354, 729.812, `Rakyat ingin darah.`));
track.addCue(new VTTCue(730.521, 731.937, `Dewan takkan hentikan mereka.`));
track.addCue(new VTTCue(731.937, 734.979, `Kau bisa tunjukkan
bahwa tak semua Zaun mendukung Jinx.`));
track.addCue(new VTTCue(735.979, 737.021, `Kita bisa tunjukkan.`));
track.addCue(new VTTCue(738.062, 738.979, `Bersama.`));
track.addCue(new VTTCue(739.562, 741.312, `Aku lihat mereka membunuh orang tuaku.`));
track.addCue(new VTTCue(741.312, 743.562, `Kau tahu bagaimana rasanya?`));
track.addCue(new VTTCue(743.562, 744.479, `Ya.`));
track.addCue(new VTTCue(744.479, 745.562, `Aku tahu.`));
track.addCue(new VTTCue(750.396, 752.312, `Kupikir kau di pihak kami.`));
track.addCue(new VTTCue(753.396, 754.812, `Kau tak berpikir begitu.`));
track.addCue(new VTTCue(790.021, 791.812, `Hei, hati-hati.`));
track.addCue(new VTTCue(793.937, 794.854, `Maaf.`));
track.addCue(new VTTCue(798.437, 799.687, `Bukan yang pertama.`));
track.addCue(new VTTCue(805.187, 806.354, `Kau baik-baik saja?`));
track.addCue(new VTTCue(821.604, 822.687, `Kau`));
track.addCue(new VTTCue(822.687, 824.854, `kehilangan seseorang dalam serangan itu?`));
track.addCue(new VTTCue(853.312, 854.396, `Bagaimana keadaannya?`));
track.addCue(new VTTCue(854.979, 856.937, `Sama seperti sebelumnya. Bernapas.`));
track.addCue(new VTTCue(858.146, 859.604, `Denyut nadi konsisten.`));
track.addCue(new VTTCue(860.562, 861.646, `Selain itu,`));
track.addCue(new VTTCue(862.687, 864.187, `aku juga tidak tahu.`));
track.addCue(new VTTCue(880.437, 881.979, `Apa yang ia lakukan padanya?`));
track.addCue(new VTTCue(884.729, 886.937, `Hexcore berevolusi.`));
track.addCue(new VTTCue(886.937, 890.187, `Bergeser melalui pola rune
lebih cepat dari yang bisa kuikuti.`));
track.addCue(new VTTCue(890.187, 892.812, `Yang kutahu pasti adalah
itu menjaganya tetap hidup.`));
track.addCue(new VTTCue(894.604, 897.479, `Itu teka-teki yang akan disukai Viktor,
jika dia tidak...`));
track.addCue(new VTTCue(901.812, 904.187, `Seharusnya aku yang di sana, bukan dia.`));
track.addCue(new VTTCue(905.229, 906.479, `Jangan bilang begitu.`));
track.addCue(new VTTCue(907.521, 909.354, `Dia akan kembali kepada kita.`));
track.addCue(new VTTCue(909.354, 911.854, `Aku masih tidak mengerti.`));
track.addCue(new VTTCue(911.854, 913.354, `Dia tepat di sampingku.`));
track.addCue(new VTTCue(913.354, 916.687, `Bagaimana ledakan bisa melakukan itu
kepadanya, sedangkan aku`));
track.addCue(new VTTCue(916.687, 918.729, `keluar tanpa terluka?`));
track.addCue(new VTTCue(923.854, 926.229, `Hal-hal ini tak masuk akal, Jayce.`));
track.addCue(new VTTCue(928.354, 929.687, `Bagaimana dengan Dewan?`));
track.addCue(new VTTCue(931.104, 932.479, `Ibuku ikut bermain.`));
track.addCue(new VTTCue(934.562, 936.896, `Salo sudah termakan pengaruhnya.`));
track.addCue(new VTTCue(936.896, 939.854, `Memanfaatkan kesedihannya
untuk mengincar Hextech.`));
track.addCue(new VTTCue(941.229, 943.521, `Mel, aku berjanji kepada Viktor.`));
track.addCue(new VTTCue(943.521, 944.812, `Tidak akan pernah lagi.`));
track.addCue(new VTTCue(945.396, 946.396, `Tak apa-apa.`));
track.addCue(new VTTCue(946.396, 947.437, `Sudah kutangani.`));
track.addCue(new VTTCue(947.437, 949.854, `Aku tidak akan membiarkan mereka
merusak impianmu.`));
track.addCue(new VTTCue(955.771, 956.854, `Caitlyn ada di sana.`));
track.addCue(new VTTCue(957.437, 958.979, `Kau mungkin perlu mengunjunginya.`));
track.addCue(new VTTCue(958.979, 962.687, `Dia menyembunyikannya dengan baik,
tapi dia sangat menderita.`));
track.addCue(new VTTCue(1013.479, 1014.479, `<i>Hei, Sprout.</i>`));
track.addCue(new VTTCue(1019.396, 1020.646, `Bagaimana kau menemukanku?`));
track.addCue(new VTTCue(1020.646, 1021.562, `Ayahmu.`));
track.addCue(new VTTCue(1023.979, 1026.979, `Ibu dan aku biasa datang ke sini
saat kami butuh pelarian.`));
track.addCue(new VTTCue(1028.521, 1030.771, `Salah satu tempat
kami tak pernah bertengkar.`));
track.addCue(new VTTCue(1031.354, 1033.437, `Maaf aku tak ada belakangan ini.`));
track.addCue(new VTTCue(1035.396, 1036.479, `Bagaimana Viktor?`));
track.addCue(new VTTCue(1040.062, 1042.271, `Aku bahkan tak tahu apa dia masih hidup.`));
track.addCue(new VTTCue(1043.562, 1045.062, `Sejak itu terjadi...`));
track.addCue(new VTTCue(1047.021, 1049.729, `tiga wajah terus berputar di benakku.`));
track.addCue(new VTTCue(1052.521, 1053.396, `Aku melihat Ibu.`));
track.addCue(new VTTCue(1054.479, 1055.604, `Saat dia ditemukan.`));
track.addCue(new VTTCue(1056.396, 1058.854, `Seluruh tubuhku tenggelam,`));
track.addCue(new VTTCue(1058.854, 1061.312, `seperti batu yang ditelan air gelap.`));
track.addCue(new VTTCue(1062.646, 1064.271, `Tapi kemudian ada Jinx.`));
track.addCue(new VTTCue(1064.854, 1065.729, `Tertawa.`));
track.addCue(new VTTCue(1066.979, 1069.729, `Aku ingin merobek tawa itu
dari tenggorokannya selamanya.`));
track.addCue(new VTTCue(1069.729, 1070.646, `Cait.`));
track.addCue(new VTTCue(1071.312, 1072.146, `Aku tahu.`));
track.addCue(new VTTCue(1072.146, 1073.896, `Kini aku mengerti`));
track.addCue(new VTTCue(1073.896, 1076.021, `betapa mudahnya membenci mereka.`));
track.addCue(new VTTCue(1076.021, 1077.812, `Satu tindakan kejam.`));
track.addCue(new VTTCue(1080.854, 1082.271, `Lalu aku melihat Vi.`));
track.addCue(new VTTCue(1084.312, 1086.354, `Aku memintanya memakai seragam.`));
track.addCue(new VTTCue(1086.354, 1088.812, `Bisa dibilang, dia menolak.`));
track.addCue(new VTTCue(1089.396, 1091.396, `Vi? Memakai lencana?`));
track.addCue(new VTTCue(1091.979, 1095.687, `Dia pikir sarung tanganmu
akan menyelesaikan semua masalahnya.`));
track.addCue(new VTTCue(1098.021, 1099.437, `Bagaimana jika dia benar?`));
track.addCue(new VTTCue(1100.937, 1103.104, `Hextech mungkin menjaga kita
tetap hidup, Jayce,`));
track.addCue(new VTTCue(1103.104, 1105.021, `tapi tak akan menyelamatkan kita.`));
track.addCue(new VTTCue(1113.937, 1114.771, `Aku.`));
track.addCue(new VTTCue(1115.562, 1117.229, `Bergabung dengan patroli kacang.`));
track.addCue(new VTTCue(1118.312, 1120.562, `Padahal kukira dia tak punya selera humor.`));
track.addCue(new VTTCue(1122.312, 1123.562, `Aku suka kacang.`));
track.addCue(new VTTCue(1123.562, 1124.812, `Ayahnya benar.`));
track.addCue(new VTTCue(1124.812, 1127.062, `Tidak ada gunanya tetap di sini.`));
track.addCue(new VTTCue(1129.896, 1130.729, `Tapi`));
track.addCue(new VTTCue(1131.271, 1133.396, `aku yang menciptakan monster itu.`));
track.addCue(new VTTCue(1138.937, 1139.771, `Vi?`));
track.addCue(new VTTCue(1148.271, 1149.187, `Siapa kau?`));
track.addCue(new VTTCue(1149.854, 1151.896, `Bagaimana kau tahu namaku?`));
track.addCue(new VTTCue(1152.979, 1154.354, `Petugas Junior Nolen.`));
track.addCue(new VTTCue(1155.062, 1156.271, `Maddie.`));
track.addCue(new VTTCue(1156.271, 1157.354, `Dan...`));
track.addCue(new VTTCue(1158.479, 1160.437, `itu tertulis di wajahmu.`));
track.addCue(new VTTCue(1164.521, 1165.604, `Jadi, ada apa?`));
track.addCue(new VTTCue(1165.604, 1166.687, `Penggeledahan acak?`));
track.addCue(new VTTCue(1166.687, 1168.521, `Mengawal keluar dari properti?`));
track.addCue(new VTTCue(1169.229, 1171.104, `Atau hanya mau membuang waktuku?`));
track.addCue(new VTTCue(1171.646, 1173.312, `Penggeledahan? Tidak.`));
track.addCue(new VTTCue(1173.312, 1174.479, `Tidak.`));
track.addCue(new VTTCue(1174.479, 1178.271, `Kau semacam legenda di antara Enforcer.`));
track.addCue(new VTTCue(1178.271, 1182.229, `Caitlyn membuat keributan di kantor polisi
saat pendaftaranmu ditolak.`));
track.addCue(new VTTCue(1182.771, 1184.062, `Kini aku harus bertanya.`));
track.addCue(new VTTCue(1184.604, 1185.562, `Apa semua itu benar?`));
track.addCue(new VTTCue(1185.562, 1188.729, `Kau mengejar Silco sendirian
saat Dewan tidak mendukungmu?`));
track.addCue(new VTTCue(1188.729, 1190.271, `Melawan seluruh gengnya?`));
track.addCue(new VTTCue(1191.896, 1193.312, `Cait bilang semua itu?`));
track.addCue(new VTTCue(1193.312, 1194.604, `Dia bilang,`));
track.addCue(new VTTCue(1194.604, 1197.104, `jika setiap Enforcer punya hati sepertimu,`));
track.addCue(new VTTCue(1197.104, 1198.979, `kita bisa melawan Noxus.`));
track.addCue(new VTTCue(1200.271, 1202.812, `Lalu dia mengancam
menarik pendanaan keluarganya.`));
track.addCue(new VTTCue(1203.354, 1206.146, `Bagaimanapun, aku senang kau bergabung.`));
track.addCue(new VTTCue(1209.521, 1211.729, `Setelah sherif mengkhianati kita,`));
track.addCue(new VTTCue(1211.729, 1214.396, `anggap saja...`));
track.addCue(new VTTCue(1215.771, 1218.479, `senang mengetahui masih ada yang baik.`));
track.addCue(new VTTCue(1239.771, 1240.896, `Petugas Nolen.`));
track.addCue(new VTTCue(1242.687, 1244.021, `Tugas memanggil.`));
track.addCue(new VTTCue(1244.937, 1246.146, `Suatu kehormatan, Vi.`));
track.addCue(new VTTCue(1267.687, 1269.729, `- Silakan, Bu.
- Lewat sini, Bu.`));
track.addCue(new VTTCue(1269.729, 1272.271, `- Berhenti.
- Tolong terus berjalan.`));
track.addCue(new VTTCue(1312.479, 1315.562, `Salah satu dari banyak privilese
menjadi dewan kalian`));
track.addCue(new VTTCue(1316.104, 1319.937, `adalah sesekali memiliki kesempatan
berdiri di belakang podium ini`));
track.addCue(new VTTCue(1320.521, 1322.062, `untuk melihat begitu banyak,`));
track.addCue(new VTTCue(1322.604, 1325.229, `bukan disatukan
oleh kelahiran atau perintah,`));
track.addCue(new VTTCue(1325.229, 1327.146, `tapi oleh semua yang kita bagi.`));
track.addCue(new VTTCue(1328.312, 1329.604, `Harapan kita.`));
track.addCue(new VTTCue(1331.479, 1332.979, `Keingintahuan kita.`));
track.addCue(new VTTCue(1334.896, 1338.979, `Dorongan kita untuk meninggalkan dunia
yang lebih baik daripada sebelumnya.`));
track.addCue(new VTTCue(1340.354, 1344.104, `Hal-hal yang kita bagi ini
yang menjadikan kita bersatu.`));
track.addCue(new VTTCue(1357.187, 1362.271, `Hari ini kita berbagi kehilangan besar.`));
track.addCue(new VTTCue(1363.896, 1365.646, `Dewan Irius Bolbok,`));
track.addCue(new VTTCue(1366.354, 1368.021, `Dewan Torman Hoskel,`));
track.addCue(new VTTCue(1368.021, 1371.437, `dan Dewan Cassandra Kiramman
direnggut dari kita.`));
track.addCue(new VTTCue(1373.979, 1376.021, `Tapi mereka tak akan dilupakan.`));
track.addCue(new VTTCue(1379.479, 1380.854, `Kami mendirikan patung ini`));
track.addCue(new VTTCue(1380.854, 1383.812, `untuk mengingat kontribusi mereka
yang tak terhitung jumlahnya.`));
track.addCue(new VTTCue(1386.312, 1388.229, `Pengabdian seumur hidup mereka.`));
track.addCue(new VTTCue(1390.104, 1393.062, `Bukan tindakan pengecut
yang telah merenggut mereka.`));
track.addCue(new VTTCue(1393.062, 1394.854, `Bu, kau tak boleh masuk...`));
track.addCue(new VTTCue(1399.229, 1401.604, `Meski kita mengalami pukulan telak,`));
track.addCue(new VTTCue(1402.812, 1406.521, `percayalah,
aturan hukum menang di Piltover.`));
track.addCue(new VTTCue(1407.062, 1409.521, `- Tidak.
- Kita akan temukan pelakunya.`));
track.addCue(new VTTCue(1410.229, 1412.812, `Mereka akan bertanggung jawab
atas kejahatan mereka.`));
track.addCue(new VTTCue(1414.104, 1415.521, `Menyedihkan, bukan?`));
track.addCue(new VTTCue(1420.396, 1422.437, `Kehilangan orang yang dicintai.`));
track.addCue(new VTTCue(1452.271, 1455.187, `Kalian tak aman di sini, Orang Atas.`));
track.addCue(new VTTCue(1457.979, 1459.437, `Kalian semua tak aman.`));
track.addCue(new VTTCue(1483.354, 1484.187, `Awas.`));
track.addCue(new VTTCue(1566.937, 1567.812, `Ayo.`));
track.addCue(new VTTCue(1614.437, 1616.312, `Keluarkan para dewan dari sini.`));
track.addCue(new VTTCue(1616.312, 1617.396, `Aku punya ide.`));
track.addCue(new VTTCue(1617.396, 1618.854, `Apa yang kau lakukan?`));
track.addCue(new VTTCue(1765.854, 1767.896, `Untuk putraku.`));
track.addCue(new VTTCue(1807.229, 1808.521, `Ayo.`));
track.addCue(new VTTCue(1810.021, 1811.312, `Sial.`));
track.addCue(new VTTCue(1906.854, 1908.437, `Perimeter diamankan.`));
track.addCue(new VTTCue(1908.437, 1909.687, `Kita lihat saja nanti.`));
track.addCue(new VTTCue(1923.479, 1925.979, `Kukira kau akan terbunuh.`));
track.addCue(new VTTCue(1931.646, 1933.021, `Ikut aku.`));
track.addCue(new VTTCue(1933.604, 1934.604, `Memorial.`));
track.addCue(new VTTCue(1934.604, 1935.687, `Aku bersamamu.`));
track.addCue(new VTTCue(1936.271, 1938.979, `Binatang macam apa mereka?`));
track.addCue(new VTTCue(1938.979, 1940.979, `Mereka ingin tontonan.`));
track.addCue(new VTTCue(1940.979, 1942.729, `Mereka mencoba menakutimu.`));
track.addCue(new VTTCue(1942.729, 1945.062, `Mereka hanya membuatku kesal.`));
track.addCue(new VTTCue(1945.646, 1946.479, `Kau...`));
track.addCue(new VTTCue(1947.271, 1950.062, `Kau harus mencari cara
untuk membatalkan serangan itu.`));
track.addCue(new VTTCue(1950.062, 1951.104, `Apa?`));
track.addCue(new VTTCue(1951.104, 1953.271, `Pertempuran ini terjadi di tanahmu.`));
track.addCue(new VTTCue(1953.271, 1955.562, `Di bawah sana,
mereka yang memegang kendali.`));
track.addCue(new VTTCue(1955.562, 1958.479, `Semua ini tak sesuai kendali kita.`));
track.addCue(new VTTCue(1958.479, 1961.771, `- Mungkin kau harus mengubah itu.
- Aku tak tahu caranya!`));
track.addCue(new VTTCue(1962.396, 1965.271, `Dia mati dan meninggalkan lubang besar,`));
track.addCue(new VTTCue(1965.271, 1967.687, `dan aku harus mengisinya.`));
track.addCue(new VTTCue(1968.729, 1970.646, `Seolah-olah dia tak pernah ada.`));
track.addCue(new VTTCue(1971.187, 1972.021, `Hei.`));
track.addCue(new VTTCue(1972.604, 1973.437, `Tidak akan.`));
track.addCue(new VTTCue(1974.062, 1975.771, `Lubangnya mengecil,`));
track.addCue(new VTTCue(1976.812, 1978.187, `tapi kau tidak pernah mengisinya.`));
track.addCue(new VTTCue(1983.604, 1985.771, `Aku salah memberikan lencana itu kepadamu.`));
track.addCue(new VTTCue(1987.146, 1988.396, `Hanya saja...`));
track.addCue(new VTTCue(1988.396, 1990.187, `Bagaimana pun kupikirkan,`));
track.addCue(new VTTCue(1990.729, 1992.687, `jika aku mengejar adikmu sendirian,`));
track.addCue(new VTTCue(1992.687, 1994.812, `salah satu dari kami akan mati.`));
track.addCue(new VTTCue(1996.729, 1998.229, `Semuanya hancur.`));
track.addCue(new VTTCue(2000.104, 2001.021, `Tidak.`));
track.addCue(new VTTCue(2002.771, 2003.854, `Tak akan kita biarkan.`));
track.addCue(new VTTCue(2018.104, 2021.187, `<i>Aku tahu kau meragukan
hak lahirmu, Caitlyn.</i>`));
track.addCue(new VTTCue(2022.979, 2024.354, `<i>Ada kebijaksanaan di dalamnya.</i>`));
track.addCue(new VTTCue(2027.271, 2028.229, `<i>Tapi ingat.</i>`));
track.addCue(new VTTCue(2031.729, 2033.062, `<i>Kau seorang Kiramman.</i>`));
track.addCue(new VTTCue(2063.396, 2064.979, `Tak pernah sekali pun`));
track.addCue(new VTTCue(2064.979, 2068.979, `pemimpin Piltover dipaksa
ke penjara bawah tanah ibu kota kita.`));
track.addCue(new VTTCue(2070.771, 2071.979, `Tapi di sinilah kita.`));
track.addCue(new VTTCue(2072.729, 2077.687, `Apa masih ada yang ragu bahwa musuh kita
lebih besar daripada satu individu gila?`));
track.addCue(new VTTCue(2078.229, 2081.979, `Bagaimana mereka menyelundupkan
banyak benda ini ke upacara?`));
track.addCue(new VTTCue(2081.979, 2085.062, `Kukira kita sudah melakukan segala cara
untuk mengamankannya.`));
track.addCue(new VTTCue(2085.062, 2086.562, `Mereka pasti mendapat bantuan.`));
track.addCue(new VTTCue(2087.104, 2088.396, `Dari seseorang di sini.`));
track.addCue(new VTTCue(2088.979, 2091.146, `Tidak boleh terjadi serangan lagi.`));
track.addCue(new VTTCue(2091.146, 2093.271, `Jika kita tak membela diri dengan Hextech,`));
track.addCue(new VTTCue(2093.271, 2095.312, `prinsip kita takkan berarti.`));
track.addCue(new VTTCue(2096.896, 2097.729, `Aku...`));
track.addCue(new VTTCue(2098.812, 2101.104, `Kita tak siap untuk serangan skala penuh.`));
track.addCue(new VTTCue(2101.104, 2102.979, `Serangan kota bawah membuktikan itu.`));
track.addCue(new VTTCue(2102.979, 2106.021, `Ini rapat Dewan tertutup.
Siapa yang mengizinkanmu masuk?`));
track.addCue(new VTTCue(2107.062, 2109.104, `Aku petugas berprestasi.`));
track.addCue(new VTTCue(2109.104, 2110.812, `Pemimpin Klan Kiramman.`));
track.addCue(new VTTCue(2110.812, 2112.771, `Panggil aku dengan hormat,`));
track.addCue(new VTTCue(2112.771, 2114.687, `atau tutup mulutmu.`));
track.addCue(new VTTCue(2116.896, 2119.854, `Aku akan memimpin tim serbu ke Zaun
dengan tiga tujuan.`));
track.addCue(new VTTCue(2121.229, 2122.521, `Menemukan Jinx,`));
track.addCue(new VTTCue(2123.437, 2124.521, `<i>menghancurkan Shimmer,</i>`));
track.addCue(new VTTCue(2125.312, 2128.354, `<i>dan melumpuhkan agen
yang masih setia kepada Silco.</i>`));
track.addCue(new VTTCue(2129.104, 2132.562, `Apa yang membuatmu berpikir
kau akan lebih baik dari pasukan hari ini?`));
track.addCue(new VTTCue(2135.646, 2137.354, `Kami punya beberapa kejutan.`));
track.addCue(new VTTCue(2181.729, 2184.729, `PENDUKUNG KEMAJUAN`));
track.addCue(new VTTCue(2344.937, 2347.437, `Terjemahan subtitle oleh Dea Anindya`));
container.appendChild(column);
videoList[`3`] = videoElem;
column = document.createElement('DIV')
im = new Image();
im.src = `https://static.sonicbowl.cloud/img/podcast/5f943cf5-7d2c-4349-9ed6-0db8b1522437-20241013235131.jpg`;
im.alt = `グローバルニュース DAILY BRIEF supported by GRIC2024`;
column.appendChild(im);
column.id = `4`;
videoElem = document.createElement('VIDEO');
videoElem.id = `4`;
videoElem.src = `https://feed.sonicbowl.cloud/audio/d6d2d648-f292-48bc-b1f3-6f8cb3af0278/audio.mp3?updated=1726098614`;
track = videoElem.addTextTrack('subtitles', 'spanish', 'sp');
track.mode = 'showing';
track.addCue(new VTTCue(0.0, 40.687, `Made By Giorgio Chirinos`));
track.addCue(new VTTCue(47.021, 49.729, `Mel, kau baik-baik saja?`));
track.addCue(new VTTCue(67.896, 68.729, `Tidak apa-apa.`));
track.addCue(new VTTCue(95.812, 96.646, `Tidak.`));
track.addCue(new VTTCue(101.896, 103.896, `- Kau terluka?
- Aku baik-baik saja.`));
track.addCue(new VTTCue(108.312, 109.854, `Pergilah.`));
track.addCue(new VTTCue(354.021, 355.771, `Dia wanita yang hebat.`));
track.addCue(new VTTCue(355.771, 357.271, `Teman yang baik.`));
track.addCue(new VTTCue(358.479, 361.479, `Entah bagaimana kita menghadapi
krisis ini tanpanya.`));
track.addCue(new VTTCue(370.021, 373.104, `Kita hampir memperpanjang kedaulatan`));
track.addCue(new VTTCue(373.687, 375.562, `kepada makhluk yang melakukan ini.`));
track.addCue(new VTTCue(377.354, 379.312, `Kita ditugaskan
untuk menegakkan ketertiban.`));
track.addCue(new VTTCue(380.479, 382.562, `Tapi kita telah lalai.`));
track.addCue(new VTTCue(383.104, 384.479, `Aku telah sadar.`));
track.addCue(new VTTCue(385.021, 387.187, `Tidak akan ada lagi dongeng perdamaian`));
track.addCue(new VTTCue(387.187, 390.104, `sampai kita menumpas para iblis
dari basemen kita.`));
track.addCue(new VTTCue(390.979, 394.021, `Kau baik sekali membantu Dewan Salo, Ibu.`));
track.addCue(new VTTCue(394.604, 396.104, `Karena kita sedang berperang,`));
track.addCue(new VTTCue(396.104, 400.271, `kupikir bijaksana untuk meminta saran
dari veteran berpengalaman.`));
track.addCue(new VTTCue(401.146, 403.729, `Mari kita bahas masalah saat ini.`));
track.addCue(new VTTCue(403.729, 406.187, `Rakyat kita takut, menderita.`));
track.addCue(new VTTCue(406.187, 409.604, `Mereka harus tahu pemimpin mereka
bisa mengendalikan situasi.`));
track.addCue(new VTTCue(409.604, 411.687, `Pamer kekuatan
yang belum pernah dilakukan.`));
track.addCue(new VTTCue(411.687, 416.146, `Kita banjiri kota bawah dengan Enforcer,
dipersenjatai Hextech.`));
track.addCue(new VTTCue(416.146, 418.687, `Orang tak bersalah akan terjebak
dalam baku tembak.`));
track.addCue(new VTTCue(418.687, 422.104, `Berapa banyak lagi anggota dewan
yang harus diledakkan sebelum kau sadar?`));
track.addCue(new VTTCue(422.104, 423.354, `Kita dikepung.`));
track.addCue(new VTTCue(427.979, 429.354, `Sedang apa dia di sini?`));
track.addCue(new VTTCue(429.896, 432.312, `Petugas Kiramman menyaksikan
serangan itu langsung.`));
track.addCue(new VTTCue(432.312, 435.729, `Dia memastikan
ini tindakan satu orang gila.`));
track.addCue(new VTTCue(436.312, 437.271, `Jinx.`));
track.addCue(new VTTCue(437.271, 438.396, `Silco sudah mati.`));
track.addCue(new VTTCue(438.396, 440.479, `Kota bawah tanah tak punya pemimpin.`));
track.addCue(new VTTCue(440.479, 443.604, `Jika mengikuti rencanamu,
mereka bisa bersatu melawan kita.`));
track.addCue(new VTTCue(443.604, 445.229, `Jadi, apa solusimu?`));
track.addCue(new VTTCue(445.229, 446.146, `Hukuman?`));
track.addCue(new VTTCue(446.687, 447.896, `Teguran tegas?`));
track.addCue(new VTTCue(447.896, 450.062, `Kita gunakan perpecahan
untuk melawan mereka.`));
track.addCue(new VTTCue(450.062, 451.646, `Salahkan Jinx,`));
track.addCue(new VTTCue(451.646, 454.396, `pasang imbalan sangat besar
yang tak bisa diabaikan.`));
track.addCue(new VTTCue(454.396, 455.396, `Maaf, Mel.`));
track.addCue(new VTTCue(455.396, 458.521, `Aku tidak nyaman memercayakan
takdir kita pada ketidakpastian.`));
track.addCue(new VTTCue(458.521, 460.146, `Jinx terbukti sulit ditangkap.`));
track.addCue(new VTTCue(460.146, 463.854, `Kita baru bisa mulai pulih
setelah dia diadili.`));
track.addCue(new VTTCue(468.229, 471.646, `Kalau begitu, kita sepakat,
dua lawan satu.`));
track.addCue(new VTTCue(472.312, 473.396, `Kita menyerang.`));
track.addCue(new VTTCue(477.562, 478.979, `Jika boleh berpendapat...`));
track.addCue(new VTTCue(478.979, 480.521, `Dalam krisis seperti ini,`));
track.addCue(new VTTCue(480.521, 484.396, `sangat penting kalian terlihat kompak
di depan publik,`));
track.addCue(new VTTCue(484.396, 486.562, `apa pun perasaan pribadi kalian.`));
track.addCue(new VTTCue(489.021, 490.146, `Bijaksana sekali.`));
track.addCue(new VTTCue(492.396, 494.229, `Aku setuju mendukung serangan itu.`));
track.addCue(new VTTCue(496.271, 498.521, `Tapi aku membuat batasan di Hextech.`));
track.addCue(new VTTCue(499.521, 501.187, `Kita punya etos.`));
track.addCue(new VTTCue(501.187, 504.187, `Serangan seperti itu
harus menjadi pilihan terakhir.`));
track.addCue(new VTTCue(505.729, 506.896, `Setuju.`));
track.addCue(new VTTCue(508.812, 511.729, `Kalau begitu, kita sepakat,
dua lawan satu.`));
track.addCue(new VTTCue(585.146, 586.937, `Aku punya kesempatan.`));
track.addCue(new VTTCue(600.812, 603.187, `Ibumu meninggalkan ini untukmu.`));
track.addCue(new VTTCue(604.937, 606.104, `Kunci Kiramman?`));
track.addCue(new VTTCue(606.687, 608.104, `Tidak, aku bukan...`));
track.addCue(new VTTCue(609.062, 610.437, `Aku tidak pantas menerimanya.`));
track.addCue(new VTTCue(610.437, 613.146, `Kini itu warisanmu, Caitlyn.`));
track.addCue(new VTTCue(629.146, 631.062, `Kenapa dia masih di sini?`));
track.addCue(new VTTCue(655.562, 656.396, `Hei.`));
track.addCue(new VTTCue(679.729, 680.979, `Kau benar, Cait.`));
track.addCue(new VTTCue(681.521, 682.937, `Powder sudah tak ada.`));
track.addCue(new VTTCue(684.562, 685.937, `Aku bisa memperbaiki ini.`));
track.addCue(new VTTCue(685.937, 688.229, `Jika kau minta Jayce
memperbaiki sarung tangan,`));
track.addCue(new VTTCue(688.229, 689.812, `aku bisa melakukannya sendiri.`));
track.addCue(new VTTCue(689.812, 691.687, `Tak ada lagi yang perlu terluka.`));
track.addCue(new VTTCue(692.229, 693.146, `Tidak.`));
track.addCue(new VTTCue(693.146, 694.771, `Tak ada lagi misi liar.`));
track.addCue(new VTTCue(694.771, 696.896, `Tak ada lagi rencana ceroboh.`));
track.addCue(new VTTCue(696.896, 698.271, `Ibuku benar.`));
track.addCue(new VTTCue(698.271, 700.896, `Kesombonganku membuatku serakah,`));
track.addCue(new VTTCue(700.896, 702.521, `dan dia menanggung akibatnya.`));
track.addCue(new VTTCue(706.604, 708.854, `Mereka mengirim semua Enforcer
untuk mengejar Jinx.`));
track.addCue(new VTTCue(710.021, 711.396, `Aku akan ikut mereka.`));
track.addCue(new VTTCue(711.979, 714.146, `Kumohon, aku harus membantu.`));
track.addCue(new VTTCue(714.771, 715.604, `Kau bisa bantu.`));
track.addCue(new VTTCue(724.104, 725.021, `Sebagai bagian dari kami.`));
track.addCue(new VTTCue(725.854, 728.354, `Cait, aku tak bisa memakai ini.`));
track.addCue(new VTTCue(728.354, 729.812, `Rakyat ingin darah.`));
track.addCue(new VTTCue(730.521, 731.937, `Dewan takkan hentikan mereka.`));
track.addCue(new VTTCue(731.937, 734.979, `Kau bisa tunjukkan
bahwa tak semua Zaun mendukung Jinx.`));
track.addCue(new VTTCue(735.979, 737.021, `Kita bisa tunjukkan.`));
track.addCue(new VTTCue(738.062, 738.979, `Bersama.`));
track.addCue(new VTTCue(739.562, 741.312, `Aku lihat mereka membunuh orang tuaku.`));
track.addCue(new VTTCue(741.312, 743.562, `Kau tahu bagaimana rasanya?`));
track.addCue(new VTTCue(743.562, 744.479, `Ya.`));
track.addCue(new VTTCue(744.479, 745.562, `Aku tahu.`));
track.addCue(new VTTCue(750.396, 752.312, `Kupikir kau di pihak kami.`));
track.addCue(new VTTCue(753.396, 754.812, `Kau tak berpikir begitu.`));
track.addCue(new VTTCue(790.021, 791.812, `Hei, hati-hati.`));
track.addCue(new VTTCue(793.937, 794.854, `Maaf.`));
track.addCue(new VTTCue(798.437, 799.687, `Bukan yang pertama.`));
track.addCue(new VTTCue(805.187, 806.354, `Kau baik-baik saja?`));
track.addCue(new VTTCue(821.604, 822.687, `Kau`));
track.addCue(new VTTCue(822.687, 824.854, `kehilangan seseorang dalam serangan itu?`));
track.addCue(new VTTCue(853.312, 854.396, `Bagaimana keadaannya?`));
track.addCue(new VTTCue(854.979, 856.937, `Sama seperti sebelumnya. Bernapas.`));
track.addCue(new VTTCue(858.146, 859.604, `Denyut nadi konsisten.`));
track.addCue(new VTTCue(860.562, 861.646, `Selain itu,`));
track.addCue(new VTTCue(862.687, 864.187, `aku juga tidak tahu.`));
track.addCue(new VTTCue(880.437, 881.979, `Apa yang ia lakukan padanya?`));
track.addCue(new VTTCue(884.729, 886.937, `Hexcore berevolusi.`));
track.addCue(new VTTCue(886.937, 890.187, `Bergeser melalui pola rune
lebih cepat dari yang bisa kuikuti.`));
track.addCue(new VTTCue(890.187, 892.812, `Yang kutahu pasti adalah
itu menjaganya tetap hidup.`));
track.addCue(new VTTCue(894.604, 897.479, `Itu teka-teki yang akan disukai Viktor,
jika dia tidak...`));
track.addCue(new VTTCue(901.812, 904.187, `Seharusnya aku yang di sana, bukan dia.`));
track.addCue(new VTTCue(905.229, 906.479, `Jangan bilang begitu.`));
track.addCue(new VTTCue(907.521, 909.354, `Dia akan kembali kepada kita.`));
track.addCue(new VTTCue(909.354, 911.854, `Aku masih tidak mengerti.`));
track.addCue(new VTTCue(911.854, 913.354, `Dia tepat di sampingku.`));
track.addCue(new VTTCue(913.354, 916.687, `Bagaimana ledakan bisa melakukan itu
kepadanya, sedangkan aku`));
track.addCue(new VTTCue(916.687, 918.729, `keluar tanpa terluka?`));
track.addCue(new VTTCue(923.854, 926.229, `Hal-hal ini tak masuk akal, Jayce.`));
track.addCue(new VTTCue(928.354, 929.687, `Bagaimana dengan Dewan?`));
track.addCue(new VTTCue(931.104, 932.479, `Ibuku ikut bermain.`));
track.addCue(new VTTCue(934.562, 936.896, `Salo sudah termakan pengaruhnya.`));
track.addCue(new VTTCue(936.896, 939.854, `Memanfaatkan kesedihannya
untuk mengincar Hextech.`));
track.addCue(new VTTCue(941.229, 943.521, `Mel, aku berjanji kepada Viktor.`));
track.addCue(new VTTCue(943.521, 944.812, `Tidak akan pernah lagi.`));
track.addCue(new VTTCue(945.396, 946.396, `Tak apa-apa.`));
track.addCue(new VTTCue(946.396, 947.437, `Sudah kutangani.`));
track.addCue(new VTTCue(947.437, 949.854, `Aku tidak akan membiarkan mereka
merusak impianmu.`));
track.addCue(new VTTCue(955.771, 956.854, `Caitlyn ada di sana.`));
track.addCue(new VTTCue(957.437, 958.979, `Kau mungkin perlu mengunjunginya.`));
track.addCue(new VTTCue(958.979, 962.687, `Dia menyembunyikannya dengan baik,
tapi dia sangat menderita.`));
track.addCue(new VTTCue(1013.479, 1014.479, `<i>Hei, Sprout.</i>`));
track.addCue(new VTTCue(1019.396, 1020.646, `Bagaimana kau menemukanku?`));
track.addCue(new VTTCue(1020.646, 1021.562, `Ayahmu.`));
track.addCue(new VTTCue(1023.979, 1026.979, `Ibu dan aku biasa datang ke sini
saat kami butuh pelarian.`));
track.addCue(new VTTCue(1028.521, 1030.771, `Salah satu tempat
kami tak pernah bertengkar.`));
track.addCue(new VTTCue(1031.354, 1033.437, `Maaf aku tak ada belakangan ini.`));
track.addCue(new VTTCue(1035.396, 1036.479, `Bagaimana Viktor?`));
track.addCue(new VTTCue(1040.062, 1042.271, `Aku bahkan tak tahu apa dia masih hidup.`));
track.addCue(new VTTCue(1043.562, 1045.062, `Sejak itu terjadi...`));
track.addCue(new VTTCue(1047.021, 1049.729, `tiga wajah terus berputar di benakku.`));
track.addCue(new VTTCue(1052.521, 1053.396, `Aku melihat Ibu.`));
track.addCue(new VTTCue(1054.479, 1055.604, `Saat dia ditemukan.`));
track.addCue(new VTTCue(1056.396, 1058.854, `Seluruh tubuhku tenggelam,`));
track.addCue(new VTTCue(1058.854, 1061.312, `seperti batu yang ditelan air gelap.`));
track.addCue(new VTTCue(1062.646, 1064.271, `Tapi kemudian ada Jinx.`));
track.addCue(new VTTCue(1064.854, 1065.729, `Tertawa.`));
track.addCue(new VTTCue(1066.979, 1069.729, `Aku ingin merobek tawa itu
dari tenggorokannya selamanya.`));
track.addCue(new VTTCue(1069.729, 1070.646, `Cait.`));
track.addCue(new VTTCue(1071.312, 1072.146, `Aku tahu.`));
track.addCue(new VTTCue(1072.146, 1073.896, `Kini aku mengerti`));
track.addCue(new VTTCue(1073.896, 1076.021, `betapa mudahnya membenci mereka.`));
track.addCue(new VTTCue(1076.021, 1077.812, `Satu tindakan kejam.`));
track.addCue(new VTTCue(1080.854, 1082.271, `Lalu aku melihat Vi.`));
track.addCue(new VTTCue(1084.312, 1086.354, `Aku memintanya memakai seragam.`));
track.addCue(new VTTCue(1086.354, 1088.812, `Bisa dibilang, dia menolak.`));
track.addCue(new VTTCue(1089.396, 1091.396, `Vi? Memakai lencana?`));
track.addCue(new VTTCue(1091.979, 1095.687, `Dia pikir sarung tanganmu
akan menyelesaikan semua masalahnya.`));
track.addCue(new VTTCue(1098.021, 1099.437, `Bagaimana jika dia benar?`));
track.addCue(new VTTCue(1100.937, 1103.104, `Hextech mungkin menjaga kita
tetap hidup, Jayce,`));
track.addCue(new VTTCue(1103.104, 1105.021, `tapi tak akan menyelamatkan kita.`));
track.addCue(new VTTCue(1113.937, 1114.771, `Aku.`));
track.addCue(new VTTCue(1115.562, 1117.229, `Bergabung dengan patroli kacang.`));
track.addCue(new VTTCue(1118.312, 1120.562, `Padahal kukira dia tak punya selera humor.`));
track.addCue(new VTTCue(1122.312, 1123.562, `Aku suka kacang.`));
track.addCue(new VTTCue(1123.562, 1124.812, `Ayahnya benar.`));
track.addCue(new VTTCue(1124.812, 1127.062, `Tidak ada gunanya tetap di sini.`));
track.addCue(new VTTCue(1129.896, 1130.729, `Tapi`));
track.addCue(new VTTCue(1131.271, 1133.396, `aku yang menciptakan monster itu.`));
track.addCue(new VTTCue(1138.937, 1139.771, `Vi?`));
track.addCue(new VTTCue(1148.271, 1149.187, `Siapa kau?`));
track.addCue(new VTTCue(1149.854, 1151.896, `Bagaimana kau tahu namaku?`));
track.addCue(new VTTCue(1152.979, 1154.354, `Petugas Junior Nolen.`));
track.addCue(new VTTCue(1155.062, 1156.271, `Maddie.`));
track.addCue(new VTTCue(1156.271, 1157.354, `Dan...`));
track.addCue(new VTTCue(1158.479, 1160.437, `itu tertulis di wajahmu.`));
track.addCue(new VTTCue(1164.521, 1165.604, `Jadi, ada apa?`));
track.addCue(new VTTCue(1165.604, 1166.687, `Penggeledahan acak?`));
track.addCue(new VTTCue(1166.687, 1168.521, `Mengawal keluar dari properti?`));
track.addCue(new VTTCue(1169.229, 1171.104, `Atau hanya mau membuang waktuku?`));
track.addCue(new VTTCue(1171.646, 1173.312, `Penggeledahan? Tidak.`));
track.addCue(new VTTCue(1173.312, 1174.479, `Tidak.`));
track.addCue(new VTTCue(1174.479, 1178.271, `Kau semacam legenda di antara Enforcer.`));
track.addCue(new VTTCue(1178.271, 1182.229, `Caitlyn membuat keributan di kantor polisi
saat pendaftaranmu ditolak.`));
track.addCue(new VTTCue(1182.771, 1184.062, `Kini aku harus bertanya.`));
track.addCue(new VTTCue(1184.604, 1185.562, `Apa semua itu benar?`));
track.addCue(new VTTCue(1185.562, 1188.729, `Kau mengejar Silco sendirian
saat Dewan tidak mendukungmu?`));
track.addCue(new VTTCue(1188.729, 1190.271, `Melawan seluruh gengnya?`));
track.addCue(new VTTCue(1191.896, 1193.312, `Cait bilang semua itu?`));
track.addCue(new VTTCue(1193.312, 1194.604, `Dia bilang,`));
track.addCue(new VTTCue(1194.604, 1197.104, `jika setiap Enforcer punya hati sepertimu,`));
track.addCue(new VTTCue(1197.104, 1198.979, `kita bisa melawan Noxus.`));
track.addCue(new VTTCue(1200.271, 1202.812, `Lalu dia mengancam
menarik pendanaan keluarganya.`));
track.addCue(new VTTCue(1203.354, 1206.146, `Bagaimanapun, aku senang kau bergabung.`));
track.addCue(new VTTCue(1209.521, 1211.729, `Setelah sherif mengkhianati kita,`));
track.addCue(new VTTCue(1211.729, 1214.396, `anggap saja...`));
track.addCue(new VTTCue(1215.771, 1218.479, `senang mengetahui masih ada yang baik.`));
track.addCue(new VTTCue(1239.771, 1240.896, `Petugas Nolen.`));
track.addCue(new VTTCue(1242.687, 1244.021, `Tugas memanggil.`));
track.addCue(new VTTCue(1244.937, 1246.146, `Suatu kehormatan, Vi.`));
track.addCue(new VTTCue(1267.687, 1269.729, `- Silakan, Bu.
- Lewat sini, Bu.`));
track.addCue(new VTTCue(1269.729, 1272.271, `- Berhenti.
- Tolong terus berjalan.`));
track.addCue(new VTTCue(1312.479, 1315.562, `Salah satu dari banyak privilese
menjadi dewan kalian`));
track.addCue(new VTTCue(1316.104, 1319.937, `adalah sesekali memiliki kesempatan
berdiri di belakang podium ini`));
track.addCue(new VTTCue(1320.521, 1322.062, `untuk melihat begitu banyak,`));
track.addCue(new VTTCue(1322.604, 1325.229, `bukan disatukan
oleh kelahiran atau perintah,`));
track.addCue(new VTTCue(1325.229, 1327.146, `tapi oleh semua yang kita bagi.`));
track.addCue(new VTTCue(1328.312, 1329.604, `Harapan kita.`));
track.addCue(new VTTCue(1331.479, 1332.979, `Keingintahuan kita.`));
track.addCue(new VTTCue(1334.896, 1338.979, `Dorongan kita untuk meninggalkan dunia
yang lebih baik daripada sebelumnya.`));
track.addCue(new VTTCue(1340.354, 1344.104, `Hal-hal yang kita bagi ini
yang menjadikan kita bersatu.`));
track.addCue(new VTTCue(1357.187, 1362.271, `Hari ini kita berbagi kehilangan besar.`));
track.addCue(new VTTCue(1363.896, 1365.646, `Dewan Irius Bolbok,`));
track.addCue(new VTTCue(1366.354, 1368.021, `Dewan Torman Hoskel,`));
track.addCue(new VTTCue(1368.021, 1371.437, `dan Dewan Cassandra Kiramman
direnggut dari kita.`));
track.addCue(new VTTCue(1373.979, 1376.021, `Tapi mereka tak akan dilupakan.`));
track.addCue(new VTTCue(1379.479, 1380.854, `Kami mendirikan patung ini`));
track.addCue(new VTTCue(1380.854, 1383.812, `untuk mengingat kontribusi mereka
yang tak terhitung jumlahnya.`));
track.addCue(new VTTCue(1386.312, 1388.229, `Pengabdian seumur hidup mereka.`));
track.addCue(new VTTCue(1390.104, 1393.062, `Bukan tindakan pengecut
yang telah merenggut mereka.`));
track.addCue(new VTTCue(1393.062, 1394.854, `Bu, kau tak boleh masuk...`));
track.addCue(new VTTCue(1399.229, 1401.604, `Meski kita mengalami pukulan telak,`));
track.addCue(new VTTCue(1402.812, 1406.521, `percayalah,
aturan hukum menang di Piltover.`));
track.addCue(new VTTCue(1407.062, 1409.521, `- Tidak.
- Kita akan temukan pelakunya.`));
track.addCue(new VTTCue(1410.229, 1412.812, `Mereka akan bertanggung jawab
atas kejahatan mereka.`));
track.addCue(new VTTCue(1414.104, 1415.521, `Menyedihkan, bukan?`));
track.addCue(new VTTCue(1420.396, 1422.437, `Kehilangan orang yang dicintai.`));
track.addCue(new VTTCue(1452.271, 1455.187, `Kalian tak aman di sini, Orang Atas.`));
track.addCue(new VTTCue(1457.979, 1459.437, `Kalian semua tak aman.`));
track.addCue(new VTTCue(1483.354, 1484.187, `Awas.`));
track.addCue(new VTTCue(1566.937, 1567.812, `Ayo.`));
track.addCue(new VTTCue(1614.437, 1616.312, `Keluarkan para dewan dari sini.`));
track.addCue(new VTTCue(1616.312, 1617.396, `Aku punya ide.`));
track.addCue(new VTTCue(1617.396, 1618.854, `Apa yang kau lakukan?`));
track.addCue(new VTTCue(1765.854, 1767.896, `Untuk putraku.`));
track.addCue(new VTTCue(1807.229, 1808.521, `Ayo.`));
track.addCue(new VTTCue(1810.021, 1811.312, `Sial.`));
track.addCue(new VTTCue(1906.854, 1908.437, `Perimeter diamankan.`));
track.addCue(new VTTCue(1908.437, 1909.687, `Kita lihat saja nanti.`));
track.addCue(new VTTCue(1923.479, 1925.979, `Kukira kau akan terbunuh.`));
track.addCue(new VTTCue(1931.646, 1933.021, `Ikut aku.`));
track.addCue(new VTTCue(1933.604, 1934.604, `Memorial.`));
track.addCue(new VTTCue(1934.604, 1935.687, `Aku bersamamu.`));
track.addCue(new VTTCue(1936.271, 1938.979, `Binatang macam apa mereka?`));
track.addCue(new VTTCue(1938.979, 1940.979, `Mereka ingin tontonan.`));
track.addCue(new VTTCue(1940.979, 1942.729, `Mereka mencoba menakutimu.`));
track.addCue(new VTTCue(1942.729, 1945.062, `Mereka hanya membuatku kesal.`));
track.addCue(new VTTCue(1945.646, 1946.479, `Kau...`));
track.addCue(new VTTCue(1947.271, 1950.062, `Kau harus mencari cara
untuk membatalkan serangan itu.`));
track.addCue(new VTTCue(1950.062, 1951.104, `Apa?`));
track.addCue(new VTTCue(1951.104, 1953.271, `Pertempuran ini terjadi di tanahmu.`));
track.addCue(new VTTCue(1953.271, 1955.562, `Di bawah sana,
mereka yang memegang kendali.`));
track.addCue(new VTTCue(1955.562, 1958.479, `Semua ini tak sesuai kendali kita.`));
track.addCue(new VTTCue(1958.479, 1961.771, `- Mungkin kau harus mengubah itu.
- Aku tak tahu caranya!`));
track.addCue(new VTTCue(1962.396, 1965.271, `Dia mati dan meninggalkan lubang besar,`));
track.addCue(new VTTCue(1965.271, 1967.687, `dan aku harus mengisinya.`));
track.addCue(new VTTCue(1968.729, 1970.646, `Seolah-olah dia tak pernah ada.`));
track.addCue(new VTTCue(1971.187, 1972.021, `Hei.`));
track.addCue(new VTTCue(1972.604, 1973.437, `Tidak akan.`));
track.addCue(new VTTCue(1974.062, 1975.771, `Lubangnya mengecil,`));
track.addCue(new VTTCue(1976.812, 1978.187, `tapi kau tidak pernah mengisinya.`));
track.addCue(new VTTCue(1983.604, 1985.771, `Aku salah memberikan lencana itu kepadamu.`));
track.addCue(new VTTCue(1987.146, 1988.396, `Hanya saja...`));
track.addCue(new VTTCue(1988.396, 1990.187, `Bagaimana pun kupikirkan,`));
track.addCue(new VTTCue(1990.729, 1992.687, `jika aku mengejar adikmu sendirian,`));
track.addCue(new VTTCue(1992.687, 1994.812, `salah satu dari kami akan mati.`));
track.addCue(new VTTCue(1996.729, 1998.229, `Semuanya hancur.`));
track.addCue(new VTTCue(2000.104, 2001.021, `Tidak.`));
track.addCue(new VTTCue(2002.771, 2003.854, `Tak akan kita biarkan.`));
track.addCue(new VTTCue(2018.104, 2021.187, `<i>Aku tahu kau meragukan
hak lahirmu, Caitlyn.</i>`));
track.addCue(new VTTCue(2022.979, 2024.354, `<i>Ada kebijaksanaan di dalamnya.</i>`));
track.addCue(new VTTCue(2027.271, 2028.229, `<i>Tapi ingat.</i>`));
track.addCue(new VTTCue(2031.729, 2033.062, `<i>Kau seorang Kiramman.</i>`));
track.addCue(new VTTCue(2063.396, 2064.979, `Tak pernah sekali pun`));
track.addCue(new VTTCue(2064.979, 2068.979, `pemimpin Piltover dipaksa
ke penjara bawah tanah ibu kota kita.`));
track.addCue(new VTTCue(2070.771, 2071.979, `Tapi di sinilah kita.`));
track.addCue(new VTTCue(2072.729, 2077.687, `Apa masih ada yang ragu bahwa musuh kita
lebih besar daripada satu individu gila?`));
track.addCue(new VTTCue(2078.229, 2081.979, `Bagaimana mereka menyelundupkan
banyak benda ini ke upacara?`));
track.addCue(new VTTCue(2081.979, 2085.062, `Kukira kita sudah melakukan segala cara
untuk mengamankannya.`));
track.addCue(new VTTCue(2085.062, 2086.562, `Mereka pasti mendapat bantuan.`));
track.addCue(new VTTCue(2087.104, 2088.396, `Dari seseorang di sini.`));
track.addCue(new VTTCue(2088.979, 2091.146, `Tidak boleh terjadi serangan lagi.`));
track.addCue(new VTTCue(2091.146, 2093.271, `Jika kita tak membela diri dengan Hextech,`));
track.addCue(new VTTCue(2093.271, 2095.312, `prinsip kita takkan berarti.`));
track.addCue(new VTTCue(2096.896, 2097.729, `Aku...`));
track.addCue(new VTTCue(2098.812, 2101.104, `Kita tak siap untuk serangan skala penuh.`));
track.addCue(new VTTCue(2101.104, 2102.979, `Serangan kota bawah membuktikan itu.`));
track.addCue(new VTTCue(2102.979, 2106.021, `Ini rapat Dewan tertutup.
Siapa yang mengizinkanmu masuk?`));
track.addCue(new VTTCue(2107.062, 2109.104, `Aku petugas berprestasi.`));
track.addCue(new VTTCue(2109.104, 2110.812, `Pemimpin Klan Kiramman.`));
track.addCue(new VTTCue(2110.812, 2112.771, `Panggil aku dengan hormat,`));
track.addCue(new VTTCue(2112.771, 2114.687, `atau tutup mulutmu.`));
track.addCue(new VTTCue(2116.896, 2119.854, `Aku akan memimpin tim serbu ke Zaun
dengan tiga tujuan.`));
track.addCue(new VTTCue(2121.229, 2122.521, `Menemukan Jinx,`));
track.addCue(new VTTCue(2123.437, 2124.521, `<i>menghancurkan Shimmer,</i>`));
track.addCue(new VTTCue(2125.312, 2128.354, `<i>dan melumpuhkan agen
yang masih setia kepada Silco.</i>`));
track.addCue(new VTTCue(2129.104, 2132.562, `Apa yang membuatmu berpikir
kau akan lebih baik dari pasukan hari ini?`));
track.addCue(new VTTCue(2135.646, 2137.354, `Kami punya beberapa kejutan.`));
track.addCue(new VTTCue(2181.729, 2184.729, `PENDUKUNG KEMAJUAN`));
track.addCue(new VTTCue(2344.937, 2347.437, `Terjemahan subtitle oleh Dea Anindya`));
container.appendChild(column);
videoList[`4`] = videoElem;
column = document.createElement('DIV')
im = new Image();
im.src = `https://static.sonicbowl.cloud/img/podcast/5f943cf5-7d2c-4349-9ed6-0db8b1522437-20241013235131.jpg`;
im.alt = `グローバルニュース DAILY BRIEF supported by GRIC2024`;
column.appendChild(im);
column.id = `5`;
videoElem = document.createElement('VIDEO');
videoElem.id = `5`;
videoElem.src = `https://feed.sonicbowl.cloud/audio/d6d2d648-f292-48bc-b1f3-6f8cb3af0278/audio.mp3?updated=1726098614`;
track = videoElem.addTextTrack('subtitles', 'english', 'en');
track.mode = 'showing';
track.addCue(new VTTCue(0.0, 40.687, `Made By Giorgio Chirinos`));
track.addCue(new VTTCue(47.021, 49.729, `Mel, kau baik-baik saja?`));
track.addCue(new VTTCue(67.896, 68.729, `Tidak apa-apa.`));
track.addCue(new VTTCue(95.812, 96.646, `Tidak.`));
track.addCue(new VTTCue(101.896, 103.896, `- Kau terluka?
- Aku baik-baik saja.`));
track.addCue(new VTTCue(108.312, 109.854, `Pergilah.`));
track.addCue(new VTTCue(354.021, 355.771, `Dia wanita yang hebat.`));
track.addCue(new VTTCue(355.771, 357.271, `Teman yang baik.`));
track.addCue(new VTTCue(358.479, 361.479, `Entah bagaimana kita menghadapi
krisis ini tanpanya.`));
track.addCue(new VTTCue(370.021, 373.104, `Kita hampir memperpanjang kedaulatan`));
track.addCue(new VTTCue(373.687, 375.562, `kepada makhluk yang melakukan ini.`));
track.addCue(new VTTCue(377.354, 379.312, `Kita ditugaskan
untuk menegakkan ketertiban.`));
track.addCue(new VTTCue(380.479, 382.562, `Tapi kita telah lalai.`));
track.addCue(new VTTCue(383.104, 384.479, `Aku telah sadar.`));
track.addCue(new VTTCue(385.021, 387.187, `Tidak akan ada lagi dongeng perdamaian`));
track.addCue(new VTTCue(387.187, 390.104, `sampai kita menumpas para iblis
dari basemen kita.`));
track.addCue(new VTTCue(390.979, 394.021, `Kau baik sekali membantu Dewan Salo, Ibu.`));
track.addCue(new VTTCue(394.604, 396.104, `Karena kita sedang berperang,`));
track.addCue(new VTTCue(396.104, 400.271, `kupikir bijaksana untuk meminta saran
dari veteran berpengalaman.`));
track.addCue(new VTTCue(401.146, 403.729, `Mari kita bahas masalah saat ini.`));
track.addCue(new VTTCue(403.729, 406.187, `Rakyat kita takut, menderita.`));
track.addCue(new VTTCue(406.187, 409.604, `Mereka harus tahu pemimpin mereka
bisa mengendalikan situasi.`));
track.addCue(new VTTCue(409.604, 411.687, `Pamer kekuatan
yang belum pernah dilakukan.`));
track.addCue(new VTTCue(411.687, 416.146, `Kita banjiri kota bawah dengan Enforcer,
dipersenjatai Hextech.`));
track.addCue(new VTTCue(416.146, 418.687, `Orang tak bersalah akan terjebak
dalam baku tembak.`));
track.addCue(new VTTCue(418.687, 422.104, `Berapa banyak lagi anggota dewan
yang harus diledakkan sebelum kau sadar?`));
track.addCue(new VTTCue(422.104, 423.354, `Kita dikepung.`));
track.addCue(new VTTCue(427.979, 429.354, `Sedang apa dia di sini?`));
track.addCue(new VTTCue(429.896, 432.312, `Petugas Kiramman menyaksikan
serangan itu langsung.`));
track.addCue(new VTTCue(432.312, 435.729, `Dia memastikan
ini tindakan satu orang gila.`));
track.addCue(new VTTCue(436.312, 437.271, `Jinx.`));
track.addCue(new VTTCue(437.271, 438.396, `Silco sudah mati.`));
track.addCue(new VTTCue(438.396, 440.479, `Kota bawah tanah tak punya pemimpin.`));
track.addCue(new VTTCue(440.479, 443.604, `Jika mengikuti rencanamu,
mereka bisa bersatu melawan kita.`));
track.addCue(new VTTCue(443.604, 445.229, `Jadi, apa solusimu?`));
track.addCue(new VTTCue(445.229, 446.146, `Hukuman?`));
track.addCue(new VTTCue(446.687, 447.896, `Teguran tegas?`));
track.addCue(new VTTCue(447.896, 450.062, `Kita gunakan perpecahan
untuk melawan mereka.`));
track.addCue(new VTTCue(450.062, 451.646, `Salahkan Jinx,`));
track.addCue(new VTTCue(451.646, 454.396, `pasang imbalan sangat besar
yang tak bisa diabaikan.`));
track.addCue(new VTTCue(454.396, 455.396, `Maaf, Mel.`));
track.addCue(new VTTCue(455.396, 458.521, `Aku tidak nyaman memercayakan
takdir kita pada ketidakpastian.`));
track.addCue(new VTTCue(458.521, 460.146, `Jinx terbukti sulit ditangkap.`));
track.addCue(new VTTCue(460.146, 463.854, `Kita baru bisa mulai pulih
setelah dia diadili.`));
track.addCue(new VTTCue(468.229, 471.646, `Kalau begitu, kita sepakat,
dua lawan satu.`));
track.addCue(new VTTCue(472.312, 473.396, `Kita menyerang.`));
track.addCue(new VTTCue(477.562, 478.979, `Jika boleh berpendapat...`));
track.addCue(new VTTCue(478.979, 480.521, `Dalam krisis seperti ini,`));
track.addCue(new VTTCue(480.521, 484.396, `sangat penting kalian terlihat kompak
di depan publik,`));
track.addCue(new VTTCue(484.396, 486.562, `apa pun perasaan pribadi kalian.`));
track.addCue(new VTTCue(489.021, 490.146, `Bijaksana sekali.`));
track.addCue(new VTTCue(492.396, 494.229, `Aku setuju mendukung serangan itu.`));
track.addCue(new VTTCue(496.271, 498.521, `Tapi aku membuat batasan di Hextech.`));
track.addCue(new VTTCue(499.521, 501.187, `Kita punya etos.`));
track.addCue(new VTTCue(501.187, 504.187, `Serangan seperti itu
harus menjadi pilihan terakhir.`));
track.addCue(new VTTCue(505.729, 506.896, `Setuju.`));
track.addCue(new VTTCue(508.812, 511.729, `Kalau begitu, kita sepakat,
dua lawan satu.`));
track.addCue(new VTTCue(585.146, 586.937, `Aku punya kesempatan.`));
track.addCue(new VTTCue(600.812, 603.187, `Ibumu meninggalkan ini untukmu.`));
track.addCue(new VTTCue(604.937, 606.104, `Kunci Kiramman?`));
track.addCue(new VTTCue(606.687, 608.104, `Tidak, aku bukan...`));
track.addCue(new VTTCue(609.062, 610.437, `Aku tidak pantas menerimanya.`));
track.addCue(new VTTCue(610.437, 613.146, `Kini itu warisanmu, Caitlyn.`));
track.addCue(new VTTCue(629.146, 631.062, `Kenapa dia masih di sini?`));
track.addCue(new VTTCue(655.562, 656.396, `Hei.`));
track.addCue(new VTTCue(679.729, 680.979, `Kau benar, Cait.`));
track.addCue(new VTTCue(681.521, 682.937, `Powder sudah tak ada.`));
track.addCue(new VTTCue(684.562, 685.937, `Aku bisa memperbaiki ini.`));
track.addCue(new VTTCue(685.937, 688.229, `Jika kau minta Jayce
memperbaiki sarung tangan,`));
track.addCue(new VTTCue(688.229, 689.812, `aku bisa melakukannya sendiri.`));
track.addCue(new VTTCue(689.812, 691.687, `Tak ada lagi yang perlu terluka.`));
track.addCue(new VTTCue(692.229, 693.146, `Tidak.`));
track.addCue(new VTTCue(693.146, 694.771, `Tak ada lagi misi liar.`));
track.addCue(new VTTCue(694.771, 696.896, `Tak ada lagi rencana ceroboh.`));
track.addCue(new VTTCue(696.896, 698.271, `Ibuku benar.`));
track.addCue(new VTTCue(698.271, 700.896, `Kesombonganku membuatku serakah,`));
track.addCue(new VTTCue(700.896, 702.521, `dan dia menanggung akibatnya.`));
track.addCue(new VTTCue(706.604, 708.854, `Mereka mengirim semua Enforcer
untuk mengejar Jinx.`));
track.addCue(new VTTCue(710.021, 711.396, `Aku akan ikut mereka.`));
track.addCue(new VTTCue(711.979, 714.146, `Kumohon, aku harus membantu.`));
track.addCue(new VTTCue(714.771, 715.604, `Kau bisa bantu.`));
track.addCue(new VTTCue(724.104, 725.021, `Sebagai bagian dari kami.`));
track.addCue(new VTTCue(725.854, 728.354, `Cait, aku tak bisa memakai ini.`));
track.addCue(new VTTCue(728.354, 729.812, `Rakyat ingin darah.`));
track.addCue(new VTTCue(730.521, 731.937, `Dewan takkan hentikan mereka.`));
track.addCue(new VTTCue(731.937, 734.979, `Kau bisa tunjukkan
bahwa tak semua Zaun mendukung Jinx.`));
track.addCue(new VTTCue(735.979, 737.021, `Kita bisa tunjukkan.`));
track.addCue(new VTTCue(738.062, 738.979, `Bersama.`));
track.addCue(new VTTCue(739.562, 741.312, `Aku lihat mereka membunuh orang tuaku.`));
track.addCue(new VTTCue(741.312, 743.562, `Kau tahu bagaimana rasanya?`));
track.addCue(new VTTCue(743.562, 744.479, `Ya.`));
track.addCue(new VTTCue(744.479, 745.562, `Aku tahu.`));
track.addCue(new VTTCue(750.396, 752.312, `Kupikir kau di pihak kami.`));
track.addCue(new VTTCue(753.396, 754.812, `Kau tak berpikir begitu.`));
track.addCue(new VTTCue(790.021, 791.812, `Hei, hati-hati.`));
track.addCue(new VTTCue(793.937, 794.854, `Maaf.`));
track.addCue(new VTTCue(798.437, 799.687, `Bukan yang pertama.`));
track.addCue(new VTTCue(805.187, 806.354, `Kau baik-baik saja?`));
track.addCue(new VTTCue(821.604, 822.687, `Kau`));
track.addCue(new VTTCue(822.687, 824.854, `kehilangan seseorang dalam serangan itu?`));
track.addCue(new VTTCue(853.312, 854.396, `Bagaimana keadaannya?`));
track.addCue(new VTTCue(854.979, 856.937, `Sama seperti sebelumnya. Bernapas.`));
track.addCue(new VTTCue(858.146, 859.604, `Denyut nadi konsisten.`));
track.addCue(new VTTCue(860.562, 861.646, `Selain itu,`));
track.addCue(new VTTCue(862.687, 864.187, `aku juga tidak tahu.`));
track.addCue(new VTTCue(880.437, 881.979, `Apa yang ia lakukan padanya?`));
track.addCue(new VTTCue(884.729, 886.937, `Hexcore berevolusi.`));
track.addCue(new VTTCue(886.937, 890.187, `Bergeser melalui pola rune
lebih cepat dari yang bisa kuikuti.`));
track.addCue(new VTTCue(890.187, 892.812, `Yang kutahu pasti adalah
itu menjaganya tetap hidup.`));
track.addCue(new VTTCue(894.604, 897.479, `Itu teka-teki yang akan disukai Viktor,
jika dia tidak...`));
track.addCue(new VTTCue(901.812, 904.187, `Seharusnya aku yang di sana, bukan dia.`));
track.addCue(new VTTCue(905.229, 906.479, `Jangan bilang begitu.`));
track.addCue(new VTTCue(907.521, 909.354, `Dia akan kembali kepada kita.`));
track.addCue(new VTTCue(909.354, 911.854, `Aku masih tidak mengerti.`));
track.addCue(new VTTCue(911.854, 913.354, `Dia tepat di sampingku.`));
track.addCue(new VTTCue(913.354, 916.687, `Bagaimana ledakan bisa melakukan itu
kepadanya, sedangkan aku`));
track.addCue(new VTTCue(916.687, 918.729, `keluar tanpa terluka?`));
track.addCue(new VTTCue(923.854, 926.229, `Hal-hal ini tak masuk akal, Jayce.`));
track.addCue(new VTTCue(928.354, 929.687, `Bagaimana dengan Dewan?`));
track.addCue(new VTTCue(931.104, 932.479, `Ibuku ikut bermain.`));
track.addCue(new VTTCue(934.562, 936.896, `Salo sudah termakan pengaruhnya.`));
track.addCue(new VTTCue(936.896, 939.854, `Memanfaatkan kesedihannya
untuk mengincar Hextech.`));
track.addCue(new VTTCue(941.229, 943.521, `Mel, aku berjanji kepada Viktor.`));
track.addCue(new VTTCue(943.521, 944.812, `Tidak akan pernah lagi.`));
track.addCue(new VTTCue(945.396, 946.396, `Tak apa-apa.`));
track.addCue(new VTTCue(946.396, 947.437, `Sudah kutangani.`));
track.addCue(new VTTCue(947.437, 949.854, `Aku tidak akan membiarkan mereka
merusak impianmu.`));
track.addCue(new VTTCue(955.771, 956.854, `Caitlyn ada di sana.`));
track.addCue(new VTTCue(957.437, 958.979, `Kau mungkin perlu mengunjunginya.`));
track.addCue(new VTTCue(958.979, 962.687, `Dia menyembunyikannya dengan baik,
tapi dia sangat menderita.`));
track.addCue(new VTTCue(1013.479, 1014.479, `<i>Hei, Sprout.</i>`));
track.addCue(new VTTCue(1019.396, 1020.646, `Bagaimana kau menemukanku?`));
track.addCue(new VTTCue(1020.646, 1021.562, `Ayahmu.`));
track.addCue(new VTTCue(1023.979, 1026.979, `Ibu dan aku biasa datang ke sini
saat kami butuh pelarian.`));
track.addCue(new VTTCue(1028.521, 1030.771, `Salah satu tempat
kami tak pernah bertengkar.`));
track.addCue(new VTTCue(1031.354, 1033.437, `Maaf aku tak ada belakangan ini.`));
track.addCue(new VTTCue(1035.396, 1036.479, `Bagaimana Viktor?`));
track.addCue(new VTTCue(1040.062, 1042.271, `Aku bahkan tak tahu apa dia masih hidup.`));
track.addCue(new VTTCue(1043.562, 1045.062, `Sejak itu terjadi...`));
track.addCue(new VTTCue(1047.021, 1049.729, `tiga wajah terus berputar di benakku.`));
track.addCue(new VTTCue(1052.521, 1053.396, `Aku melihat Ibu.`));
track.addCue(new VTTCue(1054.479, 1055.604, `Saat dia ditemukan.`));
track.addCue(new VTTCue(1056.396, 1058.854, `Seluruh tubuhku tenggelam,`));
track.addCue(new VTTCue(1058.854, 1061.312, `seperti batu yang ditelan air gelap.`));
track.addCue(new VTTCue(1062.646, 1064.271, `Tapi kemudian ada Jinx.`));
track.addCue(new VTTCue(1064.854, 1065.729, `Tertawa.`));
track.addCue(new VTTCue(1066.979, 1069.729, `Aku ingin merobek tawa itu
dari tenggorokannya selamanya.`));
track.addCue(new VTTCue(1069.729, 1070.646, `Cait.`));
track.addCue(new VTTCue(1071.312, 1072.146, `Aku tahu.`));
track.addCue(new VTTCue(1072.146, 1073.896, `Kini aku mengerti`));
track.addCue(new VTTCue(1073.896, 1076.021, `betapa mudahnya membenci mereka.`));
track.addCue(new VTTCue(1076.021, 1077.812, `Satu tindakan kejam.`));
track.addCue(new VTTCue(1080.854, 1082.271, `Lalu aku melihat Vi.`));
track.addCue(new VTTCue(1084.312, 1086.354, `Aku memintanya memakai seragam.`));
track.addCue(new VTTCue(1086.354, 1088.812, `Bisa dibilang, dia menolak.`));
track.addCue(new VTTCue(1089.396, 1091.396, `Vi? Memakai lencana?`));
track.addCue(new VTTCue(1091.979, 1095.687, `Dia pikir sarung tanganmu
akan menyelesaikan semua masalahnya.`));
track.addCue(new VTTCue(1098.021, 1099.437, `Bagaimana jika dia benar?`));
track.addCue(new VTTCue(1100.937, 1103.104, `Hextech mungkin menjaga kita
tetap hidup, Jayce,`));
track.addCue(new VTTCue(1103.104, 1105.021, `tapi tak akan menyelamatkan kita.`));
track.addCue(new VTTCue(1113.937, 1114.771, `Aku.`));
track.addCue(new VTTCue(1115.562, 1117.229, `Bergabung dengan patroli kacang.`));
track.addCue(new VTTCue(1118.312, 1120.562, `Padahal kukira dia tak punya selera humor.`));
track.addCue(new VTTCue(1122.312, 1123.562, `Aku suka kacang.`));
track.addCue(new VTTCue(1123.562, 1124.812, `Ayahnya benar.`));
track.addCue(new VTTCue(1124.812, 1127.062, `Tidak ada gunanya tetap di sini.`));
track.addCue(new VTTCue(1129.896, 1130.729, `Tapi`));
track.addCue(new VTTCue(1131.271, 1133.396, `aku yang menciptakan monster itu.`));
track.addCue(new VTTCue(1138.937, 1139.771, `Vi?`));
track.addCue(new VTTCue(1148.271, 1149.187, `Siapa kau?`));
track.addCue(new VTTCue(1149.854, 1151.896, `Bagaimana kau tahu namaku?`));
track.addCue(new VTTCue(1152.979, 1154.354, `Petugas Junior Nolen.`));
track.addCue(new VTTCue(1155.062, 1156.271, `Maddie.`));
track.addCue(new VTTCue(1156.271, 1157.354, `Dan...`));
track.addCue(new VTTCue(1158.479, 1160.437, `itu tertulis di wajahmu.`));
track.addCue(new VTTCue(1164.521, 1165.604, `Jadi, ada apa?`));
track.addCue(new VTTCue(1165.604, 1166.687, `Penggeledahan acak?`));
track.addCue(new VTTCue(1166.687, 1168.521, `Mengawal keluar dari properti?`));
track.addCue(new VTTCue(1169.229, 1171.104, `Atau hanya mau membuang waktuku?`));
track.addCue(new VTTCue(1171.646, 1173.312, `Penggeledahan? Tidak.`));
track.addCue(new VTTCue(1173.312, 1174.479, `Tidak.`));
track.addCue(new VTTCue(1174.479, 1178.271, `Kau semacam legenda di antara Enforcer.`));
track.addCue(new VTTCue(1178.271, 1182.229, `Caitlyn membuat keributan di kantor polisi
saat pendaftaranmu ditolak.`));
track.addCue(new VTTCue(1182.771, 1184.062, `Kini aku harus bertanya.`));
track.addCue(new VTTCue(1184.604, 1185.562, `Apa semua itu benar?`));
track.addCue(new VTTCue(1185.562, 1188.729, `Kau mengejar Silco sendirian
saat Dewan tidak mendukungmu?`));
track.addCue(new VTTCue(1188.729, 1190.271, `Melawan seluruh gengnya?`));
track.addCue(new VTTCue(1191.896, 1193.312, `Cait bilang semua itu?`));
track.addCue(new VTTCue(1193.312, 1194.604, `Dia bilang,`));
track.addCue(new VTTCue(1194.604, 1197.104, `jika setiap Enforcer punya hati sepertimu,`));
track.addCue(new VTTCue(1197.104, 1198.979, `kita bisa melawan Noxus.`));
track.addCue(new VTTCue(1200.271, 1202.812, `Lalu dia mengancam
menarik pendanaan keluarganya.`));
track.addCue(new VTTCue(1203.354, 1206.146, `Bagaimanapun, aku senang kau bergabung.`));
track.addCue(new VTTCue(1209.521, 1211.729, `Setelah sherif mengkhianati kita,`));
track.addCue(new VTTCue(1211.729, 1214.396, `anggap saja...`));
track.addCue(new VTTCue(1215.771, 1218.479, `senang mengetahui masih ada yang baik.`));
track.addCue(new VTTCue(1239.771, 1240.896, `Petugas Nolen.`));
track.addCue(new VTTCue(1242.687, 1244.021, `Tugas memanggil.`));
track.addCue(new VTTCue(1244.937, 1246.146, `Suatu kehormatan, Vi.`));
track.addCue(new VTTCue(1267.687, 1269.729, `- Silakan, Bu.
- Lewat sini, Bu.`));
track.addCue(new VTTCue(1269.729, 1272.271, `- Berhenti.
- Tolong terus berjalan.`));
track.addCue(new VTTCue(1312.479, 1315.562, `Salah satu dari banyak privilese
menjadi dewan kalian`));
track.addCue(new VTTCue(1316.104, 1319.937, `adalah sesekali memiliki kesempatan
berdiri di belakang podium ini`));
track.addCue(new VTTCue(1320.521, 1322.062, `untuk melihat begitu banyak,`));
track.addCue(new VTTCue(1322.604, 1325.229, `bukan disatukan
oleh kelahiran atau perintah,`));
track.addCue(new VTTCue(1325.229, 1327.146, `tapi oleh semua yang kita bagi.`));
track.addCue(new VTTCue(1328.312, 1329.604, `Harapan kita.`));
track.addCue(new VTTCue(1331.479, 1332.979, `Keingintahuan kita.`));
track.addCue(new VTTCue(1334.896, 1338.979, `Dorongan kita untuk meninggalkan dunia
yang lebih baik daripada sebelumnya.`));
track.addCue(new VTTCue(1340.354, 1344.104, `Hal-hal yang kita bagi ini
yang menjadikan kita bersatu.`));
track.addCue(new VTTCue(1357.187, 1362.271, `Hari ini kita berbagi kehilangan besar.`));
track.addCue(new VTTCue(1363.896, 1365.646, `Dewan Irius Bolbok,`));
track.addCue(new VTTCue(1366.354, 1368.021, `Dewan Torman Hoskel,`));
track.addCue(new VTTCue(1368.021, 1371.437, `dan Dewan Cassandra Kiramman
direnggut dari kita.`));
track.addCue(new VTTCue(1373.979, 1376.021, `Tapi mereka tak akan dilupakan.`));
track.addCue(new VTTCue(1379.479, 1380.854, `Kami mendirikan patung ini`));
track.addCue(new VTTCue(1380.854, 1383.812, `untuk mengingat kontribusi mereka
yang tak terhitung jumlahnya.`));
track.addCue(new VTTCue(1386.312, 1388.229, `Pengabdian seumur hidup mereka.`));
track.addCue(new VTTCue(1390.104, 1393.062, `Bukan tindakan pengecut
yang telah merenggut mereka.`));
track.addCue(new VTTCue(1393.062, 1394.854, `Bu, kau tak boleh masuk...`));
track.addCue(new VTTCue(1399.229, 1401.604, `Meski kita mengalami pukulan telak,`));
track.addCue(new VTTCue(1402.812, 1406.521, `percayalah,
aturan hukum menang di Piltover.`));
track.addCue(new VTTCue(1407.062, 1409.521, `- Tidak.
- Kita akan temukan pelakunya.`));
track.addCue(new VTTCue(1410.229, 1412.812, `Mereka akan bertanggung jawab
atas kejahatan mereka.`));
track.addCue(new VTTCue(1414.104, 1415.521, `Menyedihkan, bukan?`));
track.addCue(new VTTCue(1420.396, 1422.437, `Kehilangan orang yang dicintai.`));
track.addCue(new VTTCue(1452.271, 1455.187, `Kalian tak aman di sini, Orang Atas.`));
track.addCue(new VTTCue(1457.979, 1459.437, `Kalian semua tak aman.`));
track.addCue(new VTTCue(1483.354, 1484.187, `Awas.`));
track.addCue(new VTTCue(1566.937, 1567.812, `Ayo.`));
track.addCue(new VTTCue(1614.437, 1616.312, `Keluarkan para dewan dari sini.`));
track.addCue(new VTTCue(1616.312, 1617.396, `Aku punya ide.`));
track.addCue(new VTTCue(1617.396, 1618.854, `Apa yang kau lakukan?`));
track.addCue(new VTTCue(1765.854, 1767.896, `Untuk putraku.`));
track.addCue(new VTTCue(1807.229, 1808.521, `Ayo.`));
track.addCue(new VTTCue(1810.021, 1811.312, `Sial.`));
track.addCue(new VTTCue(1906.854, 1908.437, `Perimeter diamankan.`));
track.addCue(new VTTCue(1908.437, 1909.687, `Kita lihat saja nanti.`));
track.addCue(new VTTCue(1923.479, 1925.979, `Kukira kau akan terbunuh.`));
track.addCue(new VTTCue(1931.646, 1933.021, `Ikut aku.`));
track.addCue(new VTTCue(1933.604, 1934.604, `Memorial.`));
track.addCue(new VTTCue(1934.604, 1935.687, `Aku bersamamu.`));
track.addCue(new VTTCue(1936.271, 1938.979, `Binatang macam apa mereka?`));
track.addCue(new VTTCue(1938.979, 1940.979, `Mereka ingin tontonan.`));
track.addCue(new VTTCue(1940.979, 1942.729, `Mereka mencoba menakutimu.`));
track.addCue(new VTTCue(1942.729, 1945.062, `Mereka hanya membuatku kesal.`));
track.addCue(new VTTCue(1945.646, 1946.479, `Kau...`));
track.addCue(new VTTCue(1947.271, 1950.062, `Kau harus mencari cara
untuk membatalkan serangan itu.`));
track.addCue(new VTTCue(1950.062, 1951.104, `Apa?`));
track.addCue(new VTTCue(1951.104, 1953.271, `Pertempuran ini terjadi di tanahmu.`));
track.addCue(new VTTCue(1953.271, 1955.562, `Di bawah sana,
mereka yang memegang kendali.`));
track.addCue(new VTTCue(1955.562, 1958.479, `Semua ini tak sesuai kendali kita.`));
track.addCue(new VTTCue(1958.479, 1961.771, `- Mungkin kau harus mengubah itu.
- Aku tak tahu caranya!`));
track.addCue(new VTTCue(1962.396, 1965.271, `Dia mati dan meninggalkan lubang besar,`));
track.addCue(new VTTCue(1965.271, 1967.687, `dan aku harus mengisinya.`));
track.addCue(new VTTCue(1968.729, 1970.646, `Seolah-olah dia tak pernah ada.`));
track.addCue(new VTTCue(1971.187, 1972.021, `Hei.`));
track.addCue(new VTTCue(1972.604, 1973.437, `Tidak akan.`));
track.addCue(new VTTCue(1974.062, 1975.771, `Lubangnya mengecil,`));
track.addCue(new VTTCue(1976.812, 1978.187, `tapi kau tidak pernah mengisinya.`));
track.addCue(new VTTCue(1983.604, 1985.771, `Aku salah memberikan lencana itu kepadamu.`));
track.addCue(new VTTCue(1987.146, 1988.396, `Hanya saja...`));
track.addCue(new VTTCue(1988.396, 1990.187, `Bagaimana pun kupikirkan,`));
track.addCue(new VTTCue(1990.729, 1992.687, `jika aku mengejar adikmu sendirian,`));
track.addCue(new VTTCue(1992.687, 1994.812, `salah satu dari kami akan mati.`));
track.addCue(new VTTCue(1996.729, 1998.229, `Semuanya hancur.`));
track.addCue(new VTTCue(2000.104, 2001.021, `Tidak.`));
track.addCue(new VTTCue(2002.771, 2003.854, `Tak akan kita biarkan.`));
track.addCue(new VTTCue(2018.104, 2021.187, `<i>Aku tahu kau meragukan
hak lahirmu, Caitlyn.</i>`));
track.addCue(new VTTCue(2022.979, 2024.354, `<i>Ada kebijaksanaan di dalamnya.</i>`));
track.addCue(new VTTCue(2027.271, 2028.229, `<i>Tapi ingat.</i>`));
track.addCue(new VTTCue(2031.729, 2033.062, `<i>Kau seorang Kiramman.</i>`));
track.addCue(new VTTCue(2063.396, 2064.979, `Tak pernah sekali pun`));
track.addCue(new VTTCue(2064.979, 2068.979, `pemimpin Piltover dipaksa
ke penjara bawah tanah ibu kota kita.`));
track.addCue(new VTTCue(2070.771, 2071.979, `Tapi di sinilah kita.`));
track.addCue(new VTTCue(2072.729, 2077.687, `Apa masih ada yang ragu bahwa musuh kita
lebih besar daripada satu individu gila?`));
track.addCue(new VTTCue(2078.229, 2081.979, `Bagaimana mereka menyelundupkan
banyak benda ini ke upacara?`));
track.addCue(new VTTCue(2081.979, 2085.062, `Kukira kita sudah melakukan segala cara
untuk mengamankannya.`));
track.addCue(new VTTCue(2085.062, 2086.562, `Mereka pasti mendapat bantuan.`));
track.addCue(new VTTCue(2087.104, 2088.396, `Dari seseorang di sini.`));
track.addCue(new VTTCue(2088.979, 2091.146, `Tidak boleh terjadi serangan lagi.`));
track.addCue(new VTTCue(2091.146, 2093.271, `Jika kita tak membela diri dengan Hextech,`));
track.addCue(new VTTCue(2093.271, 2095.312, `prinsip kita takkan berarti.`));
track.addCue(new VTTCue(2096.896, 2097.729, `Aku...`));
track.addCue(new VTTCue(2098.812, 2101.104, `Kita tak siap untuk serangan skala penuh.`));
track.addCue(new VTTCue(2101.104, 2102.979, `Serangan kota bawah membuktikan itu.`));
track.addCue(new VTTCue(2102.979, 2106.021, `Ini rapat Dewan tertutup.
Siapa yang mengizinkanmu masuk?`));
track.addCue(new VTTCue(2107.062, 2109.104, `Aku petugas berprestasi.`));
track.addCue(new VTTCue(2109.104, 2110.812, `Pemimpin Klan Kiramman.`));
track.addCue(new VTTCue(2110.812, 2112.771, `Panggil aku dengan hormat,`));
track.addCue(new VTTCue(2112.771, 2114.687, `atau tutup mulutmu.`));
track.addCue(new VTTCue(2116.896, 2119.854, `Aku akan memimpin tim serbu ke Zaun
dengan tiga tujuan.`));
track.addCue(new VTTCue(2121.229, 2122.521, `Menemukan Jinx,`));
track.addCue(new VTTCue(2123.437, 2124.521, `<i>menghancurkan Shimmer,</i>`));
track.addCue(new VTTCue(2125.312, 2128.354, `<i>dan melumpuhkan agen
yang masih setia kepada Silco.</i>`));
track.addCue(new VTTCue(2129.104, 2132.562, `Apa yang membuatmu berpikir
kau akan lebih baik dari pasukan hari ini?`));
track.addCue(new VTTCue(2135.646, 2137.354, `Kami punya beberapa kejutan.`));
track.addCue(new VTTCue(2181.729, 2184.729, `PENDUKUNG KEMAJUAN`));
track.addCue(new VTTCue(2344.937, 2347.437, `Terjemahan subtitle oleh Dea Anindya`));
container.appendChild(column);
videoList[`5`] = videoElem;
column = document.createElement('DIV')
im = new Image();
im.src = `https://static.sonicbowl.cloud/img/podcast/5f943cf5-7d2c-4349-9ed6-0db8b1522437-20241013235131.jpg`;
im.alt = `グローバルニュース DAILY BRIEF supported by GRIC2024`;
column.appendChild(im);
column.id = `6`;
videoElem = document.createElement('VIDEO');
videoElem.id = `6`;
videoElem.src = `https://feed.sonicbowl.cloud/audio/d6d2d648-f292-48bc-b1f3-6f8cb3af0278/audio.mp3?updated=1726098614`;
track = videoElem.addTextTrack('subtitles', 'spanish', 'sp');
track.mode = 'showing';
track.addCue(new VTTCue(0.0, 40.687, `Made By Giorgio Chirinos`));
track.addCue(new VTTCue(47.021, 49.729, `Mel, kau baik-baik saja?`));
track.addCue(new VTTCue(67.896, 68.729, `Tidak apa-apa.`));
track.addCue(new VTTCue(95.812, 96.646, `Tidak.`));
track.addCue(new VTTCue(101.896, 103.896, `- Kau terluka?
- Aku baik-baik saja.`));
track.addCue(new VTTCue(108.312, 109.854, `Pergilah.`));
track.addCue(new VTTCue(354.021, 355.771, `Dia wanita yang hebat.`));
track.addCue(new VTTCue(355.771, 357.271, `Teman yang baik.`));
track.addCue(new VTTCue(358.479, 361.479, `Entah bagaimana kita menghadapi
krisis ini tanpanya.`));
track.addCue(new VTTCue(370.021, 373.104, `Kita hampir memperpanjang kedaulatan`));
track.addCue(new VTTCue(373.687, 375.562, `kepada makhluk yang melakukan ini.`));
track.addCue(new VTTCue(377.354, 379.312, `Kita ditugaskan
untuk menegakkan ketertiban.`));
track.addCue(new VTTCue(380.479, 382.562, `Tapi kita telah lalai.`));
track.addCue(new VTTCue(383.104, 384.479, `Aku telah sadar.`));
track.addCue(new VTTCue(385.021, 387.187, `Tidak akan ada lagi dongeng perdamaian`));
track.addCue(new VTTCue(387.187, 390.104, `sampai kita menumpas para iblis
dari basemen kita.`));
track.addCue(new VTTCue(390.979, 394.021, `Kau baik sekali membantu Dewan Salo, Ibu.`));
track.addCue(new VTTCue(394.604, 396.104, `Karena kita sedang berperang,`));
track.addCue(new VTTCue(396.104, 400.271, `kupikir bijaksana untuk meminta saran
dari veteran berpengalaman.`));
track.addCue(new VTTCue(401.146, 403.729, `Mari kita bahas masalah saat ini.`));
track.addCue(new VTTCue(403.729, 406.187, `Rakyat kita takut, menderita.`));
track.addCue(new VTTCue(406.187, 409.604, `Mereka harus tahu pemimpin mereka
bisa mengendalikan situasi.`));
track.addCue(new VTTCue(409.604, 411.687, `Pamer kekuatan
yang belum pernah dilakukan.`));
track.addCue(new VTTCue(411.687, 416.146, `Kita banjiri kota bawah dengan Enforcer,
dipersenjatai Hextech.`));
track.addCue(new VTTCue(416.146, 418.687, `Orang tak bersalah akan terjebak
dalam baku tembak.`));
track.addCue(new VTTCue(418.687, 422.104, `Berapa banyak lagi anggota dewan
yang harus diledakkan sebelum kau sadar?`));
track.addCue(new VTTCue(422.104, 423.354, `Kita dikepung.`));
track.addCue(new VTTCue(427.979, 429.354, `Sedang apa dia di sini?`));
track.addCue(new VTTCue(429.896, 432.312, `Petugas Kiramman menyaksikan
serangan itu langsung.`));
track.addCue(new VTTCue(432.312, 435.729, `Dia memastikan
ini tindakan satu orang gila.`));
track.addCue(new VTTCue(436.312, 437.271, `Jinx.`));
track.addCue(new VTTCue(437.271, 438.396, `Silco sudah mati.`));
track.addCue(new VTTCue(438.396, 440.479, `Kota bawah tanah tak punya pemimpin.`));
track.addCue(new VTTCue(440.479, 443.604, `Jika mengikuti rencanamu,
mereka bisa bersatu melawan kita.`));
track.addCue(new VTTCue(443.604, 445.229, `Jadi, apa solusimu?`));
track.addCue(new VTTCue(445.229, 446.146, `Hukuman?`));
track.addCue(new VTTCue(446.687, 447.896, `Teguran tegas?`));
track.addCue(new VTTCue(447.896, 450.062, `Kita gunakan perpecahan
untuk melawan mereka.`));
track.addCue(new VTTCue(450.062, 451.646, `Salahkan Jinx,`));
track.addCue(new VTTCue(451.646, 454.396, `pasang imbalan sangat besar
yang tak bisa diabaikan.`));
track.addCue(new VTTCue(454.396, 455.396, `Maaf, Mel.`));
track.addCue(new VTTCue(455.396, 458.521, `Aku tidak nyaman memercayakan
takdir kita pada ketidakpastian.`));
track.addCue(new VTTCue(458.521, 460.146, `Jinx terbukti sulit ditangkap.`));
track.addCue(new VTTCue(460.146, 463.854, `Kita baru bisa mulai pulih
setelah dia diadili.`));
track.addCue(new VTTCue(468.229, 471.646, `Kalau begitu, kita sepakat,
dua lawan satu.`));
track.addCue(new VTTCue(472.312, 473.396, `Kita menyerang.`));
track.addCue(new VTTCue(477.562, 478.979, `Jika boleh berpendapat...`));
track.addCue(new VTTCue(478.979, 480.521, `Dalam krisis seperti ini,`));
track.addCue(new VTTCue(480.521, 484.396, `sangat penting kalian terlihat kompak
di depan publik,`));
track.addCue(new VTTCue(484.396, 486.562, `apa pun perasaan pribadi kalian.`));
track.addCue(new VTTCue(489.021, 490.146, `Bijaksana sekali.`));
track.addCue(new VTTCue(492.396, 494.229, `Aku setuju mendukung serangan itu.`));
track.addCue(new VTTCue(496.271, 498.521, `Tapi aku membuat batasan di Hextech.`));
track.addCue(new VTTCue(499.521, 501.187, `Kita punya etos.`));
track.addCue(new VTTCue(501.187, 504.187, `Serangan seperti itu
harus menjadi pilihan terakhir.`));
track.addCue(new VTTCue(505.729, 506.896, `Setuju.`));
track.addCue(new VTTCue(508.812, 511.729, `Kalau begitu, kita sepakat,
dua lawan satu.`));
track.addCue(new VTTCue(585.146, 586.937, `Aku punya kesempatan.`));
track.addCue(new VTTCue(600.812, 603.187, `Ibumu meninggalkan ini untukmu.`));
track.addCue(new VTTCue(604.937, 606.104, `Kunci Kiramman?`));
track.addCue(new VTTCue(606.687, 608.104, `Tidak, aku bukan...`));
track.addCue(new VTTCue(609.062, 610.437, `Aku tidak pantas menerimanya.`));
track.addCue(new VTTCue(610.437, 613.146, `Kini itu warisanmu, Caitlyn.`));
track.addCue(new VTTCue(629.146, 631.062, `Kenapa dia masih di sini?`));
track.addCue(new VTTCue(655.562, 656.396, `Hei.`));
track.addCue(new VTTCue(679.729, 680.979, `Kau benar, Cait.`));
track.addCue(new VTTCue(681.521, 682.937, `Powder sudah tak ada.`));
track.addCue(new VTTCue(684.562, 685.937, `Aku bisa memperbaiki ini.`));
track.addCue(new VTTCue(685.937, 688.229, `Jika kau minta Jayce
memperbaiki sarung tangan,`));
track.addCue(new VTTCue(688.229, 689.812, `aku bisa melakukannya sendiri.`));
track.addCue(new VTTCue(689.812, 691.687, `Tak ada lagi yang perlu terluka.`));
track.addCue(new VTTCue(692.229, 693.146, `Tidak.`));
track.addCue(new VTTCue(693.146, 694.771, `Tak ada lagi misi liar.`));
track.addCue(new VTTCue(694.771, 696.896, `Tak ada lagi rencana ceroboh.`));
track.addCue(new VTTCue(696.896, 698.271, `Ibuku benar.`));
track.addCue(new VTTCue(698.271, 700.896, `Kesombonganku membuatku serakah,`));
track.addCue(new VTTCue(700.896, 702.521, `dan dia menanggung akibatnya.`));
track.addCue(new VTTCue(706.604, 708.854, `Mereka mengirim semua Enforcer
untuk mengejar Jinx.`));
track.addCue(new VTTCue(710.021, 711.396, `Aku akan ikut mereka.`));
track.addCue(new VTTCue(711.979, 714.146, `Kumohon, aku harus membantu.`));
track.addCue(new VTTCue(714.771, 715.604, `Kau bisa bantu.`));
track.addCue(new VTTCue(724.104, 725.021, `Sebagai bagian dari kami.`));
track.addCue(new VTTCue(725.854, 728.354, `Cait, aku tak bisa memakai ini.`));
track.addCue(new VTTCue(728.354, 729.812, `Rakyat ingin darah.`));
track.addCue(new VTTCue(730.521, 731.937, `Dewan takkan hentikan mereka.`));
track.addCue(new VTTCue(731.937, 734.979, `Kau bisa tunjukkan
bahwa tak semua Zaun mendukung Jinx.`));
track.addCue(new VTTCue(735.979, 737.021, `Kita bisa tunjukkan.`));
track.addCue(new VTTCue(738.062, 738.979, `Bersama.`));
track.addCue(new VTTCue(739.562, 741.312, `Aku lihat mereka membunuh orang tuaku.`));
track.addCue(new VTTCue(741.312, 743.562, `Kau tahu bagaimana rasanya?`));
track.addCue(new VTTCue(743.562, 744.479, `Ya.`));
track.addCue(new VTTCue(744.479, 745.562, `Aku tahu.`));
track.addCue(new VTTCue(750.396, 752.312, `Kupikir kau di pihak kami.`));
track.addCue(new VTTCue(753.396, 754.812, `Kau tak berpikir begitu.`));
track.addCue(new VTTCue(790.021, 791.812, `Hei, hati-hati.`));
track.addCue(new VTTCue(793.937, 794.854, `Maaf.`));
track.addCue(new VTTCue(798.437, 799.687, `Bukan yang pertama.`));
track.addCue(new VTTCue(805.187, 806.354, `Kau baik-baik saja?`));
track.addCue(new VTTCue(821.604, 822.687, `Kau`));
track.addCue(new VTTCue(822.687, 824.854, `kehilangan seseorang dalam serangan itu?`));
track.addCue(new VTTCue(853.312, 854.396, `Bagaimana keadaannya?`));
track.addCue(new VTTCue(854.979, 856.937, `Sama seperti sebelumnya. Bernapas.`));
track.addCue(new VTTCue(858.146, 859.604, `Denyut nadi konsisten.`));
track.addCue(new VTTCue(860.562, 861.646, `Selain itu,`));
track.addCue(new VTTCue(862.687, 864.187, `aku juga tidak tahu.`));
track.addCue(new VTTCue(880.437, 881.979, `Apa yang ia lakukan padanya?`));
track.addCue(new VTTCue(884.729, 886.937, `Hexcore berevolusi.`));
track.addCue(new VTTCue(886.937, 890.187, `Bergeser melalui pola rune
lebih cepat dari yang bisa kuikuti.`));
track.addCue(new VTTCue(890.187, 892.812, `Yang kutahu pasti adalah
itu menjaganya tetap hidup.`));
track.addCue(new VTTCue(894.604, 897.479, `Itu teka-teki yang akan disukai Viktor,
jika dia tidak...`));
track.addCue(new VTTCue(901.812, 904.187, `Seharusnya aku yang di sana, bukan dia.`));
track.addCue(new VTTCue(905.229, 906.479, `Jangan bilang begitu.`));
track.addCue(new VTTCue(907.521, 909.354, `Dia akan kembali kepada kita.`));
track.addCue(new VTTCue(909.354, 911.854, `Aku masih tidak mengerti.`));
track.addCue(new VTTCue(911.854, 913.354, `Dia tepat di sampingku.`));
track.addCue(new VTTCue(913.354, 916.687, `Bagaimana ledakan bisa melakukan itu
kepadanya, sedangkan aku`));
track.addCue(new VTTCue(916.687, 918.729, `keluar tanpa terluka?`));
track.addCue(new VTTCue(923.854, 926.229, `Hal-hal ini tak masuk akal, Jayce.`));
track.addCue(new VTTCue(928.354, 929.687, `Bagaimana dengan Dewan?`));
track.addCue(new VTTCue(931.104, 932.479, `Ibuku ikut bermain.`));
track.addCue(new VTTCue(934.562, 936.896, `Salo sudah termakan pengaruhnya.`));
track.addCue(new VTTCue(936.896, 939.854, `Memanfaatkan kesedihannya
untuk mengincar Hextech.`));
track.addCue(new VTTCue(941.229, 943.521, `Mel, aku berjanji kepada Viktor.`));
track.addCue(new VTTCue(943.521, 944.812, `Tidak akan pernah lagi.`));
track.addCue(new VTTCue(945.396, 946.396, `Tak apa-apa.`));
track.addCue(new VTTCue(946.396, 947.437, `Sudah kutangani.`));
track.addCue(new VTTCue(947.437, 949.854, `Aku tidak akan membiarkan mereka
merusak impianmu.`));
track.addCue(new VTTCue(955.771, 956.854, `Caitlyn ada di sana.`));
track.addCue(new VTTCue(957.437, 958.979, `Kau mungkin perlu mengunjunginya.`));
track.addCue(new VTTCue(958.979, 962.687, `Dia menyembunyikannya dengan baik,
tapi dia sangat menderita.`));
track.addCue(new VTTCue(1013.479, 1014.479, `<i>Hei, Sprout.</i>`));
track.addCue(new VTTCue(1019.396, 1020.646, `Bagaimana kau menemukanku?`));
track.addCue(new VTTCue(1020.646, 1021.562, `Ayahmu.`));
track.addCue(new VTTCue(1023.979, 1026.979, `Ibu dan aku biasa datang ke sini
saat kami butuh pelarian.`));
track.addCue(new VTTCue(1028.521, 1030.771, `Salah satu tempat
kami tak pernah bertengkar.`));
track.addCue(new VTTCue(1031.354, 1033.437, `Maaf aku tak ada belakangan ini.`));
track.addCue(new VTTCue(1035.396, 1036.479, `Bagaimana Viktor?`));
track.addCue(new VTTCue(1040.062, 1042.271, `Aku bahkan tak tahu apa dia masih hidup.`));
track.addCue(new VTTCue(1043.562, 1045.062, `Sejak itu terjadi...`));
track.addCue(new VTTCue(1047.021, 1049.729, `tiga wajah terus berputar di benakku.`));
track.addCue(new VTTCue(1052.521, 1053.396, `Aku melihat Ibu.`));
track.addCue(new VTTCue(1054.479, 1055.604, `Saat dia ditemukan.`));
track.addCue(new VTTCue(1056.396, 1058.854, `Seluruh tubuhku tenggelam,`));
track.addCue(new VTTCue(1058.854, 1061.312, `seperti batu yang ditelan air gelap.`));
track.addCue(new VTTCue(1062.646, 1064.271, `Tapi kemudian ada Jinx.`));
track.addCue(new VTTCue(1064.854, 1065.729, `Tertawa.`));
track.addCue(new VTTCue(1066.979, 1069.729, `Aku ingin merobek tawa itu
dari tenggorokannya selamanya.`));
track.addCue(new VTTCue(1069.729, 1070.646, `Cait.`));
track.addCue(new VTTCue(1071.312, 1072.146, `Aku tahu.`));
track.addCue(new VTTCue(1072.146, 1073.896, `Kini aku mengerti`));
track.addCue(new VTTCue(1073.896, 1076.021, `betapa mudahnya membenci mereka.`));
track.addCue(new VTTCue(1076.021, 1077.812, `Satu tindakan kejam.`));
track.addCue(new VTTCue(1080.854, 1082.271, `Lalu aku melihat Vi.`));
track.addCue(new VTTCue(1084.312, 1086.354, `Aku memintanya memakai seragam.`));
track.addCue(new VTTCue(1086.354, 1088.812, `Bisa dibilang, dia menolak.`));
track.addCue(new VTTCue(1089.396, 1091.396, `Vi? Memakai lencana?`));
track.addCue(new VTTCue(1091.979, 1095.687, `Dia pikir sarung tanganmu
akan menyelesaikan semua masalahnya.`));
track.addCue(new VTTCue(1098.021, 1099.437, `Bagaimana jika dia benar?`));
track.addCue(new VTTCue(1100.937, 1103.104, `Hextech mungkin menjaga kita
tetap hidup, Jayce,`));
track.addCue(new VTTCue(1103.104, 1105.021, `tapi tak akan menyelamatkan kita.`));
track.addCue(new VTTCue(1113.937, 1114.771, `Aku.`));
track.addCue(new VTTCue(1115.562, 1117.229, `Bergabung dengan patroli kacang.`));
track.addCue(new VTTCue(1118.312, 1120.562, `Padahal kukira dia tak punya selera humor.`));
track.addCue(new VTTCue(1122.312, 1123.562, `Aku suka kacang.`));
track.addCue(new VTTCue(1123.562, 1124.812, `Ayahnya benar.`));
track.addCue(new VTTCue(1124.812, 1127.062, `Tidak ada gunanya tetap di sini.`));
track.addCue(new VTTCue(1129.896, 1130.729, `Tapi`));
track.addCue(new VTTCue(1131.271, 1133.396, `aku yang menciptakan monster itu.`));
track.addCue(new VTTCue(1138.937, 1139.771, `Vi?`));
track.addCue(new VTTCue(1148.271, 1149.187, `Siapa kau?`));
track.addCue(new VTTCue(1149.854, 1151.896, `Bagaimana kau tahu namaku?`));
track.addCue(new VTTCue(1152.979, 1154.354, `Petugas Junior Nolen.`));
track.addCue(new VTTCue(1155.062, 1156.271, `Maddie.`));
track.addCue(new VTTCue(1156.271, 1157.354, `Dan...`));
track.addCue(new VTTCue(1158.479, 1160.437, `itu tertulis di wajahmu.`));
track.addCue(new VTTCue(1164.521, 1165.604, `Jadi, ada apa?`));
track.addCue(new VTTCue(1165.604, 1166.687, `Penggeledahan acak?`));
track.addCue(new VTTCue(1166.687, 1168.521, `Mengawal keluar dari properti?`));
track.addCue(new VTTCue(1169.229, 1171.104, `Atau hanya mau membuang waktuku?`));
track.addCue(new VTTCue(1171.646, 1173.312, `Penggeledahan? Tidak.`));
track.addCue(new VTTCue(1173.312, 1174.479, `Tidak.`));
track.addCue(new VTTCue(1174.479, 1178.271, `Kau semacam legenda di antara Enforcer.`));
track.addCue(new VTTCue(1178.271, 1182.229, `Caitlyn membuat keributan di kantor polisi
saat pendaftaranmu ditolak.`));
track.addCue(new VTTCue(1182.771, 1184.062, `Kini aku harus bertanya.`));
track.addCue(new VTTCue(1184.604, 1185.562, `Apa semua itu benar?`));
track.addCue(new VTTCue(1185.562, 1188.729, `Kau mengejar Silco sendirian
saat Dewan tidak mendukungmu?`));
track.addCue(new VTTCue(1188.729, 1190.271, `Melawan seluruh gengnya?`));
track.addCue(new VTTCue(1191.896, 1193.312, `Cait bilang semua itu?`));
track.addCue(new VTTCue(1193.312, 1194.604, `Dia bilang,`));
track.addCue(new VTTCue(1194.604, 1197.104, `jika setiap Enforcer punya hati sepertimu,`));
track.addCue(new VTTCue(1197.104, 1198.979, `kita bisa melawan Noxus.`));
track.addCue(new VTTCue(1200.271, 1202.812, `Lalu dia mengancam
menarik pendanaan keluarganya.`));
track.addCue(new VTTCue(1203.354, 1206.146, `Bagaimanapun, aku senang kau bergabung.`));
track.addCue(new VTTCue(1209.521, 1211.729, `Setelah sherif mengkhianati kita,`));
track.addCue(new VTTCue(1211.729, 1214.396, `anggap saja...`));
track.addCue(new VTTCue(1215.771, 1218.479, `senang mengetahui masih ada yang baik.`));
track.addCue(new VTTCue(1239.771, 1240.896, `Petugas Nolen.`));
track.addCue(new VTTCue(1242.687, 1244.021, `Tugas memanggil.`));
track.addCue(new VTTCue(1244.937, 1246.146, `Suatu kehormatan, Vi.`));
track.addCue(new VTTCue(1267.687, 1269.729, `- Silakan, Bu.
- Lewat sini, Bu.`));
track.addCue(new VTTCue(1269.729, 1272.271, `- Berhenti.
- Tolong terus berjalan.`));
track.addCue(new VTTCue(1312.479, 1315.562, `Salah satu dari banyak privilese
menjadi dewan kalian`));
track.addCue(new VTTCue(1316.104, 1319.937, `adalah sesekali memiliki kesempatan
berdiri di belakang podium ini`));
track.addCue(new VTTCue(1320.521, 1322.062, `untuk melihat begitu banyak,`));
track.addCue(new VTTCue(1322.604, 1325.229, `bukan disatukan
oleh kelahiran atau perintah,`));
track.addCue(new VTTCue(1325.229, 1327.146, `tapi oleh semua yang kita bagi.`));
track.addCue(new VTTCue(1328.312, 1329.604, `Harapan kita.`));
track.addCue(new VTTCue(1331.479, 1332.979, `Keingintahuan kita.`));
track.addCue(new VTTCue(1334.896, 1338.979, `Dorongan kita untuk meninggalkan dunia
yang lebih baik daripada sebelumnya.`));
track.addCue(new VTTCue(1340.354, 1344.104, `Hal-hal yang kita bagi ini
yang menjadikan kita bersatu.`));
track.addCue(new VTTCue(1357.187, 1362.271, `Hari ini kita berbagi kehilangan besar.`));
track.addCue(new VTTCue(1363.896, 1365.646, `Dewan Irius Bolbok,`));
track.addCue(new VTTCue(1366.354, 1368.021, `Dewan Torman Hoskel,`));
track.addCue(new VTTCue(1368.021, 1371.437, `dan Dewan Cassandra Kiramman
direnggut dari kita.`));
track.addCue(new VTTCue(1373.979, 1376.021, `Tapi mereka tak akan dilupakan.`));
track.addCue(new VTTCue(1379.479, 1380.854, `Kami mendirikan patung ini`));
track.addCue(new VTTCue(1380.854, 1383.812, `untuk mengingat kontribusi mereka
yang tak terhitung jumlahnya.`));
track.addCue(new VTTCue(1386.312, 1388.229, `Pengabdian seumur hidup mereka.`));
track.addCue(new VTTCue(1390.104, 1393.062, `Bukan tindakan pengecut
yang telah merenggut mereka.`));
track.addCue(new VTTCue(1393.062, 1394.854, `Bu, kau tak boleh masuk...`));
track.addCue(new VTTCue(1399.229, 1401.604, `Meski kita mengalami pukulan telak,`));
track.addCue(new VTTCue(1402.812, 1406.521, `percayalah,
aturan hukum menang di Piltover.`));
track.addCue(new VTTCue(1407.062, 1409.521, `- Tidak.
- Kita akan temukan pelakunya.`));
track.addCue(new VTTCue(1410.229, 1412.812, `Mereka akan bertanggung jawab
atas kejahatan mereka.`));
track.addCue(new VTTCue(1414.104, 1415.521, `Menyedihkan, bukan?`));
track.addCue(new VTTCue(1420.396, 1422.437, `Kehilangan orang yang dicintai.`));
track.addCue(new VTTCue(1452.271, 1455.187, `Kalian tak aman di sini, Orang Atas.`));
track.addCue(new VTTCue(1457.979, 1459.437, `Kalian semua tak aman.`));
track.addCue(new VTTCue(1483.354, 1484.187, `Awas.`));
track.addCue(new VTTCue(1566.937, 1567.812, `Ayo.`));
track.addCue(new VTTCue(1614.437, 1616.312, `Keluarkan para dewan dari sini.`));
track.addCue(new VTTCue(1616.312, 1617.396, `Aku punya ide.`));
track.addCue(new VTTCue(1617.396, 1618.854, `Apa yang kau lakukan?`));
track.addCue(new VTTCue(1765.854, 1767.896, `Untuk putraku.`));
track.addCue(new VTTCue(1807.229, 1808.521, `Ayo.`));
track.addCue(new VTTCue(1810.021, 1811.312, `Sial.`));
track.addCue(new VTTCue(1906.854, 1908.437, `Perimeter diamankan.`));
track.addCue(new VTTCue(1908.437, 1909.687, `Kita lihat saja nanti.`));
track.addCue(new VTTCue(1923.479, 1925.979, `Kukira kau akan terbunuh.`));
track.addCue(new VTTCue(1931.646, 1933.021, `Ikut aku.`));
track.addCue(new VTTCue(1933.604, 1934.604, `Memorial.`));
track.addCue(new VTTCue(1934.604, 1935.687, `Aku bersamamu.`));
track.addCue(new VTTCue(1936.271, 1938.979, `Binatang macam apa mereka?`));
track.addCue(new VTTCue(1938.979, 1940.979, `Mereka ingin tontonan.`));
track.addCue(new VTTCue(1940.979, 1942.729, `Mereka mencoba menakutimu.`));
track.addCue(new VTTCue(1942.729, 1945.062, `Mereka hanya membuatku kesal.`));
track.addCue(new VTTCue(1945.646, 1946.479, `Kau...`));
track.addCue(new VTTCue(1947.271, 1950.062, `Kau harus mencari cara
untuk membatalkan serangan itu.`));
track.addCue(new VTTCue(1950.062, 1951.104, `Apa?`));
track.addCue(new VTTCue(1951.104, 1953.271, `Pertempuran ini terjadi di tanahmu.`));
track.addCue(new VTTCue(1953.271, 1955.562, `Di bawah sana,
mereka yang memegang kendali.`));
track.addCue(new VTTCue(1955.562, 1958.479, `Semua ini tak sesuai kendali kita.`));
track.addCue(new VTTCue(1958.479, 1961.771, `- Mungkin kau harus mengubah itu.
- Aku tak tahu caranya!`));
track.addCue(new VTTCue(1962.396, 1965.271, `Dia mati dan meninggalkan lubang besar,`));
track.addCue(new VTTCue(1965.271, 1967.687, `dan aku harus mengisinya.`));
track.addCue(new VTTCue(1968.729, 1970.646, `Seolah-olah dia tak pernah ada.`));
track.addCue(new VTTCue(1971.187, 1972.021, `Hei.`));
track.addCue(new VTTCue(1972.604, 1973.437, `Tidak akan.`));
track.addCue(new VTTCue(1974.062, 1975.771, `Lubangnya mengecil,`));
track.addCue(new VTTCue(1976.812, 1978.187, `tapi kau tidak pernah mengisinya.`));
track.addCue(new VTTCue(1983.604, 1985.771, `Aku salah memberikan lencana itu kepadamu.`));
track.addCue(new VTTCue(1987.146, 1988.396, `Hanya saja...`));
track.addCue(new VTTCue(1988.396, 1990.187, `Bagaimana pun kupikirkan,`));
track.addCue(new VTTCue(1990.729, 1992.687, `jika aku mengejar adikmu sendirian,`));
track.addCue(new VTTCue(1992.687, 1994.812, `salah satu dari kami akan mati.`));
track.addCue(new VTTCue(1996.729, 1998.229, `Semuanya hancur.`));
track.addCue(new VTTCue(2000.104, 2001.021, `Tidak.`));
track.addCue(new VTTCue(2002.771, 2003.854, `Tak akan kita biarkan.`));
track.addCue(new VTTCue(2018.104, 2021.187, `<i>Aku tahu kau meragukan
hak lahirmu, Caitlyn.</i>`));
track.addCue(new VTTCue(2022.979, 2024.354, `<i>Ada kebijaksanaan di dalamnya.</i>`));
track.addCue(new VTTCue(2027.271, 2028.229, `<i>Tapi ingat.</i>`));
track.addCue(new VTTCue(2031.729, 2033.062, `<i>Kau seorang Kiramman.</i>`));
track.addCue(new VTTCue(2063.396, 2064.979, `Tak pernah sekali pun`));
track.addCue(new VTTCue(2064.979, 2068.979, `pemimpin Piltover dipaksa
ke penjara bawah tanah ibu kota kita.`));
track.addCue(new VTTCue(2070.771, 2071.979, `Tapi di sinilah kita.`));
track.addCue(new VTTCue(2072.729, 2077.687, `Apa masih ada yang ragu bahwa musuh kita
lebih besar daripada satu individu gila?`));
track.addCue(new VTTCue(2078.229, 2081.979, `Bagaimana mereka menyelundupkan
banyak benda ini ke upacara?`));
track.addCue(new VTTCue(2081.979, 2085.062, `Kukira kita sudah melakukan segala cara
untuk mengamankannya.`));
track.addCue(new VTTCue(2085.062, 2086.562, `Mereka pasti mendapat bantuan.`));
track.addCue(new VTTCue(2087.104, 2088.396, `Dari seseorang di sini.`));
track.addCue(new VTTCue(2088.979, 2091.146, `Tidak boleh terjadi serangan lagi.`));
track.addCue(new VTTCue(2091.146, 2093.271, `Jika kita tak membela diri dengan Hextech,`));
track.addCue(new VTTCue(2093.271, 2095.312, `prinsip kita takkan berarti.`));
track.addCue(new VTTCue(2096.896, 2097.729, `Aku...`));
track.addCue(new VTTCue(2098.812, 2101.104, `Kita tak siap untuk serangan skala penuh.`));
track.addCue(new VTTCue(2101.104, 2102.979, `Serangan kota bawah membuktikan itu.`));
track.addCue(new VTTCue(2102.979, 2106.021, `Ini rapat Dewan tertutup.
Siapa yang mengizinkanmu masuk?`));
track.addCue(new VTTCue(2107.062, 2109.104, `Aku petugas berprestasi.`));
track.addCue(new VTTCue(2109.104, 2110.812, `Pemimpin Klan Kiramman.`));
track.addCue(new VTTCue(2110.812, 2112.771, `Panggil aku dengan hormat,`));
track.addCue(new VTTCue(2112.771, 2114.687, `atau tutup mulutmu.`));
track.addCue(new VTTCue(2116.896, 2119.854, `Aku akan memimpin tim serbu ke Zaun
dengan tiga tujuan.`));
track.addCue(new VTTCue(2121.229, 2122.521, `Menemukan Jinx,`));
track.addCue(new VTTCue(2123.437, 2124.521, `<i>menghancurkan Shimmer,</i>`));
track.addCue(new VTTCue(2125.312, 2128.354, `<i>dan melumpuhkan agen
yang masih setia kepada Silco.</i>`));
track.addCue(new VTTCue(2129.104, 2132.562, `Apa yang membuatmu berpikir
kau akan lebih baik dari pasukan hari ini?`));
track.addCue(new VTTCue(2135.646, 2137.354, `Kami punya beberapa kejutan.`));
track.addCue(new VTTCue(2181.729, 2184.729, `PENDUKUNG KEMAJUAN`));
track.addCue(new VTTCue(2344.937, 2347.437, `Terjemahan subtitle oleh Dea Anindya`));
container.appendChild(column);
videoList[`6`] = videoElem;
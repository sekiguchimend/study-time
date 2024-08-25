/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
                'hbb.afl.rakuten.co.jp',
                'https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=21297995&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F8669%2F9784777228669_1_2.jpg%3F_ex%3D240x240&s=240x240&t=pict',
                'https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=21062136&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F2307%2F9784410142307_1_3.jpg%3F_ex%3D240x240&s=240x240&t=pict',
                'https://hbb.afl.rakuten.co.jp/hgb/3f1759ec.afe0272b.3f1759ed.2fa1b116/?me_id=1383704&item_id=25167588&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fkaitoriouji%2Fcabinet%2F202304141025%2Fb09vwmj72x.jpg%3F_ex%3D240x240&s=240x240&t=pict',
                'https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=15568429&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F0746%2F9784753930746.jpg%3F_ex%3D240x240&s=240x240&t=pict',
                'https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=21140914&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F9175%2F9784010349175_1_2.jpg%3F_ex%3D240x240&s=240x240&t=pict',
                'https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=20802802&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F5958%2F9784053055958_1_5.jpg%3F_ex%3D240x240&s=240x240&t=pict',
                'https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=19904995&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F1028%2F9784053051028.jpg%3F_ex%3D240x240&s=240x240&t=pict',
                'https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=19905104&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F1349%2F9784053051349.jpg%3F_ex%3D240x240&s=240x240&t=pict',
                'https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=21149306&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F7594%2F9784053057594_1_6.jpg%3F_ex%3D240x240&s=240x240&t=pict',
                'https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=20650684&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F5705%2F9784053055705_1_3.jpg%3F_ex%3D240x240&s=240x240&t=pict',
                'https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=20007206&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F7521%2F9784863467521.jpg%3F_ex%3D240x240&s=240x240&t=pict',
                'https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=16526017&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F3580%2F9784777213580.jpg%3F_ex%3D240x240&s=240x240&t=pict',
                'https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=16826443&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F5896%2F9784890855896_1_3.jpg%3F_ex%3D240x240&s=240x240&t=pict',
                'https://hbb.afl.rakuten.co.jp/hgb/3f1d8652.661f39b3.3f1d8654.063b7a1d/?me_id=1285657&item_id=12165505&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbookfan%2Fcabinet%2F00885%2Fbk4796111417.jpg%3F_ex%3D240x240&s=240x240&t=pict',
                'https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=21154615&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F1197%2F9784342431197_1_3.jpg%3F_ex%3D240x240&s=240x240&t=pict',
                'https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=21265442&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F0112%2F9784342210112_1_2.jpg%3F_ex%3D240x240&s=240x240&t=pict',
                'https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=10824591&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F7722%2F9784010327722.jpg%3F_ex%3D240x240&s=240x240&t=pict',
                'https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=20850636&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F6641%2F9784053056641_1_6.jpg%3F_ex%3D240x240&s=240x240&t=pict',
                'https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=20994380&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F2533%2F9784010352533_1_2.jpg%3F_ex%3D240x240&s=240x240&t=pict',
                'https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=20834334&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F1564%2F9784410271564_1_3.jpg%3F_ex%3D240x240&s=240x240&t=pict',
                'https://hbb.afl.rakuten.co.jp/hgb/3f1db300.34962cad.3f1db301.1bf0be7a/?me_id=1310259&item_id=10237149&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbooksdream%2Fcabinet%2Fracoon_31%2F4796117288.jpg%3F_ex%3D240x240&s=240x240&t=pict',
                'https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=21140999&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F2595%2F9784010352595_1_2.jpg%3F_ex%3D240x240&s=240x240&t=pict',
                'https://hbb.afl.rakuten.co.jp/hgb/3f1db300.34962cad.3f1db301.1bf0be7a/?me_id=1310259&item_id=10035045&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbooksdream%2Fcabinet%2Fracoon_9%2F4385261253.jpg%3F_ex%3D240x240&s=240x240&t=pict',
                'https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=13788446&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F8230%2F9784010338230.jpg%3F_ex%3D240x240&s=240x240&t=pict',
                'https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=20048538&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F8521%2F9784890858521.jpg%3F_ex%3D240x240&s=240x240&t=pict',
                'https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=17560207&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F7658%2F9784875687658.jpg%3F_ex%3D240x240&s=240x240&t=pict',
                'https://hbb.afl.rakuten.co.jp/hgb/3f1db300.34962cad.3f1db301.1bf0be7a/?me_id=1310259&item_id=10053889&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbooksdream%2Fcabinet%2Fracoon_62%2F4634700123.jpg%3F_ex%3D240x240&s=240x240&t=pict',
                'https://hbb.afl.rakuten.co.jp/hgb/3f1de3fc.86bca2dd.3f1de3fd.5de06e4b/?me_id=1220950&item_id=14964437&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fneowing-r%2Fcabinet%2Fitem_img_1884%2Fneobk-2884117.jpg%3F_ex%3D240x240&s=240x240&t=pict',
                'https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=18723768&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F0734%2F9784634010734.jpg%3F_ex%3D240x240&s=240x240&t=pict',
    ], // ここに外部画像のホスト名を追加
    },
  };
  
  export default nextConfig;
  
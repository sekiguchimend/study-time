import React from 'react';
import { Typography, Grid, Card, CardContent, Button, Autocomplete } from '@mui/material';
import Image from 'next/image';
type Subjects = '国語' | '数学' | '理科' | '社会' | '英語';

const booksBySubjectAndLevel: {
  [key in Subjects]: {
    [key: number]: { title: string; link: string; imgSrc: string };
  };
} = {
  国語: {
    30: { title: "早覚え速答法", link: "https://hb.afl.rakuten.co.jp/ichiba/3f1727ae.32b79cc9.3f1727af.faee3b34/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F16193697%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9", imgSrc: "https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=19904995&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F1028%2F9784053051028.jpg%3F_ex%3D240x240&s=240x240&t=pict" },
    40: { title: "漢文ヤマのヤマ", link: "https://hb.afl.rakuten.co.jp/ichiba/3f1727ae.32b79cc9.3f1727af.faee3b34/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F16193722%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9", imgSrc: "https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=19905104&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F1349%2F9784053051349.jpg%3F_ex%3D240x240&s=240x240&t=pict" },
    50: { title: "マドンナ古文単語230", link: "https://hb.afl.rakuten.co.jp/ichiba/3f1727ae.32b79cc9.3f1727af.faee3b34/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F17734837%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9", imgSrc: "https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=21149306&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F7594%2F9784053057594_1_6.jpg%3F_ex%3D240x240&s=240x240&t=pict" },
    60: { title: "八澤のたった6時間で古典文法", link: "https://hb.afl.rakuten.co.jp/ichiba/3f1727ae.32b79cc9.3f1727af.faee3b34/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F17128521%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9", imgSrc: "https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=20650684&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F5705%2F9784053055705_1_3.jpg%3F_ex%3D240x240&s=240x240&t=pict" },
    70: { title: "入試現代文へのアクセス 基本編", link: "https://hb.afl.rakuten.co.jp/ichiba/3f1727ae.32b79cc9.3f1727af.faee3b34/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F12399060%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9", imgSrc: "https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=16526017&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F3580%2F9784777213580.jpg%3F_ex%3D240x240&s=240x240&t=pict" },
    80: { title: "田村のやさしく語る現代文", link: "https://hb.afl.rakuten.co.jp/ichiba/3f1727ae.32b79cc9.3f1727af.faee3b34/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F16321204%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9", imgSrc: "https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=20007206&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F7521%2F9784863467521.jpg%3F_ex%3D240x240&s=240x240&t=pict" }
  },
  数学: {
    30: { title: "やさしい高校数学", link: "https://hb.afl.rakuten.co.jp/ichiba/3f1727ae.32b79cc9.3f1727af.faee3b34/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F17322643%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9", imgSrc: "https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=20802802&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F5958%2F9784053055958_1_5.jpg%3F_ex%3D240x240&s=240x240&t=pict" },
    40: { title: "入門問題精講", link: "https://hb.afl.rakuten.co.jp/ichiba/3f1727ae.32b79cc9.3f1727af.faee3b34/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F17724158%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9", imgSrc: "https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=21140914&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F9175%2F9784010349175_1_2.jpg%3F_ex%3D240x240&s=240x240&t=pict" },
    50: { title: "文系の数学 重要事項習得編", link: "https://hb.afl.rakuten.co.jp/ichiba/3f1727ae.32b79cc9.3f1727af.faee3b34/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F17904896%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MSwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9", imgSrc: "https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=21297995&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F8669%2F9784777228669_1_2.jpg%3F_ex%3D240x240&s=240x240&t=pict" },
    60: { title: "数学重要問題集", link: "https://hb.afl.rakuten.co.jp/ichiba/3f1727ae.32b79cc9.3f1727af.faee3b34/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F17630691%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9", imgSrc: "https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=21062136&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F2307%2F9784410142307_1_3.jpg%3F_ex%3D240x240&s=240x240&t=pict" },
    70: { title: "大学への数学 スタンダード演習", link: "https://hb.afl.rakuten.co.jp/ichiba/3f1759ec.afe0272b.3f1759ed.2fa1b116/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkaitoriouji%2Ftxt-b09vwmj72x-240815sk380585%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9", imgSrc: "https://hbb.afl.rakuten.co.jp/hgb/3f1759ec.afe0272b.3f1759ed.2fa1b116/?me_id=1383704&item_id=25167588&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fkaitoriouji%2Fcabinet%2F202304141025%2Fb09vwmj72x.jpg%3F_ex%3D240x240&s=240x240&t=pict" },
    80: { title: "入試数学の掌握", link: "https://hb.afl.rakuten.co.jp/ichiba/3f1727ae.32b79cc9.3f1727af.faee3b34/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F11355877%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9", imgSrc: "https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=15568429&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F0746%2F9784753930746.jpg%3F_ex%3D240x240&s=240x240&t=pict" }
  },
  理科: {
    30: { title: "宇宙一わかりやすい高校化学", link: "https://hb.afl.rakuten.co.jp/ichiba/3f1727ae.32b79cc9.3f1727af.faee3b34/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F17379111%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9", imgSrc: "https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=20850636&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F6641%2F9784053056641_1_6.jpg%3F_ex%3D240x240&s=240x240&t=pict" },
    40: { title: "入門問題精講", link: "https://hb.afl.rakuten.co.jp/ichiba/3f1727ae.32b79cc9.3f1727af.faee3b34/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F17545665%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9", imgSrc: "https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=20994380&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F2533%2F9784010352533_1_2.jpg%3F_ex%3D240x240&s=240x240&t=pict" },
    50: { title: "リードLightノート", link: "https://hb.afl.rakuten.co.jp/ichiba/3f1727ae.32b79cc9.3f1727af.faee3b34/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F17630691%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9", imgSrc: "https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=21062136&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F2307%2F9784410142307_1_3.jpg%3F_ex%3D240x240&s=240x240&t=pict" },
    60: { title: "化学頻出！スタンダード問題 230選", link: "https://hb.afl.rakuten.co.jp/ichiba/3f1db300.34962cad.3f1db301.1bf0be7a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbooksdream%2F1-240001401684%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9", imgSrc: "https://hbb.afl.rakuten.co.jp/hgb/3f1db300.34962cad.3f1db301.1bf0be7a/?me_id=1310259&item_id=10237149&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbooksdream%2Fcabinet%2Fracoon_31%2F4796117288.jpg%3F_ex%3D240x240&s=240x240&t=pict" },
    70: { title: "化学 標準問題精講", link: "https://hb.afl.rakuten.co.jp/ichiba/3f1727ae.32b79cc9.3f1727af.faee3b34/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F17724275%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9", imgSrc: "https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=21140999&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F2595%2F9784010352595_1_2.jpg%3F_ex%3D240x240&s=240x240&t=pict" },
    80: { title: "化学の新演習", link: "https://hb.afl.rakuten.co.jp/ichiba/3f1db300.34962cad.3f1db301.1bf0be7a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbooksdream%2F1-240001340183%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9", imgSrc: "https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=15568429&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F0746%2F9784753930746.jpg%3F_ex%3D240x240&s=240x240&t=pict" }
  },
  社会: {
    30: { title: "教科書よりやさしい日本史", link: "https://hb.afl.rakuten.co.jp/ichiba/3f1727ae.32b79cc9.3f1727af.faee3b34/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F6600842%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9", imgSrc: "https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=13788446&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F8230%2F9784010338230.jpg%3F_ex%3D240x240&s=240x240&t=pict" },
    40: { title: "金谷の日本史「なぜ」と「流れ」がわかる本", link: "https://hb.afl.rakuten.co.jp/ichiba/3f1727ae.32b79cc9.3f1727af.faee3b34/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F16364075%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9", imgSrc: "https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=20048538&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F8521%2F9784890858521.jpg%3F_ex%3D240x240&s=240x240&t=pict" },
    50: { title: "日本史B講義の実況中継", link: "https://hb.afl.rakuten.co.jp/ichiba/3f1727ae.32b79cc9.3f1727af.faee3b34/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F13352203%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9", imgSrc: "https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=17560207&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F7658%2F9784875687658.jpg%3F_ex%3D240x240&s=240x240&t=pict" },
    60: { title: "詳説日本史B", link: "https://hb.afl.rakuten.co.jp/ichiba/3f1db300.34962cad.3f1db301.1bf0be7a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbooksdream%2F1-240001511983%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9", imgSrc: "https://hbb.afl.rakuten.co.jp/hgb/3f1db300.34962cad.3f1db301.1bf0be7a/?me_id=1310259&item_id=10053889&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbooksdream%2Fcabinet%2Fracoon_62%2F4634700123.jpg%3F_ex%3D240x240&s=240x240&t=pict" },
    70: { title: "読んで深める日本史実力強化書", link: "https://hb.afl.rakuten.co.jp/ichiba/3f1de3fc.86bca2dd.3f1de3fd.5de06e4b/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fneowing-r%2Fneobk-2884117%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9", imgSrc: "https://hbb.afl.rakuten.co.jp/hgb/3f1de3fc.86bca2dd.3f1de3fd.5de06e4b/?me_id=1220950&item_id=14964437&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fneowing-r%2Fcabinet%2Fitem_img_1884%2Fneobk-2884117.jpg%3F_ex%3D240x240&s=240x240&t=pict" },
    80: { title: "詳説日本史研究", link: "https://hb.afl.rakuten.co.jp/ichiba/3f1727ae.32b79cc9.3f1727af.faee3b34/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F15078433%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9", imgSrc: "https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=18723768&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F0734%2F9784634010734.jpg%3F_ex%3D240x240&s=240x240&t=pict" }
  },
  英語: {
    30: { title: "大岩のいちばんはじめの英文法", link: "https://hb.afl.rakuten.co.jp/ichiba/3f1727ae.32b79cc9.3f1727af.faee3b34/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F12681110%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9", imgSrc: "https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=16826443&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F5896%2F9784890855896_1_3.jpg%3F_ex%3D240x240&s=240x240&t=pict" },
    40: { title: "システム英単語Basic", link: "https://hb.afl.rakuten.co.jp/ichiba/3f1d8652.661f39b3.3f1d8654.063b7a1d/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbookfan%2Fbk-4796111417%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9", imgSrc: "https://hbb.afl.rakuten.co.jp/hgb/3f1d8652.661f39b3.3f1d8654.063b7a1d/?me_id=1285657&item_id=12165505&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbookfan%2Fcabinet%2F00885%2Fbk4796111417.jpg%3F_ex%3D240x240&s=240x240&t=pict" },
    50: { title: "Next Stage", link: "https://hb.afl.rakuten.co.jp/ichiba/3f1727ae.32b79cc9.3f1727af.faee3b34/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F17741383%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9", imgSrc: "https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=21154615&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F1197%2F9784342431197_1_3.jpg%3F_ex%3D240x240&s=240x240&t=pict" },
    60: { title: "基礎英文解釈の技術100", link: "https://hb.afl.rakuten.co.jp/ichiba/3f1727ae.32b79cc9.3f1727af.faee3b34/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F17871308%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9", imgSrc: "https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=21265442&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F0112%2F9784342210112_1_2.jpg%3F_ex%3D240x240&s=240x240&t=pict" },
    70: { title: "ポレポレ英文読解プロセス50", link: "https://hb.afl.rakuten.co.jp/ichiba/3f1727ae.32b79cc9.3f1727af.faee3b34/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F615155%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9", imgSrc: "https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=10436137&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F3389%2F9784896803389.jpg%3F_ex%3D240x240&s=240x240&t=pict" },
    80: { title: "英語長文問題精講", link: "https://hb.afl.rakuten.co.jp/ichiba/3f1727ae.32b79cc9.3f1727af.faee3b34/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F1127023%2F&link_type=pict&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0Iiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9", imgSrc: "https://hbb.afl.rakuten.co.jp/hgb/3f1727ae.32b79cc9.3f1727af.faee3b34/?me_id=1213310&item_id=10824591&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F7722%2F9784010327722.jpg%3F_ex%3D240x240&s=240x240&t=pict" },

  },
};

const getBookRecommendation = (subject: Subjects, score: number) => {
  const level = Math.max(30, Math.min(80, Math.floor(score / 10) * 10));
  return booksBySubjectAndLevel[subject][level];
};

interface AffiliateBooksProps {
  previousScores: { [key in Subjects]: number };
}

const AffiliateBooks: React.FC<AffiliateBooksProps> = ({ previousScores }) => {
  if (!previousScores) {
    return null;
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>おすすめの参考書</Typography>
      <Grid container spacing={3}>
        {Object.entries(previousScores).map(([subject, score]) => {
          const book = getBookRecommendation(subject as Subjects, score);
          return (
            <Grid item xs={12} sm={6} md={4} key={subject}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {subject}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    現在の偏差値: {score}
                  </Typography>
                  <Typography variant="body1">
                    おすすめの参考書: {book.title}
                  </Typography>
                  <Image
                    src={book.imgSrc}
                    alt={book.title}
                    style={{ width: '100%', height: 'auto', marginTop: '10px' }}
                    width={300} // 適切な幅を指定
                    height={500} // 適切な高さを指定
                  />
                  <Button 
                    variant="contained" 
                    color="primary" 
                    href={book.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginTop: '10px' }}
                  >
                    詳細を見る
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default AffiliateBooks;

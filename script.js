    const tripDays = [
      {
        date: "2026-10-30", weekday: "Fri", region: "新千歲 → 帶廣", drive: ["158 km", "150 分鐘", "3,730円"], weather: ["帶廣", "3°", "12°", "20%", "05:59", "16:27", "☀"],
        places: [
          ["15:00", "新千歲機場", "航班 · HB880", "新千歲機場", "北海道千歲市美々987-22", "", "09:15 起飛，15:00 抵達。"],
          ["16:30", "Nissan Rent-a-car 新千歲機場店", "取車", "新千歲機場店", "北海道千歲市柏台南2丁目2-5", "+81 0123 27 4123", "取車並領取 ETC 卡；雪胎另付 24,200円。Mapcode: 113 832 693*41"],
          ["晚間", "豚丼 いっぴん", "晚餐 · 帶廣", "帶廣市西21条南3丁目", "北海道帶廣市西21条南3丁目5", "+81 0155 41 1789", "免費停車。由機場約 151 km / 2 小時 10 分。Mapcode: 124 587 231*00"],
          ["入住", "Hotel Route-Inn Obihiro Ekimae", "住宿 · 帶廣", "帶廣站前", "北海道帶廣市西3条南11丁目8", "+81 5018 09 9746", "含早餐；停車 600円。Mapcode: 124 624 018*72"],
          ["晚間", "Aeon 帶廣店", "購物", "帶廣市中心", "北海道帶廣市西4条南20丁目1", "+81 0155 24 3100", "立體停車場。Mapcode: 124 564 675*53"]
        ]
      },
      {
        date: "2026-10-31", weekday: "Sat", region: "帶廣 → 釧路", drive: ["190 km", "231 分鐘", "440円"], note: "07:30 離店 · 早餐於酒店 · 跑步 6 km", weather: ["釧路", "2°", "11°", "30%", "06:01", "16:25", "☁"],
        places: [
          ["Check-out", "Hotel Route-Inn Obihiro Ekimae", "住宿 · 帶廣", "帶廣站前", "北海道帶廣市西3条南11丁目8", "+81 5018 09 9746", "含早餐；停車 600円。Mapcode: 124 624 018*72"],  
          ["上午", "十勝が丘公園與展望台", "景點 · 十勝川溫泉", "音更町十勝川溫泉", "北海道河東郡音更町十勝川温泉6", "+81 0155 32 6633", "公園 Mapcode: 369 667 545*14；展望台 Mapcode: 369 666 373*82。"],
          ["上午", "幸福站", "景點 · 舊幸福站", "帶廣市幸福町", "北海道帶廣市幸福町東1線", "+81 0155 22 8600", "每日 09:00–17:30。Mapcode: 396 874 146*55"],
          ["上午", "愛國站", "景點 · 舊愛國站", "帶廣市愛國町", "北海道帶廣市愛國町基線39-40", "", "Mapcode: 124 323 141*36"],
          ["中午", "高橋まんじゅう屋", "小吃 · 帶廣", "帶廣市東1条南", "北海道帶廣市東1条南5丁目19-4", "+81 0155 23 1421", "Mapcode: 124 625 785*73"],
          ["午餐", "ぶた丼のとん田", "午餐 · 帶廣", "帶廣市東10条南", "北海道帶廣市東10条南17丁目2", "+81 0155 24 4358", "11:00–18:00。Mapcode: 124 597 338*63"],
          ["下午", "釧路和商市場", "市場 · 釧路", "釧路市黑金町", "北海道釧路市黑金町13丁目25", "+81 0154 22 3226", "由帶廣約 120 km。市場營業時間依店舖而異。Mapcode: 149 256 302*37"],
          ["Check-in", "Comfort Hotel Kushiro", "住宿 · 釧路", "釧路站前", "北海道釧路市北大通13丁目1-1", "+81 0154 21 5711", "含早餐；停車 550円。Mapcode: 149 256 314*21"],
          ["晚餐", "和商市場勝手丼 / 爐端燒", "晚餐 · 釧路", "釧路站周邊", "北海道釧路市黑金町13丁目25", "+81 0154 22 6636", "勝手丼可於和商市場選料；爐端燒 Mapcode: 149 227 660*53。營業時間及公休日請先確認。"]
        ]
      },
      {
        date: "2026-11-01", weekday: "Sun", region: "釧路濕原環線", drive: ["140 km", "200 分鐘", "0円"], note: "08:00 離店 · 早餐於酒店", weather: ["釧路", "2°", "11°", "30%", "06:02", "16:24", "☁"],
        places: [
          ["Check-out", "Comfort Hotel Kushiro", "住宿 · 釧路", "釧路站前", "北海道釧路市北大通13丁目1-1", "+81 0154 21 5711", "含早餐；停車 550円。Mapcode: 149 256 314*21"],
        ["上午", "阿寒國際鶴中心 Grus", "景點 · 丹頂鶴", "釧路市阿寒町", "北海道釧路市阿寒町上阿寒23線40", "+81 0154 66 4011", "入場 480円；09:00–17:00。Mapcode: 556 183 821*58"],
          ["上午", "鶴見台", "景點 · 丹頂鶴觀察", "鶴居村下雪裡", "北海道阿寒郡鶴居村下雪裡", "", "Mapcode: 556 353 112*24"],
          ["中午", "溫根內木道與遊客中心", "景點 · 濕原步道", "鶴居村溫根內", "北海道阿寒郡鶴居村溫根內", "+81 0154 65 2323", "遊客中心 09:00–17:00，週二休館。木道 Mapcode: 149 670 350*44；中心 Mapcode: 149 669 832*34"],
          ["下午", "釧路濕原展望台", "景點 · 展望台", "釧路市北斗", "北海道釧路市北斗6-11", "+81 0154 56 2424", "Mapcode: 149 548 538*66"],
          ["午餐", "魚一拉麵 / 釧路漁人碼頭 MOO", "午餐 · 釧路港", "釧路市錦町", "北海道釧路市錦町2丁目4-7", "+81 0154 23 0600", "MOO 消費滿 1,000円可至服務台索取 90 分鐘免費停車券。Mapcode: 149 226 460*07"],
          ["傍晚", "細岡展望台", "景點 · 夕景", "釧路町達古武", "北海道釧路郡釧路町達古武22-24", "+81 0154 40 4455", "預留移動時間；Mapcode: 149 654 431*74"],
          ["日落", "幣舞橋", "景點 · 夕陽", "釧路市北大通", "北海道釧路市北大通1", "", "日落景點。Mapcode: 149 226 382*00"],
          ["Check-in", "Comfort Hotel Kushiro", "住宿 · 釧路", "釧路站前", "北海道釧路市北大通13丁目1-1", "+81 0154 21 5711", "含早餐；停車 550円。Mapcode: 149 256 314*21"]
        ]
      },
      {
        date: "2026-11-02", weekday: "Mon", region: "釧路 → 根室 → 弟子屈", drive: ["283 km", "345 分鐘", "0円"], note: "07:30 離店 · 早餐於酒店 · 跑步 6 km", weather: ["根室", "1°", "9°", "40%", "06:04", "16:22", "☁"],
        places: [
          ["Check-out", "Comfort Hotel Kushiro", "住宿 · 釧路", "釧路站前", "北海道釧路市北大通13丁目1-1", "+81 0154 21 5711", "含早餐；停車 550円。Mapcode: 149 256 314*21"],
          ["上午", "道之驛 Swan 44 根室", "景點 · 道之驛", "根室市酪陽", "北海道根室市酪陽1番地", "+81 0153 25 3055", "09:00–17:00。Mapcode: 734 353 064*50"],
          ["中午", "珸瑤瑁郵局", "景點 · 日本最東端郵局", "根室市珸瑤瑁", "北海道根室市珸瑤瑁1丁目43-1", "+81 0153 28 2250", "平日 09:00–17:00。Mapcode: 952 095 405*81"],
          ["下午", "納沙布岬 / 北方館", "景點 · 本土最東端", "根室市納沙布", "北海道根室市納沙布33-2", "+81 0153 23 6111", "北方館 Mapcode: 952 157 864*84。沿岸風大，注意保暖。"],
          ["午餐", "根室花丸迴轉壽司（根室本店）", "午餐 · 壽司", "根室市花園町", "北海道根室市花園町9丁目35", "+81 0153 24 1444", "11:00–21:00。Mapcode: 423 549 733*15"],
          ["Check-in", "Hotel Masyu 弟子屈", "住宿 · 弟子屈", "弟子屈町湯之島", "北海道川上郡弟子屈町湯之島2丁目3-22", "+81 0154 82 2141", "已選 14:00 入住；含早餐、免費停車。Mapcode: 462 849 174*46"],
          ["晚餐", "でんでん Denden", "晚餐 · 弟子屈", "弟子屈町湯之島", "北海道川上郡弟子屈町湯之島2丁目8-27", "+81 8025 90 2824", "17:00–24:00，週日休。Mapcode: 462 849 265*55"]
        ]
      },
      {
        date: "2026-11-03", weekday: "Tue", region: "弟子屈 → 知床宇登呂", drive: ["168 km", "193 分鐘", "0円"], note: "07:30 離店 · 留肚享用酒店晚餐", weather: ["宇登呂", "0°", "8°", "40%", "06:05", "16:20", "☁"],
        places: [
          ["Check-out", "Hotel Masyu 弟子屈", "住宿 · 弟子屈", "弟子屈町湯之島", "北海道川上郡弟子屈町湯之島2丁目3-22", "+81 0154 82 2141", "已選 14:00 入住；含早餐、免費停車。Mapcode: 462 849 174*46"],
        ["上午", "古丹溫泉露天風呂", "景點 · 屈斜路湖", "弟子屈町屈斜路古丹", "北海道川上郡弟子屈町屈斜路古丹", "+81 0154 82 2940", "湖畔露天風呂。Mapcode: 731 521 433*68"],
          ["上午", "川湯溫泉 MOKMOK Base", "景點 · 川湯溫泉", "弟子屈町川湯溫泉", "北海道川上郡弟子屈町川湯溫泉1丁目52-1", "+81 0154 83 3511", "08:30–17:00。Mapcode: 731 713 770*30"],
          ["上午", "硫黃山", "景點 · 火山地貌", "弟子屈町川湯", "北海道川上郡弟子屈町川湯", "", "留意園區步道與道路當日開放資訊。Mapcode: 731 683 874*76"],
          ["午餐", "ウトロ漁協婦人部食堂", "午餐 · 海鮮", "斜里町宇登呂東", "北海道斜里郡斜里町ウトロ東117", "+81 0152 24 3191", "08:30–14:00，週四休。Mapcode: 894 854 412*13"],
          ["下午", "天に続く道（觀景台與起點）", "景點 · 直線道路", "斜里町峰濱", "北海道斜里郡斜里町朱円東", "", "觀景台 Mapcode: 642 559 442*71；起點 Mapcode: 642 561 462*28。"],
          ["下午", "雙美瀑布 Oshinkoshin Falls", "景點 · 瀑布", "斜里町宇登呂西", "北海道斜里郡斜里町ウトロ西", "+81 0152 22 2125", "免費停車。Mapcode: 894 727 261*67"],
          ["Check-in／晚餐", "Kitakobushi Shiretoko Hotel & Resort", "住宿 · 知床宇登呂", "斜里町宇登呂東", "北海道斜里郡斜里町ウトロ東172", "+81 0152 24 2021", "含晚餐及早餐、免費停車。Mapcode: 894 854 327*40"]
        ]
      },
      {
        date: "2026-11-04", weekday: "Wed", region: "知床 → 網走", drive: ["219 km", "283 分鐘", "0円"], note: "07:45 離店 · 早餐於酒店 · 跑步 6 km", weather: ["網走", "1°", "9°", "30%", "06:07", "16:18", "☀"],
        places: [
          ["Check-out", "Kitakobushi Shiretoko Hotel & Resort", "住宿 · 知床宇登呂", "斜里町宇登呂東", "北海道斜里郡斜里町ウトロ東172", "+81 0152 24 2021", "含晚餐及早餐、免費停車。Mapcode: 894 854 327*40"],
        ["上午", "知床五湖フィールドハウス", "景點 · 知床五湖", "斜里町遠音別村", "北海道斜里郡斜里町遠音別村字岩宇別549", "+81 0152 24 2299", "08:30–16:00；入場 450円。季節性步道規則請先確認。Mapcode: 757 730 335*58"],
          ["中午", "知床峠", "景點 · 山岳道路", "羅臼町湯之澤", "北海道目梨郡羅臼町湯ノ澤町", "", "11 月可能因積雪封路，出發前確認道路開放。Mapcode: 757 493 090*86"],
          ["下午", "童話之丘（メルヘンの丘）", "景點 · 大空町", "大空町女滿別昭和", "北海道網走郡大空町女滿別昭和", "+81 0152 74 4323", "Mapcode: 305 308 400*41"],
          ["晚餐前", "迴轉壽司 Triton 三輪店", "美食 · 北見", "北見市東三輪", "北海道北見市東三輪4丁目12-20", "+81 0157 23 5555", "11:00–22:00。Mapcode: 561 763 404*80"],
          ["Check-in", "Hotel Route Inn Abashiri Ekimae", "住宿 · 網走", "網走站前", "北海道網走市新町1丁目2-13", "+81 0152 44 5511", "含早餐、免費停車。Mapcode: 305 675 179*21"],
          ["晚餐備選", "網走蕎麥麵／拉麵 或 喜多八", "晚餐 · 網走", "網走市中心", "北海道網走市南5条東6丁目11-2", "+81 0152 67 9101", "蕎麥麵／拉麵 Mapcode: 305 678 235*67；喜多八 Mapcode: 305 677 226*38。營業時間與停車安排請出發前確認。"]
        ]
      },
      {
        date: "2026-11-05", weekday: "Thu", region: "網走 → 紋別", drive: ["156 km", "197 分鐘", "0円"], note: "07:30 離店 · 鄂霍次克流冰館與北方民族博物館建議 16:30 前離開", weather: ["紋別", "1°", "9°", "30%", "06:09", "16:16", "☀"],
        places: [
          ["Check-out", "Hotel Route Inn Abashiri Ekimae", "住宿 · 網走", "網走站前", "北海道網走市新町1丁目2-13", "+81 0152 44 5511", "含早餐、免費停車。Mapcode: 305 675 179*21"],
        ["上午", "能取岬", "景點 · 海岬", "網走市美岬", "北海道網走市美岬", "+81 0152 44 5849", "Mapcode: 991 104 260*16"],
          ["上午", "能取湖珊瑚草群生地", "景點 · 能取湖", "網走市卯原內", "北海道網走市卯原內60", "", "季節景觀依時節變化。Mapcode: 525 359 280*14"],
          ["中午", "網走監獄博物館", "景點 · 博物館", "網走市呼人", "北海道網走市呼人1-1", "+81 0152 45 2411", "09:00–17:00；入館 1,500円。Mapcode: 305 583 122*68"],
          ["下午", "鄂霍次克流冰館", "景點 · 展望與流冰展示", "網走市天都山", "北海道網走市天都山244-3", "+81 0152 43 5951", "08:30–18:00；入館 990円。Mapcode: 305 584 667*22"],
          ["下午", "北方民族博物館", "景點 · 博物館", "網走市潮見", "北海道網走市潮見309-1", "+81 0152 45 3888", "09:30–16:30；入館 550円。Mapcode: 305 584 277*48"],
          ["晚餐", "紋別漁師食堂 / よってけまるとみ", "晚餐 · 紋別", "紋別市新生／港町", "北海道紋別市新生40-55", "+81 0158 24 9432", "漁師食堂 10:00–18:00（週二休），Mapcode: 401 297 347*16；よってけまるとみ位於港町，步行可到，Mapcode: 401 358 845*23。"],
          ["Check-in", "Mombetsu Prince Hotel", "住宿 · 紋別", "紋別市本町", "北海道紋別市本町7丁目3-26", "+81 0158 23 5411", "含早餐、免費停車。Mapcode: 401 358 394*87"]
        ]
      },
      {
        date: "2026-11-06", weekday: "Fri", region: "紋別 → 稚內", drive: ["214 km", "263 分鐘", "0円"], note: "08:00 離店 · 沿 238 號國道北上", weather: ["稚內", "0°", "7°", "40%", "06:11", "16:14", "☁"],
        places: [
          ["Check-out", "Mombetsu Prince Hotel", "住宿 · 紋別", "紋別市本町", "北海道紋別市本町7丁目3-26", "+81 0158 23 5411", "含早餐、免費停車。Mapcode: 401 358 394*87"],
        ["上午", "螃蟹爪雕像", "景點 · 紋別", "紋別市元紋別", "北海道紋別市元紋別", "+81 0158 27 5180", "Mapcode: 801 585 053*50"],
          ["上午", "道の駅 オホーツク紋別", "景點 · 道之驛", "紋別市元紋別", "北海道紋別市元紋別11-6", "+81 0158 23 5400", "09:00–17:00，週一休；展示室 700円。Mapcode: 801 585 104*03"],
          ["中午", "道之驛 Marine Island Okashima", "休息 · 枝幸", "枝幸町岡島", "北海道枝幸郡枝幸町岡島1978-13", "+81 0163 62 2860", "09:00–16:30。Mapcode: 957 166 098*43"],
          ["下午", "北緯45度紀念碑", "景點 · 枝幸", "枝幸町問牧", "北海道枝幸郡枝幸町問牧1377", "", "Mapcode: 957 604 013*76"],
          ["下午", "道之驛 猿払公園", "休息 · 猿払", "猿払村濱鬼志別", "北海道宗谷郡猿払村浜鬼志別214-7", "+81 0163 52 2311", "09:00–17:30。Mapcode: 680 591 261*25"],
          ["傍晚", "稚內港北防波堤巨蛋", "景點 · 港口建築", "稚內市開運", "北海道稚內市開運1丁目2-2", "+81 0162 23 6483", "距酒店步行約 2 分鐘。Mapcode: 964 006 205*77"],
          ["Check-in／晚餐", "Surfeel Hotel Wakkanai", "住宿 · 稚內", "稚內站前", "北海道稚內市開運1丁目2-2", "+81 0162 23 8111", "含早餐與晚餐、免費停車。預計 18:00 入住。Mapcode: 964 006 057*01"]
        ]
      },
      {
        date: "2026-11-07", weekday: "Sat", region: "稚內 → 宗谷岬 → 稚內", drive: ["78 km", "120 分鐘", "0円"], note: "06:00 / 07:45 離店 · 早餐於酒店 · 預計 18:30–19:00 晚餐", weather: ["稚內", "0°", "7°", "40%", "06:13", "16:12", "☁"],
        places: [
          ["Check-out", "Surfeel Hotel Wakkanai", "住宿 · 稚內", "稚內站前", "北海道稚內市開運1丁目2-2", "+81 0162 23 8111", "含早餐與晚餐、免費停車。預計 18:00 入住。Mapcode: 964 006 057*01"],
        ["清晨", "稚內港北防波堤巨蛋", "景點 · 清晨散步", "稚內市開運", "北海道稚內市開運1丁目2-2", "+81 0162 23 6483", "早餐前步行約 45 分鐘。Mapcode: 964 006 205*77"],
          ["早餐", "日本最北端麥當勞（40號稚內店）", "早餐 · 稚內", "稚內市潮見", "北海道稚內市潮見3丁目5-17", "+81 0162 33 3236", "07:00–23:00。Mapcode: 353 819 174*25"],
          ["上午", "宗谷岬 / 日本最北端之碑", "景點 · 日本本土最北端", "稚內市宗谷岬", "北海道稚內市宗谷岬2", "+81 0162 23 6161", "由麥當勞約 27.5 km。Mapcode: 998 067 269*35"],
          ["上午", "宗谷丘陵白色之路", "景點 · 丘陵景觀", "稚內市宗谷村", "北海道稚內市宗谷村宗谷108", "+81 0162 23 6468", "道路狀況及冬季封閉資訊請先確認。Mapcode: 805 841 068*33"],
          ["中午", "稚內市觀光案內所", "服務 · 領取紀念證明", "稚內市中央", "北海道稚內市中央3丁目6", "+81 0162 22 2384", "10:00–18:00。若無法現場領取，可查詢線上申請方式。Mapcode: 353 876 710*57"],
          ["午餐", "樺太食堂", "午餐 · 海鮮丼", "稚內市野寒布", "北海道稚內市ノシャップ2丁目2-6", "+81 0162 24 3451", "09:00–15:00。Mapcode: 964 093 450*25"],
          ["下午", "稚內市立野寒布水族館", "景點 · 水族館", "稚內市野寒布", "北海道稚內市ノシャップ2丁目2-16", "+81 0162 23 6278", "冬季 10:00–16:00；入館 500円。Mapcode: 964 092 595*13"],
          ["日落", "野寒布岬", "景點 · 夕陽", "稚內市野寒布", "北海道稚內市ノシャップ2丁目5", "+81 0162 23 6483", "預留日落與返回酒店時間。Mapcode: 964 092 530*27"],
          ["晚餐", "日本最北端麥當勞（40號稚內店）", "晚餐 · 稚內", "稚內市潮見", "北海道稚內市潮見3丁目5-17", "+81 0162 33 3236", "備選晚餐，預計 18:30 或 19:00。"],
          ["Check-in／晚餐", "Surfeel Hotel Wakkanai", "住宿 · 稚內", "稚內站前", "北海道稚內市開運1丁目2-2", "+81 0162 23 8111", "含早餐與晚餐、免費停車。預計 18:00 入住。Mapcode: 964 006 057*01"]
        ]
      },
      {
        date: "2026-11-08", weekday: "Sun", region: "稚內 → 留萌 → 苫小牧", drive: ["397 km", "402 分鐘", "3,320円"], note: "08:00 離店 · 長途駕駛日，預留休息與路況緩衝", weather: ["苫小牧", "2°", "10°", "30%", "06:15", "16:10", "☁"],
        places: [
          ["Check-out", "Surfeel Hotel Wakkanai", "住宿 · 稚內", "稚內站前", "北海道稚內市開運1丁目2-2", "+81 0162 23 8111", "含早餐與晚餐、免費停車。預計 18:00 入住。Mapcode: 964 006 057*01"],
        ["上午", "幌延町風車群 / 106 號道路紀念碑", "景點 · 幌延", "幌延町浜里", "北海道天鹽郡幌延町浜里", "", "由稚內約 56 km。Mapcode: 736 307 006*60"],
          ["上午", "Ororon Bird Monument 崖海鴉像", "景點 · 羽幌", "羽幌町汐見", "北海道苫前郡羽幌町汐見", "", "位於海岸公路沿線。Mapcode: 508 852 266*58"],
          ["午餐", "留萌 蛇の目寿司 本店", "午餐 · 壽司", "留萌市錦町", "北海道留萌市錦町3丁目1-13", "+81 0164 42 0848", "11:30–18:30，週三、週四休。Mapcode: 416 362 355*86"],
          ["傍晚", "AEON MALL 苫小牧", "購物 · 苫小牧", "苫小牧市柳町", "北海道苫小牧市柳町3丁目1-20", "+81 0144 51 3300", "由酒店約 5 km。Mapcode: 113 257 436*65"],
          ["晚餐", "Rojiura Curry SAMURAI 湯咖哩", "晚餐 · 苫小牧", "AEON MALL 苫小牧 1F", "北海道苫小牧市柳町3丁目1-20", "+81 0144 61 1084", "11:00–21:00。Mapcode: 113 257 434*62"],
          ["Check-in", "Comfort Hotel Tomakomai", "住宿 · 苫小牧", "苫小牧市旭町", "北海道苫小牧市旭町3丁目7-18", "+81 0144 31 3211", "含早餐、免費停車。Mapcode: 113 162 591*52"]
        ]
      },
      {
        date: "2026-11-09", weekday: "Mon", region: "苫小牧 → 札幌 → 苫小牧", drive: ["240 km", "260 分鐘", "4,730円"], note: "08:30 離店 · 札幌市區停車後步行遊覽", weather: ["札幌", "1°", "9°", "30%", "06:17", "16:09", "☁"],
        places: [
          ["Check-out", "Comfort Hotel Tomakomai", "住宿 · 苫小牧", "苫小牧市旭町", "北海道苫小牧市旭町3丁目7-18", "+81 0144 31 3211", "含早餐、免費停車。Mapcode: 113 162 591*52"],        
          ["上午", "苫小牧魚金食堂", "早餐／景點 · 海鮮", "苫小牧市汐見町", "北海道苫小牧市汐見町1丁目1-14", "+81 0144 84 1198", "09:00–15:00，週日休；附近海邊停車後步行約 10 分鐘。Mapcode: 113 164 250*18"],
          ["中午", "真駒內瀧野靈園 頭大佛殿", "景點 · 建築與庭園", "札幌市南區滝野", "北海道札幌市南區滝野2", "+81 0115 92 1223", "09:00–16:00。Mapcode: 9 013 179*63"],
          ["下午", "諏訪神社", "景點 · 札幌", "札幌市東區北12條東", "北海道札幌市東區北12條東1丁目1-10", "+81 0117 11 0960", "09:00–17:00。Mapcode: 9 552 747*53"],
          ["下午", "北海道大學 銀杏並木", "景點 · 校園散步", "札幌市北區北海道大學", "北海道札幌市北區北13條西5-7丁目", "+81 0117 06 4680", "秋季景色依當年氣候而異。Mapcode: 9 551 719*83"],
          ["Check-in", "Comfort Hotel Tomakomai", "住宿 · 苫小牧", "苫小牧市旭町", "北海道苫小牧市旭町3丁目7-18", "+81 0144 31 3211", "含早餐、免費停車。Mapcode: 113 162 591*52"]
        ]
      },
      {
        date: "2026-11-10", weekday: "Tue", region: "苫小牧 → 千歲 → 新千歲", drive: ["36 km", "46 分鐘", "730円"], note: "08:30 離店 · 13:00 還車 · HB881 16:15 起飛", weather: ["千歲", "1°", "9°", "30%", "06:19", "16:07", "☀"],
        places: [
          ["Check-out", "Comfort Hotel Tomakomai", "住宿 · 苫小牧", "苫小牧市旭町", "北海道苫小牧市旭町3丁目7-18", "+81 0144 31 3211", "含早餐、免費停車。Mapcode: 113 162 591*52"],        
        ["上午", "道之驛 Salmon Park 千歲", "景點 · 道之驛", "千歲市花園", "北海道千歲市花園2丁目4-2", "+81 0123 29 3972", "09:00–17:00。Mapcode: 113 889 735*67"],
          ["上午", "千歲水族館 Chitose Salmon Aquarium", "景點 · 水族館", "千歲市花園", "北海道千歲市花園2丁目4-312", "+81 0123 42 3001", "09:00–17:00；入館 800円。Mapcode: 113 889 586*61"],
          ["中午", "Nissan Rent-a-car 新千歲機場店", "還車", "新千歲機場", "北海道千歲市柏台南2丁目2-5", "+81 0123 27 4123", "13:00 還車；確認油箱、ETC 卡與雪胎費用。Mapcode: 113 832 693*41"],
          ["16:15", "新千歲機場 · HB881", "返程航班", "新千歲機場國內線／國際線", "北海道千歲市美々987-22", "+81 0123 23 0111", "航班 16:15–21:30。Mapcode: 113 712 175*32"]
        ]
      }
    ];

    const dayNav = document.querySelector("#day-nav");
    const itinerary = document.querySelector("#itinerary");
    const viewHeading = document.querySelector("#view-heading");
    const topbar = document.querySelector(".topbar");
    const dateFormatter = new Intl.DateTimeFormat("zh-Hant", { month: "short", day: "numeric" });
    const weatherForecasts = new Map();
    const weatherStatuses = new Map();
    let activeView = "day";
    let activeDayIndex = 0;
    const weatherLocations = {
      "帶廣": [42.923, 143.196],
      "釧路": [42.985, 144.382],
      "根室": [43.330, 145.583],
      "宇登呂": [44.074, 144.995],
      "網走": [44.021, 144.273],
      "紋別": [44.356, 143.354],
      "稚內": [45.416, 141.673],
      "苫小牧": [42.634, 141.606],
      "札幌": [43.062, 141.355],
      "千歲": [42.822, 141.651]
    };

    const updateScrollOffset = () => {
      document.documentElement.style.scrollPaddingTop = `${topbar.getBoundingClientRect().height + 12}px`;
    };
    updateScrollOffset();
    new ResizeObserver(updateScrollOffset).observe(topbar);

    function weatherIcon(code) {
      if (code === 0) return "☀";
      if (code === 1 || code === 2) return "🌤";
      if (code === 3) return "☁";
      if (code === 45 || code === 48) return "🌫";
      if ([71, 73, 75, 77, 85, 86].includes(code)) return "❄";
      if (code >= 95) return "⛈";
      if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return "🌧";
      return "☁";
    }

    function getWeatherForDay(day) {
      const [city, fallbackLow, fallbackHigh, fallbackRain, fallbackSunrise, fallbackSunset, fallbackIcon] = day.weather;
      const forecast = weatherForecasts.get(`${city}:${day.date}`);
      if (forecast) {
        return {
          city,
          low: forecast.low == null ? "—" : Math.round(forecast.low),
          high: forecast.high == null ? "—" : Math.round(forecast.high),
          rain: forecast.rain == null ? "—" : `${Math.round(forecast.rain)}%`,
          sunrise: forecast.sunrise?.slice(11, 16) ?? "—",
          sunset: forecast.sunset?.slice(11, 16) ?? "—",
          icon: weatherIcon(forecast.code),
          source: "Open-Meteo 預報"
        };
      }

      const status = weatherStatuses.get(city);
      const source = status === "loading"
        ? "正在載入預報 · 季節參考"
        : status === "error"
          ? "預報暫不可用 · 季節參考"
          : "尚未涵蓋此日期 · 季節參考";
      return {
        city,
        low: Number.parseInt(fallbackLow, 10),
        high: Number.parseInt(fallbackHigh, 10),
        rain: fallbackRain,
        sunrise: fallbackSunrise,
        sunset: fallbackSunset,
        icon: fallbackIcon,
        source
      };
    }

    async function loadWeatherForecasts() {
      const cities = [...new Set(tripDays.map((day) => day.weather[0]))];
      cities.forEach((city) => weatherStatuses.set(city, "loading"));
      await Promise.all(cities.map(async (city) => {
        const coordinates = weatherLocations[city];
        if (!coordinates) {
          weatherStatuses.set(city, "error");
          return;
        }

        const parameters = new URLSearchParams({
          latitude: String(coordinates[0]),
          longitude: String(coordinates[1]),
          daily: "temperature_2m_max,temperature_2m_min,precipitation_probability_max,weather_code,sunrise,sunset",
          timezone: "Asia/Tokyo",
          forecast_days: "16"
        });

        try {
          const response = await fetch(`https://api.open-meteo.com/v1/forecast?${parameters}`);
          if (!response.ok) throw new Error(`Open-Meteo HTTP ${response.status}`);
          const data = await response.json();
          if (!data.daily?.time) throw new Error("Open-Meteo returned no daily forecast");

          data.daily.time.forEach((date, index) => {
            weatherForecasts.set(`${city}:${date}`, {
              high: data.daily.temperature_2m_max?.[index],
              low: data.daily.temperature_2m_min?.[index],
              rain: data.daily.precipitation_probability_max?.[index],
              code: data.daily.weather_code?.[index],
              sunrise: data.daily.sunrise?.[index],
              sunset: data.daily.sunset?.[index]
            });
          });
          weatherStatuses.set(city, "ready");
        } catch (error) {
          weatherStatuses.set(city, "error");
          console.warn(`Unable to load weather for ${city}.`, error);
        }

        if (activeView === "day" && tripDays[activeDayIndex].weather[0] === city) {
          renderSelectedDay(activeDayIndex);
        }
      }));
    }

    function mapsUrl(name, address) {
      return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name} ${address} Japan`)}`;
    }

    function routeUrls(day) {
      const stops = day.places.map((place) => `${place[1]}, ${place[4]}, Japan`);
      const embeddedMap = new URL("https://maps.google.com/maps");
      embeddedMap.searchParams.set("f", "d");
      embeddedMap.searchParams.set("source", "s_d");
      embeddedMap.searchParams.set("saddr", stops[0]);
      embeddedMap.searchParams.set("daddr", stops.slice(1).map((stop, index) => `${index ? "to:" : ""}${stop}`).join(" "));
      embeddedMap.searchParams.set("dirflg", "d");
      embeddedMap.searchParams.set("output", "embed");

      const directions = new URL("https://www.google.com/maps/dir/");
      directions.searchParams.set("api", "1");
      directions.searchParams.set("origin", stops[0]);
      directions.searchParams.set("destination", stops[stops.length - 1]);
      if (stops.length > 2) directions.searchParams.set("waypoints", stops.slice(1, -1).join("|"));
      directions.searchParams.set("travelmode", "driving");
      return { embed: embeddedMap.href, directions: directions.href };
    }

    function setActiveNav(view, index = 0) {
      dayNav.querySelectorAll(".day-link").forEach((link) => {
        const active = view === "overview"
          ? link.dataset.view === "overview"
          : link.dataset.view === "day" && Number(link.dataset.dayIndex) === index;
        link.classList.toggle("active", active);
        if (active) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
      });
    }

    function renderSelectedDay(index) {
      const day = tripDays[index];
      const dayNumber = index + 1;
      const date = new Date(`${day.date}T12:00:00`);
      const route = routeUrls(day);

      const section = document.createElement("section");
      section.className = "day-section";
      section.id = `day-${dayNumber}`;
      section.setAttribute("aria-labelledby", `day-title-${dayNumber}`);
      const weather = getWeatherForDay(day);
      const { city, low, high, rain, sunrise, sunset, icon, source } = weather;
      section.innerHTML = `
        <div class="day-heading">
          <div><p class="day-kicker">DAY ${String(dayNumber).padStart(2, "0")} · ${day.region}</p><h2 id="day-title-${dayNumber}">${dateFormatter.format(date)} <span>${day.weekday}</span></h2><time datetime="${day.date}">${day.date.replaceAll("-", ".")}</time></div>
          <div class="day-pager"><button type="button" data-previous aria-label="前往上一日">← 上一日</button><button type="button" data-next aria-label="前往下一日">下一日 →</button></div>
        </div>
        <div class="day-map">
          <div class="map-heading"><div><h3>當日路線</h3><span>${day.places.length} 個行程地點</span></div><a class="map-open" href="${route.directions}" target="_blank" rel="noopener noreferrer">在 Google Maps 開啟 ↗</a></div>
          <div class="map-frame"><iframe src="${route.embed}" title="Day ${dayNumber} Google Maps 行程路線" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>
        </div>
        <div class="weather" aria-label="${city} · ${source}">
          <div><p class="weather-label">${city} · ${source}</p><div class="weather-temp">最高 ${high}℃<span> · 最低 ${low}℃</span></div><div class="weather-details"><span>降雨 ${rain}</span><span>日出 ${sunrise}</span><span>日落 ${sunset}</span></div></div><span class="weather-icon" aria-hidden="true">${icon}</span>
        </div>
        <div class="drive-strip" aria-label="今日開車資訊">
          <div class="drive-stat"><strong>${day.drive[0]}</strong><span>行駛距離</span></div><div class="drive-stat"><strong>${day.drive[1]}</strong><span>預估開車</span></div><div class="drive-stat"><strong>${day.drive[2]}</strong><span>高速費</span></div>
        </div>
        ${day.note ? `<p class="day-note">${day.note}</p>` : ""}
        <div class="timeline" aria-label="Day ${dayNumber} 行程地點"></div>`;

      const timeline = section.querySelector(".timeline");
      day.places.forEach(([time, name, type, area, address, phone, note]) => {
        const card = document.createElement("article");
        card.className = "place-card";
        const mapUrl = mapsUrl(name, address);
        card.innerHTML = `
          <div class="place-top"><h3 class="place-title"><a href="${mapUrl}" target="_blank" rel="noopener noreferrer">${name}</a></h3><span class="place-time">${time}</span></div>
          <p class="place-type">${type}</p>
          <div class="place-meta"><div><span class="meta-label">區域</span>${area}</div><div><span class="meta-label">地址</span>${address}</div>${phone ? `<div><span class="meta-label">電話</span><a href="tel:${phone.replaceAll(" ", "")}">${phone}</a></div>` : ""}</div>
          ${note ? `<p class="place-note">${note}</p>` : ""}
          <div class="place-actions"><a class="action" href="${mapUrl}" target="_blank" rel="noopener noreferrer" aria-label="在 Google Maps 導航至 ${name}">地圖 / 導航 ↗</a>${phone ? `<a class="action secondary" href="tel:${phone.replaceAll(" ", "")}">致電</a>` : ""}</div>`;
        timeline.append(card);
      });
      itinerary.replaceChildren(section);

      viewHeading.querySelector("h2").textContent = "每日路線";
      viewHeading.querySelector("p").textContent = "點選地點，開啟 Google Maps";
      setActiveNav("day", index);

      section.querySelector("[data-previous]").disabled = index === 0;
      section.querySelector("[data-next]").disabled = index === tripDays.length - 1;
      section.querySelector("[data-previous]").addEventListener("click", () => showDay(index - 1, true, true));
      section.querySelector("[data-next]").addEventListener("click", () => showDay(index + 1, true, true));
    }

    function renderOverview() {
      const overview = document.createElement("div");
      overview.className = "overview-grid";
      tripDays.forEach((day, index) => {
        const dayNumber = index + 1;
        const date = new Date(`${day.date}T12:00:00`);
        const route = routeUrls(day);
        const card = document.createElement("article");
        card.className = "overview-day";
        card.innerHTML = `
          <div class="overview-day-heading">
            <div><p>DAY ${String(dayNumber).padStart(2, "0")} · ${day.region}</p><h3>${dateFormatter.format(date)} · ${day.weekday}</h3></div>
            <span class="overview-day-count">${day.places.length} 個地點</span>
          </div>
          <div class="map-frame"><iframe src="${route.embed}" title="Day ${dayNumber} Google Maps 行程路線" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>
          <a class="map-open" href="${route.directions}" target="_blank" rel="noopener noreferrer">在 Google Maps 開啟 ↗</a>`;
        overview.append(card);
      });
      itinerary.replaceChildren(overview);
      viewHeading.querySelector("h2").textContent = "旅程總覽";
      viewHeading.querySelector("p").textContent = "依每日路線查看所有行程地點";
      setActiveNav("overview");
    }

    function showDay(index, updateHistory = false, scrollToDay = false) {
      if (index < 0 || index >= tripDays.length) return;
      activeView = "day";
      activeDayIndex = index;
      renderSelectedDay(index);
      const hash = `#day-${index + 1}`;
      if (updateHistory && location.hash !== hash) history.pushState(null, "", hash);
      if (scrollToDay) {
        window.scrollTo({
          top: Math.max(0, itinerary.getBoundingClientRect().top + window.scrollY - topbar.getBoundingClientRect().height - 12),
          behavior: "smooth"
        });
      }
    }

    function showOverview(updateHistory = false, scrollToOverview = false) {
      activeView = "overview";
      renderOverview();
      if (updateHistory && location.hash !== "#overview") history.pushState(null, "", "#overview");
      if (scrollToOverview) {
        window.scrollTo({
          top: Math.max(0, itinerary.getBoundingClientRect().top + window.scrollY - topbar.getBoundingClientRect().height - 12),
          behavior: "smooth"
        });
      }
    }

    const overviewLink = document.createElement("a");
    overviewLink.className = "day-link";
    overviewLink.href = "#overview";
    overviewLink.textContent = "旅程總覽";
    overviewLink.dataset.view = "overview";
    dayNav.append(overviewLink);

    tripDays.forEach((day, index) => {
      const dayNumber = index + 1;
      const date = new Date(`${day.date}T12:00:00`);
      const navLink = document.createElement("a");
      navLink.className = "day-link";
      navLink.href = `#day-${dayNumber}`;
      navLink.textContent = `Day ${dayNumber}`;
      navLink.setAttribute("aria-label", `Day ${dayNumber}, ${dateFormatter.format(date)}`);
      navLink.dataset.dayIndex = String(index);
      navLink.dataset.view = "day";
      dayNav.append(navLink);
    });

    dayNav.addEventListener("click", (event) => {
      const link = event.target.closest(".day-link");
      if (!link) return;
      event.preventDefault();
      if (link.dataset.view === "overview") {
        showOverview(true, true);
        return;
      }
      showDay(Number(link.dataset.dayIndex), true, true);
    });
    window.addEventListener("popstate", () => {
      if (location.hash === "#overview") {
        showOverview(false, true);
        return;
      }
      const hashIndex = Number(location.hash.slice(5)) - 1;
      showDay(Number.isInteger(hashIndex) && hashIndex >= 0 && hashIndex < tripDays.length ? hashIndex : 0, false, true);
    });

    if (location.hash === "#overview") {
      showOverview();
    } else {
      const initialHashIndex = Number(location.hash.slice(5)) - 1;
      showDay(
        Number.isInteger(initialHashIndex) && initialHashIndex >= 0 && initialHashIndex < tripDays.length ? initialHashIndex : 0,
        false,
        location.hash.startsWith("#day-")
      );
    }
    loadWeatherForecasts();

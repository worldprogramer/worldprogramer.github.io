// 直接内嵌JSON数据，避免fetch加载问题
const animeData = {
  "monday": {
    "morning": [
      {
        "title": "仙逆",
        "episode": "93",
        "links": [
          {"url": "https://pan.quark.cn/s/43bb622eda06", "type": "quark"},
          {"url": "https://pan.baidu.com/s/17I93FYafeXQ4KdGWi-DbYA?pwd=6666", "type": "baidu"},
          {"url": "https://drive.uc.cn/s/6927bffb55344?public=1", "type": "uc"}
        ]
      },
      {
        "title": "宗门里除了我都是卧底",
        "episode": "76",
        "links": [
          {"url": "https://pan.quark.cn/s/b607c6a943b0", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1wdYH6c154480dpZYepz3KA?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "陆地键仙",
        "episode": "126",
        "links": [
          {"url": "https://pan.quark.cn/s/a83ab7f24837", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1R2i9rAp5uI1fkvTu0pDVRA?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "小仙之瑶",
        "episode": "20",
        "links": [
          {"url": "https://pan.quark.cn/s/60d2d733c978", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1AerbwSScoFlfC_jcnQcVZw?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "天都异录",
        "episode": "22",
        "links": [
          {"url": "https://pan.quark.cn/s/76a63183b8be", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1nM-kFzZaRZvRQ-zv_XyU3g?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "灵武大陆",
        "episode": "83",
        "links": [
          {"url": "https://pan.quark.cn/s/bc30a3327417", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1bgsjFB_w_lRS24EyAmysfQ?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "逆天至尊",
        "episode": "419",
        "links": [
          {"url": "https://pan.quark.cn/s/93bf5180181a", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1WWUKEz6uZMglzNuO2DK5KQ?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "无上神帝",
        "episode": "500",
        "links": [
          {"url": "https://pan.quark.cn/s/df3622c2032b", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1Nmt7O4jWxOuRV_a9CSC3GQ?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "吞天记",
        "episode": "12",
        "links": [
          {"url": "https://pan.quark.cn/s/ef5b811d7fa6", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1cNlxyNq6IjLV-XZOorefeg?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "西行纪 大猿魂",
        "episode": "4",
        "links": [
          {"url": "https://pan.quark.cn/s/3a0d68266d51", "type": "quark"},
          {"url": "https://pan.baidu.com/s/15DIc3MnqCqRTRCxvvNWwjw?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "太古战魂",
        "episode": "21",
        "links": [
          {"url": "https://pan.quark.cn/s/f86ff8216a43", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1neugI9ARXWKQZjZPnNNiKA?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "山海伏魔录",
        "episode": "停更",
        "links": [
          {"url": "https://pan.quark.cn/s/a71482831f14", "type": "quark"}
        ]
      }
    ],
    "evening": [
      {
        "title": "星辰变",
        "episode": "16",
        "links": [
          {"url": "https://pan.quark.cn/s/55f924e91054", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1KMmCOsqMPYqDce_pb3nfGg?pwd=6666", "type": "baidu"},
          {"url": "https://drive.uc.cn/s/93115d29457f4?public=1", "type": "uc"}
        ]
      },
      {
        "title": "吞噬星空",
        "episode": "176",
        "links": [
          {"url": "https://pan.quark.cn/s/3bf9f76e6669", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1fVuqknf5pHq8k9hEWaKgCA?pwd=6666", "type": "baidu"},
          {"url": "https://drive.uc.cn/s/5ba11b61890a4?public=1", "type": "uc"}
        ]
      }
    ]
  },
  "tuesday": {
    "morning": [
      {
        "title": "星辰变",
        "episode": "16",
        "links": [
          {"url": "https://pan.quark.cn/s/55f924e91054", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1KMmCOsqMPYqDce_pb3nfGg?pwd=6666", "type": "baidu"},
          {"url": "https://drive.uc.cn/s/93115d29457f4?public=1", "type": "uc"}
        ]
      },
      {
        "title": "吞噬星空",
        "episode": "176",
        "links": [
          {"url": "https://pan.quark.cn/s/3bf9f76e6669", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1fVuqknf5pHq8k9hEWaKgCA?pwd=6666", "type": "baidu"},
          {"url": "https://drive.uc.cn/s/5ba11b61890a4?public=1", "type": "uc"}
        ]
      },
      {
        "title": "丹道至尊",
        "episode": "128",
        "links": [
          {"url": "https://pan.quark.cn/s/e6c811be79f2", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1U-mTUJlVTAjIugWx10ITSA?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "斗战天下",
        "episode": "46",
        "links": [
          {"url": "https://pan.quark.cn/s/a537e874d513", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1y0N6dM1dKBwHFQ4r5nH20A?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "绝世战魂",
        "episode": "123",
        "links": [
          {"url": "https://pan.quark.cn/s/a0c7abcfd7e7", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1S3WsdnxKCAqep06SIJY0AQ?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "炼气十万年",
        "episode": "250",
        "links": [
          {"url": "https://pan.quark.cn/s/602d13fef1f7", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1AYzkPtRZenVs7fO9_CACFQ?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "灵剑尊",
        "episode": "605",
        "links": [
          {"url": "https://pan.quark.cn/s/5866998e9f6e", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1Doe5owVFUUAXrHO3Gn_Sbw?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "万界独尊",
        "episode": "339",
        "links": [
          {"url": "https://pan.quark.cn/s/d1028cecccd5", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1RnMx6CiI_xVRT6HJEMTDwQ?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "武神主宰",
        "episode": "556",
        "links": [
          {"url": "https://pan.quark.cn/s/1b1e2b8b8fbf", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1qwbXs4XDptTy_DmpVmSEMw?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "我的师兄太强了",
        "episode": "28",
        "links": [
          {"url": "https://pan.quark.cn/s/36ad1372ed57", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1Xx-SJvGeV7AKQrHCEouYuA?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "大侠请上功",
        "episode": "7",
        "links": [
          {"url": "https://pan.quark.cn/s/d2ed0731f79e", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1Sx5BxqyprvcUI5Vyy8k9lA?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "克金玩家",
        "episode": "3",
        "links": [
          {"url": "https://pan.quark.cn/s/cfab3c3fefbe", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1jhiDXqo7lpLJg-tJtObfMw?pwd=6666", "type": "baidu"}
        ]
      }
    ],
    "evening": [
      {
        "title": "一念永恒",
        "episode": "54",
        "links": [
          {"url": "https://pan.quark.cn/s/46c5de1abd82", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1lXXeHRQXy45MPMlnHi2tiw?pwd=6666", "type": "baidu"},
          {"url": "https://drive.uc.cn/s/4f143c09357a4?public=1", "type": "uc"}
        ]
      },
      {
        "title": "遮天",
        "episode": "114",
        "links": [
          {"url": "https://pan.quark.cn/s/b2b9a3c2b3b0", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1vyxWsUXRe_seQATvKshPDA?pwd=6666", "type": "baidu"},
          {"url": "https://drive.uc.cn/s/4a71575591134?public=1", "type": "uc"}
        ]
      },
      {
        "title": "那年那兔那些事儿",
        "episode": "10",
        "links": [
          {"url": "https://pan.quark.cn/s/77819b1dc3dc", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1z0DVRaPuR6DkPLzzrpfL-A?pwd=6666", "type": "baidu"}
        ]
      }
    ]
  },
  "wednesday": {
    "morning": [
      {
        "title": "一念永恒",
        "links": [
          {"url": "https://pan.quark.cn/s/46c5de1abd82", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1lXXeHRQXy45MPMlnHi2tiw?pwd=6666", "type": "baidu"},
          {"url": "https://drive.uc.cn/s/4f143c09357a4?public=1", "type": "uc"}
        ]
      },
      {
        "title": "遮天",
        "links": [
          {"url": "https://pan.quark.cn/s/b2b9a3c2b3b0", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1vyxWsUXRe_seQATvKshPDA?pwd=6666", "type": "baidu"},
          {"url": "https://drive.uc.cn/s/4a71575591134?public=1", "type": "uc"}
        ]
      },
      {
        "title": "都市古仙医",
        "links": [
          {"url": "https://pan.quark.cn/s/4e3a7f5255fd", "type": "quark"},
          {"url": "https://pan.baidu.com/s/154DLnPkiTcs3JakmTZXBSg?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "一世独尊",
        "links": [
          {"url": "https://pan.quark.cn/s/f850cf2d437d", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1KXAHe51vQjbEjGcn_TZSLA?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "少年歌行第四季血染天启",
        "links": [
          {"url": "https://pan.quark.cn/s/86e792505040", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1Fxgp8ENhM-itfF8YR5TzJg?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "吞天记",
        "links": [
          {"url": "https://pan.quark.cn/s/ef5b811d7fa6", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1cNlxyNq6IjLV-XZOorefeg?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "君有云",
        "links": [
          {"url": "https://pan.quark.cn/s/71daacc765e2", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1hxdquK_OtP5P_XW_UIKnAQ?pwd=6666", "type": "baidu"}
        ]
      }
    ],
    "evening": [
      {
        "title": "神印王座",
        "links": [
          {"url": "https://pan.quark.cn/s/8e4e6df9e213", "type": "quark"},
          {"url": "https://pan.baidu.com/s/17xUevJ4RByj-5WpKGVlbhg?pwd=6666", "type": "baidu"},
          {"url": "https://drive.uc.cn/s/f7cc5b06f09a4?public=1", "type": "uc"}
        ]
      }
    ]
  },
  "thursday": {
    "morning": [
      {
        "title": "神印王座",
        "links": [
          {"url": "https://pan.quark.cn/s/8e4e6df9e213", "type": "quark"},
          {"url": "https://pan.baidu.com/s/17xUevJ4RByj-5WpKGVlbhg?pwd=6666", "type": "baidu"},
          {"url": "https://drive.uc.cn/s/f7cc5b06f09a4?public=1", "type": "uc"}
        ]
      },
      {
        "title": "陆地键仙",
        "links": [
          {"url": "https://pan.quark.cn/s/a83ab7f24837", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1R2i9rAp5uI1fkvTu0pDVRA?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "万界至尊",
        "links": [
          {"url": "https://pan.quark.cn/s/c9f94b74f370", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1vG6t_3GP32w25Ut4Ywf2Gw?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "小仙之瑶",
        "links": [
          {"url": "https://pan.quark.cn/s/60d2d733c978", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1AerbwSScoFlfC_jcnQcVZw?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "余烬行者",
        "links": [
          {"url": "https://pan.quark.cn/s/426423d991e3", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1kk56y64b5VGU3tdzLnbqLQ?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "师兄啊师兄",
        "links": [
          {"url": "https://pan.quark.cn/s/b764c38f6e44", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1e4o2BTktQQbcHMI5R9edwg?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "诛仙 第三季",
        "links": [
          {"url": "https://pan.quark.cn/s/b18adf8583bf", "type": "quark"},
          {"url": "https://pan.baidu.com/s/107maB9zM3SijIwLV1mGPww?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "鲲吞天下之掌门归来",
        "links": [
          {"url": "https://pan.quark.cn/s/07eea134edee", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1bKP0N76csSwdJKmyaRrbHg?pwd=6666", "type": "baidu"}
        ]
      }
    ],
    "evening": [
      {
        "title": "完美世界",
        "links": [
          {"url": "https://pan.quark.cn/s/cd286cfc44d3", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1m4QUzLPhzppKSVLNbp6CXQ?pwd=6666", "type": "baidu"},
          {"url": "https://drive.uc.cn/s/63aa4d5aaa3c4?public=1", "type": "uc"}
        ]
      }
    ]
  },
  "friday": {
    "morning": [
      {
        "title": "完美世界",
        "links": [
          {"url": "https://pan.quark.cn/s/cd286cfc44d3", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1m4QUzLPhzppKSVLNbp6CXQ?pwd=6666", "type": "baidu"},
          {"url": "https://drive.uc.cn/s/63aa4d5aaa3c4?public=1", "type": "uc"}
        ]
      },
      {
        "title": "斗战天下",
        "links": [
          {"url": "https://pan.quark.cn/s/a537e874d513", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1y0N6dM1dKBwHFQ4r5nH20A?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "灵武大陆",
        "links": [
          {"url": "https://pan.quark.cn/s/bc30a3327417", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1bgsjFB_w_lRS24EyAmysfQ?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "丹道至尊",
        "links": [
          {"url": "https://pan.quark.cn/s/e6c811be79f2", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1U-mTUJlVTAjIugWx10ITSA?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "灵剑尊",
        "links": [
          {"url": "https://pan.quark.cn/s/5866998e9f6e", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1Doe5owVFUUAXrHO3Gn_Sbw?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "逆天至尊",
        "links": [
          {"url": "https://pan.quark.cn/s/93bf5180181a", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1WWUKEz6uZMglzNuO2DK5KQ?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "无上神帝",
        "links": [
          {"url": "https://pan.quark.cn/s/df3622c2032b", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1Nmt7O4jWxOuRV_a9CSC3GQ?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "沧元图",
        "links": [
          {"url": "https://pan.quark.cn/s/55c7f6faacc3", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1R79Ij_IKZp5kuRoxjs-6sA?pwd=6666", "type": "baidu"},
          {"url": "https://drive.uc.cn/s/878f0b3409394?public=1", "type": "uc"}
        ]
      },
      {
        "title": "仙宠",
        "links": [
          {"url": "https://pan.quark.cn/s/5161d4ce9d53", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1TZxjVpdhovYHIDcoRbes9Q?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "太古战魂",
        "links": [
          {"url": "https://pan.quark.cn/s/f86ff8216a43", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1neugI9ARXWKQZjZPnNNiKA?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "灵笼 第二季",
        "links": [
          {"url": "https://pan.quark.cn/s/09fe6770dc99", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1RA5neuhU4hJMbrNfAzU0YA?pwd=6666", "type": "baidu"},
          {"url": "https://drive.uc.cn/s/ddd0c1f0158d4?public=1", "type": "uc"}
        ]
      },
      {
        "title": "凹凸世界",
        "links": [
          {"url": "https://pan.quark.cn/s/6bdd68110348", "type": "quark"}
        ]
      }
    ],
    "evening": [
      {
        "title": "斗罗大陆2 绝世唐门",
        "links": [
          {"url": "https://pan.quark.cn/s/984cdacbaf8c", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1LpQJWLdPP5rrHDllBw4JiA?pwd=6666", "type": "baidu"},
          {"url": "https://drive.uc.cn/s/77697e82d73a4?public=1", "type": "uc"}
        ]
      },
      {
        "title": "君子无疾",
        "links": [
          {"url": "https://pan.quark.cn/s/53aa94b23471", "type": "quark"},
          {"url": "https://pan.baidu.com/s/10e32MGqTYAHQtoeUB58aQw?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "超能立方",
        "links": [
          {"url": "https://pan.quark.cn/s/0799f3b0a041", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1zvAqcJDgeCq10PTdNvrJBg?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "王者荣耀：荣耀之章 命运篇",
        "links": [
          {"url": "https://pan.quark.cn/s/a02280aacb95", "type": "quark"},
          {"url": "https://pan.baidu.com/s/14l1a5ddiTxVMMwQr9_FPOQ?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "长歌行",
        "links": [
          {"url": "https://pan.quark.cn/s/871094746693", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1VtEmEc2XcDH3H8dwcyGYJw?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "画江湖之不良人第七季：九幽玄天",
        "links": [
          {"url": "https://pan.quark.cn/s/019464117b7a", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1uFWfCWY-lJvl_ey19uOBhA?pwd=6666", "type": "baidu"},
          {"url": "https://drive.uc.cn/s/5efa97478c964?public=1", "type": "uc"}
        ]
      }
    ]
  },
  "saturday": {
    "morning": [
      {
        "title": "斗罗大陆2 绝世唐门",
        "links": [
          {"url": "https://pan.quark.cn/s/984cdacbaf8c", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1LpQJWLdPP5rrHDllBw4JiA?pwd=6666", "type": "baidu"},
          {"url": "https://drive.uc.cn/s/77697e82d73a4?public=1", "type": "uc"}
        ]
      },
      {
        "title": "宗门里除了我都是卧底",
        "links": [
          {"url": "https://pan.quark.cn/s/b607c6a943b0", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1wdYH6c154480dpZYepz3KA?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "绝世战魂",
        "links": [
          {"url": "https://pan.quark.cn/s/a0c7abcfd7e7", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1S3WsdnxKCAqep06SIJY0AQ?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "一世独尊",
        "links": [
          {"url": "https://pan.quark.cn/s/f850cf2d437d", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1KXAHe51vQjbEjGcn_TZSLA?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "神国之上",
        "links": [
          {"url": "https://pan.quark.cn/s/3b1cefe698bb", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1OjATMDJzjhwKR710tI9T8w?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "万界独尊",
        "links": [
          {"url": "https://pan.quark.cn/s/d1028cecccd5", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1RnMx6CiI_xVRT6HJEMTDwQ?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "炼气十万年",
        "links": [
          {"url": "https://pan.quark.cn/s/602d13fef1f7", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1AYzkPtRZenVs7fO9_CACFQ?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "最强升级",
        "links": [
          {"url": "https://pan.quark.cn/s/8be375eae8e8", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1FnDFYWH_Ugd-iv78eMSQJQ?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "哆啦A梦第五季",
        "links": [
          {"url": "https://pan.quark.cn/s/bf09223c63ab", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1rRSCrjtUQL4kumabYpDADA?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "仙武传",
        "links": [
          {"url": "https://pan.quark.cn/s/dc8956882022", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1dqCN0IOOvAf-S3TfODb1xw?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "凡人修仙传",
        "links": [
          {"url": "https://pan.quark.cn/s/f256955d08e9", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1gF5YedYKMk4Clrq0qwZEgA?pwd=6666", "type": "baidu"},
          {"url": "https://drive.uc.cn/s/34349c96a9994?public=1", "type": "uc"}
        ]
      }
    ],
    "evening": [
      {
        "title": "斗破苍穹年番",
        "links": [
          {"url": "https://pan.quark.cn/s/3394ca387cd1", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1coz2pePTetFvgJG4DFQGOA?pwd=6666", "type": "baidu"},
          {"url": "https://drive.uc.cn/s/1c24e99a8d954?public=1", "type": "uc"}
        ]
      },
      {
        "title": "名侦探柯南",
        "links": [
          {"url": "https://pan.quark.cn/s/4c560693c7d2", "type": "quark"}
        ]
      }
    ]
  },
  "sunday": {
    "morning": [
      {
        "title": "斗破苍穹年番",
        "links": [
          {"url": "https://pan.quark.cn/s/3394ca387cd1", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1coz2pePTetFvgJG4DFQGOA?pwd=6666", "type": "baidu"},
          {"url": "https://drive.uc.cn/s/1c24e99a8d954?public=1", "type": "uc"}
        ]
      },
      {
        "title": "凸变英雄X",
        "links": [
          {"url": "https://pan.quark.cn/s/d0ea7d9b8187", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1Pmjp10i7J8FJxByxHtKKog?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "我的师兄太强了",
        "links": [
          {"url": "https://pan.quark.cn/s/36ad1372ed57", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1Xx-SJvGeV7AKQrHCEouYuA?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "魔天记",
        "links": [
          {"url": "https://pan.quark.cn/s/19033e6f23ba", "type": "quark"},
          {"url": "https://pan.baidu.com/s/17l-S3P8ZCPUnPWihPWPEng?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "都市古仙医",
        "links": [
          {"url": "https://pan.quark.cn/s/4e3a7f5255fd", "type": "quark"},
          {"url": "https://pan.baidu.com/s/154DLnPkiTcs3JakmTZXBSg?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "万界至尊",
        "links": [
          {"url": "https://pan.quark.cn/s/c9f94b74f370", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1vG6t_3GP32w25Ut4Ywf2Gw?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "武神主宰",
        "links": [
          {"url": "https://pan.quark.cn/s/1b1e2b8b8fbf", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1qwbXs4XDptTy_DmpVmSEMw?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "最强升级",
        "links": [
          {"url": "https://pan.quark.cn/s/8be375eae8e8", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1FnDFYWH_Ugd-iv78eMSQJQ?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "哆啦A梦第五季",
        "links": [
          {"url": "https://pan.quark.cn/s/bf09223c63ab", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1rRSCrjtUQL4kumabYpDADA?pwd=6666", "type": "baidu"}
        ]
      },
      {
        "title": "牧神记",
        "links": [
          {"url": "https://pan.quark.cn/s/9fc1dda29ff7", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1lDRxaAyY2KnI6x8amJ6UvA?pwd=6666", "type": "baidu"},
          {"url": "https://drive.uc.cn/s/1c99fb1db8cc4?public=1", "type": "uc"}
        ]
      }
    ],
    "evening": [
      {
        "title": "仙逆",
        "links": [
          {"url": "https://pan.quark.cn/s/43bb622eda06", "type": "quark"},
          {"url": "https://pan.baidu.com/s/17I93FYafeXQ4KdGWi-DbYA?pwd=6666", "type": "baidu"},
          {"url": "https://drive.uc.cn/s/6927bffb55344?public=1", "type": "uc"}
        ]
      },
      {
        "title": "海贼王",
        "links": [
          {"url": "https://pan.quark.cn/s/9243bfe60c61", "type": "quark"},
          {"url": "https://pan.baidu.com/s/1ihQdlYl413BffKKPlafctQ?pwd=6666", "type": "baidu"}
        ]
      }
    ]
  }
};

document.addEventListener('DOMContentLoaded', function() {
    try {
        // 直接使用内嵌数据，不再fetch外部JSON
        window.animeData = animeData;
        
        // 渲染初始视图（默认周一）
        renderAnimeByDay('monday');
        
        // 设置事件监听器
        setupEventListeners();
        
        // 设置最后更新日期
        document.getElementById('last-updated').textContent = new Date().toLocaleDateString();

        // 隐藏加载动画
        document.querySelector('.loader').style.display = 'none';
        
        // 隐藏错误消息，如果存在
        const errorMessage = document.getElementById('error-message');
        if (errorMessage) {
            errorMessage.style.display = 'none';
        }
    } catch (error) {
        console.error('数据加载错误:', error);
        showErrorMessage('无法加载动漫资源数据，请稍后再试或点击刷新按钮重试。');
    }
});

/**
 * 显示错误消息
 */
function showErrorMessage(message) {
    // 隐藏加载动画
    document.querySelector('.loader').style.display = 'none';
    
    // 查找或创建错误消息容器
    let errorMessage = document.getElementById('error-message');
    if (!errorMessage) {
        errorMessage = document.createElement('div');
        errorMessage.id = 'error-message';
        errorMessage.className = 'error-message';
        
        const container = document.getElementById('anime-container');
        container.innerHTML = '';
        container.appendChild(errorMessage);
    }
    
    // 设置错误消息
    errorMessage.innerHTML = `
        <h3>加载失败</h3>
        <p>${message}</p>
        <button id="retry-button" class="retry-button"><i class="fas fa-sync-alt"></i> 刷新</button>
    `;
    
    // 添加重试按钮监听器
    document.getElementById('retry-button').addEventListener('click', function() {
        // 显示加载动画
        document.querySelector('.loader').style.display = 'flex';
        errorMessage.style.display = 'none';
        
        // 延迟一点执行，以显示加载动画
        setTimeout(function() {
            try {
                // 重新尝试渲染
                renderAnimeByDay(getActiveDay());
                document.querySelector('.loader').style.display = 'none';
            } catch (error) {
                console.error('重试加载错误:', error);
                errorMessage.style.display = 'block';
                document.querySelector('.loader').style.display = 'none';
            }
        }, 500);
    });
}

/**
 * 获取当前激活的标签页
 */
function getActiveDay() {
    const activeTab = document.querySelector('#day-tabs-list li.active');
    return activeTab ? activeTab.getAttribute('data-day') : 'monday';
}

/**
 * 渲染特定日期的动漫数据
 */
function renderAnimeByDay(day) {
    const data = window.animeData;
    if (!data || !data[day]) {
        showErrorMessage(`未找到${getDayName(day)}的数据，请尝试选择其他日期或刷新页面。`);
        return;
    }
    
    const container = document.getElementById('anime-container');
    container.innerHTML = '';
    
    // 错误处理：检查数据格式是否正确
    if (!data[day].morning && !data[day].evening) {
        showErrorMessage(`${getDayName(day)}的数据格式不正确，请联系管理员。`);
        return;
    }
    
    // 上午更新区块
    if (data[day].morning && data[day].morning.length > 0) {
        const morningBlock = createTimeBlock('10点更新');
        const morningGrid = createAnimeGrid(data[day].morning);
        morningBlock.appendChild(morningGrid);
        container.appendChild(morningBlock);
    }
    
    // 晚间更新区块
    if (data[day].evening && data[day].evening.length > 0) {
        const eveningBlock = createTimeBlock('18点更新');
        const eveningGrid = createAnimeGrid(data[day].evening);
        eveningBlock.appendChild(eveningGrid);
        container.appendChild(eveningBlock);
    }
    
    // 如果当天没有数据
    if (container.children.length === 0) {
        container.innerHTML = `
            <div class="no-result">
                <h3>暂无数据</h3>
                <p>${getDayName(day)}暂无动漫资源更新。</p>
            </div>
        `;
    }
}

/**
 * 获取星期几的中文名称
 */
function getDayName(day) {
    const dayNames = {
        'monday': '周一',
        'tuesday': '周二',
        'wednesday': '周三',
        'thursday': '周四',
        'friday': '周五',
        'saturday': '周六',
        'sunday': '周日'
    };
    return dayNames[day] || day;
}

/**
 * 创建时间块元素（上午/晚间区块）
 */
function createTimeBlock(title) {
    const block = document.createElement('div');
    block.className = 'time-block';
    
    const heading = document.createElement('h2');
    heading.textContent = title;
    block.appendChild(heading);
    
    return block;
}

/**
 * 创建动漫网格及卡片
 */
function createAnimeGrid(animeList) {
    const grid = document.createElement('div');
    grid.className = 'anime-grid';
    
    animeList.forEach(anime => {
        const card = createAnimeCard(anime);
        grid.appendChild(card);
    });
    
    return grid;
}

/**
 * 创建单个动漫卡片
 */
function createAnimeCard(anime) {
    const card = document.createElement('div');
    card.className = 'anime-card';
    
    // 添加动漫图片
    const imageDiv = document.createElement('div');
    imageDiv.className = 'anime-image';
    const defaultImageUrl = getDefaultImageForAnime(anime.title);
    imageDiv.style.backgroundImage = `url(${defaultImageUrl})`;
    
    // 添加年份标签 (随机2020-2024年)
    const yearSpan = document.createElement('span');
    yearSpan.className = 'anime-year';
    const randomYear = 2020 + Math.floor(Math.random() * 5); // 2020-2024
    yearSpan.textContent = randomYear;
    imageDiv.appendChild(yearSpan);
    
    // 添加"免费"标签
    const tagSpan = document.createElement('span');
    tagSpan.className = 'anime-tag';
    tagSpan.textContent = '免费';
    imageDiv.appendChild(tagSpan);
    
    card.appendChild(imageDiv);
    
    // 动漫信息区域
    const infoDiv = document.createElement('div');
    infoDiv.className = 'anime-info';
    
    // 动漫标题
    const title = document.createElement('div');
    title.className = 'anime-title';
    title.textContent = anime.title;
    infoDiv.appendChild(title);
    
    // 动漫副标题/创作者
    const subtitle = document.createElement('div');
    subtitle.className = 'anime-subtitle';
    subtitle.textContent = getRandomCreators();
    infoDiv.appendChild(subtitle);
    
    // 动漫元数据（评分和集数）
    const metaDiv = document.createElement('div');
    metaDiv.className = 'anime-meta';
    
    // 评分
    const ratingDiv = document.createElement('div');
    ratingDiv.className = 'anime-rating';
    const ratingIcon = document.createElement('i');
    ratingIcon.className = 'fas fa-star';
    ratingDiv.appendChild(ratingIcon);
    
    const ratingValue = document.createElement('span');
    const rating = (Math.random() * 2 + 8).toFixed(1); // 8.0-10.0
    ratingValue.textContent = rating;
    ratingDiv.appendChild(ratingValue);
    metaDiv.appendChild(ratingDiv);
    
    // 集数
    const episodeDiv = document.createElement('div');
    episodeDiv.className = 'anime-episode';
    // 使用实际集数而不是随机数
    const episodeCount = anime.episode || Math.floor(Math.random() * 200) + 1;
    episodeDiv.textContent = `更新至${episodeCount}集`;
    metaDiv.appendChild(episodeDiv);
    
    infoDiv.appendChild(metaDiv);
    card.appendChild(infoDiv);
    
    // 链接区域
    const links = document.createElement('div');
    links.className = 'anime-links';
    
    // 添加链接
    anime.links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.className = `anime-link ${link.type}`;
        
        // 添加图标
        const icon = document.createElement('i');
        let linkText = '';
        
        switch(link.type) {
            case 'quark':
                icon.className = 'fas fa-cloud-download-alt';
                linkText = '夸克网盘';
                break;
            case 'baidu':
                icon.className = 'fas fa-cloud';
                linkText = '百度网盘';
                break;
            case 'uc':
                icon.className = 'fas fa-download';
                linkText = 'UC网盘';
                break;
            default:
                icon.className = 'fas fa-link';
                linkText = '其他网盘';
        }
        
        a.appendChild(icon);
        
        // 添加文字
        const span = document.createElement('span');
        span.textContent = linkText;
        a.appendChild(span);
        
        links.appendChild(a);
    });
    
    card.appendChild(links);
    return card;
}

/**
 * 获取随机创作者名称
 */
function getRandomCreators() {
    const creators = [
        "叶帆、徐磊、冷泉",
        "白小纯、徐凡、蓝小布",
        "张三丰、王冲、林动",
        "秦牧、萧炎、陈平安",
        "楚风、李星云、夏天",
        "叶辰、老鹰、林雷",
        "莫天、刘洋、张默",
        "辰东、天蚕土豆、耳根",
        "唐家三少、我吃西红柿、忘语",
        "猫腻、净无痕、风青阳"
    ];
    
    return creators[Math.floor(Math.random() * creators.length)];
}

/**
 * 根据动漫名称获取默认图片
 */
function getDefaultImageForAnime(title) {
    // 创建一个动漫标题到图片URL的映射
    const animeImages = {
        "仙逆": "https://pic.imgdb.cn/item/65eac20f9f345e8d03f1c62f.webp",
        "吞噬星空": "https://pic.imgdb.cn/item/65eac2499f345e8d03f2eca6.webp",
        "斗破苍穹年番": "https://pic.imgdb.cn/item/65eac2789f345e8d03f3c56c.webp",
        "完美世界": "https://pic.imgdb.cn/item/65eac2969f345e8d03f4648d.webp",
        "一念永恒": "https://pic.imgdb.cn/item/65eac2c79f345e8d03f54d51.webp",
        "星辰变": "https://pic.imgdb.cn/item/65eac3079f345e8d03f6972c.webp",
        "遮天": "https://pic.imgdb.cn/item/65eac3449f345e8d03f7f62b.webp",
        "神印王座": "https://pic.imgdb.cn/item/65eac3759f345e8d03f90a19.webp",
        "凡人修仙传": "https://pic.imgdb.cn/item/65eac3979f345e8d03f9b969.webp",
        "斗罗大陆2 绝世唐门": "https://pic.imgdb.cn/item/65eac4009f345e8d03fc14a1.webp",
        "武神主宰": "https://pic.imgdb.cn/item/65eac4209f345e8d03fce2d7.webp",
        "万界独尊": "https://pic.imgdb.cn/item/65eac43c9f345e8d03fd9a78.webp",
        "万界至尊": "https://pic.imgdb.cn/item/65eac4609f345e8d03fe7c93.webp",
        "逆天至尊": "https://pic.imgdb.cn/item/65eac4819f345e8d03ff5cf2.webp",
        "牧神记": "https://pic.imgdb.cn/item/65eac4a39f345e8d0400499a.webp"
    };
    
    // 如果有特定动漫的图片，则使用它
    if (animeImages[title]) {
        return animeImages[title];
    }
    
    // 为没有特定图片的动漫生成随机默认图
    // 使用哈希函数确保同一个标题总是得到相同的图片
    const hashCode = function(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = ((hash << 5) - hash) + str.charCodeAt(i);
            hash = hash & hash; // Convert to 32bit integer
        }
        return Math.abs(hash);
    };
    
    const hash = hashCode(title);
    const defaultImages = [
        "https://pic.imgdb.cn/item/65eac4009f345e8d03fc14a1.webp",
        "https://pic.imgdb.cn/item/65eac4209f345e8d03fce2d7.webp",
        "https://pic.imgdb.cn/item/65eac43c9f345e8d03fd9a78.webp",
        "https://pic.imgdb.cn/item/65eac4609f345e8d03fe7c93.webp",
        "https://pic.imgdb.cn/item/65eac4819f345e8d03ff5cf2.webp",
        "https://pic.imgdb.cn/item/65eac4a39f345e8d0400499a.webp"
    ];
    
    return defaultImages[hash % defaultImages.length];
}

/**
 * 设置所有事件监听器
 */
function setupEventListeners() {
    // 日期标签切换
    const tabs = document.querySelectorAll('#day-tabs-list li');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // 更新活动标签
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // 显示加载动画
            document.querySelector('.loader').style.display = 'flex';
            
            // 隐藏错误消息，如果存在
            const errorMessage = document.getElementById('error-message');
            if (errorMessage) {
                errorMessage.style.display = 'none';
            }
            
            // 延迟一点执行，以显示加载动画
            setTimeout(() => {
                // 渲染所选日期的内容
                const day = this.getAttribute('data-day');
                renderAnimeByDay(day);
                
                // 隐藏加载动画
                document.querySelector('.loader').style.display = 'none';
            }, 300);
        });
    });
    
    // 搜索功能
    const searchInput = document.getElementById('search');
    const searchBtn = document.getElementById('search-btn');
    
    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        
        // 显示加载动画
        document.querySelector('.loader').style.display = 'flex';
        
        // 延迟一点执行，以显示加载动画
        setTimeout(() => {
            if (!query) {
                // 如果搜索为空，重置为默认视图
                const activeDay = document.querySelector('#day-tabs-list li.active').getAttribute('data-day');
                renderAnimeByDay(activeDay);
            } else {
                // 搜索所有日期
                const results = searchAnime(query);
                renderSearchResults(results, query);
            }
            
            // 隐藏加载动画
            document.querySelector('.loader').style.display = 'none';
        }, 300);
    }
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', e => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // 主题切换
    const themeToggle = document.querySelector('.theme-toggle-container');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
        });
    }
    
    // 加载保存的主题偏好
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

/**
 * 搜索所有日期的动漫
 */
function searchAnime(query) {
    const data = window.animeData;
    const results = [];
    
    // 搜索所有日期和时间
    for (const day in data) {
        for (const time in data[day]) {
            data[day][time].forEach(anime => {
                if (anime.title.toLowerCase().includes(query)) {
                    results.push(anime);
                }
            });
        }
    }
    
    return results;
}

/**
 * 渲染搜索结果
 */
function renderSearchResults(results, query) {
    const container = document.getElementById('anime-container');
    
    if (results.length === 0) {
        container.innerHTML = `
            <div class="no-result">
                <h3>未找到结果</h3>
                <p>没有找到与"${query}"相关的动漫资源。</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = '';
    
    const searchBlock = createTimeBlock(`搜索结果: "${query}"`);
    const searchGrid = createAnimeGrid(results);
    searchBlock.appendChild(searchGrid);
    container.appendChild(searchBlock);
} 
const processor = ['Apple A10 Fusion',
                    'Apple A11 Bionic',
                    'Apple A12 Bionic',
                    'Apple A12X Bionic',
                    'Apple A13 Bionic',
                    'Apple A14',
                    'Apple A14 Bionic',
                    'Apple A15 Bionic',
                    'Apple A16 Bionic',
                    'Apple A4',
                    'Apple A5',
                    'Apple A6',
                    'Apple A7',
                    'Apple A8',
                    'Apple A9',
                    'Apple Bionic',
                    'Apple M1',
                    'Apple M2',
                    'Dimensity',
                    'Dimensity 1000+',
                    'Dimensity 1080',
                    'Dimensity 1100 5G',
                    'Dimensity 1200 5G',
                    'Dimensity 1200 Max 5G',
                    'Dimensity 1200-Max 5G',
                    'Dimensity 1300 5G',
                    'Dimensity 700',
                    'Dimensity 700 5G',
                    'Dimensity 720',
                    'Dimensity 720 5G',
                    'Dimensity 8000 5G',
                    'Dimensity 8000 Max',
                    'Dimensity 800U 5G',
                    'Dimensity 810',
                    'Dimensity 810 5G',
                    'Dimensity 8100',
                    'Dimensity 8100 5G',
                    'Dimensity 8100 Max 5G',
                    'Dimensity 8100-Max',
                    'Dimensity 900 5G',
                    'Dimensity 9000 5G',
                    'Dimensity 920 5G',
                    'Exynos',
                    'Exynos 1200',
                    'Exynos 2100',
                    'Exynos 2200',
                    'Exynos 3470 Quad',
                    'Exynos 3475 Quad',
                    'Exynos 4412 Quad',
                    'Exynos 5410 Octa',
                    'Exynos 7420 Octa',
                    'Exynos 7570 Quad',
                    'Exynos 7580 Octa',
                    'Exynos 7870 Octa',
                    'Exynos 7880',
                    'Exynos 7884',
                    'Exynos 7885',
                    'Exynos 7904',
                    'Exynos 850',
                    'Exynos 8890 Octa',
                    'Exynos 8895',
                    'Exynos 9610',
                    'Exynos 9611',
                    'Exynos 980',
                    'Exynos 9810',
                    'Exynos 9820',
                    'Exynos 9825',
                    'Exynos 990',
                    'Exynos 992',
                    'MT6737T',
                    'MT6739W',
                    'MT6739WW',
                    'MT6765V',
                    'MT6833 Dimensity 700',
                    'MT6833 Dimensity 700 5G',
                    'MT6853 Dimensity 720 5G',
                    'MT6873V Dimensity 800 5G',
                    'MT6889Z Dimensity 1000+',
                    'MediaTek',
                    'MediaTek G25',
                    'MediaTek G35',
                    'MediaTek G80',
                    'MediaTek G88',
                    'MediaTek G95',
                    'MediaTek Helio G35',
                    'MediaTek Helio G99',
                    'MediaTek Helio P22',
                    'MediaTek P20',
                    'MediaTek P22',
                    'MediaTek P23',
                    'MediaTek P35',
                    'MediaTek P60',
                    'MediaTek P65',
                    'MediaTek P70',
                    'MediaTek P95',
                    'Mediatek',
                    'Mediatek G25',
                    'Mediatek G35',
                    'Mediatek G80',
                    'Mediatek G85',
                    'Mediatek G88',
                    'Mediatek G90T',
                    'Mediatek G96',
                    'Mediatek Helio A22',
                    'Mediatek Helio G95',
                    'Mediatek Helio G96',
                    'Mediatek Helio G99',
                    'Mediatek P35',
                    'Mediatek P65',
                    'Mediatek P90',
                    'Mediatek P95',
                    'Pega-Dual +XMM6262',
                    'Snapdragon',
                    'Snapdragon 400',
                    'Snapdragon 410',
                    'Snapdragon 425',
                    'Snapdragon 430',
                    'Snapdragon 435',
                    'Snapdragon 439',
                    'Snapdragon 450',
                    'Snapdragon 460',
                    'Snapdragon 480 5G',
                    'Snapdragon 600',
                    'Snapdragon 615',
                    'Snapdragon 617',
                    'Snapdragon 625',
                    'Snapdragon 626',
                    'Snapdragon 632',
                    'Snapdragon 652',
                    'Snapdragon 653',
                    'Snapdragon 660',
                    'Snapdragon 662',
                    'Snapdragon 665',
                    'Snapdragon 675',
                    'Snapdragon 678',
                    'Snapdragon 680 4G',
                    'Snapdragon 690 5G',
                    'Snapdragon 695 5G',
                    'Snapdragon 710',
                    'Snapdragon 720G',
                    'Snapdragon 730',
                    'Snapdragon 730G',
                    'Snapdragon 732G',
                    'Snapdragon 750',
                    'Snapdragon 750 5G',
                    'Snapdragon 750G',
                    'Snapdragon 750G 5G',
                    'Snapdragon 765G',
                    'Snapdragon 765G 5G',
                    'Snapdragon 768G 5G',
                    'Snapdragon 778G',
                    'Snapdragon 778G 5G',
                    'Snapdragon 778G+ 5G',
                    'Snapdragon 780G',
                    'Snapdragon 8 Gen 1',
                    'Snapdragon 8 Gen 1 Plus',
                    'Snapdragon 8 Gen 2',
                    'Snapdragon 8 Gen1',
                    'Snapdragon 8+ Gen 1',
                    'Snapdragon 800',
                    'Snapdragon 801',
                    'Snapdragon 805',
                    'Snapdragon 820',
                    'Snapdragon 835',
                    'Snapdragon 845',
                    'Snapdragon 855',
                    'Snapdragon 855+',
                    'Snapdragon 860',
                    'Snapdragon 865',
                    'Snapdragon 865 5G',
                    'Snapdragon 865+',
                    'Snapdragon 870 5G',
                    'Snapdragon 888',
                    'Snapdragon 888 5G',
                    'Snapdragon 888+ 5G',
                    'Snapdragon 898 5G',
                    'Spreadtrum',
                    'Spreadtrum SC9830',
                    'Unisoc SC9863A'];


export default processor;

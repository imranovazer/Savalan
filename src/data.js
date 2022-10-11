import wine1 from "./imgs/wines/wine1.png"
import wine2 from "./imgs/wines/wine2.png"
import wine3 from "./imgs/wines/wine3.png"
import wine4 from "./imgs/wines/wine4.png"
import wine5 from "./imgs/wines/wine5.png"
import winetours from "./imgs/WINE TOURS.png"
import wine6 from "./imgs/wines/wine6.png"
import wine7 from "./imgs/wines/wine7.png"
import wine8 from "./imgs/wines/wine8.png"
import wine9 from "./imgs/wines/wine9.png"
import wine10 from "./imgs/wines/wine10.png"
import wine11 from "./imgs/wines/wine11.png"
import wine12 from "./imgs/wines/wine12.png"

export default {
    company: ["ABOUT US", "VINEYARDS & TERROIR", "TOURS & WINE SHOP", "DEGUSTATION ROOM", "FACTORY", "BOUTIQUE", "EVENTS", "BLOG", "NEWS", "FAQ"],
    contacts: [{
        header: "HEAD OFFICE:", firsrLine: "14 Abbas Sahhat street, AZ1007 Baku, Azerbaijan", seconLine: ""
    },
    {
        header: "E-MAIL:", firsrLine: "office@savalan.az", seconLine: "customercare@savalan.az"
    },
    {
        header: "PHONE:", firsrLine: "(+994 12) 5951130;", seconLine: "(+994 12) 4413461;"
    }

    ],
    categories: [
        {
            id: 0,
            heading: "WINES",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nullam facilisi aliquet iaculis mattis ornare sem nibh. Nulla donec mollis mattis nisl ultrices lobortis felis ut quis. Facilisi adipiscing feugiat tortor morbi id aliquam sapien.",
            isActive: true,
            elements: [
                {
                    id: 0,
                    name: "LIMITED RELEASE",
                    img: wine1
                },
                {
                    id: 1,
                    name: "PETIT VERDOT",
                    img: wine2
                }
                ,
                {
                    id: 2,
                    name: "SYRAH",
                    img: wine3
                }
                ,
                {

                    id: 3,
                    name: "MELODY",
                    img: wine4
                }
                ,
                {
                    id: 4,
                    name: "CABERNET MERLOT",
                    img: wine5
                },
                {
                    id: 5,
                    name: "MERLOT",
                    img: wine11
                },
                {
                    id: 6,
                    name: "MARSELAN-SYRAH",
                    img: wine12
                }
            ]
        },
        {
            id: 1,
            heading: "DISTILLATES",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nullam facilisi aliquet iaculis mattis ornare sem nibh. Nulla donec mollis mattis nisl ultrices lobortis felis ut quis. Facilisi adipiscing feugiat tortor morbi id aliquam sapien.",
            isActive: false,
            elements: [
                {
                    id: 0,
                    name: "ARMUD ARAĞI",
                    img: wine6
                },
                {
                    id: 1,
                    name: "HAYVA ARAĞI",
                    img: wine7
                }
                ,
                {
                    id: 2,
                    name: "ZOĞAL ARAĞI",
                    img: wine8
                }
                ,
                {

                    id: 3,
                    name: "TUT ARAĞI",
                    img: wine9
                }
                ,
                {
                    id: 4,
                    name: "QARPIZ ARAĞI",
                    img: wine10
                }
            ]
        },
        {
            id: 2,
            heading: "CONGNAC"
        }

    ]
}
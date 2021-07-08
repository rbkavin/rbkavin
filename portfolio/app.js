const myColorPallet = {
    red: "#e8505b",
    blue: "#467fe7",
    white: "#ffffff",
    darkRed: "#a0373f"
}

const projectLinks = [{
        type: "",
        platform: "Web AR",
        link: "",
        videoLink: "",
    },
    {
        type: "",
        platform: "Facebook AR",
        link: "",
        videoLink: "",
    },
    {
        type: "",
        platform: "Instagram AR",
        link: "",
        videoLink: "",
    },
    {
        type: "",
        platform: "Snapchat AR",
        link: "",
        videoLink: "",
    },

    // {
    //     type: "",
    //     platform: "",
    //     link: "",
    //     videoLink: "",
    // }
]


function setAppleFavicons() {
    let headTitle = document.querySelector('head');

    let appleFavIcons = [{
            rel: 'icon',

            sizes: '32x32',
            href: '/threejstest/fav/favicon-32x32.png'
        },
        {
            rel: 'icon',
            sizes: '16x16',
            href: '/threejstest/fav/favicon-16x16.png'
        },
        {


            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/threejstest/fav/apple-touch-icon.png'
        },

        {


            rel: 'shortcut icon',
            sizes: null,
            href: '/threejstest/fav/favicon.ico'
        }
    ]

    appleFavIcons.forEach(function (appleFavIcon) {
        let setAFavicon = document.createElement('link');
        setAFavicon.setAttribute('rel', appleFavIcon.rel);
        if (appleFavIcon.sizes == null) {

        } else {
            setAFavicon.setAttribute('sizes', appleFavIcon.sizes);
        }
        setAFavicon.setAttribute('href', appleFavIcon.href);
        headTitle.appendChild(setAFavicon);
    });
}
const links = [{
        title: "Instagram portfolio",
        link: "https://www.facebook.com/sparkarhub/portfolios/ig/rbkavin/"
    },
    {
        title: "Snaplens portfolio",
        link: "https://lensstudio.snapchat.com/creator/3dRaqaIS7GMYJrLO4omM5w"
    },


];

function init() {
    setAppleFavicons();
    createPortfolio("All");
    menuOption();
}
init();

//create menu options
function menuOption() {
    const options = [...new Set(projectLinks.map(a => a.platform))]
    options.push("All");
    options.sort();
    // console.log(options)
    options.forEach((value) => {
        const dropDown = document.getElementsByClassName("dropdown-content")[0]
        let div = document.createElement("div");
        div.id = value;
        div.onclick = function () {
            createPortfolio(this.id)
            // console.log(this);
        };
        // window.addEventListener("click",)
        div.appendChild(document.createTextNode(value))
        dropDown.appendChild(div);

    })


}


//to create portfolio
function createPortfolio(catagory) {


    const wraper = document.getElementsByClassName("flex-container")[0];
    wraper.innerHTML = "";

    menuSelected(catagory);

    projectLinks.forEach(a => {
        let print = false;
        if (a.platform === catagory) {
            print = true;
        } else if (catagory === "All") {

            print = true;
        } else {
            print = false;
        }
        if (print) {
            // createCards(wraper, a.platform);
        }
    })

}

function createCards(wraper, i) {
    let div = document.createElement("div");
    let text = document.createTextNode(i + "");

    div.appendChild(text);
    wraper.appendChild(div);
}

function menuSelected(name) {
    const button = document.getElementById("buttonName");
    button.innerHTML = "";
    let text = document.createTextNode(name);
    button.appendChild(text);

}
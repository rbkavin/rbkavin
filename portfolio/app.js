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
setAppleFavicons();
const links = [{
        title: "Instagram portfolio",
        link: "https://www.facebook.com/sparkarhub/portfolios/ig/rbkavin/"
    },
    {
        title: "Snaplens portfolio",
        link: "https://lensstudio.snapchat.com/creator/3dRaqaIS7GMYJrLO4omM5w"
    },

    //         {
    // title:"",
    // link:""
    //         },
];
links.forEach((i) => {
    createButton(document.getElementById("linkDiv"), i.link, i.title)

})

function createButton(main, link_, title_) {

    var wraper = document.createElement('div');
    wraper.className = "wrapers";
    var a = document.createElement('a');
    a.href = link_;
    var button = document.createElement('button');
    button.className = "pushable"
    var span1 = document.createElement('span');
    span1.className = 'shadow';
    var span2 = document.createElement('span');
    span2.className = 'edge';

    var span3 = document.createElement('span');
    span3.className = 'front';

    var link = document.createTextNode(title_);
    span3.appendChild(link)

    button.appendChild(span1)
    button.appendChild(span2)
    button.appendChild(span3)

    a.appendChild(button)
    wraper.appendChild(a);
    main.appendChild(wraper);
}
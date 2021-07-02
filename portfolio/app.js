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
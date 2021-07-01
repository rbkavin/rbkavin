// const links = [
//         {
// title:"Instagram",
// link:"https://instagram.com/rbkavin"
//         },
//    {
// title:"Youtube",
// link:"https://www.youtube.com/c/RbkavinStudio"
//         },
//            {
// title:"Snapchat",
// link:"https://www.snapchat.com/add/rbkavin"
//         },

//            {
// title:"Twitter",
// link:"http://twitter.com/rbkavin"
//         },
//          {
// title:"Linked In",
// link:"https://www.linkedin.com/in/rbkavin"
//         },


// //         {
// // title:"",
// // link:""
// //         },
//     ];
// links.forEach((i)=>{


//      createLink( document.getElementById("linkDiv"),i.link,i.title) 

// })
function createLink(main, link_, title_) {

    var a = document.createElement('a');

    var link = document.createTextNode(title_);


    a.appendChild(link);

    a.title = title_;
    a.className = "links";

    a.href = link_;


    main.appendChild(a);


}
/* < iframe width = "200"
height = "345"
class = "test"
src = "https://www.youtube.com/embed/CTSsrIfhGzU?playlist=CTSsrIfhGzU&loop=1&controls=0&autoplay=1&mute=1" > */

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
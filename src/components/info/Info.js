import self from "../img/self.png"
import highnoon from "../img/highnoon.png"
import questionmark from "../img/questionmark.png"


export let colors = ["rgb(119, 9, 31)", "rgb(255, 241, 153)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

export const info = {
    firstName: "Nicholas",
    lastName: "Warenda",
    initials: "nw", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Software Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🌎',
            text: 'Born and raised in Sudbury, Ontario in Canada'
        },
        {
            emoji: "🔧",
            text: "Building development skills with Unity, C# and ReactJS"
        },
        {
            emoji: "📧",
            text: "Reachable at nickwarenda(at)gmail.com"
        },
        {
            emoji: '🚲',
            text: 'Hobbies & interests include biking, golf, and game development'
        },
    ],
    socials: [
        {
            link: "https://mail.google.com/mail/?view=cm&fs=1&to=nickwarenda@gmail.com",
            icon: "fa fa-envelope",
            label: 'email'
        },
        {
            link: "https://github.com/nwarenda",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/nicholaswarenda",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://nickwar42.itch.io/",
            icon: "fa fa-gamepad",
            label: 'itchio'
        },
    ],

    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "High Noon",
            live: "/#/highnoon",
            source: "https://github.com/nwarenda/HighNoon",
            image: highnoon
        },
        {
            title: "Project 2 - Coming Soon...",
            live: "/#/cabinfever",
            source: "https://github.com/nwarenda",
            image: questionmark
        },
    ]
}
import self from "../img/self.png"
import highnoon from "../img/highnoon.png"
import questionmark from "../img/questionmark.png"

<<<<<<< HEAD
=======
/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

>>>>>>> d8cf80fb2986c1f1e0dc472f69547c54b69ddbb7
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
            text: 'born and raised in Sudbury, Ontario (CA).'
        },
        {
            emoji: "💼",
            text: "working as a Software Developer at Accutron Instruments Inc."
        },
        {
            emoji: "📧",
            text: "reachable at nickwarenda(at)gmail.com."
        },
        {
            emoji: '🚲',
            text: 'my interests include biking, video games, golf,'
        },
        {
            emoji: '📺',
            text: 'podcasts, movies, and hiphop/R&B/alternative music. '
        },
    ],
    socials: [
        {
            link: "https://mail.google.com/mail/?view=cm&fs=1&to=nickwarenda@gmail.com",
            icon: "fa fa-envelope",
            label: 'email'
        },
        {
            link: "https://github.com/nickwar42",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/nicholaswarenda",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
    ],

    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",

            live: "https://nickwar42.github.io/HighNoon", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/nickwar42/HighNoon", // this should be a link to the **repository** of the project, where the code is hosted.
            image: highnoon
        },
        {
            title: "Project 2",
            live: "https://github.com",
            source: "https://github.com/nickwar42",
            image: questionmark
        },
    ]
}
import PUNE from "~/img/pune.svg"
import CHARHOLI from "~/img/charholi.svg"
import THANE from "~/img/thane.svg"
import SOLAPUR from "~/img/solapur.svg"
import NAVI_MUMBAI from "~/img/navi_mumbai.svg"
import MULUND from "~/img/mulund.svg"
import PANVEL from "~/img/panvel.svg"
import CHENNAI from "~/img/chennai.svg"
import WHO_WE_ARE from "~/img/who_we_are.svg"
import WHERE_WE_BELONG from "~/img/where_we_belong.svg"
import HOW_WE_ACT from "~/img/how_we_act.svg"

export const JOB_LIST = [
    { title: "Club Manager", locations: ["Pune", "Mumbai", "Chennai"] },
    { title: "Corporate Sales, CSO", locations: ["Pune"] },
    { title: "Sports Manager", locations: ["Mumbai", "Pune"] },
    { title: "Customer Support", locations: ["Chennai", "Mumbai"] },
    { title: "Club Manager", locations: ["Pune", "Mumbai", "Chennai"] },
    { title: "Corporate Sales, CSO", locations: ["Pune"] },
    { title: "Sports Manager", locations: ["Mumbai", "Pune"] },
    { title: "Customer Support Executives", locations: ["Chennai", "Mumbai"] },
];

export const CROUSEL = [
    {
        id: 1,
        topic: "Who we are",
        image: WHO_WE_ARE,
        title: "High Performers. Big Believers. Mr. Nice Guys.",
        description:
            "We bring the hustle and the heart, pushing limits, playing fair, and showing up for each other every step of the way.",
        btn: "Read more",
    },
    {
        id: 2,
        topic: "Where we belong",
        image: WHERE_WE_BELONG,
        title: "Every Goal Needs A Team",
        description:
            "We’re built on high-fives and high-performance, so whether you’re smashing a PB or trying your very first burpee, you’ll always find your people here.",
        btn: "Check how we hire",
    },
    {
        id: 3,
        topic: "How we act",
        image: HOW_WE_ACT,
        title: "Sweat & Celebrate",
        description:
            "We don’t just push limits, we lift each other up. Day in, day out, we drive results for our members and a better, healthier community for all.",
        btn: "Join the tribe",
    },
];

export const JOBS_CARD = [
    { id: 0, category: 'Trainers', title: 'Sports Manager', location: 'Mumbai' },
    {
        id: 1,
        category: 'Manager',
        title: 'Club Manager',
        location: ['Mumbai', 'Pune', 'Chennai'],
    },
    {
        id: 2,
        category: 'Trainers',
        title: 'Male & Female Trainers',
        location: 'Chennai',
    },
];

export const BUTTON = [
    { id: 0, name: 'How we hire', link: '/how-we-hire' },
    { id: 1, name: 'Apply now', link: '' }
]

export const LOCATIONS = [
    { id: 0, name: 'Pune', image: PUNE },
    { id: 1, name: 'Charholi', image: CHARHOLI },
    { id: 2, name: 'Thane', image: THANE },
    { id: 3, name: 'Solapur', image: SOLAPUR },
    { id: 4, name: 'Navi Mumbai', image: NAVI_MUMBAI },
    { id: 5, name: 'Mulund', image: MULUND },
    { id: 6, name: 'Panvel', image: PANVEL },
    { id: 7, name: 'Chennai', image: CHENNAI }
]
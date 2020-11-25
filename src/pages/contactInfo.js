//import contact icons
import { ReactComponent as Canada } from "./contact-icons/canada.svg";
import { ReactComponent as Discord } from "./contact-icons/discord.svg";
import { ReactComponent as Email } from "./contact-icons/email.svg";
import { ReactComponent as Facebook } from "./contact-icons/facebook.svg";
import { ReactComponent as GitHub } from "./contact-icons/github.svg";
import { ReactComponent as HK } from "./contact-icons/hk.svg";
import { ReactComponent as LinkedIn } from "./contact-icons/linkedin.svg";

export default {
    "Quick Contact": [
        {
            "value": "adrienpringle@gmail.com",
            "icon": Email,
            "active": true,
            "isColored": false,
            "isLink": false
        },
        {
            "value": "chip2222#1364",
            "icon": Discord,
            "active": true,
            "isColored": false,
            "isLink": false
        }
    ],
    "Mobile" : [
        {
            "value": "+852 5532 9749",
            "icon": HK,
            "active": false,
            "isColored": true,
            "isLink": false
        },
        {
            "value": "+1 519 590 4549",
            "icon": Canada,
            "active": true,
            "isColored": true,
            "isLink": false
        }
    ],
    "Other" : [
        {
            "value": "m.me/AdrienPringleFB",
            "icon": Facebook,
            "active": true,
            "isColored": false,
            "isLink": true
        },
        {
            "value": "linkedin.com/in/AdrienPringle",
            "icon": LinkedIn,
            "active": true,
            "isColored": false,
            "isLink": true
        },
        {
            "value": "github.com/AdrienPringle",
            "icon": GitHub,
            "active": true,
            "isLink": true
        }
    ]
}
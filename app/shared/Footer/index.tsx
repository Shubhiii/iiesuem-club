import LIGHT_LOGO from "~/img/logo-light.svg";
import FACEBOOK from "~/img/facebook.svg";
import YOUTUBE from "~/img/youtube.svg";
import INSTAGRAM from "~/img/instagram.svg";
import LINKEDIN from "~/img/linkedin.svg";

const MENU = [
    {
        id: 0,
        header: 'Info',
        children: [
            { name: 'About Us', link: '' },
            { name: 'Corporate', link: '' },
            { name: 'Partner With Us', link: '' },
            { name: 'Career', link: '' },
            { name: 'CSR', link: '' },
            { name: 'Contact Us', link: '' }
        ]
    },
    {
        id: 1,
        header: 'Membership',
        children: [
            { name: 'Membership packages', link: '' },
            { name: 'Enquire about membership', link: '' },
            { name: 'Book a tour', link: '' },
        ]
    },
]

const CONTACT_INFO = [
    { label: 'Email', value: 'info@ileseum.club' },
    { label: 'Phone', value: '+91-8956105580' },
]

const Footer = () => {
    return (
        <footer className="bg-darkGray w-full px-4 md:px-0 py-4 md:py-20 transition-all relative text-white">
            <div className="container mx-auto">
                <div className="flex justify-between flex-col md:flex-row gap-6 md:gap-0">
                    <div className="flex flex-col gap-5">
                        <a href="/">
                            <img className='w-3/6 md:w-auto transition-all' src={LIGHT_LOGO} alt='Ilesuem Club' />
                        </a>
                        <p>
                            Empowering everyday athletes and creating <span className="md:block">stronger, fitter, and healthier communities</span> around the globe.
                        </p>

                        {CONTACT_INFO.map((info) => {
                            const isEmail = info.label === 'Email';
                            const href = isEmail ? `mailto:${info.value}` : `tel:${info.value}`;

                            return (
                                <p key={info.label}>
                                    {info.label}: <a href={href} className="hover:underline transition-all">{info.value}</a>
                                </p>
                            );
                        })}

                    </div>

                    {MENU.map((menu) => (
                        <div key={menu.id} className="border-t md:border-t-0 pt-4 md:pt-0 border-dashed">
                            <h3 className="mb-4 font-semibold text-lg md:text-2xl">{menu.header}</h3>

                            <div className="flex flex-col gap-2.5">
                                {menu.children.map((child, index) => (
                                    <a key={menu.header + "-" + index} href={child.link} className="hover:underline transition-all">{child.name}</a>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div className="border-t md:border-t-0 pt-4 md:pt-0 border-dashed flex md:flex-col justify-between md:justify-normal gap-8">
                        <div>
                            <h3 className="mb-4 font-semibold text-lg md:text-2xl">Select Ileseum Club</h3>
                            <select className="custom-select bg-transparent rounded-full p-0 text-xs md:text-base w-full text-white"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='white' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`
                                }}
                            >
                                <option>Bavdhan, Pune</option>
                            </select>
                        </div>
                        <div>
                            <h3 className="mb-4 font-semibold text-lg md:text-2xl">Follow us:</h3>

                            <div className="flex gap-2">
                                <a href="#" title="FACEBOOK">
                                    <img src={FACEBOOK} alt="FACEBOOK" />
                                </a>
                                <a href="#" title="INSTAGRAM">
                                    <img src={INSTAGRAM} alt="INSTAGRAM" />
                                </a>
                                <a href="#" title="YOUTUBE">
                                    <img src={YOUTUBE} alt="YOUTUBE" />
                                </a>
                                <a href="#" title="LINKEDIN">
                                    <img src={LINKEDIN} alt="LINKEDIN" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p className="mt-20 text-center text-sm md:text-base">
                2025 Ileseum Clubs Itd. All rights reserved | <a href="#" className="hover:underline transition-all">Terms &amp; Conditions</a> | <a href="#" className="hover:underline transition-all">Privacy policy</a>
            </p>
        </footer>
    )
};

export default Footer;
import { socials } from "../constants";
import { PiArrowSquareIn } from "react-icons/pi";

const Footer = () => {
    return (
        <div
            id="Contact"
            className=" Contact foot h-[80vh] flex flex-col justify-between text-white "
        >
            <div className="flex lg:flex-row md:flex-row flex-col-reverse gap-5 items-center md:px-24 lg:px-24 mt-32  lg:mt-52 flex-grow   ">
                <div className="flex-grow flex justify-center items-center sm:px-10 transition-all duration-300">
                    <a
                        href="mailto:jayadeep.bellamkonda@gmail.com"
                        className="group a lg:text-9xl sm:text-7xl text-neutral-500   md:text-5xl text-6xl text-center lg:text-start font-medium"
                    >
                        Let's Work{" "}
                        <span className="group-hover:text-orange-500">
                            Together
                        </span>
                        <span>
                            <PiArrowSquareIn className="group-hover:scale-75 text-neutral-500 transition-all  inline" />
                        </span>
                    </a>
                </div>

                <div className="text-3xl">
                    <ul className="flex items-center text-neutral-500 flex-col gap-5 flex-grow  ">
                        {socials.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    className=" trans hover:text-orange-500"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <p className="hidden">Old Code</p>

            <div className="hidden">
                <div className="lg:text-9xl   bg-white  lg:w-2/3 text-3xl pt-10   lg:pt-36  w-full  font-medium text-black tracking-[-0.02em]	">
                    <a
                        href="mailto:jayadeep.bellamkonda@gmail.com"
                        className="group"
                    ></a>
                </div>

                <div className=" pt-36 flex justify-end  w-full lg:w-1/3">
                    <ul className="text-black text-4xl flex flex-col gap-5 items-center justify-center">
                        {socials.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    className=" trans hover:text-white"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <p className=" text-center py-3">2024 © Jaya</p>
        </div>
    );
};

export default Footer;

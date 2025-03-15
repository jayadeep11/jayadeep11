import logo from "./../assets/prop.jpg";

const About = () => {
    return (
        <div
            id="About"
            className="flex flex-col  justify-around items-center  border-b border-neutral-800 lg:min-h-[900px] px-6 transition-all duration-300"
        >
            <h2 className="text-center text-5xl lg:text-8xl font-bold  arch">
                Jayadeep{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                    Bellamkonda
                </span>
            </h2>

            <div className="flex flex-col lg:flex-row items-center  px-10 justify-center lg:justify-between gap-10 lg:gap-20 mb-10 w-full">
                <div className="lg:basis-1/3 p-4 lg:p-0">
                    <img
                        src={logo}
                        className="w-full h-auto rounded-full object-cover"
                        alt="Jayadeep Bellamkonda"
                    />
                </div>

                <div className="flex flex-col gap-8 lg:gap-16 text-lg group lg:text-6xl text-center lg:text-left  text-neutral-500 lg:basis-1/2">
                    <p className="arch">
                        I'm an IT{" "}
                        <span className="group-hover:text-orange-600">
                            Student
                        </span>{" "}
                        at Gayatri Vidya Parishad College of Engineering.
                    </p>
                    <div className="flex flex-col gap-6 lg:gap-10 text-base lg:text-xl text-gray-500">
                        <p>
                            My skills include proficiency in React.js and
                            Tailwind CSS, enabling me to create modern,
                            responsive web applications with ease.
                        </p>
                        <p>
                            I use Arch Linux as my primary operating system,
                            which allows me to customize my development
                            environment to my exact needs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

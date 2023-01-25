import TypeWriter from "typewriter-effect";

function Hero() {
    const autoType = <TypeWriter options={{
        strings: ["Hello, My name is Rahman Nurudin", "I love everything about tech","Nice to meet you!"],
        autoStart: true,
        loop: true,
        wrapperClassName: "text-[#6C00FF]",
        cursor: "_"
    }} />
   
    

    return (
        <div className="min-h-[550px] bg-teal-white flex justify-evenly items-center">
            <div className="w-1/2 pl-64 box-border">
            <h1 className="font-extrabold text-xl leading-3">
                {autoType}
            </h1>
            <h2 className="pt-3 pb-1 font-bold text-2xl">I'm a <span className="text-[#CF0A0A]">Front-End Developer</span></h2>
            <p>I love to make things!</p>
            </div>
            <div className="box-border pr-32 relative bottom-16">
                <img src="../assets/My_own-photo.webp" alt="myself" className="w-[530px] h-[485px] " />
            </div>
        </div>
    )
}

export default Hero;
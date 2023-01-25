const Contact = () => {
    return (
        <div className="pt-14 pl-32 container flex justify-center">
            <div>
            <div>
                <h1 className="text-5xl font-bold">Contact me</h1>
                <p className="pt-6 text-xl font-light w-[60%] text-gray-800">Want to colaborate with me? please contact me through each of these social media i have! </p>
            </div>
            <div className="pt-6">   
            <div className="flex">
                <a href="https://www.facebook.com/profile.php?id=100006013952007"><img src="https://img.icons8.com/doodle/512/facebook-new.png" alt="facebook" className="w-14"/></a>
                <p className="pl-3 pt-[14px]">Add me on Facebook</p>
            </div>
            <div className="flex">
                <a href="https://www.instagram.com/rahmannrdn/"><img src="https://img.icons8.com/color/512/instagram-new.png" alt="instagram" className="w-14"/></a>
                <p className="pl-3 pt-[14px]">Follow me on Instagram</p>
            </div>
            <div className="flex">
                <a href="https://www.linkedin.com/in/rahmannrdn/"><img src="https://img.icons8.com/fluency/512/linkedin.png" alt="linkedin" className="w-14"/></a>
                <p className="pl-3 pt-[14px]">Connect with me on linkedIn</p>
            </div>
            <div className="flex">
                <a href="https://github.com/TraFost"><img src="https://img.icons8.com/plasticine/512/github-squared.png" alt="github" className="w-14"/></a>
                <p className="pl-3 pt-[14px]">Follow me on github</p>
            </div>
            </div>
            </div>
            <div className="relative right-[140px] bottom-[10px]">
                <img src="https://img.icons8.com/color/512/asian-character.png" alt="person mockup" className="w-[850px] " />
            </div>
        </div>
    )
}

export default Contact;

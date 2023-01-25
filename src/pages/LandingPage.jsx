import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";


function LandingPage() {
    return (
        <>
         <Navbar />
        <main className="pt-10">
         <Hero />
         <section className="container pt-9">
            <h2 className="font-bold text-base text-[#282938] pb-6">My Skills</h2>
            <div className="flex justify-center gap-6 flex-wrap">
                <div className="bg-gray-200 w-56 min-h-[150px] shadow-xl basis-[300px]">
                    <div className="pt-8 pl-4 pb-3">
                        <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="html" className="object-center" />
                    </div>
                </div>
                <div className="bg-gray-200 w-56 min-h-[150px] shadow-xl basis-[300px]">
                    <div className="pt-8 pl-4 pb-3">
                        <img src="https://cdn-icons-png.flaticon.com/512/888/888897.png" alt="css" className="object-center" />
                    </div>
                </div>
                <div className="bg-gray-200 w-56 min-h-[150px] shadow-xl basis-[300px]">
                    <div className="pt-8 pl-3 pb-4 pr-4">
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="javascript" className="object-center" />
                    </div>
                </div>
                <div className="bg-gray-200 w-56 min-h-[150px] shadow-xl basis-[300px]">
                    <div className="pt-10 px-5 ">
                        <img src="https://img.icons8.com/color/512/tailwindcss.png" alt="tailwind-css" className="object-center" />
                    </div>
                </div>
                <div className="bg-gray-200 w-56 min-h-[150px] shadow-xl basis-[300px]">
                    <div className="pt-8 pl-4">
                        <img src="https://cdn-icons-png.flaticon.com/512/875/875209.png" alt="reactJS" className="object-center" />
                    </div>
                </div>
            </div>
         </section>
            <section className="container pt-24">
                <div className="flex items-center">
                    <div className="pb-2">
                        <img src="https://img.icons8.com/ios/512/man-raising-hand-icon.png" alt="people" className="w-[500px]" />    
                    </div>
                    <div className="w-1/2">
                        <h2 className="text-[#282938] font-bold text-xl">About Me</h2>
                        <p className="pt-3">Allo Teman-Teman! Perkenalkan namaku Rahman Nurudin, aku mahasiswa dari Universitas Muhammadiyah Tangerang. Aku mengambil bidang studi Teknik Informatika.</p>
                    </div>
                </div>
                </section>
         </main>
         <Footer />
         </>
    )
}   

export default LandingPage;
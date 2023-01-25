import Portofolio from "../components/Portofolio";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PortofolioPage() {
  const data = [
    {
      id: 1,
      title: "Nahiki",
      about:
        "Nahiki adalah sebuah website untuk membeli sepatu online yang berbasis di indonesia",
      img: (
        <img
          src="../assets/first_project.png"
          alt="first-project"
          className="w-[45%]"
        />
      ),
    },
    {
      id: 2,
      title: "PlantShop",
      about:
        "PlantShop adalah sebuah website untuk membeli tanaman online yang berbasis di indonesia",
      tech: "Teknologi yang digunakan: ",
      img: (
        <img
          src="../assets/second_project.png"
          alt="first-project"
          className="w-[45%]"
        />
      ),
    },
    {
      id: 3,
      title: "Secret-Message",
      about:
        "secret message adalah sebuah website untuk mengirim pesan rahasia berbasis link",
      tech: "Teknologi yang digunakan",
      img: (
        <img
          src="../assets/third_project.png"
          alt="first-project"
          className="w-[45%] h-full"
        />
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <Portofolio data={data} />
      <Footer />
    </>
  );
}

export default PortofolioPage;

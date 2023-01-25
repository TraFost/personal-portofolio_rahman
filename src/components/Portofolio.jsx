import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Portofolio({ data }) {
  const renderedData = data.map((item, index) => {
    return (
      <div key={item.id}>
        <div className="w-[800px] h-[350px] shadow-lg border-4 flex py-6 pl-4">
          {item.img}
          <div className="pl-4">
            <h2 className="pb-2 font-bold text-2xl">{item.title}</h2>
            <p className="pb-10  italic text-base">{item.about}</p>
            <p>Tech yang digunakan: </p>
            <div className="pt-4 flex gap-1">
              <div className="w-16 h-16 bg-gray-400 rounded-[50%] flex justify-center items-center">
                <img
                  src="https://img.icons8.com/external-smashingstocks-outline-color-smashing-stocks/512/external-HTML-seo-and-marketing-smashingstocks-outline-color-smashing-stocks.png"
                  alt="html"
                  className="w-[55%]"
                />
              </div>
              <div className="w-16 h-16 bg-gray-400 rounded-[50%] flex justify-center items-center">
                <img
                  src="https://img.icons8.com/color/512/tailwindcss.png"
                  alt="tailwind"
                  className="w-[55%]"
                />
              </div>
              <div className="w-16 h-16 bg-gray-400 rounded-[50%] flex justify-center items-center">
                <img
                  src="https://img.icons8.com/color/512/javascript.png"
                  alt="js"
                  className="w-[55%]"
                />
              </div>
            </div>
            <div className="pt-4">
              <Link to={`/portofolio/${item.id}`}>
                <p className="self-end mt-10 text-xs cursor-pointer hover:border-b inline hover:border-blue-400">
                  See Details
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container pt-16 pb-14">
      <h1 className="font-bold text-3xl text-center">My Portfolio</h1>
      <div className="flex flex-col justify-center items-center gap-6 pt-12">
        {renderedData}
      </div>
    </div>
  );
}

export default Portofolio;

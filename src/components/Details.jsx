const Details = ({ data, ID }) => {
  const renderedData = data
    .filter((item) => item.id === parseInt(ID))
    .map((datas) => {
      const { title, about, img } = datas;

      return (
        <div key={datas.id} className=" bg-green-200 ">
          <div className="flex gap-x-4">
            <div className="w-1/2">
              <img src={img} alt={title} />
            </div>
            <div className="pt-3">
              <h1>{title}</h1>
              <p>{about}</p>
              <p className={"pt-2"}>Tech yang digunakan: </p>
              <div className="pt-3 flex gap-1">
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
            </div>
          </div>
        </div>
      );
    });

  return <div className="pt-14">{renderedData}</div>;
};

export default Details;

import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Input from "./components/Input";
import DolarCard from "./components/DolarCard";
import "./App.css";
import ReactLoading from "react-loading";
function App() {
  const [info, setInfo] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const URL_BACK = "https://dolar-hoy-scrapping-back.onrender.com";
  const URL_LOCAL = "http://localhost:3001";
  const getInfo = async () => {
    try {
      const response = await axios(URL_BACK);
      const data = response.data;
      setInfo(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInfo();
    setCount(count + 1);
    console.log(count);
  }, []);

  // Verificar si se ha cargado la información
  if (loading) {
    return (
      <div className="flex flex-col min-h-screen content-center items-center">
        <Nav />
        <section className="">
          <ReactLoading type={"spin"} />
        </section>
        <footer className="shrink-0 mt-auto h-20 w-full bg-slate-700 text-center">
          <Footer />
        </footer>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex flex-col  items-center">
        {/* Mapear y mostrar los datos */}
        {Object.keys(info).map((key) => (
          <div
            className="flex flex-col shadow-xl font-manrope bg-gray-50 sm:w-11/12 md:w-11/12 lg:w-4/12 select-none drop-shadow-lg  border-opacity-10 p-4 m-3 mb-1 border border-double divide-gray-50 rounded-lg border-black"
            key={key}
          >
            <h2 className="text-center font-bold text-xl">{info[key].name}</h2>
            <div className="inline-flex  justify-center">
              {info[key].compra ? (
                <p className="p-2 text-center sm:text-sm mr-4 mt-2 rounded-none border border-gray-400">
                  Compra:{" "}
                  <strong className="text-lg font-semibold">
                    {info[key].compra}
                  </strong>
                </p>
              ) : (
                ""
              )}

              <p className="p-2 sm:text-sm text-center rounded-none border mt-2 border-gray-400">
                Venta:{" "}
                <strong className=" text-lg font-semibold lg:font-extrabold">
                  {info[key].venta}
                </strong>
              </p>
            </div>
          </div>
        ))}
      </div>
      <Input info={info} />
      <footer className="h-30 w-full p-1 bg-slate-700 justify-center content-center text-center shrink-0 mt-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default App;

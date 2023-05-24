import { useState, useEffect } from "react";
import Arrow from "../assets/arrow.png";
import ArrowDown from "../assets/arrowdown.png";
const Input = ({ info }) => {
  const { dolarBlue, dolarOficial } = info;

  const [valorAMultiplicar, setValorAMultiplicar] = useState(0);
  const [tipoDeDolar, setTipoDeDolar] = useState("dolarblue");
  const [tipoOperacion, setTipoOperacion] = useState("venta");
  const [cantidad, setCantidad] = useState(0);
  const [resultado, setResultado] = useState("Resultado");

  useEffect(() => {
    let nuevoValorAMultiplicar;

    if (tipoOperacion === "compra") {
      nuevoValorAMultiplicar =
        tipoDeDolar === "dolarblue"
          ? parseFloat(dolarBlue.compra.slice(1))
          : parseFloat(dolarOficial.compra.slice(1));
    } else if (tipoOperacion === "venta") {
      nuevoValorAMultiplicar =
        tipoDeDolar === "dolarblue"
          ? parseFloat(dolarBlue.venta.slice(1))
          : parseFloat(dolarOficial.venta.slice(1));
    }

    setValorAMultiplicar(nuevoValorAMultiplicar);
  }, [
    tipoDeDolar,
    tipoOperacion,
    dolarBlue.compra,
    dolarBlue.venta,
    dolarOficial.compra,
    dolarOficial.venta,
  ]);

  const handleTipoOperacionChange = (e) => {
    const value = e.target.value;
    setTipoOperacion(value);
  };

  const handleMoneda1Change = (e) => {
    const value = e.target.value;
    setTipoDeDolar(value);
  };

  const handleCantidadChange = (e) => {
    const value = parseFloat(e.target.value);

    setCantidad(value);
  };

  useEffect(() => {
    let aux = cantidad * valorAMultiplicar;
    if (isNaN(aux) || cantidad === "") {
      setResultado("Resultado");
    } else {
      setResultado(`$${aux}`);
    }
  }, [cantidad, valorAMultiplicar]);

  return (
    <div className="flex flex-col">
      <section className="flex flex-col justify-center content-center mt-5 text-center m-auto">
        <label htmlFor="tipoOperacion">Tipo de operación</label>
        <select
          className="w-20 text-center m-auto p-2 mt-5"
          name="tipoOperacion"
          onChange={handleTipoOperacionChange}
        >
          <option value="venta">Venta</option>
          <option value="compra">Compra</option>
        </select>
      </section>
      <section className="flex justify-center items-center sm:flex-col">
        <div className="grid auto-cols-auto max-w-full  mt-10 m-10 justify-items-center sm:h-10 ">
          <label htmlFor="cantidad" className="">
            Cantidad
          </label>
          <select
            onChange={handleMoneda1Change}
            name="moneda1"
            className="w-40 h-10 text-center"
            value={tipoDeDolar}
          >
            <option value="dolarblue">Dólar Blue</option>
            <option value="dolaroficial">Dólar Oficial</option>
          </select>
          <input
            type="number"
            placeholder="Cantidad"
            name="cantidad"
            className="w-40 text-center h-10"
            onChange={handleCantidadChange}
          />
        </div>
        <img
          src={Arrow}
          className="w-7 h-7 mt-6 sm:w-4 sm:h-4 sm:mt-10 sm:mb-0 sm:p-0 sm:hidden"
        ></img>

        <div className="grid auto-cols-auto max-w-full  mt-10 m-10 justify-items-center">
          <label htmlFor="convertido" className="col-span-1">
            Convertido a Pesos
          </label>

          <input
            placeholder={resultado}
            disabled
            className="w-40 h-10 text-center bg-white"
          />
        </div>
      </section>
    </div>
  );
};

export default Input;

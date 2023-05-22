import Swap from "../assets/swap.png";

const Input = ({ info }) => {
  return (
    <div className="flex flex-col">
      <section className="flex flex-col justify-center content-center mt-5 text-center m-auto">
        <label htmlFor="tipoOperacion">Tipo de operacion</label>
        <select
          className="w-20 text-center m-auto p-2 mt-5"
          name="tipoOperacion"
        >
          <option>Venta</option>
          <option>Compra</option>
        </select>
      </section>
      <section className="flex justify-center items-center">
        <div className="grid auto-cols-auto max-w-full  mt-10 m-10 justify-items-center ">
          <label htmlFor="cantidad" className="">
            Cantidad
          </label>

          <select name="moneda1" className="w-40 h-10 text-center">
            <option name="dolarblue">Dolar Blue</option>
            <option name="dolaroficial">Dolar Oficial</option>
            <option name="pesos">Peso Argentino</option>
          </select>
          <input
            type="number"
            placeholder="Cantidad"
            name="cantidad"
            className="w-40 text-center h-10"
          ></input>
        </div>
        <p className="grid ">
          Swap
          <img src={Swap} className="mt-2 w-8" />
        </p>
        <div className="grid auto-cols-auto max-w-full  mt-10 m-10 justify-items-center">
          <label htmlFor="convertido" className="col-span-1">
            Convertido a
          </label>

          <select name="moneda2" className="w-40 h-10 text-center">
            <option name="dolarblue">Dolar Blue</option>
            <option name="dolaroficial">Dolar Oficial</option>
            <option name="pesos">Peso Argentino</option>
          </select>
          <input
            placeholder="Resultado"
            disabled
            className="w-40 h-10 text-center bg-white"
          ></input>
        </div>
      </section>
    </div>
  );
};

export default Input;

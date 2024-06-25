const TipBoard = () => {
  return (
    <section className="grid grid-rows-[auto_1fr] gap-10 bg-cyan-500 pt-10 px-6 pb-6 rounded-xl">
      <div className="grid grid-rows-2 gap-7">
        <div className="flex flex-row items-start justify-between">
          <h2 className="text-base leading-tight text-white">
            Tip Amount
            <span className="block text-cyan-400">
              <abbr title="per" className="no-underline mr-1">
                /
              </abbr>
              person
            </span>
          </h2>
          <p className="text-3xl text-cyan-600">$0.00</p>
        </div>
        <div className="flex flex-row items-start justify-between">
          <h2 className="text-base leading-tight text-white">
            Total
            <span className="block text-cyan-400">
              <abbr title="per" className="no-underline mr-1">
                /
              </abbr>
              person
            </span>
          </h2>
          <p className="text-3xl text-cyan-600">$0.00</p>
        </div>
      </div>
      <button className="w-full text-center text-xl rounded bg-cyan-600 text-cyan-500 py-2">
        RESET
      </button>
    </section>
  );
};

export default TipBoard;

import { useRef } from 'react';

const tipStyle =
  'text-center text-2xl flex items-center justify-center shrink-0 grow basis-[9rem] rounded bg-cyan-500 text-white';

const TipForm = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.checked = true;
  };

  return (
    <form className="flex flex-col gap-y-8 font-bold">
      <div className="grid grid-rows-[auto_1fr] grid-cols-2 gap-y-2">
        <label className="text-cyan-300" htmlFor="">
          Bill
        </label>
        <input
          type="text"
          placeholder="0"
          className="col-span-2 bg-cyan-100 text-cyan-500 rounded px-4 py-2 text-2xl text-right"
        />
        <p className=" col-[2/3] row-[1/2] text-right"></p>
      </div>
      <div className="grid grid-rows-[auto_1fr] grid-cols-2 gap-y-4">
        <p className="text-cyan-300" htmlFor="">
          Select Tip %
        </p>
        <div className="col-span-2 w-full flex flex-row flex-wrap gap-x-4 gap-y-4">
          <label
            htmlFor="tip-1"
            className={`${tipStyle} has-[:checked]:bg-cyan-600 py-2 has-[:checked]:text-cyan-500`}>
            <input id="tip-1" type="radio" name="tip" className="hidden" />
            <span>5%</span>
          </label>
          <label
            htmlFor="tip-2"
            className={`${tipStyle} has-[:checked]:bg-cyan-600 py-2 has-[:checked]:text-cyan-500`}>
            <input id="tip-2" type="radio" name="tip" className="hidden" />
            <span>10%</span>
          </label>
          <label
            htmlFor="tip-3"
            className={`${tipStyle} has-[:checked]:bg-cyan-600 py-2 has-[:checked]:text-cyan-500`}>
            <input id="tip-3" type="radio" name="tip" className="hidden" />
            <span>15%</span>
          </label>
          <label
            htmlFor="tip-4"
            className={`${tipStyle} has-[:checked]:bg-cyan-600 py-2 has-[:checked]:text-cyan-500`}>
            <input id="tip-4" type="radio" name="tip" className="hidden" />
            <span>15%</span>
          </label>
          <label
            htmlFor="tip-5"
            className={`${tipStyle} has-[:checked]:bg-cyan-600 py-2 has-[:checked]:text-cyan-500`}>
            <input id="tip-5" type="radio" name="tip" className="hidden" />
            <span>15%</span>
          </label>
          <input
            ref={inputRef}
            id=""
            type="radio"
            name="tip"
            className="hidden"
          />
          <label
            onFocus={handleFocus}
            htmlFor="custom"
            className={
              'text-center text-2xl flex items-center justify-center shrink-0 grow basis-[9rem] rounded bg-cyan-200'
            }>
            <input
              id="custom"
              type="text"
              name="tip"
              placeholder="custom"
              className="w-full text-center text-cyan-500 placeholder:text-cyan-500 p-2 h-full bg-[transparent]"
            />
          </label>
        </div>
        <p className=" col-[2/3] row-[1/2] text-right">Test</p>
      </div>
      <div className="relative grid grid-rows-[auto_1fr] grid-cols-2 gap-y-2">
        <label className="text-cyan-300" htmlFor="">
          Number of People
        </label>
        <input
          type="text"
          placeholder="0"
          className="col-span-2 bg-cyan-100 text-cyan-500 rounded px-4 py-2 text-2xl text-right"
        />
        <p className=" col-[2/3] row-[1/2] text-right">test</p>
      </div>
    </form>
  );
};

export default TipForm;

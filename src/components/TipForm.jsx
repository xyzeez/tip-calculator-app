import { useRef, useReducer } from 'react';

const initialState = {
  bill: '',
  numOfPeople: '',
  tip: 5,
  customTipSelected: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'bill/set':
      return { ...state, bill: action.payload };
    case 'numOfPeople/set':
      return { ...state, numOfPeople: action.payload };
    case 'tip/set':
      return { ...state, tip: action.payload };
    case 'customTipSelected/set':
      return { ...state, customTipSelected: action.payload };
    default:
      return state;
  }
};

const TipForm = () => {
  const customTipInputRef = useRef(null);
  const defaultTipInputRef = useRef(null);
  const [{ bill, numOfPeople, tip, customTipSelected }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const billIsValid = !bill || bill > 0;
  const peopleIsValid = !numOfPeople || numOfPeople > 0;
  const tipIsValid = tip >= 0;

  const tipStyle =
    'text-center text-2xl flex items-center justify-center shrink-0 grow basis-[9rem] rounded bg-cyan-500 text-white';

  const handleFocus = () => {
    customTipInputRef.current.checked = true;
  };

  const handleTip = (e) => {
    if (!e.arget.value) {
      dispatch({ type: 'tip/set', payload: 5 });
      return;
    }

    e.target.id === 'tip-custom'
      ? dispatch({ type: 'customTipSelected/set', payload: true })
      : dispatch({ type: 'customTipSelected/set', payload: false });

    dispatch({ type: 'tip/set', payload: e.target.value });
  };

  const handleCustomTip = (e) => {
    if (!e.target.value) defaultTipInputRef.current.checked = true;
    handleTip(e);
  };

  return (
    <form className="flex flex-col gap-y-8 px-2 font-bold">
      <div className="grid grid-rows-[auto_1fr] grid-cols-[auto_1fr] gap-y-2">
        <label className="text-cyan-300" htmlFor="bill">
          Bill
        </label>
        <div
          className={`col-span-2 rounded overflow-hidden border ${
            billIsValid ? 'border-[transparent]' : 'border-red'
          } focus-within:border-cyan-600 relative after:absolute after:top-2 after:left-4 after:h-[calc(100%-1rem)] after:w-3 after:bg-[url("/icon-dollar.svg")] after:bg-no-repeat after:bg-center`}>
          <input
            id="bill"
            type="text"
            placeholder="0"
            className="w-full bg-cyan-100 text-cyan-500 placeholder:text-cyan-300 px-4 py-2 text-2xl text-right outline-none transition ease-in"
            value={bill}
            onChange={(e) =>
              dispatch({ type: 'bill/set', payload: e.target.value })
            }
          />
        </div>
        {!billIsValid && (
          <p className=" col-[2/3] row-[1/2] text-right text-red">
            Can&apos;t be zero
          </p>
        )}
      </div>
      <div className="grid grid-rows-[auto_1fr] grid-cols-[auto_1fr] gap-y-4">
        <p className="text-cyan-300" htmlFor="">
          Select tip %
        </p>
        <div className="col-span-2 w-full flex flex-row flex-wrap gap-x-4 gap-y-4">
          {[5, 10, 15, 20, 25].map((tipValue) => (
            <label
              key={tipValue}
              htmlFor={`tip-${tipValue}`}
              className={`${tipStyle} has-[:checked]:bg-cyan-600 py-2 has-[:checked]:text-cyan-500 cursor-pointer hover:[&:not(:has(:checked))]:bg-cyan-200 hover:[&:not(:has(:checked))]:text-cyan-500 transition ease-in`}>
              <input
                ref={tipValue === 5 ? defaultTipInputRef : null}
                id={`tip-${tipValue}`}
                type="radio"
                name="tip"
                value={tipValue}
                defaultChecked={tipValue === 5}
                className="hidden"
                onChange={(e) => handleTip(e)}
              />
              <span>{tipValue}%</span>
            </label>
          ))}
          <input
            ref={customTipInputRef}
            id=""
            type="radio"
            name="tip"
            className="hidden"
          />
          <label
            onFocus={handleFocus}
            htmlFor="tip-custom"
            className={`text-center text-2xl flex items-center justify-center shrink-0 grow basis-[9rem] rounded bg-cyan-200 border ${
              customTipSelected
                ? tipIsValid
                  ? 'border-cyan-600'
                  : 'border-red'
                : 'border-[transparent]'
            } focus-within:border-cyan-600`}>
            <input
              id="tip-custom"
              type="text"
              name="tip"
              placeholder="Custom"
              className="w-full text-right text-cyan-500 placeholder:text-cyan-500 placeholder:text-center p-2 h-full bg-[transparent] outline-none"
              onBlur={handleCustomTip}
            />
          </label>
        </div>
        {!tipIsValid && (
          <p className=" col-[2/3] row-[1/2] text-right text-red">
            Must be valid
          </p>
        )}
      </div>
      <div className="grid grid-rows-[auto_1fr] grid-cols-[auto_1fr] gap-y-2">
        <label className="text-cyan-300" htmlFor="people">
          Number of People
        </label>
        <div
          className={`col-span-2 rounded overflow-hidden border ${
            peopleIsValid ? 'border-[transparent]' : 'border-red'
          } focus-within:border-cyan-600 relative after:absolute after:top-2 after:left-4 after:h-[calc(100%-1rem)] after:w-3 after:bg-[url("/icon-person.svg")] after:bg-no-repeat after:bg-center`}>
          <input
            id="people"
            type="text"
            placeholder="0"
            className="w-full bg-cyan-100 text-cyan-500 placeholder:text-cyan-300 px-4 py-2 text-2xl text-right outline-none transition ease-in"
            value={numOfPeople}
            onChange={(e) =>
              dispatch({ type: 'numOfPeople/set', payload: e.target.value })
            }
          />
        </div>
        {!peopleIsValid && (
          <p className=" col-[2/3] row-[1/2] text-right text-red">
            Can&apos;t be zero
          </p>
        )}
      </div>
    </form>
  );
};

export default TipForm;

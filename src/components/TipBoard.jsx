import { useDispatch, useSelector } from 'react-redux';
import { resetForm } from '../store';

const TipBoard = () => {
  const dispatch = useDispatch();
  const { bill, numOfPeople, tip } = useSelector((store) => store.form);

  const numBill = Number(bill);
  const numPeople = Number(numOfPeople);
  const numTip = Number(tip);

  const isValid = !!(numBill > 0 && numPeople > 0 && numTip >= 0);

  const tipAmount = isValid
    ? ((numBill * (numTip / 100)) / numPeople).toFixed(2)
    : null;

  const total = isValid
    ? (numBill / numPeople + (numBill * (numTip / 100)) / numPeople).toFixed(2)
    : null;

  return (
    <section className="flex flex-col justify-between gap-10 bg-cyan-500 pt-10 lg:pt-14 px-6 lg:px-10 pb-6 lg:pb-10 rounded-xl">
      <div className="grid grid-rows-2 gap-7 lg:gap-11">
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
          <p className="text-3xl lg:text-4xl text-cyan-600">
            ${`${tipAmount || '0.00'}`}
          </p>
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
          <p className="text-3xl lg:text-4xl text-cyan-600">
            ${`${total || '0.00'}`}
          </p>
        </div>
      </div>
      <button
        disabled={!isValid}
        className="disabled:opacity-15 w-full text-center text-xl lg:text-2xl rounded bg-cyan-600 text-cyan-500 py-2 cursor-pointer hover:bg-cyan-200 transition ease-in"
        onClick={() => dispatch(resetForm())}>
        RESET
      </button>
    </section>
  );
};

export default TipBoard;

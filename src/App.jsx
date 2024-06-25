// Components
import Logo from './components/Logo';
import TipBoard from './components/TipBoard';
import TipForm from './components/TipForm';

const App = () => {
  return (
    <main className="bg-cyan-200 min-h-screen grid grid-rows-[auto_1fr] md:items-center justify-center lg:pt-20 md:py-6 lg:pb-10">
      <Logo />
      <h1 className="sr-only">Tip calculator</h1>
      <section className="flex flex-col justify-between w-full max-w-[51rem] *:w-full lg:flex-row lg:*:max-w-[48%] gap-8 lg:gap-6 font-mono font-bold p-6 rounded-t-3xl md:rounded-3xl bg-white">
        <TipForm />
        <TipBoard />
      </section>
    </main>
  );
};

export default App;

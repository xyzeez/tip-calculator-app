// Components
import Logo from './components/Logo';
import TipBoard from './components/TipBoard';
import TipForm from './components/TipForm';

const App = () => {
  return (
    <div className="bg-cyan-200 min-h-screen grid grid-rows-[auto_1fr]">
      <Logo />
      <main className="flex flex-col gap-8 font-mono font-bold p-6 rounded-t-3xl bg-white">
        <TipForm />
        <TipBoard />
      </main>
    </div>
  );
};

export default App;

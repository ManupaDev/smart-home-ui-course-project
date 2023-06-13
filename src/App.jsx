import Header from "./components/header";

function App() {
  return (
    <div className="RootLayout grid-cols_1_3_12 grid h-screen gap-x-4 bg-midnight-black px-8 py-8 font-sans">
      <div className="flex flex-col items-center gap-y-8 rounded-3xl border-black bg-glass_grey py-4"></div>

      <div className="grid-rows-2_3  grid gap-y-4 rounded-3xl border-white ">
        <div className="w-full rounded-3xl bg-glass_grey p-6"></div>
        <div className="w-full rounded-3xl bg-glass_grey p-6"></div>
      </div>

      <div className="overflow-y-scroll rounded-3xl border-black  bg-white p-8">
        <Header />
      </div>
    </div>
  );
}

export default App;

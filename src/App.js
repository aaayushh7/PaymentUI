import Table from './components/Table';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <header className="w-full bg-[#042C71] p-6">
        <h1 className="text-white text-2xl font-bold">Baton</h1>
      </header>
      <main className="flex-grow flex items-center justify-center bg-[#51A2BF]">
        <div className="w-full max-w-6xl">
          <Table />
        </div>
      </main>
    </div>
  );
}

export default App;

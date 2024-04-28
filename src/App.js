import Random from "./Components/Random";
import Tag from "./Components/Tag";

function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
      <h1 className="absolute bg-white rounded-lg  w-11/12 text-center mt-[40px] px-10 py-2 text-3xl font-bold ">
        Random Gifs </h1>
      <div className="flex flex-col"> 
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

export default App;

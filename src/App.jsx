import GradientButton from "./components/nurui/gradient-button";
import SplashCursor from "./components/nurui/splash-cursor";

function App() {
  return (
    <>
      <section className="bg-[url('/assets/game.jpg')] backdrop-blur-2xl bg-cover bg-center w-full h-screen">
        <div className="w-ful max-w-[1500px] mx-auto px-5 md:px-10 lg:px-13 h-screen backdrop-blur-[1px] flex justify-between flex-wrap items-center">
          <div>
            <img src="assets/img.png" alt="alt" />
          </div>
          <div className="w-full md:w-md bg-white/20 border border-white  h-auto rounded-2xl p-4 justify-items-center space-y-10">
            {" "}
            <div className="w-full flex justify-center items-center">
              <GradientButton />
            </div>
            <div className="grid gap-5 mt-30 w-full">
              <button className="w-full hover:scale-105 duration-500">
                <a
                  className="p-4 w-full flex rounded-2xl justify-center items-center bg-pink-800 text-white text-2xl"
                  href="https://super-mario-orpin.vercel.app/"
                >
                  Ghost Hunt👻⚔️
                </a>
              </button>

              <button className="w-full hover:scale-105 duration-500">
                <a
                  className="p-4 w-full flex rounded-2xl justify-center items-center bg-pink-800 text-white text-2xl"
                  href="https://odc-formation-jeux-interactif.vercel.app/"
                >
                  Robot Battle⚙️🤖
                </a>
              </button>
              <button className="w-full hover:scale-105 duration-500">
                <a
                  className="p-4 w-full flex rounded-2xl justify-center items-center bg-pink-800 text-white text-2xl"
                  href="https://fuse-lac.vercel.app"
                >
                  Galactic Rocket🚀

                </a>
              </button>
            </div>
          </div>
        </div>
        <SplashCursor />
      </section>
    </>
  );
}

export default App;

import { Navbar } from "@/components";
import Main from "@/components/Main";

export default function Home() {
  return (
    <main className="flex w-full h-screen overflow-hidden bg-slate-200">
      <div className="w-full h-screen">
        <div className="sticky">
          <Navbar />
        </div>
        <div>
          <Main />
        </div>
      </div>
    </main>
  );
}

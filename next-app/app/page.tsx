'use client';
import { Roboto} from "next/font/google";

const roboto = Roboto({subsets: ['latin'], weight: "500"})

const Home = () => {
  return (
   <section>
    <h1>Google Fonts</h1>
    <h2 className={roboto.className}>Helloo its roboto font</h2>

   </section>
  )
};

export default Home;

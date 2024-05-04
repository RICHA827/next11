'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  let navigate = (page)=> {
    router.push(page);
  };

  return (
    <section>
      <h1>useRouter</h1>
      <Link href="/about">About page</Link> <br />
      <button 
      onClick = {() => navigate("about")}>Go to about page</button>
      <br />
      <button onClick={() => navigate("portfolio")}> Go to portfolio </button>
      </section>
  
  )
};

export default Home;

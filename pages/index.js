import Header from "@/components/Header";
import Featured from "@/components/Featured";

export default function HomePage(){
  return (
    <div>
      <Header />
      <Featured />
    </div>
  );
}

export function getServerSideProps(){
  const featuredProductId = ''
}
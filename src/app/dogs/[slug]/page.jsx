import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const res = await fetch(`https://nice-dogs.vercel.app/api/dogs?slug=${slug}`);
  const data = await res.json();
  return {
    title: data.name,
    description: `Loves ${data.favouriteColor}`,
  };
}

export async function generateStaticParams() {
  const res = await fetch(`https://nice-dogs.vercel.app/api/dogs`);
  const pages = await res.json();
  const paths = pages.map((page) => {
    return { slug: page.slug };
  });

  return paths;
}

async function dog({ params }) {
  const { slug } = params;
  const res = await fetch(`https://nice-dogs.vercel.app/api/dogs?slug=${slug}`);
  if (res.status != 200) return notFound();
  const data = await res.json();
  const { name, favouriteColor, age, image } = data;
  console.log(data);
  console.log(params);
  return (
    <div>
      <main>
        <h1>{name}</h1>
        {/* {favouriteColor && <h2>{favouriteColor}</h2>} */}
        <h2>{favouriteColor ? favouriteColor : "Hotpink"}</h2>
        <h3>{age}</h3>
        <Image
          className="w-auto h-auto"
          src={image.url}
          alt="Henry the dog"
          width={3024}
          height={4032}
          priority={true}
          sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         400px"
        />
      </main>
    </div>
  );
}

export default dog;

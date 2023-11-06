import Image from "next/image";

export async function generateMetadata() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  const data = await res.json();
  return {
    title: data.name,
    description: `Loves ${data.favouriteColor}`,
  };
}

async function page() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  const data = await res.json();
  const { name, favouriteColor, age, image } = data;
  console.log(data);
  return (
    <div>
      <main>
        <h1>{name}</h1>
        <h2>{favouriteColor}</h2>
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

export default page;

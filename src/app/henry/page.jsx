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
        <img className="w-96" src={image.url} alt="" />
      </main>
    </div>
  );
}

export default page;

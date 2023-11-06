export const dynamic = "force-dynamic";
import Number from "@/components/Number";
export const metadata = {
  title: "Home",
  description: "A descriptioon",
};

const res = await fetch("https://dog.ceo/api/breeds/image/random");
const data = await res.json();
const { message, status } = data;

export default function Home() {
  return (
    <div>
      <img src={message} alt="" />
      <Number></Number>
    </div>
  );
}

import Link from "next/Link";
export default function MealsPage({ params }) {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>MealsPage</h1>
      <p>{params.slug}</p>
    </main>
  );
}

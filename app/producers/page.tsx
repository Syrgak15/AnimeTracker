import ProducersPageClient from "@/app/producers/ProducersPageClient";

async function getProducersList() {
    try {
      const res = await fetch("https://api.jikan.moe/v4/producers");
      if(!res.ok) throw new Error("Failed to fetch producers list");

      const data = await res.json();
      return data.data;

    }catch(e: unknown) {
      console.log(e);
      return [];
    }
}

export default async function Page() {

  const producers = await getProducersList();

  return (
    <ProducersPageClient producers={producers}/>
  );
}
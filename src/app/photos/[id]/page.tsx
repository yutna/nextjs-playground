import Photo from "@/components/Photo";

export const dynamicParams = false;
export function generateStaticParams() {
  let slugs = ["1", "2", "3", "4", "5", "6"];
  return slugs.map((slug) => ({ id: slug }));
}

export default function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return <Photo id={id} />;
}

export default function TextColumns({
  contentSelector,
}: {
  contentSelector: string;
}) {
  const paragraphs = ["par_1", "par_2", "par_3", "par_4", "par_5", "par_6"];

  const column1 = paragraphs.slice(0, paragraphs.length / 2);
  const column2 = paragraphs.slice(paragraphs.length / 2, paragraphs.length);

  return (
    <section className="textColumns flex justify-center">
      <div className="textColumns-container w-11/12 flex">
        <div className="textColumns-left w-1/2"></div>
        <div className="textColumns-right w-1/2 "></div>
      </div>
    </section>
  );
}

import { OurBrandsProps } from "../types";
export default function OurBrands({ header, brands }: OurBrandsProps) {
  return (
    <section className="bg-secondary-green py-24 flex justify-center">
      <div className="w-3/4 max-w-screen-2xl flex flex-col items-center">
        <h3 className="text-3xl text-center">{header}</h3>
      </div>
    </section>
  );
}

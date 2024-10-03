const SectionTitle = ({
  title,
  paragraph,
}: {
  title: string;
  paragraph?: string;
}) => {
  return (
    <>
      <div className="w-full">
        <h2 className="mb-2 text-xl lg:text-3xl font-bold !leading-tight text-white sm:text-4xl md:text-[45px]">
          {title}
        </h2>
        <p className="text-base text-white ">{paragraph}</p>
      </div>
    </>
  );
};

export default SectionTitle;

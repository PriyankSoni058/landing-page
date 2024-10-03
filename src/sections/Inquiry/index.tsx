import Link from "next/link";

const Inquiry = () => {
  return (
    <>
      <section
        id="inquiry"
        className="bg-gray-dark relative z-10 overflow-hidden"
      >
        <div className="container lg:px-32 md:px-20 px-10">
          <div className="bg-purple-light rounded-lg p-12 text-center">
            <p className="text-3xl">
              Aliquam quis dui nec justo elementum posuere.
            </p>
            <p>
              Vestibulum efficitur, magna eget egestas fringilla, dui nibh
              cursus velit, id tempus lorem est ut dui.
            </p>

            <div className="my-4 flex items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="#"
                className="flex items-center justify-center gap-2 rounded-full bg-primary px-10 py-2 text-base text-white duration-300 ease-in-out hover:bg-primary/80"
              >
                Inquire Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Inquiry;

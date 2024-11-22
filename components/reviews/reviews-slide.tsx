interface ReviewSlideProps {
  name: string;
  description: string;
}

const ReviewsSlide = ({ name, description }: ReviewSlideProps) => {
  return (
    <div
      className={
        "relative flex flex-col justify-center items-center py-[3.5rem] mt-20 bg-slate-50 text-secondary border-l-[16px] border-sky-800 " +
        "min-h-[364px]"
      }
    >
      <p
        className={
          "relative max-w-[473px] text-xl text-center font-light before:content-['“'] after:content-['”'] before:text-sky-800 after:text-sky-800 before:text-5xl after:text-5xl before:leading-none after:leading-none before:absolute before:-top-4 before:-left-6 after:absolute after:-bottom-4 after:-right-6"
        }
      >
        {description}
      </p>
      <div
        className={
          "absolute bottom-4 right-20 text-xl font-bold text-secondary"
        }
      >
        {name}
      </div>
    </div>
  );
};

export default ReviewsSlide;

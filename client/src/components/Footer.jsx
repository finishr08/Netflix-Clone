import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="h-2 w-full bg-[#232323]" aria-hidden="true" />
      <footer className="py-6 md:px-8 md:py-0 bg-black text-white border-t border-gray-800 flex justify-center items-center h-24">
        <div className="flex flex-col items-center gap-4 md:h-24 md:flex-row">
          <p className="text-balance text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <Link
              to={"https://mustafa08.vercel.app/"}
              target="_blank"
              className="font-medium underline underline-offset-4"
            >
              Mustafa
            </Link>
            . Follow me on{" "}
            <Link
              to={"https://linkedin.com/in/mustafaahmed08/"}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Likedin
            </Link>
            .
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

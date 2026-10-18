import Shape from "../assets/Group 8 (4).svg";

export default function ContactSection() {
  return (
    <section className="relative bg-Light-Coral py-16 overflow-hidden">
      <img
        src={Shape}
        alt=""
        className="absolute bottom-0 left-0 w-50"
      />

      <div className="relative z-10 max-w-280 mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-6">
        <h2 className="text-sacramento-state-green text-4xl md:text-5xl font-bold">
          Ready to get started?
        </h2>

        <a
          href="/contact"
          className="border-2 border-sacramento-state-green text-sacramento-state-green rounded-full px-8 py-2 font-semibold hover:bg-sacramento-state-green hover:text-white transition-colors"
        >
          contact us
        </a>
      </div>
    </section>
  );
}
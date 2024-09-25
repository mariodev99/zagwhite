export default function PrimaryButton({ text }) {
  return (
    <button className=" font-semibold px-3 md:px-6 py-2 md:py-3 bg-gradient-to-r from-[#F63C11] via-[#FF4E25] to-[#FE491F] rounded-full text-lg md:text-2xl">
      {text}
    </button>
  );
}

const Variant = () => {
  return (
    <div className="variant relative w-36 h-24 cursor-pointer">
      <img
        src="./iwatch.svg"
        alt=""
        className="
          preview relative z-[2] block w-[125px] h-auto
          mx-auto my-0 -translate-y-[22%]
          [filter:drop-shadow(0_8px_16px_rgba(0,0,0,0.12))]
        "
      />
      <span
        className="
          pill navy absolute left-0 right-0 bottom-0
          h-[60px] rounded-[10px] z-[1]
        "
      />
    </div>
  );
};

export default Variant;

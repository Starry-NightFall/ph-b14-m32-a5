import BannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="hero bg-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={BannerImg} alt="Banner" className="w-full max-w-xs sm:max-w-sm rounded-lg" />
        <div className="w-full lg:w-3/5 text-center lg:text-left text-black">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Build Your Ideal
            <br />
            <span className="brand-gradient-text">Development Stack</span>
          </h1>
          <p className="py-6">Explore frontend, backend, databases, and tooling options. Compare them side by side and put together the stack that fits your next project. </p>
          <button className="btn brand-gradient text-white mr-2">Explore Technologies</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

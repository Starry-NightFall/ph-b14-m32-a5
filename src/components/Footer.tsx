import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-white text-black container mx-auto p-10">
        <aside>
          <img src={Logo} alt="Logo" className="" />
          <p>Curated tools, technologies, and resources for developers building modern software.</p>
          <div className="flex gap-4 mt-4 font-semibold">
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>

      <div className="flex justify-between text-black/40 container mx-auto p-6">
        <p className="">&copy; {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

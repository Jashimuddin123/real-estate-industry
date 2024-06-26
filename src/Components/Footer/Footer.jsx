

const Footer = () => {
    return (
        <div>
<footer className="footer p-10 bg-blue-700 mt-12">
  <nav className="text-white">
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Garments</a>
    <a className="link link-hover">Shoos</a>
    <a className="link link-hover">Jaket pakking</a>
    <a className="link link-hover">Vehicles</a>
  </nav> 
  <nav className="text-white">
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav className="text-white">
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav> 
  <form className="text-white">
    <h6 className="footer-title text-xl">YoungOne</h6> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text text-white">Enter your email address</span>
      </label> 
      <div className="join">
        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>

    </fieldset>
  </form>
</footer>
        </div>
    );
};

export default Footer;
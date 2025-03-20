function Footer() {
  return (
    <footer className="bg-light py-4" id="login">
      <div className="container">
        <form>
          <label for="email" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter your email"
            required
          />
          <label for="password" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Enter your password"
            required
          /><br />
           <button type="submit" class="btn btn-primary w-100">Login</button>
        </form>
        <p className="text-center">&copy; 10k coders </p>
      </div>
    </footer>
  );
}
export default Footer;

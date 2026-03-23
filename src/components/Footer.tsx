const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="section-container text-center">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Portfolio. Built with React & Tailwind CSS.
      </p>
    </div>
  </footer>
);

export default Footer;

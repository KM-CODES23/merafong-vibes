import { Music2, Twitter, Facebook, Instagram, Youtube, Github } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Product: ["Features", "Pricing", "Download", "Updates", "Beta"],
    Company: ["About Us", "Careers", "Press", "Blog", "Contact"],
    Resources: ["Help Center", "Community", "Guides", "API", "Status"],
    Legal: ["Privacy", "Terms", "Cookies", "Licenses", "Settings"],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "Youtube" },
    { icon: Github, href: "#", label: "Github" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-primary/20">
                <Music2 className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold">Merafong Streams</span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Experience unlimited music streaming with millions of songs at your fingertips.
              Stream. Discover. Vibe.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-primary/20 transition-smooth"
                >
                  <social.icon className="h-5 w-5 text-muted-foreground hover:text-primary transition-smooth" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 Merafong Streams. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

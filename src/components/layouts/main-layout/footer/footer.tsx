import MaxWidthContainer from "@/components/containers/max-width-container";
import { Button } from "@/components/ui/button";

const quickLinks = [
  "Home",
  "About Us",
  "Services",
  "Portfolio",
  "Blog",
  "Contact",
];
const services = [
  "Custom Furniture",
  "Built-ins",
  "Commercial Projects",
  "Restoration",
  "Consultation",
];
const socialMedia = ["SM", "SM", "SM", "SM"];

const Footer = () => {
  return (
    <footer>
      <MaxWidthContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Logo and Description */}
        <div>
          <div className="bg-[#374151] px-12 py-6 rounded-sm mb-6 inline-block">
            <span className="text-lg font-medium tracking-wide text-white">
              LOGO
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            Premium custom woodworking for discerning clients. Crafting
            masterpieces since 2008.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-medium mb-6">Quick Links</h3>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link}>
                <Button
                  variant="link"
                  className="text-[#9ca3af] hover:text-white p-0 h-auto font-normal transition-colors duration-300"
                >
                  {link}
                </Button>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-white font-medium mb-6">Our Services</h3>
          <ul className="space-y-3">
            {services.map((service) => (
              <li key={service}>
                <Button
                  variant="link"
                  className="text-[#9ca3af] hover:text-white p-0 h-auto font-normal transition-colors duration-300"
                >
                  {service}
                </Button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-white font-medium mb-6">Contact Us</h3>
          <div className="space-y-3 text-sm">
            <p>123 Workshop Lane</p>
            <p>Craftsville, WD 12345</p>
            <p className="pt-2">Phone: (555) 123-4567</p>
            <p className="pt-2">
              Email:
              <br />
              info@masterwoodworking.com
            </p>

            {/* Social Media */}
            <div className="flex gap-3 pt-4">
              {socialMedia.map((sm, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-[#374151] border-[#374151] text-white hover:bg-white hover:text-[#111827] transition-all duration-300"
                >
                  {sm}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </MaxWidthContainer>
    </footer>
  );
};

export default Footer;

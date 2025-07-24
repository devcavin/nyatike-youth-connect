import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { useTheme } from '../Context/UseTheme'

const Footer = () => {
  const { isDarkMode } = useTheme()

  const footerLinks = {
    company: [
      { name: 'About', href: '/about' },
      { name: 'Terms of Use', href: '/' },
      { name: 'Privacy Policy', href: '/' },
      { name: 'Contact Us', href: '/' },
    ],
    contact: [{ name: 'WhatsApp', href: '/' }],
  }

  // Optional: toggle data-theme attribute on root for CSS variables to switch
  // or rely on your theme context elsewhere

  return (
    <footer
      className={`transition-colors duration-300 ease-in-out
        ${isDarkMode ? 'bg-[var(--color-background)] text-[var(--color-text-primary)]' : 'bg-[var(--color-background)] text-[var(--color-text-primary)]'}`}
      // Since variables handle colors for both themes, this is the same
    >
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <p className="mb-6">
              Follow us on our social media platforms to stay updated with our latest news, events, and initiatives. Join our community and be part of the change!
            </p>
            <div className="flex gap-4">
              <a
                href="/"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-green-600"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a
                href="/"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="/"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="/"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="text-lg font-medium mb-4capitalize">
                    {category}
                  </h3>
                  <ul className="space-y-3">
                    {links.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="transition-colors"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="mt-12 pt-8 transition-colors"
          style={{
            borderColor: 'rgb(var(--color-border))',
          }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              Copyright &copy; {new Date().getFullYear()} Nyatike Youth Connect
            </p>
            <p className="text-sm">
              Developed By{' '}
              <a
                href="https://cavinlarry.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="text-sm"
              >
                Cavin
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import { useTheme } from '../Context/UseTheme'

const ComponentShowcase = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <section className="section-container bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="mb-4">Component Showcase</h1>
          <p className="text-lg text-text-secondary">
            Demonstrating the new global theming system with blue, green, and white color palette
          </p>
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="mt-6 px-6 py-3 bg-surface hover:bg-surface-hover border border-border hover:border-border-hover rounded-lg text-text-primary transition-all duration-300"
          >
            Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
          </button>
        </div>

        {/* Typography Showcase */}
        <div className="mb-12 p-6 bg-surface rounded-lg border border-border">
          <h2 className="mb-6">Typography</h2>
          
          <h1>Heading 1 - Main page titles</h1>
          <h2>Heading 2 - Section headers</h2>
          <h3>Heading 3 - Subsection headers</h3>
          
          <p className="mt-6">
            This is a regular paragraph with primary text color. It demonstrates good readability 
            and proper contrast ratios for accessibility. The text automatically adapts to light 
            and dark themes.
          </p>
          
          <p className="text-text-secondary">
            This is secondary text, perfect for descriptions, captions, or less important information.
          </p>
          
          <p className="text-text-muted">
            This is muted text for placeholders, labels, or subtle information.
          </p>
        </div>

        {/* Button Showcase */}
        <div className="mb-12 p-6 bg-surface rounded-lg border border-border">
          <h2 className="mb-6">Buttons</h2>
          
          <div className="flex flex-wrap gap-4 mb-6">
            {/* Primary Buttons */}
            <button className="btn-primary">
              Primary Button (Blue)
            </button>
            
            <button className="btn-secondary">
              Secondary Button (Green)
            </button>
            
            {/* Tailwind Classes */}
            <button className="px-6 py-3 bg-button-primary hover:bg-button-primary-hover text-button-text rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              Custom Primary
            </button>
            
            <button className="px-6 py-3 bg-button-secondary hover:bg-button-secondary-hover text-button-text rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20">
              Custom Secondary
            </button>
          </div>
          
          {/* Outline Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-surface hover:bg-surface-hover border border-primary text-primary hover:bg-primary hover:text-button-text rounded-lg transition-all duration-300">
              Outline Primary
            </button>
            
            <button className="px-6 py-3 bg-surface hover:bg-surface-hover border border-secondary text-secondary hover:bg-secondary hover:text-button-text rounded-lg transition-all duration-300">
              Outline Secondary
            </button>
          </div>
        </div>

        {/* Color Palette */}
        <div className="mb-12 p-6 bg-surface rounded-lg border border-border">
          <h2 className="mb-6">Color Palette</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Primary Colors */}
            <div className="text-center">
              <div className="w-full h-20 bg-primary-blue rounded-lg mb-2"></div>
              <p className="text-sm font-medium">Primary Blue</p>
            </div>
            
            <div className="text-center">
              <div className="w-full h-20 bg-primary-green rounded-lg mb-2"></div>
              <p className="text-sm font-medium">Primary Green</p>
            </div>
            
            <div className="text-center">
              <div className="w-full h-20 bg-white border border-border rounded-lg mb-2"></div>
              <p className="text-sm font-medium">White</p>
            </div>
            
            <div className="text-center">
              <div className="w-full h-20 bg-surface border border-border rounded-lg mb-2"></div>
              <p className="text-sm font-medium">Surface</p>
            </div>
            
            {/* Utility Colors */}
            <div className="text-center">
              <div className="w-full h-20 bg-success rounded-lg mb-2"></div>
              <p className="text-sm font-medium">Success</p>
            </div>
            
            <div className="text-center">
              <div className="w-full h-20 bg-warning rounded-lg mb-2"></div>
              <p className="text-sm font-medium">Warning</p>
            </div>
            
            <div className="text-center">
              <div className="w-full h-20 bg-error rounded-lg mb-2"></div>
              <p className="text-sm font-medium">Error</p>
            </div>
            
            <div className="text-center">
              <div className="w-full h-20 bg-info rounded-lg mb-2"></div>
              <p className="text-sm font-medium">Info</p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="mb-12 p-6 bg-surface rounded-lg border border-border">
          <h2 className="mb-6">Cards & Surfaces</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-surface border border-border rounded-lg hover:border-border-hover transition-colors duration-300">
              <h3 className="mb-2">Basic Card</h3>
              <p className="text-text-secondary">
                This card uses surface background and border colors that automatically adapt to the theme.
              </p>
            </div>
            
            <div className="p-6 bg-primary-blue text-button-text rounded-lg">
              <h3 className="mb-2 text-white">Primary Card</h3>
              <p className="text-blue-100">
                This card uses primary blue background with contrasting white text.
              </p>
            </div>
          </div>
        </div>

        {/* Forms */}
        <div className="p-6 bg-surface rounded-lg border border-border">
          <h2 className="mb-6">Form Elements</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Input Field
              </label>
              <input
                type="text"
                placeholder="Enter your text here"
                className="w-full px-4 py-3 bg-background border border-border hover:border-border-hover focus:border-primary rounded-lg text-text-primary placeholder-text-muted transition-colors duration-300 outline-none"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Textarea
              </label>
              <textarea
                placeholder="Enter your message"
                rows={4}
                className="w-full px-4 py-3 bg-background border border-border hover:border-border-hover focus:border-primary rounded-lg text-text-primary placeholder-text-muted transition-colors duration-300 outline-none resize-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComponentShowcase

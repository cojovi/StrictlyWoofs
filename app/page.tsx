import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Image
                src="/StrictlyWoof_long_logo_Blue_SVG.svg"
                alt="StrictlyWoofs Logo"
                width={200}
                height={50}
                className="h-8 w-auto"
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/feed" className="text-gray-700 hover:text-blue-600 transition-colors">
                Feed
              </Link>
              <Link href="/live" className="text-gray-700 hover:text-blue-600 transition-colors">
                Live
              </Link>
              <Link href="/messages" className="text-gray-700 hover:text-blue-600 transition-colors">
                Messages
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-700 hover:text-blue-600 transition-colors">
                Login
              </Link>
              <Link 
                href="/signup" 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Welcome to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              StrictlyWoofs
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The internet's premier destination for exclusive dog content. 
            Join thousands of satisfied paw-rents who've discovered the finest 
            collection of canine entertainment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/signup" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Your Free Trial
            </Link>
            <Link 
              href="/feed" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Browse Content
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Creators */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Featured Creators
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Bella Swims', username: 'bellaswims', image: '/bb85ecc0-632b-45a1-97af-987fa2d64f28.jpeg' },
              { name: 'Bruno Milk', username: 'brunomilk', image: '/7f940b83-ea3f-46da-8761-d26dbc5d778c.jpeg' },
              { name: 'Chloe Swims', username: 'chloeswims', image: '/8292b600-75fe-4c57-a858-4c940e5d7b29.jpeg' },
              { name: 'Diesel Daddy', username: 'dieseldaddy', image: '/c90855c0-341f-4b4c-be8e-336ad29d5a69.jpeg' },
              { name: 'Luna Luxe', username: 'lunaluxe', image: '/68b0317b-a179-4d0d-be79-5acd1397c2c8.jpeg' },
              { name: 'Max Muscles', username: 'maxmuscles', image: '/unnamed.png' },
            ].map((creator) => (
              <Link 
                key={creator.username}
                href={`/creator/${creator.username}`}
                className="group block"
              >
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-200 mb-3">
                  <Image
                    src={creator.image}
                    alt={creator.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {creator.name}
                </h3>
                <p className="text-sm text-gray-500">@{creator.username}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Choose Your Plan
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
              <p className="text-4xl font-bold text-blue-600 mb-6">$9.99<span className="text-lg text-gray-500">/month</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Access to basic content
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Standard quality videos
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Community access
                </li>
              </ul>
              <Link 
                href="/signup?plan=basic"
                className="w-full bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors block text-center"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium</h3>
              <p className="text-4xl font-bold text-blue-600 mb-6">$19.99<span className="text-lg text-gray-500">/month</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  All Basic features
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  HD quality videos
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Exclusive content
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Direct messaging
                </li>
              </ul>
              <Link 
                href="/signup?plan=premium"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors block text-center"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">VIP</h3>
              <p className="text-4xl font-bold text-blue-600 mb-6">$49.99<span className="text-lg text-gray-500">/month</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  All Premium features
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  4K ultra HD content
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Personal shoutouts
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Priority support
                </li>
              </ul>
              <Link 
                href="/signup?plan=vip"
                className="w-full bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors block text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/StrictlyWoof_lwhite_SVG.svg"
                alt="StrictlyWoofs Logo"
                width={150}
                height={40}
                className="h-8 w-auto mb-4"
              />
              <p className="text-gray-400">
                The internet's premier destination for exclusive dog content.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Content</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/feed" className="hover:text-white transition-colors">Feed</Link></li>
                <li><Link href="/live" className="hover:text-white transition-colors">Live Streams</Link></li>
                <li><Link href="/messages" className="hover:text-white transition-colors">Messages</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 StrictlyWoofs. All rights reserved. This is a parody website for entertainment purposes only.</p>
          </div>
        </div>
      </footer>
    </main>
  )
} 
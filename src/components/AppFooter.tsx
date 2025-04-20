import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AppFooter = () => {
  return (
    <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-2xl border border-blue-800/30">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-500">
            <Image
              src="https://res.cloudinary.com/dp2i02kmy/image/upload/v1745068675/108867628_wmoniz.png"
              alt="Developer"
              width={96}
              height={96}
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2">About the Developer</h3>
            <p className="text-gray-300 mb-4">
              Flutter developer with a passion for creating beautiful,
              high-performance mobile applications. Experienced in building
              complex UI designs and integrating with various APIs and services.
            </p>

            <div className="flex gap-4">
              <Link
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                GitHub
              </Link>
              <Link
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                LinkedIn
              </Link>
              <Link
                href="/"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AppFooter

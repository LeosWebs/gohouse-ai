import Image from "next/image"
import { Clock, Home, Settings, Shield, Target, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  const features = [
    {
      icon: Home,
      title: "Time saving",
      description: "Save time, close deals faster, and boost revenue with GoHouse.ai"
    },
    {
      icon: User,
      title: "Time saving",
      description: "Save time, close deals faster, and boost revenue with GoHouse.ai"
    },
    {
      icon: Settings,
      title: "Time saving",
      description: "Save time, close deals faster, and boost revenue with GoHouse.ai"
    },
    {
      icon: Shield,
      title: "Time saving",
      description: "Save time, close deals faster, and boost revenue with GoHouse.ai"
    },
    {
      icon: Target,
      title: "Time saving",
      description: "Save time, close deals faster, and boost revenue with GoHouse.ai"
    },
    {
      icon: Clock,
      title: "Time saving",
      description: "Save time, close deals faster, and boost revenue with GoHouse.ai"
    }
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-0">
            <Link href="/" className="cursor-pointer">
              <span className="text-xl font-bold text-red-600">GoHouse.ai</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="/bussiness" className="text-gray-600 hover:text-gray-900">
              Bussiness                        </a>
            <a href="/agents" className="text-gray-600 hover:text-gray-900">
              Agents                        </a>
            <a href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <section className="relative h-[600px] overflow-hidden flex flex-col justify-end">
          <Image
            src="/public/Group99.png"
            alt=""
            layout="fill"
            className="object-cover w-full h-full"
            priority
          />
          <div className="relative container mx-auto px-4 pb-16 flex flex-col items-center z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 max-w-4xl text-center drop-shadow-md">
              Accelerate your Agencies Growth
            </h1>
            <Link href="https://app.gohouse.ai/auth/register">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-full"
              >
                Try Demo!
              </Button>
            </Link>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">

            <h2 className="text-3xl font-bold mb-4">How It works</h2>
            <p className="text-gray-600">
              Stop wasting time on inefficient searches and outdated MLS tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-lg border">
                <div className="p-2 rounded-full bg-red-100">
                  <feature.icon className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="https://app.gohouse.ai/auth/register">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-full"
              >
                Try Demo!
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-red-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="flex items-center md:justify-start justify-center">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">GoHouse.ai</span>
              </div>
            </div>
            <div className="text-center">
              <p>2024 all copywrites served</p>
            </div>
            <div className="space-y-2 md:text-right text-center">
              <a href="mailto:info@gohouse.ai" className="block hover:underline">
                info@gohouse.ai
              </a>
              <a href="tel:754-765-7885" className="block hover:underline">
                754-765-7885
              </a>
              <p>2320 Miami, Florida</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
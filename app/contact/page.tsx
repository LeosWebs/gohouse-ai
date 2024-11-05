import { Button } from "@/components/ui/button"

import { Label } from "@/components/ui/label"
import Link from "next/link"

function ContactForm() {
    return (
        <form className="space-y-6">
            <div>
                <Label htmlFor="name">Name</Label>
            </div>
            <div>
                <Label htmlFor="email">Email</Label>
            </div>
            <div>
                <Label htmlFor="message">Message</Label>
            </div>
            <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white">
                Send Message
            </Button>
        </form>
    )
}

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="container mx-auto px-4 py-6">
                <nav className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-0">
                        <span className="text-xl font-bold text-red-600">GoHouse.ai</span>
                    </Link>
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
            <main className="flex-grow container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
                <ContactForm />
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
                            <p>2024 all copyrights reserved</p>
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
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Menu, MapPin } from "lucide-react"

export default function LandingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="container mx-auto px-4 py-6 border-b">
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
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Open menu</span>
                    </Button>
                </nav>
            </header>

            <main className="flex-1">
                <section className="container px-4 py-12 text-center">
                    <h1 className="text-4xl font-bold tracking-tighter text-black sm:text-5xl">
                        Ready to Accelerate Your Agency&apos;s Growth?
                    </h1>
                    <p className="mt-4 text-xl text-muted-foreground">
                        In the fast-paced world of real estate, time is money.
                    </p>
                    <p className="mt-2 text-xl">
                        <span className="font-semibold text-red-600">GoHouse.ai</span> helps real estate agencies save time, close more
                        deals.
                    </p>
                </section>

                <section className="container px-4 py-8">
                    <Card className="overflow-hidden">
                        <CardHeader>
                            <CardTitle>Property Matches in Brickell, Miami</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="relative aspect-[16/9]">
                                <Image
                                    src="/placeholder.svg?height=720&width=1280"
                                    alt="Map of Brickell area"
                                    className="object-cover"
                                    fill
                                />
                                {/* Property Markers */}
                                <div className="absolute inset-0">
                                    <Badge className="absolute top-1/4 right-1/4 bg-red-500">
                                        <MapPin className="w-4 h-4 mr-1" />
                                        $2.4K
                                    </Badge>
                                    <Badge className="absolute top-1/3 left-1/3 bg-red-500">
                                        <MapPin className="w-4 h-4 mr-1" />
                                        $2.1K
                                    </Badge>
                                    <Badge className="absolute bottom-1/4 right-1/3 bg-green-500">91% Match</Badge>
                                    <Badge className="absolute top-1/2 right-1/4 bg-orange-500">59% Match</Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <p className="mt-4 text-center text-muted-foreground">
                        See how closely each property matches your criteria – in percentage.
                    </p>
                </section>

                <section className="container px-4 py-12 text-center">
                    <Link href="https://app.gohouse.ai/auth/register">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                        Get Free Access
                    </Button>
                    </Link>
                   
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
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Zap, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Component() {
    return (
        <div className="flex flex-col min-h-screen">
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
                {/* Hero Section */}
                <section className="relative">
                    <div className="absolute inset-0 w-full h-full">

                        <div className="absolute inset-0 bg-black/40" />
                    </div>
                    <div className="relative py-24 md:py-32 lg:py-40">
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-col items-center text-center space-y-4 md:space-y-8">
                                <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white max-w-[800px]">
                                    Get Qualified Leads with AI-Powered Property Search
                                </h1>
                                <p className="text-xl text-gray-200 max-w-[800px]">
                                    Transform your real estate business with AI-powered matching that connects you with the right clients and
                                    properties.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="https://app.gohouse.ai/auth/register">
                                        <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                                            Try Demo!
                                        </Button>
                                    </Link>

                                    <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white">
                                        How It Works
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Points Section */}
                <section className="py-12 md:py-24 bg-white">
                    <div className="container px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Users className="h-5 w-5" />
                                        Attract High-Quality Clients with Smart Lead Generation
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        Our AI-powered platform automatically qualifies leads and matches them with properties that meet their
                                        exact criteria.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Target className="h-5 w-5" />
                                        Turn Leads into Closed Deals
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        Leverage AI insights to understand client preferences and show them properties theyre most likely to
                                        buy.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Value Proposition Section */}
                <section className="py-12 md:py-24 bg-gray-50">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
                            Why Choose GoHouse.ai for Your Agency?
                        </h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    title: "Qualified Leads",
                                    description: "AI-powered lead qualification saves time and increases conversion rates",
                                    icon: Users,
                                },
                                {
                                    title: "AI Advisor",
                                    description: "Get intelligent insights and recommendations for every property",
                                    icon: Zap,
                                },
                                {
                                    title: "Boost Efficiency",
                                    description: "Streamline your workflow with automated matching and scheduling",
                                    icon: Target,
                                },
                                {
                                    title: "Close Deals Faster",
                                    description: "Reduce time to close with better qualified leads and matches",
                                    icon: CheckCircle,
                                },
                            ].map((item, index) => (
                                <Card key={index}>
                                    <CardContent className="pt-6">
                                        <div className="flex flex-col items-center text-center space-y-2">
                                            <item.icon className="h-12 w-12 text-red-600 mb-2" />
                                            <h3 className="font-bold">{item.title}</h3>
                                            <p className="text-sm text-muted-foreground">{item.description}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Competitive Advantage Section */}
                <section className="py-12 md:py-24 bg-white">
                    <div className="container px-4 md:px-6 text-center">
                        <div className="max-w-[800px] mx-auto space-y-8">
                            <h2 className="text-3xl font-bold tracking-tighter">Stay Ahead of the Competition</h2>
                            <p className="text-xl text-muted-foreground">
                                We work closely with real estate agencies to provide cutting-edge AI solutions that give you a competitive
                                advantage in your market.
                            </p>
                            <Link href="https://app.gohouse.ai/auth/register">
                            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                                Get Early Access
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            </Link>
                            
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-red-600 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        <div className="flex items-center md:justify-start justify-center">
                            <div className="flex items-center gap-2">
                                {/* */}
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
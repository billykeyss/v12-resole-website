"use client";

import InstagramFeed from "react-instagram-feed";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Menu,
  X,
  CheckCircle,
  Instagram,
  Recycle,
  Clock,
  Leaf,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function V12Resole() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const slides = [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ];

  const locations = [
    "San Francisco, CA",
    "Boulder, CO",
    "Seattle, WA",
    "New York, NY",
  ];

  const faqItems = [
    {
      question: "What is the turn-around time?",
      answer: `
        Half-Sole repair = 2-3 weeks
        Half-Sole & Rand repair = 3-4 weeks (depending on complexity or repair)
        Shipping = 4 to 5 weeks (depending on complexity of repair)
      `,
    },
    {
      question: "What rubber do you use?",
      answer:
        "We currently have Unparallel Real Honor, Vibram Grip, and Madrock Science Friction in stock, and our team selects accordingly based on the shoe.",
    },
    {
      question: "What thickness rubber do you use, and how soft are they?",
      answer: `
        Unparallel RH
        Rand = 2.2 mm
        Sole = 3.5 mm
        Durometer = 75 - 80 Shore A

        Vibram Grip
        Rand = 1.8 mm
        Sole = 3.5 mm
        Durometer = 72-78 Shore A

        Mad Rock Science friction
        Rand = 2.2 mm
        Sole = 4.2 mm
        Durometer = 70-75 Shore A
      `,
    },
    {
      question: "What are the prices for the repairs?",
      answer: "Prices are up to date in our website at V12Resole.com",
    },
    {
      question: "How do I know which repair to select?",
      answer: `
        Send picture of your shoes to any of the following. We can take a look at provide guidance.
        Email = admin@v12resole.com
        Instagram = V12resole
        Text message = 408-930-6203
      `,
    },
  ];

  const instagramPosts = [
    {
      id: 1,
      image: "/placeholder.svg?height=300&width=300",
      likes: 120,
      comments: 15,
    },
    {
      id: 2,
      image: "/placeholder.svg?height=300&width=300",
      likes: 95,
      comments: 8,
    },
    {
      id: 3,
      image: "/placeholder.svg?height=300&width=300",
      likes: 200,
      comments: 32,
    },
    {
      id: 4,
      image: "/placeholder.svg?height=300&width=300",
      likes: 150,
      comments: 20,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="bg-white shadow-md"
      >
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">V12 Resole</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#services" className="text-gray-600 hover:text-gray-800">
              Services
            </a>
            <a href="#values" className="text-gray-600 hover:text-gray-800">
              Our Values
            </a>
            <a href="#locations" className="text-gray-600 hover:text-gray-800">
              Locations
            </a>
            <a href="#faq" className="text-gray-600 hover:text-gray-800">
              FAQ
            </a>
            <a
              href="#subscription"
              className="text-gray-600 hover:text-gray-800"
            >
              Subscription
            </a>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white py-4"
          >
            <a
              href="#services"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
            >
              Services
            </a>
            <a
              href="#values"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
            >
              Our Values
            </a>
            <a
              href="#locations"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
            >
              Locations
            </a>
            <a
              href="#faq"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
            >
              FAQ
            </a>
            <a
              href="#subscription"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
            >
              Subscription
            </a>
          </motion.nav>
        )}
      </motion.header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-gray-800 text-white py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Expert Climbing Shoe Resole
          </h2>
          <p className="text-xl mb-8">
            Extend the life of your favorite climbing shoes
          </p>
          <p className="text-lg mb-8">
            Now offering monthly and annual subscriptions for exclusive
            benefits!
          </p>
          <Button size="lg">Get Started</Button>
        </div>
      </motion.section>

      {/* Slideshow */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Work</h2>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                src={slides[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                className="w-full h-[400px] object-cover rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 left-4 transform -translate-y-1/2"
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev === 0 ? slides.length - 1 : prev - 1
                )
              }
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 right-4 transform -translate-y-1/2"
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev === slides.length - 1 ? 0 : prev + 1
                )
              }
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-16 bg-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Recycle className="mr-2 h-6 w-6 text-green-500" />
                    Minimize Waste
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We strive to reduce waste in every aspect of our business,
                    from our resoling process to our packaging.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-2 h-6 w-6 text-blue-500" />
                    Extend Lifetime
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Our goal is to maximize the lifespan of your climbing shoes,
                    reducing the need for frequent replacements.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Leaf className="mr-2 h-6 w-6 text-green-500" />
                    Eco-Friendly
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We use environmentally friendly materials and processes
                    whenever possible to minimize our ecological footprint.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Sole Repair</CardTitle>
                  <CardDescription>
                    Restore the grip of your climbing shoes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">$55</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Order Now</Button>
                </CardFooter>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Rand Repair</CardTitle>
                  <CardDescription>
                    Fix the rand for better performance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">$65</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Order Now</Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Subscription Model */}
      <section id="subscription" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Membership Options
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Membership</CardTitle>
                  <CardDescription>
                    Flexible benefits for climbers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold mb-4">$4.99/month</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      Free shipping on all orders
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      Free rand repair
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Subscribe Monthly</Button>
                </CardFooter>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Annual Membership</CardTitle>
                  <CardDescription>
                    Best value for dedicated climbers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold mb-4">$60/year</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      Free shipping on all orders
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      Free rand repair
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      One free shoe repair
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Subscribe Annually</Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Locations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="flex items-center justify-center p-6">
                    <MapPin className="mr-2 h-4 w-4" />
                    <span>{location}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Follow Us on Instagram
          </h2>
          <InstagramFeed
            username="V12resole"
            maxPosts={8} // Limit number of posts displayed
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          />
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              <Instagram className="mr-2 h-4 w-4" />
              Follow Us on Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 V12 Resole. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
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
  ShoppingCart,
  Box,
  Bell,
  Package,
  Sun,
  Moon,
  Home,
  Info,
  Briefcase,
  Users,
  CreditCard,
  MapPin as LocationIcon,
  MessageCircle,
  Hammer,
  Heart,
  Scissors,
  Truck,
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
import InstagramFeed from "react-instagram-feed";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
}

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  id = "",
}) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

interface TableOfContentsProps {
  sections: Section[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string>(sections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const sectionInView = sections.find((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 10 && rect.bottom >= 10;
        }
        return false;
      });
      if (sectionInView) {
        setActiveSection(sectionInView.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  return (
    <nav className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center justify-center w-10 h-10 rounded-full shadow-lg transition-colors ${
                activeSection === section.id
                  ? "bg-orange-600 text-white"
                  : "bg-white dark:bg-gray-800 text-orange-600 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-gray-700"
              }`}
              title={section.title}
            >
              {section.icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default function V12Resole() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModePreference = localStorage.getItem("darkMode");
    if (darkModePreference === "true") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const slides = [
    "/tc_pro.jpg",
    "/evolv_elektra.jpq",
    "/lasportiva_solutions.jpg",
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
        Durometer = 75 - 80 Shore Az

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

  const howItWorksSteps = {
    inPerson: [
      {
        title: "Place Order",
        description:
          "For Foster City, order online. For Santa Clara, order online or scan QR code on-site. For gyms, scan QR code on-site. See Locations page for hours and details.",
        icon: ShoppingCart,
      },
      {
        title: "Drop Off",
        description:
          "Visit the local drop-off location to get your shoes in the queue.",
        icon: Box,
      },
      {
        title: "Receive Notification",
        description:
          "Once your resole is complete, you will receive a notification via text or email.",
        icon: Bell,
      },
      {
        title: "Pick Up",
        description:
          "Return to the drop off location to grab your shoes. Climb on!",
        icon: Package,
      },
    ],
    shipped: [
      {
        title: "Place Order",
        description:
          "Visit our website and select the 'Ship-In Resole' option. Choose your repair type and provide shipping details.",
        icon: ShoppingCart,
      },
      {
        title: "Ship Your Shoes",
        description:
          "Pack your shoes securely and ship them to our facility using the provided shipping label.",
        icon: Truck,
      },
      {
        title: "Resole Process",
        description:
          "Our expert craftsmen will carefully resole your shoes according to your specifications.",
        icon: Scissors,
      },
      {
        title: "Return Shipping",
        description:
          "Once complete, we'll ship your newly resoled shoes back to you. Track your package online.",
        icon: Package,
      },
    ],
  };

  const sections: Section[] = [
    { id: "hero", title: "Home", icon: <Home size={20} /> },
    { id: "our-work", title: "Our Work", icon: <Briefcase size={20} /> },
    { id: "values", title: "Our Values", icon: <Users size={20} /> },
    { id: "how-it-works", title: "How It Works", icon: <Info size={20} /> },
    { id: "services", title: "Services", icon: <Package size={20} /> },
    { id: "subscription", title: "Membership", icon: <CreditCard size={20} /> },
    { id: "locations", title: "Locations", icon: <LocationIcon size={20} /> },
    { id: "instagram", title: "Instagram", icon: <Instagram size={20} /> },
    { id: "faq", title: "FAQ", icon: <MessageCircle size={20} /> },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode.toString());
      document.documentElement.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  return (
    <div
      className={`min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 ${
        isDarkMode ? "dark" : ""
      }`}
    >
      {/* Dark Mode Toggle */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 text-orange-600 dark:text-orange-400 border-orange-600 dark:border-orange-400"
        onClick={toggleDarkMode}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDarkMode ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </Button>

      {/* Table of Contents */}
      <TableOfContents sections={sections} />

      {/* Main Content */}
      <div>
        {/* Hero Section */}
        <AnimatedSection
          id="hero"
          className="bg-orange-400 dark:bg-orange-800 text-white py-24"
        >
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-6">V12 Resole</h1>
            <h2 className="text-4xl font-bold mb-6">
              Expert Climbing Shoe Resole
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Extend the life of your favorite climbing shoes with our
              professional resoling services.
            </p>
            <p className="text-lg mb-12">
              Now offering monthly and annual subscriptions for exclusive
              benefits!
            </p>
            <Button
              size="lg"
              className="text-lg px-8 py-4 bg-white text-orange-600 hover:bg-orange-100 dark:bg-gray-800 dark:text-orange-400 dark:hover:bg-gray-700"
            >
              Get Started
            </Button>
          </div>
        </AnimatedSection>

        {/* Our Work Section */}
        <AnimatedSection
          id="our-work"
          className="py-24 bg-white dark:bg-gray-900"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-orange-600 dark:text-orange-400">
              Our Work
            </h2>
            <div className="relative max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={slides[currentSlide]}
                  alt={`Slide ${currentSlide + 1}`}
                  className="w-full h-[600px] object-cover rounded-lg shadow-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
              <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white dark:bg-gray-800 text-orange-600 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-gray-700"
                onClick={() =>
                  setCurrentSlide((prev) =>
                    prev === 0 ? slides.length - 1 : prev - 1
                  )
                }
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white dark:bg-gray-800 text-orange-600 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-gray-700"
                onClick={() =>
                  setCurrentSlide((prev) =>
                    prev === slides.length - 1 ? 0 : prev + 1
                  )
                }
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {/* Values Section */}
        <AnimatedSection
          id="values"
          className="py-24 bg-orange-50 dark:bg-gray-800"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-orange-600 dark:text-orange-400">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              <Card className="shadow-lg border-orange-200 dark:border-orange-800 dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-orange-600 dark:text-orange-400">
                    <Recycle className="mr-2 h-8 w-8" />
                    Minimize Waste
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    We're committed to reducing waste across all operations,
                    from optimizing our resoling process to using recyclable and
                    minimal packaging, ensuring we leave as little impact as
                    possible.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-lg border-orange-200 dark:border-orange-800 dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-orange-600 dark:text-orange-400">
                    <Clock className="mr-2 h-8 w-8" />
                    Extend Shoe Life
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Our mission is to extend the life of your climbing shoes,
                    helping you get the most out of each pair and reducing the
                    demand for new products through careful, high-quality
                    repairs.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-lg border-orange-200 dark:border-orange-800 dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-orange-600 dark:text-orange-400">
                    <Leaf className="mr-2 h-8 w-8" />
                    Eco-Friendly Practices
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    We prioritize eco-friendly materials and processes to lower
                    our ecological footprint and to support sustainable choices
                    for climbers.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-lg border-orange-200 dark:border-orange-800 dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-orange-600 dark:text-orange-400">
                    <Hammer className="mr-2 h-8 w-8" />
                    Craftsmanship Quality
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Every resole is handled with expert craftsmanship, ensuring
                    each shoe performs as intended and feels just right, climb
                    after climb.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-lg border-orange-200 dark:border-orange-800 dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-orange-600 dark:text-orange-400">
                    <Users className="mr-2 h-8 w-8" />
                    Customer Partnership
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    We view every climber as a partner in sustainability. We
                    work closely with our customers, offering tips and advice to
                    keep shoes in top condition between resoles.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-lg border-orange-200 dark:border-orange-800 dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-orange-600 dark:text-orange-400">
                    <Heart className="mr-2 h-8 w-8" />
                    Community Engagement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    We're invested in the climbing community, supporting local
                    events, partnering with climbing gyms, and educating
                    climbers on sustainable practices and shoe care.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </AnimatedSection>

        {/* How It Works Section */}
        <AnimatedSection
          id="how-it-works"
          className="py-24 bg-white dark:bg-gray-900"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-orange-600 dark:text-orange-400">
              How It Works
            </h2>
            <Tabs defaultValue="inPerson" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="inPerson">In-Person Orders</TabsTrigger>
                <TabsTrigger value="shipped">Shipped Orders</TabsTrigger>
              </TabsList>
              <TabsContent value="inPerson">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {howItWorksSteps.inPerson.map((step, index) => (
                    <Card
                      key={index}
                      className="shadow-lg border-orange-200 dark:border-orange-800 dark:bg-gray-800"
                    >
                      <CardHeader>
                        <CardTitle className="flex items-center text-2xl text-orange-600 dark:text-orange-400">
                          <step.icon className="mr-2 h-8 w-8" />#{index + 1}{" "}
                          {step.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="shipped">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {howItWorksSteps.shipped.map((step, index) => (
                    <Card
                      key={index}
                      className="shadow-lg border-orange-200 dark:border-orange-800 dark:bg-gray-800"
                    >
                      <CardHeader>
                        <CardTitle className="flex items-center text-2xl text-orange-600 dark:text-orange-400">
                          <step.icon className="mr-2 h-8 w-8" />#{index + 1}{" "}
                          {step.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </AnimatedSection>

        {/* Services Section */}
        <AnimatedSection
          id="services"
          className="py-24 bg-white dark:bg-gray-900"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-orange-600 dark:text-orange-400">
              Our Services
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <Card className="shadow-lg border-orange-200 dark:border-orange-800 dark:bg-gray-900">
                <CardHeader>
                  <CardTitle className="text-2xl text-orange-600 dark:text-orange-400">
                    Sole Repair
                  </CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    Replacement of rubber on the front sole. Restore the grip of
                    your climbing shoes.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-4">
                    $55
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
                    Estimated Lead Time: 2-3 weeks
                  </p>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">
                    Available Rubber Options:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    <li>Unparallel Real Honor</li>
                    <li>Vibram Grip</li>
                    <li>Madrock Science Friction</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full text-lg bg-orange-600 hover:bg-orange-700 text-white dark:bg-orange-700 dark:hover:bg-orange-600">
                    Order Now
                  </Button>
                </CardFooter>
              </Card>
              <Card className="shadow-lg border-orange-200 dark:border-orange-800 dark:bg-gray-900">
                <CardHeader>
                  <CardTitle className="text-2xl text-orange-600 dark:text-orange-400">
                    Rand Repair
                  </CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    Replacement of rubber on the rand and front sole. Fix the
                    rand for better performance.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-4">
                    $65
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
                    Estimated Lead Time: 3-4 weeks
                  </p>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">
                    Includes:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    <li>Rand repair</li>
                    <li>Sole replacement</li>
                    <li>Choice of rubber options (same as Sole Repair)</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full text-lg bg-orange-600 hover:bg-orange-700 text-white dark:bg-orange-700 dark:hover:bg-orange-600">
                    Order Now
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </AnimatedSection>

        {/* Subscription Model */}
        <AnimatedSection
          id="subscription"
          className="py-24 bg-orange-50 dark:bg-gray-800"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-orange-600 dark:text-orange-400">
              Membership Options
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <Card className="shadow-lg border-orange-200 dark:border-orange-800 dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl text-orange-600 dark:text-orange-400">
                    Monthly Membership
                  </CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    Flexible benefits for climbers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-6">
                    $4.99/month
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-orange-600 dark:text-orange-400" />
                      <span className="text-lg text-gray-600 dark:text-gray-300">
                        Free shipping on all orders
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-orange-600 dark:text-orange-400" />
                      <span className="text-lg text-gray-600 dark:text-gray-300">
                        Free rand repair
                      </span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full text-lg bg-orange-600 hover:bg-orange-700 text-white dark:bg-orange-700 dark:hover:bg-orange-600">
                    Subscribe Monthly
                  </Button>
                </CardFooter>
              </Card>
              <Card className="shadow-lg border-orange-200 dark:border-orange-800 dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl text-orange-600 dark:text-orange-400">
                    Annual Membership
                  </CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    Best value for dedicated climbers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-6">
                    $60/year
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-orange-600 dark:text-orange-400" />
                      <span className="text-lg text-gray-600 dark:text-gray-300">
                        Free shipping on all orders
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-orange-600 dark:text-orange-400" />
                      <span className="text-lg text-gray-600 dark:text-gray-300">
                        Free rand repair
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-orange-600 dark:text-orange-400" />
                      <span className="text-lg text-gray-600 dark:text-gray-300">
                        One free shoe repair (Sole + Rand)
                      </span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full text-lg bg-orange-600 hover:bg-orange-700 text-white dark:bg-orange-700 dark:hover:bg-orange-600">
                    Subscribe Annually
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </AnimatedSection>

        <section
          id="services-and-membership"
          className="py-24 bg-orange-50 dark:bg-gray-800"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-orange-600 dark:text-orange-400">
              Our Services and Membership Options
            </h2>
            <Tabs defaultValue="single" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="single">Single Service</TabsTrigger>
                <TabsTrigger value="membership">Membership</TabsTrigger>
              </TabsList>
              <TabsContent value="single">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="shadow-lg border-orange-200 dark:border-orange-800 dark:bg-gray-900">
                    <CardHeader>
                      <CardTitle className="text-2xl text-orange-600 dark:text-orange-400">
                        Sole Repair
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400">
                        Replacement of rubber on the front sole. Restore the
                        grip of your climbing shoes.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-4">
                        $55
                      </p>
                      <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
                        Estimated Lead Time: 2-3 weeks
                      </p>
                      <p className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">
                        Available Rubber Options:
                      </p>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                        <li>Unparallel Real Honor</li>
                        <li>Vibram Grip</li>
                        <li>Madrock Science Friction</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full text-lg bg-orange-600 hover:bg-orange-700 text-white dark:bg-orange-700 dark:hover:bg-orange-600">
                        Order Sole Repair
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card className="shadow-lg border-orange-200 dark:border-orange-800 dark:bg-gray-900">
                    <CardHeader>
                      <CardTitle className="text-2xl text-orange-600 dark:text-orange-400">
                        Rand Repair
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400">
                        Replacement of rubber on the rand and front sole. Fix
                        the rand for better performance.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-4">
                        $65
                      </p>
                      <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
                        Estimated Lead Time: 3-4 weeks
                      </p>
                      <p className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">
                        Includes:
                      </p>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                        <li>Rand repair</li>
                        <li>Sole replacement</li>
                        <li>Choice of rubber options (same as Sole Repair)</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full text-lg bg-orange-600 hover:bg-orange-700 text-white dark:bg-orange-700 dark:hover:bg-orange-600">
                        Order Rand Repair
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="membership">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="shadow-lg border-orange-200 dark:border-orange-800 dark:bg-gray-800">
                    <CardHeader>
                      <CardTitle className="text-2xl text-orange-600 dark:text-orange-400">
                        Monthly Membership
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400">
                        Flexible benefits for climbers
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-6">
                        $4.99/month
                      </p>
                      <ul className="space-y-4">
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-5 w-5 text-orange-600 dark:text-orange-400" />
                          <span className="text-lg text-gray-600 dark:text-gray-300">
                            Free shipping on all orders
                          </span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-5 w-5 text-orange-600 dark:text-orange-400" />
                          <span className="text-lg text-gray-600 dark:text-gray-300">
                            Free rand repair
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full text-lg bg-orange-600 hover:bg-orange-700 text-white dark:bg-orange-700 dark:hover:bg-orange-600">
                        Subscribe Monthly
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card className="shadow-lg border-orange-200 dark:border-orange-800 dark:bg-gray-800">
                    <CardHeader>
                      <CardTitle className="text-2xl text-orange-600 dark:text-orange-400">
                        Annual Membership
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400">
                        Best value for dedicated climbers
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-6">
                        $60/year
                      </p>
                      <ul className="space-y-4">
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-5 w-5 text-orange-600 dark:text-orange-400" />
                          <span className="text-lg text-gray-600 dark:text-gray-300">
                            Free shipping on all orders
                          </span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-5 w-5 text-orange-600 dark:text-orange-400" />
                          <span className="text-lg text-gray-600 dark:text-gray-300">
                            Free rand repair
                          </span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-5 w-5 text-orange-600 dark:text-orange-400" />
                          <span className="text-lg text-gray-600 dark:text-gray-300">
                            One free shoe repair (Sole + Rand)
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full text-lg bg-orange-600 hover:bg-orange-700 text-white dark:bg-orange-700 dark:hover:bg-orange-600">
                        Subscribe Annually
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Locations */}
        <AnimatedSection
          id="locations"
          className="py-24 bg-white dark:bg-gray-900"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-orange-600 dark:text-orange-400">
              Our Locations
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {locations.map((location, index) => (
                <Card
                  key={index}
                  className="shadow-lg border-orange-200 dark:border-orange-800 dark:bg-gray-900"
                >
                  <CardContent className="flex items-center justify-center p-6">
                    <MapPin className="mr-2 h-6 w-6 text-orange-600 dark:text-orange-400" />
                    <span className="text-lg text-gray-600 dark:text-gray-300">
                      {location}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Instagram Feed */}
        <AnimatedSection
          id="instagram"
          className="py-24 bg-orange-50 dark:bg-gray-800"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-orange-600 dark:text-orange-400">
              Follow Us on Instagram
            </h2>
            <div className="max-w-5xl mx-auto">
              <InstagramFeed token="YOUR_INSTAGRAM_ACCESS_TOKEN" counter="6" />
            </div>
            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-orange-600 text-orange-600 hover:bg-orange-100 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-gray-800"
              >
                <Instagram className="mr-2 h-6 w-6" />
                Follow Us on Instagram
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {/* FAQ */}
        <AnimatedSection id="faq" className="py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-orange-600 dark:text-orange-400">
              Frequently Asked Questions
            </h2>
            <Accordion
              type="single"
              collapsible
              className="w-full max-w-3xl mx-auto"
            >
              {faqItems.map((item, index) => (
                <AccordionItem
                  value={`item-${index}`}
                  key={index}
                  className="border-orange-200 dark:border-orange-800"
                >
                  <AccordionTrigger className="text-lg text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-gray-600 dark:text-gray-300">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>

        {/* Footer */}
        <footer className="bg-orange-600 dark:bg-orange-800 text-white py-12">
          <div className="container mx-auto px-6 text-center">
            <p className="text-lg">
              &copy; 2023 V12 Resole. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

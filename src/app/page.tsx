import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/navigation/header";
import { PawPrint, Camera, Video, MessageSquare, Heart, Star } from "lucide-react";

const featuredDogs = [
  {
    name: "Max the Golden",
    slug: "max-the-golden",
    breed: "Golden Retriever",
    followers: "45.2K",
    tags: ["Outdoor", "Swimming", "Tricks"],
    imageSrc: "/images/dogs/golden-retriever.jpg"
  },
  {
    name: "Bella Paws",
    slug: "bella-paws",
    breed: "French Bulldog",
    followers: "38.9K",
    tags: ["Fashion", "City Life", "Cute"],
    imageSrc: "/images/dogs/french-bulldog.jpg"
  },
  {
    name: "Rocky Adventure",
    slug: "rocky-adventure",
    breed: "German Shepherd",
    followers: "52.1K",
    tags: ["Action", "Training", "Hiking"],
    imageSrc: "/images/dogs/german-shepherd.jpg"
  }
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-r from-blue-50 to-blue-100 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Subscribe to premium dog model content
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Support your favorite canine content creators and get exclusive access to photos, videos, and updates from the top dog models.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      Join WoofyFans
                    </Button>
                  </Link>
                  <Link href="/explore">
                    <Button variant="outline" size="lg">
                      Explore Models
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden lg:h-[600px]">
                <Image
                  src="/images/dogs/golden-retriever.jpg"
                  alt="Dog model"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Premium Features for Dog Content
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to follow and support your favorite canine creators
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <FeatureCard
                icon={<Camera className="h-10 w-10 text-blue-500" />}
                title="Exclusive Photos"
                description="Get access to premium photos of your favorite dog models that aren't available anywhere else."
              />
              <FeatureCard
                icon={<Video className="h-10 w-10 text-blue-500" />}
                title="Behind the Scenes"
                description="Watch behind-the-scenes videos of photo shoots, dog shows, and daily life."
              />
              <FeatureCard
                icon={<MessageSquare className="h-10 w-10 text-blue-500" />}
                title="Direct Messaging"
                description="Chat directly with dog owners and get updates on your favorite canine models."
              />
            </div>
          </div>
        </section>

        {/* Featured Models */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Featured Dog Models
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Meet our top performing canine creators
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {featuredDogs.map((dog) => (
                <ModelCard
                  key={dog.name}
                  name={dog.name}
                  breed={dog.breed}
                  followers={dog.followers}
                  tags={dog.tags}
                  slug={dog.slug}
                  imageSrc={dog.imageSrc}
                />
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Link href="/explore">
                <Button variant="outline" size="lg">
                  View All Models
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Subscription Tiers */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Subscription Plans
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the perfect plan to follow your favorite dog models
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <PricingCard
                tier="Basic"
                price="$4.99"
                description="Perfect for casual dog lovers"
                features={[
                  "Access to basic content",
                  "Follow up to 5 models",
                  "Photo updates"
                ]}
                buttonText="Get Started"
                popular={false}
              />
              <PricingCard
                tier="Premium"
                price="$9.99"
                description="Our most popular plan"
                features={[
                  "Full access to all content",
                  "Unlimited model follows",
                  "Video content included",
                  "Direct messaging"
                ]}
                buttonText="Go Premium"
                popular={true}
              />
              <PricingCard
                tier="VIP"
                price="$19.99"
                description="For the serious dog enthusiasts"
                features={[
                  "Everything in Premium",
                  "Exclusive monthly collections",
                  "Behind the scenes content",
                  "Early access to new models",
                  "Personalized updates"
                ]}
                buttonText="Join VIP"
                popular={false}
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  What Our Users Say
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from dog lovers and supporters just like you
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <TestimonialCard
                quote="WoofyFans allows me to keep up with all my favorite dog models. The content is adorable and I love being able to support my favorite breeds!"
                author="Sarah J."
                title="Dog Enthusiast"
              />
              <TestimonialCard
                quote="As a dog photographer, this platform has connected me with so many amazing dog models. My canine clients have built a real following!"
                author="Mark T."
                title="Pet Photographer"
              />
              <TestimonialCard
                quote="The direct messaging feature is incredible. I've been able to arrange playdates with some of the local dog models my pup follows!"
                author="Jessica R."
                title="Premium Subscriber"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Join WoofyFans?
                </h2>
                <p className="max-w-[600px] md:text-xl">
                  Sign up today to get exclusive access to premium dog content and support your favorite canine creators.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" className="bg-white text-blue-500 hover:bg-blue-50">
                    Create Account
                  </Button>
                </Link>
                <Link href="/explore">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-blue-600">
                    Browse Models
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-white py-6">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm text-gray-500 md:text-left">
            © 2025 WoofyFans. All rights reserved. This is a dog model platform.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-gray-500 hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-gray-500 hover:underline">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-gray-500 hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="relative overflow-hidden">
      <CardHeader className="pb-2">
        <div className="mb-2">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

function ModelCard({ name, breed, followers, tags, slug, imageSrc }: {
  name: string,
  breed: string,
  followers: string,
  tags: string[],
  slug: string,
  imageSrc?: string
}) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-[300px] bg-gray-200">
        {imageSrc ? (
          <Image src={imageSrc} alt={name} fill className="object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <PawPrint className="h-16 w-16 text-gray-400" />
          </div>
        )}
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{name}</CardTitle>
          <div className="flex items-center">
            <Heart className="h-4 w-4 mr-1 text-red-500" />
            <span className="text-sm text-gray-500">{followers}</span>
          </div>
        </div>
        <CardDescription>{breed}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/model/${slug}`} className="w-full">
          <Button variant="outline" className="w-full">View Profile</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

function PricingCard({ tier, price, description, features, buttonText, popular }: {
  tier: string,
  price: string,
  description: string,
  features: string[],
  buttonText: string,
  popular: boolean
}) {
  return (
    <Card className={`flex flex-col ${popular ? 'border-blue-500 shadow-lg' : ''}`}>
      {popular && (
        <div className="bg-blue-500 py-1 text-white text-center text-sm font-medium">
          Most Popular
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-2xl">{tier}</CardTitle>
        <div className="mt-2">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-gray-500 ml-1">/month</span>
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-center">
              <Star className="h-4 w-4 mr-2 text-blue-500" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link href="/signup" className="w-full">
          <Button
            className={`w-full ${popular ? 'bg-blue-500 hover:bg-blue-600' : ''}`}
            variant={popular ? 'default' : 'outline'}
          >
            {buttonText}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

function TestimonialCard({ quote, author, title }: { quote: string, author: string, title: string }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="mb-4">
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-5 w-5 fill-current text-yellow-400" />
            ))}
          </div>
        </div>
        <p className="mb-4 italic">"{quote}"</p>
        <div>
          <p className="font-medium">{author}</p>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </CardContent>
    </Card>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/navigation/header";
import { Heart, PawPrint, Search } from "lucide-react";

// Mock data for dog models
const dogModels = [
  {
    id: 1,
    slug: "max-the-golden",
    name: "Max the Golden",
    breed: "Golden Retriever",
    location: "Los Angeles, CA",
    followers: "45.2K",
    subscription: "$5.99",
    tags: ["Outdoor", "Swimming", "Tricks"],
    featured: true,
    imageSrc: "/images/dogs/golden-retriever.jpg"
  },
  {
    id: 2,
    slug: "bella-paws",
    name: "Bella Paws",
    breed: "French Bulldog",
    location: "New York, NY",
    followers: "38.9K",
    subscription: "$4.99",
    tags: ["Fashion", "City Life", "Cute"],
    featured: true,
    imageSrc: "/images/dogs/french-bulldog.jpg"
  },
  {
    id: 3,
    slug: "rocky-adventure",
    name: "Rocky Adventure",
    breed: "German Shepherd",
    location: "Denver, CO",
    followers: "52.1K",
    subscription: "$6.99",
    tags: ["Action", "Training", "Hiking"],
    featured: true,
    imageSrc: "/images/dogs/german-shepherd.jpg"
  },
  {
    id: 4,
    slug: "coco-smile",
    name: "Coco Smile",
    breed: "Labrador Retriever",
    location: "Miami, FL",
    followers: "22.8K",
    subscription: "$4.99",
    tags: ["Beach", "Family", "Smile"],
    featured: false,
    imageSrc: "/images/dogs/golden-retriever.jpg"
  },
  {
    id: 5,
    slug: "duke-sports",
    name: "Duke Sports",
    breed: "Border Collie",
    location: "Seattle, WA",
    followers: "31.5K",
    subscription: "$5.99",
    tags: ["Agility", "Frisbee", "Sports"],
    featured: false,
    imageSrc: "/images/dogs/border-collie.jpg"
  },
  {
    id: 6,
    slug: "luna-style",
    name: "Luna Style",
    breed: "Poodle",
    location: "Chicago, IL",
    followers: "29.3K",
    subscription: "$4.99",
    tags: ["Fashion", "Grooming", "Elegance"],
    featured: false,
    imageSrc: "/images/dogs/poodle.jpg"
  },
  {
    id: 7,
    slug: "rex-strong",
    name: "Rex Strong",
    breed: "Rottweiler",
    location: "Houston, TX",
    followers: "35.7K",
    subscription: "$5.99",
    tags: ["Strength", "Protection", "Training"],
    featured: false,
    imageSrc: "/images/dogs/german-shepherd.jpg"
  },
  {
    id: 8,
    slug: "daisy-cutie",
    name: "Daisy Cutie",
    breed: "Beagle",
    location: "Portland, OR",
    followers: "27.1K",
    subscription: "$4.99",
    tags: ["Cute", "Playful", "Family"],
    featured: false,
    imageSrc: "/images/dogs/beagle.jpg"
  },
  {
    id: 9,
    slug: "bruno-travel",
    name: "Bruno Travel",
    breed: "Boxer",
    location: "San Francisco, CA",
    followers: "32.4K",
    subscription: "$5.99",
    tags: ["Travel", "Adventure", "Lifestyle"],
    featured: false,
    imageSrc: "/images/dogs/golden-retriever.jpg"
  }
];

// All unique breeds and tags for filtering
const allBreeds = [...new Set(dogModels.map(model => model.breed))];
const allTags = [...new Set(dogModels.flatMap(model => model.tags))];

export default function ExplorePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="w-full bg-gradient-to-r from-blue-50 to-blue-100 py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Explore Dog Models
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Discover and subscribe to amazing canine content creators
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="w-full bg-white py-8 border-b">
          <div className="container px-4 md:px-6">
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input type="search" placeholder="Search models..." className="pl-8" />
              </div>
              <div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by breed" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Breeds</SelectItem>
                    {allBreeds.map(breed => (
                      <SelectItem key={breed} value={breed.toLowerCase().replace(/\s+/g, '-')}>{breed}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by content" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Content</SelectItem>
                    {allTags.map(tag => (
                      <SelectItem key={tag} value={tag.toLowerCase()}>{tag}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Models */}
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-6">Featured Models</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {dogModels.filter(model => model.featured).map((model) => (
                <ModelCard
                  key={model.id}
                  slug={model.slug}
                  name={model.name}
                  breed={model.breed}
                  location={model.location}
                  followers={model.followers}
                  subscription={model.subscription}
                  tags={model.tags}
                  imageSrc={model.imageSrc}
                />
              ))}
            </div>
          </div>
        </section>

        {/* All Models */}
        <section className="w-full py-12 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-6">All Dog Models</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {dogModels.map((model) => (
                <ModelCard
                  key={model.id}
                  slug={model.slug}
                  name={model.name}
                  breed={model.breed}
                  location={model.location}
                  followers={model.followers}
                  subscription={model.subscription}
                  tags={model.tags}
                  imageSrc={model.imageSrc}
                />
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" disabled>
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous</span>
                </Button>
                <Button variant="outline" size="sm" className="font-medium">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  ...
                </Button>
                <Button variant="outline" size="sm">
                  12
                </Button>
                <Button variant="outline" size="icon">
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next</span>
                </Button>
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

function ModelCard({ slug, name, breed, location, followers, subscription, tags, imageSrc }: {
  slug: string,
  name: string,
  breed: string,
  location: string,
  followers: string,
  subscription: string,
  tags: string[],
  imageSrc?: string
}) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-[200px] bg-gray-200">
        {imageSrc ? (
          <Image src={imageSrc} alt={name} fill className="object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <PawPrint className="h-16 w-16 text-gray-400" />
          </div>
        )}
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle>{name}</CardTitle>
          <div className="flex items-center">
            <Heart className="h-4 w-4 mr-1 text-red-500" />
            <span className="text-sm text-gray-500">{followers}</span>
          </div>
        </div>
        <CardDescription>{breed} • {location}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
          ))}
        </div>
        <p className="text-sm font-medium">
          Subscription: <span className="text-blue-600">{subscription}/month</span>
        </p>
      </CardContent>
      <CardFooter>
        <Link href={`/model/${slug}`} className="w-full">
          <Button variant="outline" className="w-full">View Profile</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

function ChevronLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

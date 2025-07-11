import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/navigation/header";
import { Camera, Video, MessageSquare, Heart, Star, Users, Calendar, MapPin, PawPrint, Lock, Image as ImageIcon, Bookmark, Share2 } from "lucide-react";

// Mock data for dog models
const dogModels = [
  {
    id: 1,
    slug: "max-the-golden",
    name: "Max the Golden",
    breed: "Golden Retriever",
    age: "3 years",
    location: "Los Angeles, CA",
    bio: "Hi, I'm Max! I'm a professional dog model specializing in outdoor photoshoots, swimming content, and trick performances. I've been featured in several dog food commercials and love to show off my skills. Subscribe for exclusive photos and videos of my adventures!",
    followers: "45.2K",
    posts: 127,
    subscription: "5.99",
    tags: ["Outdoor", "Swimming", "Tricks"],
    awards: ["Best in Show 2024", "Commercial Star 2023"],
    featuredIn: ["DogLife Magazine", "Pup Weekly"],
    imageSrc: "/images/dogs/golden-retriever.jpg"
  },
  {
    id: 2,
    slug: "bella-paws",
    name: "Bella Paws",
    breed: "French Bulldog",
    age: "2 years",
    location: "New York, NY",
    bio: "Fashion-forward city pup with an eye for style! I model the latest dog accessories, clothing, and city life experiences. Join my pack for daily fashion inspiration and city adventures. I work with the top dog brands to showcase the cutest trends.",
    followers: "38.9K",
    posts: 215,
    subscription: "4.99",
    tags: ["Fashion", "City Life", "Cute"],
    awards: ["Style Icon 2024", "Urban Pet of the Year"],
    featuredIn: ["Doggy Style", "Urban Paws Magazine"],
    imageSrc: "/images/dogs/french-bulldog.jpg"
  },
  {
    id: 3,
    slug: "rocky-adventure",
    name: "Rocky Adventure",
    breed: "German Shepherd",
    age: "4 years",
    location: "Denver, CO",
    bio: "Action model and adventure enthusiast! I specialize in outdoor activities, training demonstrations, and mountain adventures. Former police K9 training model now working full-time in adventure photography. Subscribe to see my mountain climbs and training sessions!",
    followers: "52.1K",
    posts: 164,
    subscription: "6.99",
    tags: ["Action", "Training", "Hiking"],
    awards: ["Adventure Dog 2024", "Agility Champion"],
    featuredIn: ["Outdoor Dogs", "Training Today"],
    imageSrc: "/images/dogs/german-shepherd.jpg"
  }
];

export function generateStaticParams() {
  return dogModels.map(model => ({
    slug: model.slug
  }));
}

export default function ModelProfile({ params }: { params: { slug: string } }) {
  const model = dogModels.find(model => model.slug === params.slug);

  if (!model) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Profile Header */}
        <section className="w-full bg-gradient-to-r from-blue-50 to-blue-100 py-8">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-[300px_1fr] lg:gap-12">
              <div className="relative rounded-xl overflow-hidden h-[300px] md:h-[350px] bg-gray-200">
                {model.imageSrc ? (
                  <Image
                    src={model.imageSrc}
                    alt={model.name}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PawPrint className="h-20 w-20 text-gray-400" />
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">
                      {model.name}
                    </h1>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Subscribe ${model.subscription}/mo
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {model.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {model.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {model.age}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {model.followers} followers
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">{model.bio}</p>
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                  <Button variant="outline" className="gap-2">
                    <Heart className="h-4 w-4" />
                    Follow
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Message
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Profile Stats */}
        <section className="w-full border-b bg-white py-4">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 text-center">
              <StatCard icon={<ImageIcon className="h-5 w-5" />} label="Posts" value={model.posts} />
              <StatCard icon={<Video className="h-5 w-5" />} label="Videos" value={24} />
              <StatCard icon={<Camera className="h-5 w-5" />} label="Photos" value={103} />
              <StatCard icon={<Users className="h-5 w-5" />} label="Followers" value={model.followers} />
              <StatCard icon={<Star className="h-5 w-5" />} label="Rating" value="4.9" />
            </div>
          </div>
        </section>

        {/* Content Tabs */}
        <section className="w-full py-8">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="posts" className="w-full">
              <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-4 md:grid-cols-4 h-auto">
                <TabsTrigger value="posts" className="py-2">Posts</TabsTrigger>
                <TabsTrigger value="photos" className="py-2">Photos</TabsTrigger>
                <TabsTrigger value="videos" className="py-2">Videos</TabsTrigger>
                <TabsTrigger value="about" className="py-2">About</TabsTrigger>
              </TabsList>

              <TabsContent value="posts" className="mt-6">
                <div className="grid grid-cols-1 gap-6">
                  <PostCard
                    locked={false}
                    content="Just finished an amazing photoshoot at the beach! The waves were perfect and I had a blast chasing seagulls. Check out these exclusive photos from the shoot!"
                    likes={245}
                    comments={37}
                    time="2 hours ago"
                    imageSrc={model.imageSrc}
                  />
                  <PostCard
                    locked={true}
                    content="Behind the scenes of my latest commercial shoot! Subscribe to see all the funny outtakes and how I perfected my signature pose."
                    likes={178}
                    comments={23}
                    time="1 day ago"
                  />
                  <PostCard
                    locked={false}
                    content="Morning training session at the park! Working on some new tricks for my upcoming show. Who wants to see a preview?"
                    likes={302}
                    comments={56}
                    time="3 days ago"
                    imageSrc={model.imageSrc}
                  />
                </div>
              </TabsContent>

              <TabsContent value="photos" className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((photo) => (
                    <PhotoCard key={photo} locked={photo > 3} imageSrc={photo > 3 ? undefined : model.imageSrc} />
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Link href="#subscription">
                    <Button>Subscribe to see all photos</Button>
                  </Link>
                </div>
              </TabsContent>

              <TabsContent value="videos" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((video) => (
                    <VideoCard key={video} locked={video > 1} duration={`${Math.floor(Math.random() * 3) + 1}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`} />
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Link href="#subscription">
                    <Button>Subscribe to see all videos</Button>
                  </Link>
                </div>
              </TabsContent>

              <TabsContent value="about" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About {model.name}</CardTitle>
                    <CardDescription>{model.breed} • {model.age}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-2">Bio</h3>
                      <p className="text-gray-600">{model.bio}</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Awards & Recognition</h3>
                      <ul className="list-disc list-inside text-gray-600">
                        {model.awards.map((award) => (
                          <li key={award}>{award}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Featured In</h3>
                      <ul className="list-disc list-inside text-gray-600">
                        {model.featuredIn.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Subscription Section */}
        <section id="subscription" className="w-full py-12 md:py-24 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Subscribe to {model.name}
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Get exclusive access to premium content and support {model.name}'s modeling career
                </p>
              </div>
              <div className="w-full max-w-sm">
                <Card className="border-blue-500 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl">{model.name}'s Premium Content</CardTitle>
                    <div className="mt-2">
                      <span className="text-3xl font-bold">${model.subscription}</span>
                      <span className="text-gray-500 ml-1">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Star className="h-4 w-4 mr-2 text-blue-500" />
                        <span className="text-sm">Full access to all content</span>
                      </li>
                      <li className="flex items-center">
                        <Star className="h-4 w-4 mr-2 text-blue-500" />
                        <span className="text-sm">Behind-the-scenes photos & videos</span>
                      </li>
                      <li className="flex items-center">
                        <Star className="h-4 w-4 mr-2 text-blue-500" />
                        <span className="text-sm">Direct messaging with {model.name}'s owner</span>
                      </li>
                      <li className="flex items-center">
                        <Star className="h-4 w-4 mr-2 text-blue-500" />
                        <span className="text-sm">Early access to new content</span>
                      </li>
                      <li className="flex items-center">
                        <Star className="h-4 w-4 mr-2 text-blue-500" />
                        <span className="text-sm">Support {model.name}'s modeling career</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Subscribe Now
                    </Button>
                  </CardFooter>
                </Card>
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

function StatCard({ icon, label, value }: { icon: React.ReactNode, label: string, value: string | number }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center mb-1">{icon}</div>
      <div className="font-bold">{value}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  );
}

function PostCard({ locked, content, likes, comments, time, imageSrc }: {
  locked: boolean,
  content: string,
  likes: number,
  comments: number,
  time: string,
  imageSrc?: string
}) {
  return (
    <Card>
      <CardContent className="pt-6">
        {locked ? (
          <div className="relative">
            <p className="text-gray-400 blur-sm select-none">{content}</p>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Lock className="h-8 w-8 text-blue-500 mb-2" />
              <p className="text-center font-medium">This content is locked</p>
              <p className="text-center text-sm text-gray-500 mt-1">Subscribe to unlock</p>
            </div>
          </div>
        ) : (
          <p>{content}</p>
        )}

        {!locked && (
          <div className="mt-4 h-[200px] bg-gray-200 rounded-lg relative overflow-hidden">
            {imageSrc ? (
              <Image src={imageSrc} alt="Post content" fill className="object-cover" />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <Camera className="h-8 w-8 text-gray-400" />
                <span className="ml-2 text-gray-500">Photo content placeholder</span>
              </div>
            )}
          </div>
        )}

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="flex items-center text-gray-500 hover:text-red-500">
              <Heart className="h-5 w-5 mr-1" />
              <span>{likes}</span>
            </button>
            <button className="flex items-center text-gray-500 hover:text-blue-500">
              <MessageSquare className="h-5 w-5 mr-1" />
              <span>{comments}</span>
            </button>
            <button className="flex items-center text-gray-500 hover:text-blue-500">
              <Bookmark className="h-5 w-5 mr-1" />
            </button>
          </div>
          <div className="text-xs text-gray-500">{time}</div>
        </div>
      </CardContent>
    </Card>
  );
}

function PhotoCard({ locked, imageSrc }: { locked: boolean, imageSrc?: string }) {
  return (
    <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden">
      {imageSrc ? (
        <Image src={imageSrc} alt="Photo" fill className="object-cover" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <Camera className="h-8 w-8 text-gray-400" />
        </div>
      )}
      {locked && (
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
          <Lock className="h-8 w-8 text-white mb-2" />
          <p className="text-center text-white text-sm">Subscribers Only</p>
        </div>
      )}
    </div>
  );
}

function VideoCard({ locked, duration }: { locked: boolean, duration: string }) {
  return (
    <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <Video className="h-8 w-8 text-gray-400" />
      </div>
      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
        {duration}
      </div>
      {locked && (
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
          <Lock className="h-8 w-8 text-white mb-2" />
          <p className="text-center text-white text-sm">Subscribers Only</p>
        </div>
      )}
    </div>
  );
}

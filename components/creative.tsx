"use client"
import { MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Award,
  Bell,
  BookOpen,
  Bookmark,
  Book,
  Brush,
  Camera,
  ChevronDown,
  Cloud,
  Code,
  Crown,
  Download,
  FileText,
  Grid,
  Heart,
  Home,
  ImageIcon,
  Layers,
  LayoutGrid,
  Lightbulb,
  Menu,
  MessageSquare,
  Palette,
  PanelLeft,
  Play,
  Plus,
  Search,
  Settings,
  Share2,
  Sparkles,
  Star,
  Trash,
  TrendingUp,
  Users,
  Video,
  Wand2,
  Clock,
  Eye,
  Archive,
  ArrowUpDown,
  MoreHorizontal,
  Type,
  CuboidIcon,
  X,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

// Sample data for apps
const apps = [
  {
    name: "Books Hub",
    icon: <Book className="text-violet-500" />,
    description: "Organize & Optimize Your Digital Library!",
    category: "Creative",
    recent: true,
    new: false,
    progress: 100,
  },
  {
    name: "Requests",
    icon: <Clock className="text-orange-500" />,
    description: "Look into your requests & orders!",
    category: "Creative",
    recent: true,
    new: false,
    progress: 100,
  },
  {
    name: "Book One",
    image: "/books/book1.jpg",
    price: "₹499",
  },
  {
    name: "Book Two",
    image: "/books/book2.jpg",
    price: "₹799",
  },
];


// Sample data for recent files


// Sample data for projects >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const projects = [
  {
    name: "Website Redesign",
    description: "Complete overhaul of company website",
    image: "/books/demobook.jpg",   // <-- add this
    price: "₹499",               // <-- and this
    progress: 75,
    dueDate: "June 15, 2025",
    members: 4,
    files: 23,
  },
  {
    name: "Mobile App Launch",
    description: "Design and assets for new mobile application",
    image: "/books/book2.jpg",
    price: "₹799",
    progress: 60,
    dueDate: "July 30, 2025",
    members: 6,
    files: 42,
  },
  // … add for other projects
];



// Sample data for tutorials >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const tutorials = [
  {
    title: "Mastering Digital Illustration",
    description: "Learn advanced techniques for creating stunning digital art",
    duration: "1h 45m",
    level: "Advanced",
    instructor: "Sarah Chen",
    category: "Illustration",
    views: "24K",
  },
  {
    title: "UI/UX Design Fundamentals",
    description: "Essential principles for creating intuitive user interfaces",
    duration: "2h 20m",
    level: "Intermediate",
    instructor: "Michael Rodriguez",
    category: "Design",
    views: "56K",
  },
  {
    title: "Video Editing Masterclass",
    description: "Professional techniques for cinematic video editing",
    duration: "3h 10m",
    level: "Advanced",
    instructor: "James Wilson",
    category: "Video",
    views: "32K",
  },
  {
    title: "Typography Essentials",
    description: "Create beautiful and effective typography for any project",
    duration: "1h 30m",
    level: "Beginner",
    instructor: "Emma Thompson",
    category: "Typography",
    views: "18K",
  },
  {
    title: "Color Theory for Designers",
    description: "Understanding color relationships and psychology",
    duration: "2h 05m",
    level: "Intermediate",
    instructor: "David Kim",
    category: "Design",
    views: "41K",
  },
]

// Sample data for community posts >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// Sample data for sidebar navigation >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const sidebarItems = [
  {
    title: "Home",
    icon: <Home />,
    isActive: true,
  },
  {
    title: "Apps",
    icon: <Grid />,
    badge: "2",
    items: [
      { title: "All Apps", url: "#" },
      { title: "Recent", url: "#" },
      { title: "Updates", url: "#", badge: "2" },
      { title: "Installed", url: "#" },
    ],
  },
// Files Section in the nav bar
  {
    title: "Requests",
    icon: <Users />,
    badge: "4",
    items: [
      { title: "Active Projects", url: "#", badge: "4" },
      { title: "Archived", url: "#" },
      { title: "Templates", url: "#" },
    ],
  },
  {
    title: "Learn",
    icon: <BookOpen />,
    items: [
    ],
  },

]

export function SmartQCreative() {
  const [progress, setProgress] = useState(0)
  const [notifications, setNotifications] = useState(5)
  const [activeTab, setActiveTab] = useState("home")
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})
  const [projectQuery, setProjectQuery] = useState("")

  // Simulate progress loading
  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 1000)
    return () => clearTimeout(timer)
  }, [])

  const toggleExpanded = (title: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 50% 50%, rgba(120, 41, 190, 0.5) 0%, rgba(53, 71, 125, 0.5) 50%, rgba(0, 0, 0, 0) 100%)",
            "radial-gradient(circle at 30% 70%, rgba(233, 30, 99, 0.5) 0%, rgba(81, 45, 168, 0.5) 50%, rgba(0, 0, 0, 0) 100%)",
            "radial-gradient(circle at 70% 30%, rgba(76, 175, 80, 0.5) 0%, rgba(32, 119, 188, 0.5) 50%, rgba(0, 0, 0, 0) 100%)",
            "radial-gradient(circle at 50% 50%, rgba(120, 41, 190, 0.5) 0%, rgba(53, 71, 125, 0.5) 50%, rgba(0, 0, 0, 0) 100%)",
          ],
        }}
        transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Sidebar - Mobile */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 transform bg-background transition-transform duration-300 ease-in-out md:hidden",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-full flex-col border-r">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <div className="flex aspect-square size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                <Wand2 className="size-5" />
              </div>
              <div>
                <h2 className="font-semibold">Smart-Q</h2>
                <p className="text-xs text-muted-foreground">Optimized FLow</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="px-3 py-2">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="w-full rounded-2xl bg-muted pl-9 pr-4 py-2" />
            </div>
          </div>

          <ScrollArea className="flex-1 px-3 py-2">
            <div className="space-y-1">
              {sidebarItems.map((item) => (
                <div key={item.title} className="mb-1">
                  <button
                    className={cn(
                      "flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium",
                      item.isActive ? "bg-primary/10 text-primary" : "hover:bg-muted",
                    )}
                    onClick={() => item.items && toggleExpanded(item.title)}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span>{item.title}</span>
                    </div>
                    {item.badge && (
                      <Badge variant="outline" className="ml-auto rounded-full px-2 py-0.5 text-xs">
                        {item.badge}
                      </Badge>
                    )}
                    {item.items && (
                      <ChevronDown
                        className={cn(
                          "ml-2 h-4 w-4 transition-transform",
                          expandedItems[item.title] ? "rotate-180" : "",
                        )}
                      />
                    )}
                  </button>

                  {item.items && expandedItems[item.title] && (
                    <div className="mt-1 ml-6 space-y-1 border-l pl-3">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.title}
                          href={subItem.url}
                          className="flex items-center justify-between rounded-2xl px-3 py-2 text-sm hover:bg-muted"
                        >
                          {subItem.title}
                          {subItem.badge && (
                            <Badge variant="outline" className="ml-auto rounded-full px-2 py-0.5 text-xs">
                              {subItem.badge}
                            </Badge>
                          )}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="border-t p-3">
            <div className="space-y-1">
              <button className="flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium hover:bg-muted">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </button>
              <button className="flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium hover:bg-muted">
                <div className="flex items-center gap-3">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <span>John Doe</span>
                </div>
                <Badge variant="outline" className="ml-auto">
                  Pro
                </Badge>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar - Desktop */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-30 hidden w-64 transform border-r bg-background transition-transform duration-300 ease-in-out md:block",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-full flex-col">
          <div className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex aspect-square size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                <Wand2 className="size-5" />
              </div>
              <div>
                <h2 className="font-semibold">Smart-Q</h2>
                <p className="text-xs text-muted-foreground">Optimized Flow</p>
              </div>
            </div>
          </div>

          <div className="px-3 py-2">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="w-full rounded-2xl bg-muted pl-9 pr-4 py-2" />
            </div>
          </div>

          <ScrollArea className="flex-1 px-3 py-2">
            <div className="space-y-1">
              {sidebarItems.map((item) => (
                <div key={item.title} className="mb-1">
                  <button
                    className={cn(
                      "flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium",
                      item.isActive ? "bg-primary/10 text-primary" : "hover:bg-muted",
                    )}
                    onClick={() => item.items && toggleExpanded(item.title)}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span>{item.title}</span>
                    </div>
                    {item.badge && (
                      <Badge variant="outline" className="ml-auto rounded-full px-2 py-0.5 text-xs">
                        {item.badge}
                      </Badge>
                    )}
                    {item.items && (
                      <ChevronDown
                        className={cn(
                          "ml-2 h-4 w-4 transition-transform",
                          expandedItems[item.title] ? "rotate-180" : "",
                        )}
                      />
                    )}
                  </button>

                  {item.items && expandedItems[item.title] && (
                    <div className="mt-1 ml-6 space-y-1 border-l pl-3">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.title}
                          href={subItem.url}
                          className="flex items-center justify-between rounded-2xl px-3 py-2 text-sm hover:bg-muted"
                        >
                          {subItem.title}
                          {subItem.badge && (
                            <Badge variant="outline" className="ml-auto rounded-full px-2 py-0.5 text-xs">
                              {subItem.badge}
                            </Badge>
                          )}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="border-t p-3">
            <div className="space-y-1">
              <button className="flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium hover:bg-muted">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </button>
              <button className="flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium hover:bg-muted">
                <div className="flex items-center gap-3">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <span>John Doe</span>
                </div>
                <Badge variant="outline" className="ml-auto">
                  Pro
                </Badge>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={cn("min-h-screen transition-all duration-300 ease-in-out", sidebarOpen ? "md:pl-64" : "md:pl-0")}>
        <header className="sticky top-0 z-10 flex h-16 items-center gap-3 border-b bg-background/95 px-4 backdrop-blur">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <PanelLeft className="h-5 w-5" />
          </Button>
          <div className="flex flex-1 items-center justify-between">
            <h1 className="text-xl font-semibold bg-[#FFDAB9] rounded-xl px-3 py-1 inline-block">Smart-Q Optimizer</h1>
            <div className="flex items-center gap-3">

              <Avatar className="h-9 w-9 border-2 border-primary">
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-6">
          <Tabs defaultValue="home" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <TabsList className="grid w-full max-w-[600px] grid-cols-5 rounded-2xl p-1">
                <TabsTrigger value="home" className="rounded-xl data-[state=active]:rounded-xl">
                  Home
                </TabsTrigger>
                <TabsTrigger value="apps" className="rounded-xl data-[state=active]:rounded-xl">
                  Apps
                </TabsTrigger>
                <TabsTrigger value="projects" className="rounded-xl data-[state=active]:rounded-xl">
                  Projects
                </TabsTrigger>
                <TabsTrigger value="learn" className="rounded-xl data-[state=active]:rounded-xl">
                  Learn
                </TabsTrigger>
              </TabsList>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <TabsContent value="home" className="space-y-8 mt-0">
                  <section>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 p-8 text-white"
                    >
                      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div className="space-y-4">
                          <Badge className="bg-white/20 text-white hover:bg-white/30 rounded-xl">Admin</Badge>
                          <h2 className="text-3xl font-bold">Welcome to Smart-Q Optimizer</h2>
                          <h3 className="max-w-[600px] text-white/80 ">
                            Optimize Queues & Requests with ease & efficieny!
                          </h3>
                          
                        </div>
                        <div className="hidden lg:block">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="relative h-40 w-40"
                          >
                            <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-md" />
                            <div className="absolute inset-4 rounded-full bg-white/20" />
                            <div className="absolute inset-8 rounded-full bg-white/30" />
                            <div className="absolute inset-12 rounded-full bg-white/40" />
                            <div className="absolute inset-16 rounded-full bg-white/50" />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </section>

                  <section className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-semibold">What do you want to do?</h2>
                      
                    </div>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                      {apps
                        .filter((app) => app.recent)
                        .map((app) => (
                          <motion.div key={app.name} whileHover={{ scale: 1.02, y: -5 }} whileTap={{ scale: 0.98 }}>
                            <Card className="overflow-hidden rounded-3xl border-2 hover:border-primary/50 transition-all duration-300">
                              <CardHeader className="pb-2">
                                <div className="flex items-center justify-between">
                                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
                                    {app.icon}
                                  </div>
                                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-2xl">
                                    <Star className="h-4 w-4" />
                                  </Button>
                                </div>
                              </CardHeader>
                              <CardContent className="pb-2">
                                <CardTitle className="text-lg">{app.name}</CardTitle>
                                <CardDescription>{app.description}</CardDescription>
                              </CardContent>
                              <CardFooter>
                                <Button variant="secondary" className="w-full rounded-2xl">
                                  Open
                                </Button>
                              </CardFooter>
                            </Card>
                          </motion.div>
                        ))}
                    </div>
                  </section>
                </TabsContent>

                <TabsContent value="apps" className="space-y-8 mt-0">
                  <section>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="overflow-hidden rounded-3xl bg-gradient-to-r from-pink-600 via-red-600 to-orange-600 p-8 text-white"
                    >
                      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <div className="space-y-2">
                          <h2 className="text-3xl font-bold">Render Your Digital Library!</h2>
                          <p className="max-w-[600px] text-white/80">
                            Customize the books and info according to your need!.
                          </p>
                        </div>
                        <Button className="w-fit rounded-2xl bg-white text-indigo-700 hover:bg-white/90">
                          <Plus className="mr-2 h-4 w-4" />
                          Add Books
                        </Button>
                      </div>
                    </motion.div>
                  </section>
                  
                  <div className="flex flex-wrap justify-end gap-3 mb-6">
                    <div className="relative w-full md:w-auto mt-3 md:mt-0">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search books..."
                        className="w-full rounded-2xl pl-9 md:w-[200px]"
                      />
                    </div>
                  </div>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">All Books</h2>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                      {apps.map((app) => (
                        <motion.div key={app.name} whileHover={{ scale: 1.02, y: -5 }} whileTap={{ scale: 0.98 }}>
                          <Card className="overflow-hidden rounded-3xl border hover:border-primary/50 transition-all duration-300">
                            <CardHeader className="pb-2">
                              <div className="flex items-center justify-between">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
                                  {app.icon}
                                </div>
                                <Badge variant="outline" className="rounded-xl">
                                  {app.category}
                                </Badge>
                              </div>
                            </CardHeader>
                            <CardContent className="pb-2">
                              <CardTitle className="text-lg">{app.name}</CardTitle>
                              <CardDescription>{app.description}</CardDescription>
                            </CardContent>
                            <CardFooter className="flex gap-2">
                              <Button variant="secondary" className="flex-1 rounded-2xl">
                                {app.progress < 100 ? "Install" : "Open"}
                              </Button>
                              <Button variant="outline" size="icon" className="rounded-2xl">
                                <Star className="h-4 w-4" />
                              </Button>
                            </CardFooter>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </section>
                </TabsContent>



                <TabsContent value="projects" className="space-y-8 mt-0">
                  <section>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 p-8 text-white"
                    >
                      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <div className="space-y-2">
                          <h2 className="text-3xl font-bold">Project Management</h2>
                          <p className="max-w-[600px] text-white/80">
                            Organize your creative work into projects and collaborate with your team.
                          </p>
                        </div>
                        <Button className="w-fit rounded-2xl bg-white text-indigo-700 hover:bg-white/90">
                          <Plus className="mr-2 h-4 w-4" />
                          New Project
                        </Button>
                      </div>
                    </motion.div>
                  </section>

                  <div className="flex flex-wrap gap-3 mb-6">
                    <Button variant="outline" className="rounded-2xl">
                      <Layers className="mr-2 h-4 w-4" />
                      All Projects
                    </Button>
                    <Button variant="outline" className="rounded-2xl">
                      <Clock className="mr-2 h-4 w-4" />
                      Recent
                    </Button>
                    <Button variant="outline" className="rounded-2xl">
                      <Users className="mr-2 h-4 w-4" />
                      Shared
                    </Button>
                    <Button variant="outline" className="rounded-2xl">
                      <Archive className="mr-2 h-4 w-4" />
                      Archived
                    </Button>
                    <div className="flex-1"></div>
                    <div className="relative w-full md:w-auto mt-3 md:mt-0">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search projects..."
                        className="w-full rounded-2xl pl-9 md:w-[200px]"
                        value={projectQuery}
                        onChange={(e) => setProjectQuery(e.target.value)}
                      />
                    </div>
                  </div>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">Active Projects</h2>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                      {projects.map((project) => (
    <motion.div
      key={project.name}
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className="overflow-hidden rounded-2xl border hover:shadow-lg transition-all duration-300">
        {/* Book image */}
<img
  src={project.image}
  alt={project.name}
  className="w-full object-contain mx-auto"
  style={{ maxHeight: "300px" }} // adjust height as you like
/>

{/* <img
  src={project.image}
  alt={project.name}
  className="w-full h-48 object-cover"
/> */}


        {/* Book name + Price */}
        <CardContent className="p-4">
          <CardTitle className="text-lg">{project.name}</CardTitle>
          <p className="text-sm text-muted-foreground mt-1">{project.price}</p>
        </CardContent>

        {/* Footer with Edit button */}
        <CardFooter className="flex justify-end">
          <Button
            variant="secondary"
            className="rounded-full px-6"
          >
            Edit
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  ))}
                      <motion.div whileHover={{ scale: 1.02, y: -5 }} whileTap={{ scale: 0.98 }}>
                        <Card className="flex h-full flex-col items-center justify-center rounded-3xl border border-dashed p-8 hover:border-primary/50 transition-all duration-300">
                          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                            <Plus className="h-6 w-6" />
                          </div>
                          <h3 className="text-lg font-medium">Create New Project</h3>
                          <p className="mb-4 text-center text-sm text-muted-foreground">
                            Start a new creative project from scratch or use a template
                          </p>
                          <Button className="rounded-2xl">New Project</Button>
                        </Card>
                      </motion.div>
                    </div>
                  </section>
                </TabsContent>

                <TabsContent value="learn" className="space-y-8 mt-0">
                  <section>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="overflow-hidden rounded-3xl bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 p-8 text-white"
                    >
                      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <div className="space-y-2">
                          <h2 className="text-3xl font-bold">Learn & Grow</h2>
                          <p className="max-w-[600px] text-white/80">
                            Expand your creative skills with tutorials, courses, and resources.
                          </p>
                        </div>
                        <Button className="w-fit rounded-2xl bg-white text-emerald-700 hover:bg-white/90">
                          <Crown className="mr-2 h-4 w-4" />
                          Upgrade to Pro
                        </Button>
                      </div>
                    </motion.div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">Featured Tutorials</h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {tutorials.slice(0, 3).map((tutorial) => (
                        <motion.div key={tutorial.title} whileHover={{ scale: 1.02, y: -5 }} whileTap={{ scale: 0.98 }}>
                          <Card className="overflow-hidden rounded-3xl">
                            <div className="aspect-video overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 relative">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <Button size="icon" variant="secondary" className="h-14 w-14 rounded-full">
                                  <Play className="h-6 w-6" />
                                </Button>
                              </div>
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                                <Badge className="bg-white/20 text-white hover:bg-white/30 rounded-xl">
                                  {tutorial.category}
                                </Badge>
                                <h3 className="mt-2 text-lg font-medium">{tutorial.title}</h3>
                              </div>
                            </div>
                            <CardContent className="p-4">
                              <p className="text-sm text-muted-foreground">{tutorial.description}</p>
                              <div className="mt-4 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <Avatar className="h-6 w-6">
                                    <AvatarFallback>{tutorial.instructor.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                  <span className="text-sm">{tutorial.instructor}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <Clock className="h-4 w-4" />
                                  {tutorial.duration}
                                </div>
                              </div>
                            </CardContent>
                            <CardFooter className="flex items-center justify-between border-t p-4">
                              <Badge variant="outline" className="rounded-xl">
                                {tutorial.level}
                              </Badge>
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Eye className="h-4 w-4" />
                                {tutorial.views} views
                              </div>
                            </CardFooter>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </section>

                  <section className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-semibold">Popular Courses</h2>
                      <Button variant="ghost" className="rounded-2xl">
                        View All
                      </Button>
                    </div>
                    <div className="rounded-3xl border overflow-hidden">
                      <div className="divide-y">
                        {tutorials.slice(3, 5).map((tutorial) => (
                          <motion.div
                            key={tutorial.title}
                            whileHover={{ scale: 1.02, y: -5 }}
                            whileTap={{ scale: 0.98 }}
                            className="p-4 flex flex-col md:flex-row gap-3"
                          >
                            <div className="flex-shrink-0">
                              <div className="relative h-20 w-20 overflow-hidden rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600">
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <Play className="h-8 w-8 text-white" />
                                </div>
                              </div>
                            </div>
                            <div className="flex-1">
                              <h3 className="font-medium">{tutorial.title}</h3>
                              <p className="text-sm text-muted-foreground">{tutorial.description}</p>
                              <div className="mt-2 flex flex-wrap items-center gap-3">
                                <Badge variant="outline" className="rounded-xl">
                                  {tutorial.level}
                                </Badge>
                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                  <Clock className="h-3 w-3" />
                                  {tutorial.duration}
                                </div>
                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                  <Eye className="h-3 w-3" />
                                  {tutorial.views} views
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <Button variant="ghost" size="sm" className="rounded-xl">
                                Watch Now
                              </Button>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">Learning Paths</h2>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                      <Card className="overflow-hidden rounded-3xl border-2 hover:border-primary/50 transition-all duration-300">
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <Badge className="rounded-xl bg-blue-500">Beginner</Badge>
                            <Award className="h-5 w-5 text-amber-500" />
                          </div>
                          <CardTitle className="mt-2">UI/UX Design Fundamentals</CardTitle>
                          <CardDescription>Master the basics of user interface and experience design</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span>8 courses • 24 hours</span>
                              <span>4.8 ★</span>
                            </div>
                            <Progress value={30} className="h-2 rounded-xl" />
                            <p className="text-xs text-muted-foreground">30% completed</p>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button variant="secondary" className="w-full rounded-2xl">
                            Continue Learning
                          </Button>
                        </CardFooter>
                      </Card>

                      <Card className="overflow-hidden rounded-3xl border-2 hover:border-primary/50 transition-all duration-300">
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <Badge className="rounded-xl bg-amber-500">Intermediate</Badge>
                            <Award className="h-5 w-5 text-amber-500" />
                          </div>
                          <CardTitle className="mt-2">Digital Illustration Mastery</CardTitle>
                          <CardDescription>Create stunning digital artwork and illustrations</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span>12 courses • 36 hours</span>
                              <span>4.9 ★</span>
                            </div>
                            <Progress value={0} className="h-2 rounded-xl" />
                            <p className="text-xs text-muted-foreground">Not started</p>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button variant="secondary" className="w-full rounded-2xl">
                            Start Learning
                          </Button>
                        </CardFooter>
                      </Card>

                      <Card className="overflow-hidden rounded-3xl border-2 hover:border-primary/50 transition-all duration-300">
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <Badge className="rounded-xl bg-red-500">Advanced</Badge>
                            <Award className="h-5 w-5 text-amber-500" />
                          </div>
                          <CardTitle className="mt-2">Motion Graphics & Animation</CardTitle>
                          <CardDescription>Create professional motion graphics and animations</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span>10 courses • 30 hours</span>
                              <span>4.7 ★</span>
                            </div>
                            <Progress value={0} className="h-2 rounded-xl" />
                            <p className="text-xs text-muted-foreground">Not started</p>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button variant="secondary" className="w-full rounded-2xl">
                            Start Learning
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </section>
                </TabsContent>
              </motion.div>
            </AnimatePresence>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

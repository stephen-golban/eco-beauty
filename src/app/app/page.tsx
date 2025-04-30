import Link from "next/link";

import { PlusCircle, FileText, Download, Star, Clock, MoreVertical } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function MainPage() {
  return (
    <>
      {/* Welcome Section */}
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, John Doe 👋</h1>
          <p className="text-muted-foreground mt-2">Here&apos;s what&apos;s happening with your resumes</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Import Resume</Button>
          <Button className="flex items-center gap-2" asChild>
            <Link href="/app/editor">
              <PlusCircle className="h-4 w-4" />
              Create New Resume
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Resumes</CardTitle>
            <FileText className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-muted-foreground text-xs">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Downloads</CardTitle>
            <Download className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-muted-foreground text-xs">+5 this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
            <Star className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">120</div>
            <p className="text-muted-foreground text-xs">+42% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Applications</CardTitle>
            <Clock className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-muted-foreground text-xs">Applications in progress</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Resumes */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Recent Resumes</CardTitle>
            <CardDescription>Your recently edited resumes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: "Software Engineer Resume",
                  company: "Tech Corp Application",
                  progress: 85,
                  lastEdit: "2 hours ago",
                },
                {
                  title: "Product Manager Resume",
                  company: "Product Co",
                  progress: 92,
                  lastEdit: "1 day ago",
                },
                {
                  title: "UX Designer Resume",
                  company: "Design Agency",
                  progress: 68,
                  lastEdit: "3 days ago",
                },
              ].map((resume, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{resume.title}</p>
                        <p className="text-muted-foreground text-sm">{resume.company}</p>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Download</DropdownMenuItem>
                          <DropdownMenuItem>Share</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className="space-y-1">
                      <Progress value={resume.progress} />
                      <p className="text-muted-foreground text-xs">Last edited {resume.lastEdit}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Activity Feed */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your resume-related activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  action: "Resume Viewed",
                  description: "Your Software Engineer resume was viewed by Tech Corp",
                  time: "2 hours ago",
                },
                {
                  action: "Download",
                  description: "You downloaded Product Manager resume as PDF",
                  time: "5 hours ago",
                },
                {
                  action: "Update",
                  description: "Updated skills section in UX Designer resume",
                  time: "1 day ago",
                },
                {
                  action: "Share",
                  description: "Shared Software Engineer resume via link",
                  time: "2 days ago",
                },
              ].map((activity, index) => (
                <div key={index} className="hover:bg-muted/50 flex items-start gap-4 rounded-lg p-3">
                  <div className="flex-1">
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-muted-foreground text-sm">{activity.description}</p>
                    <p className="text-muted-foreground mt-1 text-xs">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

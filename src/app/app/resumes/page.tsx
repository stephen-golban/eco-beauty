"use client";

import { useState } from "react";

import { Search, Plus, MoreVertical, FileEdit, Copy, Download, Trash2, FileText, Calendar } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";

// Temporary mock data - replace with actual data fetching
const mockResumes = [
  {
    id: 1,
    title: "Software Engineer Resume",
    lastModified: "2024-03-20",
    template: "Professional",
    status: "Complete",
  },
  {
    id: 2,
    title: "Full Stack Developer Resume",
    lastModified: "2024-03-18",
    template: "Modern",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Senior Developer Resume",
    lastModified: "2024-03-15",
    template: "Executive",
    status: "Complete",
  },
  {
    id: 4,
    title: "Frontend Developer Resume",
    lastModified: "2024-03-10",
    template: "Creative",
    status: "Draft",
  },
];

export default function ResumesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResumes = mockResumes.filter((resume) =>
    resume.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "complete":
        return "bg-green-500/10 text-green-700 dark:text-green-500";
      case "in progress":
        return "bg-blue-500/10 text-blue-700 dark:text-blue-500";
      case "draft":
        return "bg-orange-500/10 text-orange-700 dark:text-orange-500";
      default:
        return "bg-gray-500/10 text-gray-700 dark:text-gray-500";
    }
  };

  return (
    <>
      {/* Header Section */}
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Resumes</h1>
          <p className="text-muted-foreground mt-2">Create, edit and manage your resumes</p>
        </div>
        <Button size="lg" className="h-12 px-6">
          <Plus className="mr-2 h-5 w-5" />
          Create New Resume
        </Button>
      </div>

      {/* Search Section */}
      <div className="mb-8">
        <div className="relative max-w-2xl">
          <Search className="text-muted-foreground absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 transform" />
          <Input
            placeholder="Search resumes..."
            className="py-6 pl-12 text-base"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Resumes Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredResumes.map((resume) => (
          <div
            key={resume.id}
            className="group hover:border-primary/50 bg-card rounded-xl border p-6 transition-colors"
          >
            <div className="mb-6 flex items-start justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <FileText className="text-muted-foreground h-5 w-5" />
                  <h3 className="truncate text-lg font-semibold">{resume.title}</h3>
                </div>
                <div className="text-muted-foreground flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>Modified {formatDate(resume.lastModified)}</span>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <MoreVertical className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem>
                    <FileEdit className="mr-2 h-4 w-4" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Copy className="mr-2 h-4 w-4" />
                    Duplicate
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-sm">Template: {resume.template}</span>
                <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${getStatusColor(resume.status)}`}>
                  {resume.status}
                </span>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="h-10 flex-1" onClick={() => {}}>
                  Preview
                </Button>
                <Button className="h-10 flex-1" onClick={() => {}}>
                  Edit
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredResumes.length === 0 && (
        <div className="rounded-xl border py-16 text-center">
          <div className="mx-auto max-w-md space-y-4">
            <p className="text-muted-foreground text-lg">No resumes found. Start by creating your first resume!</p>
            <Button size="lg" className="h-12 px-6">
              <Plus className="mr-2 h-5 w-5" />
              Create New Resume
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

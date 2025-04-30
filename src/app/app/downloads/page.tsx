"use client";

import { useState } from "react";

import { Search, Download, Share2, FileText, File, Trash2, Calendar, Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Temporary mock data - replace with actual data fetching
const mockDownloads = [
  {
    id: 1,
    resumeName: "Software Engineer Resume",
    fileName: "software-engineer-resume.pdf",
    format: "PDF",
    downloadDate: "2024-03-20T10:30:00",
    fileSize: "245 KB",
    template: "Professional",
  },
  {
    id: 2,
    resumeName: "Full Stack Developer Resume",
    fileName: "full-stack-dev-resume.docx",
    format: "DOCX",
    downloadDate: "2024-03-18T15:45:00",
    fileSize: "180 KB",
    template: "Modern",
  },
  {
    id: 3,
    resumeName: "Software Engineer Resume",
    fileName: "software-engineer-resume.pdf",
    format: "PDF",
    downloadDate: "2024-03-15T09:20:00",
    fileSize: "242 KB",
    template: "Professional",
  },
  {
    id: 4,
    resumeName: "Technical Lead Resume",
    fileName: "tech-lead-resume.pdf",
    format: "PDF",
    downloadDate: "2024-03-10T14:15:00",
    fileSize: "268 KB",
    template: "Executive",
  },
];

export default function DownloadsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDownloads = mockDownloads.filter((download) =>
    download.resumeName.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      {/* Header Section */}
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Downloads</h1>
          <p className="text-muted-foreground mt-2">Access and manage your downloaded resumes</p>
        </div>
      </div>

      {/* Search Section */}
      <div className="mb-8">
        <div className="relative max-w-2xl">
          <Search className="text-muted-foreground absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 transform" />
          <Input
            placeholder="Search downloads..."
            className="h-11 pl-12 text-base"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Downloads Table */}
      <div className="rounded-xl border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-[300px] py-6">Resume Name</TableHead>
              <TableHead className="w-[100px]">Format</TableHead>
              <TableHead className="w-[150px]">Template</TableHead>
              <TableHead className="w-[180px]">Date</TableHead>
              <TableHead className="w-[120px]">Time</TableHead>
              <TableHead className="w-[100px]">Size</TableHead>
              <TableHead className="w-[150px] text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDownloads.map((download) => (
              <TableRow key={download.id} className="hover:bg-muted/30">
                <TableCell className="py-6 font-medium">
                  <div className="flex items-center gap-3">
                    <FileText className="text-muted-foreground h-5 w-5" />
                    {download.resumeName}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="px-3 py-1">
                    {download.format}
                  </Badge>
                </TableCell>
                <TableCell className="font-medium">{download.template}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Calendar className="text-muted-foreground h-4 w-4" />
                    {formatDate(download.downloadDate)}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Clock className="text-muted-foreground h-4 w-4" />
                    {formatTime(download.downloadDate)}
                  </div>
                </TableCell>
                <TableCell>{download.fileSize}</TableCell>
                <TableCell>
                  <div className="flex items-center justify-end gap-3">
                    <Button variant="ghost" size="icon" className="h-9 w-9">
                      <Download className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-9 w-9">
                      <Share2 className="h-5 w-5" />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-9 w-9">
                          <File className="h-5 w-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem>
                          <Download className="mr-2 h-4 w-4" />
                          Download as PDF
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="mr-2 h-4 w-4" />
                          Download as DOCX
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Empty State */}
        {filteredDownloads.length === 0 && (
          <div className="rounded-xl border py-16 text-center">
            <div className="mx-auto max-w-md space-y-4">
              <p className="text-muted-foreground text-lg">No downloads found. Try adjusting your search.</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

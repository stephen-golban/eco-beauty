"use client";

import { usePreviewStore } from "../store/preview-store";

import { Eye, EyeOff, Redo2, RefreshCcw, Undo2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function TopNavigation() {
  const { isPreviewVisible, togglePreview } = usePreviewStore();

  return (
    <div className="bg-background border-b">
      <div className="flex h-12 items-center">
        {/* Center - Editor Controls */}
        <div className="flex items-center">
          <div className="flex items-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-12" disabled>
                  <Undo2 className="h-4 w-4" />
                  <span className="sr-only">Undo</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Undo (⌘Z)</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-12" disabled>
                  <Redo2 className="h-4 w-4" />
                  <span className="sr-only">Redo</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Redo (⌘⇧Z)</TooltipContent>
            </Tooltip>
          </div>

          <div className="bg-border mx-1 h-4 w-px md:mx-4" />

          <Tooltip>
            <TooltipTrigger>
              <Button asChild variant="ghost">
                <div className="text-muted-foreground flex items-center gap-1 text-xs sm:text-sm">
                  <RefreshCcw className="h-2 w-2 md:h-3 md:w-3" />
                  <span className="hidden sm:inline">Last saved </span>
                  <span>6 min ago</span>
                </div>
              </Button>
            </TooltipTrigger>
            <TooltipContent>All changes are saved automatically</TooltipContent>
          </Tooltip>
        </div>

        {/* Right side - View Controls */}
        <div className="ml-auto flex items-center">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="sm" onClick={togglePreview} className="hidden px-4 sm:flex">
                {isPreviewVisible ? <EyeOff className="mr-2 h-4 w-4" /> : <Eye className="mr-2 h-4 w-4" />}
                Toggle Preview
              </Button>
            </TooltipTrigger>
            <TooltipContent>{isPreviewVisible ? "Hide preview" : "Show preview"}</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" onClick={togglePreview} className="sm:hidden">
                {isPreviewVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </TooltipTrigger>
            <TooltipContent>{isPreviewVisible ? "Hide preview" : "Show preview"}</TooltipContent>
          </Tooltip>

          <div className="bg-border mx-4 mr-2 h-4 w-px md:mr-4" />

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="default" size="sm">
                Save
              </Button>
            </TooltipTrigger>
            <TooltipContent>Save changes (⌘S)</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

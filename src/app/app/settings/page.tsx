"use client";

import { useState } from "react";

import { Bell, Moon, Sun, Laptop, Lock, CreditCard, UserCog, Trash2 } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Settings {
  theme: string;
  language: string;
  notifications: {
    email: boolean;
    push: boolean;
    updates: boolean;
    marketing: boolean;
  };
  privacy: {
    profileVisibility: string;
    showEmail: boolean;
    showLocation: boolean;
  };
}

// Mock settings data - replace with actual data fetching
const mockSettings: Settings = {
  theme: "system",
  language: "en",
  notifications: {
    email: true,
    push: true,
    updates: false,
    marketing: false,
  },
  privacy: {
    profileVisibility: "public",
    showEmail: false,
    showLocation: true,
  },
};

export default function SettingsPage() {
  const [settings, setSettings] = useState<Settings>(mockSettings);

  return (
    <>
      {/* Header Section */}
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground mt-2">Manage your application settings and preferences</p>
        </div>
        <Button size="lg" className="h-11">
          Save Changes
        </Button>
      </div>

      {/* Settings Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-8">
          {/* Appearance */}
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>Customize how Resume Builder looks on your device</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Theme</Label>
                <div className="flex items-center gap-4">
                  <Select defaultValue={settings.theme}>
                    <SelectTrigger className="h-11 w-[180px]">
                      <SelectValue placeholder="Select theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">
                        <div className="flex items-center gap-2">
                          <Sun className="h-4 w-4" />
                          <span>Light</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="dark">
                        <div className="flex items-center gap-2">
                          <Moon className="h-4 w-4" />
                          <span>Dark</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="system">
                        <div className="flex items-center gap-2">
                          <Laptop className="h-4 w-4" />
                          <span>System</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Language</Label>
                <div className="flex items-center gap-4">
                  <Select defaultValue={settings.language}>
                    <SelectTrigger className="h-11 w-[180px]">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Español</SelectItem>
                      <SelectItem value="fr">Français</SelectItem>
                      <SelectItem value="de">Deutsch</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Privacy */}
          <Card>
            <CardHeader>
              <CardTitle>Privacy</CardTitle>
              <CardDescription>Control your privacy settings and data sharing preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Profile Visibility</Label>
                    <p className="text-muted-foreground text-sm">Choose who can see your profile</p>
                  </div>
                  <Select defaultValue={settings.privacy.profileVisibility}>
                    <SelectTrigger className="h-11 w-[120px]">
                      <SelectValue placeholder="Select visibility" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Public</SelectItem>
                      <SelectItem value="private">Private</SelectItem>
                      <SelectItem value="contacts">Contacts</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Show Email Address</Label>
                    <p className="text-muted-foreground text-sm">Display your email on your public profile</p>
                  </div>
                  <Switch
                    checked={settings.privacy.showEmail}
                    onCheckedChange={(checked: boolean) =>
                      setSettings({
                        ...settings,
                        privacy: { ...settings.privacy, showEmail: checked },
                      })
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Show Location</Label>
                    <p className="text-muted-foreground text-sm">Display your location on your public profile</p>
                  </div>
                  <Switch
                    checked={settings.privacy.showLocation}
                    onCheckedChange={(checked: boolean) =>
                      setSettings({
                        ...settings,
                        privacy: {
                          ...settings.privacy,
                          showLocation: checked,
                        },
                      })
                    }
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          {/* Notifications */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                <CardTitle>Notifications</CardTitle>
              </div>
              <CardDescription>Choose what notifications you want to receive</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="email-notifications">Email Notifications</Label>
                  <Switch
                    id="email-notifications"
                    checked={settings.notifications.email}
                    onCheckedChange={(checked: boolean) =>
                      setSettings({
                        ...settings,
                        notifications: {
                          ...settings.notifications,
                          email: checked,
                        },
                      })
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="push-notifications">Push Notifications</Label>
                  <Switch
                    id="push-notifications"
                    checked={settings.notifications.push}
                    onCheckedChange={(checked: boolean) =>
                      setSettings({
                        ...settings,
                        notifications: {
                          ...settings.notifications,
                          push: checked,
                        },
                      })
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="update-notifications">Product Updates</Label>
                  <Switch
                    id="update-notifications"
                    checked={settings.notifications.updates}
                    onCheckedChange={(checked: boolean) =>
                      setSettings({
                        ...settings,
                        notifications: {
                          ...settings.notifications,
                          updates: checked,
                        },
                      })
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="marketing-notifications">Marketing</Label>
                  <Switch
                    id="marketing-notifications"
                    checked={settings.notifications.marketing}
                    onCheckedChange={(checked: boolean) =>
                      setSettings({
                        ...settings,
                        notifications: {
                          ...settings.notifications,
                          marketing: checked,
                        },
                      })
                    }
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Account Actions */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <UserCog className="h-5 w-5" />
                <CardTitle>Account</CardTitle>
              </div>
              <CardDescription>Manage your account settings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button variant="outline" className="flex h-11 w-full items-center gap-2">
                  <Lock className="h-5 w-5" />
                  Change Password
                </Button>
                <Button variant="outline" className="flex h-11 w-full items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Billing Settings
                </Button>
                <Button variant="destructive" className="flex h-11 w-full items-center gap-2">
                  <Trash2 className="h-5 w-5" />
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

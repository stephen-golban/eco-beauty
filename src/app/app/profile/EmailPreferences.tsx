import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function EmailPreferences() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Email Notifications</CardTitle>
        <CardDescription>
          Choose what updates you want to receive
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="resume-updates" className="rounded" />
            <label htmlFor="resume-updates">Resume updates and tips</label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="new-features" className="rounded" />
            <label htmlFor="new-features">New features and updates</label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="marketing" className="rounded" />
            <label htmlFor="marketing">Marketing communications</label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

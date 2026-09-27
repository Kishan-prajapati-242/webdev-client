import Link from "next/link";
export default function NotFound() {
  return (
    <div id="wd-not-found">
      <h2>Page Not Found</h2>
      <p>
        The requested page could not be found. Please check the URL or return to
        the dashboard.
      </p>
      <Link id="wd-not-found-dashboard-link" href="/dashboard">
        Back to Dashboard
      </Link>
    </div>
  );
}

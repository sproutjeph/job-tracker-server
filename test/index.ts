import path from "path";

const baseUrl = "http://localhost:8000";

export function getRequest(route: string) {
  const fullPath = path.join(baseUrl, route);

  return new Request(fullPath);
}

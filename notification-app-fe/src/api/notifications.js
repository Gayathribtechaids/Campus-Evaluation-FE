import axios from "axios";

const DEFAULT_BASE_URL = "http://4.224.186.213";

function getToken() {
  // Prefer a token stored by the app; fallback to the last provided bearer token if you hardcode it.
  // If you have a specific localStorage/sessionStorage key, update this.
  const fromStorage = localStorage.getItem("accessToken") || sessionStorage.getItem("accessToken");
  return fromStorage || "";
}

export async function fetchNotifications({ page = 1, filter } = {}) {
  const baseUrl = import.meta.env.VITE_API_BASE_URL || DEFAULT_BASE_URL;
  const endpoint = import.meta.env.VITE_NOTIFICATIONS_ENDPOINT || "/evaluation-service/notifications";
  const token = getToken();

  const url = `${baseUrl}${endpoint}`;

  const res = await axios.get(url, {
    params: { page, filter },
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
  });

  // Expecting either: { notifications, totalPages, total } OR { data: { ... } }
  return res.data;
}


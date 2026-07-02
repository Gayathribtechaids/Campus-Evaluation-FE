import { useEffect, useState } from "react";
import { fetchNotifications } from "../api/notifications";

export function useNotifications({ page = 1, filter } = {}) {
  const [notifications, setNotifications] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchNotifications({ page, filter });
        if (cancelled) return;

        const items = data?.notifications ?? data?.data?.notifications ?? [];
        setNotifications(items);
        setTotal(data?.total ?? 0);
        setTotalPages(data?.totalPages ?? 1);
      } catch (e) {
        if (cancelled) return;
        setError(e?.message ?? String(e));
      } finally {
        if (cancelled) return;
        setLoading(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [page, filter]);

  return { notifications, total, totalPages, loading, error };
}


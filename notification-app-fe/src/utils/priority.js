const priorityWeight = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export function getPriorityNotifications(notifications, limit = 10) {
  return notifications
    .filter((n) => !n.isRead)
    .sort((a, b) => {
      const weightDiff =
        (priorityWeight[b.category] || 0) - (priorityWeight[a.category] || 0);

      if (weightDiff !== 0) return weightDiff;

      return new Date(b.createdAt) - new Date(a.createdAt);
    })
    .slice(0, limit);
}
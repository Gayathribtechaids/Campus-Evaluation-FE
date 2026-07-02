import { Box, Paper, Stack, Typography } from "@mui/material";

export function NotificationCard({ notification }) {
  const title = notification?.title ?? "Notification";
  const message = notification?.message ?? "";
  const createdAt = notification?.createdAt ?? notification?.timestamp;

  return (
    <Paper elevation={0} variant="outlined" sx={{ p: 2 }}>
      <Stack spacing={0.5}>
        <Typography variant="subtitle1" fontWeight={700}>
          {title}
        </Typography>
        {message ? (
          <Typography variant="body2" color="text.secondary">
            {message}
          </Typography>
        ) : null}
        {createdAt ? (
          <Typography variant="caption" color="text.secondary">
            {typeof createdAt === "string" ? createdAt : new Date(createdAt).toISOString()}
          </Typography>
        ) : null}
      </Stack>
    </Paper>
  );
}


import express, { type Request, Response, NextFunction } from "express";
import { createServer } from "http";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";

const app = express();
const httpServer = createServer(app);

/* ─────────────────────────────────────────────── */
/* Extend IncomingMessage to store rawBody         */
/* ─────────────────────────────────────────────── */
declare module "http" {
  interface IncomingMessage {
    rawBody?: Buffer;
  }
}

/* ─────────────────────────────────────────────── */
/* Middleware                                      */
/* ─────────────────────────────────────────────── */
app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  }),
);

app.use(express.urlencoded({ extended: false }));

/* ─────────────────────────────────────────────── */
/* Logger Utility                                  */
/* ─────────────────────────────────────────────── */
export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

/* ─────────────────────────────────────────────── */
/* Request Logging                                 */
/* ─────────────────────────────────────────────── */
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: unknown;

  const originalJson = res.json.bind(res);
  res.json = (body: any) => {
    capturedJsonResponse = body;
    return originalJson(body);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      log(logLine);
    }
  });

  next();
});

/* ─────────────────────────────────────────────── */
/* App Bootstrap                                   */
/* ─────────────────────────────────────────────── */
(async () => {
  await registerRoutes(httpServer, app);

  /* Global Error Handler */
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
  });

  /* Production / Development setup */
  if (process.env.NODE_ENV === "production") {
    serveStatic(app);
  } else {
    const { setupVite } = await import("./vite");
    await setupVite(httpServer, app);
  }

  /* ───────────────────────────────────────────── */
  /* Start Server (macOS + Node SAFE)               */
  /* ───────────────────────────────────────────── */
  const port = parseInt(process.env.PORT || "5173", 10);

  httpServer.listen(port, () => {
    log(`🚀 Server running on http://localhost:${port}`);
  });
})();

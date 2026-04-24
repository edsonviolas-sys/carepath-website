import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use("*", cors());

app.post("/api/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !phone || !message) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    // Log the submission (in production this would send an email)
    console.log("Contact form submission:", { name, email, phone, service, message });

    return c.json({ success: true, message: "Message received. We will be in touch shortly." });
  } catch (err) {
    console.error("Contact form error:", err);
    return c.json({ error: "Internal server error" }, 500);
  }
});

app.get("/api/health", (c) => c.json({ status: "ok", service: "Care Path Patient Transport" }));

export default app;

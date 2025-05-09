import "dotenv/config";
import express from "express";
import cors from "cors";
import OpenAI from "openai";

const app = express();
app.use(cors());
app.use(express.json());

// Optional: Keep OpenAI setup here for future use
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  // Use lowercase keys for easier comparison
  const faqResponses = {
    "how do i sell my license?":
      "To sell your license, go to the Licenses section and click 'Sell'.",
    "how to reset password?":
      "Visit the settings page and click on 'Reset Password'.",
    "how can i contact support?":
      "You can contact support via the Help tab or email us at support@gmail.com.",
  };

  const normalized = message.toLowerCase().trim();
  const reply =
    faqResponses[normalized] ||
    "Sorry, I didn't understand that. Please rephrase.";

  res.json({ reply });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// app.post("/api/chat", async (req, res) => {
//   const { message } = req.body;

//   try {
//     const response = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [{ role: "user", content: message }],
//     });

//     const reply = response.choices[0].message.content;
//     res.json({ reply });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error communicating with OpenAI");
//   }
// });

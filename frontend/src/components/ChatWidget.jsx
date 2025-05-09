import React, { useState } from "react";

export default function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const exampleQuestions = [
    "How do I sell my license?",
    "How to reset password?",
    "How can I contact support?",
  ];

  const sendMessage = async (msg) => {
    const userMessage = { sender: "user", text: msg };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const response = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: msg }),
    });

    const data = await response.json();
    const aiMessage = { sender: "ai", text: data.reply };
    setMessages((prev) => [...prev, aiMessage]);
  };

  return (
    <div className="fixed bottom-5 right-5 w-80 bg-white border p-4 rounded-lg shadow-lg">
      <h2 className="font-bold mb-2">Ask SoftSell AI</h2>

      <div className="space-y-1 mb-2 text-sm">
        {exampleQuestions.map((q, idx) => (
          <button
            key={idx}
            className="text-blue-500 underline"
            onClick={() => sendMessage(q)}
          >
            {q}
          </button>
        ))}
      </div>

      <div className="h-40 overflow-y-auto bg-gray-100 p-2 rounded text-sm">
        {messages.map((m, i) => (
          <div
            key={i}
            className={m.sender === "user" ? "text-right" : "text-left"}
          >
            <div className="my-1">
              <span className="inline-block p-2 rounded bg-blue-100">
                {m.text}
              </span>
            </div>
          </div>
        ))}
      </div>

      <form
        className="mt-2 flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          if (input.trim()) sendMessage(input.trim());
        }}
      >
        <input
          type="text"
          className="flex-1 border p-1 rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
        />
        <button type="submit" className="bg-blue-500 text-white px-2 rounded">
          Send
        </button>
      </form>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";

const INITIAL_MESSAGE = {
  role: "model",
  text: "Hello! I’m the Mactus Assistant. How can I help you with our products and automation solutions?",
};

export default function GeminiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isLoading]);

  const sendMessage = async () => {
    const userMessage = input.trim();

    if (!userMessage || isLoading) {
      return;
    }

    const userEntry = {
      role: "user",
      text: userMessage,
    };

    // Keep the previous messages before adding the current question
    const history = messages
      .slice(-6)
      .map((message) => ({
        role: message.role,
        text: message.text,
      }));

    setMessages((current) => [...current, userEntry]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          history,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to receive a response."
        );
      }

      setMessages((current) => [
        ...current,
        {
          role: "model",
          text: data.answer,
        },
      ]);
    } catch (error) {
      console.error("Chat request error:", error);

      setMessages((current) => [
        ...current,
        {
          role: "model",
          text:
            error.message ||
            "Sorry, the chatbot is temporarily unavailable.",
          isError: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-[9999]">
      {isOpen && (
        <div
          className="
            mb-4 flex h-[520px] w-[calc(100vw-2.5rem)]
            max-w-[380px] flex-col overflow-hidden rounded-3xl
            border border-gray-200 bg-white
            shadow-[0_20px_70px_rgba(0,0,0,0.20)]
          "
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-[#e0006e] px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 4v-4z"
                  />
                </svg>
              </div>

              <div>
                <h3 className="text-sm font-bold">
                  Mactus Assistant
                </h3>

                <p className="text-xs text-white/80">
                  Online and ready to help
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full text-xl hover:bg-white/15"
              aria-label="Close chatbot"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto bg-gray-50 p-4">
            {messages.map((message, index) => {
              const isUser = message.role === "user";

              return (
                <div
                  key={`${message.role}-${index}`}
                  className={`flex ${
                    isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`
                      max-w-[85%] whitespace-pre-wrap rounded-2xl
                      px-4 py-3 text-sm leading-relaxed
                      ${
                        isUser
                          ? "rounded-br-md bg-[#e0006e] text-white"
                          : message.isError
                          ? "rounded-bl-md border border-red-200 bg-red-50 text-red-700"
                          : "rounded-bl-md border border-gray-100 bg-white text-gray-700 shadow-sm"
                      }
                    `}
                  >
                    {message.text}
                  </div>
                </div>
              );
            })}

            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:150ms]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:300ms]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Contact fallback */}
          <div className="border-t border-gray-100 bg-white px-4 py-2 text-center">
            <p className="text-[11px] text-gray-400">
              For confirmed information, contact{" "}
              <a
                href="mailto:contact@mactus.in"
                className="font-semibold text-[#e0006e]"
              >
                Mactus Automation
              </a>
            </p>
          </div>

          {/* Input */}
          <div className="flex items-end gap-2 border-t border-gray-100 bg-white p-3">
            <textarea
              value={input}
              onChange={(event) => {
                setInput(event.target.value.slice(0, 1000));
              }}
              onKeyDown={handleKeyDown}
              placeholder="Ask about our products..."
              rows={1}
              disabled={isLoading}
              className="
                max-h-24 min-h-[44px] flex-1 resize-none
                rounded-xl border border-gray-200 px-4 py-3
                text-sm outline-none transition
                placeholder:text-gray-400
                focus:border-[#e0006e]
                disabled:bg-gray-100
              "
            />

            <button
              type="button"
              onClick={sendMessage}
              disabled={!input.trim() || isLoading}
              className="
                flex h-11 w-11 flex-shrink-0 items-center
                justify-center rounded-xl bg-[#e0006e]
                text-white transition
                hover:bg-[#c80062]
                disabled:cursor-not-allowed
                disabled:opacity-40
              "
              aria-label="Send message"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Floating chat button */}
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="
          ml-auto flex h-16 w-16 items-center justify-center
          rounded-full bg-[#e0006e] text-white
          shadow-[0_10px_35px_rgba(224,0,110,0.40)]
          transition duration-300
          hover:-translate-y-1 hover:bg-[#c80062]
        "
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
      >
        {isOpen ? (
          <span className="text-3xl font-light">×</span>
        ) : (
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a10.36 10.36 0 01-4-.77L3 20l1.36-3.63A7.38 7.38 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
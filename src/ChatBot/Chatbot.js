import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { user: true, text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput("");

        try {
            const OPENAI_KEY = process.env.REACT_APP_OPENAI_API_KEY;
            console.log("🧪 Loaded API Key:", OPENAI_KEY?.slice(0, 8) + "****"); // Confirm API key is loaded

            const response = await axios.post(
                "https://api.openai.com/v1/chat/completions",
                {
                    model: "gpt-3.5-turbo",
                    messages: [
                        {
                            role: "system",
                            content: `You are a friendly and intelligent AI assistant embedded in the personal portfolio of Hameed Akinwunmi.

Hameed Akinwunmi is an AI-focused Computer Engineer and Software Developer based in NYC. He holds a Bachelor's and Associate's degree in Computer Engineering Technology from NYC College of Technology. His skills include Python, OpenAI API, Pinecone, Vector Databases, Firebase, Embedded AI with Jetson Nano, RAG systems, and full-stack development with Next.js.

His latest role was as a 7th Grade Math Teacher at Success Academy (Sep 2024 – Jul 2025), where he used student data to create tech-powered lesson plans and tools that improved academic performance.

Before that, he was a Software Engineering Fellow at Headstarter (Jul 2024 – Sep 2024) Hameed is passionate about building AI assistants, embedded systems, and robotics especially his personal AI project “Nova,” which is a custom AI head that can talk.

Answer user questions as if you are his personal assistant. You know about his education, experience, skills, and personal projects.`
                        },
                        {
                            role: "user",
                            content: input
                        }
                    ],
                    temperature: 0.7
                },
                {
                    headers: {
                        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
                        "Content-Type": "application/json"
                    }
                }
            );


            console.log("✅ AI response:", response.data);

            const botReply = response.data.choices[0].message.content.trim();
            setMessages(prev => [...prev, { user: false, text: botReply }]);
        } catch (error) {
            console.error("❌ Error communicating with AI:", error);
            setMessages(prev => [
                ...prev,
                { user: false, text: "Sorry, something went wrong. Please try again later." }
            ]);
        }
    };

    return (
        <div className="chatbot-container">
            <button className="chatbot-toggle" onClick={toggleChat}>💬</button>

            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <span>Ask Me Anything!</span>
                        <button
                            onClick={toggleChat}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'white',
                                fontSize: '18px',
                                cursor: 'pointer'
                            }}
                        >
                            ✖
                        </button>
                    </div>

                    <div className="chatbot-messages">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`chatbot-message ${msg.user ? 'user' : 'bot'}`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    <div className="chatbot-input">
                        <input
                            type="text"
                            placeholder="Ask about my projects..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        />
                        <button onClick={handleSend}>➤</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;



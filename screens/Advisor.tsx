
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleGenAI } from '@google/genai';
import { ChatMessage } from '../types';

const Advisor: React.FC = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I am your Apex AI Advisor. How can I help you with your Porsche 911 GT3 today? I have access to your full service history.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })), { role: 'user', parts: [{ text: userMessage }] }],
        config: {
          systemInstruction: 'You are the Apex Garage AI Advisor. You are an expert automotive technician specializing in high-performance vehicles like Porsche, Ferrari, and Lamborghini. You are professional, helpful, and concise. You have access to the user service history (Porsche 911 GT3, recently had brake fluid flush, annual maintenance, and paint protection). If asked about maintenance, refer to these services.',
          temperature: 0.7,
        }
      });

      const text = response.text || 'I apologize, I am having trouble connecting to my diagnostic systems. Please try again.';
      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (error) {
      console.error('Advisor Error:', error);
      setMessages(prev => [...prev, { role: 'model', text: 'System Error: Lost connection to Apex Cloud. Please check your connectivity.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-[calc(100vh-6rem)] flex-col bg-background-light dark:bg-background-dark overflow-hidden">
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 justify-between border-b border-slate-200 dark:border-slate-800 shrink-0">
        <div onClick={() => navigate(-1)} className="text-slate-900 dark:text-white flex size-10 shrink-0 items-center justify-center cursor-pointer">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-slate-900 dark:text-white text-lg font-bold">Apex AI Advisor</h2>
          <div className="flex items-center gap-1">
            <span className="flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
            <p className="text-[10px] text-green-500 font-bold uppercase tracking-widest">Diagnostic Mode</p>
          </div>
        </div>
        <div className="size-10"></div>
      </div>

      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar"
      >
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-primary text-white rounded-tr-none' 
                : 'bg-white dark:bg-surface-dark text-slate-900 dark:text-slate-200 border border-slate-200 dark:border-slate-800 rounded-tl-none'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white dark:bg-surface-dark p-4 rounded-2xl rounded-tl-none border border-slate-200 dark:border-slate-800">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-background-dark/50 backdrop-blur-md">
        <div className="flex gap-2">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about your car..."
            className="flex-1 bg-white dark:bg-surface-dark border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="size-12 flex items-center justify-center bg-primary text-white rounded-xl active:scale-95 transition-transform disabled:opacity-50"
          >
            <span className="material-symbols-outlined">send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Advisor;

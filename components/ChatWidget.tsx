import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getDesignAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I am the 3L Interio AI Assistant. Ask me about materials (MDF vs Ply), durability, or our factory process!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getDesignAdvice(userMsg);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] bg-dark-surface rounded-sm shadow-2xl overflow-hidden border border-secondary/30 flex flex-col"
            style={{ maxHeight: '500px', height: '500px' }}
          >
            {/* Header */}
            <div className="bg-primary p-4 flex justify-between items-center text-white border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center border border-secondary/50">
                    <Bot className="w-5 h-5 text-secondary" />
                </div>
                <div>
                    <span className="font-bold text-sm block tracking-wide">AI Assistant</span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest">Online</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:text-secondary text-gray-400 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-black/50 space-y-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[85%] p-3 text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-secondary text-primary font-medium rounded-t-lg rounded-bl-lg' 
                        : 'bg-white/10 text-gray-200 border border-white/5 rounded-t-lg rounded-br-lg shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                 <div className="flex justify-start">
                   <div className="bg-white/10 p-3 rounded-lg border border-white/5 shadow-sm">
                     <div className="flex space-x-1">
                       <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                       <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                       <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                     </div>
                   </div>
                 </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 bg-primary border-t border-white/10 flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your question..."
                className="flex-1 bg-white/5 border border-white/10 rounded-sm px-4 py-2 text-sm text-white focus:outline-none focus:border-secondary placeholder-gray-500"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-secondary hover:bg-white hover:text-primary text-primary font-bold p-2 rounded-sm transition-all disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group bg-secondary hover:bg-white text-primary p-4 rounded-full shadow-[0_0_20px_rgba(251,191,36,0.4)] transition-all duration-300 hover:scale-110 flex items-center justify-center border-2 border-transparent hover:border-secondary"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default ChatWidget;
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, Phone, User } from 'lucide-react';

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'bot' | 'user'; text: string }[]>([
    { role: 'bot', text: "Hi! I'm your APS assistant. How can I help you today?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text: string = inputValue) => {
    if (!text.trim()) return;

    setMessages(prev => [...prev, { role: 'user', text }]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      setIsTyping(false);
      let botResponse = "Thanks for your message! One of our team members will confirm your details within 1 hour.";
      
      if (text.toLowerCase().includes('quote')) {
        botResponse = "I can help with that! Could you please provide your property type and the service you're interested in?";
      } else if (text.toLowerCase().includes('emergency')) {
        botResponse = "For emergencies, our 24-hour receptionist is available 24/7 at 020 8123 4567. Would you like me to log a priority callback for you?";
      }

      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    }, 1500);
  };

  const quickReplies = [
    "Get a Quote",
    "Book a Cleaning",
    "Emergency Service",
    "Ask a Question"
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] sm:w-[400px] h-[500px] glass-panel rounded-2xl flex flex-col overflow-hidden border-navy/10"
          >
            {/* Header */}
            <div className="bg-navy p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                  <Bot size={24} className="text-navy" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm">APS Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-[10px] opacity-80 uppercase tracking-wider">Online 24/7</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
              {messages.map((msg, i) => (
                <motion.div
                  initial={{ opacity: 0, x: msg.role === 'bot' ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i}
                  className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'bot' 
                      ? 'bg-white text-navy shadow-sm rounded-tl-none border border-navy/5' 
                      : 'bg-gold text-navy font-medium rounded-tr-none shadow-sm'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-navy/5 flex gap-1">
                    <span className="w-1.5 h-1.5 bg-navy/20 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-navy/20 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-navy/20 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="p-4 pt-0 bg-slate-50/50 flex flex-wrap gap-2">
                {quickReplies.map((reply, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(reply)}
                    className="text-xs bg-white border border-navy/10 py-1.5 px-3 rounded-full hover:border-gold hover:text-gold transition-all shadow-sm"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-4 bg-white border-t border-navy/5 flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 bg-slate-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-gold outline-none"
              />
              <button
                onClick={() => handleSend()}
                className="bg-navy text-white p-2 rounded-full hover:bg-navy/90 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gold text-navy p-4 rounded-full shadow-2xl flex items-center justify-center relative group"
      >
        <div className="absolute -top-2 -right-2 bg-navy text-white text-[10px] px-2 py-0.5 rounded-full font-bold animate-bounce">
          ONLINE 24/7
        </div>
        {isOpen ? <X size={28} /> : <MessageSquare size={28} className="group-hover:rotate-12 transition-transform" />}
      </motion.button>
    </div>
  );
};

import React, { useState } from 'react';
import { Heart, Star, Sparkles } from 'lucide-react';

export default function MessageJar() {
  const [messages, setMessages] = useState([
    { id: 1, text: "You're awesome!", icon: 'heart' },
    { id: 2, text: "Keep up the great work!", icon: 'star' },
    { id: 3, text: "Thanks for streaming!", icon: 'sparkles' }
  ]);
  const [currentMessage, setCurrentMessage] = useState(null);

  const getIcon = (iconType) => {
    switch(iconType) {
      case 'heart': return <Heart className="w-4 h-4" />;
      case 'star': return <Star className="w-4 h-4" />;
      case 'sparkles': return <Sparkles className="w-4 h-4" />;
      default: return <Heart className="w-4 h-4" />;
    }
  };

  const drawMessage = () => {
    if (messages.length === 0) return;
    const randomIndex = Math.floor(Math.random() * messages.length);
    setCurrentMessage(messages[randomIndex]);
  };

  const closeMessage = () => {
    setCurrentMessage(null);
  };

  return (
    <div className="w-full h-screen bg-transparent flex items-center justify-center p-8">
      {/* Message Jar */}
      <div className="relative">
        {/* Jar Lid */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gradient-to-b from-amber-700 to-amber-800 rounded-t-lg border-2 border-amber-900 shadow-lg z-10"></div>
        
        {/* Jar Body */}
        <div className="relative w-64 h-80 bg-gradient-to-b from-blue-100/40 to-blue-200/40 backdrop-blur-sm rounded-3xl border-4 border-blue-300/60 shadow-2xl overflow-hidden">
          {/* Glass shine effect */}
          <div className="absolute top-0 left-4 w-16 h-full bg-gradient-to-r from-white/30 to-transparent pointer-events-none"></div>
          
          {/* Messages inside jar */}
          <div className="absolute inset-6 flex flex-col gap-2 items-center justify-center">
            {messages.slice(0, 5).map((msg, idx) => (
              <div 
                key={msg.id}
                className="bg-gradient-to-br from-pink-200 to-purple-200 px-3 py-2 rounded-lg text-xs font-medium text-purple-900 shadow-md transform rotate-3 hover:rotate-0 transition-transform cursor-pointer"
                style={{ 
                  transform: `rotate(${(idx % 2 === 0 ? 1 : -1) * (idx * 3)}deg)`,
                  marginLeft: `${(idx % 2 === 0 ? 1 : -1) * (idx * 5)}px`
                }}
              >
                {msg.text.length > 20 ? msg.text.substring(0, 20) + '...' : msg.text}
              </div>
            ))}
          </div>

          {/* Label on jar */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/80 px-4 py-2 rounded-lg border-2 border-amber-600">
            <p className="text-sm font-bold text-amber-800">Messages</p>
          </div>
        </div>

        {/* Draw Button */}
        <button
          onClick={drawMessage}
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95"
        >
          Draw a Message
        </button>
      </div>

      {/* Message Display Modal */}
      {currentMessage && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl shadow-2xl max-w-md mx-4 border-4 border-purple-300 transform animate-bounce">
            <div className="flex items-center justify-center mb-4">
              <div className="text-pink-500">
                {getIcon(currentMessage.icon)}
              </div>
            </div>
            <p className="text-xl font-semibold text-purple-900 text-center mb-6">
              {currentMessage.text}
            </p>
            <button
              onClick={closeMessage}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-2 px-4 rounded-lg transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="fixed bottom-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs border-2 border-purple-200">
        <h3 className="font-bold text-purple-900 mb-2">How to use:</h3>
        <ol className="text-sm text-gray-700 space-y-1">
          <li>1. Add as Browser Source in OBS</li>
          <li>2. Set width: 1920, height: 1080</li>
          <li>3. Replace sample messages with your database data</li>
          <li>4. Use "Draw a Message" to display messages</li>
        </ol>
      </div>
    </div>
  );
}
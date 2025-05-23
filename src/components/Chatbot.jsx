import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  return (
    <div className="chatbox relative font-[Poppins] px-1 py-2">
      <div className="chat-messages" style={{ height: '300px', overflowY: 'auto' }}>
        <h1>Hello! ... welcome to Money Mentor AI - assist </h1>
        {messages.map((msg, i) => (
          <div key={i} style={{ margin: '5px 0' }}>
            <strong>{msg.role === 'user' ? 'You' : 'Bot'}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <input
      className='fixed bottom-12 py-2 w-[350px] px-2 bg-slate-200 rounded-2xl right-10 outline-none'
        type="text"
        value={input}
        placeholder="Ask something..."
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
      />

    <i class="fa-solid fa-arrow-up-from-bracket fixed bottom-15 right-15" 
      onClick={sendMessage} />
    </div>
  );
};

export default Chatbot;

import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [...messages, userMessage],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `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`, // replace this
          },
        }
      );

      const botMessage = response.data.choices[0].message;
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

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

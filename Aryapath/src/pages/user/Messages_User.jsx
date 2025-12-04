// /src/pages/user/Messages_User.jsx
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  MoreVertical,
  Phone,
  Video,
  Info,
  Send,
  Paperclip,
  Smile,
  Clock,
  CheckCheck
} from 'lucide-react';

const Messages_User = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [messageInput, setMessageInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const messagesEndRef = useRef(null);

  // Mock data for booked guides/chats
  const chats = [
    {
      id: 1,
      guide: {
        id: 1,
        name: 'Rajesh Kumar',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
        location: 'Rajasthan',
        specialty: 'Heritage & Culture',
        isOnline: true,
        lastSeen: '2 min ago'
      },
      booking: {
        id: 'BK001',
        tripName: 'Rajasthan Royal Heritage Tour',
        date: '2024-12-15',
        status: 'confirmed'
      },
      lastMessage: {
        text: 'Looking forward to showing you the Amber Fort tomorrow!',
        time: '2:30 PM',
        isRead: true,
        sender: 'guide'
      },
      unreadCount: 0,
      messages: [
        {
          id: 1,
          text: 'Hello! I\'m Rajesh, your guide for the Rajasthan tour. Looking forward to our adventure!',
          time: '10:30 AM',
          sender: 'guide',
          isRead: true
        },
        {
          id: 2,
          text: 'Hi Rajesh! Excited to explore Rajasthan with you. Any special preparations needed?',
          time: '10:32 AM',
          sender: 'user',
          isRead: true
        },
        {
          id: 3,
          text: 'Just bring comfortable walking shoes and a camera. The weather should be pleasant.',
          time: '10:35 AM',
          sender: 'guide',
          isRead: true
        },
        {
          id: 4,
          text: 'Perfect! I\'ll make sure to carry them. What time should we start tomorrow?',
          time: '10:40 AM',
          sender: 'user',
          isRead: true
        },
        {
          id: 5,
          text: 'Let\'s meet at 9 AM at the hotel lobby. We\'ll start with Amber Fort.',
          time: '10:42 AM',
          sender: 'guide',
          isRead: true
        },
        {
          id: 6,
          text: 'Looking forward to showing you the Amber Fort tomorrow!',
          time: '2:30 PM',
          sender: 'guide',
          isRead: true
        }
      ]
    },
    {
      id: 2,
      guide: {
        id: 2,
        name: 'Priya Nair',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
        location: 'Kerala',
        specialty: 'Wellness & Nature',
        isOnline: false,
        lastSeen: '1 hour ago'
      },
      booking: {
        id: 'BK002',
        tripName: 'Kerala Backwaters Retreat',
        date: '2024-12-22',
        status: 'confirmed'
      },
      lastMessage: {
        text: 'The houseboat is confirmed for next week. Get ready for a relaxing experience!',
        time: 'Yesterday',
        isRead: true,
        sender: 'guide'
      },
      unreadCount: 0,
      messages: [
        {
          id: 1,
          text: 'Welcome to Kerala! I\'ve arranged a beautiful houseboat for our backwater tour.',
          time: '3:15 PM',
          sender: 'guide',
          isRead: true
        },
        {
          id: 2,
          text: 'That sounds amazing! What should I pack for the houseboat stay?',
          time: '3:20 PM',
          sender: 'user',
          isRead: true
        },
        {
          id: 3,
          text: 'Light cotton clothes, sunscreen, and mosquito repellent. The houseboat has all amenities.',
          time: '3:25 PM',
          sender: 'guide',
          isRead: true
        }
      ]
    },
    {
      id: 3,
      guide: {
        id: 3,
        name: 'Vikram Singh',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
        location: 'Himachal Pradesh',
        specialty: 'Adventure',
        isOnline: true,
        lastSeen: 'online'
      },
      booking: {
        id: 'BK003',
        tripName: 'Himalayan Trek Expedition',
        date: '2024-12-30',
        status: 'pending'
      },
      lastMessage: {
        text: 'I need to confirm your fitness level for the trek. Can we discuss this?',
        time: '10:15 AM',
        isRead: false,
        sender: 'guide'
      },
      unreadCount: 2,
      messages: [
        {
          id: 1,
          text: 'Hi! I\'m Vikram, your adventure guide for the Himalayan trek.',
          time: '9:00 AM',
          sender: 'guide',
          isRead: true
        },
        {
          id: 2,
          text: 'Hello Vikram! I\'m really excited about the trek.',
          time: '9:05 AM',
          sender: 'user',
          isRead: true
        },
        {
          id: 3,
          text: 'I need to confirm your fitness level for the trek. Can we discuss this?',
          time: '10:15 AM',
          sender: 'guide',
          isRead: false
        }
      ]
    }
  ];

  // Filter chats based on search
  const filteredChats = chats.filter(chat =>
    chat.guide.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    chat.booking.tripName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [selectedChat?.messages]);

  const sendMessage = () => {
    if (!messageInput.trim() || !selectedChat) return;

    const newMessage = {
      id: selectedChat.messages.length + 1,
      text: messageInput,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      sender: 'user',
      isRead: false
    };

    const updatedChats = chats.map(chat =>
      chat.id === selectedChat.id
        ? {
            ...chat,
            messages: [...chat.messages, newMessage],
            lastMessage: {
              text: messageInput,
              time: 'Just now',
              isRead: false,
              sender: 'user'
            }
          }
        : chat
    );

    setSelectedChat(updatedChats.find(chat => chat.id === selectedChat.id));
    setMessageInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (timeString) => {
    if (timeString === 'Just now') return timeString;
    return timeString;
  };

  return (
    <div className="flex h-[calc(100vh-12rem)] bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl overflow-hidden">
      {/* Sidebar - Chat List */}
      <div className="w-full md:w-96 border-r border-[var(--border-color)] flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-[var(--border-color)]">
          <h2 className="text-xl font-bold text-[var(--text-color)] mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[var(--muted-color)]" />
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent text-[var(--text-color)] placeholder-[var(--muted-color)]"
            />
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {filteredChats.map((chat) => (
            <motion.div
              key={chat.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`p-4 border-b border-[var(--border-color)] cursor-pointer hover:bg-[var(--accent-fade)] transition-colors ${
                selectedChat?.id === chat.id ? 'bg-[var(--accent-fade)]' : ''
              }`}
              onClick={() => setSelectedChat(chat)}
            >
              <div className="flex items-start space-x-3">
                <div className="relative">
                  <img
                    src={chat.guide.image}
                    alt={chat.guide.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {chat.guide.isOnline && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-[var(--text-color)] truncate">
                      {chat.guide.name}
                    </h3>
                    <span className="text-xs text-[var(--muted-color)]">
                      {chat.lastMessage.time}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-[var(--muted-color)] truncate flex-1 mr-2">
                      {chat.lastMessage.sender === 'guide' ? `${chat.guide.name}: ` : 'You: '}
                      {chat.lastMessage.text}
                    </p>
                    {chat.unreadCount > 0 && (
                      <span className="bg-[var(--accent-color)] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                        {chat.unreadCount}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs text-[var(--accent-color)] bg-[var(--accent-fade)] px-2 py-1 rounded-full">
                      {chat.booking.tripName}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      chat.booking.status === 'confirmed' 
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300'
                        : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300'
                    }`}>
                      {chat.booking.status}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col hidden md:flex">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-[var(--border-color)] flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img
                    src={selectedChat.guide.image}
                    alt={selectedChat.guide.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  {selectedChat.guide.isOnline && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-color)]">
                    {selectedChat.guide.name}
                  </h3>
                  <p className="text-sm text-[var(--muted-color)]">
                    {selectedChat.guide.isOnline ? 'Online' : `Last seen ${selectedChat.guide.lastSeen}`}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 rounded-lg hover:bg-[var(--accent-fade)] transition-colors">
                  <Phone className="h-5 w-5 text-[var(--text-color)]" />
                </button>
                <button className="p-2 rounded-lg hover:bg-[var(--accent-fade)] transition-colors">
                  <Video className="h-5 w-5 text-[var(--text-color)]" />
                </button>
                <button className="p-2 rounded-lg hover:bg-[var(--accent-fade)] transition-colors">
                  <Info className="h-5 w-5 text-[var(--text-color)]" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[var(--bg-color)]">
              {selectedChat.messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-[var(--accent-color)] text-white rounded-br-none'
                        : 'bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-color)] rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <div className={`flex items-center justify-end space-x-1 mt-1 text-xs ${
                      message.sender === 'user' ? 'text-white/70' : 'text-[var(--muted-color)]'
                    }`}>
                      <span>{formatTime(message.time)}</span>
                      {message.sender === 'user' && (
                        message.isRead ? (
                          <CheckCheck className="h-3 w-3" />
                        ) : (
                          <Clock className="h-3 w-3" />
                        )
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-[var(--border-color)]">
              <div className="flex items-center space-x-2">
                <button className="p-2 rounded-lg hover:bg-[var(--accent-fade)] transition-colors">
                  <Paperclip className="h-5 w-5 text-[var(--text-color)]" />
                </button>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="w-full pl-4 pr-12 py-3 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent text-[var(--text-color)] placeholder-[var(--muted-color)]"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1">
                    <Smile className="h-5 w-5 text-[var(--muted-color)]" />
                  </button>
                </div>
                <button
                  onClick={sendMessage}
                  disabled={!messageInput.trim()}
                  className="p-3 bg-[var(--accent-color)] text-white rounded-xl hover:bg-[var(--accent-dark)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </>
        ) : (
          /* Empty State when no chat is selected */
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-[var(--accent-fade)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="h-10 w-10 text-[var(--accent-color)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-color)] mb-2">
                Select a conversation
              </h3>
              <p className="text-[var(--muted-color)]">
                Choose a chat from the list to start messaging
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Mobile View - Only show chat list or chat area */}
      {selectedChat && (
        <div className="md:hidden absolute inset-0 bg-[var(--card-bg)] z-10 flex flex-col">
          {/* Mobile Chat Header */}
          <div className="p-4 border-b border-[var(--border-color)] flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button onClick={() => setSelectedChat(null)} className="p-1">
                <svg className="h-6 w-6 text-[var(--text-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex items-center space-x-3">
                <img
                  src={selectedChat.guide.image}
                  alt={selectedChat.guide.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-[var(--text-color)] text-sm">
                    {selectedChat.guide.name}
                  </h3>
                  <p className="text-xs text-[var(--muted-color)]">
                    {selectedChat.guide.isOnline ? 'Online' : `Last seen ${selectedChat.guide.lastSeen}`}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Rest of the chat area remains same */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[var(--bg-color)]">
            {selectedChat.messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-[var(--accent-color)] text-white rounded-br-none'
                      : 'bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-color)] rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <div className={`flex items-center justify-end space-x-1 mt-1 text-xs ${
                    message.sender === 'user' ? 'text-white/70' : 'text-[var(--muted-color)]'
                  }`}>
                    <span>{formatTime(message.time)}</span>
                    {message.sender === 'user' && (
                      message.isRead ? (
                        <CheckCheck className="h-3 w-3" />
                      ) : (
                        <Clock className="h-3 w-3" />
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-[var(--border-color)]">
            <div className="flex items-center space-x-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full pl-4 pr-12 py-3 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent text-[var(--text-color)] placeholder-[var(--muted-color)]"
                />
              </div>
              <button
                onClick={sendMessage}
                disabled={!messageInput.trim()}
                className="p-3 bg-[var(--accent-color)] text-white rounded-xl hover:bg-[var(--accent-dark)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages_User;
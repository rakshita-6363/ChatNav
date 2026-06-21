// ===== SAMPLE MEDIA =====
const sampleImage1 = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400";
const sampleImage2 = "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400";
const sampleVideo = "https://www.w3schools.com/html/mov_bbb.mp4";
const sampleAudio = "https://www.w3schools.com/html/horse.mp3";
const samplePdf = "https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1.pdf";

// ===== CONTACTS =====
const contacts = [
    { name: 'Rahul', letter: 'R', color: 'purple' },
    { name: 'Priya', letter: 'P', color: 'pink' },
    { name: 'Arjun', letter: 'A', color: 'green' },
    { name: 'Sneha', letter: 'S', color: 'orange' },
    { name: 'Kiran', letter: 'K', color: 'blue' },
    { name: 'Meera', letter: 'M', color: 'red' },
    { name: 'Vikram', letter: 'V', color: 'yellow' },
    { name: 'Divya', letter: 'D', color: 'teal' },
];

// ===== GET FULL TIME =====
function getFullTime() {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = now.toLocaleString('default', { month: 'short' });
    const year = now.getFullYear();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return `${day} ${month} ${year}, ${time}`;
}

// ===== DEMO MESSAGES =====
function getDemoMessages(name) {
    const t = getFullTime();
    return [
        { id: '1_' + name, from: 'me', text: 'Hi!', time: t, type: 'text', mediaUrl: '', starred: false },
        { id: '2_' + name, from: 'them', text: `Hello ${name}! What are you doing? 😊`, time: t, type: 'text', mediaUrl: '', starred: false },
        { id: '3_' + name, from: 'me', text: 'How are you?', time: t, type: 'text', mediaUrl: '', starred: false },
        { id: '4_' + name, from: 'them', text: 'I am doing great! Thanks for asking! 😄', time: t, type: 'text', mediaUrl: '', starred: false },
        { id: '5_' + name, from: 'me', text: 'What are you doing?', time: t, type: 'text', mediaUrl: '', starred: false },
        { id: '6_' + name, from: 'them', text: 'Just chatting with you! 😎', time: t, type: 'text', mediaUrl: '', starred: false },
        { id: '7_' + name, from: 'me', text: 'Send me the image', time: t, type: 'text', mediaUrl: '', starred: false },
        { id: '8_' + name, from: 'them', text: 'Here is the image! Hope you like it! 📷', time: t, type: 'image', mediaUrl: sampleImage1, starred: false },
        { id: '9_' + name, from: 'me', text: 'Send me the video', time: t, type: 'text', mediaUrl: '', starred: false },
        { id: '10_' + name, from: 'them', text: 'Sending the video now! 🎥', time: t, type: 'video', mediaUrl: sampleVideo, starred: false },
        { id: '11_' + name, from: 'me', text: 'Send me the audio', time: t, type: 'text', mediaUrl: '', starred: false },
        { id: '12_' + name, from: 'them', text: 'Here is the audio! 🎵', time: t, type: 'audio', mediaUrl: sampleAudio, starred: false },
        { id: '13_' + name, from: 'me', text: 'Send me the pdf', time: t, type: 'text', mediaUrl: '', starred: false },
        { id: '14_' + name, from: 'them', text: 'Here is the PDF for you! 📄', time: t, type: 'pdf', mediaUrl: samplePdf, starred: false },
        { id: '15_' + name, from: 'me', text: 'Thanks!', time: t, type: 'text', mediaUrl: '', starred: false },
        { id: '16_' + name, from: 'them', text: 'You are welcome! Anytime! 🙏', time: t, type: 'text', mediaUrl: '', starred: false },
    ];
}

// ===== AUTO REPLIES =====
const autoReplies = {
    'hi': { text: 'Hello! How are you doing? 😊', type: 'text', mediaUrl: '' },
    'hello': { text: 'Hey there! Great to hear from you! 👋', type: 'text', mediaUrl: '' },
    'how are you': { text: 'I am doing great! Thanks for asking! 😄', type: 'text', mediaUrl: '' },
    'what are you doing': { text: 'Just chatting with you! 😎', type: 'text', mediaUrl: '' },
    'send me image': { text: 'Here is the image! 📷', type: 'image', mediaUrl: sampleImage1 },
    'send me the image': { text: 'Here is the image! 📷', type: 'image', mediaUrl: sampleImage1 },
    'send me pic': { text: 'Here is the pic! 📷', type: 'image', mediaUrl: sampleImage2 },
    'send me the pic': { text: 'Here is the pic! 📷', type: 'image', mediaUrl: sampleImage2 },
    'send me video': { text: 'Sending the video! 🎥', type: 'video', mediaUrl: sampleVideo },
    'send me the video': { text: 'Sending the video! 🎥', type: 'video', mediaUrl: sampleVideo },
    'send me audio': { text: 'Here is the audio! 🎵', type: 'audio', mediaUrl: sampleAudio },
    'send me the audio': { text: 'Here is the audio! 🎵', type: 'audio', mediaUrl: sampleAudio },
    'send me pdf': { text: 'Here is the PDF! 📄', type: 'pdf', mediaUrl: samplePdf },
    'send me the pdf': { text: 'Here is the PDF! 📄', type: 'pdf', mediaUrl: samplePdf },
    'thanks': { text: 'You are welcome! Anytime! 🙏', type: 'text', mediaUrl: '' },
    'thank you': { text: 'You are welcome! Anytime! 🙏', type: 'text', mediaUrl: '' },
    'ok': { text: 'Alright! 👍', type: 'text', mediaUrl: '' },
    'okay': { text: 'Sure thing! 👍', type: 'text', mediaUrl: '' },
    'bye': { text: 'Goodbye! Take care! 👋', type: 'text', mediaUrl: '' },
    'good morning': { text: 'Good morning! Have a wonderful day! ☀️', type: 'text', mediaUrl: '' },
    'good night': { text: 'Good night! Sweet dreams! 🌙', type: 'text', mediaUrl: '' },
};

// ===== CURRENT CHAT =====
let currentChat = null;
let forwardMsgId = null;

// ===== SPLASH SCREEN =====
window.addEventListener('load', function () {
    const loaderBar = document.querySelector('.loader-bar');
    let width = 0;
    const interval = setInterval(() => {
        width += 2;
        loaderBar.style.width = width + '%';
        if (width >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                document.getElementById('splashScreen').style.display = 'none';
                document.getElementById('mainApp').style.display = 'block';
                loadNotes();
                loadTodos();
            }, 300);
        }
    }, 20);
});

// ===== SHOW CONTACTS SECTION =====
function showContactsSection(section) {
    document.getElementById('chatsPanel').style.display = 'none';
    document.getElementById('notesPanel').style.display = 'none';
    document.getElementById('todoPanel').style.display = 'none';

    document.querySelectorAll('.cnav-btn').forEach(btn => btn.classList.remove('active'));

    if (section === 'chats') {
        document.getElementById('chatsPanel').style.display = 'flex';
        document.querySelectorAll('.cnav-btn')[0].classList.add('active');
    } else if (section === 'notes') {
        document.getElementById('notesPanel').style.display = 'flex';
        document.querySelectorAll('.cnav-btn')[1].classList.add('active');
        loadNotes();
    } else if (section === 'todo') {
        document.getElementById('todoPanel').style.display = 'flex';
        document.querySelectorAll('.cnav-btn')[2].classList.add('active');
        loadTodos();
    }
}

// ===== OPEN CHAT =====
function openChat(name, letter, color) {
    currentChat = name;
    document.getElementById('contactsScreen').style.display = 'none';
    document.getElementById('chatScreen').style.display = 'flex';
    document.getElementById('chatName').textContent = name;
    const avatar = document.getElementById('chatAvatar');
    avatar.textContent = letter;
    avatar.className = 'chat-avatar ' + color;
    loadChatMessages(name);
}

// ===== GO BACK =====
function goBack() {
    document.getElementById('chatScreen').style.display = 'none';
    document.getElementById('contactsScreen').style.display = 'flex';
    currentChat = null;
    clearSearch();
    hideMediaSection();
    hideChatStarred();
}

// ===== LOAD CHAT MESSAGES =====
function loadChatMessages(name) {
    const chatMessages = document.getElementById('chatMessages');
    chatMessages.innerHTML = '';

    // Date divider
    const now = new Date();
    const divider = document.createElement('div');
    divider.className = 'date-divider';
    divider.textContent = now.toLocaleDateString('en-US', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
    chatMessages.appendChild(divider);

    // Load from localStorage or use demo
    let messages = JSON.parse(localStorage.getItem('chat_' + name) || 'null');
    if (!messages) {
        messages = getDemoMessages(name);
        localStorage.setItem('chat_' + name, JSON.stringify(messages));
        // Save demo media to media section
        messages.forEach(msg => {
            if (msg.type !== 'text' && msg.mediaUrl) {
                saveMedia(name, { type: msg.type, url: msg.mediaUrl, name: msg.text, time: msg.time });
            }
        });
    }

    messages.forEach(msg => {
        appendMessage(msg.from, msg.text, msg.time, msg.id, msg.starred || false, false, msg.type || 'text', msg.mediaUrl || '');
    });

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// ===== APPEND MESSAGE =====
function appendMessage(from, text, time, id, starred, scroll, type, mediaUrl) {
    const chatMessages = document.getElementById('chatMessages');
    const msgId = id || 'msg_' + Date.now();

    const msgDiv = document.createElement('div');
    msgDiv.className = 'message ' + (from === 'me' ? 'sent' : 'received');
    msgDiv.id = 'msgel_' + msgId;
    msgDiv.setAttribute('data-id', msgId);
    msgDiv.setAttribute('data-from', from);
    msgDiv.setAttribute('data-time', time);
    msgDiv.setAttribute('data-text', text);
    msgDiv.setAttribute('data-type', type || 'text');
    msgDiv.setAttribute('data-media', mediaUrl || '');

    const isStarred = starred ? 'starred' : '';
    let contentHTML = '';

    if (type === 'image' && mediaUrl) {
        contentHTML = `<img src="${mediaUrl}" class="msg-image" onclick="openMediaViewer('image','${mediaUrl}')" alt="image"/>`;
    } else if (type === 'video' && mediaUrl) {
        contentHTML = `<video src="${mediaUrl}" class="msg-video" controls></video>`;
    } else if (type === 'audio' && mediaUrl) {
        contentHTML = `<audio src="${mediaUrl}" class="msg-audio" controls></audio>`;
    } else if (type === 'pdf' && mediaUrl) {
        contentHTML = `<div class="file-preview" onclick="window.open('${mediaUrl}','_blank')">
            <i class="fa fa-file-pdf" style="color:#ea580c"></i>
            <span>${text}</span>
        </div>`;
    } else if (type === 'doc' && mediaUrl) {
        contentHTML = `<div class="file-preview">
            <i class="fa fa-file-word" style="color:#2563eb"></i>
            <span>${text}</span>
        </div>`;
    } else if (type === 'excel' && mediaUrl) {
        contentHTML = `<div class="file-preview">
            <i class="fa fa-file-excel" style="color:#16a34a"></i>
            <span>${text}</span>
        </div>`;
    } else {
        contentHTML = `<span class="msg-text">${text}</span>`;
    }

    msgDiv.innerHTML = `
        <div class="msg-bubble ${isStarred}">
            ${contentHTML}
            <div class="msg-actions">
                <button onclick="starMessage('${msgId}')">${starred ? '★ Unstar' : '☆ Star'}</button>
                <button onclick="forwardMessage('${msgId}')">➤ Forward</button>
                <button onclick="deleteMessage('${msgId}')">🗑️ Delete</button>
            </div>
        </div>
        <span class="msg-time">
            ${time}
            ${from === 'me' ? '<span class="tick">✓✓</span>' : ''}
        </span>
    `;

    chatMessages.appendChild(msgDiv);

    if (scroll) {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

// ===== SEND MESSAGE =====
function sendMessage() {
    const input = document.getElementById('messageInput');
    const text = input.value.trim();
    if (text === '' || !currentChat) return;

    const time = getFullTime();
    const msgId = 'msg_' + Date.now();

    appendMessage('me', text, time, msgId, false, true, 'text', '');
    saveMessage(currentChat, { id: msgId, from: 'me', text, time, starred: false, type: 'text', mediaUrl: '' });

    input.value = '';

    setTimeout(() => {
        const lowerText = text.toLowerCase();
        let reply = { text: 'Got it! 👍', type: 'text', mediaUrl: '' };

        for (const key in autoReplies) {
            if (lowerText.includes(key)) {
                reply = autoReplies[key];
                break;
            }
        }

        const replyTime = getFullTime();
        const replyId = 'msg_' + Date.now();
        appendMessage('them', reply.text, replyTime, replyId, false, true, reply.type, reply.mediaUrl);
        saveMessage(currentChat, { id: replyId, from: 'them', text: reply.text, time: replyTime, starred: false, type: reply.type, mediaUrl: reply.mediaUrl });

        // Save media from auto reply
        if (reply.type !== 'text' && reply.mediaUrl) {
            saveMedia(currentChat, { type: reply.type, url: reply.mediaUrl, name: reply.text, time: replyTime });
        }
    }, 1500);
}

// ===== SAVE MESSAGE =====
function saveMessage(name, msg) {
    const messages = JSON.parse(localStorage.getItem('chat_' + name) || '[]');
    messages.push(msg);
    localStorage.setItem('chat_' + name, JSON.stringify(messages));
}

// ===== SEND FILE =====
function sendFile(event) {
    const file = event.target.files[0];
    if (!file || !currentChat) return;

    const time = getFullTime();
    const msgId = 'msg_' + Date.now();
    const url = URL.createObjectURL(file);
    const fileType = file.type;
    let type = 'text';
    let textLabel = '';

    if (fileType.startsWith('image/')) { type = 'image'; textLabel = '📷 ' + file.name; }
    else if (fileType.startsWith('video/')) { type = 'video'; textLabel = '🎥 ' + file.name; }
    else if (fileType.startsWith('audio/')) { type = 'audio'; textLabel = '🎵 ' + file.name; }
    else if (fileType === 'application/pdf') { type = 'pdf'; textLabel = '📄 ' + file.name; }
    else if (fileType.includes('word')) { type = 'doc'; textLabel = '📝 ' + file.name; }
    else if (fileType.includes('excel') || fileType.includes('sheet')) { type = 'excel'; textLabel = '📊 ' + file.name; }
    else { textLabel = '📎 ' + file.name; }

    appendMessage('me', textLabel, time, msgId, false, true, type, url);
    saveMessage(currentChat, { id: msgId, from: 'me', text: textLabel, time, starred: false, type, mediaUrl: url });
    saveMedia(currentChat, { type, url, name: file.name, time });

    setTimeout(() => {
        const replyTime = getFullTime();
        const replyId = 'msg_' + Date.now();
        appendMessage('them', 'Got your file! Thanks! 📎', replyTime, replyId, false, true, 'text', '');
        saveMessage(currentChat, { id: replyId, from: 'them', text: 'Got your file! Thanks! 📎', time: replyTime, starred: false, type: 'text', mediaUrl: '' });
    }, 2000);

    event.target.value = '';
}

// ===== OPEN MEDIA VIEWER =====
function openMediaViewer(type, url) {
    const viewer = document.getElementById('mediaViewer');
    const content = document.getElementById('mediaViewerContent');
    viewer.style.display = 'flex';
    if (type === 'image') {
        content.innerHTML = `<img src="${url}" alt="image"/>`;
    } else if (type === 'video') {
        content.innerHTML = `<video src="${url}" controls autoplay></video>`;
    }
}

function closeMediaViewer() {
    document.getElementById('mediaViewer').style.display = 'none';
    document.getElementById('mediaViewerContent').innerHTML = '';
}

// ===== STAR MESSAGE =====
function starMessage(msgId) {
    const msgEl = document.getElementById('msgel_' + msgId);
    if (!msgEl) return;

    const bubble = msgEl.querySelector('.msg-bubble');
    const isStarred = bubble.classList.contains('starred');
    const starBtn = msgEl.querySelector('.msg-actions button:first-child');

    if (isStarred) {
        bubble.classList.remove('starred');
        starBtn.textContent = '☆ Star';
    } else {
        bubble.classList.add('starred');
        starBtn.textContent = '★ Unstar';
    }

    // Update localStorage
    const messages = JSON.parse(localStorage.getItem('chat_' + currentChat) || '[]');
    const updated = messages.map(m => {
        if (m.id === msgId) m.starred = !isStarred;
        return m;
    });
    localStorage.setItem('chat_' + currentChat, JSON.stringify(updated));

    const text = msgEl.getAttribute('data-text');
    const time = msgEl.getAttribute('data-time');
    const from = msgEl.getAttribute('data-from');

    if (!isStarred) {
        addToStarred(msgId, currentChat, from, text, time);
    } else {
        removeFromStarred(msgId);
    }
}

// ===== DELETE MESSAGE =====
function deleteMessage(msgId) {
    const chatMessages = document.getElementById('chatMessages');
    const scrollPos = chatMessages.scrollTop;

    const msgEl = document.getElementById('msgel_' + msgId);
    if (msgEl) msgEl.remove();

    // Scroll stays fixed!
    chatMessages.scrollTop = scrollPos;

    const messages = JSON.parse(localStorage.getItem('chat_' + currentChat) || '[]');
    const updated = messages.filter(m => m.id !== msgId);
    localStorage.setItem('chat_' + currentChat, JSON.stringify(updated));

    removeFromStarred(msgId);
}

// ===== FORWARD MESSAGE =====
function forwardMessage(msgId) {
    forwardMsgId = msgId;
    const msgEl = document.getElementById('msgel_' + msgId);
    if (!msgEl) return;

    const modal = document.getElementById('forwardModal');
    const forwardContactsEl = document.getElementById('forwardContacts');
    forwardContactsEl.innerHTML = '';

    contacts.forEach(c => {
        if (c.name !== currentChat) {
            const div = document.createElement('div');
            div.className = 'forward-contact';
            div.innerHTML = `
                <div class="avatar ${c.color}">${c.letter}</div>
                <span>${c.name}</span>
            `;
            div.onclick = () => sendForward(c.name, msgEl);
            forwardContactsEl.appendChild(div);
        }
    });

    modal.style.display = 'flex';
}

function sendForward(toName, msgEl) {
    const text = msgEl.getAttribute('data-text');
    const type = msgEl.getAttribute('data-type');
    const mediaUrl = msgEl.getAttribute('data-media');
    const time = getFullTime();
    const msgId = 'msg_' + Date.now();

    const messages = JSON.parse(localStorage.getItem('chat_' + toName) || '[]');
    messages.push({ id: msgId, from: 'me', text: '➤ ' + text, time, starred: false, type, mediaUrl });
    localStorage.setItem('chat_' + toName, JSON.stringify(messages));

    closeForward();
    alert('Message forwarded to ' + toName + '! ✅');
}

function closeForward() {
    document.getElementById('forwardModal').style.display = 'none';
}

// ===== STARRED MESSAGES =====
function addToStarred(msgId, chatName, from, text, time) {
    const starred = JSON.parse(localStorage.getItem('starred') || '[]');
    if (!starred.find(s => s.id === msgId)) {
        starred.push({ id: msgId, chatName, from, text, time });
        localStorage.setItem('starred', JSON.stringify(starred));
    }
}

function removeFromStarred(msgId) {
    const starred = JSON.parse(localStorage.getItem('starred') || '[]');
    localStorage.setItem('starred', JSON.stringify(starred.filter(s => s.id !== msgId)));
}

// ===== CHAT STARRED SECTION =====
function showChatStarred() {
    document.getElementById('chatStarredSection').style.display = 'flex';
    const list = document.getElementById('chatStarredList');
    list.innerHTML = '';

    const starred = JSON.parse(localStorage.getItem('starred') || '[]');
    const chatStarred = starred.filter(s => s.chatName === currentChat);

    if (chatStarred.length === 0) {
        list.innerHTML = `
            <div class="empty-panel">
                <i class="fa fa-star"></i>
                <p>No starred messages in this chat!</p>
            </div>`;
        return;
    }

    chatStarred.forEach(item => {
        const div = document.createElement('div');
        div.className = 'starred-item';
        div.id = 'chatstarred_' + item.id;
        div.innerHTML = `
            <div class="starred-from">${item.from === 'me' ? 'You' : item.chatName}</div>
            <div class="starred-text">${item.text}</div>
            <div class="starred-time">${item.time}</div>
            <button class="unstar-btn" onclick="unstarFromChat('${item.id}')">✕</button>
        `;
        list.appendChild(div);
    });
}

function unstarFromChat(msgId) {
    const list = document.getElementById('chatStarredList');

    // Scroll stays fixed!
    const scrollPos = list.scrollTop;

    removeFromStarred(msgId);

    const el = document.getElementById('chatstarred_' + msgId);
    if (el) el.remove();

    list.scrollTop = scrollPos;

    // Update in chat messages if visible
    const msgEl = document.getElementById('msgel_' + msgId);
    if (msgEl) {
        msgEl.querySelector('.msg-bubble').classList.remove('starred');
        msgEl.querySelector('.msg-actions button:first-child').textContent = '☆ Star';
    }

    // Update localStorage
    const messages = JSON.parse(localStorage.getItem('chat_' + currentChat) || '[]');
    const updated = messages.map(m => {
        if (m.id === msgId) m.starred = false;
        return m;
    });
    localStorage.setItem('chat_' + currentChat, JSON.stringify(updated));

    if (list.children.length === 0) {
        list.innerHTML = `
            <div class="empty-panel">
                <i class="fa fa-star"></i>
                <p>No starred messages in this chat!</p>
            </div>`;
    }
}

function hideChatStarred() {
    document.getElementById('chatStarredSection').style.display = 'none';
}

// ===== MEDIA SECTION =====
function saveMedia(chatName, media) {
    const key = 'media_' + chatName;
    const mediaList = JSON.parse(localStorage.getItem(key) || '[]');
    // Avoid duplicates
    if (!mediaList.find(m => m.url === media.url)) {
        mediaList.push(media);
        localStorage.setItem(key, JSON.stringify(mediaList));
    }
}

function showMediaSection() {
    document.getElementById('mediaSection').style.display = 'flex';
    // Show images by default
    const firstTab = document.querySelector('.media-tab');
    showMediaTab('images', firstTab);
}

function hideMediaSection() {
    document.getElementById('mediaSection').style.display = 'none';
}

function showMediaTab(tab, btn) {
    document.querySelectorAll('.media-tab').forEach(t => t.classList.remove('active'));
    if (btn) btn.classList.add('active');

    const content = document.getElementById('mediaContent');
    content.innerHTML = '';
    content.style.display = 'grid';

    const key = 'media_' + currentChat;
    const mediaList = JSON.parse(localStorage.getItem(key) || '[]');

    let filtered = [];
    if (tab === 'images') filtered = mediaList.filter(m => m.type === 'image');
    else if (tab === 'videos') filtered = mediaList.filter(m => m.type === 'video');
    else if (tab === 'audios') filtered = mediaList.filter(m => m.type === 'audio');
    else if (tab === 'docs') filtered = mediaList.filter(m => m.type === 'pdf' || m.type === 'doc' || m.type === 'excel');

    if (filtered.length === 0) {
        content.style.display = 'block';
        content.innerHTML = `<div class="media-empty">📭 No ${tab} found in this chat!</div>`;
        return;
    }

    filtered.forEach(media => {
        const div = document.createElement('div');
        div.className = 'media-thumb';

        if (media.type === 'image') {
            div.innerHTML = `<img src="${media.url}" alt="image"/>`;
            div.onclick = () => openMediaViewer('image', media.url);
        } else if (media.type === 'video') {
            div.innerHTML = `<i class="fa fa-play-circle"></i>`;
            div.onclick = () => openMediaViewer('video', media.url);
        } else if (media.type === 'audio') {
            div.innerHTML = `<i class="fa fa-music"></i>`;
        } else {
            div.innerHTML = `<i class="fa fa-file-pdf" style="color:#ea580c"></i>`;
            div.onclick = () => window.open(media.url, '_blank');
        }

        content.appendChild(div);
    });
}

// ===== SEARCH MESSAGES =====
function searchMessages() {
    const searchText = document.getElementById('msgSearch').value.trim().toLowerCase();
    const msgType = document.getElementById('msgType').value;
    const dateSearch = document.getElementById('dateSearch').value;
    const manualDate = document.getElementById('manualDate').value.trim();

    const messages = document.querySelectorAll('.message');
    let found = 0;

    // Remove old highlights
    messages.forEach(msg => {
        const textEl = msg.querySelector('.msg-text');
        if (textEl) textEl.innerHTML = textEl.textContent;
    });

    messages.forEach(msg => {
        const bubble = msg.querySelector('.msg-bubble');
        const textEl = msg.querySelector('.msg-text');
        const text = textEl ? textEl.textContent.toLowerCase() : '';
        const msgTime = msg.getAttribute('data-time') || '';
        let show = true;

        // Search text with highlight
        if (searchText) {
            if (!text.includes(searchText)) {
                show = false;
            } else {
                if (textEl) {
                    const regex = new RegExp(`(${searchText})`, 'gi');
                    textEl.innerHTML = textEl.textContent.replace(regex, '<span class="highlight">$1</span>');
                }
            }
        }

        // Filter by type
        if (msgType !== 'all') {
            if (msgType === 'image' && !bubble.querySelector('.msg-image')) show = false;
            if (msgType === 'video' && !bubble.querySelector('.msg-video')) show = false;
            if (msgType === 'audio' && !bubble.querySelector('.msg-audio')) show = false;
            if (msgType === 'pdf' && !bubble.querySelector('.fa-file-pdf')) show = false;
            if (msgType === 'doc' && !bubble.querySelector('.fa-file-word')) show = false;
            if (msgType === 'text' && (
                bubble.querySelector('.msg-image') ||
                bubble.querySelector('.msg-video') ||
                bubble.querySelector('.msg-audio') ||
                bubble.querySelector('.file-preview')
            )) show = false;
        }

        // Filter by date
        if (dateSearch || manualDate) {
            const dateStr = manualDate || dateSearch;
            if (!matchDate(msgTime, dateStr)) show = false;
        }

        if (show) {
            msg.style.display = 'flex';
            found++;
        } else {
            msg.style.display = 'none';
        }
    });

    const noMsg = document.getElementById('noMsgFound');
    const noMsgText = document.getElementById('noMsgText');

    if (found === 0) {
        noMsg.style.display = 'block';
        if (msgType === 'image') noMsgText.textContent = '🖼️ No images found!';
        else if (msgType === 'video') noMsgText.textContent = '🎥 No videos found!';
        else if (msgType === 'audio') noMsgText.textContent = '🎵 No audios found!';
        else if (msgType === 'pdf') noMsgText.textContent = '📄 No PDFs found!';
        else if (dateSearch || manualDate) noMsgText.textContent = '📭 No messages found on this date!';
        else noMsgText.textContent = '📭 No messages found!';
    } else {
        noMsg.style.display = 'none';
    }
}

// ===== MATCH DATE =====
function matchDate(msgTime, dateStr) {
    if (!msgTime || !dateStr) return true;
    const msgLower = msgTime.toLowerCase();
    const parts = dateStr.split('/');

    if (parts.length === 1) {
        // Year only e.g. 2026
        return msgLower.includes(parts[0]);
    } else if (parts.length === 2) {
        // MM/YYYY
        const monthNames = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
        const monthName = monthNames[parseInt(parts[0]) - 1];
        return msgLower.includes(monthName) && msgLower.includes(parts[1]);
    } else if (parts.length === 3) {
        // DD/MM/YYYY or MM/DD/YYYY
        const monthNames = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
        const day1 = parts[0].padStart(2, '0');
        const monthName1 = monthNames[parseInt(parts[1]) - 1];
        const year1 = parts[2];
        if (msgLower.includes(day1) && msgLower.includes(monthName1) && msgLower.includes(year1)) return true;
        const monthName2 = monthNames[parseInt(parts[0]) - 1];
        const day2 = parts[1].padStart(2, '0');
        const year2 = parts[2];
        if (msgLower.includes(day2) && msgLower.includes(monthName2) && msgLower.includes(year2)) return true;
        return false;
    }
    return true;
}

// ===== CLEAR SEARCH =====
function clearSearch() {
    document.getElementById('msgSearch').value = '';
    document.getElementById('msgType').value = 'all';
    document.getElementById('dateSearch').value = '';
    document.getElementById('manualDate').value = '';

    document.querySelectorAll('.message').forEach(msg => {
        msg.style.display = 'flex';
        const textEl = msg.querySelector('.msg-text');
        if (textEl) textEl.innerHTML = textEl.textContent;
    });

    document.getElementById('noMsgFound').style.display = 'none';
}

// ===== REAL TIME SEARCH =====
document.getElementById('msgSearch').addEventListener('input', function () {
    if (this.value.trim() === '') clearSearch();
    else searchMessages();
});

// ===== CONTACT SEARCH WITH HIGHLIGHT =====
document.getElementById('contactSearch').addEventListener('input', function () {
    const search = this.value.toLowerCase();
    document.querySelectorAll('.contact').forEach(contact => {
        const nameEl = contact.querySelector('h4');
        const name = nameEl.textContent;
        const nameLower = name.toLowerCase();
        if (search === '') {
            nameEl.innerHTML = name;
            contact.style.display = 'flex';
        } else if (nameLower.includes(search)) {
            const regex = new RegExp(`(${search})`, 'gi');
            nameEl.innerHTML = name.replace(regex, '<span class="highlight">$1</span>');
            contact.style.display = 'flex';
        } else {
            contact.style.display = 'none';
        }
    });
});

// ===== TOGGLE EMOJI =====
function toggleEmoji() {
    const picker = document.getElementById('emojiPicker');
    picker.style.display = picker.style.display === 'none' ? 'grid' : 'none';
}

function addEmoji(emoji) {
    document.getElementById('messageInput').value += emoji;
    document.getElementById('messageInput').focus();
    document.getElementById('emojiPicker').style.display = 'none';
}

// ===== VOICE RECORD =====
let isRecording = false;
let mediaRecorder;
let audioChunks = [];

function toggleVoiceRecord() {
    const btn = document.getElementById('voiceBtn');
    if (!isRecording) {
        navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
            mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.start();
            isRecording = true;
            btn.classList.add('recording');
            btn.innerHTML = '<i class="fa fa-stop"></i>';
            audioChunks = [];
            mediaRecorder.ondataavailable = e => audioChunks.push(e.data);
            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunks, { type: 'audio/ogg' });
                const url = URL.createObjectURL(audioBlob);
                const time = getFullTime();
                const msgId = 'msg_' + Date.now();
                appendMessage('me', '🎙️ Voice message', time, msgId, false, true, 'audio', url);
                saveMessage(currentChat, { id: msgId, from: 'me', text: '🎙️ Voice message', time, starred: false, type: 'audio', mediaUrl: url });
                saveMedia(currentChat, { type: 'audio', url, name: 'Voice message', time });
            };
        }).catch(() => alert('Microphone access denied!'));
    } else {
        mediaRecorder.stop();
        isRecording = false;
        btn.classList.remove('recording');
        btn.innerHTML = '<i class="fa fa-microphone"></i>';
    }
}

// ===== ENTER KEY TO SEND =====
document.getElementById('messageInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') sendMessage();
});

// ===== NOTES =====
function showAddNote() {
    document.getElementById('notesListView').style.display = 'none';
    document.getElementById('addNoteView').style.display = 'flex';
    document.getElementById('addNoteView').style.flexDirection = 'column';
    document.getElementById('noteInput').value = '';
}

function hideAddNote() {
    document.getElementById('addNoteView').style.display = 'none';
    document.getElementById('notesListView').style.display = 'flex';
    document.getElementById('notesListView').style.flexDirection = 'column';
}

function addNote() {
    const input = document.getElementById('noteInput');
    const text = input.value.trim();
    if (text === '') { alert('Please write something!'); return; }

    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    notes.unshift({ id: Date.now().toString(), text, time: getFullTime() });
    localStorage.setItem('notes', JSON.stringify(notes));
    input.value = '';
    hideAddNote();
    loadNotes();
}

function loadNotes(filter) {
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    const notesList = document.getElementById('notesList');
    notesList.innerHTML = '';

    const filtered = filter ? notes.filter(n => n.text.toLowerCase().includes(filter.toLowerCase())) : notes;

    if (filtered.length === 0) {
        notesList.innerHTML = `
            <div class="empty-panel">
                <i class="fa fa-sticky-note"></i>
                <p>${filter ? 'No notes found!' : 'No notes yet! Click + to add!'}</p>
            </div>`;
        return;
    }

    filtered.forEach(note => {
        const div = document.createElement('div');
        div.className = 'note-card';
        div.id = 'notecard_' + note.id;
        div.innerHTML = `
            <p id="notetext_${note.id}">${note.text}</p>
            <div class="note-footer">
                <span>${note.time}</span>
                <div class="note-footer-btns">
                    <button onclick="editNote('${note.id}')">✏️ Edit</button>
                    <button onclick="deleteNote('${note.id}')">🗑️ Delete</button>
                </div>
            </div>
        `;
        notesList.appendChild(div);
    });
}

function editNote(id) {
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    const note = notes.find(n => n.id === id);
    if (!note) return;

    const card = document.getElementById('notecard_' + id);
    card.innerHTML = `
        <textarea class="note-edit-input" id="noteedit_${id}">${note.text}</textarea>
        <div style="display:flex;gap:8px;margin-top:6px;">
            <button class="note-save-btn" onclick="saveEditNote('${id}')">💾 Save</button>
            <button class="note-save-btn" style="background:rgba(42,42,74,0.8);" onclick="loadNotes()">✕ Cancel</button>
        </div>
        <div class="note-footer" style="margin-top:8px;">
            <span>${note.time}</span>
        </div>
    `;
}

function saveEditNote(id) {
    const textarea = document.getElementById('noteedit_' + id);
    const newText = textarea.value.trim();
    if (newText === '') { alert('Note cannot be empty!'); return; }

    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    const updated = notes.map(n => {
        if (n.id === id) n.text = newText;
        return n;
    });
    localStorage.setItem('notes', JSON.stringify(updated));
    loadNotes();
}

function deleteNote(id) {
    let notes = JSON.parse(localStorage.getItem('notes') || '[]');
    notes = notes.filter(n => n.id !== id);
    localStorage.setItem('notes', JSON.stringify(notes));
    loadNotes();
}

function searchNotes() {
    const keyword = document.getElementById('noteSearch').value.trim();
    loadNotes(keyword);
}

// ===== TODO =====
function addTodo() {
    const input = document.getElementById('todoInput');
    const reminder = document.getElementById('todoReminder').value;
    const task = input.value.trim();
    if (task === '') { alert('Please enter a task!'); return; }

    const todos = JSON.parse(localStorage.getItem('todos') || '[]');
    todos.unshift({
        id: Date.now().toString(),
        task,
        reminder,
        completed: false,
        time: getFullTime()
    });
    localStorage.setItem('todos', JSON.stringify(todos));

    input.value = '';
    document.getElementById('todoReminder').value = '';

    // Set reminder
    if (reminder) {
        const reminderDate = new Date(reminder);
        const now = new Date();
        const timeDiff = reminderDate - now;
        setTimeout(() => {
            playReminderSound();
            alert('🔔 Reminder: ' + task);
        }, timeDiff > 0 ? timeDiff : 5000);
    }

    loadTodos();
}

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]');
    const pendingList = document.getElementById('pendingList');
    const completedList = document.getElementById('completedList');

    pendingList.innerHTML = '';
    completedList.innerHTML = '';

    const pending = todos.filter(t => !t.completed);
    const completed = todos.filter(t => t.completed);

    if (pending.length === 0) {
        pendingList.innerHTML = '<div style="color:#6b6b8a;font-size:13px;padding:10px;">No pending tasks! 🎉</div>';
    }
    if (completed.length === 0) {
        completedList.innerHTML = '<div style="color:#6b6b8a;font-size:13px;padding:10px;">No completed tasks yet!</div>';
    }

    pending.forEach(todo => pendingList.appendChild(createTodoEl(todo)));
    completed.forEach(todo => completedList.appendChild(createTodoEl(todo)));
}

function createTodoEl(todo) {
    const div = document.createElement('div');
    div.className = 'todo-item' + (todo.completed ? ' completed' : '');
    div.id = 'todo_' + todo.id;

    let reminderText = todo.reminder
        ? `🔔 ${new Date(todo.reminder).toLocaleString()}`
        : `Added: ${todo.time}`;

    div.innerHTML = `
        <input type="checkbox" ${todo.completed ? 'checked' : ''} onchange="toggleTodo('${todo.id}', this)"/>
        <div class="todo-info">
            <p id="todotask_${todo.id}">${todo.task}</p>
            <span>${reminderText}</span>
        </div>
        <div class="todo-item-btns">
            <button onclick="editTodo('${todo.id}')">✏️</button>
            <button onclick="deleteTodo('${todo.id}')">🗑️</button>
        </div>
    `;
    return div;
}

function editTodo(id) {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]');
    const todo = todos.find(t => t.id === id);
    if (!todo) return;

    const div = document.getElementById('todo_' + id);
    div.innerHTML = `
        <div style="flex:1;display:flex;flex-direction:column;gap:6px;">
            <input type="text" class="todo-edit-input" id="todoedit_${id}" value="${todo.task}"/>
            <div style="display:flex;gap:8px;">
                <button class="note-save-btn" onclick="saveEditTodo('${id}')">💾 Save</button>
                <button class="note-save-btn" style="background:rgba(42,42,74,0.8);" onclick="loadTodos()">✕</button>
            </div>
        </div>
    `;
}

function saveEditTodo(id) {
    const input = document.getElementById('todoedit_' + id);
    const newTask = input.value.trim();
    if (newTask === '') { alert('Task cannot be empty!'); return; }

    const todos = JSON.parse(localStorage.getItem('todos') || '[]');
    const updated = todos.map(t => {
        if (t.id === id) t.task = newTask;
        return t;
    });
    localStorage.setItem('todos', JSON.stringify(updated));
    loadTodos();
}

function toggleTodo(id, checkbox) {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]');
    const updated = todos.map(t => {
        if (t.id === id) t.completed = checkbox.checked;
        return t;
    });
    localStorage.setItem('todos', JSON.stringify(updated));
    loadTodos();
}

function deleteTodo(id) {
    let todos = JSON.parse(localStorage.getItem('todos') || '[]');
    todos = todos.filter(t => t.id !== id);
    localStorage.setItem('todos', JSON.stringify(todos));
    loadTodos();
}

// ===== REMINDER SOUND =====
function playReminderSound() {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(880, audioCtx.currentTime);
    gainNode.gain.setValueAtTime(1, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1);
    oscillator.start(audioCtx.currentTime);
    oscillator.stop(audioCtx.currentTime + 1);
}
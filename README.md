# OBS Message Jar

A beautiful, interactive message jar overlay for OBS Studio. Perfect for displaying viewer messages, positive affirmations, or any kind of text content during your streams!

![Message Jar Preview](preview.png)

## Features

- 🎨 Beautiful glass jar design with realistic effects
- 📝 Displays messages as folded paper notes
- 🎲 Random message drawing with smooth animations
- 🔢 Message counter showing total messages
- 💜 Customizable icons (heart, star, sparkles, mail, smile, gift)
- 📊 Loads messages from JSON file or API
- 🎯 Transparent background for OBS overlay
- ⚡ Lightweight and performant

## Quick Start

### 1. Download Files

Clone this repository or download the files:
```bash
git clone https://github.com/yourusername/obs-message-jar.git
cd obs-message-jar
```

### 2. Prepare Your Messages

Create a `messages.json` file in the same directory:

```json
{
  "messages": [
    {
      "id": 1,
      "text": "You're the best streamer!",
      "icon": "heart",
      "author": "Username123"
    },
    {
      "id": 2,
      "text": "Thanks for the amazing content!",
      "icon": "star",
      "author": "CoolViewer"
    }
  ]
}
```

**Message Format:**
- `id` (required): Unique identifier for each message
- `text` (required): The message content
- `icon` (optional): Icon type - `heart`, `star`, `sparkles`, `mail`, `smile`, or `gift`
- `author` (optional): Who sent the message

### 3. Add to OBS

1. Open OBS Studio
2. Add a new **Browser Source** to your scene
3. Check "Local file" and browse to `message-jar.html`
4. Set dimensions:
   - Width: `1920`
   - Height: `1080`
5. Check "Shutdown source when not visible" for better performance
6. Click OK

### 4. Interact with the Jar

Click the "Draw a Message" button to randomly display a message from your jar!

## Exporting Messages from Your Database

If you have messages in a database, export them to JSON format. Here are examples for common databases:

### MySQL/PostgreSQL:
```sql
SELECT 
  id,
  message_text as text,
  'heart' as icon,
  username as author
FROM messages
INTO OUTFILE 'messages.json';
```

### Python (SQLite/any DB):
```python
import json
import sqlite3

conn = sqlite3.connect('your_database.db')
cursor = conn.cursor()
cursor.execute("SELECT id, text, icon, author FROM messages")

messages = []
for row in cursor.fetchall():
    messages.append({
        'id': row[0],
        'text': row[1],
        'icon': row[2] or 'heart',
        'author': row[3]
    })

with open('messages.json', 'w') as f:
    json.dump({'messages': messages}, f, indent=2)
```

### Node.js:
```javascript
const fs = require('fs');
const messages = await db.query('SELECT * FROM messages');
fs.writeFileSync('messages.json', JSON.stringify({ messages }, null, 2));
```

## Loading from API

To load messages from a web API instead of a local file, modify line 20 in `message-jar.html`:

```javascript
// Change this:
const response = await fetch('messages.json');

// To this:
const response = await fetch('https://your-api.com/messages');
```

Your API should return JSON in this format:
```json
{
  "messages": [...]
}
```

## Customization

### Change Jar Colors

Edit the Tailwind classes in the HTML to customize colors:
- Jar glass: `from-blue-100/40 to-blue-200/40` (line 78)
- Jar border: `border-blue-300/60` (line 78)
- Message notes: `from-pink-200 to-purple-200` (line 86)

### Change Jar Size

Modify the width and height values:
- Container: `w-64 h-80` (line 78)
- Lid: `w-32 h-6` (line 75)

### Add Custom Icons

Import additional icons from `lucide-react` at the top of the file and add them to the `getIcon` function.

## Troubleshooting

**Messages not loading:**
- Ensure `messages.json` is in the same folder as `message-jar.html`
- Check browser console (F12) for errors
- Verify JSON syntax is valid

**Jar not showing in OBS:**
- Confirm browser source dimensions match your canvas
- Check that "Local file" is selected
- Try refreshing the browser source

**Performance issues:**
- Enable "Shutdown source when not visible"
- Reduce number of visible messages in jar (line 86)

## Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- OBS Browser Source: ✅ Tested and working

## License

MIT License - feel free to use and modify for your streams!

## Credits

Built with:
- React
- Tailwind CSS
- Lucide React (icons)

## Contributing

Pull requests are welcome! Feel free to submit issues or suggestions.

## Support

If you use this and find it helpful, consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting features
- 📢 Sharing with other streamers

---

Made with 💜 for the streaming community

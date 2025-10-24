# OBS Message Drive Overlay

![Static Badge](https://img.shields.io/badge/OBS-Overlay-blue?logo=obsstudio)
![Static Badge](https://img.shields.io/badge/Resolution-1920x1080-green)
![Static Badge](https://img.shields.io/badge/Status-Ready%20to%20Use-success)

A **cyber-aesthetic OBS overlay** built for **ArcanthaByte** — reads messages straight from a local JSON file.  
No servers, no APIs.

> **Download:** Get the latest version from [GitHub Releases](https://github.com/username/message-drive-obs/releases) or use the green **Code** button → **Download ZIP**

---

## Features
 
- **Local JSON message source** (`active_messages.json`)  
- **Lockable draggable drive** UI with position persistence
- **Matrix rain** background effect with scanlines
- **Auto-detects changes** in message files
- **Smart message tracking** - remembers what's been shown
- **Responsive message display** with proper text wrapping and scrolling
- **Keyboard shortcuts** - Press ESC to close messages
- **LocalStorage persistence** for drive position and progress
- **Fallback mode** if JSON file isn't found
- **Fully contained UI** - text never overflows the borders

---

## Files Overview

| File | Description |
|------|-------------|
| `message-drive.html` | Main overlay file for OBS (React-based, standalone) |
| `active_messages.json` | Active messages for the anniversary celebration |
| `reasons.json` | Additional messages (not currently loaded) |
| `README.md` | This file! Setup instructions and documentation |

---

## Installation & Setup

### 1️ Download from GitHub

**Easy Method (Recommended for Beginners):**

1. Go to the GitHub repository page
2. Look for the green **`<> Code`** button near the top right
3. Click it and select **"Download ZIP"**
4. Save the ZIP file to your computer (e.g., Downloads folder)
5. **Right-click** the ZIP file → **Extract All...**
6. Choose where to extract (recommended: `C:\Users\YourName\Documents\OBS_Overlays\`)
7. Click **Extract**

---

### 2️⃣ Verify Your Files

After extraction, your folder should contain:
```
📁 Message-Drive-OBS
 ├── message-drive.html
 ├── active_messages.json
 ├── inactive_messages.json
 └── README.md
```

✅ If you see these files, you're ready to proceed!

---

### 3️⃣ Add to OBS as a Browser Source

---

### 2️⃣ Add to OBS as a Browser Source

1. Open **OBS Studio**
2. In your **Sources** panel, click **+ → Browser**
3. Name it something like `Message Drive Overlay`
4. Check **✓ Local file**
5. Click **Browse** and select `message-drive.html`
   - Example path: `C:\Users\YourName\Documents\OBS_Overlays\Message-Drive-OBS\message-drive.html`
6. Set the dimensions:
   - **Width:** `1920`
   - **Height:** `1080`
7. Click **OK**

✅ The overlay should appear immediately with the cyber-aesthetic drive interface!

---

### 3️⃣ Using the Overlay

#### In OBS (Interact Mode):
1. **Right-click** the Browser Source → Select **Interact**
2. Click **▶ EJECT MESSAGE** to display a random message
3. **Press ESC** or click **[CLOSE]** to dismiss the message
4. Click the **🔓 lock icon** to unlock the drive for repositioning
5. **Drag the drive** anywhere on screen when unlocked
6. Click the **🔒 lock icon** again to lock position

#### During Stream:
- Messages pop up in a full-screen modal with the Matrix aesthetic
- Each message shows only once until all are exhausted
- When all messages are shown, the button changes to **↻ RESET & EJECT**
- Click reset to reload all messages and start fresh

---

### 4️⃣ Customizing Messages

Open `active_messages.json` in any text editor:

```json
{
  "messages": [
    {
      "id": 1,
      "text": "Your custom message here!\n\nMultiple lines work too!",
      "author": "USERNAME"
    },
    {
      "id": 2,
      "text": "Another message",
      "author": "ANOTHER_USER"
    }
  ]
}
```

#### Message Format:
- **`id`** - Unique number for each message
- **`text`** - The message content (supports line breaks with `\n`)
- **`author`** - Who sent the message (displayed as "FROM: AUTHOR")

#### Important Notes:
- Keep the JSON structure valid (commas between objects, proper brackets)
- The overlay **auto-detects** when you save changes to the file
- Messages are automatically wrapped and scrollable if they're long
- Use `\n` for line breaks in your text

---

### 5️⃣ Switching Message Files

Want to use different message sets? Simply rename your files:

**For anniversary messages:**
```
active_messages.json (currently loaded)
```

**To switch to other messages:**
1. Rename current: `active_messages.json` → `active_messages_backup.json`
2. Rename desired: `inactive_messages.json` → `active_messages.json`
3. Refresh the browser source in OBS

The overlay always loads from `active_messages.json` by default.

---

## 🎮 Keyboard Shortcuts

| Key | Action |
|-----|--------|
| **ESC** | Close the currently open message popup |

---

## 🎨 Features Breakdown

### Drive Interface
- **Draggable** - Move it anywhere on screen (when unlocked)
- **Position Memory** - Remembers where you placed it
- **Lock/Unlock** - Prevent accidental moves during streams
- **Live Stats** - Shows remaining messages and total count
- **Matrix Rain** - Animated background characters
- **Scanline Effect** - Retro CRT monitor aesthetic

### Message Modal
- **Full-screen overlay** with cyber borders
- **Auto-scrolling** for long messages
- **Word wrapping** - No text overflow ever
- **Themed scrollbar** - Subtle green styling
- **Author attribution** - Shows who sent each message
- **Matrix effects** - Rain and scanlines for consistency

### Smart Message System
- **Progress tracking** - Never shows the same message twice (until reset)
- **Random selection** - Fair distribution from remaining pool
- **Auto-reset** - Button changes when all messages shown
- **LocalStorage** - Saves progress between OBS sessions
- **File change detection** - Resets if JSON is modified

---

## 🔧 Troubleshooting

### Can't find the download button on GitHub?
- **Look for the green `<> Code` button** near the top of the page
- It's usually on the right side, above the file list
- Click it and select "Download ZIP" from the dropdown menu
- If you still can't find it, ask someone to send you the direct download link

### "⚠ FALLBACK MODE" appears
- **Cause:** `active_messages.json` not found or invalid
- **Solution:** 
  - Verify the JSON file is in the same folder as the HTML file
  - Check JSON syntax is valid (use [JSONLint](https://jsonlint.com/))
  - Make sure the file is named exactly `active_messages.json`

### Messages don't load after editing JSON
- **Solution:** 
  - Right-click Browser Source → **Refresh**
  - Or delete and re-add the browser source
  - Check console logs (Interact → F12 Developer Tools)

### Drive position resets after OBS restart
- **Cause:** LocalStorage not persisting (rare)
- **Solution:** 
  - Unlock and reposition the drive
  - OBS should save the position automatically
  - Check OBS isn't in "Safe Mode"

### Text is cut off or overflowing
- ✅ **This should be fixed!** The latest version properly wraps and scrolls all text
- If it still happens, refresh the browser source

### Can't click the drive or buttons
- Make sure you're in **Interact** mode (right-click source → Interact)
- Check that no other sources are overlapping the buttons

---

## 💡 Pro Tips

1. **Position Before Going Live** - Unlock, drag to your preferred spot, then lock it
2. **Test Your Messages** - Eject a few messages before stream to verify formatting
3. **Keep Backups** - Save copies of your message files before editing
4. **Use Line Breaks** - Add `\n` in your JSON for paragraph separation
5. **Author Names** - Keep them short (under 20 chars) for best display
6. **Message Length** - Any length works now! Long messages scroll automatically
7. **Multiple Files** - Keep different JSON files for different occasions

---

## 📝 Technical Details

- **Framework:** React 18.2.0 (via CDN)
- **Styling:** Tailwind CSS (via CDN)
- **Storage:** Browser LocalStorage API
- **File Loading:** Fetch API (local file system)
- **Resolution:** Optimized for 1920×1080
- **Browser:** Works in OBS Browser Source (CEF)

---

## 🎯 What's New in This Version

- ✅ **Fixed text overflow** - All messages stay within borders
- ✅ **Added scrolling** - Long messages scroll smoothly with themed scrollbar
- ✅ **ESC key support** - Close messages with keyboard
- ✅ **Better word wrapping** - Handles long URLs and words
- ✅ **Improved flex layout** - Header and footer stay fixed while content scrolls
- ✅ **Enhanced UX** - Visible scrollbar with green cyber theme

---

## 📄 License & Credits

**Made with 💚 for ArcanthaByte**

Feel free to modify and customize for your own streams!  
If you use this, a shoutout to Arc would be appreciated! 🎮

---

## 🆘 Support

Having issues? Check:
1. OBS Browser Source cache (clear it)
2. Console logs (F12 in Interact mode)
3. JSON file syntax validity
4. File paths and permissions

For more help, reach out to the community or check OBS documentation!

---

**Happy Streaming! 🌟**

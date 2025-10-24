# OBS Message Drive Overlay

![Static Badge](https://img.shields.io/badge/OBS-Overlay-blue?logo=obsstudio)
![Static Badge](https://img.shields.io/badge/Resolution-1920x1080-green)
![Static Badge](https://img.shields.io/badge/Status-Ready%20to%20Use-success)

A **cyber-themed OBS overlay** that shows messages on your stream! Perfect for celebrating milestones, reading fan messages, or just adding some flair to your broadcast. (this is originally made for the amazing streamer ArcanthaByte)

**No coding required (only customazation)! Just download, add to OBS, and click a button!**

---

## Step 1: Download the Files

**Super Easy Method:**

1. Go to the GitHub page where you found this file
2. Look for a big green button that says **`<> Code`** (it's near the top right)
3. Click it
4. Click **"Download ZIP"**
5. The file will download to your computer (probably in your Downloads folder)

---

## Step 2: Extract the Files

After downloading, you need to unzip the folder:

**On Windows:**
1. Go to your **Downloads** folder
2. Find the ZIP file you just downloaded
3. **Right-click** on it
4. Click **"Extract All..."**
5. Choose where to put it (we recommend: `Documents`)
6. Click **"Extract"**

**On Mac:**
1. Go to your **Downloads** folder
2. **Double-click** the ZIP file
3. It will automatically extract

✅ You should now have a folder with these files inside:
- `message-drive.html` ← This is the main file!
- `active_messages.json` ← Your messages go here
- `README.md` ← Instructions (this file)
- `messages` ← a folder where you can put other messages in

---

## Step 3: Add to OBS

let's add it to OBS!

1. **Open OBS Studio**
2. Look at the **"Sources"** box (usually at the bottom)
3. Click the **+ (plus)** button
4. Choose **"Browser"** from the list
5. Type a name like `Message Drive Overlay` and click **OK**

Now you'll see a settings window (properties):

6. **Check the box** that says **"Local file"** ✓
7. Click the **"Browse"** button
8. Find the folder you extracted in Step 2
9. Click on **`message-drive.html`**
10. Click **"Open"**

Set the size:
11. Where it says **Width**, type: `1920`
12. Where it says **Height**, type: `1080`
13. Click **OK**

**Done!** You should see the message drive appear in OBS!

---

## Step 4: How to Use It

### Testing it out:

1. In OBS, **right-click** on the "Message Drive" source
2. Click **"Interact"**
3. A new window will open showing the drive
4. Click the **"▶ EJECT MESSAGE"** button
5. A message will pop up! 
6. Press **ESC** or click **[CLOSE]** to dismiss it

### Moving the drive:

1. Click the **🔓 lock icon** (top right of the drive)
2. **Drag** the drive anywhere you want on screen
3. Click the **🔒 lock icon** to lock it in place
4. Close the Interact window

**That's it!** Now when you stream, just open Interact and click "EJECT MESSAGE" whenever you want to show a message!

---

## Step 5: Add Your Own Messages (Optional)

Want to add your own messages? Easy!

1. Find the `active_messages.json` file (or move the active_messages.json to the folder **messages** and make a new .json file)
2. **Right-click** on it
3. Choose **"Open with"** → **"Notepad"** (Windows) or **"TextEdit"** (Mac)

You'll see something like this:

```json
{
  "messages": [
    {
      "id": 1,
      "text": "Your message here!",
      "author": "USERNAME"
    }
  ]
}
```

### To add a new message:

1. Copy one of the message blocks (everything between `{` and `}`)
2. Paste it below, **add a comma** after the previous message
3. Change the `id` number (make it unique)
4. Change the `text` to your message
5. Change the `author` to who sent it
6. **Save the file**

**Example:**
```json
{
  "messages": [
    {
      "id": 1,
      "text": "arc is cute mhm pass it on",
      "author": "everyone"
    },
    {
      "id": 2,
      "text": "don't say: no you",
      "author": "everyone"
    }
  ]
}
```

⚠️ **Important:** 
- Add commas between messages (but NOT after the last one!)
- Keep all the `{` `}` `[` `]` brackets
- Use straight quotes `"` not curly quotes `"`

### Updating messages in OBS:

After you save changes:
1. Right-click the source in OBS
2. Click **"Refresh"**

Your new messages will load automatically!

---

## What You Can Do

### The Message Drive:
- **Drag it** anywhere on your screen (when unlocked 🔓)
- **Lock it** so it doesn't move during stream (🔒)
- Shows how many messages you have left

### Messages:
- Each message shows **only once** (no repeats!)
- After all messages are shown, click **"↻ RESET & EJECT"** to start over
- Messages can be any length (long ones scroll automatically)
- Press **ESC** to close a message quickly

---

## Questions you might have

### "Where's the download button?"
Look for the green **`<> Code`** button on the GitHub page, then click "Download ZIP"

### "The overlay isn't showing in OBS!"
- Make sure you selected the `.html` file (not the folder)
- Check that Width is `1920` and Height is `1080`
- Try deleting the source and adding it again

### "I can't click the buttons!"
- You need to **right-click** the source → **"Interact"**
- In Interact mode, you can click buttons and drag the drive

### "My messages aren't loading!"
- Check that the file is named exactly `active_messages.json`
- Make sure it's in the same folder as `message-drive.html`
- Open the file in Notepad and check for missing commas or brackets
- Right-click the source in OBS → "Refresh"

### "It says 'FALLBACK MODE'"
- This means the JSON file couldn't be found or has an error
- Check the filename and location
- You can test the JSON at [jsonlint.com](https://jsonlint.com/) to find errors

### "The drive moved during my stream!"
- Click the 🔒 lock icon before you go live
- This prevents accidental dragging

---

## Pro Tips

1. **Test before you stream** - Click through a few messages to make sure everything works
2. **Lock the position** - Always lock the drive (🔒) before going live
3. **Keep backups** - Save a copy of your message file before editing
4. **Short usernames** - Keep author names under 15 characters for best display
5. **Line breaks** - To make a new line in your message, use `\n` in the text

---

## Need More Help?

If something isn't working:

1. **Check the file names** - Make sure they're spelled exactly right
2. **Check the file location** - Everything should be in the same folder
3. **Refresh OBS** - Right-click source → Refresh
4. **Restart OBS** - Sometimes a fresh start helps!
5. **Read the error** - If there's a yellow warning, it tells you what's wrong

**Arc: Just ask me 💚**
---

## You're All Set!

That's everything you need to know! The overlay is ready to use and you can customize it anytime.

---

**Made with 💚 for ArcanthaByte**

If you use this overlay, a shoutout to ArcanthaByte would be!

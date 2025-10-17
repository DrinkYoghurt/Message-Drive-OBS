# OBS Message Drive Overlay

![Static Badge](https://img.shields.io/badge/OBS-Overlay-blue?logo=obsstudio)
![Static Badge](https://img.shields.io/badge/Resolution-1920x1080-green)
![Static Badge](https://img.shields.io/badge/Status-Ready%20to%20Use-success)

A **cyber-aesthetic OBS overlay** built for **ArcanthaByte** — reads messages straight from a local `messages.json` file.  
No servers, no API 

---

## Features
 
-  **Local JSON message source** (`messages.json`)  
-  **Lockable draggable drive** UI  
-  **Matrix rain** background effect  
-  **Auto-detects changes** in `messages.json`  
-  Works as a **local Browser Source** (no hosting)  
-  Smart fallback mode if `messages.json` isn’t found  

---

##  Files Overview

| File | Description |
|------|--------------|
| `message-drive.html` | The main overlay file for OBS (React-based) |
| `messages.json` | Local message data source |

---

## Installation & Setup

### 1️⃣ Extract the Files

Unzip:
```bash
Message-Drive-OBS-*.rar
```

Recommended folder:
```bash
C:\Users\<you>\Documents\OBS_Overlays\Message-Drive-OBS-*\
```

Your folder should look like:
```
📁 Message-Drive-OBS-*
 ├── message-drive.html
 ├── messages.json
```

---

### 2️⃣ Add to OBS as a Browser Source

1. Open **OBS Studio**
2. In **Sources**, click **+ → Browser**
3. Name it something like `Message Drive`
4. Enable **Local File**
5. **Browse** → Select `message-drive.html`
   *(e.g. `C:\Users\<you>\Documents\OBS_Overlays\Message-Drive-OBS-*\message-drive.html`)*  
6. Set:
   - **Width:** `1920`  
   - **Height:** `1080`

✅ That’s it — the overlay should appear instantly.

---

### 3️⃣ Customize Messages

Open `messages.json` and tweak your messages:

```json
{
  "messages": [
    {
      "id": 1,
      "text": "Arc is cute mhm pass it on",
      "author": "Everyone"
    },
    {
      "id": 2,
      "text": "Don't say no you",
      "author": "Everyone"
    }
  ]
}
```

💡 When you edit `messages.json`, the overlay **auto-detects the change** and resets its stored data.

---

### 4️⃣ How to Use It In OBS

- Click your **Browser Source**
- Press the **Interact** button in OBS
- Hit the **▶ EJECT MESSAGE** button  
  → A random message pops up from your local file!  

If `messages.json` is missing or invalid, a **fallback mode** with dummy data will load automatically.  
You’ll see a yellow “⚠ FALLBACK MODE” box on the top right.

---

### 5️⃣ Tips & Troubleshooting

- Keep both files (`message-drive.html` & `messages.json`) in the **same folder**  
- Avoid special characters in folder names  
- Don’t resize your OBS source — it’s made for 1920×1080  
- To reload messages manually, delete the browser source cache or restart OBS  

---

**Made with ❤️ for ArcanthaByte.**  

# OBS Overlay

![Static Badge](https://img.shields.io/badge/OBS-Overlay-blue?logo=obsstudio)
![Static Badge](https://img.shields.io/badge/Resolution-1920x1080-green)
![Static Badge](https://img.shields.io/badge/Status-Ready%20to%20Use-success)

A **OBS overlay** for ArchanthaByte — display messages from a local file, clean and cyber design.  
Built for **local use** as a **Browser Source** in OBS (no hosting required).

---

##  Features

-  React-based dynamic message display  
-  100% local (no web hosting needed)  
-  Fully customizable messages  
-  Designed for **1920×1080** layout  
-  Lightweight and easy to configure  

---

##  Installation & Setup

### 1️⃣ Extract the Files

Unzip:
```
Message-Drive-OBS.rar
```

Recommended folder:
```
C:\Users\<you>\Documents\OBS_Overlays\Message-Drive-OBS\
```

---

### 2️⃣ Add to OBS as a Browser Source

1. Open **OBS Studio**
2. Click **+** under **Sources**
3. Select **Browser**
4. Name it (e.g. `Message Drive`)
5. Configure:
   -  **Local File:** *Check this box*
   -  **Browse** → Select `message.drive.html` from the extracted folder  
     *(Example: `C:\Users\<you>\Documents\OBS Overlay\message.drive.html`)*
   -  **Width:** `1920`  
     **Height:** `1080`

---

### 3️⃣ Customize Messages (React Example)

Inside the overlay’s JavaScript file, you’ll find the message setup like this:

```jsx
{
  "messages": [
    {
      "id": 1,
      "text": "Je bent een geweldige streamer! Blijf doorgaan!",
      "author": "KijkerFan123"
    },
```
You  can use this to add more or change messages.

---

### 4️⃣ Using it

Inside OBS, there is a button that appears when you select the **Browser Source** called **Interact**.  

Click it, then click **Eject Message** — a message will pop up from the `messages.json` file.  

If there's an error, it should load dummy messages, and you’ll see an error displayed in the top-right corner of the overlay.  

This means that you either didn’t place the `messages.json` file in the same **directory**, or it doesn’t exist.

---

##  Tips

- If the overlay doesn’t appear:  
  → Feel free to ask me for help  
- Keep the local folder path short and free of special characters.


**Made with ❤️ for ArchanthaByte.**

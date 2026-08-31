# Sri Annapurneshwari Electricals — Official Website

A professional, fully responsive (mobile / tablet / laptop) website for **Sri Annapurneshwari Electricals**, Chitradurga — complete electrical &amp; solar solutions across Karnataka since 2001.

## ✨ Features

- **Fully responsive** — works on Android, iOS and laptop/desktop screens (breakpoints at 1024px, 820px, 640px, 420px)
- **WhatsApp integration** everywhere:
  - Floating WhatsApp button (bottom-right, on every screen)
  - "Chat on WhatsApp" buttons in the header, hero and call-to-action banner
  - An **enquiry form** that sends the customer's name, phone, interest &amp; message straight to WhatsApp
- **Click-to-call** phone links and click-to-email links
- Sections: Hero, Stats, About &amp; Commitment, Products (8), Services (9), Industries We Serve (9), Why Choose Us, Brands/Partners, Contact, Footer
- Animated stat counters, scroll-reveal animations, sticky header, mobile slide-out menu
- SEO meta tags + Open Graph tags
- **Zero build step, no dependencies** — pure HTML/CSS/JS, loads instantly and hosts anywhere

## 📞 Business Details

| | |
|---|---|
| **Proprietor** | N. Lokesh |
| **Phone / WhatsApp** | 94481 21829 |
| **Email** | nlokesh29@rediffmail.com |
| **Address** | #7 &amp; 8, Theosophical Society Complex, Basaveshwara Talkies Road, Chitradurga – 577501, Karnataka |

## 🗂️ Files

```
index.html    # Page structure & content
styles.css    # Styling & responsive layout
script.js     # Content data, WhatsApp form, menu, animations
```

## 🚀 View / Run Locally

Just open `index.html` in any browser, or serve the folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## 🌐 Deploy (free hosting via GitHub Pages)

1. Push these files to the `main` branch.
2. In GitHub → **Settings → Pages**, set **Source = Deploy from a branch**, branch = `main`, folder = `/ (root)`.
3. Your live site will be available at `https://<username>.github.io/annapurneshwari-electricals/`.

## 🔧 How to update the WhatsApp number

Edit the top of `script.js`:

```js
const WHATSAPP_NUMBER = "919448121829"; // country code + number, no + or spaces
```

Also update the `wa.me/919448121829` links in `index.html` if the number changes.

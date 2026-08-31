/* ============================================================
   Sri Annapurneshwari Electricals — Help Assistant
   A lightweight, accurate, multilingual chat widget.
   All answers are built ONLY from verified business facts and the
   existing localized content in translations.js. It never invents
   prices, business hours, or any claim not present on the site;
   for pricing/quotes and timings it hands off to WhatsApp / call.
   ============================================================ */
(function () {
  'use strict';

  /* ---- Verified business facts (single source of truth) ---- */
  var BIZ = {
    waNumber: '919448121829',
    phoneDisplay: '94481 21829',
    tel: '+919448121829',
    email: 'nlokesh29@rediffmail.com',
    website: 'https://www.sriannapurneshwarielectricals.com',
    websiteLabel: 'sriannapurneshwarielectricals.com',
    address: 'Shop No. 7/8, Theosophical Society Complex, Basaveshwara Talkies Road, Vijayanagar, Chitradurga – 577501, Karnataka',
    maps: 'https://www.google.com/maps/search/?api=1&query=Sri%20Annapurneshwari%20Electricals%2C%20Basaveshwara%20Talkies%20Road%2C%20Vijayanagar%2C%20Chitradurga%2C%20Karnataka%20577501',
    opensAt: '9:00 AM',
    proprietor: 'N. Lokesh',
    since: '2001',
    instagram: 'https://www.instagram.com/lo.kesh5907/',
    instaHandle: '@lo.kesh5907'
  };

  var wa = function (text) { return 'https://wa.me/' + BIZ.waNumber + (text ? '?text=' + encodeURIComponent(text) : ''); };
  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };

  /* ---- Localized UI + conversational scaffolding (product/service
         names & descriptions come live from TRANSLATIONS) ---- */
  var UI = {
    en: {
      launch: 'Chat with us', title: 'Help Assistant', status: 'Online · we usually reply fast',
      close: 'Close chat', placeholder: 'Type your question…', send: 'Send',
      greeting: "Namaste! \uD83D\uDE4F I'm the Sri Annapurneshwari Electricals assistant. Ask me about our products, services, location or contact — or pick an option below.",
      chips: { products: 'Products', services: 'Services', quote: 'Get a quote', location: 'Location', contact: 'Contact', brands: 'Brands', instagram: 'Instagram' },
      productsIntro: 'We offer complete solar, water &amp; power solutions:',
      productsOutro: 'Ask me about any product, or tap <strong>Get a quote</strong>.',
      servicesIntro: 'Our services include:',
      brandsIntro: 'We are an authorised dealer &amp; channel partner for genuine products from:',
      brandsList: ['<strong>V-Guard</strong> — authorised channel partner for solar rooftops', '<strong>Exide &amp; Eastman</strong> — home UPS, inverters &amp; batteries', '<strong>Redsun</strong> — solar &amp; heat-pump water heaters', '<strong>Racold</strong> — electric water heaters', '<strong>Zero B</strong> — water softeners &amp; RO purifiers'],
      quoteText: "We'd be glad to give you a <strong>free quote</strong>. Pricing depends on your capacity and site, so our team will guide you to the best option. Message us on WhatsApp or call — we reply personally.",
      locationText: '<strong>Visit our store:</strong><br>' + esc(BIZ.address) + '<br>We serve customers across Karnataka.',
      contactText: "Here's how to reach us:",
      contactLines: ['\uD83D\uDCDE Phone / WhatsApp: <strong>' + esc(BIZ.phoneDisplay) + '</strong>', '\u2709\uFE0F Email: <strong>' + esc(BIZ.email) + '</strong>', '\uD83C\uDF10 Website: <strong>' + BIZ.websiteLabel + '</strong>'],
      hoursText: 'Our store <strong>opens from 9:00 AM</strong>. For today\u2019s exact timings and holidays, please give us a call \u2014 we\u2019re always happy to help.',
      areaText: 'We\u2019re based in <strong>Chitradurga</strong> and have served customers <strong>across Karnataka since ' + BIZ.since + '</strong>.',
      aboutText: 'Sri Annapurneshwari Electricals, led by proprietor <strong>' + esc(BIZ.proprietor) + '</strong>, has delivered trusted solar, water-heating, water-treatment and power-backup solutions across Karnataka <strong>since ' + BIZ.since + '</strong>.',
      warrantyText: 'Yes \u2014 we provide <strong>warranty support, AMC &amp; maintenance, repair &amp; service</strong> and dependable after-sales care. Tell us your product and we\u2019ll help.',
      installText: 'Our team handles <strong>professional installation</strong>, rooftop surveys and complete project execution. Share your requirement and we\u2019ll arrange a site visit.',
      fallback: 'I can help with <strong>products, services, prices, location</strong> and <strong>contact</strong>. You can also chat with us directly on WhatsApp.',
      thanks: 'You\u2019re welcome! \uD83D\uDE4F Anything else I can help you with?',
      quoteNudge: 'Would you like a free quote for this?',
      waLabel: 'WhatsApp', callLabel: 'Call', mapLabel: 'Directions', waMsg: 'Hello Sri Annapurneshwari Electricals \uD83D\uDC4B I found you on your website and would like to enquire.', waAsked: 'My question:', instaLabel: 'Instagram', instaReply: 'See our latest videos, reels and installation updates on Instagram — <strong>@lo.kesh5907</strong>. Tap Follow to stay updated.'
    },
    kn: {
      launch: 'ಚಾಟ್ ಮಾಡಿ', title: 'ಸಹಾಯ ಸಹಾಯಕ', status: 'ಆನ್‌ಲೈನ್ · ನಾವು ಬೇಗ ಉತ್ತರಿಸುತ್ತೇವೆ',
      close: 'ಚಾಟ್ ಮುಚ್ಚಿ', placeholder: 'ನಿಮ್ಮ ಪ್ರಶ್ನೆ ಟೈಪ್ ಮಾಡಿ…', send: 'ಕಳುಹಿಸಿ',
      greeting: 'ನಮಸ್ಕಾರ! \uD83D\uDE4F ನಾನು ಶ್ರೀ ಅನ್ನಪೂರ್ಣೇಶ್ವರಿ ಎಲೆಕ್ಟ್ರಿಕಲ್ಸ್ ಸಹಾಯಕ. ಉತ್ಪನ್ನಗಳು, ಸೇವೆಗಳು, ಸ್ಥಳ ಅಥವಾ ಸಂಪರ್ಕದ ಬಗ್ಗೆ ಕೇಳಿ — ಅಥವಾ ಕೆಳಗಿನ ಆಯ್ಕೆ ಆರಿಸಿ.',
      chips: { products: 'ಉತ್ಪನ್ನಗಳು', services: 'ಸೇವೆಗಳು', quote: 'ಕೊಟೇಶನ್', location: 'ಸ್ಥಳ', contact: 'ಸಂಪರ್ಕ', brands: 'ಬ್ರ್ಯಾಂಡ್‌ಗಳು', instagram: 'ಇನ್‌ಸ್ಟಾಗ್ರಾಂ' },
      productsIntro: 'ನಾವು ಸಂಪೂರ್ಣ ಸೌರ, ನೀರು ಮತ್ತು ವಿದ್ಯುತ್ ಪರಿಹಾರಗಳನ್ನು ನೀಡುತ್ತೇವೆ:',
      productsOutro: 'ಯಾವುದೇ ಉತ್ಪನ್ನದ ಬಗ್ಗೆ ಕೇಳಿ ಅಥವಾ <strong>ಕೊಟೇಶನ್</strong> ಒತ್ತಿ.',
      servicesIntro: 'ನಮ್ಮ ಸೇವೆಗಳು:',
      brandsIntro: 'ನಾವು ವಿಶ್ವಾಸಾರ್ಹ ಬ್ರ್ಯಾಂಡ್‌ಗಳ ಅಧಿಕೃತ ಡೀಲರ್ ಮತ್ತು ಚಾನೆಲ್ ಪಾಲುದಾರ:',
      brandsList: ['<strong>V-Guard</strong> — ಸೌರ ರೂಫ್‌ಟಾಪ್‌ಗೆ ಅಧಿಕೃತ ಚಾನೆಲ್ ಪಾಲುದಾರ', '<strong>Exide ಮತ್ತು Eastman</strong> — ಹೋಮ್ UPS, ಇನ್‌ವರ್ಟರ್ ಮತ್ತು ಬ್ಯಾಟರಿ', '<strong>Redsun</strong> — ಸೌರ ಮತ್ತು ಹೀಟ್ ಪಂಪ್ ವಾಟರ್ ಹೀಟರ್', '<strong>Racold</strong> — ಎಲೆಕ್ಟ್ರಿಕ್ ವಾಟರ್ ಹೀಟರ್', '<strong>Zero B</strong> — ವಾಟರ್ ಸಾಫ್ಟನರ್ ಮತ್ತು RO'],
      quoteText: 'ನಾವು ಸಂತೋಷದಿಂದ <strong>ಉಚಿತ ಕೊಟೇಶನ್</strong> ನೀಡುತ್ತೇವೆ. ಬೆಲೆ ನಿಮ್ಮ ಸಾಮರ್ಥ್ಯ ಮತ್ತು ಸ್ಥಳವನ್ನು ಅವಲಂಬಿಸಿದೆ, ಆದ್ದರಿಂದ ನಮ್ಮ ತಂಡ ಸರಿಯಾದ ಆಯ್ಕೆಗೆ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತದೆ. WhatsApp ನಲ್ಲಿ ಸಂದೇಶ ಕಳುಹಿಸಿ ಅಥವಾ ಕರೆ ಮಾಡಿ.',
      locationText: '<strong>ನಮ್ಮ ಅಂಗಡಿಗೆ ಭೇಟಿ ನೀಡಿ:</strong><br>' + esc(BIZ.address) + '<br>ನಾವು ಕರ್ನಾಟಕದಾದ್ಯಂತ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತೇವೆ.',
      contactText: 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುವ ವಿಧಾನ:',
      contactLines: ['\uD83D\uDCDE ಫೋನ್ / WhatsApp: <strong>' + esc(BIZ.phoneDisplay) + '</strong>', '\u2709\uFE0F ಇಮೇಲ್: <strong>' + esc(BIZ.email) + '</strong>', '\uD83C\uDF10 ವೆಬ್‌ಸೈಟ್: <strong>' + BIZ.websiteLabel + '</strong>'],
      hoursText: 'ನಮ್ಮ ಅಂಗಡಿ <strong>ಬೆಳಿಗ್ಗೆ 9:00 ರಿಂದ</strong> ತೆರೆದಿರುತ್ತದೆ. ಇಂದಿನ ನಿಖರ ಸಮಯ ಮತ್ತು ರಜೆಗಳಿಗೆ ದಯವಿಟ್ಟು ಕರೆ ಮಾಡಿ.',
      areaText: 'ನಾವು <strong>ಚಿತ್ರದುರ್ಗ</strong>ದಲ್ಲಿ ನೆಲೆಸಿದ್ದೇವೆ ಮತ್ತು <strong>' + BIZ.since + ' ರಿಂದ ಕರ್ನಾಟಕದಾದ್ಯಂತ</strong> ಗ್ರಾಹಕರಿಗೆ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತಿದ್ದೇವೆ.',
      aboutText: 'ಶ್ರೀ ಅನ್ನಪೂರ್ಣೇಶ್ವರಿ ಎಲೆಕ್ಟ್ರಿಕಲ್ಸ್, ಮಾಲೀಕ <strong>' + esc(BIZ.proprietor) + '</strong> ನೇತೃತ್ವದಲ್ಲಿ, <strong>' + BIZ.since + ' ರಿಂದ</strong> ಕರ್ನಾಟಕದಾದ್ಯಂತ ವಿಶ್ವಾಸಾರ್ಹ ಸೌರ, ವಾಟರ್ ಹೀಟಿಂಗ್ ಮತ್ತು ಪವರ್ ಬ್ಯಾಕಪ್ ಪರಿಹಾರಗಳನ್ನು ನೀಡುತ್ತಿದೆ.',
      warrantyText: 'ಹೌದು — ನಾವು <strong>ವಾರಂಟಿ ಬೆಂಬಲ, AMC ಮತ್ತು ನಿರ್ವಹಣೆ, ರಿಪೇರಿ ಮತ್ತು ಸೇವೆ</strong> ನೀಡುತ್ತೇವೆ. ನಿಮ್ಮ ಉತ್ಪನ್ನ ತಿಳಿಸಿ.',
      installText: 'ನಮ್ಮ ತಂಡ <strong>ವೃತ್ತಿಪರ ಅಳವಡಿಕೆ</strong>, ರೂಫ್‌ಟಾಪ್ ಸಮೀಕ್ಷೆ ಮತ್ತು ಸಂಪೂರ್ಣ ಯೋಜನೆ ನಿರ್ವಹಿಸುತ್ತದೆ. ನಿಮ್ಮ ಅಗತ್ಯ ತಿಳಿಸಿ.',
      fallback: 'ನಾನು <strong>ಉತ್ಪನ್ನಗಳು, ಸೇವೆಗಳು, ಬೆಲೆ, ಸ್ಥಳ</strong> ಮತ್ತು <strong>ಸಂಪರ್ಕ</strong>ದ ಬಗ್ಗೆ ಸಹಾಯ ಮಾಡಬಲ್ಲೆ. WhatsApp ನಲ್ಲಿಯೂ ಚಾಟ್ ಮಾಡಬಹುದು.',
      thanks: 'ಸ್ವಾಗತ! \uD83D\uDE4F ಇನ್ನೇನಾದರೂ ಸಹಾಯ ಬೇಕೇ?',
      quoteNudge: 'ಇದಕ್ಕೆ ಉಚಿತ ಕೊಟೇಶನ್ ಬೇಕೇ?',
      waLabel: 'WhatsApp', callLabel: 'ಕರೆ', mapLabel: 'ದಾರಿ', waMsg: 'ನಮಸ್ಕಾರ, ಶ್ರೀ ಅನ್ನಪೂರ್ಣೇಶ್ವರಿ ಎಲೆಕ್ಟ್ರಿಕಲ್ಸ್ \uD83D\uDC4B ನಿಮ್ಮ ವೆಬ್‌ಸೈಟ್‌ನಿಂದ ವಿಚಾರಿಸಲು ಬಯಸುತ್ತೇನೆ.', waAsked: 'ನನ್ನ ಪ್ರಶ್ನೆ:', instaLabel: 'ಇನ್‌ಸ್ಟಾಗ್ರಾಂ', instaReply: 'ನಮ್ಮ ಇತ್ತೀಚಿನ ವೀಡಿಯೊ, ರೀಲ್ಸ್ ಮತ್ತು ಅಳವಡಿಕೆ ಅಪ್‌ಡೇಟ್‌ಗಳನ್ನು ಇನ್‌ಸ್ಟಾಗ್ರಾಂನಲ್ಲಿ ನೋಡಿ — <strong>@lo.kesh5907</strong>.'
    },
    hi: {
      launch: 'चैट करें', title: 'सहायता सहायक', status: 'ऑनलाइन · हम जल्दी जवाब देते हैं',
      close: 'चैट बंद करें', placeholder: 'अपना सवाल लिखें…', send: 'भेजें',
      greeting: 'नमस्ते! \uD83D\uDE4F मैं श्री अन्नपूर्णेश्वरी इलेक्ट्रिकल्स सहायक हूँ। उत्पाद, सेवाएँ, स्थान या संपर्क के बारे में पूछें — या नीचे विकल्प चुनें।',
      chips: { products: 'उत्पाद', services: 'सेवाएँ', quote: 'कोटेशन लें', location: 'स्थान', contact: 'संपर्क', brands: 'ब्रांड', instagram: 'इंस्टाग्राम' },
      productsIntro: 'हम संपूर्ण सोलर, वॉटर और पावर समाधान देते हैं:',
      productsOutro: 'किसी भी उत्पाद के बारे में पूछें, या <strong>कोटेशन लें</strong> दबाएँ।',
      servicesIntro: 'हमारी सेवाएँ:',
      brandsIntro: 'हम भरोसेमंद ब्रांडों के अधिकृत डीलर और चैनल पार्टनर हैं:',
      brandsList: ['<strong>V-Guard</strong> — सोलर रूफटॉप के लिए अधिकृत चैनल पार्टनर', '<strong>Exide और Eastman</strong> — होम UPS, इन्वर्टर और बैटरी', '<strong>Redsun</strong> — सोलर और हीट पंप वॉटर हीटर', '<strong>Racold</strong> — इलेक्ट्रिक वॉटर हीटर', '<strong>Zero B</strong> — वॉटर सॉफ़्टनर और RO'],
      quoteText: 'हम खुशी से <strong>मुफ़्त कोटेशन</strong> देंगे। कीमत आपकी क्षमता और साइट पर निर्भर करती है, इसलिए हमारी टीम सही विकल्प बताएगी। WhatsApp पर संदेश भेजें या कॉल करें।',
      locationText: '<strong>हमारी दुकान पर आएं:</strong><br>' + esc(BIZ.address) + '<br>हम पूरे कर्नाटक में सेवा देते हैं।',
      contactText: 'हमसे ऐसे संपर्क करें:',
      contactLines: ['\uD83D\uDCDE फ़ोन / WhatsApp: <strong>' + esc(BIZ.phoneDisplay) + '</strong>', '\u2709\uFE0F ईमेल: <strong>' + esc(BIZ.email) + '</strong>', '\uD83C\uDF10 वेबसाइट: <strong>' + BIZ.websiteLabel + '</strong>'],
      hoursText: 'हमारी दुकान <strong>सुबह 9:00 बजे से</strong> खुलती है। आज के सही समय और छुट्टियों के लिए कृपया कॉल करें।',
      areaText: 'हम <strong>चित्रदुर्ग</strong> में स्थित हैं और <strong>' + BIZ.since + ' से पूरे कर्नाटक</strong> में ग्राहकों की सेवा कर रहे हैं।',
      aboutText: 'श्री अन्नपूर्णेश्वरी इलेक्ट्रिकल्स, मालिक <strong>' + esc(BIZ.proprietor) + '</strong> के नेतृत्व में, <strong>' + BIZ.since + ' से</strong> पूरे कर्नाटक में भरोसेमंद सोलर, वॉटर हीटिंग और पावर बैकअप समाधान दे रहा है।',
      warrantyText: 'हाँ — हम <strong>वारंटी सहायता, AMC और रखरखाव, मरम्मत और सेवा</strong> देते हैं। अपना उत्पाद बताएं।',
      installText: 'हमारी टीम <strong>पेशेवर इंस्टॉलेशन</strong>, रूफटॉप सर्वे और पूरा प्रोजेक्ट संभालती है। अपनी ज़रूरत बताएं।',
      fallback: 'मैं <strong>उत्पाद, सेवाएँ, कीमत, स्थान</strong> और <strong>संपर्क</strong> में मदद कर सकता हूँ। आप सीधे WhatsApp पर भी चैट कर सकते हैं।',
      thanks: 'आपका स्वागत है! \uD83D\uDE4F और कुछ मदद चाहिए?',
      quoteNudge: 'क्या आप इसके लिए मुफ़्त कोटेशन चाहते हैं?',
      waLabel: 'WhatsApp', callLabel: 'कॉल', mapLabel: 'रास्ता', waMsg: 'नमस्ते, श्री अन्नपूर्णेश्वरी इलेक्ट्रिकल्स \uD83D\uDC4B आपकी वेबसाइट से पूछताछ करना चाहता हूँ।', waAsked: 'मेरा सवाल:', instaLabel: 'इंस्टाग्राम', instaReply: 'हमारे नए वीडियो, रील्स और इंस्टॉलेशन अपडेट इंस्टाग्राम पर देखें — <strong>@lo.kesh5907</strong>.'
    },
    te: {
      launch: 'చాట్ చేయండి', title: 'సహాయ సహాయకుడు', status: 'ఆన్‌లైన్ · మేము త్వరగా స్పందిస్తాము',
      close: 'చాట్ మూసివేయి', placeholder: 'మీ ప్రశ్న టైప్ చేయండి…', send: 'పంపండి',
      greeting: 'నమస్తే! \uD83D\uDE4F నేను శ్రీ అన్నపూర్ణేశ్వరి ఎలక్ట్రికల్స్ సహాయకుడిని. ఉత్పత్తులు, సేవలు, స్థానం లేదా సంప్రదింపుల గురించి అడగండి — లేదా కింద ఎంపిక ఎంచుకోండి.',
      chips: { products: 'ఉత్పత్తులు', services: 'సేవలు', quote: 'కొటేషన్', location: 'స్థానం', contact: 'సంప్రదించండి', brands: 'బ్రాండ్‌లు', instagram: 'ఇన్‌స్టాగ్రామ్' },
      productsIntro: 'మేము సంపూర్ణ సోలార్, నీరు మరియు పవర్ పరిష్కారాలను అందిస్తాము:',
      productsOutro: 'ఏదైనా ఉత్పత్తి గురించి అడగండి, లేదా <strong>కొటేషన్</strong> నొక్కండి.',
      servicesIntro: 'మా సేవలు:',
      brandsIntro: 'మేము నమ్మకమైన బ్రాండ్‌ల అధీకృత డీలర్ మరియు ఛానల్ భాగస్వామి:',
      brandsList: ['<strong>V-Guard</strong> — సోలార్ రూఫ్‌టాప్‌కు అధీకృత ఛానల్ భాగస్వామి', '<strong>Exide &amp; Eastman</strong> — హోమ్ UPS, ఇన్వర్టర్లు &amp; బ్యాటరీలు', '<strong>Redsun</strong> — సోలార్ &amp; హీట్ పంప్ వాటర్ హీటర్లు', '<strong>Racold</strong> — ఎలక్ట్రిక్ వాటర్ హీటర్లు', '<strong>Zero B</strong> — వాటర్ సాఫ్ట్‌నర్ &amp; RO'],
      quoteText: 'మేము సంతోషంగా <strong>ఉచిత కొటేషన్</strong> ఇస్తాము. ధర మీ సామర్థ్యం మరియు సైట్‌పై ఆధారపడి ఉంటుంది, కాబట్టి మా బృందం సరైన ఎంపికను సూచిస్తుంది. WhatsAppలో సందేశం పంపండి లేదా కాల్ చేయండి.',
      locationText: '<strong>మా దుకాణాన్ని సందర్శించండి:</strong><br>' + esc(BIZ.address) + '<br>మేము కర్ణాటక అంతటా సేవలందిస్తాము.',
      contactText: 'మమ్మల్ని ఇలా సంప్రదించండి:',
      contactLines: ['\uD83D\uDCDE ఫోన్ / WhatsApp: <strong>' + esc(BIZ.phoneDisplay) + '</strong>', '\u2709\uFE0F ఇమెయిల్: <strong>' + esc(BIZ.email) + '</strong>', '\uD83C\uDF10 వెబ్‌సైట్: <strong>' + BIZ.websiteLabel + '</strong>'],
      hoursText: 'మా దుకాణం <strong>ఉదయం 9:00 నుండి</strong> తెరిచి ఉంటుంది. నేటి ఖచ్చితమైన సమయం &amp; సెలవుల కోసం దయచేసి కాల్ చేయండి.',
      areaText: 'మేము <strong>చిత్రదుర్గ</strong>లో ఉన్నాము మరియు <strong>' + BIZ.since + ' నుండి కర్ణాటక అంతటా</strong> కస్టమర్లకు సేవలందిస్తున్నాము.',
      aboutText: 'శ్రీ అన్నపూర్ణేశ్వరి ఎలక్ట్రికల్స్, యజమాని <strong>' + esc(BIZ.proprietor) + '</strong> నేతృత్వంలో, <strong>' + BIZ.since + ' నుండి</strong> కర్ణాటక అంతటా నమ్మకమైన సోలార్, వాటర్ హీటింగ్ మరియు పవర్ బ్యాకప్ పరిష్కారాలను అందిస్తోంది.',
      warrantyText: 'అవును — మేము <strong>వారంటీ మద్దతు, AMC &amp; నిర్వహణ, రిపేర్ &amp; సేవ</strong> అందిస్తాము. మీ ఉత్పత్తి చెప్పండి.',
      installText: 'మా బృందం <strong>వృత్తిపరమైన ఇన్‌స్టాలేషన్</strong>, రూఫ్‌టాప్ సర్వే మరియు పూర్తి ప్రాజెక్ట్ నిర్వహిస్తుంది. మీ అవసరం చెప్పండి.',
      fallback: 'నేను <strong>ఉత్పత్తులు, సేవలు, ధర, స్థానం</strong> మరియు <strong>సంప్రదింపు</strong>లో సహాయం చేయగలను. మీరు నేరుగా WhatsAppలో కూడా చాట్ చేయవచ్చు.',
      thanks: 'స్వాగతం! \uD83D\uDE4F ఇంకేమైనా సహాయం కావాలా?',
      quoteNudge: 'దీనికి ఉచిత కొటేషన్ కావాలా?',
      waLabel: 'WhatsApp', callLabel: 'కాల్', mapLabel: 'దారి', waMsg: 'నమస్తే, శ్రీ అన్నపూర్ణేశ్వరి ఎలక్ట్రికల్స్ \uD83D\uDC4B మీ వెబ్‌సైట్ నుండి విచారించాలనుకుంటున్నాను.', waAsked: 'నా ప్రశ్న:', instaLabel: 'ఇన్‌స్టాగ్రామ్', instaReply: 'మా తాజా వీడియోలు, రీల్స్ మరియు ఇన్‌స్టాలేషన్ అప్‌డేట్‌లను ఇన్‌స్టాగ్రామ్‌లో చూడండి — <strong>@lo.kesh5907</strong>.'
    },
    ta: {
      launch: 'அரட்டை', title: 'உதவி உதவியாளர்', status: 'ஆன்லைன் · விரைவில் பதிலளிப்போம்',
      close: 'அரட்டையை மூடு', placeholder: 'உங்கள் கேள்வியை தட்டச்சு செய்யவும்…', send: 'அனுப்பு',
      greeting: 'வணக்கம்! \uD83D\uDE4F நான் ஸ்ரீ அன்னபூர்ணேஸ்வரி எலக்ட்ரிக்கல்ஸ் உதவியாளர். தயாரிப்புகள், சேவைகள், இடம் அல்லது தொடர்பு பற்றி கேளுங்கள் — அல்லது கீழே தேர்வு செய்யுங்கள்.',
      chips: { products: 'தயாரிப்புகள்', services: 'சேவைகள்', quote: 'மதிப்பீடு', location: 'இடம்', contact: 'தொடர்பு', brands: 'பிராண்டுகள்', instagram: 'இன்ஸ்டாகிராம்' },
      productsIntro: 'நாங்கள் முழுமையான சோலார், நீர் மற்றும் பவர் தீர்வுகளை வழங்குகிறோம்:',
      productsOutro: 'எந்த தயாரிப்பு பற்றியும் கேளுங்கள், அல்லது <strong>மதிப்பீடு</strong> தட்டவும்.',
      servicesIntro: 'எங்கள் சேவைகள்:',
      brandsIntro: 'நாங்கள் நம்பகமான பிராண்டுகளின் அங்கீகரிக்கப்பட்ட டீலர் மற்றும் சேனல் பங்குதாரர்:',
      brandsList: ['<strong>V-Guard</strong> — சோலார் ரூஃப்டாப்பிற்கு அங்கீகரிக்கப்பட்ட சேனல் பங்குதாரர்', '<strong>Exide &amp; Eastman</strong> — ஹோம் UPS, இன்வர்ட்டர் &amp; பேட்டரிகள்', '<strong>Redsun</strong> — சோலார் &amp; ஹீட் பம்ப் வாட்டர் ஹீட்டர்கள்', '<strong>Racold</strong> — எலக்ட்ரிக் வாட்டர் ஹீட்டர்கள்', '<strong>Zero B</strong> — வாட்டர் சாஃப்ட்னர் &amp; RO'],
      quoteText: 'நாங்கள் மகிழ்ச்சியுடன் <strong>இலவச மதிப்பீடு</strong> வழங்குகிறோம். விலை உங்கள் திறன் மற்றும் இடத்தைப் பொறுத்தது, எனவே எங்கள் குழு சரியான தேர்வை வழிகாட்டும். WhatsAppல் செய்தி அனுப்பவும் அல்லது அழைக்கவும்.',
      locationText: '<strong>எங்கள் கடைக்கு வாருங்கள்:</strong><br>' + esc(BIZ.address) + '<br>நாங்கள் கர்நாடகா முழுவதும் சேவை செய்கிறோம்.',
      contactText: 'எங்களை இப்படி தொடர்பு கொள்ளுங்கள்:',
      contactLines: ['\uD83D\uDCDE ஃபோன் / WhatsApp: <strong>' + esc(BIZ.phoneDisplay) + '</strong>', '\u2709\uFE0F மின்னஞ்சல்: <strong>' + esc(BIZ.email) + '</strong>', '\uD83C\uDF10 வலைத்தளம்: <strong>' + BIZ.websiteLabel + '</strong>'],
      hoursText: 'எங்கள் கடை <strong>காலை 9:00 மணி முதல்</strong> திறந்திருக்கும். இன்றைய சரியான நேரம் &amp; விடுமுறைகளுக்கு தயவுசெய்து அழைக்கவும்.',
      areaText: 'நாங்கள் <strong>சித்ரதுர்கா</strong>வில் உள்ளோம், <strong>' + BIZ.since + ' முதல் கர்நாடகா முழுவதும்</strong> வாடிக்கையாளர்களுக்கு சேவை செய்கிறோம்.',
      aboutText: 'ஸ்ரீ அன்னபூர்ணேஸ்வரி எலக்ட்ரிக்கல்ஸ், உரிமையாளர் <strong>' + esc(BIZ.proprietor) + '</strong> தலைமையில், <strong>' + BIZ.since + ' முதல்</strong> கர்நாடகா முழுவதும் நம்பகமான சோலார், வாட்டர் ஹீட்டிங் மற்றும் பவர் பேக்கப் தீர்வுகளை வழங்கி வருகிறது.',
      warrantyText: 'ஆம் — நாங்கள் <strong>வாரண்டி ஆதரவு, AMC &amp; பராமரிப்பு, பழுது &amp; சேவை</strong> வழங்குகிறோம். உங்கள் தயாரிப்பைச் சொல்லுங்கள்.',
      installText: 'எங்கள் குழு <strong>தொழில்முறை நிறுவல்</strong>, ரூஃப்டாப் சர்வே மற்றும் முழு திட்டத்தையும் கையாளுகிறது. உங்கள் தேவையைச் சொல்லுங்கள்.',
      fallback: 'நான் <strong>தயாரிப்புகள், சேவைகள், விலை, இடம்</strong> மற்றும் <strong>தொடர்பு</strong> குறித்து உதவ முடியும். நேரடியாக WhatsAppலும் அரட்டையடிக்கலாம்.',
      thanks: 'நல்வரவு! \uD83D\uDE4F வேறு ஏதேனும் உதவி வேண்டுமா?',
      quoteNudge: 'இதற்கு இலவச மதிப்பீடு வேண்டுமா?',
      waLabel: 'WhatsApp', callLabel: 'அழை', mapLabel: 'வழி', waMsg: 'வணக்கம், ஸ்ரீ அன்னபூர்ணேஸ்வரி எலக்ட்ரிக்கல்ஸ் \uD83D\uDC4B உங்கள் இணையதளத்திலிருந்து விசாரிக்க விரும்புகிறேன்.', waAsked: 'எனது கேள்வி:', instaLabel: 'இன்ஸ்டாகிராம்', instaReply: 'எங்கள் சமீபத்திய வீடியோக்கள், ரீல்ஸ் மற்றும் நிறுவல் புதுப்பிப்புகளை இன்ஸ்டாகிராமில் காணுங்கள் — <strong>@lo.kesh5907</strong>.'
    }
  };

  /* ---- Intent keyword map (English + brand names) ---- */
  var INTENTS = [
    { id: 'greeting', k: ['hi', 'hello', 'hey', 'namaste', 'namaskara', 'good morning', 'good evening', 'vanakkam'] },
    { id: 'p0', k: ['solar water', 'solar heater', 'solar geyser', 'solar water heater'] },
    { id: 'p1', k: ['heat pump', 'heatpump'] },
    { id: 'p2', k: ['electric geyser', 'storage geyser', 'racold', 'electric water heater'] },
    { id: 'p3', k: ['gas geyser', 'gas water', 'gas heater', 'lpg'] },
    { id: 'p4', k: ['softener', 'hard water', 'soft water', 'water treatment'] },
    { id: 'p5', k: ['ro', 'purifier', 'drinking water', 'kitchenmate'] },
    { id: 'p6', k: ['pressure', 'booster', 'water pump', 'low pressure', 'flow'] },
    { id: 'p7', k: ['inverter', 'ups', 'battery', 'batteries', 'exide', 'power backup', 'power cut', 'backup'] },
    { id: 'p8', k: ['rooftop', 'solar panel', 'solar power', 'solar system', 'on-grid', 'off-grid', 'electricity bill', 'solar rooftop'] },
    { id: 'quote', k: ['price', 'cost', 'quote', 'quotation', 'estimate', 'rate', 'how much', 'budget', 'emi', 'offer', 'discount'] },
    { id: 'install', k: ['install', 'installation', 'fitting', 'fit', 'setup'] },
    { id: 'warranty', k: ['warranty', 'guarantee', 'amc', 'maintenance', 'repair', 'service center', 'servicing'] },
    { id: 'services', k: ['service', 'services'] },
    { id: 'location', k: ['location', 'address', 'where', 'store', 'shop', 'directions', 'map', 'visit', 'chitradurga'] },
    { id: 'hours', k: ['hours', 'timing', 'timings', 'open', 'close', 'time'] },
    { id: 'contact', k: ['contact', 'phone', 'call', 'number', 'email', 'whatsapp', 'reach', 'mobile'] },
    { id: 'brands', k: ['brand', 'brands', 'dealer', 'authorised', 'authorized', 'vguard', 'v-guard', 'zero b', 'zerob'] },
    { id: 'area', k: ['karnataka', 'area', 'serve', 'service area', 'deliver', 'cover', 'davangere'] },
    { id: 'about', k: ['about', 'who are', 'experience', 'years', 'established', 'since', 'owner', 'proprietor', 'lokesh'] },
    { id: 'products', k: ['product', 'products', 'items', 'sell', 'catalogue', 'catalog', 'buy', 'what do you'] },
    { id: 'instagram', k: ['instagram', 'insta', 'reel', 'reels', 'follow', 'social', 'video', 'videos', 'page'] },
    { id: 'thanks', k: ['thank', 'thanks', 'super', 'great', 'ok', 'okay'] }
  ];
  var PRODUCT_INDEX = { p0: 0, p1: 1, p2: 2, p3: 3, p4: 4, p5: 5, p6: 6, p7: 7, p8: 8 };

  function lang() {
    var l = document.documentElement.lang;
    return UI[l] ? l : 'en';
  }
  function T() { return (window.TRANSLATIONS && window.TRANSLATIONS[lang()]) || (window.TRANSLATIONS && window.TRANSLATIONS.en) || null; }

  function matchIntent(text) {
    var t = ' ' + text.toLowerCase().trim() + ' ';
    var best = null, bestScore = 0;
    INTENTS.forEach(function (intent) {
      var score = 0;
      intent.k.forEach(function (kw) { if (t.indexOf(kw) !== -1) score += kw.length > 4 ? 2 : 1; });
      if (score > bestScore) { bestScore = score; best = intent.id; }
    });
    return bestScore > 0 ? best : 'fallback';
  }

  /* ---- Compose a reply object {html, links, chips} from real data ---- */
  function reply(intentId) {
    var u = UI[lang()], t = T(), links = [], chips = ['products', 'services', 'quote', 'contact'], html = '';
    var listFrom = function (arr) { return '<ul>' + arr.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>'; };

    if (intentId in PRODUCT_INDEX && t) {
      var it = t.products.items[PRODUCT_INDEX[intentId]];
      html = '<strong>' + esc(it.name) + '</strong><br>' + esc(it.desc) + '<br><br>' + u.quoteNudge;
      links = ['wa', 'call']; chips = ['quote', 'products', 'location', 'contact'];
    } else switch (intentId) {
      case 'greeting': html = u.greeting; chips = ['products', 'services', 'quote', 'location']; break;
      case 'products':
        html = u.productsIntro + (t ? listFrom(t.products.items.map(function (i) { return '<strong>' + esc(i.name) + '</strong>'; })) : '') + u.productsOutro;
        chips = ['quote', 'brands', 'services', 'contact']; break;
      case 'services':
        html = u.servicesIntro + (t ? listFrom(t.services.items.map(function (i) { return esc(i.name); })) : '');
        chips = ['quote', 'warranty', 'products', 'contact']; links = ['wa']; break;
      case 'warranty': html = u.warrantyText; links = ['wa', 'call']; chips = ['services', 'quote', 'contact']; break;
      case 'install': html = u.installText; links = ['wa', 'call']; chips = ['quote', 'services', 'location']; break;
      case 'brands': html = u.brandsIntro + listFrom(u.brandsList); chips = ['products', 'quote', 'contact']; break;
      case 'quote': html = u.quoteText; links = ['wa', 'call']; chips = ['products', 'location', 'contact']; break;
      case 'location': html = u.locationText; links = ['map', 'call']; chips = ['contact', 'products', 'quote']; break;
      case 'contact': html = u.contactText + listFrom(u.contactLines); links = ['wa', 'call', 'insta']; chips = ['location', 'instagram', 'quote']; break;
      case 'instagram': html = u.instaReply; links = ['insta', 'wa']; chips = ['products', 'contact', 'quote']; break;
      case 'hours': html = u.hoursText; links = ['call', 'wa']; chips = ['location', 'contact', 'products']; break;
      case 'area': html = u.areaText; links = ['wa']; chips = ['products', 'location', 'contact']; break;
      case 'about': html = u.aboutText; links = ['wa']; chips = ['products', 'services', 'brands']; break;
      case 'thanks': html = u.thanks; chips = ['products', 'services', 'quote', 'contact']; break;
      default: html = u.fallback; links = ['wa', 'call']; chips = ['products', 'services', 'location', 'contact'];
    }
    return { html: html, links: links, chips: chips };
  }

  /* ---- DOM ---- */
  var ICON = {
    chat: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2Zm3 6v2h10v-2H7Zm0-3v2h7V7H7Z"/></svg>',
    close: '\u00d7',
    send: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3l18 9-18 9 4-9-4-9zm5.5 9L6 16.9 15.8 12 6 7.1 8.5 12z"/></svg>',
    wa: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.5 14.4c-.3-.2-1.7-.8-1.9-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.9-2.9-1.6-4-3.5-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.6 1.9.8 2.7.9 3.6.8.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.2-.6-.4zM12 2a10 10 0 0 0-8.6 15l-1.3 4.9 5-1.3A10 10 0 1 0 12 2z"/></svg>',
    call: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1l-2.2 2.2z"/></svg>',
    map: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/></svg>',
    insta: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm4.75-3a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z"/></svg>'
  };

  var launch, panel, body, chipsBar, input, form, titleEl, statusEl, closeBtn, launchLabel;
  var greeted = false;
  var lastQuery = '';

  function linkHtml(type) {
    var u = UI[lang()];
    if (type === 'wa') { var m = (u.waMsg || '') + (lastQuery ? '\n\n' + (u.waAsked || 'My question:') + ' ' + lastQuery : ''); return '<a class="is-wa" href="' + wa(m) + '" target="_blank" rel="noopener">' + ICON.wa + u.waLabel + '</a>'; }
    if (type === 'call') return '<a class="is-call" href="tel:' + BIZ.tel + '">' + ICON.call + u.callLabel + '</a>';
    if (type === 'map') return '<a class="is-map" href="' + BIZ.maps + '" target="_blank" rel="noopener">' + ICON.map + u.mapLabel + '</a>';
    if (type === 'insta') return '<a class="is-insta" href="' + BIZ.instagram + '" target="_blank" rel="noopener">' + ICON.insta + (u.instaLabel || 'Instagram') + '</a>';
    return '';
  }

  function addMsg(kind, html) {
    var el = document.createElement('div');
    el.className = 'chat-msg chat-msg--' + kind;
    el.innerHTML = html;
    body.appendChild(el);
    body.scrollTop = body.scrollHeight;
    return el;
  }

  function renderChips(keys) {
    var u = UI[lang()];
    chipsBar.innerHTML = keys.map(function (k) {
      return '<button type="button" class="chat-chip" data-intent="' + k + '">' + u.chips[k] + '</button>';
    }).join('');
  }

  function botRespond(intentId) {
    var typing = document.createElement('div');
    typing.className = 'chat-typing';
    typing.innerHTML = '<span></span><span></span><span></span>';
    body.appendChild(typing);
    body.scrollTop = body.scrollHeight;
    var delay = reducedMotionQuery.matches ? 120 : 480;
    setTimeout(function () {
      typing.remove();
      var r = reply(intentId);
      var linksHtml = r.links && r.links.length ? '<div class="chat-links">' + r.links.map(linkHtml).join('') + '</div>' : '';
      addMsg('bot', r.html + linksHtml);
      renderChips(r.chips);
    }, delay);
  }

  var reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  function sendUser(text) {
    text = text.trim();
    if (!text) return;
    lastQuery = text;
    addMsg('user', esc(text));
    botRespond(matchIntent(text));
  }

  function openPanel() {
    panel.classList.add('is-open');
    panel.setAttribute('aria-hidden', 'false');
    launch.classList.add('is-hidden');
    launch.setAttribute('aria-expanded', 'true');
    var badge = launch.querySelector('.chat-launch__badge');
    if (badge) badge.remove();
    if (!greeted) {
      greeted = true;
      botRespond('greeting');
    }
    setTimeout(function () { input.focus(); }, 300);
  }
  function closePanel() {
    panel.classList.remove('is-open');
    panel.setAttribute('aria-hidden', 'true');
    launch.classList.remove('is-hidden');
    launch.setAttribute('aria-expanded', 'false');
    launch.focus();
  }

  function applyChatLang() {
    var u = UI[lang()];
    titleEl.textContent = u.title;
    statusEl.textContent = u.status;
    input.setAttribute('placeholder', u.placeholder);
    input.setAttribute('aria-label', u.placeholder);
    closeBtn.setAttribute('aria-label', u.close);
    launch.setAttribute('aria-label', u.launch);
    if (launchLabel) launchLabel.textContent = u.launch;
    form.querySelector('button').setAttribute('aria-label', u.send);
  }

  function build() {
    var u = UI[lang()];
    launch = document.createElement('button');
    launch.type = 'button';
    launch.className = 'chat-launch';
    launch.setAttribute('aria-label', u.launch);
    launch.setAttribute('aria-expanded', 'false');
    launch.innerHTML = '<span class="chat-launch__pulse" aria-hidden="true"></span>' + ICON.chat + '<span class="chat-launch__text">' + u.launch + '</span><span class="chat-launch__badge" aria-hidden="true">1</span>';
    launchLabel = launch.querySelector('.chat-launch__text');

    panel = document.createElement('div');
    panel.className = 'chat-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'Sri Annapurneshwari Electricals help assistant');
    panel.setAttribute('aria-hidden', 'true');
    panel.innerHTML =
      '<div class="chat-head">' +
        '<span class="chat-head__avatar" aria-hidden="true">' + ICON.chat + '</span>' +
        '<span class="chat-head__info"><strong class="chat-head__title"></strong><span class="chat-head__status"></span></span>' +
        '<button type="button" class="chat-head__close">' + ICON.close + '</button>' +
      '</div>' +
      '<div class="chat-body" role="log" aria-live="polite"></div>' +
      '<div class="chat-chips"></div>' +
      '<form class="chat-form"><input type="text" autocomplete="off" /><button type="submit">' + ICON.send + '</button></form>';

    document.body.appendChild(launch);
    document.body.appendChild(panel);

    body = panel.querySelector('.chat-body');
    chipsBar = panel.querySelector('.chat-chips');
    form = panel.querySelector('.chat-form');
    input = panel.querySelector('.chat-form input');
    titleEl = panel.querySelector('.chat-head__title');
    statusEl = panel.querySelector('.chat-head__status');
    closeBtn = panel.querySelector('.chat-head__close');

    applyChatLang();

    launch.addEventListener('click', openPanel);
    closeBtn.addEventListener('click', closePanel);
    form.addEventListener('submit', function (e) { e.preventDefault(); var v = input.value; input.value = ''; sendUser(v); });
    chipsBar.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-intent]');
      if (!btn) return;
      var u2 = UI[lang()];
      var label = u2.chips[btn.dataset.intent] || btn.textContent;
      lastQuery = label;
      addMsg('user', esc(label));
      botRespond(btn.dataset.intent);
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && panel.classList.contains('is-open')) closePanel(); });

    // Follow site language changes
    new MutationObserver(function () { applyChatLang(); }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();
})();

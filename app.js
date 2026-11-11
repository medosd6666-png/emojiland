/* =========================================
   EMOJILAND - MAIN JAVASCRIPT
   ========================================= */

(() => {
  "use strict";

  const LANGUAGE_KEY = "emojilandLanguage";

  const translations = {
    ar: {
      copied: "تم نسخ الإيموش بنجاح!",
      download: "تنزيل",
      noResults: "لا توجد نتائج",
      enterText: "اكتب عبارة أولاً",
      created: "تم تجهيز الملصق بنجاح!",
      searchPlaceholder: "ابحث عن إيموش...",
      stickerSearchPlaceholder: "ابحث عن ملصق...",
      stickerDescription: "ملصق أصلي من مملكة الإيموش",
      emojiTitle: "اضغط لنسخ الإيموش",
      downloadDone: "تم تنزيل الملصق بنجاح!",
      downloadError: "تعذر تنزيل الملف، حاول مرة أخرى"
    },
    en: {
      copied: "Emoji copied successfully!",
      download: "Download",
      noResults: "No results found",
      enterText: "Please enter some text first",
      created: "Your sticker is ready!",
      searchPlaceholder: "Search emojis...",
      stickerSearchPlaceholder: "Search stickers...",
      stickerDescription: "An original Emojiland sticker",
      emojiTitle: "Click to copy emoji",
      downloadDone: "Sticker downloaded successfully!",
      downloadError: "Could not download the file. Please try again."
    }
  };

  const emojiGroups = [
    {
      category: "smileys",
      titleAr: "وجوه ومشاعر",
      titleEn: "Smileys & Emotions",
      emojis: ["😀","😃","😄","😁","😆","😅","😂","🤣","😊","😇","🙂","🙃","😉","😍","🥰","😘","😋","😎","🤩","🥳","😭","😢","😡","🤔","🤗","😴","🥱","😱","🤯","🥺"]
    },
    {
      category: "love",
      titleAr: "حب وقلوب",
      titleEn: "Love & Hearts",
      emojis: ["❤️","🧡","💛","💚","💙","💜","🖤","🤍","🤎","💖","💗","💓","💞","💕","💘","💝","💟","❣️","💋","😍"]
    },
    {
      category: "hands",
      titleAr: "أيدي وإشارات",
      titleEn: "Hands & Gestures",
      emojis: ["👋","🤚","🖐️","✋","🖖","👌","🤌","🤏","✌️","🤞","🤟","🤘","🤙","👈","👉","👆","👇","☝️","👍","👎","✊","👊","👏","🙌","🙏","💪"]
    },
    {
      category: "animals",
      titleAr: "حيوانات وطبيعة",
      titleEn: "Animals & Nature",
      emojis: ["🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐨","🐯","🦁","🐮","🐷","🐸","🐵","🐔","🐧","🐦","🦋","🐝","🌸","🌹","🌻","🌈","🌙","⭐"]
    },
    {
      category: "food",
      titleAr: "طعام وشراب",
      titleEn: "Food & Drink",
      emojis: ["🍎","🍉","🍓","🍒","🍍","🥭","🍌","🍇","🍕","🍔","🍟","🌮","🍿","🍩","🍪","🎂","🍫","🍭","☕","🧃"]
    },
    {
      category: "activities",
      titleAr: "أنشطة واحتفالات",
      titleEn: "Activities & Celebration",
      emojis: ["⚽","🏀","🎮","🎯","🎁","🎉","🎊","🎈","🎵","🎧","🎤","🏆","🥇","🚀","✈️","🚗","💎","🔥","✨","💯"]
    }
  ];

  const stickerDesigns = [
    { id: 1, nameAr: "أحبك", nameEn: "Love You", textAr: "أحبك", textEn: "Love You", color: "#ff477e", symbol: "❤️", bg: "#fff0f4" },
    { id: 2, nameAr: "صباح الخير", nameEn: "Good Morning", textAr: "صباح الخير", textEn: "Good Morning", color: "#e59b19", symbol: "☀️", bg: "#fff8dc" },
    { id: 3, nameAr: "شكراً", nameEn: "Thank You", textAr: "شكراً", textEn: "Thank You", color: "#4776d0", symbol: "💙", bg: "#edf4ff" },
    { id: 4, nameAr: "مبروك", nameEn: "Congratulations", textAr: "مبروك", textEn: "Congratulations", color: "#8b55c5", symbol: "🎉", bg: "#f6edff" },
    { id: 5, nameAr: "ابتسم", nameEn: "Smile", textAr: "ابتسم", textEn: "Smile", color: "#df8c19", symbol: "😊", bg: "#fff4d9" },
    { id: 6, nameAr: "أنت رائع", nameEn: "You're Amazing", textAr: "أنت رائع", textEn: "You're Amazing", color: "#159b83", symbol: "⭐", bg: "#e8fff8" },
    { id: 7, nameAr: "قلبي معك", nameEn: "Heart With You", textAr: "قلبي معك", textEn: "Heart With You", color: "#e74d65", symbol: "💗", bg: "#fff0f2" },
    { id: 8, nameAr: "يوم جميل", nameEn: "Beautiful Day", textAr: "يوم جميل", textEn: "Beautiful Day", color: "#398bc2", symbol: "🌈", bg: "#eefaff" },
    { id: 9, nameAr: "أحلى مساء", nameEn: "Lovely Evening", textAr: "أحلى مساء", textEn: "Lovely Evening", color: "#7656b7", symbol: "🌙", bg: "#f1edff" },
    { id: 10, nameAr: "فرحة", nameEn: "Happiness", textAr: "فرحة", textEn: "Happiness", color: "#d58a16", symbol: "🥳", bg: "#fff5df" },
    { id: 11, nameAr: "صديقي", nameEn: "My Friend", textAr: "صديقي", textEn: "My Friend", color: "#238b78", symbol: "🤝", bg: "#eafff7" },
    { id: 12, nameAr: "أحلام سعيدة", nameEn: "Sweet Dreams", textAr: "أحلام سعيدة", textEn: "Sweet Dreams", color: "#7355b9", symbol: "🌟", bg: "#f4efff" }
  ];

  let currentLanguage = "ar";

  try {
    const savedLanguage = localStorage.getItem(LANGUAGE_KEY);
    const urlLanguage = new URLSearchParams(location.search).get("lang");

    currentLanguage =
      savedLanguage ||
      (["ar", "en"].includes(urlLanguage) ? urlLanguage : "ar");
  } catch (error) {
    currentLanguage = "ar";
  }

  if (!["ar", "en"].includes(currentLanguage)) {
    currentLanguage = "ar";
  }

  const t = (key) => translations[currentLanguage][key] || key;

  function showMessage(message) {
    const messageElement = document.getElementById("copyMessage");

    if (messageElement) {
      messageElement.textContent = message;
    }

    let toast = document.getElementById("emojiland-toast");

    if (!toast) {
      toast = document.createElement("div");
      toast.id = "emojiland-toast";

      toast.style.cssText =
        "position:fixed;bottom:25px;left:50%;transform:translateX(-50%);" +
        "background:#202536;color:white;padding:12px 22px;border-radius:30px;" +
        "z-index:99999;font-size:14px;box-shadow:0 5px 20px #0002;" +
        "max-width:90%;text-align:center;opacity:0;transition:opacity .2s";

      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.style.opacity = "1";

    clearTimeout(showMessage.timer);

    showMessage.timer = setTimeout(() => {
      toast.style.opacity = "0";
    }, 2200);
  }

  // تطبيق اللغة على جميع الصفحات

  function applyLanguage(language) {
    if (!["ar", "en"].includes(language)) return;

    currentLanguage = language;

    try {
      localStorage.setItem(LANGUAGE_KEY, language);
    } catch (error) {
      console.warn("Could not save language preference.");
    }

    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-ar], [data-en]").forEach((element) => {
      const value = element.getAttribute(
        language === "ar" ? "data-ar" : "data-en"
      );

      if (value !== null) {
        element.innerHTML = value;
      }
    });

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;

      if (translations[language][key]) {
        element.textContent = translations[language][key];
      }
    });

    // تحديث أزرار اللغة في جميع الصفحات
    document.querySelectorAll("#languageButton, [data-lang]").forEach((button) => {
      const buttonLanguage = button.dataset.lang;

      if (buttonLanguage) {
        button.textContent = buttonLanguage === "ar" ? "العربية" : "English";
        button.classList.toggle("active", buttonLanguage === language);
      } else {
        button.textContent =
          language === "ar" ? "🇬🇧 English" : "🇸🇦 العربية";
      }

      button.setAttribute(
        "aria-label",
        language === "ar" ? "Switch to English" : "التبديل إلى العربية"
      );
    });

    // تحديث الحقول
    document.querySelectorAll("[data-ar-placeholder], [data-en-placeholder]").forEach((element) => {
      const value = element.getAttribute(
        language === "ar" ? "data-ar-placeholder" : "data-en-placeholder"
      );

      if (value !== null) {
        element.placeholder = value;
      }
    });

    const emojiSearch = document.getElementById("emojiSearch");
    const stickerSearch = document.getElementById("stickerSearch");

    if (emojiSearch) emojiSearch.placeholder = t("searchPlaceholder");
    if (stickerSearch) stickerSearch.placeholder = t("stickerSearchPlaceholder");

    if (emojiSearch) emojiSearch.dir = language === "ar" ? "rtl" : "ltr";
    if (stickerSearch) stickerSearch.dir = language === "ar" ? "rtl" : "ltr";

    renderEmojiGroups(
      emojiSearch ? emojiSearch.value : ""
    );

    renderStickers(
      stickerSearch ? stickerSearch.value : ""
    );

    drawSticker();
  }

  // نسخ النص والإيموش

  async function copyText(value) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = value;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";

        document.body.appendChild(textarea);
        textarea.select();

        const copied = document.execCommand("copy");
        textarea.remove();

        if (!copied) throw new Error("Copy failed");
      }

      showMessage(t("copied"));
    } catch (error) {
      showMessage(
        currentLanguage === "ar"
          ? "تعذر النسخ، حاول مرة أخرى"
          : "Could not copy. Please try again."
      );
    }
  }

  // عرض مجموعات الإيموشات في الصفحة الرئيسية

  function renderEmojiGroups(searchTerm = "") {
    const container = document.getElementById("emojiGrid");
    if (!container) return;

    const search = searchTerm.trim().toLowerCase();
    container.innerHTML = "";

    let totalResults = 0;

    emojiGroups.forEach((group) => {
      const groupTitle =
        currentLanguage === "ar" ? group.titleAr : group.titleEn;

      const matchingEmojis = group.emojis.filter((emoji) => {
        return (
          !search ||
          groupTitle.toLowerCase().includes(search) ||
          group.category.toLowerCase().includes(search) ||
          emoji.includes(search)
        );
      });

      if (!matchingEmojis.length) return;

      totalResults += matchingEmojis.length;

      const section = document.createElement("div");
      section.className = "emoji-group";
      section.dataset.category = group.category;

      const heading = document.createElement("h3");
      heading.className = "emoji-group-title";
      heading.textContent = groupTitle;

      const grid = document.createElement("div");
      grid.className = "emoji-group-grid";

      matchingEmojis.forEach((emoji) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "emoji-item";
        button.textContent = emoji;
        button.title = t("emojiTitle");
        button.setAttribute("aria-label", t("emojiTitle"));

        button.addEventListener("click", () => copyText(emoji));

        grid.appendChild(button);
      });

      section.appendChild(heading);
      section.appendChild(grid);
      container.appendChild(section);
    });

    if (!totalResults) {
      const empty = document.createElement("p");
      empty.className = "no-results";
      empty.textContent = t("noResults");
      container.appendChild(empty);
    }
  }

  // تجهيز صورة الملصق

  function createStickerSVG(sticker) {
    const text = currentLanguage === "ar"
      ? sticker.textAr
      : sticker.textEn;

    const safeText = String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

    const safeSymbol = String(sticker.symbol)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    const direction = currentLanguage === "ar" ? "rtl" : "ltr";

    return `
      <svg xmlns="http://www.w3.org/2000/svg"
           width="700" height="500" viewBox="0 0 700 500">
        <rect x="20" y="20" width="660" height="460"
              rx="75" fill="${sticker.bg}"/>
        <circle cx="350" cy="155" r="95"
                fill="${sticker.color}" opacity="0.13"/>
        <text x="350" y="190" text-anchor="middle"
              font-size="110" font-family="Arial, sans-serif">${safeSymbol}</text>
        <text x="350" y="340" text-anchor="middle"
              direction="${direction}" font-size="55"
              font-weight="bold" fill="${sticker.color}"
              font-family="Arial, sans-serif">${safeText}</text>
        <rect x="230" y="390" width="240" height="8"
              rx="4" fill="${sticker.color}" opacity="0.5"/>
      </svg>
    `;
  }

  function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = filename;

    document.body.appendChild(link);
    link.click();
    link.remove();

    setTimeout(() => URL.revokeObjectURL(url), 1500);
  }

  function downloadSticker(sticker) {
    try {
      const svg = createStickerSVG(sticker);

      const blob = new Blob(
        [svg],
        { type: "image/svg+xml;charset=utf-8" }
      );

      downloadBlob(blob, `emojiland-sticker-${sticker.id}.svg`);
      showMessage(t("downloadDone"));
    } catch (error) {
      console.error(error);
      showMessage(t("downloadError"));
    }
  }

  // عرض مكتبة الملصقات

  function renderStickers(searchTerm = "") {
    const container = document.getElementById("stickerGrid");
    if (!container) return;

    const search = searchTerm.trim().toLowerCase();
    container.innerHTML = "";

    let count = 0;

    stickerDesigns.forEach((sticker) => {
      const name = currentLanguage === "ar"
        ? sticker.nameAr
        : sticker.nameEn;

      if (
        search &&
        !name.toLowerCase().includes(search) &&
        !sticker.symbol.includes(search)
      ) {
        return;
      }

      count++;

      const card = document.createElement("article");
      card.className = "sticker-card";

      const art = document.createElement("div");
      art.className = "sticker-art";
      art.style.background = sticker.bg;
      art.style.color = sticker.color;
      art.textContent = sticker.symbol;

      const heading = document.createElement("h3");
      heading.textContent = name;

      const description = document.createElement("p");
      description.textContent = t("stickerDescription");

      const button = document.createElement("button");
      button.type = "button";
      button.className = "sticker-download-button";
      button.textContent = t("download");

      button.addEventListener("click", () => downloadSticker(sticker));

      card.appendChild(art);
      card.appendChild(heading);
      card.appendChild(description);
      card.appendChild(button);

      container.appendChild(card);
    });

    if (!count) {
      const empty = document.createElement("p");
      empty.className = "no-results";
      empty.textContent = t("noResults");
      container.appendChild(empty);
    }
  }

  // رسم الملصق الشخصي

  function drawSticker() {
    const canvas = document.getElementById("stickerCanvas");
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const textInput = document.getElementById("stickerText");
    const colorInput = document.getElementById("stickerColor");
    const emojiInput = document.getElementById("stickerEmoji");

    const text = textInput ? textInput.value.trim() : "";
    const color = colorInput ? colorInput.value : "#ff5b91";
    const emoji = emojiInput ? emojiInput.value : "💖";

    const width = canvas.width;
    const height = canvas.height;

    context.clearRect(0, 0, width, height);

    context.fillStyle = "#fff5f8";
    context.fillRect(0, 0, width, height);

    context.fillStyle = "#ffffff";
    context.beginPath();

    if (typeof context.roundRect === "function") {
      context.roundRect(35, 35, width - 70, height - 70, 65);
    } else {
      context.moveTo(100, 35);
      context.lineTo(width - 100, 35);
      context.quadraticCurveTo(width - 35, 35, width - 35, 100);
      context.lineTo(width - 35, height - 100);
      context.quadraticCurveTo(width - 35, height - 35, width - 100, height - 35);
      context.lineTo(100, height - 35);
      context.quadraticCurveTo(35, height - 35, 35, height - 100);
      context.lineTo(35, 100);
      context.quadraticCurveTo(35, 35, 100, 35);
    }

    context.fill();
    context.strokeStyle = color;
    context.lineWidth = 8;
    context.stroke();

    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "110px Arial, sans-serif";
    context.fillStyle = color;
    context.fillText(emoji || "💖", width / 2, height * 0.38);

    if (text) {
      context.fillStyle = color;
      context.font = "bold 38px Arial, sans-serif";
      context.direction = currentLanguage === "ar" ? "rtl" : "ltr";

      const maxWidth = width - 110;
      const words = text.split(/\s+/);
      const lines = [];
      let line = "";

      words.forEach((word) => {
        const testLine = line ? `${line} ${word}` : word;

        if (context.measureText(testLine).width > maxWidth && line) {
          lines.push(line);
          line = word;
        } else {
          line = testLine;
        }
      });

      if (line) lines.push(line);

      const visibleLines = lines.slice(0, 2);
      const lineHeight = 48;
      const startY = height * 0.70 -
        ((visibleLines.length - 1) * lineHeight) / 2;

      visibleLines.forEach((item, index) => {
        context.fillText(item, width / 2, startY + index * lineHeight, maxWidth);
      });
    }
  }

  // تنزيل الملصق الشخصي بصيغة PNG

  function downloadCustomSticker() {
    const canvas = document.getElementById("stickerCanvas");
    if (!canvas) return;

    try {
      canvas.toBlob((blob) => {
        if (!blob) {
          showMessage(t("downloadError"));
          return;
        }

        downloadBlob(blob, "emojiland-custom-sticker.png");
        showMessage(t("downloadDone"));
      }, "image/png");
    } catch (error) {
      console.error(error);
      showMessage(t("downloadError"));
    }
  }

  // ربط أزرار اللغة والبحث وصانع الملصقات

  function initializeEmojiland() {
    document.querySelectorAll("#languageButton, [data-lang]").forEach((button) => {
      if (button.dataset.emojilandLanguageBound === "true") return;

      button.dataset.emojilandLanguageBound = "true";

      button.addEventListener("click", () => {
        const requestedLanguage =
          button.dataset.lang ||
          (currentLanguage === "ar" ? "en" : "ar");

        applyLanguage(requestedLanguage);
      });
    });

    // مزامنة اللغة عند تغييرها من صفحة أخرى
    window.addEventListener("storage", (event) => {
      if (
        event.key === LANGUAGE_KEY &&
        ["ar", "en"].includes(event.newValue)
      ) {
        applyLanguage(event.newValue);
      }
    });

    const emojiSearch = document.getElementById("emojiSearch");

    if (emojiSearch) {
      emojiSearch.addEventListener("input", () => {
        renderEmojiGroups(emojiSearch.value);
      });
    }

    const stickerSearch = document.getElementById("stickerSearch");

    if (stickerSearch) {
      stickerSearch.addEventListener("input", () => {
        renderStickers(stickerSearch.value);
      });
    }

    ["stickerText", "stickerColor", "stickerEmoji"].forEach((id) => {
      const input = document.getElementById(id);

      if (!input) return;

      input.addEventListener("input", drawSticker);
      input.addEventListener("change", drawSticker);
    });

    [
      "downloadCustomSticker",
      "downloadStickerButton",
      "createStickerButton"
    ].forEach((id) => {
      const button = document.getElementById(id);

      if (
        !button ||
        button.dataset.emojilandDownloadBound === "true"
      ) {
        return;
      }

      button.dataset.emojilandDownloadBound = "true";
      button.addEventListener("click", downloadCustomSticker);
    });

    applyLanguage(currentLanguage);
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initializeEmojiland,
      { once: true }
    );
  } else {
    initializeEmojiland();
  }
})();
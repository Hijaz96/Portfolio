(() => {
  "use strict";

  const translations = {
    en: {
      pageTitle: "Muhamad Ikhmal Hijaz | Systems & BI Developer",
      pageDescription: "Portfolio of Muhamad Ikhmal Hijaz Bin Zulkefli, a system developer and business intelligence report builder with experience in web systems, databases, Tableau, Power BI, and Metabase.",
      skipLink: "Skip to main content",
      homeLabel: "Ikhmal Hijaz home",
      languageLabel: "Select language",
      toggleNavigation: "Toggle navigation",
      professionalSummary: "Professional summary",
      creativeCapabilities: "Creative capabilities",
      navAbout: "About",
      navExperience: "Experience",
      navExpertise: "Expertise",
      navEducation: "Education",
      navPortfolio: "Portfolio",
      navContact: "Let’s talk",
      heroEyebrow: "System Developer · BI Report Builder",
      heroTitle: "I turn complex operations into <em>clear, dependable systems.</em>",
      heroLead: "I’m Muhamad Ikhmal Hijaz, an IT professional with experience across system development, database design, application maintenance, and business intelligence reporting.",
      heroExplore: "Explore my experience",
      heroResume: "Download résumé",
      metaYears: "Years in IT",
      metaOrganizations: "Organizations",
      metaStarted: "Career started",
      scroll: "Scroll",
      scrollLabel: "Scroll to about section",
      profileKicker: "Profile / 01",
      profileTitle: "Built around useful outcomes.",
      profileStatement: "My work sits where <span>software, data, and people</span> meet.",
      profileBody: "Since 2017, I’ve helped build and maintain business systems, structure databases, and translate client requirements into practical dashboards and reports. I value dependable delivery, clear communication, and continuously improving how technology supports day-to-day work.",
      basedIn: "Based in",
      location: "Klang, Selangor",
      currentRole: "Current role",
      roleShort: "Assistant IT Officer (FA5)",
      coreFocus: "Core focus",
      focusShort: "Systems & BI reporting",
      experienceKicker: "Experience / 02",
      experienceTitle: "A career connecting systems with decisions.",
      experienceIntro: "Progressing from private-sector system development to supporting technology and reporting at Malaysia’s largest public university.",
      present: "Present",
      uitmRole: "Assistant Information Technology Officer (FA5)",
      current: "Current",
      uitmSummary: "Developing and maintaining institutional systems while supporting the database structures and technical needs behind reliable daily operations.",
      uitmDuty1: "Build and enhance web-based systems",
      uitmDuty2: "Maintain existing applications and resolve system-related needs",
      uitmDuty3: "Plan and support database structures",
      additionalResponsibility: "Additional responsibility",
      reportBuilder: "Report Builder",
      uitmReportSummary: "Developing reports around client requirements, maintaining report outputs, and assisting with presentations and delivery.",
      systemDeveloper: "System Developer",
      opensoftSummary: "Built and maintained business systems, worked with database structures, and supported clients through technical delivery and ongoing maintenance.",
      opensoftDuty1: "System development and maintenance",
      opensoftDuty2: "Database structure and application support",
      opensoftDuty3: "Client-aligned technical delivery",
      tableauReportBuilder: "Tableau Report Builder",
      opensoftReportSummary: "Created and maintained Tableau reports according to client needs and supported presentations and pitches.",
      expertiseKicker: "Expertise / 03",
      expertiseTitle: "From raw requirements to working solutions.",
      expertiseIntro: "A practical toolkit shaped by hands-on delivery across systems, reporting, databases, and digital production.",
      systemDevelopment: "System Development",
      systemDevelopmentBody: "Designing, developing, and improving web systems that support real organizational processes.",
      systemToolsLabel: "System development technologies",
      businessIntelligence: "Business Intelligence",
      businessIntelligenceBody: "Turning client requirements and operational data into reports that make information easier to understand and act on.",
      biToolsLabel: "Business intelligence technologies",
      dataDatabases: "Data & Databases",
      dataDatabasesBody: "Structuring, querying, and supporting the data foundations that applications and reports depend on.",
      dataToolsLabel: "Data and database technologies",
      maintenanceSupport: "Maintenance & Support",
      maintenanceSupportBody: "Keeping existing systems and reports stable, relevant, and aligned with changing operational needs.",
      troubleshooting: "Troubleshooting",
      enhancements: "Enhancements",
      clientSupport: "Client support",
      beyondDevelopment: "Beyond development",
      creativeTitle: "Technical thinking with a creative eye.",
      creativeBody: "Experience with Photoshop, Illustrator, video production, and photography supports stronger presentations and clearer digital communication.",
      photography: "Photography",
      video: "Video",
      design: "Design",
      educationKicker: "Education / 04",
      educationTitle: "A strong foundation in programming.",
      educationBody: "Diploma in Information Technology (Programming), Politeknik Sultan Idris Shah, 2014–2017.",
      deansList: "Dean’s List recipient",
      finalGpa: "Final GPA",
      topTen: "Top 10",
      finalReport: "Final report achievement",
      classPresident: "Class president",
      educationNote: "Also served as secretariat for PHP and MySQL system development courses.",
      contactKicker: "Contact / 05",
      contactTitle: "Have a system or reporting challenge?",
      contactBody: "Let’s talk about how clear technology and useful data can move the work forward.",
      email: "Email",
      footerTagline: "Systems built with purpose. Reports designed for clarity.",
      backToTop: "Back to top",
      portfolioPageTitle: "Portfolio | Muhamad Ikhmal Hijaz",
      portfolioPageDescription: "Explore personal projects, subscription-based products, and hands-on systems and business intelligence work by Muhamad Ikhmal Hijaz.",
      portfolioHeroKicker: "Portfolio / Selected work",
      portfolioHeroTitle: "Work shaped by <em>curiosity, utility, and real needs.</em>",
      portfolioHeroBody: "A growing collection of personal builds, subscription-ready products, and hands-on technical work across systems, reporting, and data.",
      portfolioBrowse: "Browse the portfolio",
      portfolioDiscuss: "Discuss a project",
      portfolioCategories: "Portfolio categories",
      categoryPersonal: "Personal projects",
      categorySubscription: "Subscription projects",
      categoryHandsOn: "Hands-on projects",
      personalKicker: "Independent builds / 01",
      personalTitle: "Personal projects",
      personalIntro: "Ideas I develop independently to explore useful technology, sharpen my craft, and solve everyday problems.",
      personalEmptyTitle: "New case studies are on the way.",
      personalEmptyBody: "Personal projects will be published here with the problem, approach, technologies, and working result.",
      subscriptionKicker: "Products / 02",
      subscriptionTitle: "Projects you can subscribe to",
      subscriptionIntro: "Digital products designed for recurring use, dependable support, and continuous improvement.",
      subscriptionBadge: "In development",
      subscriptionCardTitle: "Subscription products are being prepared.",
      subscriptionCardBody: "Product details, plans, features, and access links will appear here when they are ready for release.",
      handsOnKicker: "Professional delivery / 03",
      handsOnTitle: "Hands-on project experience",
      handsOnIntro: "Representative areas of work drawn from professional experience. Client and institutional details remain confidential.",
      handsOnSystemTitle: "Institutional system development",
      handsOnSystemBody: "Building, enhancing, and maintaining web-based systems that support real operational requirements.",
      handsOnSystemMeta: "Development · Maintenance · Support",
      handsOnBiTitle: "BI reports and dashboards",
      handsOnBiBody: "Translating client needs into useful reports, maintaining outputs, and supporting clear presentation and delivery.",
      handsOnBiMeta: "Tableau · Power BI · Metabase",
      handsOnDataTitle: "Database and application foundations",
      handsOnDataBody: "Planning database structures and supporting the data layer behind dependable systems and reporting.",
      handsOnDataMeta: "MySQL · Oracle DB · Application data",
      confidentialLabel: "Representative work",
      portfolioCtaKicker: "Build together",
      portfolioCtaTitle: "Have an idea worth turning into a working product?",
      portfolioCtaBody: "Let’s discuss the system, report, or digital product you have in mind.",
      portfolioCtaButton: "Start a conversation",
      portfolioFooter: "Personal projects, useful products, and practical technical delivery.",
      backHome: "Back home"
    },
    ms: {
      pageTitle: "Muhamad Ikhmal Hijaz | Pembangun Sistem & BI",
      pageDescription: "Portfolio Muhamad Ikhmal Hijaz Bin Zulkefli, pembangun sistem dan pembina laporan risikan perniagaan yang berpengalaman dalam sistem web, pangkalan data, Tableau, Power BI dan Metabase.",
      skipLink: "Langkau ke kandungan utama",
      homeLabel: "Laman utama Ikhmal Hijaz",
      languageLabel: "Pilih bahasa",
      toggleNavigation: "Buka atau tutup navigasi",
      professionalSummary: "Ringkasan profesional",
      creativeCapabilities: "Keupayaan kreatif",
      navAbout: "Tentang",
      navExperience: "Pengalaman",
      navExpertise: "Kepakaran",
      navEducation: "Pendidikan",
      navPortfolio: "Portfolio",
      navContact: "Hubungi saya",
      heroEyebrow: "Pembangun Sistem · Pembina Laporan BI",
      heroTitle: "Saya mengubah operasi yang kompleks menjadi <em>sistem yang jelas dan boleh dipercayai.</em>",
      heroLead: "Saya Muhamad Ikhmal Hijaz, seorang profesional IT yang berpengalaman dalam pembangunan sistem, reka bentuk pangkalan data, penyelenggaraan aplikasi dan pelaporan risikan perniagaan.",
      heroExplore: "Lihat pengalaman saya",
      heroResume: "Muat turun resume",
      metaYears: "Tahun dalam IT",
      metaOrganizations: "Organisasi",
      metaStarted: "Kerjaya bermula",
      scroll: "Tatal",
      scrollLabel: "Tatal ke bahagian tentang",
      profileKicker: "Profil / 01",
      profileTitle: "Dibina untuk hasil yang bermakna.",
      profileStatement: "Kerja saya berada di titik pertemuan antara <span>perisian, data dan manusia.</span>",
      profileBody: "Sejak 2017, saya telah membantu membina dan menyelenggara sistem perniagaan, menyusun pangkalan data serta menterjemahkan keperluan pelanggan kepada papan pemuka dan laporan yang praktikal. Saya mengutamakan penyampaian yang boleh dipercayai, komunikasi yang jelas dan penambahbaikan berterusan dalam penggunaan teknologi untuk kerja harian.",
      basedIn: "Berpangkalan di",
      location: "Klang, Selangor",
      currentRole: "Jawatan semasa",
      roleShort: "Penolong Pegawai Teknologi Maklumat (FA5)",
      coreFocus: "Fokus utama",
      focusShort: "Sistem & pelaporan BI",
      experienceKicker: "Pengalaman / 02",
      experienceTitle: "Kerjaya yang menghubungkan sistem dengan keputusan.",
      experienceIntro: "Berkembang daripada pembangunan sistem sektor swasta kepada sokongan teknologi dan pelaporan di universiti awam terbesar Malaysia.",
      present: "Kini",
      uitmRole: "Penolong Pegawai Teknologi Maklumat (FA5)",
      current: "Semasa",
      uitmSummary: "Membangun dan menyelenggara sistem institusi sambil menyokong struktur pangkalan data serta keperluan teknikal untuk operasi harian yang lancar.",
      uitmDuty1: "Membina dan menambah baik sistem berasaskan web",
      uitmDuty2: "Menyelenggara aplikasi sedia ada dan menangani keperluan berkaitan sistem",
      uitmDuty3: "Merancang dan menyokong struktur pangkalan data",
      additionalResponsibility: "Tanggungjawab tambahan",
      reportBuilder: "Pembina Laporan",
      uitmReportSummary: "Membangunkan laporan berdasarkan keperluan pelanggan, menyelenggara hasil laporan serta membantu dalam pembentangan dan penyampaian.",
      systemDeveloper: "Pembangun Sistem",
      opensoftSummary: "Membina dan menyelenggara sistem perniagaan, mengurus struktur pangkalan data serta menyokong pelanggan melalui penyampaian teknikal dan penyelenggaraan berterusan.",
      opensoftDuty1: "Pembangunan dan penyelenggaraan sistem",
      opensoftDuty2: "Struktur pangkalan data dan sokongan aplikasi",
      opensoftDuty3: "Penyampaian teknikal selaras dengan keperluan pelanggan",
      tableauReportBuilder: "Pembina Laporan Tableau",
      opensoftReportSummary: "Mencipta dan menyelenggara laporan Tableau mengikut keperluan pelanggan serta menyokong pembentangan dan sesi penerangan.",
      expertiseKicker: "Kepakaran / 03",
      expertiseTitle: "Daripada keperluan mentah kepada penyelesaian yang berfungsi.",
      expertiseIntro: "Set kemahiran praktikal yang dibentuk melalui pengalaman langsung dalam sistem, pelaporan, pangkalan data dan penghasilan digital.",
      systemDevelopment: "Pembangunan Sistem",
      systemDevelopmentBody: "Mereka bentuk, membangun dan menambah baik sistem web yang menyokong proses sebenar organisasi.",
      systemToolsLabel: "Teknologi pembangunan sistem",
      businessIntelligence: "Risikan Perniagaan",
      businessIntelligenceBody: "Mengubah keperluan pelanggan dan data operasi kepada laporan yang lebih mudah difahami dan digunakan untuk tindakan.",
      biToolsLabel: "Teknologi risikan perniagaan",
      dataDatabases: "Data & Pangkalan Data",
      dataDatabasesBody: "Menyusun, membuat pertanyaan dan menyokong asas data yang diperlukan oleh aplikasi dan laporan.",
      dataToolsLabel: "Teknologi data dan pangkalan data",
      maintenanceSupport: "Penyelenggaraan & Sokongan",
      maintenanceSupportBody: "Memastikan sistem dan laporan sedia ada kekal stabil, relevan serta sejajar dengan perubahan keperluan operasi.",
      troubleshooting: "Penyelesaian masalah",
      enhancements: "Penambahbaikan",
      clientSupport: "Sokongan pelanggan",
      beyondDevelopment: "Di luar pembangunan",
      creativeTitle: "Pemikiran teknikal dengan pandangan kreatif.",
      creativeBody: "Pengalaman menggunakan Photoshop, Illustrator, penghasilan video dan fotografi membantu menghasilkan pembentangan yang lebih kukuh serta komunikasi digital yang lebih jelas.",
      photography: "Fotografi",
      video: "Video",
      design: "Reka bentuk",
      educationKicker: "Pendidikan / 04",
      educationTitle: "Asas yang kukuh dalam pengaturcaraan.",
      educationBody: "Diploma Teknologi Maklumat (Pengaturcaraan), Politeknik Sultan Idris Shah, 2014–2017.",
      deansList: "Penerima Anugerah Dekan",
      finalGpa: "PNGK akhir",
      topTen: "10 Terbaik",
      finalReport: "Pencapaian laporan akhir",
      classPresident: "Ketua kelas",
      educationNote: "Turut berkhidmat sebagai urus setia kursus pembangunan sistem PHP dan MySQL.",
      contactKicker: "Hubungi / 05",
      contactTitle: "Ada cabaran berkaitan sistem atau pelaporan?",
      contactBody: "Mari berbincang tentang bagaimana teknologi yang jelas dan data yang berguna boleh membantu kerja bergerak ke hadapan.",
      email: "E-mel",
      footerTagline: "Sistem dibina dengan tujuan. Laporan direka untuk kejelasan.",
      backToTop: "Kembali ke atas",
      portfolioPageTitle: "Portfolio | Muhamad Ikhmal Hijaz",
      portfolioPageDescription: "Terokai projek peribadi, produk berasaskan langganan serta pengalaman langsung sistem dan risikan perniagaan oleh Muhamad Ikhmal Hijaz.",
      portfolioHeroKicker: "Portfolio / Hasil terpilih",
      portfolioHeroTitle: "Hasil kerja yang dibentuk oleh <em>rasa ingin tahu, kegunaan dan keperluan sebenar.</em>",
      portfolioHeroBody: "Koleksi yang terus berkembang merangkumi hasil binaan peribadi, produk sedia langgan dan kerja teknikal langsung dalam sistem, pelaporan dan data.",
      portfolioBrowse: "Lihat portfolio",
      portfolioDiscuss: "Bincangkan projek",
      portfolioCategories: "Kategori portfolio",
      categoryPersonal: "Projek peribadi",
      categorySubscription: "Projek langganan",
      categoryHandsOn: "Projek langsung",
      personalKicker: "Hasil bebas / 01",
      personalTitle: "Projek peribadi",
      personalIntro: "Idea yang saya bangunkan secara bebas untuk meneroka teknologi berguna, meningkatkan kemahiran dan menyelesaikan masalah harian.",
      personalEmptyTitle: "Kajian kes baharu akan tiba tidak lama lagi.",
      personalEmptyBody: "Projek peribadi akan diterbitkan di sini bersama masalah, pendekatan, teknologi dan hasil yang berfungsi.",
      subscriptionKicker: "Produk / 02",
      subscriptionTitle: "Projek yang boleh dilanggan",
      subscriptionIntro: "Produk digital yang direka untuk penggunaan berulang, sokongan yang boleh dipercayai dan penambahbaikan berterusan.",
      subscriptionBadge: "Dalam pembangunan",
      subscriptionCardTitle: "Produk langganan sedang disediakan.",
      subscriptionCardBody: "Butiran produk, pelan, ciri dan pautan akses akan dipaparkan di sini apabila sedia untuk dilancarkan.",
      handsOnKicker: "Penyampaian profesional / 03",
      handsOnTitle: "Pengalaman projek secara langsung",
      handsOnIntro: "Bidang kerja terpilih berdasarkan pengalaman profesional. Butiran pelanggan dan institusi kekal sulit.",
      handsOnSystemTitle: "Pembangunan sistem institusi",
      handsOnSystemBody: "Membina, menambah baik dan menyelenggara sistem berasaskan web yang menyokong keperluan operasi sebenar.",
      handsOnSystemMeta: "Pembangunan · Penyelenggaraan · Sokongan",
      handsOnBiTitle: "Laporan dan papan pemuka BI",
      handsOnBiBody: "Menterjemahkan keperluan pelanggan kepada laporan berguna, menyelenggara hasil serta menyokong pembentangan dan penyampaian yang jelas.",
      handsOnBiMeta: "Tableau · Power BI · Metabase",
      handsOnDataTitle: "Asas pangkalan data dan aplikasi",
      handsOnDataBody: "Merancang struktur pangkalan data serta menyokong lapisan data di sebalik sistem dan pelaporan yang boleh dipercayai.",
      handsOnDataMeta: "MySQL · Oracle DB · Data aplikasi",
      confidentialLabel: "Hasil kerja terpilih",
      portfolioCtaKicker: "Bina bersama",
      portfolioCtaTitle: "Ada idea yang wajar dijadikan produk berfungsi?",
      portfolioCtaBody: "Mari bincangkan sistem, laporan atau produk digital yang anda fikirkan.",
      portfolioCtaButton: "Mulakan perbualan",
      portfolioFooter: "Projek peribadi, produk berguna dan penyampaian teknikal praktikal.",
      backHome: "Kembali ke laman utama"
    }
  };

  const navbar = document.querySelector(".navbar");
  const navCollapse = document.querySelector("#navbarNav");
  const sectionLinks = [...document.querySelectorAll('.nav-link[href^="#"]')];
  const languageButtons = [...document.querySelectorAll("[data-language]")];

  const setMetaContent = (selector, content) => {
    document.querySelector(selector)?.setAttribute("content", content);
  };

  const applyLanguage = (language, updateAddress = false) => {
    const selected = translations[language] ? language : "en";
    const copy = translations[selected];
    const isPortfolioPage = document.body.dataset.page === "portfolio";
    const pageTitle = isPortfolioPage ? copy.portfolioPageTitle : copy.pageTitle;
    const pageDescription = isPortfolioPage ? copy.portfolioPageDescription : copy.pageDescription;

    document.documentElement.lang = selected;
    document.title = pageTitle;
    setMetaContent('meta[name="description"]', pageDescription);
    setMetaContent('meta[property="og:title"]', pageTitle);
    setMetaContent('meta[property="og:description"]', pageDescription);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = copy[element.dataset.i18n];
      if (value) element.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const value = copy[element.dataset.i18nHtml];
      if (value) element.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      const value = copy[element.dataset.i18nAria];
      if (value) element.setAttribute("aria-label", value);
    });

    languageButtons.forEach((button) => {
      const isActive = button.dataset.language === selected;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    try {
      localStorage.setItem("portfolio-language", selected);
    } catch (_) {
      // The language still works when browser storage is unavailable.
    }

    if (updateAddress && window.history?.replaceState) {
      const url = new URL(window.location.href);
      if (selected === "en") url.searchParams.delete("lang");
      else url.searchParams.set("lang", selected);
      window.history.replaceState({}, "", url);
    }
  };

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.language, true));
  });

  const updateNavbar = () => {
    navbar?.classList.toggle("is-scrolled", window.scrollY > 28);
  };

  const updateActiveLink = () => {
    const marker = window.scrollY + 150;
    let activeId = "";

    sectionLinks.forEach((link) => {
      const section = document.querySelector(link.getAttribute("href"));
      if (section && section.offsetTop <= marker) {
        activeId = link.getAttribute("href");
      }
    });

    sectionLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === activeId);
    });
  };

  sectionLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navCollapse?.classList.contains("show") && window.bootstrap) {
        window.bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
      }
    });
  });

  window.addEventListener("scroll", () => {
    updateNavbar();
    updateActiveLink();
  }, { passive: true });

  let initialLanguage = "en";
  try {
    const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
    initialLanguage = requestedLanguage || localStorage.getItem("portfolio-language") || "en";
  } catch (_) {
    initialLanguage = "en";
  }

  document.querySelector("#current-year").textContent = new Date().getFullYear();
  applyLanguage(initialLanguage);
  updateNavbar();
  updateActiveLink();

  window.addEventListener("load", () => {
    if (!window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    if (target) target.scrollIntoView({ behavior: "auto", block: "start" });
  });
})();

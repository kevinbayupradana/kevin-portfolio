/*
  PORTFOLIO - KEVIN BAYU PRADANA
  =====================================================================
  PETA FILE INI:
  01. profile             : nama, email, LinkedIn, lokasi, alamat file CV.
  02. activeLanguage      : bahasa yang sedang dipakai (disimpan otomatis).
  03. copy                : label tombol, judul, kalimat UI, dan terjemahan.
  04. data konten         : proyek, publikasi, skill, pendidikan, kerja,
                            organisasi, teaching, sertifikasi, community.
  05. localizedContent    : isi Indonesia dan penghubung data per bahasa.
  06. icon                : helper pembuat ikon SVG.
  07. helpers/markup      : fungsi kecil pembuat potongan HTML.
  08. render()            : struktur seluruh halaman dan urutan section.
  09. bindInteractions()  : klik tombol, bahasa, menu mobile, dan dialog.
  10. startup             : menjalankan render saat dokumen siap.

  UNTUK EDIT SENDIRI:
  - Mengubah isi teks/data: mulai dari profile, copy, atau localizedContent.
  - Mengubah urutan/tata struktur section: cari render() (lakukan hati-hati).
  - Mengubah warna, font, jarak, ukuran, responsive: edit style.css.
  - Saat menambah proyek, samakan urutannya di projects, localizedContent.id.projects,
    dan caseStudies karena detail studi kasus dipasangkan berdasarkan indeks.
  - Hindari mengubah bindInteractions(), escapeHtml(), serta nama id/class/data-*
    kecuali memang sedang memperbaiki fungsi atau struktur website.
*/

// 01. KONFIGURASI IDENTITAS - bagian yang paling aman diedit.
// CV harus benar-benar tersedia pada path yang ditulis di cvUrl.
const profile = {
  // Ganti nilai di blok ini untuk memperbarui identitas dan tombol CV.
  name: "Kevin Bayu Pradana",
  shortName: "KB.",
  headline: {
    id: "Sarjana Terapan Teknik Perkeretaapian",
    en: "Applied Bachelor of Rolling Stock Engineering"
  },
  email: "kevinbayupradana18@gmail.com",
  linkedin: "https://linkedin.com/in/kevinbayup",
  instagram: "https://www.instagram.com/kevinbyup/",
  location: { id: "Madiun, Jawa Timur, Indonesia", en: "Madiun, East Java, Indonesia" },
  // Simpan PDF CV dengan nama ini di folder assets. Lihat assets/README.md.
  cvUrl: "assets/CV-Kevin-Bayu-Pradana.pdf",
};

// 02. BAHASA AKTIF - bahasa terakhir disimpan di localStorage. Biasanya tidak perlu diubah.
let activeLanguage = localStorage.getItem("portfolio-language") || "id";

// 03. LABEL UI DAN TERJEMAHAN - menu, tombol, heading, dan kalimat singkat.
const copy = {
  id: {
    languageLabel: "Bahasa", languageButton: "EN", languageButtonLabel: "Ubah bahasa ke Inggris",
    navProfile: "Profil", navProjects: "Proyek", navPublications: "Publikasi", navExperience: "Pengalaman",
    navTeaching: "Edukasi", navCredentials: "Sertifikasi", navContact: "Kontak",
    contactMe: "Hubungi saya", availability: "Terbuka untuk peluang dan kolaborasi", heroTitle: "Teknik<br><em>Perkeretaapian</em><br>Pengelasan &<br>Manufaktur.",
    heroIntro: "Saya {name} - {headline}. Fokus pada pengelasan dan rekayasa komponen perkeretaapian, dengan pengalaman di R&D, CAD, simulasi, manufaktur, inspeksi, dan pengendalian kualitas.",
    viewProjects: "Lihat Proyek", knowProfile: "Kenali Profil", downloadCv: "Unduh CV", cvAria: "Unduh CV Kevin Bayu Pradana",
    scroll: "Scroll untuk menjelajah", 
    profileSkills: "Profil & keahlian", profileHeading: "Tertarik <span>memahami</span> bagaimana sesuatu <span>bekerja.</span>",
    aboutBio: "Lulusan Sarjana Terapan Teknik Perkeretaapian Politeknik Negeri Madiun dengan pengalaman di bidang mechanical engineering, pengelasan, manufaktur, R&D, QC, dan gambar teknik. Terlibat dalam kegiatan asisten mengajar, riset teknik, proses industri manufaktur, maintenance dan inspeksi, desain CAD, serta simulasi struktur dan komponen. Bersertifikasi BNSP Welder Level 3 dan Welding Foreman.",
    linkedin: "Lihat LinkedIn", instagram: "Lihat Instagram", mainProjects: "Proyek utama", competition: "National Welding Competition",
    selectedProjects: "Proyek pilihan", caseStudy: "Buka studi kasus", close: "Tutup", caseStudyTitle: "Studi kasus", overview: "Ringkasan", role: "Peran", tools: "Perangkat dan metode", outcome: "Hasil utama",
    publications: "Publikasi", openPublication: "Buka publikasi melalui DOI",
    experienceEducation: "Pendidikan, pengalaman & organisasi",
    education: "Pendidikan", workExperience: "Pengalaman Kerja", organization: "Organisasi",
    teachingCommunity: "Asisten pengajar & layanan masyarakat", teaching: "Asisten Pengajar", community: "Layanan Masyarakat", 
    credentials: "Sertifikasi & penghargaan", certification: "Sertifikasi", training: "Pelatihan", validFor: "Berlaku", achievement: "Penghargaan",
    openOpportunities: "Terbuka untuk kesempatan baru", contactHeading: "Mari bangun sesuatu<br><em>yang berdampak.</em>",
    brandHome: "Kembali ke atas", menuOpen: "Buka menu", menuClose: "Tutup menu",
    heroNote: "Kevin Bayu Pradana",
    ticker: "PENGELASAN <b>x</b> METALURGI <b>x</b> MEKANIKAL <b>x</b> MANUFAKTUR <b>x</b> DESAIN", skillsTicker: "Keahlian",
    gpaLabel: "IPK / 4,00", competitionRank: "Ke-3", achievementMeta: "13–17 Juli 2026", achievementTitle: "Juara III - National Welding Competition (NWC) 2026, level Expert, kategori GMAW Plate 3G",
    achievementOrganizer: "Penyelenggara: Badan Koordinasi Kemahasiswaan Politeknik se-Indonesia (BAKORMA)",
    achievementText: "Meraih Juara III pada level Expert, kategori GMAW Plate 3G dalam National Welding Competition (NWC) 2026 yang diselenggarakan di Politeknik Perkapalan Negeri Surabaya (PPNS), Surabaya, pada 13–17 Juli 2026. Menunjukkan keterampilan praktik Gas Metal Arc Welding (GMAW) pada pengelasan pelat posisi 3G dalam kompetisi vokasi tingkat nasional.",
    languages: "BAHASA", nativeLanguage: "Bahasa Indonesia", nativeLevel: "Bahasa ibu", englishLanguage: "Bahasa Inggris",
  },
  en: {
    languageLabel: "Language", languageButton: "ID", languageButtonLabel: "Switch language to Indonesian",
    navProfile: "Profile", navProjects: "Projects", navPublications: "Publications", navExperience: "Experience",
    navTeaching: "Teaching", navCredentials: "Credentials", navContact: "Contact",
    contactMe: "Contact me", availability: "Open to Opportunities & Collaboration", heroTitle: "Rolling Stock<br><em>Engineering</em><br>Welding &<br>Manufacturing.",
    heroIntro: "I am {name} - {headline}, focused on welding and rolling stock component engineering, with experience in R&D, CAD, simulation, manufacturing, inspection, and quality control.",
    viewProjects: "View Projects", knowProfile: "Explore Profile", downloadCv: "Download CV", cvAria: "Download Kevin Bayu Pradana CV",
    scroll: "Scroll to explore", 
    profileSkills: "Profile & skills", profileHeading: "Curious about how things <span>work.</span>",
    aboutBio: "Applied Bachelor's degree Rolling Stock Engineering graduate from Politeknik Negeri Madiun. with experience in mechanical engineering, welding, manufacturing, R&D, quality control (QC), and technical drawing. Experience includes teaching assistance, engineering research, industrial manufacturing processes, maintenance and inspection, CAD design, and structural and component simulation. BNSP certifications as a Level 3 Welder and Welding Foreman.",
    linkedin: "View LinkedIn", instagram: "View Instagram", mainProjects: "Key projects", competition: "National Welding Competition", selectedProjects: "Selected projects",
    caseStudy: "Open case study", close: "Close", caseStudyTitle: "Case study", overview: "Overview", role: "Role", tools: "Tools", outcome: "Key outcome",
    publications: "Publications", openPublication: "Open publication via DOI",
    experienceEducation: "Education, work experience & organizations",
    education: "Education", workExperience: "Work Experience", organization: "Organizations",
    teachingCommunity: "Teaching assistantship & community service", teaching: "Teaching Assistant", community: "Community Service", 
    credentials: "Credentials & achievements", certification: "Certifications", training: "Training", validFor: "Valid for", achievement: "Achievement",
    openOpportunities: "Open to new opportunities", contactHeading: "Let's build something<br><em>that matters.</em>",
    brandHome: "Back to top", menuOpen: "Open menu", menuClose: "Close menu",
    heroNote: "Kevin Bayu Pradana",
    ticker: "WELDING <b>x</b> METALLURGY <b>x</b> MECHANICAL <b>x</b> MANUFACTURING <b>x</b> DESIGN", skillsTicker: "Skills",
    gpaLabel: "GPA / 4.00", competitionRank: "3rd", achievementMeta: "13–17 July 2026", achievementTitle: "3rd Place - National Welding Competition (NWC) 2026, Expert Level, GMAW Plate 3G",
    achievementOrganizer: "Organizer: Indonesian Polytechnic Student Affairs Coordination Board (BAKORMA)",
    achievementText: "Secured 3rd Place in the Expert Level, GMAW Plate 3G category at the National Welding Competition (NWC) 2026, held at the Shipbuilding Institute of Polytechnic Surabaya (PPNS), Indonesia, on 13–17 July 2026. Demonstrated practical Gas Metal Arc Welding (GMAW) skills in 3G-position plate welding at a national-level vocational competition.",
    languages: "LANGUAGES", nativeLanguage: "Bahasa Indonesia", nativeLevel: "Native", englishLanguage: "English",
  }
};

// Helper terjemahan: mengambil teks sesuai Bahasa Indonesia / English.
const t = (key) => copy[activeLanguage][key] || key;

// 04. DATA KONTEN UTAMA (default English) - pertahankan urutan array yang sesuai.

// 04A. DATA PROYEK - urutan item harus sama dengan caseStudies dan projects Indonesia.
const projects = [
  ["01", "Undergraduate Thesis Research", "2026", "Effects of Laser Power and Wobble Length on Shear Strength and Metallographic Characteristics of SUS304 Railway Roof Welds", "A quantitative experimental study using a 2 × 3 factorial design. The independent variables were laser power (580 W and 630 W) and wobble length (1 mm, 2 mm, and 3 mm). Responses included maximum load, shear strength, weld-metal width, depth of penetration, HAZ width, fracture location, and austenite/ferrite phase fractions.", "assets/images/thesis-laser-welding.webp"],
  ["02", "PKM-RE Research Project", "2024", "Aerodynamic Evaluation of Alternative High-Speed Train Mask-of-Car Designs at Different Speeds Using Computational Fluid Dynamics (CFD)", "The study evaluated the aerodynamics of four alternative high-speed train mask-of-car designs at 100, 200, and 300 km/h, using a track gauge of 1,435 mm. Simulations compared coefficient of drag, pressure contours, velocity contours, and velocity streamlines to assess the aerodynamic performance of each design.", "assets/images/high-speed-train-cfd.webp"],
  ["03", "PKM-AI Research Project", "2024", "Analysis of the Effect of GMAW Joint-Gap Variation on the Hardness and Microstructure of Dissimilar S355J2 and SUS 201 Welded Joints", "The study examined how joint-gap variation affects the hardness and microstructure of GMAW-welded dissimilar S355J2 and SUS 201 joints, with emphasis on welding metallurgy and material characterization.", "assets/images/poster-unavilable.webp"],
  ["04", "PKM-AI Research Project", "2023", "Analysis of the Mechanical and Physical Characteristics of GMAW-Welded A36 Steel Joints under Different Cooling Media for Railway Frame Structures", "The study examined the mechanical and physical characteristics of GMAW-welded A36 steel joints under different cooling media, in the context of using welded steel for railway frame structures.", "assets/images/poster-unavilable.webp"]
];

// Detail case study. Tambahkan proyek baru dengan format yang sama di sini dan di `projects`.
// 04B. DETAIL STUDI KASUS - item ke-1 menerangkan proyek ke-1, dan seterusnya.
const caseStudies = [
  {
    role: { id: "Peneliti Skripsi Sarjana Terapan. Terlibat dalam perancangan eksperimen, persiapan spesimen, evaluasi pengujian mekanik dan metalografi, serta analisis statistik pengaruh parameter pengelasan.", en: "Undergraduate Thesis Researcher. Contributed to experimental design, specimen preparation, mechanical testing, metallographic examination, and statistical analysis of the welding parameters." },
    tools: { id: "Laser Beam Welding; Design of Experiments; uji tarik geser menggunakan UTM MTS Exceed E64 (kapasitas 300 kN); pemeriksaan makro menggunakan digital macroscope 12 MP/1200×; pemeriksaan struktur mikro menggunakan mikroskop optik Olympus BX53M/BX-FM pada 500×; Visual Testing (VT); Liquid Penetrant Testing (PT); Two-Way ANOVA; uji normalitas Shapiro–Wilk; uji homogenitas Levene; Tukey HSD.", en: "Laser Beam Welding; Design of Experiments; tensile-shear testing using an MTS Exceed E64 UTM (300 kN capacity); macro-examination using a 12 MP/1200× digital macroscope; micro-examination using an Olympus BX53M/BX-FM optical microscope at 500×; Visual Testing (VT); Liquid Penetrant Testing (PT); Two-Way ANOVA; Shapiro–Wilk normality test; Levene's homogeneity test; Tukey HSD post-hoc test." },
    outcome: { id: "Kekuatan geser rata-rata tertinggi sebesar 277,23 MPa dan maximum load rata-rata 13.155,04 N diperoleh pada variasi 630 W–3 mm. Pada variasi tersebut, lebar weld metal 3,65 mm, depth of penetration 1,18 mm, dan lebar HAZ 0,16 mm. Fraksi fasa pada weld metal terdiri atas austenit 85,26% dan ferit 14,74%. Seluruh spesimen mengalami patah pada daerah weld metal. Two-Way ANOVA menunjukkan pengaruh signifikan laser power dan wobble length terhadap maximum load dan shear strength, sedangkan interaksi kedua faktor tidak signifikan. Uji Tukey menunjukkan wobble length 3 mm berbeda signifikan dari 1 mm dan 2 mm, sementara 1 mm dan 2 mm tidak berbeda signifikan.", en: "The highest mean shear strength (277.23 MPa) and mean maximum load (13,155.04 N) were obtained at 630 W–3 mm. At this setting, weld-metal width was 3.65 mm, depth of penetration was 1.18 mm, and HAZ width was 0.16 mm. The weld-metal phase fraction consisted of 85.26% austenite and 14.74% ferrite. All specimens fractured in the weld-metal region. Two-Way ANOVA showed significant main effects of laser power and wobble length on maximum load and shear strength, while their interaction was not significant. Tukey's post-hoc test found a significant difference between 3 mm and both 1 mm and 2 mm wobble lengths, while 1 mm and 2 mm did not differ significantly." }
  },
  {
    role: { id: "Anggota 2 dari tim PKM-RE beranggotakan empat orang berdasarkan proposal pendanaan. Berkontribusi dalam pengembangan dan evaluasi alternatif desain mask of car serta analisis performa aerodinamika.", en: "Research Team Member (Member 2 of a four-person PKM-RE team, as listed in the funding proposal). Contributed to the development and evaluation of alternative mask-of-car designs and aerodynamic performance analysis." },
    tools: { id: "Autodesk Inventor Professional 2020 untuk pemodelan surface dan solid; ANSYS Workbench 2023 untuk CFD; pembuatan geometri dan computational domain; meshing; evaluasi skewness, orthogonal quality, dan grid independence; simulasi pada 100, 200, dan 300 km/jam; tekanan referensi 101.325 Pa; kondisi no-slip; 500 iterasi menggunakan metode SIMPLE; analisis coefficient of drag, pressure contour, velocity contour, dan velocity streamline.", en: "Autodesk Inventor Professional 2020 for surface and solid modeling; ANSYS Workbench 2023 for CFD; geometry and computational-domain development; meshing; skewness and orthogonal-quality assessment; grid-independence evaluation; simulations at 100, 200, and 300 km/h; reference pressure of 101,325 Pa; no-slip boundary condition; 500 iterations using the SIMPLE algorithm; coefficient-of-drag, pressure-contour, velocity-contour, and velocity-streamline analysis." },
    outcome: { id: "Pada kecepatan 300 km/jam, Desain 3 menghasilkan koefisien drag terendah sebesar 0,29090604. Nilai pembandingnya adalah Desain 2 sebesar 0,30211886, Desain 4 sebesar 0,31163405, dan Desain 1 sebesar 0,32788849. Berdasarkan hasil simulasi, Desain 3 menjadi alternatif dengan performa aerodinamika terbaik di antara empat desain yang dievaluasi.", en: "At 300 km/h, Design 3 achieved the lowest drag coefficient at 0.29090604. The comparison values were 0.30211886 for Design 2, 0.31163405 for Design 4, and 0.32788849 for Design 1. Based on the simulation results, Design 3 was the best-performing aerodynamic alternative among the four evaluated designs." }
  },
  {
    role: { id: "Ketua tim penelitian beranggotakan lima orang. Memimpin koordinasi tim dan kegiatan penelitian yang berfokus pada metalurgi pengelasan serta karakterisasi material.", en: "Research Team Leader of a five-member team. Led team coordination and research activities focused on welding metallurgy and material characterization." },
    tools: { id: "GMAW; pengelasan material tak sejenis S355J2 dan SUS 201; variasi joint gap; pengujian kekerasan Vickers (HV); pemeriksaan metalografi; karakterisasi struktur mikro.", en: "GMAW; dissimilar metal welding of S355J2 and SUS 201; joint-gap variation; Vickers hardness testing (HV); metallographic examination; microstructure characterization." },
    outcome: { id: "Memperoleh insentif PKM-AI Vokasi tahun 2024. Penelitian menghasilkan kajian mengenai pengaruh variasi gap sambungan terhadap kekerasan dan struktur mikro sambungan las GMAW pada material tak sejenis.", en: "Received PKM-AI Vokasi incentive recognition in 2024. The project examined the effects of joint-gap variation on the hardness and microstructure of dissimilar GMAW-welded joints." }
  },
  {
    role: { id: "Anggota tim penelitian beranggotakan lima orang. Berkontribusi dalam kegiatan penelitian serta penyusunan artikel ilmiah dan dokumentasi hasil penelitian.", en: "Research Team Member in a five-member team. Contributed to research activities, scientific article preparation, and research documentation." },
    tools: { id: "GMAW; baja karbon A36; variasi media pendinginan; karakterisasi sambungan las; evaluasi sifat mekanis dan fisis; penyusunan artikel ilmiah.", en: "GMAW; A36 carbon steel; cooling-media variation; welded-joint characterization; mechanical and physical property evaluation; scientific article preparation." },
    outcome: { id: "Memperoleh insentif PKM-AI Vokasi tahun 2023. Penelitian menghasilkan kajian mengenai karakteristik sifat mekanis dan fisis sambungan las GMAW baja A36 untuk konteks struktur rangka perkeretaapian.", en: "Received PKM-AI Vokasi incentive recognition in 2023. The project examined the mechanical and physical characteristics of GMAW-welded A36 steel joints for railway frame applications." }
  },
];

// 04C. PUBLIKASI - [judul, jurnal, metadata, deskripsi].
const publications = [
  ["Optimization of Alternative Design of Mask of Car of High Speed Train Against Aerodynamics of Speed Variation with Computational Fluid Dynamics (CFD) Simulation", "Jurnal Perkeretaapian Indonesia (Indonesian Railway Journal)", "Vol. 9 No. 1, pp. 22–29 · 2025", "This computational fluid dynamics (CFD) study evaluated four alternative high-speed train mask-of-car designs at 100, 200, and 300 km/h using ANSYS Workbench 2023. At 300 km/h, Design 3 achieved the lowest drag coefficient of 0.29090604 among the four alternatives.", "https://doi.org/10.37367/jpi.v9i1.386"],
  ["Application of Science and Technology in Entrepreneurship through SMAW-Welded Products to Improve the Skills of Students at Miftahul Huda Doho Islamic Boarding School, Dolopo.", "DIKEMAS (Jurnal Pengabdian kepada Masyarakat)", "Vol. 7 No. 2 · 2023", "This community-service article documents an SMAW welding skills program at Miftahul Huda Islamic Boarding School, Doho, Dolopo. The program combined theoretical instruction and hands-on practice to improve participants' ability to repair iron and steel items and fabricate metal products, with emphasis on proper welding procedures, equipment installation, and occupational safety (K3).", "https://doi.org/10.32486/dikemas.v7i2.574"]
];

// 04D. KEAHLIAN - nama kelompok menjadi heading; array berisi skill yang ditampilkan.
const skills = {
  "Welding": ["Welding Technology", "Gas Metal Arc Welding (GMAW)", "Shielded Metal Arc Welding (SMAW)", "Gas Tungsten Arc Welding (GTAW)", "Oxy-Acetylene Welding (OAW)", "Laser Beam Welding (LBW)", "Welding Symbols", "Welding Procedure Specification (WPS)", "Standard Operating Procedures (SOP)", "Welding Defect Identification", "Welding Distortion Control", "Visual Testing (VT)", "Liquid Penetrant Testing (PT)", "Welding Safety"],
  "Metallurgy & Material Testing": ["Welding Metallurgy", "Metallography", "Macro Examination", "Microstructure Analysis", "Non-Destructive Testing (NDT)", "Tensile-Shear Testing", "Vickers Hardness Testing", "Material Characterization", "Weld Geometry Measurement", "Heat-Affected Zone (HAZ) Analysis"],
  "Manufacturing": ["Manufacturing Processes", "Production Processes", "Fabrication", "Welding Repair", "Quality Control", "Engineering Drawing", "2D/3D CAD Modeling", "Mechanical Component Design", "Finite Element Analysis (FEA)", "Computational Fluid Dynamics (CFD)", "Structural Analysis", "Mechanical Calculations", "Material Evaluation", "Engineering Documentation"],
  "Software": ["AutoCAD", "Autodesk Inventor", "SolidWorks", "ANSYS Workbench", "OriginPro", "SPSS", "ImageJ/Fiji", "Microsoft Excel", "Microsoft Word", "Microsoft PowerPoint"],
  "Personal & Professional Skills": ["Technical Problem-Solving", "Analytical and Critical Thinking", "Teamwork", "Leadership", "Technical Communication", "Time Management", "Adaptability", "Safety Awareness", "Decision-Making"]
};

// 04E. PENDIDIKAN - format item: [periode, judul, institusi, deskripsi].
const education = [
  ["2022–2026", "Applied Bachelor of Rolling Stock Engineering", "Madiun State Polytechnic · GPA 3.68 / 4.00", "Applied Bachelor of Rolling Stock Engineering graduate with a foundation in railway technology, rolling stock design, manufacturing, inspection, and quality control. Knowledgeable in structural design, railway systems, propulsion, instrumentation, testing, and engineering practices aligned with SNI/ISO standards, occupational health and safety, and environmental requirements."],
  ["2019–2022", "Welding Engineering Technology/Technician", "SMK Negeri 1 Kebonsari · GPA 84.39 / 100", "Vocational high school graduate with a specialization in Welding Engineering, trained in OAW, SMAW, GMAW, and GTAW processes, including carbon steel welding in various positions. Knowledgeable in Welding Procedure Specifications (WPS), Standard Operating Procedures (SOP), welding symbols, weld defect identification and prevention, and welding distortion control."]
];

// 04F. PENGALAMAN KERJA - format item sama dengan education.
const workExperience = [
  ["Jul - Dec 2025", "Industrial Internship - Research and Development", "PT INKA (Persero)", "Supported rolling stock component engineering and R&D through bogie and suspension analysis, FEA, mechanical calculations, spring/material evaluation, 3D design, and technical documentation, with exposure to manufacturing and assembly."]
];

// 04G. ORGANISASI - format item sama dengan education.
const organization = [
  ["2024 - 2025", "Senior Officer, General Affairs", "Student Entrepreneurship Workshop, Madiun State Polytechnic", "Coordinated administrative workflows and day-to-day workshop operations within the Student Entrepreneurship Workshop at Politeknik Negeri Madiun, supporting organizational administration, operational coordination, and the execution of workshop activities as one of four General Affairs officers during the 2024–2025 academic term."],
  ["2024 - 2025", "General Treasurer", "Rolling Stock Engineering Student Association (HIMA-TKA), Madiun State Polytechnic", "Managed HIMA-TKA financial administration, including budget planning, transaction recording, budget documentation, and accountability reporting. Maintained financial records to support budget planning and organizational transparency during the 2024–2025 term, following prior service as Assistant General Treasurer."],
  ["2023 - 2024", "Assistant General Treasurer", "Rolling Stock Engineering Student Association (HIMA-TKA), Madiun State Polytechnic", "Supported HIMA-TKA’s treasury operations through financial administration, transaction recordkeeping, and budget documentation during the 2023–2024 organizational term. Developed foundational experience in organizational financial management before progressing to the General Treasurer position in the following term."]
];

// 04H. ASISTEN PENGAJAR - [bidang/peran, periode, deskripsi].
const teaching = [
  ["2025 · 1 academic semester", "Teaching Assistant – Engineering Drawing", "Supported 16 Engineering Drawing practicum sessions over one semester, covering technical drawing standards and CAD assignments. Evaluated three projects using AutoCAD and Autodesk Inventor, including geometric construction, projections, tolerances, and mechanical component drawings."],
  ["2025 · 1 academic semester", "Teaching Assistant – Occupational Health and Safety (OHS/K3)", "Supported one semester of Occupational Health and Safety (OHS/K3) instruction, including safety-standard implementation in classroom and laboratory environments, case-study discussions, learning evaluations, and final assessments."],
  ["2025 · 5 academic semesters", "Manufacturing Workshop & Laboratory Assistant", "Supported workshop and laboratory operations across five academic semesters, covering equipment readiness, maintenance, troubleshooting, SOP compliance, K3 monitoring, risk assessment, and material preparation."],
  ["2026 · 1 academic semester", "Teaching Assistant – Welding Technology", "Assisted Welding Technology lectures and practical sessions through welding-process demonstrations, equipment operation, technical discussions, and case studies, while supporting student assignments, practical exercises, and assessments."],
  ["2026 · 1 academic semester", "Teaching Assistant – Sustainable Transportation Perspectives", "Supported learning on transportation systems, sustainability, and technology innovation through presentations, guided discussions, case studies, transport-policy analysis, and student assessments."]
];

// 04I. SERTIFIKASI DAN PELATIHAN.
const certifications = [
  ["19 June 2026", "Construction Services Competency Certificate – Welder (Level 3)", "Badan Nasional Sertifikasi Profesi (BNSP), Lembaga Sertifikasi Profesi Petakindo Konstruksi Mandiri", "Competent", "5 years", "Earned Level 3 Welder competency under the Construction Services Certification scheme, with Mechanical classification, Mechanical Engineering subclassification, and Operator qualification. The competency credential was issued by LSP Petakindo Konstruksi Mandiri on behalf of BNSP."],
  ["28 July 2026", "Welding Foreman Competency Certificate", "Badan Nasional Sertifikasi Profesi (BNSP), Lembaga Sertifikasi Profesi Politeknik Negeri Madiun (LSP-P1 PNM)", "Competent", "3 years", "Earned Welding Foreman competency assessment administered by LSP Politeknik Negeri Madiun, under a competency scheme focused on welding supervision. The assessment was conducted on 20–24 July 2026, with the result formalized through LSP Decision No. 044/SK/KE/LSP-PNM/VII/2026 dated 28 July 2026."]
];
const training = [
  ["13 February 2026", "Basic Railway Welding Education and Training", "Politeknik Perkeretaapian Indonesia Madiun (PPI), Ministry of Transportation", "Passed (Lulus)", "", "Completed 24 instructional hours of Basic Railway Welding Training at Politeknik Perkeretaapian Indonesia Madiun, covering welding fundamentals, welding techniques and positions, welding safety (K3), and hands-on field practice, including 16 practical hours. Successfully passed the training."],
  ["13 February 2026", "Basic Excavator Operation Training for Railway Applications", "Politeknik Perkeretaapian Indonesia Madiun (PPI), Ministry of Transportation", "Passed (Lulus)", "", "Completed 24 instructional hours of Basic Excavator Operation Training for Railway Applications at Politeknik Perkeretaapian Indonesia Madiun. Training covered excavator specifications, heavy equipment safety (K3), operating techniques, maintenance, and equipment inspection, including 16 practical training hours. Successfully passed the training."]
];

// 04J. LAYANAN MASYARAKAT - [nama kegiatan, tahun, deskripsi].
const community = [
  ["July–October 2025", "Student Organization Capacity Strengthening Program (PPK Ormawa) – Engineering Department Student Association", "PDCA-Based Empowerment of Tambakmas Village to Develop Creative Enterprises through Waste-Based EcoGreen Furniture Production", "Volunteer", "HMJT, Madiun State Polytechnic / Tambakmas Village, Madiun Regency", "Volunteered in a four-month PPK Ormawa community empowerment program in Tambakmas Village, contributing to the team-based implementation of a PDCA-driven initiative focused on waste-based EcoGreen furniture production and creative-enterprise development."],
  ["March–October 2024", "Internal Competitive Community Service Program – Madiun State Polytechnic", "Repair of GMAW Gasless-Welded Products to Improve the Welding Skills of Students at Miftahul Huda Doho Islamic Boarding School, Dolopo", "Community Service Team Member", "Madiun State Polytechnic / Miftahul Huda Islamic Boarding School, Doho, Madiun Regency", "Contributed as the fourth member of an eight-person community service team in a seven-month GMAW Gasless welded-product repair project, supporting repair activities focused on product quality improvement and practical welding skill development."],
  ["April–October 2023", "Internal Competitive Community Service Program – Madiun State Polytechnic", "Application of Science and Technology in Entrepreneurship through SMAW-Welded Products to Improve the Skills of Students at Miftahul Huda Doho Islamic Boarding School, Dolopo", "Community Service Team Member", "Madiun State Polytechnic / Miftahul Huda Islamic Boarding School, Doho, Madiun Regency", "Contributed as the fourth member of a nine-person community service team in a six-month applied SMAW welding project, supporting practical welding activities and hands-on skill development."],
  ["April–December 2023", "Village Community Empowerment Program (P2MD), Batch 2 – Directorate of Academic Affairs for Vocational Higher Education (Dit. APTV)", "Application of Science and Technology and Startup Business Digitalization for Organic Waste-to-Fertilizer Processing in Bader Village", "P2MD Team Member", "HIMA-TKA, Madiun State Polytechnic / Bader Village, Madiun Regency", "Participated as one of ten HIMA-TKA team members in the funded P2MD Batch 2 program in Bader Village, contributing to a community initiative focused on science and technology applications and startup-business digitalization for organic waste-to-fertilizer processing."],
  ["April–December 2023", "Village Community Empowerment Program (P2MD), Batch 1 – Directorate of Academic Affairs for Vocational Higher Education (Dit. APTV)", "Application of Science and Technology and Startup Business Digitalization for Organic Waste-to-Fertilizer Processing in Bedingin Village", "P2MD Team Member", "HIMA-TKA, Madiun State Polytechnic / Bedingin Village, Ponorogo Regency", "Participated as one of ten HIMA-TKA team members in the funded P2MD Batch 1 program in Bedingin Village, contributing to a community initiative focused on science and technology applications and startup-business digitalization for organic waste-to-fertilizer processing."]
];

// 05. KONTEN PER BAHASA - English memakai data di atas; teks Indonesia disimpan di bawah.
// Saat mengedit, jaga struktur array dan urutan item tetap cocok antarbahasa.
const localizedContent = {
  en: { projects, publications, skills, education, workExperience, organization, teaching, certifications, training, community },
  id: {
    projects: [
      ["01", "Penelitian Skripsi Sarjana Terapan", "2026", "Analisis Variasi Laser Power dan Wobble Length pada Proses Laser Beam Welding terhadap Kekuatan Geser dan Karakteristik Metalografi Sambungan SUS304 pada Atap Kereta Api", "Penelitian eksperimental kuantitatif menggunakan rancangan faktorial 2 × 3. Variabel bebas meliputi laser power 580 W dan 630 W serta wobble length 1 mm, 2 mm, dan 3 mm. Respons yang dievaluasi meliputi maximum load, shear strength, lebar weld metal, depth of penetration, lebar HAZ, lokasi patahan, serta fraksi fasa austenit dan ferit.", "assets/images/thesis-laser-welding.webp"],
      ["02", "Proyek Penelitian PKM-RE", "2024", "Optimalisasi Alternatif Desain Mask of Car Kereta Cepat Terhadap Aerodinamika Variasi Kecepatan dengan Simulasi Computational Fluid Dynamics (CFD)", "Penelitian aerodinamika empat alternatif desain mask of car kereta cepat pada kecepatan 100, 200, dan 300 km/jam dengan lebar sepur 1.435 mm. Simulasi membandingkan coefficient of drag, pressure contour, velocity contour, dan velocity streamline untuk mengevaluasi performa aerodinamika setiap desain.", "assets/images/high-speed-train-cfd.webp"],
      ["03", "Proyek Penelitian PKM-AI", "2024", "Analisis Pengaruh Variasi Gap Sambungan Las GMAW terhadap Kekerasan dan Struktur Mikro pada Material Tak Sejenis S355J2 dan SUS 201", "Penelitian mengkaji pengaruh variasi gap sambungan terhadap kekerasan dan struktur mikro pada sambungan GMAW material tak sejenis S355J2 dan SUS 201. Kajian berfokus pada aspek metalurgi pengelasan dan karakterisasi material.", "assets/images/poster-unavilable.webp"],
      ["04", "Proyek Penelitian PKM-AI", "2023", "Analisis Karakteristik Sifat Mekanis dan Fisis Kampuh Las GMAW Baja A36 terhadap Pengaruh Variasi Media Pendinginan pada Struktur Rangka Perkeretaapian", "Penelitian mengkaji karakteristik sifat mekanis dan fisis sambungan baja A36 hasil pengelasan GMAW dengan variasi media pendinginan, dalam konteks penggunaan material untuk struktur rangka perkeretaapian.", "assets/images/poster-unavilable.webp"]
    ],
    publications: [
      ["Optimalisasi Alternatif Desain Mask of Car Kereta Cepat Terhadap Aerodinamika Variasi Kecepatan Dengan Simulasi Computational Fluid Dynamics (CFD)", "Jurnal Perkeretaapian Indonesia (Indonesian Railway Journal)", "Vol. 9 No. 1, hlm. 22–29 · 2025", "Penelitian Computational Fluid Dynamics (CFD) ini mengevaluasi empat alternatif desain mask of car kereta cepat pada kecepatan 100, 200, dan 300 km/jam menggunakan ANSYS Workbench 2023. Pada kecepatan 300 km/jam, Desain 3 menghasilkan koefisien drag terendah sebesar 0,29090604 dibandingkan ketiga desain lainnya.", "https://doi.org/10.37367/jpi.v9i1.386"],
      ["Terapan Iptek Kewirausahaan Hasil Produk Pengelasan SMAW Untuk Meningkatkan Keterampilan Santri Pondok Pesantren Miftahul Huda Doho, Dolopo", "DIKEMAS (Jurnal Pengabdian kepada Masyarakat)", "Vol. 7 No. 2 · 2023", "Artikel pengabdian kepada masyarakat ini mendokumentasikan program keterampilan pengelasan SMAW di Pondok Pesantren Miftahul Huda Doho, Dolopo. Kegiatan menggabungkan penyampaian teori dan praktik untuk meningkatkan kemampuan peserta dalam memperbaiki barang berbahan besi dan baja serta membuat produk logam, dengan memperhatikan prosedur pengelasan, instalasi peralatan, dan keselamatan kerja (K3).", "https://doi.org/10.32486/dikemas.v7i2.574"]
    ],
    skills: {
      "Pengelasan": ["Teknologi Pengelasan", "GMAW", "SMAW", "GTAW", "OAW", "Laser Beam Welding (LBW)", "Simbol Pengelasan (Welding Symbols)", "Welding Procedure Specification (WPS)", "Standard Operating Procedure (SOP)", "Identifikasi Cacat Pengelasan", "Pengendalian Distorsi Pengelasan", "Visual Testing (VT)", "Liquid Penetrant Testing (PT)", "K3 Pengelasan"],
      "Metalurgi & Pengujian Material": ["Metalurgi Pengelasan", "Metalografi", "Pemeriksaan Makro", "Analisis Struktur Mikro", "Pengujian Tak Merusak (NDT)", "Uji Tarik Geser", "Uji Kekerasan Vickers", "Karakterisasi Material", "Pengukuran Geometri Las", "Analisis Heat-Affected Zone (HAZ)"],
      "Manufaktur": ["Proses Manufaktur", "Proses Produksi", "Fabrikasi", "Welding Repair", "Pengendalian Mutu (Quality Control)", "Gambar Teknik", "Pemodelan CAD 2D/3D", "Desain Komponen Mekanis", "Analisis Elemen Hingga (FEA)", "Dinamika Fluida Komputasional (CFD)", "Analisis Struktur", "Perhitungan Mekanika", "Evaluasi Material", "Dokumentasi Rekayasa"],
      "Perangkat Lunak": ["AutoCAD", "Autodesk Inventor", "SolidWorks", "ANSYS Workbench", "OriginPro", "SPSS", "ImageJ/Fiji", "Microsoft Excel", "Microsoft Word", "Microsoft PowerPoint"],
      "Keterampilan Personal & Profesional": ["Pemecahan Masalah Teknis", "Berpikir Analitis dan Kritis", "Kerja Sama Tim", "Kepemimpinan", "Komunikasi Teknis", "Manajemen Waktu", "Adaptabilitas", "Kesadaran Keselamatan Kerja", "Pengambilan Keputusan"]
    },
    education: [
      ["2022–2026", "Sarjana Terapan Teknik Perkeretaapian", "Politeknik Negeri Madiun · IPK 3,68 / 4,00", "Lulusan Sarjana Terapan Teknik Perkeretaapian dengan kompetensi di bidang teknologi perkeretaapian, desain sarana, manufaktur, inspeksi, dan pengendalian kualitas. Memiliki pemahaman mengenai perancangan struktur, sistem perkeretaapian, propulsi, instrumentasi, pengujian, serta penerapan standar SNI/ISO, K3, dan aspek lingkungan."],
      ["2019–2022", "Teknik Pengelasan", "SMK Negeri 1 Kebonsari · Nilai 84,39 / 100", "Lulusan SMK Konsentrasi Keahlian Teknik Pengelasan dengan keterampilan dasar proses OAW, SMAW, GMAW, dan GTAW, termasuk pengelasan baja karbon pada berbagai posisi. Memahami SOP dan Welding Procedure Specification (WPS), simbol pengelasan, identifikasi dan penanganan cacat las, serta pengendalian distorsi pengelasan."]
    ],
    workExperience: [
      ["Jul - Des 2025", "Magang Industri - Riset dan Pengembangan", "PT INKA (Persero)", "Mendukung kegiatan rekayasa komponen perkeretaapian dan R&D melalui analisis bogie dan suspensi, FEA, perhitungan mekanika, evaluasi pegas/material, desain 3D, dan dokumentasi teknis, serta mengenal proses manufaktur dan perakitan."]
    ],
    organization: [
      ["2024 - 2025", "Senior Officer, General Affairs", "Workshop Kewirausahaan Mahasiswa, Politeknik Negeri Madiun", "Mengoordinasikan alur administrasi dan operasional harian Workshop Kewirausahaan Mahasiswa di Politeknik Negeri Madiun, termasuk mendukung pengelolaan administrasi organisasi, koordinasi kegiatan operasional, dan pelaksanaan aktivitas workshop sebagai salah satu dari empat personel General Affairs pada periode 2024–2025."],
      ["2024 - 2025", "Bendahara Umum 1", "Himpunan Mahasiswa Teknik Perkeretaapian (HIMA-TKA), Politeknik Negeri Madiun", "Mengelola administrasi keuangan HIMA-TKA yang mencakup perencanaan anggaran, pencatatan transaksi keuangan, dokumentasi anggaran, dan penyusunan laporan pertanggungjawaban. Memelihara catatan keuangan untuk mendukung perencanaan anggaran dan transparansi organisasi selama periode 2024–2025, setelah sebelumnya menjabat sebagai Asisten Bendahara Umum."],
      ["2023 - 2024", "Bendahara Umum 2", "Himpunan Mahasiswa Teknik Perkeretaapian (HIMA-TKA), Politeknik Negeri Madiun", "Mendukung kegiatan pengelolaan keuangan HIMA-TKA melalui administrasi keuangan, pencatatan transaksi, dan dokumentasi anggaran selama periode 2023–2024. Mengembangkan pengalaman dasar dalam pengelolaan keuangan organisasi sebelum melanjutkan tanggung jawab sebagai Bendahara Umum pada periode berikutnya."]
    ],
    teaching: [
      ["2025 · 1 semester", "Asisten Dosen – Gambar Teknik", "Mendukung 16 sesi praktikum Gambar Teknik selama satu semester, mencakup standar gambar teknik dan penugasan CAD. Mengevaluasi tiga proyek menggunakan AutoCAD dan Autodesk Inventor, meliputi konstruksi geometris, proyeksi, toleransi, dan gambar komponen mekanis."],
      ["2025 · 1 semester", "Asisten Dosen – Kesehatan dan Keselamatan Kerja (K3)", "Mendukung pembelajaran Kesehatan dan Keselamatan Kerja (K3) selama satu semester, meliputi penerapan standar keselamatan di kelas dan laboratorium, diskusi studi kasus, evaluasi pembelajaran, dan penilaian akhir."],
      ["2025 · 5 semester", "Asisten Workshop dan Laboratorium Manufaktur", "Mendukung operasional workshop dan laboratorium selama lima semester, mencakup kesiapan dan pemeliharaan peralatan, troubleshooting, kepatuhan SOP, pemantauan K3, penilaian risiko, dan persiapan material."],
      ["2026 · 1 semester", "Asisten Dosen – Teknologi Pengelasan", "Mendukung perkuliahan dan praktikum Teknologi Pengelasan melalui demonstrasi proses pengelasan, penggunaan peralatan, diskusi teknis, dan studi kasus, serta membantu penugasan, latihan praktikum, dan evaluasi mahasiswa."],
      ["2026 · 1 semester", "Asisten Dosen – Wawasan Transportasi Berkelanjutan", "Mendukung pembelajaran sistem transportasi, keberlanjutan, dan inovasi teknologi melalui presentasi, diskusi terarah, studi kasus, analisis kebijakan transportasi, dan evaluasi mahasiswa."]
    ],
    certifications: [
      ["19 Juni 2026", "Sertifikat Kompetensi Kerja Konstruksi – Juru Las Level 3", "Badan Nasional Sertifikasi Profesi (BNSP), Lembaga Sertifikasi Profesi Petakindo Konstruksi Mandiri", "Kompeten", "5 tahun", "Memperoleh kompetensi Juru Las Level 3 melalui skema Sertifikasi Kompetensi Kerja Konstruksi, dengan klasifikasi Mekanikal, subklasifikasi Teknik Mekanikal, dan kualifikasi Operator. Sertifikat diterbitkan oleh LSP Petakindo Konstruksi Mandiri atas nama BNSP."],
      ["28 Juli 2026", "Sertifikat Kompetensi Skema Welding Foreman", "Badan Nasional Sertifikasi Profesi (BNSP), Lembaga Sertifikasi Profesi Politeknik Negeri Madiun (LSP-P1 PNM)", "Kompeten", "3 tahun", "Memperoleh kompetensi skema Welding Foreman yang diselenggarakan oleh LSP Politeknik Negeri Madiun, dengan cakupan kompetensi pengawasan pengelasan. Asesmen dilaksanakan pada 20–24 Juli 2026 dan hasilnya ditetapkan melalui SK LSP Nomor 044/SK/KE/LSP-PNM/VII/2026 tanggal 28 Juli 2026."]
    ],
    training: [
      ["13 Februari 2026", "Pendidikan dan Pelatihan Dasar Pengelasan Perkeretaapian", "Politeknik Perkeretaapian Indonesia Madiun (PPI), Kementerian Perhubungan", "Lulus", "", "Menyelesaikan 24 jam pelajaran Pendidikan dan Pelatihan Dasar Pengelasan Perkeretaapian di Politeknik Perkeretaapian Indonesia Madiun, meliputi dasar-dasar pengelasan, teknik dan posisi pengelasan, K3 pengelasan, serta praktik lapangan sebanyak 16 jam. Dinyatakan lulus pelatihan."],
      ["13 Februari 2026", "Pendidikan dan Pelatihan Dasar Pengoperasian Alat Berat Excavator Bidang Perkeretaapian", "Politeknik Perkeretaapian Indonesia Madiun (PPI), Kementerian Perhubungan", "Lulus", "", "Menyelesaikan 24 jam pelajaran Pendidikan dan Pelatihan Dasar Pengoperasian Excavator Bidang Perkeretaapian di Politeknik Perkeretaapian Indonesia Madiun. Pelatihan mencakup spesifikasi excavator, K3 alat berat, teknik pengoperasian, perawatan, dan pemeriksaan peralatan, termasuk 16 jam praktik. Dinyatakan lulus pelatihan."]
    ],
    community: [
      ["Juli–Oktober 2025", "Program Penguatan Kapasitas Organisasi Kemahasiswaan (PPK Ormawa) – Himpunan Mahasiswa Jurusan Teknik", "Pemberdayaan Masyarakat Desa Tambakmas Madiun Bersiklus PDCA untuk Membangun Usaha Kreatif yang Berdampak Active-Income Melalui Produksi EcoGreen-Furniture Berbasis Sampah", "Relawan", "HMJT, Politeknik Negeri Madiun / Desa Tambakmas, Kabupaten Madiun", "Berperan sebagai relawan selama empat bulan dalam program pemberdayaan masyarakat PPK Ormawa di Desa Tambakmas, berkontribusi dalam pelaksanaan program berbasis PDCA yang berfokus pada produksi EcoGreen Furniture dari sampah dan pengembangan usaha kreatif."],
      ["Maret–Oktober 2024", "Pengabdian kepada Masyarakat Kompetitif Internal Politeknik Negeri Madiun", "Repair Produk Hasil Pengelasan dengan GMAW Gasless untuk Meningkatkan Kualitas Keterampilan Santri Pondok Pesantren Miftahul Huda Doho, Dolopo", "Anggota Tim Pengabdian", "Politeknik Negeri Madiun / Pondok Pesantren Miftahul Huda, Doho, Kabupaten Madiun", "Berkontribusi sebagai anggota keempat dari tim pengabdian beranggotakan delapan orang dalam kegiatan perbaikan produk hasil pengelasan GMAW Gasless selama sekitar tujuh bulan, dengan fokus pada peningkatan kualitas produk dan pengembangan keterampilan praktik pengelasan."],
      ["April–Oktober 2023", "Pengabdian kepada Masyarakat Kompetitif Internal Politeknik Negeri Madiun", "Terapan Iptek Kewirausahaan Hasil Produk Pengelasan SMAW Untuk Meningkatkan Keterampilan Santri Pondok Pesantren Miftahul Huda Doho, Dolopo", "Anggota Tim Pengabdian", "Politeknik Negeri Madiun / Pondok Pesantren Miftahul Huda, Doho, Kabupaten Madiun", "Berkontribusi sebagai anggota keempat dari tim pengabdian beranggotakan sembilan orang dalam kegiatan pengelasan SMAW terapan selama sekitar enam bulan, dengan mendukung praktik pengelasan dan pengembangan keterampilan langsung."],
      ["April–Desember 2023", "Program Pemberdayaan Masyarakat Desa (P2MD) Batch 2 – Direktorat Akademik Pendidikan Tinggi Vokasi (Dit. APTV)", "Penerapan IPTEK dan Konsep Digitalisasi Bisnis Rintisan dalam Pengelolaan Sampah Organik Menjadi Pupuk untuk Memberdayakan Masyarakat Desa Bader, Kabupaten Madiun", "Anggota Tim P2MD", "HIMA-TKA, Politeknik Negeri Madiun / Desa Bader, Kabupaten Madiun", "Berpartisipasi sebagai salah satu dari sepuluh anggota tim HIMA-TKA dalam program P2MD Batch 2 yang memperoleh pendanaan di Desa Bader, berkontribusi dalam penerapan IPTEK dan digitalisasi bisnis rintisan untuk pengolahan sampah organik menjadi pupuk."],
      ["April–Desember 2023", "Program Pemberdayaan Masyarakat Desa (P2MD) Batch 1 – Direktorat Akademik Pendidikan Tinggi Vokasi (Dit. APTV)", "Penerapan IPTEK dan Konsep Digitalisasi Bisnis Rintisan dalam Pengelolaan Sampah Organik Menjadi Pupuk untuk Memberdayakan Masyarakat Desa Bedingin, Kabupaten Ponorogo", "Anggota Tim P2MD", "HIMA-TKA, Politeknik Negeri Madiun / Desa Bedingin, Kabupaten Ponorogo", "Berpartisipasi sebagai salah satu dari sepuluh anggota tim HIMA-TKA dalam program P2MD Batch 1 yang memperoleh pendanaan di Desa Bedingin, berkontribusi dalam penerapan IPTEK dan digitalisasi bisnis rintisan untuk pengolahan sampah organik menjadi pupuk."]
    ]
  }
};

// 06. IKON SVG - helper markup ikon; ukuran/warna utama dikendalikan CSS.
const icon = {
  arrowUpRight: () => `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>`,
  menu: () => `<svg class="icon" style="width:24px;height:24px" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`,
  close: () => `<svg class="icon" style="width:24px;height:24px" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>`,
  linkedin: () => `<svg class="icon" style="width:17px;height:17px" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><path d="M2 9h4v12H2z"/><path d="M4 4a2 2 0 1 0 0 .01"/></svg>`,
  instagram: () => `<svg class="icon" style="width:17px;height:17px" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.4" fill="currentColor" stroke="none"/></svg>`,
  mail: () => `<svg class="icon" style="width:15px;height:15px" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`,
  mapPin: () => `<svg class="icon" style="width:15px;height:15px" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>`,
  award: () => `<svg class="icon" style="width:23px;height:23px" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="m8.3 12.3-1.8 8 5.5-3 5.5 3-1.8-8"/></svg>`,
  bookOpen: () => `<svg class="icon" style="width:25px;height:25px" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 4h6a4 4 0 0 1 4 4v12a4 4 0 0 0-4-4H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v12a4 4 0 0 1 4-4h6z"/></svg>`,
  wrench: () => `<svg class="icon" style="width:25px;height:25px" viewBox="0 0 24 24" aria-hidden="true"><path d="M14.7 6.3a5 5 0 0 0-6.4 6.4L3 18l3 3 5.3-5.3a5 5 0 0 0 6.4-6.4l-3.1 3.1-2.1-.7-.7-2.1z"/></svg>`,
  users: () => `<svg class="icon" style="width:25px;height:25px" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/></svg>`
};

// 07. HELPER DAN PEMBENTUK MARKUP - fungsi yang menyusun item berulang.
const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

// Membentuk daftar timeline untuk Pendidikan, Pengalaman Kerja, dan Organisasi.
function timelineMarkup(items) {
  return items.map(([date, title, org, description]) => `
    <article class="timeline-item">
      <span>${escapeHtml(date)}</span>
      <h4>${escapeHtml(title)}</h4>
      <strong>${escapeHtml(org)}</strong>
      <p>${escapeHtml(description)}</p>
    </article>
  `).join("");
}

// Membentuk kartu proyek. Pertahankan nama class/data-case-study yang dipakai event handler dan CSS.
function projectCard([number, type, year, title, description, image], index) {
  const accent = Number(number) % 2 ? "pink" : "cyan";
  return `
    <article class="project-card ${accent}" data-testid="project-card-${number}">
      <div class="project-image">
        <img src="${image}" alt="${escapeHtml(title)}" loading="lazy">
        <span class="project-number">${number}</span>
        <button class="project-arrow" type="button" data-case-study="${index}" aria-label="${escapeHtml(`${t("caseStudy")}: ${title}`)}">
          ${icon.arrowUpRight()}
        </button>
      </div>
      <div class="project-info">
        <div>
          <h3>${escapeHtml(type)}</h3>
          <p>${escapeHtml(title)}</p>
          <button class="case-study-link" type="button" data-case-study="${index}">${t("caseStudy")} ${icon.arrowUpRight()}</button>
        </div>
        <span>${escapeHtml(year)}</span>
      </div>
    </article>
  `;
}

// Markup dialog untuk studi kasus proyek.
function caseStudyDialog() {
  return `
    <dialog class="case-study-dialog" id="caseStudyDialog" aria-labelledby="caseStudyDialogTitle">
      <div class="dialog-header">
        <span class="detail-meta">${t("caseStudyTitle")}</span>
        <button class="dialog-close" type="button" data-close-case-study aria-label="${t("close")}">×</button>
      </div>
      <div id="caseStudyContent"></div>
    </dialog>
  `;
}

// Mengisi lalu membuka dialog detail berdasarkan indeks proyek yang diklik.
function openCaseStudy(index) {
  const project = localizedContent[activeLanguage].projects[index];
  const study = caseStudies[index];
  const dialog = document.getElementById("caseStudyDialog");
  const content = document.getElementById("caseStudyContent");
  if (!project || !study || !dialog || !content) return;

  const [, type, year, title, description, image] = project;
  content.innerHTML = `
    <img class="case-study-image" src="${image}" alt="${escapeHtml(title)}">
    <p class="detail-meta">${escapeHtml(type)} · ${escapeHtml(year)}</p>
    <h2 id="caseStudyDialogTitle">${escapeHtml(title)}</h2>
    <div class="case-study-grid">
      <div><span>${t("overview")}</span><p>${escapeHtml(description)}</p></div>
      <div><span>${t("role")}</span><p>${escapeHtml(study.role[activeLanguage])}</p></div>
      <div><span>${t("tools")}</span><p>${escapeHtml(study.tools[activeLanguage])}</p></div>
      <div><span>${t("outcome")}</span><p>${escapeHtml(study.outcome[activeLanguage])}</p></div>
    </div>
  `;
  dialog.showModal();
}

// Keamanan: escape teks dinamis agar karakter khusus tidak ditafsirkan sebagai HTML. Jangan dihapus.
function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// 08. RENDER HALAMAN UTAMA
// Fungsi ini menghasilkan HTML seluruh website ke elemen #root.
// Ubah di sini hanya jika ingin mengubah struktur/urutan section; untuk tampilan visual pakai style.css.
// Urutan halaman: navbar → hero → ticker → profil/skill → proyek → publikasi →
// pendidikan/kerja/organisasi → teaching/community → credentials → kontak → footer.
function render() {
  document.documentElement.lang = activeLanguage;
  document.title = activeLanguage === "id"
    ? "Kevin Bayu Pradana | Portofolio Rekayasa"
    : "Kevin Bayu Pradana | Engineering Portfolio";
  document.querySelector('meta[name="description"]')?.setAttribute(
    "content",
    activeLanguage === "id"
      ? "Portofolio Kevin Bayu Pradana di bidang rekayasa sarana perkeretaapian, pengelasan, metalurgi, manufaktur, dan riset."
      : "Kevin Bayu Pradana - Rolling Stock Engineering, Welding, Metallurgy, Manufacturing, and Research."
  );
  const content = localizedContent[activeLanguage];
  const navItems = [
    [t("navProfile"), "about"], [t("navProjects"), "work"], [t("navPublications"), "publications"],
    [t("navExperience"), "journey"], [t("navTeaching"), "teaching"], [t("navCredentials"), "credentials"], [t("navContact"), "contact"]
  ];
  const root = document.getElementById("root");

  root.innerHTML = `
    <main class="site-shell">
      <div class="grain" aria-hidden="true"></div>

      <!-- 01. NAVBAR / NAVIGASI -->
      <nav class="navbar" data-testid="portfolio-navbar">
        <button class="brand" data-testid="brand-home-button" aria-label="${t("brandHome")}">
          <span>${escapeHtml(profile.shortName)}</span>
          <small>${escapeHtml(profile.name)}</small>
        </button>

        <div class="nav-links" id="navLinks" data-testid="navigation-links">
          ${navItems.map(([label, id]) => `
            <button data-nav-target="${id}" data-testid="nav-${id}-button">${escapeHtml(label)}</button>
          `).join("")}
          <a class="nav-cta" data-testid="nav-contact-link" href="mailto:${profile.email}">
            ${t("contactMe")} ${icon.arrowUpRight()}
          </a>
          <a class="nav-cv" href="${profile.cvUrl}" download aria-label="${t("cvAria")}">${t("downloadCv")}</a>
        </div>

        <button class="language-toggle" id="languageToggle" type="button" aria-label="${t("languageButtonLabel")}">
          <span>${t("languageLabel")}</span> ${t("languageButton")}
        </button>

        <button class="menu-button" id="menuButton" data-testid="mobile-menu-button" aria-label="${t("menuOpen")}" aria-expanded="false">
          ${icon.menu()}
        </button>
      </nav>

      <!-- 02. HERO / INTRO -->
      <section class="hero section-wrap" id="top" data-testid="hero-section">
        <div class="hero-home-background" aria-hidden="true"></div>
        <div class="hero-copy reveal">
          <p class="eyebrow">
            <span class="status-dot"></span>
            ${t("availability")}
            <span class="slash">/</span>
            2026
          </p>
          <h1 data-testid="hero-heading">${t("heroTitle")}</h1>
          <p class="hero-intro" data-testid="hero-description">
            ${t("heroIntro").replace("{name}", escapeHtml(profile.name)).replace("{headline}", escapeHtml(profile.headline[activeLanguage]))}
          </p>
          <div class="hero-actions">
            <button class="button-primary" data-scroll-target="work" data-testid="hero-work-button">
              ${t("viewProjects")} ${icon.arrowUpRight()}
            </button>
            <button class="text-link" data-scroll-target="about" data-testid="hero-about-button">
              ${t("knowProfile")} <span>↓</span>
            </button>
            <a class="button-secondary" href="${profile.cvUrl}" download aria-label="${t("cvAria")}">${t("downloadCv")} ${icon.arrowUpRight()}</a>
          </div>
        </div>

        <div class="hero-visual reveal delay-1" data-testid="hero-profile-visual">
          <figure class="hero-portrait hero-portrait-field">
            <img src="assets/images/kevin-workshop-cutout.webp">
          </figure>
          <figure class="hero-portrait hero-portrait-welding" aria-hidden="true">
            <img src="assets/images/kevin-welding-blue.webp" alt="">
          </figure>
          <figure class="hero-portrait hero-portrait-formal">
            <img src="assets/images/kevin-formal-skin-matched.webp">
          </figure>
          <div class="floating-note"> ${t("heroNote")}</div>
        </div>

        <div class="hero-meta">
          <span>${t("scroll")}</span>
          <span class="line"></span>
          <span>01 - 08</span>
        </div>
      </section>

      <!-- 03. TICKER KEAHLIAN -->
      <section class="ticker" data-testid="skills-ticker" aria-label="${t("skillsTicker")}">
        <div>${t("ticker")}</div>
      </section>

      <!-- 04. PROFIL, STATISTIK, DAN SKILL -->
      <section class="about section-wrap" id="about" data-testid="about-section">
        <div class="section-kicker"><span>02</span><span class="line"></span><span>${t("profileSkills")}</span></div>
        <div class="about-grid">
          <h2>${t("profileHeading")}</h2>
          <div class="about-copy">
            <p>${escapeHtml(t("aboutBio"))}</p>
            <p>
              <span class="about-contact">${icon.mapPin()} <span>${escapeHtml(profile.location[activeLanguage])}</span></span>
              <span class="about-contact">${icon.mail()} <span>${escapeHtml(profile.email)}</span></span>
            </p>
            <div class="about-socials">
              <a class="text-link" data-testid="about-linkedin-link" href="${profile.linkedin}" target="_blank" rel="noreferrer">
                ${t("linkedin")} ${icon.arrowUpRight()}
              </a>
              <a class="text-link" data-testid="about-instagram-link" href="${profile.instagram}" target="_blank" rel="noreferrer">
                ${t("instagram")} ${icon.arrowUpRight()}
              </a>
            </div>
          </div>
        </div>

        <div class="stats">
          <div><strong>3.68</strong><span>${t("gpaLabel")}</span></div>
          <div><strong>${content.projects.length}</strong><span>${t("mainProjects")}</span></div>
          <div><strong>${t("competitionRank")}</strong><span>${t("competition")}</span></div>
        </div>

        <div class="skills-groups">
          ${Object.entries(content.skills).map(([title, items]) => `
            <div class="skill-group">
              <h3>${escapeHtml(title)}</h3>
              <div>
                ${items.map(item => `<span data-testid="skill-${item.toLowerCase().replaceAll(" ", "-")}">${escapeHtml(item)}</span>`).join("")}
              </div>
            </div>
          `).join("")}
        </div>
      </section>

      <!-- 05. PROYEK PILIHAN -->
      <section class="work section-wrap" id="work" data-testid="work-section">
        <div class="section-heading">
          <div class="section-kicker"><span>03</span><span class="line"></span><span>${t("selectedProjects")}</span></div>
        </div>
        <div class="project-list">
          ${content.projects.map(projectCard).join("")}
        </div>
      </section>

      <!-- 06. PUBLIKASI -->
      <section class="content-section section-wrap" id="publications" data-testid="publications-section">
        <div class="section-kicker"><span>04</span><span class="line"></span><span>${t("publications")}</span></div>
        <div class="detail-list">
          ${content.publications.map(([title, journal, meta, description, doi]) => `
            <article class="detail-item">
              ${icon.award()}
              <div>
                <span class="detail-meta">${escapeHtml(meta)} · ${escapeHtml(journal)}</span>
                <h3>${escapeHtml(title)}</h3>
                <p>${escapeHtml(description)}</p>
                <a class="publication-link" href="${escapeHtml(doi)}" target="_blank" rel="noopener noreferrer" aria-label="${t("openPublication")}: ${escapeHtml(title)}" title="${t("openPublication")}">
                  ${icon.arrowUpRight()}
                </a>
              </div>
            </article>
          `).join("")}
        </div>
      </section>

      <!-- 07. PENDIDIKAN, PENGALAMAN KERJA, ORGANISASI -->
      <section class="journey section-wrap" id="journey" data-testid="journey-section">
        <div class="section-kicker"><span>05</span><span class="line"></span><span>${t("experienceEducation")}</span></div>
        <div class="journey-categories">
          <section class="journey-category" aria-labelledby="journey-education-title">
            <h3 id="journey-education-title">${icon.bookOpen()} ${t("education")}</h3>
            <div class="timeline">${timelineMarkup(content.education)}</div>
          </section>

          <section class="journey-category" aria-labelledby="journey-work-title">
            <h3 id="journey-work-title">${icon.wrench()} ${t("workExperience")}</h3>
            <div class="timeline">${timelineMarkup(content.workExperience)}</div>
          </section>

          <section class="journey-category journey-category-organization" aria-labelledby="journey-organization-title">
            <h3 id="journey-organization-title">${icon.users()} ${t("organization")}</h3>
            <div class="timeline">${timelineMarkup(content.organization)}</div>
          </section>
        </div>
      </section>

      <!-- 08. ASISTEN PENGAJAR DAN LAYANAN MASYARAKAT -->
      <section class="content-section section-wrap" id="teaching" data-testid="teaching-section">
        <div class="section-kicker"><span>06</span><span class="line"></span><span>${t("teachingCommunity")}</span></div>
        <div class="two-columns">
          <div>
            <h2>${icon.bookOpen()} ${t("teaching")}</h2>
            ${content.teaching.map(([period, title, desc]) => `
              <article class="mini-item">
                <span>${escapeHtml(period)}</span>
                <h3>${escapeHtml(title)}</h3>
                <p>${escapeHtml(desc)}</p>
              </article>
            `).join("")}
          </div>

          <div>
            <h2>${icon.users()} ${t("community")}</h2>
            ${content.community.map(([period, program, title, role, organization, desc]) => `
              <article class="mini-item">
                <span>${escapeHtml(period)}</span>
                <h3>${escapeHtml(title)}</h3>
                <small class="community-program">${escapeHtml(program)}</small>
                <small class="community-context">${escapeHtml(role)} · ${escapeHtml(organization)}</small>
                <p>${escapeHtml(desc)}</p>
              </article>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- 09. SERTIFIKASI, PENGHARGAAN, BAHASA -->
      <section class="content-section section-wrap" id="credentials" data-testid="credentials-section">
        <div class="section-kicker"><span>07</span><span class="line"></span><span>${t("credentials")}</span></div>
        <div class="two-columns">
          <div>
            <h2>${icon.award()} ${t("certification")}</h2>
            ${content.certifications.map(([date, title, issuer, status, validity, desc]) => `
              <article class="mini-item">
                <span>${escapeHtml(date)}</span>
                <h3>${escapeHtml(title)}</h3>
                <small class="credential-issuer">${escapeHtml(issuer)}</small>
                <p>${escapeHtml(desc)}</p>
                <small class="credential-status">${escapeHtml(status)}${validity ? ` · ${t("validFor")} ${escapeHtml(validity)}` : ""}</small>
              </article>
            `).join("")}

            <h2 class="credential-training-heading">${icon.bookOpen()} ${t("training")}</h2>
            ${content.training.map(([date, title, issuer, status, validity, desc]) => `
              <article class="mini-item">
                <span>${escapeHtml(date)}</span>
                <h3>${escapeHtml(title)}</h3>
                <small class="credential-issuer">${escapeHtml(issuer)}</small>
                <p>${escapeHtml(desc)}</p>
                <small class="credential-status">${escapeHtml(status)}${validity ? ` · ${t("validFor")} ${escapeHtml(validity)}` : ""}</small>
              </article>
            `).join("")}
          </div>

          <div>
            <h2>${icon.award()} ${t("achievement")}</h2>
            <article class="achievement-card">
              <span>${t("achievementMeta")}</span>
              <h3>${t("achievementTitle")}</h3>
              <small class="achievement-detail">${t("achievementOrganizer")}</small>
              <p>${t("achievementText")}</p>
            </article>

            <div class="language-card">
              <span>${t("languages")}</span>
              <p><strong>${t("nativeLanguage")}</strong> · ${t("nativeLevel")}</p>
              <p><strong>${t("englishLanguage")}</strong> · EPT 537 · TOEFL ITP: 450</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 10. KONTAK -->
      <section class="contact section-wrap" id="contact" data-testid="contact-section">
        <div class="contact-card">
          <p class="eyebrow">${t("openOpportunities")}</p>
          <h2>${t("contactHeading")}</h2>
          <a class="contact-cv" href="${profile.cvUrl}" download aria-label="${t("cvAria")}">${t("downloadCv")} ${icon.arrowUpRight()}</a>
          <a class="contact-email" data-testid="contact-email-link" href="mailto:${profile.email}">
            ${escapeHtml(profile.email)} ${icon.arrowUpRight()}
          </a>
          <div class="contact-footer">
            <span>${icon.mapPin()} ${escapeHtml(profile.location[activeLanguage])}</span>
            <span>© 2026 ${escapeHtml(profile.name)}</span>
          </div>
        </div>
      </section>

      <!-- 11. FOOTER + DIALOG STUDI KASUS -->
      <footer class="footer" data-testid="portfolio-footer">
        <span>${escapeHtml(profile.shortName)}</span>
        <div class="social-links">
          <a data-testid="linkedin-link" href="${profile.linkedin}" target="_blank" rel="noreferrer">
            ${icon.linkedin()} LinkedIn
          </a>
          <a data-testid="instagram-link" href="${profile.instagram}" target="_blank" rel="noreferrer">
            ${icon.instagram()} Instagram
          </a>
          <a data-testid="footer-email-link" href="mailto:${profile.email}">
            ${icon.mail()} Email
          </a>
        </div>
      </footer>
      ${caseStudyDialog()}
    </main>
  `;

  bindInteractions();
}

// 09. INTERAKSI - event listener tombol. Pastikan selector cocok dengan markup di render().
function bindInteractions() {
  document.querySelector('[data-testid="brand-home-button"]')?.addEventListener("click", () => scrollTo("top"));

  document.getElementById("languageToggle")?.addEventListener("click", () => {
    activeLanguage = activeLanguage === "id" ? "en" : "id";
    localStorage.setItem("portfolio-language", activeLanguage);
    render();
  });

  document.querySelectorAll("[data-nav-target]").forEach((button) => {
    button.addEventListener("click", () => {
      scrollTo(button.dataset.navTarget);
      closeMobileMenu();
    });
  });

  document.querySelectorAll("[data-scroll-target]").forEach((button) => {
    button.addEventListener("click", () => scrollTo(button.dataset.scrollTarget));
  });

  document.querySelectorAll("[data-case-study]").forEach((button) => {
    button.addEventListener("click", () => openCaseStudy(Number(button.dataset.caseStudy)));
  });

  const dialog = document.getElementById("caseStudyDialog");
  document.querySelector("[data-close-case-study]")?.addEventListener("click", () => dialog?.close());
  dialog?.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  const menuButton = document.getElementById("menuButton");
  menuButton?.addEventListener("click", () => {
    const nav = document.getElementById("navLinks");
    const open = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? t("menuClose") : t("menuOpen"));
    menuButton.innerHTML = open ? icon.close() : icon.menu();
  });
}

// Helper menutup menu navigasi pada tampilan mobile.
function closeMobileMenu() {
  const nav = document.getElementById("navLinks");
  const menuButton = document.getElementById("menuButton");
  nav?.classList.remove("is-open");
  menuButton?.setAttribute("aria-expanded", "false");
  menuButton?.setAttribute("aria-label", t("menuOpen"));
  if (menuButton) menuButton.innerHTML = icon.menu();
}

// 10. STARTUP - render awal setelah dokumen HTML selesai dimuat.
document.addEventListener("DOMContentLoaded", render);

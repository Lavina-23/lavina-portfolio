import sistemTOEIC from "../assets/img/dash-peserta.png";
import growplus from "../assets/img/growplus.png";
import javaReomit from "../assets/img/java-reomit.png";
import logify from "../assets/img/logify.png";
import prestify from "../assets/img/prestify.png";
import quickJob from "../assets/img/quickjob.png";
import sieAcara from "../assets/img/sie-acara.png";

export const workExperiences = [
  {
    title: "Website Developer",
    date: "June 2023 | 1 month",
    company: "PT. Malang Agro Resources",
    type: "Freelance",
    description: [
      "Develop and design the Archtrium corporate landing page utilizing the WordPress Elementor platform, while integrating custom CSS scripts to achieve specialized functionality and visual distinction.",
      "Curate, compose, and organize all website content using user-friendly and professional language to clearly articulate the company's services in architecture and construction.",
      "Create a detailed and visually compelling project portfolio section on the website to effectively showcase the company’s completed architectural and construction work.",
    ],
    skills: ["Wordpress", "Figma"],
  },
  {
    title: "Website Designer",
    date: "June 2021 - November 2021 | 6 month",
    company: "PT. Pandya Paraduta Asca",
    type: "Internship",
    description: [
      "Develop a personal portfolio website utilizing a pre-existing template to ensure rapid deployment and a polished aesthetic.",
      "Engineer a dynamic portfolio website incorporating basic CRUD (Create, Read, Update, Delete) functionality to manage and display project data.",
    ],
    skills: ["HTML", "CSS", "PHP", "MySql"],
  },
];

export const projects = [
  {
    title: "Logify: Sistem Manajemen Log Pekerjaan",
    link: "https://github.com/lostboiii/Logify",
    role: "Frontend Developer",
    image: logify,
    description:
      "Logify adalah aplikasi manajemen tugas berbasis web yang sederhana dan intuitif, dirancang untuk membantu individu dan tim mengatur, memantau, serta menyelesaikan tugas-tugas mereka secara efisien. Baik anda mengelola daftar tugas pribadi maupun proyek tim, Logify menyatukan semuanya di satu tempat sehingga Anda dapat fokus untuk menyelesaikan pekerjaan.",
    skills: ["Laravel", "JQuery", "Tailwind CSS"],
    projectLinkLabel: "Project Link 🚀",
  },
  {
    title: "Sie. Acara",
    link: "https://github.com/arielreza/absensi_acara",
    role: "Backend Developer",
    image: sieAcara,
    description:
      "Sie. Acara adalah aplikasi absensi berbasis mobile yang memanfaatkan pemindaian kode QR untuk mempermudah proses pencatatan kehadiran dalam suatu acara. Aplikasi ini dirancang agar cepat, akurat, dan praktis, sehingga membantu panitia dalam mengelola data peserta secara efisien dan real-time.",
    skills: ["Flutter", "Firebase"],
    projectLinkLabel: "Project Link 🚀",
  },
  {
    title: "Growplus: Asisten Gizi Digital untuk Mencegah Stunting pada Anak",
    link: "https://github.com/HaikalMuhammadRafli/growplus",
    role: "Backend Developer",
    image: growplus,
    description:
      "Mengembangkan website aplication untuk pemantauan perkembangan Ibu dan Anak yang di gamifikasi. Aplikasi ini bertujuan untuk membantu mencegah stunting pada anak dengan memberikan informasi gizi yang tepat, memantau pertumbuhan anak, dan memberikan rekomendasi nutrisi yang sesuai. Fitur utama aplikasi ini meliputi pemantauan pertumbuhan anak, rekomendasi nutrisi, pengingat imunisasi, dan edukasi gizi untuk orang tua.",
    skills: ["Laravel", "MySQL", "Tailwind CSS"],
    projectLinkLabel: "Project Link 🚀",
  },
  {
    title: "Sistem Registrasi Tes TOEIC Polinema",
    link: "https://github.com/Lavina-23/sistem-toeic",
    role: "Fullstack Developer",
    image: sistemTOEIC,
    description:
      "Mengembangkan aplikasi berbasis web yang dikembangkan untuk mempermudah proses pendaftaran dan pengelolaan tes TOEIC di Polinema. Sistem ini memungkinkan mahasiswa untuk mendaftar tes TOEIC secara online, melihat pengumuman, melihat riwayat tes, mengajukan dokumen, dan masih banyak lagi. Bagi admin, sistem menyediakan fitur pengelolaan pengumuman, verifikasi pendaftaran, monitoring peserta, dan generate laporan secara otomatis.",
    skills: ["Laravel", "Twilio", "Tailwind CSS", "MySql"],
    projectLinkLabel: "Project Link 🚀",
  },
  {
    title: "Prestify: Sistem Pencatatan Prestasi Mahasiswa Polinema",
    link: "https://github.com/Lavina-23/Prestify",
    role: "Fullstack Developer",
    image: prestify,
    description:
      "Prestify adalah sistem pencatatan prestasi mahasiswa Polinema berbasis web yang dirancang untuk memudahkan pengelolaan dan pendataan prestasi mahasiswa secara terpusat, transparan, dan efisien. Sistem ini memungkinkan mahasiswa untuk mengajukan prestasi mereka, dosen atau admin jurusan untuk melakukan verifikasi, serta pihak akademik untuk memantau dan melaporkan capaian prestasi mahasiswa secara real-time.",
    skills: ["PHP", "Microsoft SQL Server", "Tailwind CSS"],
    projectLinkLabel: "Project Link 🚀",
  },
  {
    title: "QuickJob",
    link: "https://github.com/Lavina-23/quick-job",
    role: "Frontend Developer",
    image: quickJob,
    description:
      "QuickJob adalah platform freelance on-demand yang menghubungkan pencari kerja dengan peluang kerja fleksibel secara cepat dan efisien. Dengan fokus pada penyediaan pekerjaan yang layak, QuickJob membantu meningkatkan kesejahteraan tenaga kerja sekaligus mendorong pertumbuhan ekonomi yang berkelanjutan melalui akses kerja yang lebih luas dan inklusif.",
    skills: ["Typescript", "Next.js", "Tailwind CSS"],
    projectLinkLabel: "Project Link 🚀",
  },
  {
    title: "Java Reomit",
    link: "https://github.com/hmdnu/java-reomit",
    role: "Frontend Developer",
    image: javaReomit,
    description:
      "Java Reomit adalah sistem informasi yang dirancang untuk memperkenalkan dan melestarikan kekayaan budaya Jawa Timur melalui platform digital yang interaktif. Sistem ini menyediakan informasi mengenai tradisi, seni, kuliner, dan destinasi budaya, sehingga memudahkan masyarakat untuk mengenal serta menghargai warisan budaya secara lebih luas dan berkelanjutan.",
    skills: ["Typescript", "Tailwind CSS", "Next.js"],
    projectLinkLabel: "Project Link 🚀",
  },
];

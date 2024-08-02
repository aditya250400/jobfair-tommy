import { Gender, PrismaClient, Role } from "@prisma/client";
import { faker } from "@faker-js/faker";
import moment from "moment";
import bcrypt from "bcrypt";
import prisma from "../prisma/db"

async function main() {
  // Data seeding  
  await prisma.user.deleteMany({});  
  const admin = await prisma.user.create({
    data: {
      name: "Admin",
      password: await bcrypt.hash("admin", 10),
      phone: "0",
      role: "Panitia",
      username: "admin",
    },
  });

  const dataUser = [
    {
      name: "muhammad khatami",
      username: "mkhatami",
      password: "12345",
      phone: "087783266453",
      role: "Pelamar",
    },
    {
      name: "ivan faathirza",
      username: "ivan",
      password: "12345",
      phone: "0892376656223",
      role: "Pelamar",
    },
    {
      name: "rini indrawati",
      username: "rini",
      password: "12345",
      phone: "086776439346",
      role: "Pelamar",
    },
    {
      name: "anisa cahaya putri",
      username: "anisa",
      password: "12345",
      phone: "081234567895",
      role: "Pelamar",
    },
    {
      name: "siti rahayu",
      username: "siti",
      password: "12345",
      phone: "081234567892",
      role: "Pelamar",
    },
    {
      name: "rizki pratama",
      username: "rizki",
      password: "12345",
      phone: "081234567890",
      role: "Pelamar",
    },
    {
      name: "nisa putri",
      username: "nisa",
      password: "12345",
      phone: "081234567898",
      role: "Pelamar",
    },
    {
      name: "faisal ahmad",
      username: "faisal",
      password: "12345",
      phone: "081234567896",
      role: "Pelamar",
    },
    {
      name: "daniel wijaya",
      username: "daniel",
      password: "12345",
      phone: "081234567892",
      role: "Pelamar",
    },
    {
      name: "sarah anindita",
      username: "sarah",
      password: "12345",
      phone: "081234567890",
      role: "Pelamar",
    },
  ];

  const dataCV = [
    {
      name: "muhammad khatami",
      address: "jl. maleber utara",
      email: "mkhatami@gmail.com",
      gender: "male",
      phone: "087673277652",
      birth_date: "2000-09-07 19:18:03",
      social_media: "@mkhatami",
      desc: "saya seorang lulusan universitas komputer indonesia yang memiliki kemampuan design, ui/ux",
      skills: [
        {
          name: "hardskill",
          skill: ["ui/ux", "java", "mysql", "jaringan komputer"],
        },
        { name: "softskill", skill: ["kerja sama tim", "komunikasi"] },
        { name: "language", skill: ["bahasa indonesia", "bahasa inggris"] },
        {
          name: "interest",
          skill: ["Pengembangan Sistem Informasi Manajemen Perpustakaan"],
        },
      ],
      achievement: [
        {
          name: "best IT project award",
          pemberi: "Universitas teknologi",
          tahun: "2020",
        },
      ],
      experience: [
        {
          name: "IT support intern",
          deskripsi:
            "Memberikan dukungan teknis untuk pengguna dalam menangani masalah perangkat keras dan perangkat lunak",
        },
      ],
      education: [
        {
          name: "Universitas Komputer Indonesia",
          degree: "S1",
          major: "Teknik Informatika",
          address: "Bandung",
          start_at: "2019-09-09 14:18:51",
          end_at: "2024-06-09 14:18:51",
          grade: 3,
          desc: null,
        },
      ],
      workExperiences: [
        {
          name: "Universitas Teknologi",
          position: "IT support",
          start_at: "2022-02-09 13:54:31",
          end_at: "2023-02-09 13:54:31",
          address: "Bandung",
          desc: [
            "Memberikan dukungan teknis untuk perangkat keras dan perangkat lunak",
            "Menangani masalah jaringan",
            "Memelihara sistem IT"
          ],
        },
      ],
    },
    {
      name: "ivan faathirza",
      address: "jl. tubagus ismail",
      email: "ivanfaathirza@gmail.com",
      gender: "male",
      phone: "0892367675673",
      birth_date: "2001-01-01 19:21:38",
      social_media: "@ivan123",
      desc: "Lulusan Teknik Komputer yang berorientasi pada hasil yang berspesialisasi dalam Pengembangan Full-Stack, Desain Situs Web, dan Internet of Things. Menunjukkan keahlian dalam mengoptimalkan efisiensi melalui Cloud Computing. Faathirza memberikan solusi inovatif untuk mengatasinya tantangan organisasi dan mendorong keunggulan teknologi.",
      skills: [
        {
          name: "hardskill",
          skill: [
            "Full-Stack Development",
            "Vuejs",
            "Nodejs",
            "Firebase",
            "Laravel",
            "MySQL",
            "API Development",
            "Internet of Things",
            "Xendit Integration",
            "Project Management",
            "Emerging Technologies",
          ],
        },
      ],
      achievement: [
        {
          name: "Anggota aktif Klub Mahasiswa Pengembang",
          pemberi:
            "memperoleh pengalaman praktis dan keterampilan berkolaborasi dalam proyek dunia nyata",
          tahun: "",
        },
      ],
      experience: [
        {
          name: "Memelopori pengembangan dan peningkatan infrastruktur back-end produk digital di Mindo Education",
          deskripsi:
            "berkontribusi pada peningkatan efisiensi sistem secara keseluruhan sebesar 20%.",
        },
      ],
      education: [
        {
          name: "Universitas Komputer Indonesia",
          degree: "S1",
          major: "Teknik Informatika",
          address: "Bandung",
          start_at: "2019-09-09 14:18:51",
          end_at: "2024-01-07 14:18:51",
          grade: 3,
          desc: null,
        },
      ],
      workExperiences: [
        {
          name: "Mindo",
    position: "Back-end developer",
    start_at: "2021-05-01 13:54:31",
    end_at: "2022-03-01 13:54:31",
    address: "Kuningan",
    desc: [
      "Mengembangkan dan memelihara layanan back-end",
      "Bekerja dengan database",
      "Mengoptimalkan kinerja server"
    ]
        }
      ],
    },
    {
      name: "rini indrawati",
      address: "Jl. Pintu Air No. 567",
      email: "rini.indrawati@email.com",
      gender: "female",
      phone: "081234567892",
      birth_date: "2000-04-13 20:14:37",
      social_media: "@riniindrawati",
      desc: "Rini Indrawati adalah seorang profesional muda berusia 24 tahun yang beralamat di Jl. Pintu Air No. 567, Kota Informatika. Ia memiliki gelar sarjana dalam bidang Sistem Informasi dari Universitas Teknologi Informatika, Kota Informatika, Indonesia, dan lulus pada tahun 2021.",
      skills: [
        { name: "hardskill", skill: ["sql", "python", "mongodb", "MySQL"] },
        {
          name: "softskill",
          skill: ["kerja sama tim", "komunikasi efektif", "kepemimpinan"],
        },
        { name: "language", skill: ["bahasa indonesia", "bahasa inggris"] },
        {
          name: "interest",
          skill: [
            "Implementasi Sistem Manajemen Database Terdistribusi. Hal ini menunjukkan minatnya dalam mengelola dan meningkatkan efisiensi basis data melalui sistem terdistribusi.",
          ],
        },
      ],
      achievement: [
        {
          name: "best paper award",
          pemberi: "Konferensi Nasional Sistem Informasi",
          tahun: "2021",
        },
      ],
      experience: [
        {
          name: "Implementasi Sistem Manajemen Database Terdistribusi",
          deskripsi:
            "Menangani skema basis data terdistribusi untuk meningkatkan kinerja dan ketersediaan data, Memastikan kepatuhan terhadap regulasi keamanan data.",
        },
      ],
      education: [
        {
          name: "Universitas Teknologi Informatika",
          degree: "S1",
          major: "Teknik Informatika",
          address: "Jakarta",
          start_at: "2017-09-04 14:28:01",
          end_at: "2021-07-12 14:28:01",
          grade: 3,
          desc: null,
        },
      ],
      workExperiences: [
        {
          name: "PT. Indodax",
          position: "Manager Operasional",
          start_at: "2021-02-11 14:00:26",
          end_at: "2024-02-01 14:00:26",
          address: "Jakarta",
          desc: [
            "Mengelola operasional harian",
            "Menangani masalah klien",
            "Mengatur dokumentasi"
          ]
        },
      ]
    },
    {
      name: "anisa cahaya putri",
      address: "Jl. Buku Besar No. 123",
      email: "anisa.putri@email.com",
      gender: "female",
      phone: "081234567895",
      birth_date: "1999-06-15 20:29:32",
      social_media: "@anisa.putri",
      desc: "Anisa Cahaya Putri adalah seorang profesional perempuan yang memiliki latar belakang pendidikan dalam bidang akuntansi. Berusia 25 tahun, Anisa telah menyelesaikan pendidikan sarjana akuntansi dari Universitas Keuangan Terkini pada tahun 2020.",
      skills: [
        {
          name: "hardskill",
          skill: ["penyusunan laporan keuangan", "analisis keuangan"],
        },
        {
          name: "softskill",
          skill: ["bisa menggunakan SAP dan Qickbooks, dan microsoft excel"],
        },
        { name: "language", skill: ["bahasa indonesia dan bahasa inggris"] },
        {
          name: "interest",
          skill: [
            "Anisa memiliki minat dalam terus mengembangkan keahlian auditnya atau mendalami area khusus dalam bidang akuntansi, seperti manajemen risiko, perpajakan, atau konsultasi keuangan.",
          ],
        },
      ],
      achievement: [
        {
          name: "achievment",
          pemberi: "Sertifikasi Profesional Akuntan (CPA)",
          tahun: "2021",
        },
      ],
      experience: [
        {
          name: "experience",
          deskripsi:
            "Mengelola proyek implementasi sistem akuntansi terintegrasi untuk meningkatkan efisiensi dan akurasi.",
        },
      ],
      education: [
        {
          name: "Universitas Keungan Terknini",
          degree: "S1",
          major: "Akuntansi",
          address: "Surabaya",
          start_at: "2015-10-05 14:28:01",
          end_at: "2020-04-07 14:28:01",
          grade: 3,
          desc: null,
        },
      ],
      workExperiences: [
        {
          name: "PT. The Peak C",
          position: "Staff Akuntansi",
          start_at: "2021-05-07 14:00:26",
          end_at: "2024-01-17 14:00:26",
          address: "Surabaya",
          desc: [
            "Menyusun laporan keuangan",
            "Melakukan audit internal",
            "Mengelola anggaran"
          ]
        },
      ]
    },
    {
      name: "siti rahayu",
      address: "Jl. Indah No. 456",
      email: "siti.rahayu@email.com",
      gender: "female",
      phone: "081234567892",
      birth_date: "1995-08-10 12:31:31",
      social_media: "@siti.rahayu",
      desc: "Siti Rahayu adalah seorang profesional muda yang memiliki latar belakang dalam Ilmu Komunikasi. memiliki keahlian khusus dalam strategi media sosial, pengelolaan konten, dan analisis kinerja, yang telah membuatnya sukses dalam membangun kehadiran merek di berbagai platform.",
      skills: [
        {
          name: "hardskill",
          skill: [
            "konten digital",
            "perencanaan produksi acara",
            "adobe suit",
            "canva",
          ],
        },
        {
          name: "softskill",
          skill: ["komunikasi efektif", "kreatifitas", "kerja tim"],
        },
        { name: "language", skill: ["bahasa indonesia"] },
        {
          name: "interest",
          skill: [
            "Merancang dan melaksanakan kampanye yang berfokus pada keberlanjutan dan tanggung jawab sosial perusahaan",
          ],
        },
      ],
      achievement: [
        {
          name: "Outstanding Social Media Specialist Award",
          pemberi: "PT Kreatif Maju Bersama",
          tahun: "2020",
        },
      ],
      experience: [
        {
          name: "asisten produksi acara",
          deskripsi:
            "Mendukung produksi acara mulai dari perencanaan hingga pelaksanaan",
        },
      ],
      education: [
        {
          name: "Universitas Negri Jakarta",
          degree: "S1",
          major: "Ilmu Komunikasi",
          address: "Jakarta",
          start_at: "2016-04-11 14:33:53",
          end_at: "2019-06-11 14:33:53",
          grade: 4,
          desc: null,
        },
      ],
      workExperiences: [
        {
          name: "PT. Kreatif Maju Bersama",
          position: "Asisten Produksi Acara",
          start_at: "2021-06-11 14:07:19",
          end_at: "2023-12-13 14:07:19",
          address: "Jakarta",
          desc: [
            "Mendukung perencanaan acara",
            "Mengatur logistik acara",
            "Berkoordinasi dengan tim produksi"
          ]
        },
      ]
    },
    {
      name: "rizki pratama",
      address: "Jl. Sukses No. 789",
      email: "rizki.pratama@email.com",
      gender: "male",
      phone: "081234567890",
      birth_date: "1996-01-18 12:31:31",
      social_media: "@rizki.pratama",
      desc: "Rizki Pratama adalah seorang profesional muda dengan usia 31 tahun yang memiliki keahlian di bidang manajemen bisnis. Sebagai Manajer Operasional di PT Sukses Bersama Jaya, Rizki telah menunjukkan kepemimpinan yang kuat dalam mengelola operasional sehari-hari perusahaan.",
      skills: [
        {
          name: "hardskill",
          skill: ["analisis SWOT", "analisis data", "manajemen penjualan"],
        },
        {
          name: "softskill",
          skill: ["Kepemimpinan", "Motivasi Karyawan", "Problem-solving"],
        },
        { name: "language", skill: ["bahasa indonesia"] },
        {
          name: "interest",
          skill: [
            "Menerapkan strategi untuk meningkatkan efisiensi rantai pasok",
          ],
        },
      ],
      achievement: [
        {
          name: "Manager of the Year Award",
          pemberi: "PT Sukses Bersama Jaya",
          tahun: "2019",
        },
      ],
      experience: [
        {
          name: "Manajer Operasional",
          deskripsi: "Mengelola operasional sehari-hari perusahaan",
        },
      ],
      education: [
        {
          name: "Universitas Widyatama",
          degree: "S1",
          major: "Manajemen",
          address: "Bandung",
          start_at: "2015-06-08 14:33:53",
          end_at: "2018-02-12 14:33:53",
          grade: 3,
          desc: null,
        },
      ],
      workExperiences: [
        {
          name: "PT. Sukses Bersama Jaya",
          position: "Manager Operasional",
          start_at: "2019-07-04 14:07:19",
          end_at: "2022-02-09 14:07:19",
          address: "Bandung",
          desc: [
            "Mengelola operasional sehari-hari",
            "Mengawasi staf",
            "Meningkatkan efisiensi operasional"
          ]
        },
      ]
    },
    {
      name: "nisa putri",
      address: "Jl. Sejahtera No. 456",
      email: "nisa.putri@email.com",
      gender: "female",
      phone: "081234567898",
      birth_date: "1998-03-12 12:53:07",
      social_media: "@nisap",
      desc: "Nisa Putri adalah seorang profesional akuntansi. Nisa memiliki tanggung jawab utama dalam pengelolaan dan pelaporan keuangan perusahaan. Keahliannya mencakup analisis biaya dan profitabilitas, yang menjadi kontribusi berharga untuk pengambilan keputusan perusahaan.",
      skills: [
        {
          name: "hardskill",
          skill: [
            "pembukuan",
            "laporan keuangan",
            "cost analysis",
            "Profitability Analysis",
          ],
        },
        {
          name: "softskill",
          skill: ["Kepemimpinan", "Keterampilan Komunikasi", "Analisis Kritis"],
        },
        { name: "language", skill: ["bahasa indonesia dan bahasa inggris"] },
        {
          name: "interest",
          skill: [
            "Mengimplementasikan sistem akuntansi terintegrasi untuk meningkatkan efisiensi proses keuangan.",
          ],
        },
      ],
      achievement: [
        {
          name: "Outstanding Accountant Award",
          pemberi: "PT Keuangan Maju",
          tahun: "2018",
        },
      ],
      experience: [
        {
          name: "akuntan senior",
          deskripsi:
            "Bertanggung jawab atas pengelolaan dan pelaporan keuangan perusahaan.",
        },
      ],
      education: [
        {
          name: "Universitas Gunadarma",
          degree: "S1",
          major: "Akuntansi",
          address: "Bekasi",
          start_at: "2014-02-03 14:40:20",
          end_at: "2018-05-09 14:40:20",
          grade: 3,
          desc: null,
        },
      ],
      workExperiences: [
        {
          name: "PT. Keuangan Maju",
          position: "Staff Akuntan",
          start_at: "2017-05-18 14:13:55",
          end_at: "2024-02-01 14:13:55",
          address: "Bekasi",
          desc: [
            "Menyusun laporan keuangan",
            "Melakukan audit internal",
            "Mengelola anggaran"
          ]
        }
      ]
    },
    {
      name: "faisal ahmad",
      address: "Jl. Jaya Baru No. 567",
      email: "faisal.ahmad@email.com",
      gender: "male",
      phone: "081234567896",
      birth_date: "1998-05-21 12:53:07",
      social_media: "@faisal.ahmad",
      desc: "Faisal memiliki keterampilan yang luas, termasuk dalam arsitektur perangkat lunak, pemrograman (Java, C++, Python), pengembangan web, sistem terbenam, pengelolaan database, serta penggunaan Git Version Control dan layanan cloud seperti AWS dan Azure.",
      skills: [
        { name: "hardskill", skill: ["html", "css", "javascript", "python"] },
        {
          name: "softskill",
          skill: ["Kepemimpinan", "Kolaborasi Tim", "Solusi Kreatif"],
        },
        { name: "language", skill: ["bahasa indonesia dan bahasa inggris"] },
        {
          name: "interest",
          skill: [
            "Merancang dan menerapkan arsitektur mikroservices untuk meningkatkan skalabilitas dan fleksibilitas sistem.",
          ],
        },
      ],
      achievement: [
        {
          name: "Best Software Architect Award",
          pemberi: "PT Inovasi Teknologi",
          tahun: "2019",
        },
      ],
      experience: [
        {
          name: "Lead Software Architect",
          deskripsi:
            "Menangani arsitektur perangkat lunak untuk aplikasi bisnis kompleks.",
        },
      ],
      education: [
        {
          name: "Universitas Pelita Harapan",
          degree: "S1",
          major: "Sistem Informasi",
          address: "Tangerang",
          start_at: "2015-04-13 14:40:20",
          end_at: "2018-05-15 14:40:20",
          grade: 3,
          desc: null,
        },
      ],
      workExperiences: [
        {
          name: "PT. Inovasi Teknologi",
          position: "Lead Software Architect",
          start_at: "2018-08-10 14:13:55",
          end_at: "2023-04-12 14:13:55",
          address: "Tangerang",
          desc: [
            "Merancang arsitektur perangkat lunak",
            "Memimpin tim pengembang",
            "Mengawasi implementasi teknis"
          ]
        },
      ]
    },
    {
      name: "daniel wijaya",
      address: "Jl. menteng No. 123",
      email: "daniel.wijaya@email.com",
      gender: "male",
      phone: "081234567892",
      birth_date: "1999-07-23 13:12:06",
      social_media: "@dani.wijaya",
      desc: "pernah terlibat dalam merancang dan mengembangkan sistem terbenam untuk berbagai produk elektronik. Perannya juga melibatkan kepemimpinan dalam tim pengembangan, khususnya dalam proyek-proyek yang menuntut inovasi dan keahlian teknis tinggi.",
      skills: [
        {
          name: "hardskill",
          skill: [
            "Mikrokontroler (ARM, AVR)",
            "Raspberry Pi",
            "Altium Designer",
            "Eagle",
          ],
        },
        {
          name: "softskill",
          skill: ["Problem-solving", "Kreativitas", "Kerja Tim"],
        },
        { name: "language", skill: ["bahasa indonesia"] },
        {
          name: "interest",
          skill: [
            "Mengintegrasikan sensor-sensor pintar dan kontrol otomatis untuk rumah pintar.",
          ],
        },
      ],
      achievement: [
        {
          name: "Sertifikasi Professional Engineer (PE)",
          pemberi: "Sertifikasi Professional Engineer (PE)",
          tahun: "2018",
        },
      ],
      experience: [
        {
          name: "Senior Embedded Systems Engineer",
          deskripsi:
            "Merancang dan mengembangkan sistem terbenam untuk produk-produk elektronik",
        },
      ],
      education: [
        {
          name: "Universitas Negri Malang",
          degree: "S1",
          major: "Teknik Elektro",
          address: "Malang",
          start_at: "2014-08-18 14:48:04",
          end_at: "2017-04-19 14:48:04",
          grade: 3,
          desc: null,
        },
      ],
      workExperiences: [
        {
          name: "PT. Reemar Group",
          position: "Senior Embedded Systems Engineer",
          start_at: "2017-02-24 14:15:57",
          end_at: "2022-02-17 14:15:57",
          address: "Malang",
          desc: [
            "Merancang dan mengembangkan sistem terbenam",
            "Mengintegrasikan sensor pintar",
            "Melakukan troubleshooting perangkat keras"
          ]
        },
      ]
    },
    {
      name: "sarah anindita",
      address: "Jl. Indah No. 123",
      email: "sarah.anindita@email.com",
      gender: "female",
      phone: "081234567890",
      birth_date: "1996-06-14 13:12:06",
      social_media: "@sarah.anin",
      desc: "Sebagai individu yang berkomitmen terhadap pengembangan diri dan karier, Sarah memiliki sejumlah pengalaman kerja yang beragam di bidang TI dan manajemen proyek.",
      skills: [
        { name: "hardskill", skill: ["HTML", "CSS", "JavaScript"] },
        {
          name: "softskill",
          skill: ["Kepemimpinan", "Komunikasi Efektif", "Kolaborasi Tim"],
        },
        { name: "language", skill: ["bahasa indonesia dan bahasa inggris"] },
        {
          name: "interest",
          skill: [
            "mengelola proyek-proyek TI yang kompleks, termasuk perencanaan, pelaksanaan, dan penyelesaian proyek dengan efisien.",
          ],
        },
      ],
      achievement: [
        {
          name: "Sertifikasi Manajemen Proyek (PMP)",
          pemberi: "Project Management Institute",
          tahun: "2019",
        },
      ],
      experience: [
        {
          name: "Manajer Proyek TI",
          deskripsi:
            "Bertanggung jawab atas manajemen risiko dan jadwal proyek",
        },
      ],
      education: [
        {
          name: "Universitas Negri Bandung",
          degree: "S1",
          major: "Manejemen",
          address: "Bandung",
          start_at: "2015-05-04 14:48:04",
          end_at: "2019-07-17 14:48:04",
          grade: 3,
          desc: null,
        },
      ],
      workExperiences: [
        {
          name: "PT. Indo Maju",
          position: "Manajer Proyek TI",
          start_at: "2018-09-13 14:15:57",
          end_at: "2021-05-13 14:15:57",
          address: "Tasikmalaya",
          desc: [
            "Mengelola proyek TI",
            "Mengatur jadwal proyek",
            "Menangani risiko proyek"
          ]
        }
      ]
    },
  ];

  dataUser.forEach(async (item, i) => {
    const user = await prisma.user.create({
      data: {
        name: item.name,
        username: item.username,
        password: await bcrypt.hash(item.password, 10),
        phone: item.phone,
        role: item.role as Role,
      },
    });

    await prisma.cV.create({
      data: {
        user_id: user.id,
        name: dataCV[i].name,
        address: dataCV[i].address,
        email: dataCV[i].email,
        gender: dataCV[i].gender as Gender,
        phone: dataCV[i].phone,
        birth_date: moment(dataCV[i].birth_date).toISOString(),
        social_media: [dataCV[i].social_media],
        desc: dataCV[i].desc,
        achievement: {
          create: dataCV[i].achievement.map((it) => {
            return {
              name: it.name,
              provider: it.pemberi,
              year: it.tahun,
            };
          }),
        },
        experience: {
          create: dataCV[i].experience.map((it) => {
            return {
              name: it.name,
              description: it.deskripsi,
            };
          }),
        },
        skill: {
          create: dataCV[i].skills.map((it) => {
            return {
              name: it.name,
              skill: it.skill,
            };
          }),
        },
        educations: {          
          create: dataCV[i].education.map((it) => {
            return {
              name: it.name,
              address: it.address,
              degree: it.degree,
              desc: it.desc,
              grade: it.grade,
              major: it.major,
              start_at: moment(it.start_at).toISOString(),
              end_at: moment(it.end_at).toISOString()
            }
          })
        },
        workExperiences: {
          create: dataCV[i].workExperiences.map((it) => {
            return {
              name: it.name,
              address: it.address,
              desc: it.desc,
              position: it.position,
              end_at: moment(it.end_at).toISOString(),
              start_at: moment(it.start_at).toISOString()
            }
          })
        }
      },
    });
  });

  const requirements = [
    {
      min_age: 21,
      max_age: 30,
      gender: ["male", "female"],
      position: "backend developer",
      desc_job: [
        "bertanggung jawab untuk merancang, mengelola, dan memelihara database yang digunakan oleh aplikasi.",
      ],
      skill: ["menguasai algoritma", "SQL Statement", "NodeJs"],
      keyword: [
        "backend developer",
        "NodeJs",
        "Teknik Informatika",
        "Sistem Informasi",
        "Ilmu Komputer",
      ],
      education: {
        create: [
          {
            degree: "S1",
            major: ["Teknik Informatika", "Sistem Informasi", "Ilmu Komputer"],
            grade: 0,
          },
        ],
      },
    },
    {
      min_age: 21,
      max_age: 30,
      gender: ["male", "female"],
      position: "staff akuntansi",
      desc_job: [
        "bertanggung jawab memeriksa dan melakukan verifikasi transaksi keuangan perusahaan, melakukan pencatatan dan dokumentasi, serta bertugas menyusun laporan keuangan secara akurat.",
      ],
      skill: [
        "menguasai pembukaan laporan keuangan",
        "mengoperasikan Ms. office",
      ],
      keyword: ["Akuntansi", "male", "female", "Ms. Office"],
      education: {
        create: [
          {
            degree: "S1",
            major: ["Akutansi"],
            grade: 0,
          },
        ],
      },
    },
    {
      min_age: 20,
      max_age: 30,
      gender: ["male", "female"],
      position: "graphic designer",
      desc_job: [
        "menciptakan ilustrasi, tipografi, fotografi, atau grafis motion baik untuk penerbit maupun media cetak dan elektronik. Seorang graphic designer bertanggung jawab atas tampilan pada media promosi suatu produk.",
      ],
      skill: ["Menguasai Adobe Illustrator", "Photoshop", "Premiere"],
      keyword: [
        "design",
        "male",
        "female",
        "Adobe Illustrator",
        "Photoshop",
        "Premiere",
      ],
      education: {
        create: [
          {
            degree: "SMK",
            major: ["Desain"],
            grade: 0,
          },
          {
            degree: "S1",
            major: ["Desain"],
            grade: 0,
          },
        ],
      },
    },
    {
      min_age: 21,
      max_age: 30,
      gender: ["female"],
      position: "staff akuntansi",
      desc_job: [
        "Melakukan koordinasi dan bekerja sama dengan berbagai pihak untuk terpenuhinya kebutuhan Kas Kecil, yang didalamnya mencakup aktifitas pembentukan, pengelolaan, pelaporan, dan penutupan kas kecil. Memastikan setiap pengeluaran Kas Kecil dapat dipertanggung jawabkan baik secara administrasi maupun dokumentasi, sesuai prinsip-prinsip akuntansi yang berlaku dan matrix approval yang ditetapkan dalam Prosedur Kas Kecil",
      ],
      skill: [
        "Memiliki pengetahuan dasar-dasar Akuntansi dan Perpajakan",
        "Memahami proses pencatatan transaksi keuangan",
      ],
      keyword: ["female", "akuntansi", "pencacatan keuangan"],
      education: {
        create: [
          {
            degree: "D3",
            major: ["Akuntansi/keuangan"],
            grade: 2.75,
          },
          {
            degree: "S1",
            major: ["Akuntansi/keuangan"],
            grade: 2.75,
          },
        ],
      },
    },
    {
      min_age: 20,
      max_age: 35,
      gender: ["male", "female"],
      position: "teknisi elektro",
      desc_job: [
        "Menjalankan aktivitas pemeliharaan/perbaikan mesin",
        "Standby dan bersedia menjalankan tugas setiap saat dibutuhkan",
      ],
      skill: [
        "memiliki pengetahuan dalam sistem kelistrikan (PLC)",
        "teknikal support",
        "mekatronika",
        "bekerja sama dalam tim",
      ],
      keyword: ["elektro", "kerja sama tim"],
      education: {
        create: [
          {
            degree: "SMK",
            major: ["Teknik elektro, mesin, mekatronika"],
            grade: 0,
          },
          {
            degree: "D3",
            major: ["Teknik elektro, mesin, mekatronika"],
            grade: 0,
          },
          {
            degree: "S1",
            major: ["Teknik elektro, mesin, mekatronika"],
            grade: 0,
          },
        ],
      },
    },
    {
      min_age: 21,
      max_age: 35,
      gender: ["male", "female"],
      position: "staff perpajakan / akuntansi",
      desc_job: [
        "Memahami proses dan prosedur Pelaporan Pajak Tahunan dan Bulanan",
        "Menyusun SPT Tahunan Pribadi dan/ atau Badan",
        "Mampu menyusun Laporan Keuangan dan Laporan Pajak dengan baik",
      ],
      skill: [
        "Memiliki keahlian (expert) dalam menggunakan Excel",
        "software pajak",
        "software akuntansi lebih diminati",
      ],
      keyword: ["akuntansi", "male", "female", "Ms. excel", "pajak"],
      education: {
        create: [
          {
            degree: "S1",
            major: ["Akuntansi", "pajak", "ekonomi"],
            grade: 2.75,
          },
        ],
      },
    },
    {
      min_age: 20,
      max_age: 24,
      gender: ["male", "female"],
      position: "Mayora management trainee",
      desc_job: [
        "program Factory Accounting kamu akan mempelajari mengenai akuntansi biaya terkhususnya perhitungan COGM & COGS untuk mengetahui biaya produksi suatu barang.",
      ],
      skill: [
        "Memiliki pengalaman organisasi dan pernah menjadi ketua/pemimpin",
        "Memahami akuntansi biaya",
        "Memiliki kemampuan komunikasi yang baik",
      ],
      keyword: ["Akuntansi", "Komunikasi yang baik"],
      education: {
        create: [
          {
            degree: "S1",
            major: ["Akuntansi"],
            grade: 3.0,
          },
        ],
      },
    },
    {
      min_age: 28,
      max_age: 40,
      gender: ["male", "female"],
      position: "HR/HC recruitment & selection",
      desc_job: [
        "Pengembangan Rencana Rekrutmen",
        "Seleksi dan Penilaian Kandidat",
        "Pemasaran Posisi",
      ],
      skill: [
        "Memiliki jiwa Leadership",
        "Aktif",
        "Multitasking",
        "Work culture builder",
        "Tegas & Berintegrasi",
        "Terbiasa dalam dinamika organisasi",
        "Create Struktur Organisasi",
      ],
      keyword: ["male", "female", "leadership", "multitasking", "HR", "HC"],
      education: {
        create: [
          {
            degree: "S1",
            major: ["Psikologi", "Manajemen SDM", "Hukum"],
            grade: 3.0,
          },
        ],
      },
    },
  ];  

  await prisma.company.deleteMany({});  
  requirements.forEach(async (item) => {
    await prisma.company.create({
      data: {
        user_id: admin.id,
        name: faker.company.name(),
        address: faker.address.streetAddress(),
        desc: faker.lorem.sentence(),
        social_media: faker.internet.url(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        requirements: {
          create: [item],
        },
      },
    });
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2 (Debian 16.2-1.pgdg120+2)
-- Dumped by pg_dump version 16.3 (Ubuntu 16.3-1.pgdg22.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: jobfair-skripsi
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO "jobfair-skripsi";

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: jobfair-skripsi
--

COMMENT ON SCHEMA public IS '';


--
-- Name: Gender; Type: TYPE; Schema: public; Owner: jobfair-skripsi
--

CREATE TYPE public."Gender" AS ENUM (
    'male',
    'female'
);


ALTER TYPE public."Gender" OWNER TO "jobfair-skripsi";

--
-- Name: Role; Type: TYPE; Schema: public; Owner: jobfair-skripsi
--

CREATE TYPE public."Role" AS ENUM (
    'Panitia',
    'Pelamar'
);


ALTER TYPE public."Role" OWNER TO "jobfair-skripsi";

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Achievement; Type: TABLE; Schema: public; Owner: jobfair-skripsi
--

CREATE TABLE public."Achievement" (
    id integer NOT NULL,
    cv_id integer NOT NULL,
    name text NOT NULL,
    provider text NOT NULL,
    year text NOT NULL
);


ALTER TABLE public."Achievement" OWNER TO "jobfair-skripsi";

--
-- Name: Achievement_id_seq; Type: SEQUENCE; Schema: public; Owner: jobfair-skripsi
--

CREATE SEQUENCE public."Achievement_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Achievement_id_seq" OWNER TO "jobfair-skripsi";

--
-- Name: Achievement_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jobfair-skripsi
--

ALTER SEQUENCE public."Achievement_id_seq" OWNED BY public."Achievement".id;


--
-- Name: CV; Type: TABLE; Schema: public; Owner: jobfair-skripsi
--

CREATE TABLE public."CV" (
    id integer NOT NULL,
    user_id integer NOT NULL,
    name text NOT NULL,
    address text NOT NULL,
    email text NOT NULL,
    gender public."Gender" NOT NULL,
    phone text NOT NULL,
    birth_date timestamp(3) without time zone NOT NULL,
    social_media text[],
    "desc" text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."CV" OWNER TO "jobfair-skripsi";

--
-- Name: CVRequirement; Type: TABLE; Schema: public; Owner: jobfair-skripsi
--

CREATE TABLE public."CVRequirement" (
    id integer NOT NULL,
    cv_id integer NOT NULL,
    requirement_id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."CVRequirement" OWNER TO "jobfair-skripsi";

--
-- Name: CVRequirement_id_seq; Type: SEQUENCE; Schema: public; Owner: jobfair-skripsi
--

CREATE SEQUENCE public."CVRequirement_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."CVRequirement_id_seq" OWNER TO "jobfair-skripsi";

--
-- Name: CVRequirement_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jobfair-skripsi
--

ALTER SEQUENCE public."CVRequirement_id_seq" OWNED BY public."CVRequirement".id;


--
-- Name: CV_id_seq; Type: SEQUENCE; Schema: public; Owner: jobfair-skripsi
--

CREATE SEQUENCE public."CV_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."CV_id_seq" OWNER TO "jobfair-skripsi";

--
-- Name: CV_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jobfair-skripsi
--

ALTER SEQUENCE public."CV_id_seq" OWNED BY public."CV".id;


--
-- Name: Certificate; Type: TABLE; Schema: public; Owner: jobfair-skripsi
--

CREATE TABLE public."Certificate" (
    id integer NOT NULL,
    cv_id integer NOT NULL,
    name text NOT NULL,
    image text NOT NULL,
    "desc" text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Certificate" OWNER TO "jobfair-skripsi";

--
-- Name: Certificate_id_seq; Type: SEQUENCE; Schema: public; Owner: jobfair-skripsi
--

CREATE SEQUENCE public."Certificate_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Certificate_id_seq" OWNER TO "jobfair-skripsi";

--
-- Name: Certificate_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jobfair-skripsi
--

ALTER SEQUENCE public."Certificate_id_seq" OWNED BY public."Certificate".id;


--
-- Name: Company; Type: TABLE; Schema: public; Owner: jobfair-skripsi
--

CREATE TABLE public."Company" (
    id integer NOT NULL,
    user_id integer NOT NULL,
    name text NOT NULL,
    address text NOT NULL,
    "desc" text NOT NULL,
    social_media text NOT NULL,
    email text NOT NULL,
    phone text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "locationStand" text
);


ALTER TABLE public."Company" OWNER TO "jobfair-skripsi";

--
-- Name: Company_id_seq; Type: SEQUENCE; Schema: public; Owner: jobfair-skripsi
--

CREATE SEQUENCE public."Company_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Company_id_seq" OWNER TO "jobfair-skripsi";

--
-- Name: Company_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jobfair-skripsi
--

ALTER SEQUENCE public."Company_id_seq" OWNED BY public."Company".id;


--
-- Name: Education; Type: TABLE; Schema: public; Owner: jobfair-skripsi
--

CREATE TABLE public."Education" (
    id integer NOT NULL,
    cv_id integer NOT NULL,
    name text NOT NULL,
    degree text NOT NULL,
    major text NOT NULL,
    address text NOT NULL,
    start_at timestamp(3) without time zone NOT NULL,
    end_at timestamp(3) without time zone NOT NULL,
    grade double precision NOT NULL,
    "desc" text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Education" OWNER TO "jobfair-skripsi";

--
-- Name: Education_id_seq; Type: SEQUENCE; Schema: public; Owner: jobfair-skripsi
--

CREATE SEQUENCE public."Education_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Education_id_seq" OWNER TO "jobfair-skripsi";

--
-- Name: Education_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jobfair-skripsi
--

ALTER SEQUENCE public."Education_id_seq" OWNED BY public."Education".id;


--
-- Name: Experience; Type: TABLE; Schema: public; Owner: jobfair-skripsi
--

CREATE TABLE public."Experience" (
    id integer NOT NULL,
    cv_id integer NOT NULL,
    name text NOT NULL,
    description text NOT NULL
);


ALTER TABLE public."Experience" OWNER TO "jobfair-skripsi";

--
-- Name: Experience_id_seq; Type: SEQUENCE; Schema: public; Owner: jobfair-skripsi
--

CREATE SEQUENCE public."Experience_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Experience_id_seq" OWNER TO "jobfair-skripsi";

--
-- Name: Experience_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jobfair-skripsi
--

ALTER SEQUENCE public."Experience_id_seq" OWNED BY public."Experience".id;


--
-- Name: JobFair; Type: TABLE; Schema: public; Owner: jobfair-skripsi
--

CREATE TABLE public."JobFair" (
    id integer NOT NULL,
    name text NOT NULL,
    start timestamp(3) without time zone NOT NULL,
    "end" timestamp(3) without time zone NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."JobFair" OWNER TO "jobfair-skripsi";

--
-- Name: JobFair_id_seq; Type: SEQUENCE; Schema: public; Owner: jobfair-skripsi
--

CREATE SEQUENCE public."JobFair_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."JobFair_id_seq" OWNER TO "jobfair-skripsi";

--
-- Name: JobFair_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jobfair-skripsi
--

ALTER SEQUENCE public."JobFair_id_seq" OWNED BY public."JobFair".id;


--
-- Name: Rent; Type: TABLE; Schema: public; Owner: jobfair-skripsi
--

CREATE TABLE public."Rent" (
    id integer NOT NULL,
    stand_id integer NOT NULL,
    company_id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Rent" OWNER TO "jobfair-skripsi";

--
-- Name: Rent_id_seq; Type: SEQUENCE; Schema: public; Owner: jobfair-skripsi
--

CREATE SEQUENCE public."Rent_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Rent_id_seq" OWNER TO "jobfair-skripsi";

--
-- Name: Rent_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jobfair-skripsi
--

ALTER SEQUENCE public."Rent_id_seq" OWNED BY public."Rent".id;


--
-- Name: Requirement; Type: TABLE; Schema: public; Owner: jobfair-skripsi
--

CREATE TABLE public."Requirement" (
    id integer NOT NULL,
    company_id integer NOT NULL,
    min_age integer NOT NULL,
    max_age integer NOT NULL,
    gender text[],
    "position" text NOT NULL,
    desc_job text[],
    skill text[],
    keyword text[],
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Requirement" OWNER TO "jobfair-skripsi";

--
-- Name: RequirementEducation; Type: TABLE; Schema: public; Owner: jobfair-skripsi
--

CREATE TABLE public."RequirementEducation" (
    id integer NOT NULL,
    requirement_id integer NOT NULL,
    degree text NOT NULL,
    grade double precision NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updateAt" timestamp(3) without time zone NOT NULL,
    major text[]
);


ALTER TABLE public."RequirementEducation" OWNER TO "jobfair-skripsi";

--
-- Name: RequirementEducation_id_seq; Type: SEQUENCE; Schema: public; Owner: jobfair-skripsi
--

CREATE SEQUENCE public."RequirementEducation_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."RequirementEducation_id_seq" OWNER TO "jobfair-skripsi";

--
-- Name: RequirementEducation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jobfair-skripsi
--

ALTER SEQUENCE public."RequirementEducation_id_seq" OWNED BY public."RequirementEducation".id;


--
-- Name: Requirement_id_seq; Type: SEQUENCE; Schema: public; Owner: jobfair-skripsi
--

CREATE SEQUENCE public."Requirement_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Requirement_id_seq" OWNER TO "jobfair-skripsi";

--
-- Name: Requirement_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jobfair-skripsi
--

ALTER SEQUENCE public."Requirement_id_seq" OWNED BY public."Requirement".id;


--
-- Name: Skills; Type: TABLE; Schema: public; Owner: jobfair-skripsi
--

CREATE TABLE public."Skills" (
    id integer NOT NULL,
    cv_id integer NOT NULL,
    name text NOT NULL,
    skill text[]
);


ALTER TABLE public."Skills" OWNER TO "jobfair-skripsi";

--
-- Name: Skills_id_seq; Type: SEQUENCE; Schema: public; Owner: jobfair-skripsi
--

CREATE SEQUENCE public."Skills_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Skills_id_seq" OWNER TO "jobfair-skripsi";

--
-- Name: Skills_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jobfair-skripsi
--

ALTER SEQUENCE public."Skills_id_seq" OWNED BY public."Skills".id;


--
-- Name: Stand; Type: TABLE; Schema: public; Owner: jobfair-skripsi
--

CREATE TABLE public."Stand" (
    id integer NOT NULL,
    job_fair_id integer NOT NULL,
    number integer NOT NULL,
    location text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Stand" OWNER TO "jobfair-skripsi";

--
-- Name: Stand_id_seq; Type: SEQUENCE; Schema: public; Owner: jobfair-skripsi
--

CREATE SEQUENCE public."Stand_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Stand_id_seq" OWNER TO "jobfair-skripsi";

--
-- Name: Stand_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jobfair-skripsi
--

ALTER SEQUENCE public."Stand_id_seq" OWNED BY public."Stand".id;


--
-- Name: User; Type: TABLE; Schema: public; Owner: jobfair-skripsi
--

CREATE TABLE public."User" (
    id integer NOT NULL,
    username text NOT NULL,
    password text NOT NULL,
    role public."Role" NOT NULL,
    name text NOT NULL,
    phone text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."User" OWNER TO "jobfair-skripsi";

--
-- Name: User_id_seq; Type: SEQUENCE; Schema: public; Owner: jobfair-skripsi
--

CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."User_id_seq" OWNER TO "jobfair-skripsi";

--
-- Name: User_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jobfair-skripsi
--

ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;


--
-- Name: WorkExperience; Type: TABLE; Schema: public; Owner: jobfair-skripsi
--

CREATE TABLE public."WorkExperience" (
    id integer NOT NULL,
    cv_id integer NOT NULL,
    name text NOT NULL,
    "position" text NOT NULL,
    start_at timestamp(3) without time zone NOT NULL,
    end_at timestamp(3) without time zone NOT NULL,
    address text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "desc" text[]
);


ALTER TABLE public."WorkExperience" OWNER TO "jobfair-skripsi";

--
-- Name: WorkExperience_id_seq; Type: SEQUENCE; Schema: public; Owner: jobfair-skripsi
--

CREATE SEQUENCE public."WorkExperience_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."WorkExperience_id_seq" OWNER TO "jobfair-skripsi";

--
-- Name: WorkExperience_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jobfair-skripsi
--

ALTER SEQUENCE public."WorkExperience_id_seq" OWNED BY public."WorkExperience".id;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: jobfair-skripsi
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO "jobfair-skripsi";

--
-- Name: Achievement id; Type: DEFAULT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."Achievement" ALTER COLUMN id SET DEFAULT nextval('public."Achievement_id_seq"'::regclass);


--
-- Name: CV id; Type: DEFAULT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."CV" ALTER COLUMN id SET DEFAULT nextval('public."CV_id_seq"'::regclass);


--
-- Name: CVRequirement id; Type: DEFAULT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."CVRequirement" ALTER COLUMN id SET DEFAULT nextval('public."CVRequirement_id_seq"'::regclass);


--
-- Name: Certificate id; Type: DEFAULT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."Certificate" ALTER COLUMN id SET DEFAULT nextval('public."Certificate_id_seq"'::regclass);


--
-- Name: Company id; Type: DEFAULT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."Company" ALTER COLUMN id SET DEFAULT nextval('public."Company_id_seq"'::regclass);


--
-- Name: Education id; Type: DEFAULT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."Education" ALTER COLUMN id SET DEFAULT nextval('public."Education_id_seq"'::regclass);


--
-- Name: Experience id; Type: DEFAULT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."Experience" ALTER COLUMN id SET DEFAULT nextval('public."Experience_id_seq"'::regclass);


--
-- Name: JobFair id; Type: DEFAULT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."JobFair" ALTER COLUMN id SET DEFAULT nextval('public."JobFair_id_seq"'::regclass);


--
-- Name: Rent id; Type: DEFAULT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."Rent" ALTER COLUMN id SET DEFAULT nextval('public."Rent_id_seq"'::regclass);


--
-- Name: Requirement id; Type: DEFAULT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."Requirement" ALTER COLUMN id SET DEFAULT nextval('public."Requirement_id_seq"'::regclass);


--
-- Name: RequirementEducation id; Type: DEFAULT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."RequirementEducation" ALTER COLUMN id SET DEFAULT nextval('public."RequirementEducation_id_seq"'::regclass);


--
-- Name: Skills id; Type: DEFAULT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."Skills" ALTER COLUMN id SET DEFAULT nextval('public."Skills_id_seq"'::regclass);


--
-- Name: Stand id; Type: DEFAULT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."Stand" ALTER COLUMN id SET DEFAULT nextval('public."Stand_id_seq"'::regclass);


--
-- Name: User id; Type: DEFAULT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);


--
-- Name: WorkExperience id; Type: DEFAULT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."WorkExperience" ALTER COLUMN id SET DEFAULT nextval('public."WorkExperience_id_seq"'::regclass);


--
-- Data for Name: Achievement; Type: TABLE DATA; Schema: public; Owner: jobfair-skripsi
--

COPY public."Achievement" (id, cv_id, name, provider, year) FROM stdin;
11	11	Outstanding Social Media Specialist Award	PT Kreatif Maju Bersama	2020
12	12	achievment	Sertifikasi Profesional Akuntan (CPA)	2021
13	13	best paper award	Konferensi Nasional Sistem Informasi	2021
14	15	Best Software Architect Award	PT Inovasi Teknologi	2019
15	14	Anggota aktif Klub Mahasiswa Pengembang	memperoleh pengalaman praktis dan keterampilan berkolaborasi dalam proyek dunia nyata	
16	16	Outstanding Accountant Award	PT Keuangan Maju	2018
17	17	best IT project award	Universitas teknologi	2020
18	18	Sertifikasi Manajemen Proyek (PMP)	Project Management Institute	2019
19	19	Manager of the Year Award	PT Sukses Bersama Jaya	2019
20	20	Sertifikasi Professional Engineer (PE)	Sertifikasi Professional Engineer (PE)	2018
21	21	test122	test	2019
22	21	softskill	test12	2020
\.


--
-- Data for Name: CV; Type: TABLE DATA; Schema: public; Owner: jobfair-skripsi
--

COPY public."CV" (id, user_id, name, address, email, gender, phone, birth_date, social_media, "desc", "createdAt", "updatedAt") FROM stdin;
11	19	siti rahayu	Jl. Indah No. 456	siti.rahayu@email.com	female	081234567892	1995-08-10 05:31:31	{@siti.rahayu}	Siti Rahayu adalah seorang profesional muda yang memiliki latar belakang dalam Ilmu Komunikasi. memiliki keahlian khusus dalam strategi media sosial, pengelolaan konten, dan analisis kinerja, yang telah membuatnya sukses dalam membangun kehadiran merek di berbagai platform.	2024-07-27 16:32:16.803	2024-07-27 16:32:16.803
12	20	anisa cahaya putri	Jl. Buku Besar No. 123	anisa.putri@email.com	female	081234567895	1999-06-15 13:29:32	{@anisa.putri}	Anisa Cahaya Putri adalah seorang profesional perempuan yang memiliki latar belakang pendidikan dalam bidang akuntansi. Berusia 25 tahun, Anisa telah menyelesaikan pendidikan sarjana akuntansi dari Universitas Keuangan Terkini pada tahun 2020.	2024-07-27 16:32:16.955	2024-07-27 16:32:16.955
13	21	rini indrawati	Jl. Pintu Air No. 567	rini.indrawati@email.com	female	081234567892	2000-04-13 13:14:37	{@riniindrawati}	Rini Indrawati adalah seorang profesional muda berusia 24 tahun yang beralamat di Jl. Pintu Air No. 567, Kota Informatika. Ia memiliki gelar sarjana dalam bidang Sistem Informasi dari Universitas Teknologi Informatika, Kota Informatika, Indonesia, dan lulus pada tahun 2021.	2024-07-27 16:32:16.956	2024-07-27 16:32:16.956
14	22	ivan faathirza	jl. tubagus ismail	ivanfaathirza@gmail.com	male	0892367675673	2001-01-01 12:21:38	{@ivan123}	Lulusan Teknik Komputer yang berorientasi pada hasil yang berspesialisasi dalam Pengembangan Full-Stack, Desain Situs Web, dan Internet of Things. Menunjukkan keahlian dalam mengoptimalkan efisiensi melalui Cloud Computing. Faathirza memberikan solusi inovatif untuk mengatasinya tantangan organisasi dan mendorong keunggulan teknologi.	2024-07-27 16:32:16.959	2024-07-27 16:32:16.959
15	23	faisal ahmad	Jl. Jaya Baru No. 567	faisal.ahmad@email.com	male	081234567896	1998-05-21 05:53:07	{@faisal.ahmad}	Faisal memiliki keterampilan yang luas, termasuk dalam arsitektur perangkat lunak, pemrograman (Java, C++, Python), pengembangan web, sistem terbenam, pengelolaan database, serta penggunaan Git Version Control dan layanan cloud seperti AWS dan Azure.	2024-07-27 16:32:16.959	2024-07-27 16:32:16.959
16	24	nisa putri	Jl. Sejahtera No. 456	nisa.putri@email.com	female	081234567898	1998-03-12 05:53:07	{@nisap}	Nisa Putri adalah seorang profesional akuntansi. Nisa memiliki tanggung jawab utama dalam pengelolaan dan pelaporan keuangan perusahaan. Keahliannya mencakup analisis biaya dan profitabilitas, yang menjadi kontribusi berharga untuk pengambilan keputusan perusahaan.	2024-07-27 16:32:16.96	2024-07-27 16:32:16.96
17	25	muhammad khatami	jl. maleber utara	mkhatami@gmail.com	male	087673277652	2000-09-07 12:18:03	{@mkhatami}	saya seorang lulusan universitas komputer indonesia yang memiliki kemampuan design, ui/ux	2024-07-27 16:32:16.96	2024-07-27 16:32:16.96
18	26	sarah anindita	Jl. Indah No. 123	sarah.anindita@email.com	female	081234567890	1996-06-14 06:12:06	{@sarah.anin}	Sebagai individu yang berkomitmen terhadap pengembangan diri dan karier, Sarah memiliki sejumlah pengalaman kerja yang beragam di bidang TI dan manajemen proyek.	2024-07-27 16:32:16.961	2024-07-27 16:32:16.961
19	27	rizki pratama	Jl. Sukses No. 789	rizki.pratama@email.com	male	081234567890	1996-01-18 05:31:31	{@rizki.pratama}	Rizki Pratama adalah seorang profesional muda dengan usia 31 tahun yang memiliki keahlian di bidang manajemen bisnis. Sebagai Manajer Operasional di PT Sukses Bersama Jaya, Rizki telah menunjukkan kepemimpinan yang kuat dalam mengelola operasional sehari-hari perusahaan.	2024-07-27 16:32:16.962	2024-07-27 16:32:16.962
20	28	daniel wijaya	Jl. menteng No. 123	daniel.wijaya@email.com	male	081234567892	1999-07-23 06:12:06	{@dani.wijaya}	pernah terlibat dalam merancang dan mengembangkan sistem terbenam untuk berbagai produk elektronik. Perannya juga melibatkan kepemimpinan dalam tim pengembangan, khususnya dalam proyek-proyek yang menuntut inovasi dan keahlian teknis tinggi.	2024-07-27 16:32:16.962	2024-07-27 16:32:16.962
21	29	Test 12	Test Address	test123@gmail.com	male	081345345343	2001-08-02 00:00:00	{@test1}	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s	2024-07-30 00:33:42.305	2024-07-30 12:59:10.927
22	30	Test 123	Test Address	test123@gmail.com	male	081345345343	2001-08-02 00:00:00	{@test1}	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s	2024-07-30 13:13:52.902	2024-07-30 13:14:06.706
\.


--
-- Data for Name: CVRequirement; Type: TABLE DATA; Schema: public; Owner: jobfair-skripsi
--

COPY public."CVRequirement" (id, cv_id, requirement_id, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Certificate; Type: TABLE DATA; Schema: public; Owner: jobfair-skripsi
--

COPY public."Certificate" (id, cv_id, name, image, "desc", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Company; Type: TABLE DATA; Schema: public; Owner: jobfair-skripsi
--

COPY public."Company" (id, user_id, name, address, "desc", social_media, email, phone, "createdAt", "updatedAt", "locationStand") FROM stdin;
9	18	Dickens and Sons	44910 Krajcik Point	Averto temperantia tollo temeritas pecco vestrum maiores admiratio curia adulescens.	https://enormous-signify.info	Doris66@hotmail.com	635-944-7655 x6939	2024-07-27 16:32:16.633	2024-07-27 16:32:16.633	\N
10	18	Koss - Ward	15622 Cross Lane	Laboriosam cohors viscus abscido pel adulescens demoror communis.	https://flimsy-roundabout.com	Lonie_Crist41@yahoo.com	1-527-672-2325 x5958	2024-07-27 16:32:16.633	2024-07-27 16:32:16.633	\N
11	18	Dicki, Yundt and Deckow	8968 Liza Causeway	Nulla amo addo.	https://noteworthy-typhoon.name	Trace.Kuphal@hotmail.com	(961) 210-2760 x5701	2024-07-27 16:32:16.633	2024-07-27 16:32:16.633	\N
12	18	Hermiston Group	928 Howe Ridges	Acervus summa dignissimos vomito optio corona careo tabesco patruus repellat.	https://voluminous-downfall.name	Lacey_Emard80@yahoo.com	789.511.7877 x9729	2024-07-27 16:32:16.633	2024-07-27 16:32:16.633	\N
13	18	Tillman - Barton	7889 2nd Avenue	Theca urbs truculenter conforto.	https://organic-buckwheat.name	Isaias61@gmail.com	391-226-6814	2024-07-27 16:32:16.633	2024-07-27 16:32:16.633	\N
14	18	Wilderman, Ledner and White	91597 Spencer Drives	Absens ab ambitus cursus nulla ipsam.	https://webbed-pickup.name/	Maximo.Beahan60@gmail.com	1-540-730-1306 x8103	2024-07-27 16:32:16.633	2024-07-27 16:32:16.633	\N
15	18	Kiehn - Ruecker	89150 Ebba Fork	Aptus terror fuga patrocinor acceptus tamisium abscido facilis.	https://suspicious-precision.name	Burdette_Wilderman91@gmail.com	1-650-914-0086 x78777	2024-07-27 16:32:16.633	2024-07-27 16:32:16.633	\N
16	18	Kiehn - Bayer	590 Milton Road	Ab una constans suus.	https://modest-triumph.name	Samir_Reynolds2@gmail.com	1-421-362-4097 x14268	2024-07-27 16:32:16.633	2024-07-27 16:32:16.633	\N
\.


--
-- Data for Name: Education; Type: TABLE DATA; Schema: public; Owner: jobfair-skripsi
--

COPY public."Education" (id, cv_id, name, degree, major, address, start_at, end_at, grade, "desc", "createdAt", "updatedAt") FROM stdin;
11	11	Universitas Negri Jakarta	S1	Ilmu Komunikasi	Jakarta	2016-04-11 07:33:53	2019-06-11 07:33:53	4	\N	2024-07-27 16:32:16.803	2024-07-27 16:32:16.803
12	12	Universitas Keungan Terknini	S1	Akuntansi	Surabaya	2015-10-05 07:28:01	2020-04-07 07:28:01	3	\N	2024-07-27 16:32:16.955	2024-07-27 16:32:16.955
13	13	Universitas Teknologi Informatika	S1	Teknik Informatika	Jakarta	2017-09-04 07:28:01	2021-07-12 07:28:01	3	\N	2024-07-27 16:32:16.956	2024-07-27 16:32:16.956
14	15	Universitas Pelita Harapan	S1	Sistem Informasi	Tangerang	2015-04-13 07:40:20	2018-05-15 07:40:20	3	\N	2024-07-27 16:32:16.959	2024-07-27 16:32:16.959
15	14	Universitas Komputer Indonesia	S1	Teknik Informatika	Bandung	2019-09-09 07:18:51	2024-01-07 07:18:51	3	\N	2024-07-27 16:32:16.959	2024-07-27 16:32:16.959
16	17	Universitas Komputer Indonesia	S1	Teknik Informatika	Bandung	2019-09-09 07:18:51	2024-06-09 07:18:51	3	\N	2024-07-27 16:32:16.96	2024-07-27 16:32:16.96
17	16	Universitas Gunadarma	S1	Akuntansi	Bekasi	2014-02-03 07:40:20	2018-05-09 07:40:20	3	\N	2024-07-27 16:32:16.96	2024-07-27 16:32:16.96
18	19	Universitas Widyatama	S1	Manajemen	Bandung	2015-06-08 07:33:53	2018-02-12 07:33:53	3	\N	2024-07-27 16:32:16.962	2024-07-27 16:32:16.962
19	18	Universitas Negri Bandung	S1	Manejemen	Bandung	2015-05-04 07:48:04	2019-07-17 07:48:04	3	\N	2024-07-27 16:32:16.961	2024-07-27 16:32:16.961
20	20	Universitas Negri Malang	S1	Teknik Elektro	Malang	2014-08-18 07:48:04	2017-04-19 07:48:04	3	\N	2024-07-27 16:32:16.962	2024-07-27 16:32:16.962
22	21	test12	S1	Teknik Informatika	testafsa	2019-03-02 00:00:00	2023-03-02 00:00:00	3.2	gasfasfaesoewjwjpofjw	2024-07-30 13:41:37.283	2024-07-30 13:41:37.283
\.


--
-- Data for Name: Experience; Type: TABLE DATA; Schema: public; Owner: jobfair-skripsi
--

COPY public."Experience" (id, cv_id, name, description) FROM stdin;
11	11	asisten produksi acara	Mendukung produksi acara mulai dari perencanaan hingga pelaksanaan
12	12	experience	Mengelola proyek implementasi sistem akuntansi terintegrasi untuk meningkatkan efisiensi dan akurasi.
13	13	Implementasi Sistem Manajemen Database Terdistribusi	Menangani skema basis data terdistribusi untuk meningkatkan kinerja dan ketersediaan data, Memastikan kepatuhan terhadap regulasi keamanan data.
14	15	Lead Software Architect	Menangani arsitektur perangkat lunak untuk aplikasi bisnis kompleks.
15	14	Memelopori pengembangan dan peningkatan infrastruktur back-end produk digital di Mindo Education	berkontribusi pada peningkatan efisiensi sistem secara keseluruhan sebesar 20%.
16	16	akuntan senior	Bertanggung jawab atas pengelolaan dan pelaporan keuangan perusahaan.
17	17	IT support intern	Memberikan dukungan teknis untuk pengguna dalam menangani masalah perangkat keras dan perangkat lunak
19	19	Manajer Operasional	Mengelola operasional sehari-hari perusahaan
18	18	Manajer Proyek TI	Bertanggung jawab atas manajemen risiko dan jadwal proyek
20	20	Senior Embedded Systems Engineer	Merancang dan mengembangkan sistem terbenam untuk produk-produk elektronik
\.


--
-- Data for Name: JobFair; Type: TABLE DATA; Schema: public; Owner: jobfair-skripsi
--

COPY public."JobFair" (id, name, start, "end", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Rent; Type: TABLE DATA; Schema: public; Owner: jobfair-skripsi
--

COPY public."Rent" (id, stand_id, company_id, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Requirement; Type: TABLE DATA; Schema: public; Owner: jobfair-skripsi
--

COPY public."Requirement" (id, company_id, min_age, max_age, gender, "position", desc_job, skill, keyword, "createdAt", "updatedAt") FROM stdin;
9	9	21	30	{male,female}	staff akuntansi	{"bertanggung jawab memeriksa dan melakukan verifikasi transaksi keuangan perusahaan, melakukan pencatatan dan dokumentasi, serta bertugas menyusun laporan keuangan secara akurat."}	{"menguasai pembukaan laporan keuangan","mengoperasikan Ms. office"}	{Akuntansi,male,female,"Ms. Office"}	2024-07-27 16:32:16.633	2024-07-27 16:32:16.633
10	10	20	24	{male,female}	Mayora management trainee	{"program Factory Accounting kamu akan mempelajari mengenai akuntansi biaya terkhususnya perhitungan COGM & COGS untuk mengetahui biaya produksi suatu barang."}	{"Memiliki pengalaman organisasi dan pernah menjadi ketua/pemimpin","Memahami akuntansi biaya","Memiliki kemampuan komunikasi yang baik"}	{Akuntansi,"Komunikasi yang baik"}	2024-07-27 16:32:16.633	2024-07-27 16:32:16.633
11	11	20	30	{male,female}	graphic designer	{"menciptakan ilustrasi, tipografi, fotografi, atau grafis motion baik untuk penerbit maupun media cetak dan elektronik. Seorang graphic designer bertanggung jawab atas tampilan pada media promosi suatu produk."}	{"Menguasai Adobe Illustrator",Photoshop,Premiere}	{design,male,female,"Adobe Illustrator",Photoshop,Premiere}	2024-07-27 16:32:16.633	2024-07-27 16:32:16.633
12	12	21	30	{female}	staff akuntansi	{"Melakukan koordinasi dan bekerja sama dengan berbagai pihak untuk terpenuhinya kebutuhan Kas Kecil, yang didalamnya mencakup aktifitas pembentukan, pengelolaan, pelaporan, dan penutupan kas kecil. Memastikan setiap pengeluaran Kas Kecil dapat dipertanggung jawabkan baik secara administrasi maupun dokumentasi, sesuai prinsip-prinsip akuntansi yang berlaku dan matrix approval yang ditetapkan dalam Prosedur Kas Kecil"}	{"Memiliki pengetahuan dasar-dasar Akuntansi dan Perpajakan","Memahami proses pencatatan transaksi keuangan"}	{female,akuntansi,"pencacatan keuangan"}	2024-07-27 16:32:16.633	2024-07-27 16:32:16.633
13	13	28	40	{male,female}	HR/HC recruitment & selection	{"Pengembangan Rencana Rekrutmen","Seleksi dan Penilaian Kandidat","Pemasaran Posisi"}	{"Memiliki jiwa Leadership",Aktif,Multitasking,"Work culture builder","Tegas & Berintegrasi","Terbiasa dalam dinamika organisasi","Create Struktur Organisasi"}	{male,female,leadership,multitasking,HR,HC}	2024-07-27 16:32:16.633	2024-07-27 16:32:16.633
14	14	20	35	{male,female}	teknisi elektro	{"Menjalankan aktivitas pemeliharaan/perbaikan mesin","Standby dan bersedia menjalankan tugas setiap saat dibutuhkan"}	{"memiliki pengetahuan dalam sistem kelistrikan (PLC)","teknikal support",mekatronika,"bekerja sama dalam tim"}	{elektro,"kerja sama tim"}	2024-07-27 16:32:16.633	2024-07-27 16:32:16.633
15	15	21	35	{male,female}	staff perpajakan / akuntansi	{"Memahami proses dan prosedur Pelaporan Pajak Tahunan dan Bulanan","Menyusun SPT Tahunan Pribadi dan/ atau Badan","Mampu menyusun Laporan Keuangan dan Laporan Pajak dengan baik"}	{"Memiliki keahlian (expert) dalam menggunakan Excel","software pajak","software akuntansi lebih diminati"}	{akuntansi,male,female,"Ms. excel",pajak}	2024-07-27 16:32:16.633	2024-07-27 16:32:16.633
16	16	21	30	{male,female}	backend developer	{"bertanggung jawab untuk merancang, mengelola, dan memelihara database yang digunakan oleh aplikasi."}	{"menguasai algoritma","SQL Statement",NodeJs}	{"backend developer",NodeJs,"Teknik Informatika","Sistem Informasi","Ilmu Komputer"}	2024-07-27 16:32:16.633	2024-07-27 16:32:16.633
\.


--
-- Data for Name: RequirementEducation; Type: TABLE DATA; Schema: public; Owner: jobfair-skripsi
--

COPY public."RequirementEducation" (id, requirement_id, degree, grade, "createdAt", "updateAt", major) FROM stdin;
13	9	S1	0	2024-07-27 16:32:16.633	2024-07-27 16:32:16.633	{Akutansi}
14	10	S1	3	2024-07-27 16:32:16.633	2024-07-27 16:32:16.633	{Akuntansi}
15	12	D3	2	2024-07-27 16:32:16.633	2024-07-27 16:32:16.633	{Akuntansi/keuangan}
16	12	S1	2	2024-07-27 16:32:16.633	2024-07-27 16:32:16.633	{Akuntansi/keuangan}
17	11	SMK	0	2024-07-27 16:32:16.633	2024-07-27 16:32:16.633	{Desain}
18	11	S1	0	2024-07-27 16:32:16.633	2024-07-27 16:32:16.633	{Desain}
19	13	S1	3	2024-07-27 16:32:16.633	2024-07-27 16:32:16.633	{Psikologi,"Manajemen SDM",Hukum}
20	14	SMK	0	2024-07-27 16:32:16.633	2024-07-27 16:32:16.633	{"Teknik elektro, mesin, mekatronika"}
21	14	D3	0	2024-07-27 16:32:16.633	2024-07-27 16:32:16.633	{"Teknik elektro, mesin, mekatronika"}
22	14	S1	0	2024-07-27 16:32:16.633	2024-07-27 16:32:16.633	{"Teknik elektro, mesin, mekatronika"}
24	15	S1	2	2024-07-27 16:32:16.633	2024-07-27 16:32:16.633	{Akuntansi,pajak,ekonomi}
23	16	S1	0	2024-07-27 16:32:16.633	2024-07-27 16:32:16.633	{"Teknik Informatika","Sistem Informasi","Ilmu Komputer"}
\.


--
-- Data for Name: Skills; Type: TABLE DATA; Schema: public; Owner: jobfair-skripsi
--

COPY public."Skills" (id, cv_id, name, skill) FROM stdin;
38	11	hardskill	{"konten digital","perencanaan produksi acara","adobe suit",canva}
39	11	softskill	{"komunikasi efektif",kreatifitas,"kerja tim"}
40	11	language	{"bahasa indonesia"}
41	11	interest	{"Merancang dan melaksanakan kampanye yang berfokus pada keberlanjutan dan tanggung jawab sosial perusahaan"}
42	12	hardskill	{"penyusunan laporan keuangan","analisis keuangan"}
43	12	softskill	{"bisa menggunakan SAP dan Qickbooks, dan microsoft excel"}
44	12	language	{"bahasa indonesia dan bahasa inggris"}
45	12	interest	{"Anisa memiliki minat dalam terus mengembangkan keahlian auditnya atau mendalami area khusus dalam bidang akuntansi, seperti manajemen risiko, perpajakan, atau konsultasi keuangan."}
46	13	hardskill	{sql,python,mongodb,MySQL}
47	13	softskill	{"kerja sama tim","komunikasi efektif",kepemimpinan}
48	13	language	{"bahasa indonesia","bahasa inggris"}
49	13	interest	{"Implementasi Sistem Manajemen Database Terdistribusi. Hal ini menunjukkan minatnya dalam mengelola dan meningkatkan efisiensi basis data melalui sistem terdistribusi."}
50	15	hardskill	{html,css,javascript,python}
51	15	softskill	{Kepemimpinan,"Kolaborasi Tim","Solusi Kreatif"}
52	15	language	{"bahasa indonesia dan bahasa inggris"}
53	15	interest	{"Merancang dan menerapkan arsitektur mikroservices untuk meningkatkan skalabilitas dan fleksibilitas sistem."}
54	14	hardskill	{"Full-Stack Development",Vuejs,Nodejs,Firebase,Laravel,MySQL,"API Development","Internet of Things","Xendit Integration","Project Management","Emerging Technologies"}
56	17	hardskill	{ui/ux,java,mysql,"jaringan komputer"}
55	16	hardskill	{pembukuan,"laporan keuangan","cost analysis","Profitability Analysis"}
57	17	softskill	{"kerja sama tim",komunikasi}
58	17	language	{"bahasa indonesia","bahasa inggris"}
60	17	interest	{"Pengembangan Sistem Informasi Manajemen Perpustakaan"}
59	16	softskill	{Kepemimpinan,"Keterampilan Komunikasi","Analisis Kritis"}
61	16	language	{"bahasa indonesia dan bahasa inggris"}
62	16	interest	{"Mengimplementasikan sistem akuntansi terintegrasi untuk meningkatkan efisiensi proses keuangan."}
63	19	hardskill	{"analisis SWOT","analisis data","manajemen penjualan"}
64	19	softskill	{Kepemimpinan,"Motivasi Karyawan",Problem-solving}
65	19	language	{"bahasa indonesia"}
66	19	interest	{"Menerapkan strategi untuk meningkatkan efisiensi rantai pasok"}
67	18	hardskill	{HTML,CSS,JavaScript}
68	18	softskill	{Kepemimpinan,"Komunikasi Efektif","Kolaborasi Tim"}
69	18	language	{"bahasa indonesia dan bahasa inggris"}
70	18	interest	{"mengelola proyek-proyek TI yang kompleks, termasuk perencanaan, pelaksanaan, dan penyelesaian proyek dengan efisien."}
71	20	hardskill	{"Mikrokontroler (ARM, AVR)","Raspberry Pi","Altium Designer",Eagle}
72	20	softskill	{Problem-solving,Kreativitas,"Kerja Tim"}
73	20	language	{"bahasa indonesia"}
74	20	interest	{"Mengintegrasikan sensor-sensor pintar dan kontrol otomatis untuk rumah pintar."}
75	21	hardskill	{test,test22,test3}
76	21	softskill	{test22,test}
\.


--
-- Data for Name: Stand; Type: TABLE DATA; Schema: public; Owner: jobfair-skripsi
--

COPY public."Stand" (id, job_fair_id, number, location, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: jobfair-skripsi
--

COPY public."User" (id, username, password, role, name, phone, "createdAt", "updatedAt") FROM stdin;
18	admin	$2b$10$LMAxSuI4rPtmJOPatMAy.uDXSxvwpjqoTxNU55YlSy46zbYqo0tLi	Panitia	Admin	0	2024-07-27 16:32:16.622	2024-07-27 16:32:16.622
19	siti	$2b$10$LyP0MQEblakLvt2XZG580enWHXvHCdU/ETvOj8ioAIdw8vtrNFMCS	Pelamar	siti rahayu	081234567892	2024-07-27 16:32:16.796	2024-07-27 16:32:16.796
20	anisa	$2b$10$7JNr5NCdf5TwzpBjqXYnxe6agUBRPpsexcuelmbtA.aZp4OIuFgcW	Pelamar	anisa cahaya putri	081234567895	2024-07-27 16:32:16.796	2024-07-27 16:32:16.796
21	rini	$2b$10$WXWPS5sOhZnQDPo3TKsiVeCJEfvqUxPn1Ea4P.cug/0Guh74HOwPq	Pelamar	rini indrawati	086776439346	2024-07-27 16:32:16.796	2024-07-27 16:32:16.796
22	ivan	$2b$10$r1zN7sKrLb7bEsKFKXSYQ.0wVo44cAq3AFhbsX38WlJmyVNrR27Pq	Pelamar	ivan faathirza	0892376656223	2024-07-27 16:32:16.796	2024-07-27 16:32:16.796
23	faisal	$2b$10$uKHzYofXiGw/qVGhMtOxN.5yfDVvx73Y66328.TX3qkTUgsPJUzZa	Pelamar	faisal ahmad	081234567896	2024-07-27 16:32:16.796	2024-07-27 16:32:16.796
24	nisa	$2b$10$3HRHyw/V5PXdd4QeIhivd.mRCcLdfe4.rRD99Kp7PWB673wiWepnW	Pelamar	nisa putri	081234567898	2024-07-27 16:32:16.796	2024-07-27 16:32:16.796
25	mkhatami	$2b$10$sDvpJvKoJhb9wf.0eqE9SerIl6y66ltORwX0vTTQgmTqmYyY7l5Qe	Pelamar	muhammad khatami	087783266453	2024-07-27 16:32:16.796	2024-07-27 16:32:16.796
26	sarah	$2b$10$zAnxEvhgn4l/VqLprhylY.pwWL2QXfBwKsAfVmCrVMkv6TTmcmBLu	Pelamar	sarah anindita	081234567890	2024-07-27 16:32:16.796	2024-07-27 16:32:16.796
27	rizki	$2b$10$gNOgwkitnD.Q820.vXbIg.C2wvUmHIL6B3Fm8SUYNUTwbDQjv5EE2	Pelamar	rizki pratama	081234567890	2024-07-27 16:32:16.796	2024-07-27 16:32:16.796
28	daniel	$2b$10$GWcZlS/bS.Nmtl0L4aJ/bejyUlh7zt6.H81.l4jE/qT.5EeVPNIu.	Pelamar	daniel wijaya	081234567892	2024-07-27 16:32:16.796	2024-07-27 16:32:16.796
29	test12	$2b$10$TTLEsJhg75ctT0K2gsdrzOXhe3UsUFx.GFdXoVKa4xhf9Z5.KW13C	Pelamar	test11	089662040250	2024-07-30 00:23:46.728	2024-07-30 00:23:46.728
30	test13	$2b$10$Wq11bf5MnR5IbbmdxzEFPOk3PbgZQxEOU4TNgGjtgS5nT8TsmTnsa	Pelamar	test13	089662040250	2024-07-30 13:10:33.526	2024-07-30 13:10:33.526
\.


--
-- Data for Name: WorkExperience; Type: TABLE DATA; Schema: public; Owner: jobfair-skripsi
--

COPY public."WorkExperience" (id, cv_id, name, "position", start_at, end_at, address, "createdAt", "updatedAt", "desc") FROM stdin;
11	11	PT. Kreatif Maju Bersama	Asisten Produksi Acara	2021-06-11 07:07:19	2023-12-13 07:07:19	Jakarta	2024-07-27 16:32:16.803	2024-07-27 16:32:16.803	{"Mendukung perencanaan acara","Mengatur logistik acara","Berkoordinasi dengan tim produksi"}
12	12	PT. The Peak C	Staff Akuntansi	2021-05-07 07:00:26	2024-01-17 07:00:26	Surabaya	2024-07-27 16:32:16.955	2024-07-27 16:32:16.955	{"Menyusun laporan keuangan","Melakukan audit internal","Mengelola anggaran"}
13	13	PT. Indodax	Manager Operasional	2021-02-11 07:00:26	2024-02-01 07:00:26	Jakarta	2024-07-27 16:32:16.956	2024-07-27 16:32:16.956	{"Mengelola operasional harian","Menangani masalah klien","Mengatur dokumentasi"}
14	15	PT. Inovasi Teknologi	Lead Software Architect	2018-08-10 07:13:55	2023-04-12 07:13:55	Tangerang	2024-07-27 16:32:16.959	2024-07-27 16:32:16.959	{"Merancang arsitektur perangkat lunak","Memimpin tim pengembang","Mengawasi implementasi teknis"}
15	14	Mindo	Back-end developer	2021-05-01 06:54:31	2022-03-01 06:54:31	Kuningan	2024-07-27 16:32:16.959	2024-07-27 16:32:16.959	{"Mengembangkan dan memelihara layanan back-end","Bekerja dengan database","Mengoptimalkan kinerja server"}
16	17	Universitas Teknologi	IT support	2022-02-09 06:54:31	2023-02-09 06:54:31	Bandung	2024-07-27 16:32:16.96	2024-07-27 16:32:16.96	{"Memberikan dukungan teknis untuk perangkat keras dan perangkat lunak","Menangani masalah jaringan","Memelihara sistem IT"}
17	16	PT. Keuangan Maju	Staff Akuntan	2017-05-18 07:13:55	2024-02-01 07:13:55	Bekasi	2024-07-27 16:32:16.96	2024-07-27 16:32:16.96	{"Menyusun laporan keuangan","Melakukan audit internal","Mengelola anggaran"}
18	19	PT. Sukses Bersama Jaya	Manager Operasional	2019-07-04 07:07:19	2022-02-09 07:07:19	Bandung	2024-07-27 16:32:16.962	2024-07-27 16:32:16.962	{"Mengelola operasional sehari-hari","Mengawasi staf","Meningkatkan efisiensi operasional"}
19	18	PT. Indo Maju	Manajer Proyek TI	2018-09-13 07:15:57	2021-05-13 07:15:57	Tasikmalaya	2024-07-27 16:32:16.961	2024-07-27 16:32:16.961	{"Mengelola proyek TI","Mengatur jadwal proyek","Menangani risiko proyek"}
20	20	PT. Reemar Group	Senior Embedded Systems Engineer	2017-02-24 07:15:57	2022-02-17 07:15:57	Malang	2024-07-27 16:32:16.962	2024-07-27 16:32:16.962	{"Merancang dan mengembangkan sistem terbenam","Mengintegrasikan sensor pintar","Melakukan troubleshooting perangkat keras"}
26	21	test124	test123	2020-02-01 00:00:00	2021-03-02 00:00:00	test 12	2024-07-30 13:24:41.547	2024-07-30 13:24:41.547	{gasfasfaesoewjwjpofjw}
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: jobfair-skripsi
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
a8d044cd-4d2d-4446-9ba9-58a2b5955a54	8ec0dde5fc4b47ce90e7eea4e79f8a63e25553d87b798c3b8f8e14df1d304d86	2024-07-20 01:58:31.830701+00	20240521151440_add_users	\N	\N	2024-07-20 01:58:31.821135+00	1
63b39fb6-0281-4f48-a0f2-f3a61d24eb45	4bcb4abc60876b3a8ee4b6429abea1bb6c2e0adca782bb619cea45d5aca94d82	2024-07-20 01:58:31.897439+00	20240717000230_add_jobfair	\N	\N	2024-07-20 01:58:31.832319+00	1
1a02a075-1f97-4830-9b42-77301e8a0539	54d50042448f9db71d4abbac2dd2a45421e5223e19171f46e375f819b965c108	2024-07-20 01:58:31.910315+00	20240717002214_add_requirement_education	\N	\N	2024-07-20 01:58:31.899121+00	1
018795a2-27a2-4727-88b8-9e2cdc0adbd5	fca3c150f384a63121789c232b1d6f53f521173f5df5d722be150b098bb70a67	2024-07-20 01:58:31.916803+00	20240717135049_change_major_arr	\N	\N	2024-07-20 01:58:31.912004+00	1
8df07cf9-d66d-43a0-a11c-17de0519c5b0	f2c77aafc6ad1d96d2eb157ef90c6ea4a20c7a88721de1706ea2de3142516ef8	2024-07-20 01:58:31.938299+00	20240717165851_change_column_cv_to_model	\N	\N	2024-07-20 01:58:31.918357+00	1
26e5511f-636f-40f3-b948-08714c4be3e3	c756a0e6bf6360182cb54c44c0e4fbfccd9074f87ae6adbd5ad17b0c5ffb4171	2024-07-20 01:58:31.953433+00	20240717171420_add_cascade	\N	\N	2024-07-20 01:58:31.940263+00	1
9680f512-1994-4d3d-adbe-a2a84426134b	2de8820f6943b4aa6fced22b88b21a0b29719c6a1a5da15c96692868ba9b3dcb	2024-07-20 01:58:31.961502+00	20240719175444_change_work_experience	\N	\N	2024-07-20 01:58:31.955293+00	1
c6adc1de-4de8-4d66-9444-3fb213e0b336	62f85f25a6b55b6ca6d7ac80c7cc672c6d5fb0f5fda79bfb8c11f7fe802804f4	2024-07-30 13:41:17.045179+00	20240730134117_change_grade_float	\N	\N	2024-07-30 13:41:17.015539+00	1
382e73da-4163-4800-85e9-a8579f1d185d	dc6ba6ce942db0b0c9b036e1a3b7f8321c456d8b68f65c9e0908ff9aaa3d3510	2024-07-30 16:02:26.277578+00	20240730160226_add_location_stand_company	\N	\N	2024-07-30 16:02:26.27208+00	1
\.


--
-- Name: Achievement_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jobfair-skripsi
--

SELECT pg_catalog.setval('public."Achievement_id_seq"', 22, true);


--
-- Name: CVRequirement_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jobfair-skripsi
--

SELECT pg_catalog.setval('public."CVRequirement_id_seq"', 1, false);


--
-- Name: CV_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jobfair-skripsi
--

SELECT pg_catalog.setval('public."CV_id_seq"', 22, true);


--
-- Name: Certificate_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jobfair-skripsi
--

SELECT pg_catalog.setval('public."Certificate_id_seq"', 1, false);


--
-- Name: Company_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jobfair-skripsi
--

SELECT pg_catalog.setval('public."Company_id_seq"', 17, true);


--
-- Name: Education_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jobfair-skripsi
--

SELECT pg_catalog.setval('public."Education_id_seq"', 22, true);


--
-- Name: Experience_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jobfair-skripsi
--

SELECT pg_catalog.setval('public."Experience_id_seq"', 20, true);


--
-- Name: JobFair_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jobfair-skripsi
--

SELECT pg_catalog.setval('public."JobFair_id_seq"', 1, false);


--
-- Name: Rent_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jobfair-skripsi
--

SELECT pg_catalog.setval('public."Rent_id_seq"', 1, false);


--
-- Name: RequirementEducation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jobfair-skripsi
--

SELECT pg_catalog.setval('public."RequirementEducation_id_seq"', 28, true);


--
-- Name: Requirement_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jobfair-skripsi
--

SELECT pg_catalog.setval('public."Requirement_id_seq"', 17, true);


--
-- Name: Skills_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jobfair-skripsi
--

SELECT pg_catalog.setval('public."Skills_id_seq"', 76, true);


--
-- Name: Stand_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jobfair-skripsi
--

SELECT pg_catalog.setval('public."Stand_id_seq"', 1, false);


--
-- Name: User_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jobfair-skripsi
--

SELECT pg_catalog.setval('public."User_id_seq"', 30, true);


--
-- Name: WorkExperience_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jobfair-skripsi
--

SELECT pg_catalog.setval('public."WorkExperience_id_seq"', 26, true);


--
-- Name: Achievement Achievement_pkey; Type: CONSTRAINT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."Achievement"
    ADD CONSTRAINT "Achievement_pkey" PRIMARY KEY (id);


--
-- Name: CVRequirement CVRequirement_pkey; Type: CONSTRAINT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."CVRequirement"
    ADD CONSTRAINT "CVRequirement_pkey" PRIMARY KEY (id);


--
-- Name: CV CV_pkey; Type: CONSTRAINT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."CV"
    ADD CONSTRAINT "CV_pkey" PRIMARY KEY (id);


--
-- Name: Certificate Certificate_pkey; Type: CONSTRAINT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."Certificate"
    ADD CONSTRAINT "Certificate_pkey" PRIMARY KEY (id);


--
-- Name: Company Company_pkey; Type: CONSTRAINT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."Company"
    ADD CONSTRAINT "Company_pkey" PRIMARY KEY (id);


--
-- Name: Education Education_pkey; Type: CONSTRAINT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."Education"
    ADD CONSTRAINT "Education_pkey" PRIMARY KEY (id);


--
-- Name: Experience Experience_pkey; Type: CONSTRAINT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."Experience"
    ADD CONSTRAINT "Experience_pkey" PRIMARY KEY (id);


--
-- Name: JobFair JobFair_pkey; Type: CONSTRAINT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."JobFair"
    ADD CONSTRAINT "JobFair_pkey" PRIMARY KEY (id);


--
-- Name: Rent Rent_pkey; Type: CONSTRAINT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."Rent"
    ADD CONSTRAINT "Rent_pkey" PRIMARY KEY (id);


--
-- Name: RequirementEducation RequirementEducation_pkey; Type: CONSTRAINT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."RequirementEducation"
    ADD CONSTRAINT "RequirementEducation_pkey" PRIMARY KEY (id);


--
-- Name: Requirement Requirement_pkey; Type: CONSTRAINT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."Requirement"
    ADD CONSTRAINT "Requirement_pkey" PRIMARY KEY (id);


--
-- Name: Skills Skills_pkey; Type: CONSTRAINT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."Skills"
    ADD CONSTRAINT "Skills_pkey" PRIMARY KEY (id);


--
-- Name: Stand Stand_pkey; Type: CONSTRAINT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."Stand"
    ADD CONSTRAINT "Stand_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: WorkExperience WorkExperience_pkey; Type: CONSTRAINT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."WorkExperience"
    ADD CONSTRAINT "WorkExperience_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Achievement Achievement_cv_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."Achievement"
    ADD CONSTRAINT "Achievement_cv_id_fkey" FOREIGN KEY (cv_id) REFERENCES public."CV"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: CVRequirement CVRequirement_cv_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."CVRequirement"
    ADD CONSTRAINT "CVRequirement_cv_id_fkey" FOREIGN KEY (cv_id) REFERENCES public."CV"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: CVRequirement CVRequirement_requirement_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."CVRequirement"
    ADD CONSTRAINT "CVRequirement_requirement_id_fkey" FOREIGN KEY (requirement_id) REFERENCES public."Requirement"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: CV CV_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."CV"
    ADD CONSTRAINT "CV_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Certificate Certificate_cv_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."Certificate"
    ADD CONSTRAINT "Certificate_cv_id_fkey" FOREIGN KEY (cv_id) REFERENCES public."CV"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Company Company_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."Company"
    ADD CONSTRAINT "Company_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Education Education_cv_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."Education"
    ADD CONSTRAINT "Education_cv_id_fkey" FOREIGN KEY (cv_id) REFERENCES public."CV"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Experience Experience_cv_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."Experience"
    ADD CONSTRAINT "Experience_cv_id_fkey" FOREIGN KEY (cv_id) REFERENCES public."CV"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Rent Rent_company_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."Rent"
    ADD CONSTRAINT "Rent_company_id_fkey" FOREIGN KEY (company_id) REFERENCES public."Company"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Rent Rent_stand_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."Rent"
    ADD CONSTRAINT "Rent_stand_id_fkey" FOREIGN KEY (stand_id) REFERENCES public."Stand"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: RequirementEducation RequirementEducation_requirement_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."RequirementEducation"
    ADD CONSTRAINT "RequirementEducation_requirement_id_fkey" FOREIGN KEY (requirement_id) REFERENCES public."Requirement"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Requirement Requirement_company_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."Requirement"
    ADD CONSTRAINT "Requirement_company_id_fkey" FOREIGN KEY (company_id) REFERENCES public."Company"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Skills Skills_cv_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."Skills"
    ADD CONSTRAINT "Skills_cv_id_fkey" FOREIGN KEY (cv_id) REFERENCES public."CV"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Stand Stand_job_fair_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."Stand"
    ADD CONSTRAINT "Stand_job_fair_id_fkey" FOREIGN KEY (job_fair_id) REFERENCES public."JobFair"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: WorkExperience WorkExperience_cv_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: jobfair-skripsi
--

ALTER TABLE ONLY public."WorkExperience"
    ADD CONSTRAINT "WorkExperience_cv_id_fkey" FOREIGN KEY (cv_id) REFERENCES public."CV"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: jobfair-skripsi
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


--
-- PostgreSQL database dump complete
--


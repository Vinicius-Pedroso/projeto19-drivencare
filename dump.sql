--
-- PostgreSQL database dump
--

-- Dumped from database version 14.7 (Ubuntu 14.7-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.7 (Ubuntu 14.7-0ubuntu0.22.04.1)

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: public.appointments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."public.appointments" (
    id integer NOT NULL,
    "docto_Id" integer NOT NULL,
    "user_Id" integer NOT NULL,
    day_of_oppointment date NOT NULL,
    appointment_start timestamp without time zone NOT NULL,
    appointment_end timestamp without time zone NOT NULL,
    appointment_accepted boolean DEFAULT false NOT NULL
);


--
-- Name: public.appointments_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."public.appointments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: public.appointments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."public.appointments_id_seq" OWNED BY public."public.appointments".id;


--
-- Name: public.doctors; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."public.doctors" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    cmr character varying(10) NOT NULL,
    city character varying(255) NOT NULL,
    field character varying(255) NOT NULL
);


--
-- Name: public.doctors_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."public.doctors_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: public.doctors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."public.doctors_id_seq" OWNED BY public."public.doctors".id;


--
-- Name: public.sessions_doctor; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."public.sessions_doctor" (
    id integer NOT NULL,
    token character varying NOT NULL,
    doctor_id integer NOT NULL
);


--
-- Name: public.sessions_doctor_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."public.sessions_doctor_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: public.sessions_doctor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."public.sessions_doctor_id_seq" OWNED BY public."public.sessions_doctor".id;


--
-- Name: public.sessions_users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."public.sessions_users" (
    id integer NOT NULL,
    token character varying NOT NULL,
    "user_Id" integer NOT NULL
);


--
-- Name: public.sessions_users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."public.sessions_users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: public.sessions_users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."public.sessions_users_id_seq" OWNED BY public."public.sessions_users".id;


--
-- Name: public.users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."public.users" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL
);


--
-- Name: public.users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."public.users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: public.users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."public.users_id_seq" OWNED BY public."public.users".id;


--
-- Name: public.appointments id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."public.appointments" ALTER COLUMN id SET DEFAULT nextval('public."public.appointments_id_seq"'::regclass);


--
-- Name: public.doctors id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."public.doctors" ALTER COLUMN id SET DEFAULT nextval('public."public.doctors_id_seq"'::regclass);


--
-- Name: public.sessions_doctor id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."public.sessions_doctor" ALTER COLUMN id SET DEFAULT nextval('public."public.sessions_doctor_id_seq"'::regclass);


--
-- Name: public.sessions_users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."public.sessions_users" ALTER COLUMN id SET DEFAULT nextval('public."public.sessions_users_id_seq"'::regclass);


--
-- Name: public.users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."public.users" ALTER COLUMN id SET DEFAULT nextval('public."public.users_id_seq"'::regclass);


--
-- Data for Name: public.appointments; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: public.doctors; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: public.sessions_doctor; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: public.sessions_users; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: public.users; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Name: public.appointments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."public.appointments_id_seq"', 1, false);


--
-- Name: public.doctors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."public.doctors_id_seq"', 1, false);


--
-- Name: public.sessions_doctor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."public.sessions_doctor_id_seq"', 1, false);


--
-- Name: public.sessions_users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."public.sessions_users_id_seq"', 1, false);


--
-- Name: public.users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."public.users_id_seq"', 1, false);


--
-- Name: public.appointments appointments_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."public.appointments"
    ADD CONSTRAINT appointments_pk PRIMARY KEY (id);


--
-- Name: public.doctors doctors_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."public.doctors"
    ADD CONSTRAINT doctors_pk PRIMARY KEY (id);


--
-- Name: public.doctors public.doctors_cmr_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."public.doctors"
    ADD CONSTRAINT "public.doctors_cmr_key" UNIQUE (cmr);


--
-- Name: public.sessions_doctor public.sessions_doctor_token_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."public.sessions_doctor"
    ADD CONSTRAINT "public.sessions_doctor_token_key" UNIQUE (token);


--
-- Name: public.sessions_users public.sessions_users_token_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."public.sessions_users"
    ADD CONSTRAINT "public.sessions_users_token_key" UNIQUE (token);


--
-- Name: public.users public.users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."public.users"
    ADD CONSTRAINT "public.users_email_key" UNIQUE (email);


--
-- Name: public.sessions_doctor sessions_doctor_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."public.sessions_doctor"
    ADD CONSTRAINT sessions_doctor_pk PRIMARY KEY (id);


--
-- Name: public.sessions_users sessions_users_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."public.sessions_users"
    ADD CONSTRAINT sessions_users_pk PRIMARY KEY (id);


--
-- Name: public.users users_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."public.users"
    ADD CONSTRAINT users_pk PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--


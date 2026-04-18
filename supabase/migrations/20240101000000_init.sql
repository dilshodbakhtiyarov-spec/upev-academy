-- UPEV Academy — initial schema

create extension if not exists "pgcrypto";

-- Universities
create table if not exists universities (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  city text not null,
  description text,
  founded_year int,
  languages text[],
  tags text[],
  cover_image text,
  gallery_images text[],
  created_at timestamptz default now()
);

-- Faculties
create table if not exists faculties (
  id uuid default gen_random_uuid() primary key,
  university_id uuid references universities(id) on delete cascade,
  name text not null,
  program text check (program in ('bachelor', 'master', 'associate')),
  language text,
  price_per_year int,
  created_at timestamptz default now()
);

-- Applications
create table if not exists applications (
  id uuid default gen_random_uuid() primary key,
  university_id uuid references universities(id),
  faculty_id uuid references faculties(id),
  program text,
  full_name text not null,
  father_name text,
  mother_name text,
  country text,
  phone text not null,
  status text default 'new',
  created_at timestamptz default now()
);

-- Application documents
create table if not exists application_docs (
  id uuid default gen_random_uuid() primary key,
  application_id uuid references applications(id) on delete cascade,
  doc_type text,
  file_url text not null,
  created_at timestamptz default now()
);

-- Indexes
create index if not exists idx_faculties_university on faculties(university_id);
create index if not exists idx_applications_university on applications(university_id);
create index if not exists idx_application_docs_application on application_docs(application_id);

-- RLS: read-only public access for universities and faculties
alter table universities enable row level security;
alter table faculties enable row level security;
alter table applications enable row level security;
alter table application_docs enable row level security;

create policy "Public can read universities"
  on universities for select using (true);

create policy "Public can read faculties"
  on faculties for select using (true);

create policy "Public can insert applications"
  on applications for insert with check (true);

create policy "Public can insert docs"
  on application_docs for insert with check (true);

-- Storage bucket for documents (run separately in Supabase dashboard or via API)
-- insert into storage.buckets (id, name, public) values ('documents', 'documents', true);

-- Seed: sample data for development
insert into universities (name, city, description, founded_year, languages, tags, cover_image)
values
  (
    'Istanbul Aydin University',
    'Стамбул',
    'Один из ведущих частных университетов Стамбула с более чем 60 программами на английском и турецком языках. Активный участник программы Erasmus+.',
    2007,
    array['EN', 'TR'],
    array['Erasmus+', 'Топ-10'],
    null
  ),
  (
    'Bahcesehir University',
    'Стамбул',
    'Международный университет с кампусами в Стамбуле, Берлине и Вашингтоне. Сильные программы по IT, дизайну и бизнесу.',
    1998,
    array['EN', 'TR'],
    array['Erasmus+', 'Международный'],
    null
  ),
  (
    'Antalya Bilim University',
    'Анталья',
    'Молодой динамичный университет на берегу Средиземного моря. Обучение полностью на английском языке.',
    2012,
    array['EN'],
    array['English only'],
    null
  ),
  (
    'Atilim University',
    'Анкара',
    'Технический университет с акцентом на инженерные специальности. Один из лидеров Анкары по качеству обучения.',
    1997,
    array['EN', 'TR'],
    array['Erasmus+', 'Технический'],
    null
  );

insert into faculties (university_id, name, program, language, price_per_year)
select
  u.id,
  f.name,
  f.program::text,
  f.language,
  f.price
from universities u
cross join (
  values
    ('Компьютерные науки', 'bachelor', 'EN', 6000),
    ('Международный бизнес', 'bachelor', 'EN', 5500),
    ('Психология', 'bachelor', 'TR', 3500),
    ('Архитектура', 'bachelor', 'TR', 4000),
    ('MBA', 'master', 'EN', 8000),
    ('Информационные технологии', 'master', 'EN', 7500)
) as f(name, program, language, price)
where u.name = 'Istanbul Aydin University';

insert into faculties (university_id, name, program, language, price_per_year)
select
  u.id,
  f.name,
  f.program::text,
  f.language,
  f.price
from universities u
cross join (
  values
    ('Графический дизайн', 'bachelor', 'EN', 7000),
    ('Право', 'bachelor', 'TR', 5000),
    ('Бизнес-информатика', 'bachelor', 'EN', 6500),
    ('Медиа и коммуникации', 'associate', 'TR', 2500),
    ('MBA', 'master', 'EN', 9000)
) as f(name, program, language, price)
where u.name = 'Bahcesehir University';

insert into faculties (university_id, name, program, language, price_per_year)
select
  u.id,
  f.name,
  f.program::text,
  f.language,
  f.price
from universities u
cross join (
  values
    ('Туризм и гостиничный бизнес', 'bachelor', 'EN', 4500),
    ('Международные отношения', 'bachelor', 'EN', 4500),
    ('Компьютерные науки', 'bachelor', 'EN', 5000)
) as f(name, program, language, price)
where u.name = 'Antalya Bilim University';

insert into faculties (university_id, name, program, language, price_per_year)
select
  u.id,
  f.name,
  f.program::text,
  f.language,
  f.price
from universities u
cross join (
  values
    ('Промышленная инженерия', 'bachelor', 'EN', 5500),
    ('Электроника и коммуникации', 'bachelor', 'EN', 5500),
    ('Машиностроение', 'bachelor', 'TR', 4000),
    ('Менеджмент', 'master', 'EN', 7000)
) as f(name, program, language, price)
where u.name = 'Atilim University';

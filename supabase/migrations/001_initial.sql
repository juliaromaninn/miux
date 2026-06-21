-- ============================================================
-- MIUX — Schema inicial
-- ============================================================

-- Leads captados na landing page
create table if not exists leads (
  id            uuid primary key default gen_random_uuid(),
  name          text not null,
  email         text not null unique,
  role          text,
  company       text,
  wants_interview boolean not null default false,
  utm_source    text,
  utm_medium    text,
  utm_campaign  text,
  created_at    timestamptz not null default now()
);

-- Feedbacks sobre o framework
create table if not exists feedbacks (
  id               uuid primary key default gen_random_uuid(),
  lead_id          uuid references leads(id) on delete set null,
  rating           smallint not null check (rating between 1 and 5),
  clarity_score    smallint not null check (clarity_score between 1 and 5),
  usefulness_score smallint not null check (usefulness_score between 1 and 5),
  comment          text,
  would_pay        boolean not null default false,
  created_at       timestamptz not null default now()
);

-- Registro de acesso ao template
create table if not exists template_accesses (
  id          uuid primary key default gen_random_uuid(),
  lead_id     uuid not null references leads(id) on delete cascade,
  accessed_at timestamptz not null default now()
);

-- ============================================================
-- Row Level Security
-- ============================================================

alter table leads enable row level security;
alter table feedbacks enable row level security;
alter table template_accesses enable row level security;

-- Qualquer pessoa pode inserir um lead (captação pública)
drop policy if exists "leads_insert_public" on leads;
create policy "leads_insert_public"
  on leads for insert
  to anon, authenticated
  with check (true);

-- Apenas autenticados (admin) podem ler leads
drop policy if exists "leads_select_admin" on leads;
create policy "leads_select_admin"
  on leads for select
  to authenticated
  using (true);

-- Qualquer pessoa pode inserir feedback
drop policy if exists "feedbacks_insert_public" on feedbacks;
create policy "feedbacks_insert_public"
  on feedbacks for insert
  to anon, authenticated
  with check (true);

-- Apenas autenticados (admin) podem ler feedbacks
drop policy if exists "feedbacks_select_admin" on feedbacks;
create policy "feedbacks_select_admin"
  on feedbacks for select
  to authenticated
  using (true);

-- template_accesses: só via service role (API server-side)
-- anon não acessa diretamente
drop policy if exists "template_accesses_select_admin" on template_accesses;
create policy "template_accesses_select_admin"
  on template_accesses for select
  to authenticated
  using (true);

-- ============================================================
-- Índices
-- ============================================================

create index if not exists leads_email_idx on leads(email);
create index if not exists leads_created_at_idx on leads(created_at desc);
create index if not exists leads_wants_interview_idx on leads(wants_interview) where wants_interview = true;
create index if not exists feedbacks_lead_id_idx on feedbacks(lead_id);
create index if not exists template_accesses_lead_id_idx on template_accesses(lead_id);

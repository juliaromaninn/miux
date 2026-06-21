-- Campos adicionais para perfil do lead (coleta de dados qualitativos)
alter table leads add column if not exists experience_years text;
alter table leads add column if not exists biggest_challenge text;

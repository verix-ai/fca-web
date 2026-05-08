import { supabase } from './supabase';

export interface ResolvedMarketer {
  id: string;
  name: string;
  organization_id: string;
}

export async function getMarketerBySlug(slug: string): Promise<ResolvedMarketer | null> {
  const { data, error } = await supabase.rpc('get_marketer_by_slug', { p_slug: slug });
  if (error) {
    // eslint-disable-next-line no-console
    console.error('get_marketer_by_slug failed', error);
    return null;
  }
  const row = Array.isArray(data) ? data[0] : data;
  return row ?? null;
}
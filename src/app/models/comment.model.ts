export interface Comment {
  _id?: string;
  texte: string;
  date?: Date;
  utilisateur_id: string;
  tache_id: string;
  updated_at?: Date;
}

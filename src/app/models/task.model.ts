export interface Task {
    _id?: string;
    titre: string;
    description?: string;
    date_echeance?: Date;
    priorite: string;
    statut: 'en cours' | 'terminé';
    utilisateur_id: string;
    categorie_id: string;
    created_at?: Date;
    updated_at?: Date;
  }
  
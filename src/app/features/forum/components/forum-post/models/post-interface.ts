// src/app/forum-post/models/post-interface.ts (o donde la tengas)
export interface Post {
    // Identificación y Propiedades
    id: string; // Se genera como string en addPost
    title: string;
    content: string;
    
    // Metadatos
    tags: string[];
    likes: number;
    commentsCount: number; // Para mostrar el conteo rápidamente
    isLiked: boolean; // Estado de 'Me gusta' del usuario actual
    createdAt: Date; // Usamos Date, aunque es mejor que venga como string del backend y se convierta
    
    // Relaciones
    author: Author;
    comments: PostComment[]; // Lista anidada de comentarios
}

export interface Author {
    name: string;
    avatar?: string; // Es opcional (undefined) en el mock
}

export interface PostComment { 
    id: string;
    author: Author;
    content: string;
    createdAt: Date;
}

export interface CreatePostRequest {
    title: string;
    content: string;
    tags: string[];
}


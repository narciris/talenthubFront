import { Injectable, signal } from "@angular/core";
import { CreatePostRequest, Post, PostComment } from "../../forum-post/models/post-interface";

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  private postsSignal = signal<Post[]>(this.getMockPosts());

  posts = this.postsSignal.asReadonly();

  addPost(request: CreatePostRequest): void {
    const newPost: Post = {
      id: (this.postsSignal().length + 1).toString(),
      author: {
        name: 'Juan Desarrollador',
        avatar: undefined
      },
      title: request.title,
      content: request.content,
      tags: request.tags,
      likes: 0,
      commentsCount: 0,
      comments: [],
      createdAt: new Date(),
      isLiked: false
    };

    this.postsSignal.update(posts => [newPost, ...posts]);
  }

  toggleLike(postId: string): void {
    this.postsSignal.update(posts =>
      posts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            isLiked: !post.isLiked,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1
          };
        }
        return post;
      })
    );
  }

  addComment(postId: string, content: string): void {
    const newComment: PostComment = {
      id: Date.now().toString(),
      author: {
        name: 'Juan Desarrollador'
      },
      content,
      createdAt: new Date()
    };

    this.postsSignal.update(posts =>
      posts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [...post.comments, newComment],
            commentsCount: post.commentsCount + 1
          };
        }
        return post;
      })
    );
  }

  private getMockPosts(): Post[] {
    return [
      {
        id: '1',
        author: {
          name: 'Administrador',
          avatar: undefined
        },
        title: 'Tips para entrevistas técnicas exitosas',
        content: 'Después de 5 años en el sector tech, quiero compartir algunos consejos que me han ayudado en entrevistas técnicas. Primero, siempre practica algoritmos básicos. Segundo, prepara preguntas sobre la empresa. Tercero, mantén la calma y piensa en voz alta durante la resolución de problemas.',
        tags: ['entrevistas', 'consejos', 'tech'],
        likes: 12,
        commentsCount: 2,
        comments: [
          {
            id: '1',
            author: { name: 'María González' },
            content: '¡Excelentes consejos! Me ayudaron mucho en mi última entrevista.',
            createdAt: new Date(Date.now() - 3600000)
          },
          {
            id: '2',
            author: { name: 'Carlos Ruiz' },
            content: 'Totalmente de acuerdo con el punto de pensar en voz alta.',
            createdAt: new Date(Date.now() - 1800000)
          }
        ],
        createdAt: new Date(Date.now() - 7200000),
        isLiked: false
      },
      {
        id: '2',
        author: {
          name: 'Administrador',
          avatar: undefined
        },
        title: 'Tendencias en desarrollo web 2024',
        content: 'Este año hemos visto grandes cambios en el desarrollo web. React sigue dominando, pero frameworks como Svelte están ganando terreno. También vemos un aumento en el uso de TypeScript y herramientas de build más rápidas como Vite.',
        tags: ['desarrollo', 'web', 'tendencias'],
        likes: 8,
        commentsCount: 2,
        comments: [
          {
            id: '3',
            author: { name: 'Ana López' },
            content: 'Me parece muy interesante el tema de Svelte, ¿has trabajado con él?',
            createdAt: new Date(Date.now() - 7200000)
          },
          {
            id: '4',
            author: { name: 'Pedro Martín' },
            content: 'TypeScript es el futuro definitivamente. Gran artículo!',
            createdAt: new Date(Date.now() - 3600000)
          }
        ],
        createdAt: new Date(Date.now() - 14400000),
        isLiked: true
      }
    ];
  }
}


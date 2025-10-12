import { CommonModule } from '@angular/common';
import { Component, inject, Input, signal } from '@angular/core';
import { ForumService } from '../forum-list/services/forum.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Post } from './models/post-interface';


@Component({
  selector: 'app-forum-post',
  imports: [CommonModule, FormsModule],
  templateUrl: './forum-post.component.html',
  styleUrl: './forum-post.component.css'
})
export class ForumPostComponent {

   // Usamos @Input con requerimiento
  @Input({ required: true }) post!: Post;
  
  // Inyección de dependencias moderna con inject()
  private forumService = inject(ForumService);
  
  // Estado para el input de comentario usando signal()
  commentText = signal('');

  ngOnInit(): void {
    // Aquí puedes inicializar o cargar datos si fuera necesario
  }

  // >>> GETTER REQUERIDO POR EL TEMPLATE <<<
  /**
   * Genera las iniciales del autor a partir de su nombre.
   * La lógica se mueve aquí para evitar errores del parser en el HTML.
   * Ejemplo: "Juan Desarrollador" -> "JD"
   */
  get authorInitials(): string {
    // Verificamos que el post y el autor existan antes de acceder a .name
    if (this.post && this.post.author && this.post.author.name) {
      return this.post.author.name
        .split(' ')
        .map(n => n[0])
        .join('');
    }
    return '??'; // Valor por defecto si falta el nombre
  }
  
  /**
   * Calcula el tiempo transcurrido desde la fecha de creación.
   */
  getTimeAgo(date: Date): string {
    const seconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);
    
    if (seconds < 60) return 'ahora';
    if (seconds < 3600) return `hace ${Math.floor(seconds / 60)} min`;
    if (seconds < 86400) return `hace ${Math.floor(seconds / 3600)} horas`;
    return `hace ${Math.floor(seconds / 86400)} días`;
  }

  /**
   * Llama al servicio para alternar el estado de "Me gusta" (like) del post.
   */
  toggleLike(): void {
    // Aquí asumimos que el error de tipado de this.post.id (string | number)
    // ha sido resuelto en la interfaz Post y el servicio ForumService.
    this.forumService.toggleLike(this.post.id);
  }

  /**
   * Agrega un nuevo comentario al post.
   */
  addComment(): void {
    // Accedemos al valor del signal con ()
    const text = this.commentText().trim();
    if (text) {
      this.forumService.addComment(this.post.id, text);
      // Reseteamos el signal después de agregar el comentario
      this.commentText.set(''); 
    }
  }

}

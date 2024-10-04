import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../core/models/user.model';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() userId: number | null = null;
  user: User = { id: 0, nombre: '', email: '', contrasena: '' }; // Inicializa el objeto usuario

  ngOnInit(): void {
    if (this.userId) {
      this.getUser(this.userId);
    }
  }

  getUser(id: number): void {
    // Simulando la búsqueda de un usuario
    if (id === 1) {
      this.user = { id: 1, nombre: 'Juan', email: 'juan@example.com', contrasena: '' };
    } else if (id === 2) {
      this.user = { id: 2, nombre: 'Maria', email: 'maria@example.com', contrasena: '' };
    }
  }

  saveUser(): void {
    
    console.log(this.user);
  }
}

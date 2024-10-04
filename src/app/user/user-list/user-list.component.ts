import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../../core/models/user.model';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = []; // Inicializa como un array vacío
  selectedUserId: number | null = null; // Inicializa como null
  newUser: User = { id: 0, nombre: '', email: '', contrasena: '' }; // Inicializa para agregar un nuevo usuario

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    // Simulando datos para el ejemplo
    this.users = [
      { id: 1, nombre: 'Juan', email: 'juan@example.com', contrasena: '' },
      { id: 2, nombre: 'Maria', email: 'maria@example.com', contrasena: '' }
    ];
  }

  saveUser(): void {
    if (this.selectedUserId) {
      // Actualizar usuario existente
      const index = this.users.findIndex(user => user.id === this.selectedUserId);
      if (index !== -1) {
        this.users[index] = { ...this.newUser, id: this.selectedUserId }; // Actualiza el usuario
      }
    } else {
      // Crear nuevo usuario
      const newId = this.users.length + 1; // Generar un nuevo ID simple
      this.users.push({ ...this.newUser, id: newId });
    }
    
    // Resetear el formulario
    this.newUser = { id: 0, nombre: '', email: '', contrasena: '' }; // Reinicia el nuevo usuario
    this.selectedUserId = null; // Reinicia la selección del usuario
  }

  selectUser(id: number): void {
    this.selectedUserId = id;
    const user = this.users.find(user => user.id === id);
    if (user) {
      this.newUser = { ...user }; // Cargar los datos del usuario seleccionado en el formulario
    }
  }

  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }
}

import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  usuarios = [{nome: 'Test'}];
  selectedUsuario;

  constructor(private api: ApiService){
    this.getUsuarios();
    this.selectedUsuario = {id: -1, nome: '', email: '', dataCadastro: '', ativo: false};
  }
  getUsuarios = () => {
    this.api.getAllUsuarios().subscribe(
      data => {
        this.usuarios = data;
      },
      error => {
        console.log(error);
      }      
    );
  }

  usuarioClicked = (usuario) => {
    this.api.getOneUsuarios(usuario.id).subscribe(
      data => {
        this.selectedUsuario = data;
      },
      error => {
        console.log(error);
      }      
    );
  }

  updateUsuario = () => {
    this.api.updateUsuario(this.selectedUsuario).subscribe(
      data => {
        this.getUsuarios();
      },
      error => {
        console.log(error);
      }      
    );
  }  

  createUsuario = () => {
    this.api.createUsuario(this.selectedUsuario).subscribe(
      data => {
        this.usuarios.push(data);
      },
      error => {
        console.log(error);
      }      
    );
  }

  deleteUsuario = () => {
    this.api.deleteUsuario(this.selectedUsuario.id).subscribe(
      data => {
        this.getUsuarios();
      },
      error => {
        console.log(error);
      }      
    );
  }

  limparUsuario = () => {
    this.selectedUsuario = {id: -1, nome: '', email: '', dataCadastro: '', ativo: false};
  }
}

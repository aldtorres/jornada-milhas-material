import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from "./components/header/header.component";
import { BannerComponent } from "./components/banner/banner.component";
import { FormBuscaPassagensComponent } from "./components/form-busca-passagens/form-busca-passagens.component";

@Component({
  selector: 'app-root',
  imports: [MatButtonModule, HeaderComponent, BannerComponent, FormBuscaPassagensComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'jornada-milhas-material';
}

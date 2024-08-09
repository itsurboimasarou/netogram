import { Component } from '@angular/core';
import {
    MatAnchor,
    MatButton,
    MatFabAnchor,
    MatFabButton,
    MatIconButton,
    MatMiniFabButton
} from "@angular/material/button";
import {MatDivider} from "@angular/material/divider";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
    imports: [
        MatAnchor,
        MatButton,
        MatDivider,
        MatFabAnchor,
        MatFabButton,
        MatIcon,
        MatIconButton,
        MatMiniFabButton,
        RouterLink
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}

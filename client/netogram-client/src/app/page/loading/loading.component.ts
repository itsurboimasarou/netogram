import {Component, OnInit} from '@angular/core';
import {MaterialModule} from "../../shared/material.module";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {ProfileState} from "../../ngrx/profile/profile.state";
import {AuthState} from "../../ngrx/auth/auth.state";

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent implements OnInit{
  constructor(
    private router: Router,
    private store: Store<{
      profile: ProfileState;
      auth: AuthState;
    }>,
  ) {}

  isGetMineSuccess$ = this.store.select('profile', 'isGetMineSuccess');

  ngOnInit(): void {
    this.isGetMineSuccess$.subscribe((mine) => {
      if (mine) {
        this.router.navigate(['/home']);
      } else {
        this.router.navigate(['/register']);
      }
    });

    setTimeout(() => {}, 2000);
  }
}

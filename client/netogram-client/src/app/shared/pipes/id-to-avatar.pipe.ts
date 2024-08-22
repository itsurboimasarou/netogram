import { Pipe, PipeTransform } from '@angular/core';
import { ProfileModel } from '../../models/profile.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProfileService } from '../../services/profile/profile.service';

@Pipe({
  name: 'idToAvatar',
  standalone: true,
})
export class IdToAvatarPipe implements PipeTransform {
  constructor(private profileService: ProfileService) {}

  transform(uid: string): Observable<string> {
    return this.profileService.getById(uid).pipe(
      map((profile: ProfileModel) => {
        return profile.avatarUrl;
      }),
    );
  }
}

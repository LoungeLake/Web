import { Component, Input } from '@angular/core';
import { Profile } from 'src/app/data/profile';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @Input('profile') profile: Profile
}
